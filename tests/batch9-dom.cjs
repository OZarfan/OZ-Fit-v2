const assert = require('node:assert/strict');

module.exports = async function batch9({boot,wait,button,click,tab,input,check,fixture}) {
  const KEY='oz-fit-html-state-v1',copy=x=>JSON.parse(JSON.stringify(x));
  const stored=x=>JSON.parse(x.w.localStorage.getItem(KEY));
  const field=(scope,text)=>{
    const label=[...scope.querySelectorAll('label')].find(e=>e.textContent.trim().startsWith(text));
    assert(label,'Missing field '+text);return label.querySelector('input,select,textarea');
  };
  const choose=(x,el,value)=>{el.value=value;el.dispatchEvent(new x.w.Event('change',{bubbles:true}))};
  const upload=(x,el,file)=>{Object.defineProperty(el,'files',{configurable:true,value:[file]});el.dispatchEvent(new x.w.Event('change',{bubbles:true}))};
  const gym=x=>[...x.doc.querySelectorAll('section')].find(s=>s.querySelector('h2')?.textContent==='My gym');
  const rehab=x=>[...x.doc.querySelectorAll('details')].find(s=>s.querySelector('summary')?.textContent==='Therapist-prescribed exercises');
  const report=x=>[...x.doc.querySelectorAll('section')].find(s=>s.querySelector('h2')?.textContent==='Body composition reports');
  const data=copy(fixture),a=data.data.profiles[0];
  a.profile.gyms=[];a.profile.activeGymId='';a.profile.prescribedRehab=[];a.reports=[];
  const b=copy(a);b.profile.id='batch9-b';b.profile.name='Profile B';data.data.profiles.push(b);
  const A=a.profile.id,B=b.profile.id;
  async function open(setup){const x=await boot(copy(data),w=>{w.localStorage.setItem('oz-language','en');setup?.(w)});tab(x.w,x.doc,'Profile');await wait();return x}
  async function switchTo(x,id){choose(x,field(x.doc,'Active profile'),id);await wait();await wait()}
  async function drafts(x){
    click(x.w,button(gym(x),'New gym'));await wait();input(x.w,field(gym(x),'Gym name'),'A gym draft');
    rehab(x).open=true;input(x.w,field(rehab(x),'Exercise name'),'A prescription draft');input(x.w,field(rehab(x),'Sets'),'3');
    upload(x,report(x).querySelector('input[type=file]'),new x.w.File(['synthetic'],'report.png',{type:'image/png'}));await wait();
    input(x.w,x.doc.querySelector('#report-date'),'2026-10-01');input(x.w,x.doc.querySelector('#report-weight'),'71');await wait();
    click(x.w,report(x).querySelector('[role=checkbox]'));await wait();
  }
  const assertDrafts=x=>{
    assert.equal(field(gym(x),'Gym name').value,'A gym draft');
    assert.equal(field(rehab(x),'Exercise name').value,'A prescription draft');assert.equal(field(rehab(x),'Sets').value,'3');
    assert.equal(x.doc.querySelector('#report-weight').value,'71');assert.equal(report(x).querySelector('[role=checkbox]').getAttribute('aria-checked'),'true');
  };
  const assertNoOwnedData=(x,id)=>{const b=stored(x).data.profiles.find(b=>b.profile.id===id);assert.equal(b.profile.gyms.length,0);assert.equal(b.profile.prescribedRehab.length,0);assert.equal(b.reports.length,0)};

  let x=await open();
  try{
    await drafts(x);await switchTo(x,B);
    check('Batch9 profile switch exposes only the destination profile drafts',()=>{
      assert.equal(gym(x).querySelector('input:not([type=file])'),null);
      assert.equal(field(rehab(x),'Exercise name').value,'');assert.equal(report(x).querySelector('.report-editor'),null);
    });
    click(x.w,button(rehab(x),'Add prescription'));await wait();
    click(x.w,button(gym(x),'New gym'));await wait();input(x.w,field(gym(x),'Gym name'),'B gym draft');await wait();
    check('Batch9 attempted saves in B cannot submit A prescription/report/gym data',()=>{assertNoOwnedData(x,A);assertNoOwnedData(x,B)});
    await switchTo(x,A);check('Batch9 returning to A restores all draft fields and report confirmation',()=>assertDrafts(x));
    click(x.w,button(gym(x),'Save and activate gym'));await wait();
    click(x.w,button(rehab(x),'Add prescription'));await wait();
    click(x.w,button(report(x),'Save values locally'));await wait();
    check('Batch9 successful draft saves write only the owner and preserve B draft',()=>{
      const owner=stored(x).data.profiles.find(b=>b.profile.id===A);
      assert.equal(owner.profile.gyms[0].name,'A gym draft');assert.equal(owner.profile.prescribedRehab[0].name,'A prescription draft');assert.equal(owner.reports[0].weight,71);assertNoOwnedData(x,B);
    });
    await switchTo(x,B);assert.equal(field(gym(x),'Gym name').value,'B gym draft');
    assert.deepEqual(x.errors,[]);
  }finally{x.w.close()}

  // Reloading a newer revision may also change activeId. Never reinterpret A's
  // retained values as B's draft, including after failed explicit saves.
  for(const failure of ['quota','conflict-owner-change']){
    const fault={on:false};
    x=await open(w=>{const original=w.Storage.prototype.setItem;w.Storage.prototype.setItem=function(k,v){if(k===KEY&&fault.on)throw new w.DOMException('Synthetic quota','QuotaExceededError');return original.call(this,k,v)}});
    try{
      await drafts(x);
      if(failure==='quota')fault.on=true;
      else{const next=stored(x);next.revision++;next.data.activeId=B;x.w.localStorage.setItem(KEY,JSON.stringify(next))}
      const raw=x.w.localStorage.getItem(KEY);
      for(const [scope,text] of [[gym,'Save and activate gym'],[rehab,'Add prescription'],[report,'Save values locally']]){click(x.w,button(scope(x),text));await wait()}
      check(`Batch9 ${failure} keeps every owner draft and does not write`,()=>{assertDrafts(x);assert.equal(x.w.localStorage.getItem(KEY),raw)});
      // The existing editor stays editable while the persistence failure is shown.
      input(x.w,field(rehab(x),'Sets'),'4');await wait();assert.equal(field(rehab(x),'Sets').value,'4');
      fault.on=false;
      if(failure!=='quota'){
        click(x.w,button(x.doc,'Reload record'));await wait();await wait();
        check('Batch9 conflict reload changing activeId isolates retained A drafts',()=>{assert.equal(field(rehab(x),'Exercise name').value,'');assert.equal(report(x).querySelector('.report-editor'),null);assertNoOwnedData(x,B)});
        await switchTo(x,A);
      }
      check(`Batch9 ${failure} retry retains editable values for the same owner`,()=>{assert.equal(field(gym(x),'Gym name').value,'A gym draft');assert.equal(field(rehab(x),'Sets').value,'4');assert.equal(x.doc.querySelector('#report-weight').value,'71')});
      for(const [scope,text] of [[gym,'Save and activate gym'],[rehab,'Add prescription'],[report,'Save values locally']]){click(x.w,button(scope(x),text));await wait()}
      check(`Batch9 ${failure} retry saves to A only`,()=>{const owner=stored(x).data.profiles.find(b=>b.profile.id===A);assert.equal(owner.profile.gyms.length,1);assert.equal(owner.profile.prescribedRehab[0].sets,4);assert.equal(owner.reports.length,1);assertNoOwnedData(x,B)});
      assert.deepEqual(x.errors,[]);
    }finally{x.w.close()}
  }

  x=await open();
  try{
    let resolve;
    const file=new x.w.File(['synthetic'],'gym.json',{type:'application/json'});
    file.text=()=>new Promise(r=>resolve=r);
    upload(x,gym(x).querySelector('input[type=file]'),file);await wait();await switchTo(x,B);
    resolve(JSON.stringify({schemaVersion:'gym-equipment/1',gym:{id:'import',name:'Delayed A import',equipment:['machine'],exact:false,exerciseIds:[],bars:[20],plates:[{kg:2.5,pairs:2}]}}));await wait();
    check('Batch9 delayed gym file read cannot populate B',()=>{assert.equal(gym(x).querySelector('input:not([type=file])'),null);assert(!gym(x).textContent.includes('Review imported gym'));assertNoOwnedData(x,B)});
    await switchTo(x,A);
    check('Batch9 delayed file read remains reviewable and savable by A',()=>assert.equal(field(gym(x),'Gym name').value,'Delayed A import'));
    click(x.w,button(gym(x),'Save and activate gym'));await wait();assertNoOwnedData(x,B);
    assert.deepEqual(x.errors,[]);
  }finally{x.w.close()}

  // Report previews are derived from the owner-selected File; each switch must
  // revoke the previous URL and returning must create a fresh URL for that file.
  const created=[],revoked=[];
  x=await open(w=>{w.URL.createObjectURL=f=>{const url='blob:batch9-'+created.length;created.push({name:f.name,url});return url};w.URL.revokeObjectURL=url=>revoked.push(url)});
  try{
    await drafts(x);const first=report(x).querySelector('img').src;await switchTo(x,B);
    upload(x,report(x).querySelector('input[type=file]'),new x.w.File(['b'],'b.png',{type:'image/png'}));await wait();
    await switchTo(x,A);
    check('Batch9 report preview and confirmation return to their owner with URL cleanup',()=>{assert.equal(created.at(-1).name,'report.png');assert(revoked.includes(first));assertDrafts(x)});
  }finally{x.w.close()}

  const names={en:{profile:'Profile',next:'Next',save:'Save changes',finish:'Save my plan',primary:'Primary goal',experience:'Experience',health:'Health status'},ar:{profile:'ملفي',next:'التالي',save:'حفظ التغييرات',finish:'احفظ وافتح خطتي',primary:'الهدف الأساسي',experience:'الخبرة',health:'الحالة الصحية'}};
  for(const lang of ['ar','en']){
    const invalid=copy(fixture);invalid.data.profiles[0].profile.priority='mobility';
    x=await boot(invalid,w=>w.localStorage.setItem('oz-language',lang));
    try{
      check(`Batch9 ${lang} unsupported stored priority names the field and preserves the raw account`,()=>{assert(x.doc.querySelector('[role=alert]').textContent.includes(lang==='ar'?'أولوية العضلات':'muscle priority'));assert.equal(x.w.localStorage.getItem(KEY),JSON.stringify(invalid));assert.equal(x.doc.querySelector('.onboarding .step-row'),null)});
    }finally{x.w.close()}
    x=await boot(copy(fixture),w=>w.localStorage.setItem('oz-language',lang));
    try{
      tab(x.w,x.doc,names[lang].profile);await wait();const raw=x.w.localStorage.getItem(KEY);
      const file=new x.w.File(['synthetic'],'invalid-priority.json',{type:'application/json'});file.text=async()=>JSON.stringify({schemaVersion:'oz-fit-export/1',bundle:invalid.data.profiles[0]});
      upload(x,field(x.doc,lang==='ar'?'استيراد نسخة JSON':'Import JSON backup'),file);await wait();
      check(`Batch9 ${lang} unsupported backup priority names the field without replacing data`,()=>{assert(x.doc.querySelector('[role=alert]').textContent.includes(lang==='ar'?'أولوية العضلات':'muscle priority'));assert.equal(x.w.localStorage.getItem(KEY),raw);assert.equal(x.doc.querySelector('[role=dialog]'),null)});
    }finally{x.w.close()}
  }
  const priorities=['balanced','chest','back','legs','shoulders','arms','core'];
  const radio=(x,label,value)=>click(x.w,[...x.doc.querySelectorAll('[role=radiogroup]')].find(e=>e.getAttribute('aria-label')===label).querySelector(`[value="${value}"]`));
  for(const lang of ['ar','en'])for(const mode of ['new','edit'])for(const [index,priority] of priorities.entries()){
    const t=names[lang];x=await boot(mode==='edit'?copy(fixture):undefined,w=>w.localStorage.setItem('oz-language',lang));
    try{
      if(mode==='edit'){tab(x.w,x.doc,t.profile);await wait();click(x.w,x.doc.querySelector('[data-profile-edit=equipment]'));await wait()}
      else{
        radio(x,t.primary,'mobility');await wait();click(x.w,button(x.doc,t.next));await wait();
        for(const [id,value] of [['name','Priority fixture'],['age','30'],['weight','80'],['height','180']])input(x.w,x.doc.querySelector('#'+id),value);
        radio(x,t.experience,'beginner');await wait();click(x.w,button(x.doc,t.next));await wait();
        for(const day of (lang==='ar'?['الأحد','الثلاثاء','الخميس']:['Sunday','Tuesday','Thursday'])){click(x.w,button(x.doc,day));await wait()}
        click(x.w,button(x.doc,t.next));await wait();
        click(x.w,[...x.doc.querySelectorAll('.equip-grid label')].find(e=>e.textContent.includes(lang==='ar'?'أجهزة المقاومة':'Machines')).querySelector('[role=checkbox]'));await wait();
      }
      const choices=x.doc.querySelectorAll('.body-labels button');assert.equal(choices.length,priorities.length);
      click(x.w,choices[index]);await wait();
      if(mode==='new'){click(x.w,button(x.doc,t.next));await wait();radio(x,t.health,'none');await wait();click(x.w,button(x.doc,t.next));await wait()}
      click(x.w,button(x.doc,mode==='new'?t.finish:t.save));await wait();await wait();
      check(`Batch9 ${lang} ${mode} priority ${priority} round-trips without changing supported goals`,()=>{assert.equal(stored(x).data.profiles[0].profile.priority,priority);if(mode==='new')assert.equal(stored(x).data.profiles[0].profile.goal,'mobility');assert.equal(x.doc.querySelector('.onboarding'),null)});
      assert.deepEqual(x.errors,[]);
    }finally{x.w.close()}
  }
  // Invalid external component input stays visible for correction. Invalid
  // persisted accounts still use the unchanged corruption-protection boundary.
  const {buildSync}=require('esbuild'),path=require('node:path');
  const {JSDOM,VirtualConsole}=require(process.env.OZ_JSDOM||'jsdom');
  const root=path.resolve(__dirname,'..');
  const component=buildSync({stdin:{contents:`import React from 'react';import {createRoot} from 'react-dom/client';import Onboarding from './app/onboarding';const c=window.batch9;createRoot(document.getElementById('root')).render(<Onboarding lang={c.lang} initial={c.profile} section={c.section} busy={false} onSave={async p=>{window.saved=p;return true}}/>);`,resolveDir:root,loader:'tsx'},bundle:true,write:false,format:'iife',platform:'browser',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},alias:{'@/lib':root+'/lib','@/components':root+'/components'}}).outputFiles[0].text;
  for(const lang of ['ar','en'])for(const section of [undefined,'equipment'])for(const priority of ['mobility','external-unknown']){
    const vc=new VirtualConsole(),errors=[];vc.on('jsdomError',e=>errors.push(e.message));
    const d=new JSDOM('<div id="root"></div>',{url:'https://batch9.invalid',runScripts:'dangerously',pretendToBeVisual:true,virtualConsole:vc});
    const w=d.window;w.HTMLElement.prototype.scrollIntoView=function(){};w.batch9={lang,section,profile:{...copy(a.profile),priority}};w.eval(component);await wait();x={w,doc:w.document};
    try{
      const t=names[lang];if(!section)for(let n=0;n<3;n++){click(w,button(x.doc,t.next));await wait()}
      click(w,button(x.doc,section?t.save:t.next));await wait();
      check(`Batch9 ${lang} ${section||'wizard'} unsupported ${priority} has associated priority feedback`,()=>{const alert=x.doc.querySelector('#priority-error');assert(alert);assert(alert.textContent.includes(lang==='ar'?'توازن الجسم':'Balanced'));assert.equal(alert.parentElement.getAttribute('aria-describedby'),'priority-error');assert.equal(w.saved,undefined);assert.equal(x.doc.querySelectorAll('.body-labels button').length,7);assert(!x.doc.querySelector('.error'))});
      click(w,x.doc.querySelector('.body-labels button'));await wait();assert.equal(x.doc.querySelector('#priority-error'),null);
      if(!section)for(let n=0;n<2;n++){click(w,button(x.doc,t.next));await wait()}
      click(w,button(x.doc,section?t.save:t.finish));await wait();assert.equal(w.saved.priority,'balanced');assert.deepEqual(errors,[]);
    }finally{w.close()}
  }

  const styles=require('rrweb-cssom').parse(require('node:fs').readFileSync(root+'/app.css','utf8')).cssRules;
  check('Batch9 shared dialog CSS bounds height and scrolls without overriding logging containment',()=>{
    const shared=[...styles].find(r=>r.selectorText==='[data-slot=dialog-content]'&&r.style.getPropertyValue('max-height'));
    assert.equal(shared.style.getPropertyValue('max-height'),'calc(100dvh - 32px)');assert.equal(shared.style.getPropertyValue('overflow-y'),'auto');assert.equal(shared.style.getPropertyValue('overflow-x'),'hidden');
    const close=[...styles].find(r=>r.selectorText==='[data-slot=dialog-content]>[data-slot=dialog-close]');assert.equal(close.style.getPropertyValue('width'),'44px');assert.equal(close.style.getPropertyValue('height'),'44px');
    const logging=[...styles].find(r=>r.selectorText==='.log-dialog');assert.equal(logging.style.getPropertyValue('max-height'),'92dvh');assert.equal(logging.style.getPropertyPriority('max-height'),'important');
  });
  for(const lang of ['ar','en'])for(let count=0;count<=7;count++){
    const current=copy(fixture),owner=current.data.profiles[0],fault={on:false};
    owner.profile.injuries=['shoulder','elbow','back','hip','knee','ankle','neck'].slice(0,count).map(area=>({area,status:'active',reportedAt:'2026-10-01',reviewed:false,history:[]}));
    const session={...copy(owner.sessions[0]),id:'batch9-finish',startedAt:new Date().toISOString(),finishedAt:null,sets:[],painByArea:{},restState:{deadline:null,totalSeconds:120}};owner.sessions.push(session);
    x=await boot(current,w=>{w.localStorage.setItem('oz-language',lang);const set=w.Storage.prototype.setItem;w.Storage.prototype.setItem=function(k,v){if(k===KEY&&fault.on)throw new w.DOMException('quota','QuotaExceededError');return set.call(this,k,v)}});
    try{
      click(x.w,button(x.doc,lang==='ar'?'إنهاء الحصة':'Finish session'));await wait();
      const dialog=x.doc.querySelector('[role=dialog]'),close=dialog.querySelector('[data-slot=dialog-close]');
      check(`Batch9 ${lang} Finish with ${count} injury areas uses the shared dialog with a named close and all injury fields`,()=>{assert.equal(dialog.querySelectorAll('select').length,count);assert(dialog.matches('[data-slot=dialog-content][data-has-close]'));assert.equal(close.parentElement,dialog);assert.equal(close.textContent,lang==='ar'?'إغلاق':'Close')});
      fault.on=true;click(x.w,button(dialog,lang==='ar'?'احفظ الحصة':'Save session'));await wait();
      assert(dialog.querySelector('.error'));fault.on=false;
      click(x.w,button(dialog,lang==='ar'?'احفظ الحصة':'Save session'));await wait();
      check(`Batch9 ${lang} Finish ${count} preserves failure/retry with additional error content`,()=>{assert(stored(x).data.profiles[0].sessions.at(-1).finishedAt);assert(![...x.doc.querySelectorAll('[role=dialog] button')].some(b=>b.textContent.trim()===(lang==='ar'?'احفظ الحصة':'Save session')));assert.deepEqual(x.errors,[])});
    }finally{x.w.close()}
  }
};
