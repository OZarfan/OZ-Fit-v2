import fs from 'node:fs';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const {build}=await import(process.env.OZ_ESBUILD||'esbuild');
async function fitness(before=false){
 const r=await build({entryPoints:['lib/fitness.ts'],bundle:true,write:false,platform:'node',format:'cjs',plugins:before?[{name:'batch4-reference',setup(b){b.onLoad({filter:/[/\\]fitness\.ts$/},()=>({contents:execFileSync('git',['show','866d444:lib/fitness.ts'],{encoding:'utf8'}),loader:'ts'}))}}]:[]});
 const module={exports:{}};new Function('module','exports',r.outputFiles[0].text)(module,module.exports);return module.exports;
}
const before=await fitness(true),after=await fitness(),copy=v=>JSON.parse(JSON.stringify(v));
const fixture=JSON.parse(fs.readFileSync('tests/fixture.json','utf8')).data.profiles[0],p=fixture.profile;
const results=[];const check=(name,fn)=>{fn();results.push({name,status:'passed'});console.log('PASS',name)};
const profiles=[];
for(const split of Object.keys(after.splits))for(const goal of Object.keys(after.goals))for(const stage of [0,1,2])profiles.push({...p,split,goal,stage});
for(const changes of [
 {days:[6,1],weekStartsOn:1,dayMinutes:{6:30,1:60}}, {days:[0,1,2,3,4],split:'upper'}, {days:[1,3,5],split:'bro'},
 {secondaryGoals:['loss','mobility'],priority:'back'}, {equipment:['body']}, {urgentSymptoms:true},
 ...['none','unknown','medical','injury'].map(health=>({health})),
 ...['active','improving','recovered'].flatMap(status=>[false,true].map(reviewed=>({injuries:[{area:'knee',status,reviewed,reportedAt:'',history:[]}]}))),
 {preferredExerciseIds:['Machine_Bench_Press']}, {dislikedExerciseIds:['Machine_Bench_Press']},
 {gyms:[{id:'exact',equipment:['machine'],exact:true,exerciseIds:['Machine_Bench_Press']}],activeGymId:'exact'},
 {gyms:[{id:'eq',equipment:['cable','body'],exact:false,exerciseIds:[]}],activeGymId:'eq'}
])profiles.push({...p,...changes});
check(`${profiles.length} representative plans exactly match Batch 4`,()=>{for(const profile of profiles)assert.deepEqual(after.makePlan(profile),before.makePlan(profile))});
check('Plan keys track all planner inputs and ignore unrelated profile/gym metadata',()=>{
 const key=after.planInputKey(p);
 const unrelated={...p,name:'Changed',weight:91,age:42,nutritionEnabled:!p.nutritionEnabled,remindersEnabled:true,reminderTime:'12:20',upperIncrement:2,planHistory:[],comebackDismissed:'2026-10-04'};
 assert.equal(after.planInputKey(unrelated),key);
 const gym={id:'g',name:'One',equipment:['cable'],exact:true,exerciseIds:['Cable_Cross_Over'],bars:[20],plates:[]};
 assert.equal(after.planInputKey({...p,gyms:[gym],activeGymId:'g'}),after.planInputKey({...p,gyms:[{...gym,name:'Two',bars:[10],plates:[{kg:2.5,pairs:2}]}],activeGymId:'g'}));
 const mutations={split:'ppl',days:[1,4],weekStartsOn:2,dayMinutes:{[p.days[0]]:100},minutes:100,goal:'endurance',secondaryGoals:['mobility'],priority:'arms',stage:2,health:'unknown',urgentSymptoms:true,injuries:[{area:'knee',status:'active',reviewed:false}],equipment:['body'],preferredExerciseIds:['x'],dislikedExerciseIds:['x']};
 for(const [field,value]of Object.entries(mutations)){const q={...p,[field]:value};if(JSON.stringify(p[field])!==JSON.stringify(value))assert.notEqual(after.planInputKey(q),key,field)}
 const byKey=new Map();for(const q of profiles){const k=after.planInputKey(q),plan=after.makePlan(q);if(byKey.has(k))assert.deepEqual(plan,byKey.get(k));else byKey.set(k,plan)}
});
const ids=[...new Set([fixture.sessions[0].sets[0].exId,...['body','stack','total'].map(unit=>after.exercises.find(e=>e.unit===unit&&e.mode==='reps'&&!e.assisted)?.id),after.exercises.find(e=>e.mode==='seconds')?.id,after.exercises.find(e=>e.assisted)?.id,'unknown-historical-id'].filter(Boolean))];
function history(count){return Array.from({length:Math.ceil(count/25)},(_,si)=>({...copy(fixture.sessions[si%fixture.sessions.length]),id:'history-'+si,date:`2026-09-${String(28-si%25).padStart(2,'0')}`,finishedAt:si%5?fixture.sessions[0].finishedAt:null,gymId:si%3?'a':'b',sets:Array.from({length:Math.min(25,count-si*25)},(_,xi)=>{const i=si*25+xi;return {id:'set-'+i,slotKey:'slot',exId:ids[i%ids.length],gymId:['','a','b'][i%3],weight:[0,20,20,25,30][Math.floor(i/3)%5],reps:[8,12,13,10,12,15][Math.floor(i/7)%6],rir:i%4,at:'2026-09-01T12:00:00Z'}})}))}
let previousEntries=0;
function legacyBadges(sessions){return sessions.flatMap((s,si)=>s.sets.flatMap((x,xi)=>{const previous=[...sessions.slice(0,si).flatMap(a=>a.sets),...s.sets.slice(0,xi)];previousEntries+=previous.length;return before.prTypes(x,previous).filter(kind=>kind!=='baseline').map(kind=>({kind,id:x.id,exId:x.exId,date:s.date}))}))}
check('PR history preserves ties, baseline, gyms, unknown/assisted/bodyweight/hold exercises, >12 reps and stored order',()=>{for(const sessions of [[],fixture.sessions,history(1),history(250),history(2000)])assert.deepEqual(after.prHistory(sessions),legacyBadges(sessions))});
check('Progress trends, volume, adherence and load advice match Batch 4',()=>{
 for(const sessions of [[],fixture.sessions,history(250)])for(const gymId of ['','a','b']){
  const b={...fixture,sessions,profile:{...p,activeGymId:gymId,gyms:gymId?[{id:gymId,equipment:['machine']}]:[]}};
  for(const id of ids){assert.deepEqual(after.exerciseTrend(b,id),before.exerciseTrend(b,id));assert.deepEqual(after.loadAdvice(id,b),before.loadAdvice(id,b))}
  for(const date of [new Date('2026-09-15T12:00:00'),new Date('2026-10-04T12:00:00')]){assert.deepEqual(after.weeklyVolume(b,date),before.weeklyVolume(b,date));assert.deepEqual(after.adherence(b,date),before.adherence(b,date))}
 }
});
check('Extracted comeback deadline preserves the old elapsed-time rule and dismissal',()=>{
 const previousTZ=process.env.TZ;
 try{for(const zone of ['UTC','America/New_York','Australia/Lord_Howe']){
  process.env.TZ=zone;
  for(const date of ['2026-03-03','2026-10-27','2026-09-29','2026-03-31']){
   const b={...copy(fixture),profile:{...p,days:[0,1,2,3,4,5],comebackDismissed:''},sessions:[{...copy(fixture.sessions[0]),date}]};
   const deadline=after.comebackDeadline(b);assert.notEqual(deadline,null);
   for(const delta of [-1,0,1])for(const dismissed of [false,true]){const now=new Date(deadline+delta);b.profile.comebackDismissed=dismissed?after.localDate(now):'';assert.equal(after.comebackDue(b,now),before.comebackDue(b,now))}
  }
 }}finally{if(previousTZ===undefined)delete process.env.TZ;else process.env.TZ=previousTZ}
 assert.equal(after.comebackDeadline({...fixture,sessions:[]}),null);
});
// Count actual set reads on the optimized pass, not a wall-time benchmark.
const large=history(2000);previousEntries=0;legacyBadges(large);let setReads=0;
const tracked=large.map(s=>({...s,sets:new Proxy(s.sets,{get(target,key){if(/^\d+$/.test(String(key)))setReads++;return Reflect.get(target,key)}})}));
after.prHistory(tracked);
check('Historical PR processing visits each set once',()=>assert.equal(setReads,2000));
const measurements={sets:2000,beforePreviousEntries:previousEntries,afterSetReads:setReads};
fs.writeFileSync('tests/batch5-derived-results.json',JSON.stringify({reference:'866d444 (completed Batch 4)',measurements,results},null,2));console.log(measurements);
