const assert=require('node:assert/strict');
module.exports=async function batch7({boot,wait,button,click,tab,check,fixture}){
 const copy=v=>JSON.parse(JSON.stringify(v)),KEY='oz-fit-html-state-v1';
 const rows=x=>[...x.doc.querySelectorAll('.weekly-session')].map(e=>({day:+e.dataset.weekday,title:e.querySelector('.weekly-session-title').textContent,minutes:+e.querySelector('.weekly-duration').firstChild.textContent.match(/\d+/)?.[0],exercises:[...e.querySelectorAll('.weekly-exercises li')].map(e=>e.textContent)}));
 const stored=x=>JSON.parse(x.w.localStorage.getItem(KEY));
 for(const lang of ['en','ar']){
  const ar=lang==='ar',t={plan:ar?'خطتي':'Plan',today:ar?'اليوم':'Today',close:ar?'إغلاق':'Close',schedule:ar?'احفظ التوزيع':'Save schedule'};
  const data=copy(fixture),p=data.data.profiles[0].profile;
  Object.assign(p,{availableDays:[0,1,2,3,4,5],dayMinutes:{0:30,1:60,3:45,5:75}});
  const open=async x=>{tab(x.w,x.doc,t.plan);await wait()};
  const advanced=async x=>{click(x.w,x.doc.querySelector('.weekly-advanced summary'));await wait()};
  const day=async(x,n)=>{tab(x.w,x.doc,t.today);await wait();click(x.w,x.doc.querySelectorAll('.week-day')[(n-p.weekStartsOn+7)%7]);await wait()};
  const stage=x=>button(x.doc,ar?'مرحلة 2':'Stage 2');
  let x=await boot(data,w=>w.localStorage.setItem('oz-language',lang));
  try{
   await day(x,2);const selected=x.doc.querySelector('.week-day[aria-pressed=true]').getAttribute('aria-label'),raw=x.w.localStorage.getItem(KEY);await open(x);
   check(`Batch7 ${lang} week is visible before recommendation and collapsed configuration`,()=>{
    const overview=x.doc.querySelector('.weekly-overview'),reason=x.doc.querySelector('.weekly-reason'),config=x.doc.querySelector('.weekly-settings');
    assert(overview.compareDocumentPosition(reason)&x.w.Node.DOCUMENT_POSITION_FOLLOWING);assert(reason.compareDocumentPosition(config)&x.w.Node.DOCUMENT_POSITION_FOLLOWING);
    assert.equal(x.doc.querySelector('.weekly-advanced').open,false);assert.equal(rows(x).length,p.days.length);assert(x.doc.querySelector('.weekly-summary').textContent.includes('4'));assert(x.doc.querySelector('.weekly-summary').textContent.includes('6'));
    assert.equal(x.doc.querySelector('.weekly-overview input,.weekly-overview button'),null);assert.equal(x.w.localStorage.getItem(KEY),raw);
   });
   check(`Batch7 ${lang} recommendation uses current inputs and separate available/rest days`,()=>{
    const text=x.doc.querySelector('.weekly-reason').textContent;for(const s of ['4','45',ar?'بناء عضلات':'Build muscle',ar?'علوي / سفلي':'Upper / Lower'])assert(text.includes(s),s);
    const rest=x.doc.querySelector('.weekly-rest').textContent;for(const s of ar?['السبت','الثلاثاء','الخميس']:['Saturday','Tuesday','Thursday'])assert(rest.includes(s));
    assert(x.doc.querySelector('.weekly-reason').textContent.includes(ar?'وقت كل يوم':'each day’s available time'));
   });
   await advanced(x);const before=rows(x);click(x.w,button(x.doc,ar?'جسم كامل':'Full body'));await wait();
   check(`Batch7 ${lang} explicit split change updates the week and distinguishes saved choice from recommendation`,()=>{
    assert.equal(stored(x).data.profiles[0].profile.split,'full');assert.notDeepEqual(rows(x).map(r=>r.title),before.map(r=>r.title));
    assert(x.doc.querySelector('.weekly-reason .note').textContent.includes(ar?'جسم كامل':'Full body'));assert.equal(x.doc.querySelectorAll('.split-card[aria-pressed=true]').length,1);
   });
   click(x.w,stage(x));await wait();
   check(`Batch7 ${lang} stage selection retains progression gates and all five split options`,()=>{assert.equal(stored(x).data.profiles[0].profile.stage,1);assert.equal(stage(x).getAttribute('aria-pressed'),'true');assert(button(x.doc,ar?'مرحلة 3':'Stage 3').disabled);assert.equal(x.doc.querySelectorAll('.split-card').length,5)});
   tab(x.w,x.doc,t.today);await wait();
   check(`Batch7 ${lang} viewing the week and changing split/stage preserve the selected rest day`,()=>{assert.equal(x.doc.querySelector('.week-day[aria-pressed=true]').getAttribute('aria-label'),selected);assert.equal(x.doc.querySelector('.session-strip'),null);assert.deepEqual(stored(x).data.profiles[0].sessions,data.data.profiles[0].sessions)});
   assert.deepEqual(x.errors,[]);
  }finally{x.w.close()}

  // Compare presentation to the real Today result for each saved configuration.
  for(const [split,start,selected]of [['upper',6,[5,0,1,3]],['full',1,[6,2]],['ppl',1,[6,1,3]],['bro',6,[0,1,2,3,4]],['arnold',1,[0,1,2,3,4,5]]]){
   const d=copy(data);Object.assign(d.data.profiles[0].profile,{split,weekStartsOn:start,days:selected,availableDays:[0,1,2,3,4,5,6],sessionsPerWeek:selected.length});
   const x=await boot(d,w=>w.localStorage.setItem('oz-language',lang)),expected=[];
   try{
    const raw=x.w.localStorage.getItem(KEY);
    for(const n of [...selected].sort((a,b)=>(a-start+7)%7-(b-start+7)%7)){
     click(x.w,x.doc.querySelectorAll('.week-day')[(n-start+7)%7]);await wait();
     expected.push({day:n,title:x.doc.querySelector('.session-strip h2').textContent,minutes:+x.doc.querySelector('.session-strip p').textContent.match(/≈\s*(\d+)/)[1],exercises:[...x.doc.querySelectorAll('.exercise-row strong')].map(e=>e.textContent)});
    }
    await open(x);
    check(`Batch7 ${lang} ${split} maps weekdays, session titles, duration and exercises exactly to Today`,()=>{
     const actual=rows(x);assert.equal(actual.length,expected.length);
     actual.forEach((a,i)=>{const e=expected[i];assert.equal(a.day,e.day);assert.equal(a.title,e.title);assert.equal(a.minutes,e.minutes);assert.deepEqual(a.exercises.map(s=>s.split(' · ')[0]),e.exercises);assert(x.doc.querySelector(`[data-weekday="${a.day}"] .weekly-duration small`).textContent.includes(String(p.dayMinutes[a.day]??p.minutes)))});
     assert.equal(x.w.localStorage.getItem(KEY),raw);
    });assert.deepEqual(x.errors,[]);
   }finally{x.w.close()}
  }

  for(const failure of ['quota','conflict'])for(const action of ['split','stage','schedule']){
   const x=await boot(data,w=>w.localStorage.setItem('oz-language',lang));
   try{
    await open(x);await advanced(x);const before=rows(x),original=x.w.Storage.prototype.setItem;
    if(action==='schedule'){
     click(x.w,x.doc.querySelector('.weekly-settings .chips button'));await wait();
     click(x.w,button(x.doc.querySelector('[role=dialog]'),ar?'الجمعة':'Friday'));await wait();click(x.w,button(x.doc.querySelector('[role=dialog]'),ar?'الثلاثاء':'Tuesday'));await wait();
    }
    const draft=()=>[...x.doc.querySelectorAll('[role=dialog] .chips button')].map(b=>b.getAttribute('aria-pressed')),chosen=draft();
    if(failure==='quota')x.w.Storage.prototype.setItem=function(k,v){if(k===KEY)throw new x.w.DOMException('quota','QuotaExceededError');return original.call(this,k,v)};
    else{const external=stored(x);external.revision++;external.data.profiles[0].profile.name='External synthetic name';original.call(x.w.localStorage,KEY,JSON.stringify(external))}
    const raw=x.w.localStorage.getItem(KEY),submit=()=>click(x.w,action==='schedule'?button(x.doc,t.schedule):action==='stage'?stage(x):button(x.doc,ar?'جسم كامل':'Full body'));
    submit();await wait();await wait();
    check(`Batch7 ${lang} ${action}/${failure} keeps confirmed week, selected state and recoverable error`,()=>{
     assert.equal(x.w.localStorage.getItem(KEY),raw);assert.deepEqual(rows(x),before);assert(x.doc.querySelector('[role=alert]'));
     if(action==='schedule'){assert(x.doc.querySelector('[role=dialog]'));assert.deepEqual(draft(),chosen);assert(!button(x.doc,t.schedule).disabled)}
     else{assert.equal(stage(x).getAttribute('aria-pressed'),'false');assert.equal(button(x.doc,ar?'جسم كامل':'Full body').getAttribute('aria-pressed'),'false');assert(!stage(x).disabled)}
    });
    if(failure==='quota'){
     x.w.Storage.prototype.setItem=original;submit();await wait();await wait();
     check(`Batch7 ${lang} ${action} retries successfully through the existing save contract`,()=>{const q=stored(x).data.profiles[0].profile;assert.equal(stored(x).revision,data.revision+1);if(action==='split')assert.equal(q.split,'full');if(action==='stage')assert.equal(q.stage,1);if(action==='schedule'){assert(q.days.includes(2));assert(!q.days.includes(5));assert.equal(x.doc.querySelector('[role=dialog]'),null)}});
    }else if(action==='schedule'){click(x.w,button(x.doc,t.close));await wait();assert.equal(x.w.localStorage.getItem(KEY),raw)}
    assert.deepEqual(x.errors,[]);
   }finally{x.w.close()}
  }
  const activeData=copy(data),active=copy(activeData.data.profiles[0].sessions[0]);Object.assign(active,{id:'batch7-active',finishedAt:null,startedAt:new Date().toISOString()});activeData.data.profiles[0].sessions.push(active);
  x=await boot(activeData,w=>w.localStorage.setItem('oz-language',lang));
  try{await open(x);await advanced(x);check(`Batch7 ${lang} active-session configuration remains locked while the week stays readable`,()=>{assert.equal(rows(x).length,4);assert([...x.doc.querySelectorAll('.weekly-settings button')].every(b=>b.disabled));assert(x.doc.querySelector('.weekly-overview .note'));assert.deepEqual(stored(x),activeData)})}finally{x.w.close()}
  const blocked=copy(data);blocked.data.profiles[0].profile.urgentSymptoms=true;
  x=await boot(blocked,w=>w.localStorage.setItem('oz-language',lang));
  try{await open(x);check(`Batch7 ${lang} blocked days never appear as executable five-minute workouts`,()=>{assert.equal(x.doc.querySelectorAll('.weekly-exercises').length,0);assert([...x.doc.querySelectorAll('.weekly-duration')].every(e=>!e.textContent.includes('≈')));assert(x.doc.querySelector('.weekly-overview').textContent.includes(ar?'الأعراض الحادة':'acute symptoms'))})}finally{x.w.close()}
 }
};
