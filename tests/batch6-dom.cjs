const assert=require('node:assert/strict');
module.exports=async function batch6({boot,wait,button,click,tab,input,check,fixture}){
 const copy=v=>JSON.parse(JSON.stringify(v)),KEY='oz-fit-html-state-v1';
 const names={en:{profile:'Profile',today:'Today',plan:'Plan',next:'Next',cancel:'Cancel',save:'Save changes',finish:'Save my plan',primary:'Primary goal',experience:'Experience',health:'Health status',availability:'Edit availability and session count'},ar:{profile:'ملفي',today:'اليوم',plan:'خطتي',next:'التالي',cancel:'إلغاء',save:'حفظ التغييرات',finish:'احفظ وافتح خطتي',primary:'الهدف الأساسي',experience:'الخبرة',health:'الحالة الصحية',availability:'تعديل الإتاحة وعدد الحصص'}};
 const stored=x=>JSON.parse(x.w.localStorage.getItem(KEY));
 const select=(x,el,value)=>{el.value=value;el.dispatchEvent(new x.w.Event('change',{bubbles:true}))};
 const radio=(x,label,value)=>{const group=[...x.doc.querySelectorAll('[role=radiogroup]')].find(e=>e.getAttribute('aria-label')===label);assert(group,'Missing radio group '+label);click(x.w,group.querySelector(`[role=radio][value="${value}"]`))};
 const labelControl=(x,text,selector)=>{const label=[...x.doc.querySelectorAll('label')].find(l=>l.textContent.includes(text));assert(label,text);return label.querySelector(selector)};
 const open=async(x,id,t)=>{tab(x.w,x.doc,t.profile);await wait();click(x.w,x.doc.querySelector(`[data-profile-edit="${id}"]`));await wait()};
 const selectedDay=x=>x.doc.querySelector('.week-day[aria-pressed=true]')?.getAttribute('aria-label');
 const snapshot=x=>[...x.doc.querySelectorAll('main input:not([type=hidden]),main select,main textarea,main [role=radio],main [role=checkbox],main button[aria-pressed]')].map(e=>({id:e.id,value:e.value,checked:e.getAttribute('aria-checked'),pressed:e.getAttribute('aria-pressed')}));
 async function mutate(x,id,t,second=false){
  if(id==='goals')radio(x,t.primary,second?'endurance':'strength');
  if(id==='basics')input(x.w,x.doc.querySelector('#name'),second?'Draft edited again':'Changed synthetic name');
  if(id==='availability')radio(x,t===names.ar?'مدة الحصة':'Session duration',second?'75':'60');
  if(id==='equipment'){const radios=x.doc.querySelectorAll('.body-labels button');click(x.w,radios[second?2:1])}
  if(id==='health')radio(x,t.health,second?'medical':'unknown');
  await wait();
 }
 for(const lang of ['en','ar']){
  const t=names[lang],ar=lang==='ar',setup=w=>w.localStorage.setItem('oz-language',lang);
  let x=await boot(undefined,w=>{setup(w);w.localStorage.setItem(KEY,'{unreadable')});
  check(`Batch6 ${lang} initial read failure retains corruption protection`,()=>{assert.equal(x.doc.querySelector('.step-row'),null);assert(x.doc.querySelector('[role=alert]'));assert.equal(x.w.localStorage.getItem(KEY),'{unreadable')});x.w.close();
  x=await boot(undefined,setup);
  try{
   check(`Batch6 ${lang} first setup starts with seven single-choice primary goals only`,()=>{assert.equal(x.doc.querySelectorAll('[role=radio]').length,7);assert.equal(x.doc.querySelector('.supporting-goals'),null);assert(x.doc.querySelector('.step-row').textContent.includes('1 / 6'))});
   click(x.w,button(x.doc,t.next));await wait();
   check(`Batch6 ${lang} missing primary goal stays on step one with focused feedback`,()=>{assert(x.doc.querySelector('.error'));assert.equal(x.doc.activeElement,x.doc.querySelector('.error'));assert(x.doc.querySelector('.step-row').textContent.includes('1 / 6'))});
   radio(x,t.primary,'muscle');await wait();
   const supporting=x.doc.querySelector('.supporting-goals');
   check(`Batch6 ${lang} optional supporting goals are collapsed and separately named`,()=>{assert.equal(supporting.open,false);assert.equal(supporting.querySelectorAll('button').length,6);assert(supporting.querySelector('[role=group][aria-label]'));assert.equal(x.doc.querySelectorAll('[role=radio][aria-checked=true]').length,1)});
   click(x.w,supporting.querySelector('summary'));click(x.w,button(supporting,ar?'مرونة وحركة':'Mobility'));await wait();
   radio(x,t.primary,'mobility');await wait();
   check(`Batch6 ${lang} promoting a supporting goal leaves one primary and removes its duplicate`,()=>{assert(x.doc.querySelector('.supporting-goals summary').textContent.endsWith('0'));assert.equal(x.doc.querySelectorAll('[role=radio][aria-checked=true]').length,1)});
   radio(x,t.primary,'muscle');await wait();click(x.w,button(x.doc.querySelector('.supporting-goals'),ar?'مرونة وحركة':'Mobility'));await wait();
   click(x.w,button(x.doc,t.next));await wait();
   for(const [id,v]of [['name','Synthetic new profile'],['age','17'],['weight','70'],['height','175']])input(x.w,x.doc.querySelector('#'+id),v);
   radio(x,t.experience,'beginner');await wait();click(x.w,button(x.doc,t.next));await wait();
   check(`Batch6 ${lang} first setup retains the adult minimum`,()=>{assert(x.doc.querySelector('.error').textContent.includes('18'));assert(x.doc.querySelector('#age'))});
   input(x.w,x.doc.querySelector('#age'),'30');await wait();click(x.w,button(x.doc,t.next));await wait();
   click(x.w,button(x.doc,t.next));await wait();assert(x.doc.querySelector('.error'));
   for(const name of ar?['الأحد','الثلاثاء','الخميس']:['Sunday','Tuesday','Thursday']){click(x.w,button(x.doc,name));await wait()}click(x.w,button(x.doc,t.next));await wait();
   click(x.w,button(x.doc,t.next));await wait();assert(x.doc.querySelector('.error'));
   click(x.w,labelControl(x,ar?'أجهزة المقاومة':'Machines','[role=checkbox]'));await wait();click(x.w,button(x.doc,t.next));await wait();
   click(x.w,button(x.doc,t.next));await wait();assert(x.doc.querySelector('.error'));
   radio(x,t.health,'none');await wait();click(x.w,button(x.doc,t.next));await wait();
   check(`Batch6 ${lang} first setup retains all six steps and required availability/equipment/health`,()=>{assert(x.doc.querySelector('.step-row').textContent.includes('6 / 6'));assert(button(x.doc,t.finish))});
   const raw=x.w.localStorage.getItem(KEY),original=x.w.Storage.prototype.setItem;
   x.w.Storage.prototype.setItem=function(k,v){if(k===KEY)throw new x.w.DOMException('quota','QuotaExceededError');return original.call(this,k,v)};
   click(x.w,button(x.doc,t.finish));await wait();
   check(`Batch6 ${lang} failed first-time save preserves review and draft`,()=>{assert(x.doc.querySelector('.step-row').textContent.includes('6 / 6'));assert.equal(x.w.localStorage.getItem(KEY),raw);assert(x.doc.querySelector('.error'))});
   x.w.Storage.prototype.setItem=original;click(x.w,button(x.doc,t.finish));await wait();await wait();
   check(`Batch6 ${lang} first-time completion stores one valid profile with unchanged schema`,()=>{const account=stored(x).data;assert.equal(account.schemaVersion,2);assert.equal(account.profiles.length,1);const p=account.profiles[0].profile;assert.equal(p.goal,'muscle');assert.deepEqual(p.secondaryGoals,['mobility']);assert.deepEqual(p.availableDays,[0,2,4]);assert.equal(p.days.length,3);assert.equal(p.planHistory.length,1);assert.equal(p.experience,'beginner');assert.equal(p.health,'none');assert.equal(x.doc.querySelector('.onboarding'),null)});
   assert.deepEqual(x.errors,[]);
  }finally{x.w.close()}

  const data=copy(fixture);data.data.profiles[0].profile.availableDays=[0,1,2,3,4,5];
  x=await boot(data,setup);
  try{
   const initialRaw=x.w.localStorage.getItem(KEY);tab(x.w,x.doc,t.profile);await wait();
   check(`Batch6 ${lang} existing profile opens without migration and exposes five direct editors`,()=>{assert.equal(x.w.localStorage.getItem(KEY),initialRaw);assert.equal(x.doc.querySelectorAll('.profile-settings [data-profile-edit]').length,5)});
   for(const id of ['goals','basics','availability','equipment','health']){
    await open(x,id,t);const before=x.w.localStorage.getItem(KEY);await mutate(x,id,t);
    check(`Batch6 ${lang} ${id} opens directly with save/cancel and no wizard`,()=>{assert.equal(x.doc.querySelector('main').getAttribute('data-profile-section'),id);assert.equal(x.doc.querySelector('.step-row'),null);assert.equal([...x.doc.querySelectorAll('button')].some(b=>b.textContent.trim()===t.next),false);assert(button(x.doc,t.save));assert.equal(x.doc.querySelector('.import-inline'),null)});
    click(x.w,button(x.doc,t.cancel));await wait();
    check(`Batch6 ${lang} ${id} cancel preserves storage and returns focus`,()=>{assert.equal(x.w.localStorage.getItem(KEY),before);assert.equal(x.doc.activeElement,x.doc.querySelector(`[data-profile-edit="${id}"]`))});
   }
   tab(x.w,x.doc,t.today);await wait();click(x.w,x.doc.querySelectorAll('.week-day')[(2-data.data.profiles[0].profile.weekStartsOn+7)%7]);await wait();const selected=selectedDay(x);
   for(const id of ['goals','basics','equipment','health']){
    const before=copy(stored(x).data.profiles[0]);await open(x,id,t);await mutate(x,id,t);click(x.w,button(x.doc,t.save));await wait();await wait();
    check(`Batch6 ${lang} ${id} save changes only its section and retains history`,()=>{const b=stored(x).data.profiles[0],allowed={goals:['goal','secondaryGoals'],basics:['name'],equipment:['priority'],health:['health']}[id];const old=copy(before.profile),next=copy(b.profile);for(const k of allowed){delete old[k];delete next[k]}assert.deepEqual(next,old);assert.deepEqual(b.sessions,before.sessions);assert.deepEqual(b.reports,before.reports);assert.equal(x.doc.querySelector('.onboarding'),null)});
    tab(x.w,x.doc,t.today);await wait();assert.equal(selectedDay(x),selected);
   }
   check(`Batch6 ${lang} all unrelated section saves preserve the selected rest day`,()=>assert.equal(selectedDay(x),selected));
   tab(x.w,x.doc,t.plan);await wait();click(x.w,button(x.doc,t.availability));await wait();
   const before=copy(stored(x).data.profiles[0].profile);await mutate(x,'availability',t);click(x.w,button(x.doc,t.save));await wait();
   check(`Batch6 ${lang} Plan availability entry saves duration without replacing custom days/history`,()=>{const p=stored(x).data.profiles[0].profile;assert.equal(p.minutes,60);assert.deepEqual(p.days,before.days);assert.deepEqual(p.planHistory,before.planHistory);assert(x.doc.querySelector('.split-grid'))});
   tab(x.w,x.doc,t.today);await wait();click(x.w,x.doc.querySelectorAll('.week-day')[(1-before.weekStartsOn+7)%7]);await wait();
   await open(x,'availability',t);click(x.w,button(x.doc,ar?'الاثنين':'Monday'));await wait();click(x.w,button(x.doc,t.save));await wait();
   tab(x.w,x.doc,t.today);await wait();
   check(`Batch6 ${lang} invalidated schedule reselects a valid day and adds one history entry`,()=>{const p=stored(x).data.profiles[0].profile;assert(!p.days.includes(1));assert.equal(p.planHistory.length,before.planHistory.length+1);const index=(p.days[0]-p.weekStartsOn+7)%7;assert.equal(x.doc.querySelectorAll('.week-day')[index].getAttribute('aria-pressed'),'true')});
   assert.deepEqual(x.errors,[]);
  }finally{x.w.close()}

  for(const failure of ['quota','conflict'])for(const id of ['goals','basics','availability','equipment','health']){
   const x=await boot(data,setup);
   try{
    await open(x,id,t);await mutate(x,id,t);const draft=snapshot(x),original=x.w.Storage.prototype.setItem;
    if(failure==='quota')x.w.Storage.prototype.setItem=function(k,v){if(k===KEY)throw new x.w.DOMException('quota','QuotaExceededError');return original.call(this,k,v)};
    else{const external=stored(x);external.revision++;external.data.profiles[0].profile.name='External synthetic change';original.call(x.w.localStorage,KEY,JSON.stringify(external))}
    const raw=x.w.localStorage.getItem(KEY);click(x.w,button(x.doc,t.save));await wait();await wait();
    check(`Batch6 ${lang} ${id}/${failure} retains editable draft and focused in-context error`,()=>{assert.equal(x.doc.querySelector('main').getAttribute('data-profile-section'),id);assert.deepEqual(snapshot(x),draft);assert.equal(x.w.localStorage.getItem(KEY),raw);assert.equal(x.doc.activeElement,x.doc.querySelector('main .error'));assert.equal(x.doc.querySelector('main fieldset').disabled,false)});
    await mutate(x,id,t,true);assert.notDeepEqual(snapshot(x),draft);
    if(failure==='quota'){x.w.Storage.prototype.setItem=original;click(x.w,button(x.doc,t.save));await wait();check(`Batch6 ${lang} ${id} quota retry confirms save before closing`,()=>{assert.equal(x.doc.querySelector('.onboarding'),null);assert.equal(stored(x).revision,data.revision+1)})}
    else{click(x.w,button(x.doc,t.cancel));await wait();check(`Batch6 ${lang} ${id} conflict cancel preserves the other revision`,()=>assert.equal(x.w.localStorage.getItem(KEY),raw))}
    assert.deepEqual(x.errors,[]);
   }finally{x.w.close()}
  }
 }
};
