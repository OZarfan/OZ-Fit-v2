const assert = require('node:assert/strict');

module.exports = async function batch2({boot, wait, button, click, tab, input, check, fixture}) {
  const KEY = 'oz-fit-html-state-v1';
  const copy = value => JSON.parse(JSON.stringify(value));
  const activeFixture = () => {
    const data = copy(fixture), active = copy(data.data.profiles[0].sessions[0]);
    Object.assign(active, {id:'batch2-active', startedAt:new Date().toISOString(), finishedAt:null, sets:[], swaps:[], skipped:[]});
    data.data.profiles[0].sessions.push(active);
    return data;
  };
  const stored = x => JSON.parse(x.w.localStorage.getItem(KEY));
  const texts = {
    en: {log:'Log set & start rest', close:'Close', plan:'Plan', profile:'Profile', finish:'Finish session', reload:'Reload record', balanced:'Balanced', extracted:'Extracted text for review'},
    ar: {log:'سجل المجموعة وابدأ الراحة', close:'إغلاق', plan:'خطتي', profile:'ملفي', finish:'إنهاء الحصة', reload:'إعادة تحميل السجل', balanced:'توازن الجسم', extracted:'النص المستخرج للمراجعة'}
  };
  for (const lang of ['en','ar']) {
    const t = texts[lang], x = await boot(activeFixture(), w => w.localStorage.setItem('oz-language',lang));
    try {
      const filters = [...x.doc.querySelectorAll('.muscle-pills button')];
      click(x.w, filters[1]); await wait();
      check(`Batch2 ${lang} muscle filters expose names and current selection`, () => {
        assert(x.doc.querySelector('.muscle-pills').getAttribute('aria-label'));
        filters.forEach((b,i) => {assert(b.textContent.trim());assert.equal(b.getAttribute('aria-pressed'),String(i===1));});
      });
      click(x.w, filters[0]); await wait();
      click(x.w, x.doc.querySelector('.exercise-row')); await wait();
      const weight = x.doc.querySelector('#log-weight'), reps = x.doc.querySelector('#log-reps');
      const before = x.w.localStorage.getItem(KEY);
      for (const [w,r] of [['',''],['-1','0'],['1501','121'],['20','1.5']]) {
        input(x.w, weight, w); input(x.w, reps, r); await wait();
        click(x.w, button(x.doc,t.log)); await wait();
        assert.equal(x.doc.activeElement, w==='20'?reps:weight);
        for (const el of w==='20'?[reps]:[weight,reps]) {
          assert.equal(el.getAttribute('aria-invalid'),'true');
          const message = x.doc.getElementById(el.getAttribute('aria-describedby'));
          assert(message?.textContent.trim()); assert(message.closest('[role=dialog]'));
          assert.equal(message.getAttribute('role'),'alert');
        }
        assert.equal(x.w.localStorage.getItem(KEY),before);
      }
      check(`Batch2 ${lang} invalid logging fields announce local errors, focus first invalid and never write`, () => {
        assert.equal(x.doc.querySelector('.notice'),null);
        assert.equal(weight.getAttribute('aria-invalid'),null,'Corrected weight error clears while reps remain invalid');
      });
      input(x.w, reps, '8'); await wait();
      check(`Batch2 ${lang} correction removes obsolete errors and descriptions before resubmission`, () => {
        assert.equal(x.doc.querySelector('.log-field-error'),null);
        for (const el of [weight,reps]) {assert.equal(el.getAttribute('aria-invalid'),null);assert.equal(el.getAttribute('aria-describedby'),null);}
      });
      click(x.w, button(x.doc,t.log)); await wait();
      check(`Batch2 ${lang} successful logging leaves no stale validation on dialog or page`, () => {
        assert.equal(stored(x).data.profiles[0].sessions.at(-1).sets.length,1);
        assert.equal(x.doc.querySelector('.log-field-error, .notice, .error'),null);
      });
      const close = x.doc.querySelector('[data-slot=dialog-close]');
      check(`Batch2 ${lang} logging close has localized name and shared header contract`, () => {
        assert.equal(close.textContent.trim(),t.close);
        assert.equal(close.closest('[role=dialog]').getAttribute('data-has-close'),'true');
        assert.equal(close.closest('[role=dialog]').dir,lang==='ar'?'rtl':'ltr');
      });
      click(x.w,close); await wait();
      click(x.w,button(x.doc,t.finish)); await wait();
      check(`Batch2 ${lang} secondary dialog shares localized close contract`, () => assert.equal(x.doc.querySelector('[data-slot=dialog-close]').textContent.trim(),t.close));
      click(x.w,x.doc.querySelector('[data-slot=dialog-close]')); await wait();
      assert.equal(x.doc.querySelector('[role=dialog]'),null);
      assert.deepEqual(x.errors,[]);
    } finally {x.d.window.close();}

    const timedData=activeFixture();
    Object.assign(timedData.data.profiles[0].sessions.at(-1).slots[0],{exId:'Plank',low:15,high:30});
    const timed=await boot(timedData,w=>w.localStorage.setItem('oz-language',lang));
    try {
      click(timed.w,timed.doc.querySelector('.exercise-row'));await wait();
      input(timed.w,timed.doc.querySelector('#log-reps'),'1.5');await wait();
      click(timed.w,button(timed.doc,t.log));await wait();
      check(`Batch2 ${lang} timed exercise validation names seconds and focuses duration`,()=>{
        assert.equal(timed.doc.activeElement,timed.doc.querySelector('#log-reps'));
        assert(timed.doc.querySelector('#log-reps-error').textContent.includes(lang==='ar'?'ثوانٍ':'seconds'));
      });
      input(timed.w,timed.doc.querySelector('#log-reps'),'120');await wait();
      click(timed.w,button(timed.doc,t.log));await wait();
      check(`Batch2 ${lang} bodyweight zero and upper duration bound remain valid`,()=>{
        const set=stored(timed).data.profiles[0].sessions.at(-1).sets[0];
        assert.equal(set.weight,0);assert.equal(set.reps,120);assert.equal(timed.doc.querySelector('.log-field-error'),null);
        assert.deepEqual(timed.errors,[]);
      });
    } finally {timed.d.window.close();}

    const y = await boot(copy(fixture), w => w.localStorage.setItem('oz-language',lang));
    try {
      tab(y.w,y.doc,t.plan); await wait();click(y.w,y.doc.querySelector('.weekly-advanced summary'));await wait();
      const splits = [...y.doc.querySelectorAll('.split-card')];
      const stages = [...y.doc.querySelector('.split-grid').closest('section').querySelectorAll('.chips')].at(-1).querySelectorAll('button');
      click(y.w,stages[1]); await wait();
      click(y.w,splits.find(b=>b.getAttribute('aria-pressed')==='false'&&!b.disabled)); await wait();
      check(`Batch2 ${lang} split and stage states follow saved selection`, () => {
        const p = stored(y).data.profiles[0].profile;
        assert.equal(p.stage,1);assert.notEqual(p.split,fixture.data.profiles[0].profile.split);
        for(const list of [splits,[...stages]]) {
          assert.equal(list.filter(b=>b.getAttribute('aria-pressed')==='true').length,1);
          list.forEach(b=>{assert(b.textContent.trim());assert.equal(b.getAttribute('aria-pressed'),String(b.classList.contains('selected')||b.classList.contains('active')));});
        }
      });
      tab(y.w,y.doc,t.profile); await wait();
      const picker = y.doc.querySelector('input[accept="image/jpeg,image/png,image/webp"]');
      Object.defineProperty(picker,'files',{value:[new y.w.File(['synthetic'],'report.png',{type:'image/png'})]});
      picker.dispatchEvent(new y.w.Event('change',{bubbles:true})); await wait();
      check(`Batch2 ${lang} report text has localized accessible name`, () => assert.equal(y.doc.querySelector('.report-editor textarea').getAttribute('aria-label'),t.extracted));
      assert.deepEqual(y.errors,[]);
    } finally {y.d.window.close();}

    const z = await boot(copy(fixture), w => w.localStorage.setItem('oz-language',lang));
    try {
      // Batch 6 routes directly to the same shared Body picker.
      tab(z.w,z.doc,t.profile);await wait();click(z.w,button(z.doc,lang==='en'?'General equipment & muscle priority':'المعدات العامة وأولوية العضلات'));await wait();
      const balanced=button(z.doc,t.balanced), choices=z.doc.querySelectorAll('.body-labels button');
      click(z.w,choices[1]);await wait();assert.equal(balanced.getAttribute('aria-pressed'),'false');
      click(z.w,balanced);await wait();
      check(`Batch2 ${lang} Balanced exposes and updates its selected state`,()=>{
        assert.equal(balanced.getAttribute('aria-pressed'),'true');assert.equal(choices[1].getAttribute('aria-pressed'),'false');
      });
    } finally {z.d.window.close();}
  }

  for (const lang of ['en','ar']) for (const failure of ['quota','conflict']) {
    const t=texts[lang], fault={enabled:false};
    const x=await boot(activeFixture(),w=>{
      w.localStorage.setItem('oz-language',lang);
      const set=w.Storage.prototype.setItem;
      w.Storage.prototype.setItem=function(key,value){if(key===KEY&&fault.enabled)throw new w.DOMException('Synthetic quota','QuotaExceededError');return set.call(this,key,value)};
    });
    try {
      click(x.w,x.doc.querySelector('.exercise-row'));await wait();
      input(x.w,x.doc.querySelector('#log-weight'),'23');input(x.w,x.doc.querySelector('#log-reps'),'9');await wait();
      if(failure==='quota')fault.enabled=true;
      else {const newer=stored(x);newer.revision++;newer.data.profiles[0].profile.sleep=8;x.w.localStorage.setItem(KEY,JSON.stringify(newer));}
      click(x.w,button(x.doc,t.log));await wait();
      check(`Batch2 ${lang} ${failure} appears once inside logging dialog with preserved input and recovery`,()=>{
        const alerts=x.doc.querySelectorAll('.error[role=alert]');assert.equal(alerts.length,1);
        assert(alerts[0].closest('[role=dialog]'));assert.equal(x.doc.activeElement,alerts[0]);
        assert.equal(x.doc.querySelector('#log-weight').value,'23');assert.equal(x.doc.querySelector('#log-reps').value,'9');
        assert.equal(stored(x).data.profiles[0].sessions.at(-1).sets.length,0);button(alerts[0],t.reload);
      });
      fault.enabled=false;if(failure==='conflict'){click(x.w,button(x.doc,t.reload));await wait();}
      click(x.w,button(x.doc,t.log));await wait();
      check(`Batch2 ${lang} ${failure} retry saves once and clears dialog persistence error`,()=>{
        const data=stored(x).data.profiles[0];assert.equal(data.sessions.at(-1).sets.length,1);
        assert.equal(data.sessions.at(-1).sets[0].weight,23);assert.equal(x.doc.querySelector('.error'),null);
        if(failure==='conflict')assert.equal(data.profile.sleep,8);assert.deepEqual(x.errors,[]);
      });
    } finally {x.d.window.close();}
  }
};
