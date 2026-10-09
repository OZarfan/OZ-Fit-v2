import {useState, type Dispatch, type SetStateAction} from 'react';

// Temporary editor state belongs to a profile ID, not the latest profile object.
// A setter captures its owner so an outstanding file read cannot update another
// profile after a switch. These drafts never enter the persisted account schema.
export function useProfileDraft<T>(ownerId:string, initial:T|(()=>T)):[T,Dispatch<SetStateAction<T>>] {
  const [empty] = useState(initial);
  const [drafts,setDrafts] = useState(()=>new Map<string,T>());
  const value = drafts.has(ownerId) ? drafts.get(ownerId)! : empty;
  const setValue:Dispatch<SetStateAction<T>> = update => setDrafts(previous => {
    const current = previous.has(ownerId) ? previous.get(ownerId)! : empty;
    const next = typeof update === 'function' ? (update as (value:T)=>T)(current) : update;
    if(Object.is(current,next)) return previous;
    return new Map(previous).set(ownerId,next);
  });
  return [value,setValue];
}
