// Test-only instrumentation; no counters or fake clocks enter the production bundle.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {createRequire} from 'node:module';
const {build}=await import(process.env.OZ_ESBUILD||'esbuild');
const {JSDOM,VirtualConsole}=createRequire(import.meta.url)(process.env.OZ_JSDOM||'jsdom');

const root=process.cwd(), baseline=process.argv.includes('--baseline');
const cache=path.join(root,'.cache/batch5');fs.mkdirSync(cache,{recursive:true});
// Reproducible comparison against the completed Batch 4 commit, using today's same fixture.
const baselineRef='866d444';
const readSource=file=>baseline?execFileSync('git',['show',baselineRef+':'+path.relative(root,file).replaceAll('\\','/')],{encoding:'utf8'}):fs.readFileSync(file,'utf8');
if(!baseline)execFileSync(process.execPath,[import.meta.filename,'--baseline'],{stdio:'pipe'});
const counter=name=>`globalThis.__counts.${name}=(globalThis.__counts.${name}||0)+1;`;
const bundle=await build({entryPoints:['entry.tsx'],bundle:true,write:false,format:'iife',platform:'browser',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},plugins:[{name:'measurement',setup(b){
  b.onLoad({filter:/[/\\](oz-fit|progress)\.tsx$/},async({path:file})=>{
    let contents=readSource(file);
    contents=contents.replace('function OzFit(){',`function OzFit(){${counter('root')}`);
    if(path.basename(file)==='progress.tsx')contents=contents.replace('const t=(a:string,e:string)=>words(lang,a,e),li=',`${counter('progress')}const t=(a:string,e:string)=>words(lang,a,e),li=`);
    return {contents,loader:'tsx'};
  });
  b.onLoad({filter:/[/\\]fitness\.ts$/},async({path:file})=>{
    let contents=readSource(file);
    for(const name of ['makePlan','exerciseTrend','weeklyVolume','adherence','loadAdvice','prHistory']){
      contents=contents.replace(new RegExp(`(export function ${name}\\([^\\n]*?\\)(?::[^\\n{]+)?\\{)`),`$1${counter(name)}`);
    }
    contents=contents.replace('export function prTypes(s:LoggedSet,previous:LoggedSet[]){',`export function prTypes(s:LoggedSet,previous:LoggedSet[]){${counter('prTypes')}globalThis.__counts.previousEntries=(globalThis.__counts.previousEntries||0)+previous.length;`);
    return {contents,loader:'ts'};
  });
  b.onLoad({filter:/[/\\]asset\.ts$/},()=>({contents:'export const asset=(path:string)=>path;',loader:'ts'}));
}}]});
const html='<div id="root"></div><script>'+bundle.outputFiles[0].text.replace(/<\/script/gi,'<\\/script')+'</script>';
const fixture=JSON.parse(fs.readFileSync('tests/fixture.json','utf8'));
const copy=v=>JSON.parse(JSON.stringify(v)),wait=()=>new Promise(r=>setTimeout(r,25));
const results=[];const check=(name,fn)=>{fn();results.push({name,status:'passed'});console.log('PASS',name)};
async function boot(data,lang='en',time=new Date(2026,9,4,10).getTime()){
 const errors=[],intervals=new Map();let seq=0;
 const vc=new VirtualConsole();vc.on('jsdomError',e=>errors.push(e.message));vc.on('error',e=>errors.push(String(e)));
 const dom=new JSDOM(html,{url:'https://batch5.invalid',runScripts:'dangerously',pretendToBeVisual:true,virtualConsole:vc,beforeParse(w){
  const RealDate=w.Date;w.Date=class extends RealDate{constructor(...args){super(...(args.length?args:[time]));}static now(){return time}};
  w.__counts={};w.__vibrations=0;w.navigator.vibrate=()=>{w.__vibrations++;return true};w.localStorage.setItem('oz-fit-html-state-v1',JSON.stringify(data));w.localStorage.setItem('oz-language',lang);
  w.setInterval=(fn,ms)=>{const id=++seq;intervals.set(id,{fn,ms});return id};w.clearInterval=id=>intervals.delete(id);
  w.matchMedia=()=>({matches:false,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}});
  w.ResizeObserver=class{observe(){}disconnect(){}};w.PointerEvent=w.MouseEvent;
  w.HTMLElement.prototype.scrollIntoView=function(){};w.HTMLElement.prototype.hasPointerCapture=()=>false;w.HTMLElement.prototype.releasePointerCapture=()=>{};w.HTMLElement.prototype.setPointerCapture=()=>{};
 }});await wait();await wait();
 const w=dom.window,doc=w.document;
 return {w,doc,errors,close:()=>w.close(),counts:()=>Object.fromEntries(['root','makePlan','progress','exerciseTrend','weeklyVolume','adherence','loadAdvice','prTypes','prHistory','previousEntries'].map(name=>[name,w.__counts[name]||0])),reset:()=>{w.__counts={}},tick:async(ms=500)=>{time+=ms;for(const {fn} of [...intervals.values()])fn();await wait()},time:()=>time};
}
function click(x,el){assert(el);el.dispatchEvent(new x.w.MouseEvent('click',{bubbles:true,cancelable:true}))}
function button(x,label){return [...x.doc.querySelectorAll('button')].find(b=>b.textContent.trim()===label)}
async function tab(x,label){const el=button(x,label);assert(el);el.dispatchEvent(new x.w.MouseEvent('mousedown',{bubbles:true,button:0}));click(x,el);await wait()}
function input(x,el,value){Object.getOwnPropertyDescriptor(x.w.HTMLInputElement.prototype,'value').set.call(el,value);el.dispatchEvent(new x.w.Event('input',{bubbles:true}));el.dispatchEvent(new x.w.Event('change',{bubbles:true}))}
const measurements={};
const data=copy(fixture);data.data.profiles[0].profile.remindersEnabled=false;
let x=await boot(data);
await tab(x,'Progress');
const progressBefore=x.doc.querySelector('[role=tabpanel][data-state=active]').innerHTML;
x.reset();for(let i=0;i<10;i++)await x.tick();measurements.progressTenTicks=x.counts();
check('Progress contents remain identical across ten clock ticks',()=>assert.equal(x.doc.querySelector('[role=tabpanel][data-state=active]').innerHTML,progressBefore));
if(baseline)fs.writeFileSync(path.join(cache,'progress.html'),progressBefore);
else check('Progress DOM equals pre-optimization output',()=>assert.equal(progressBefore,fs.readFileSync(path.join(cache,'progress.html'),'utf8')));
await tab(x,'Today');x.reset();
const search=x.doc.querySelector('.search-label input');
for(const value of ['a','ab','abc']){input(x,search,value);await wait()}
measurements.threeSearchEdits=x.counts();
check('No runtime errors in measured flow',()=>assert.deepEqual(x.errors,[]));x.close();

const activeData=copy(data),active=copy(activeData.data.profiles[0].sessions[0]);
const start=new Date(2026,9,4,10).getTime();
Object.assign(active,{id:'batch5-active',startedAt:new Date(start).toISOString(),finishedAt:null,sets:[],restState:{deadline:start+120000,totalSeconds:120},targetMinutes:45});
activeData.data.profiles[0].sessions.push(active);
x=await boot(activeData);const initialSession=x.doc.querySelector('.session-strip span').textContent;
x.reset();for(let i=0;i<10;i++)await x.tick();measurements.activeTenTicks=x.counts();
check('Session elapsed time and rest countdown advance five seconds',()=>{assert.notEqual(x.doc.querySelector('.session-strip span').textContent,initialSession);assert(x.doc.querySelector('.session-strip span').textContent.includes('00:05'));assert.equal(x.doc.querySelector('.floating-timer').textContent,'01:55')});
x.close();
if(!baseline){
 for(const key of ['progressTenTicks','activeTenTicks'])check(`${key}: zero app, plan or history work`,()=>{for(const name of ['root','makePlan','progress','prTypes','prHistory','exerciseTrend','weeklyVolume','adherence'])assert.equal(measurements[key][name]||0,0,name)});
 check('Search edits do not regenerate the plan',()=>assert.equal(measurements.threeSearchEdits.makePlan||0,0));

 x=await boot(data);await tab(x,'Plan');x.reset();click(x,x.doc.querySelector('#nutrition [role=checkbox]'));await wait();await wait();
 check('Unrelated nutrition persistence does not regenerate plan',()=>assert.equal(x.counts().makePlan||0,0));
 await tab(x,'Profile');x.reset();const preference=x.doc.querySelector('.preference-row select');preference.value='preferred';preference.dispatchEvent(new x.w.Event('change',{bubbles:true}));await wait();await wait();
 check('Planner preference persistence regenerates exactly once',()=>assert.equal(x.counts().makePlan,1));
 await tab(x,'Progress');x.reset();click(x,button(x,'العربية'));await wait();
 check('Language-only Progress render reuses all derived history',()=>{assert(x.doc.body.textContent.includes('تقدّمك'));for(const name of ['prHistory','exerciseTrend','weeklyVolume','adherence','loadAdvice'])assert.equal(x.counts()[name]||0,0,name)});x.close();

 const expiry=copy(activeData),session=expiry.data.profiles[0].sessions.at(-1);
 session.startedAt=new Date(start-59000).toISOString();session.targetMinutes=1;session.restState.deadline=start+2000;
 x=await boot(expiry);click(x,x.doc.querySelector('.floating-timer'));await wait();input(x,x.doc.querySelector('#log-weight'),'17');await wait();
 await x.tick(1000);
 check('Session target alerts once while rest remains active',()=>{assert.equal(x.w.__vibrations,1);assert(x.doc.querySelector('.notice').textContent.includes('Session time reached'));assert.equal(x.doc.querySelector('.rest-timer strong').textContent,'00:01')});
 click(x,button(x,'العربية'));await wait();await x.tick(1000);
 check('Rest expiry uses current language and preserves editable input',()=>{assert.equal(x.w.__vibrations,2);assert.equal(x.doc.querySelector('.rest-timer'),null);assert(!x.doc.querySelector('.log-dialog').classList.contains('resting'));assert(x.doc.querySelector('.notice').textContent.includes('الراحة خلصت'));assert.equal(x.doc.querySelector('#log-weight').value,'17')});
 await x.tick();check('Expired timers do not repeat alerts or mutate persisted rest deadline',()=>{assert.equal(x.w.__vibrations,2);assert.equal(JSON.parse(x.w.localStorage.getItem('oz-fit-html-state-v1')).data.profiles[0].sessions.at(-1).restState.deadline,start+2000)});x.close();

 const reminder=copy(data);Object.assign(reminder.data.profiles[0].profile,{days:[0,2,4],remindersEnabled:true,reminderTime:'10:01'});
 x=await boot(reminder);await x.tick(59000);check('Reminder waits until configured time',()=>assert.equal(x.doc.querySelector('.notice'),null));await x.tick(1000);
 check('Foreground reminder still fires at configured time',()=>assert(x.doc.querySelector('.notice').textContent.includes('a session is scheduled')));
 click(x,x.doc.querySelector('[aria-label="Dismiss message"]'));await wait();await x.tick();check('Dismissed reminder does not repeat',()=>assert.equal(x.doc.querySelector('.notice'),null));x.close();

 x=await boot(data,'en',new Date(2026,9,4,23,59,59).getTime());await tab(x,'Progress');x.reset();await x.tick(1000);
 check('Midnight refreshes calendar-derived Progress data without regenerating plan or PRs',()=>{assert.equal(x.counts().adherence,1);assert.equal(x.counts().weeklyVolume,1);assert.equal(x.counts().prHistory||0,0);assert.equal(x.counts().makePlan||0,0)});x.close();
 const comeback=copy(data),b=comeback.data.profiles[0];b.sessions=[b.sessions[0]];b.sessions[0].date='2026-09-29';b.profile.days=[0,1,2,3,4,5];b.profile.comebackDismissed='';
 x=await boot(comeback,'en',new Date(2026,9,4,11,59,59).getTime());assert.equal(x.doc.querySelector('.comeback'),null);await x.tick(1000);
 check('Noon refresh preserves the existing comeback threshold',()=>assert(x.doc.querySelector('.comeback')));x.close();
 const previousTZ=process.env.TZ;process.env.TZ='America/New_York';
 try{
  const dst=copy(comeback);dst.data.profiles[0].sessions[0].date='2026-03-03';
  x=await boot(dst,'en',new Date(2026,2,8,12,59,59).getTime());assert.equal(x.doc.querySelector('.comeback'),null);await x.tick(1000);
  check('DST crossing refreshes comeback at its exact 13:00 elapsed-time boundary',()=>assert(x.doc.querySelector('.comeback')));x.close();
 }finally{if(previousTZ===undefined)delete process.env.TZ;else process.env.TZ=previousTZ}
}
const output=baseline?path.join(cache,'baseline.json'):'tests/batch5-performance-results.json';
fs.writeFileSync(output,JSON.stringify({environment:'Synthetic jsdom; instrumented production-mode source; controlled 500ms clock ticks. No wall-time or device-speed claims.',baseline:baseline?undefined:JSON.parse(fs.readFileSync(path.join(cache,'baseline.json'),'utf8')).measurements,measurements,results},null,2));
console.log(JSON.stringify(measurements,null,2));
