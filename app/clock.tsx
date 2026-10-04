import React,{useEffect,useLayoutEffect,useRef,useState} from 'react';
import {localDate} from '@/lib/fitness';

// Check foreground deadlines without putting every clock tick in the app's state.
// The committed callback always sees current language, sound, session and rest data.
export function useClockEvents(callback:(now:number)=>void){
  const latest=useRef(callback);
  useLayoutEffect(()=>{latest.current=callback},[callback]);
  useEffect(()=>{const id=setInterval(()=>latest.current(Date.now()),500);return()=>clearInterval(id)},[]);
}

// Calendar summaries change at midnight. Comeback uses elapsed 24-hour days,
// so its exact deadline can shift away from noon across daylight-saving changes.
export function calendarChanged(previous:number,now:number,deadline:number|null){
  return localDate(new Date(previous))!==localDate(new Date(now))||
    (deadline!==null&&(previous>=deadline)!==(now>=deadline));
}

export function TimerText({time,countdown=false}:{time:number;countdown?:boolean}){
  const [now,setNow]=useState(Date.now);
  useClockEvents(setNow);
  const seconds=Math.max(0,(countdown?time-now:now-time)/1000);
  return <>{`${Math.floor(seconds/60).toString().padStart(2,'0')}:${Math.floor(seconds%60).toString().padStart(2,'0')}`}</>;
}
