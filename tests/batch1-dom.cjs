const assert = require('node:assert/strict');

module.exports = async function batch1({boot, wait, button, click, tab, input, check, fixture}) {
  const KEY = 'oz-fit-html-state-v1';
  const copy = value => JSON.parse(JSON.stringify(value));
  const stored = x => JSON.parse(x.w.localStorage.getItem(KEY));
  const bundle = x => stored(x).data.profiles[0];
  const field = (scope, text) => {
    const label = [...scope.querySelectorAll('label')].find(x => x.textContent.trim().startsWith(text));
    assert(label, 'Missing field: ' + text);
    return label.querySelector('input,textarea,select');
  };
  const english = w => w.localStorage.setItem('oz-language', 'en');
  const choose = (x, el, value) => { el.value = value; el.dispatchEvent(new x.w.Event('change', {bubbles:true})); };

  for (const editor of ['gym', 'prescription']) for (const failure of ['quota', 'conflict']) {
    const fault = {quota:false};
    const x = await boot(copy(fixture), w => {
      english(w);
      const set = w.Storage.prototype.setItem;
      w.Storage.prototype.setItem = function(key, value) {
        if (key === KEY && fault.quota) throw new w.DOMException('Synthetic quota failure', 'QuotaExceededError');
        return set.call(this, key, value);
      };
    });
    try {
      tab(x.w, x.doc, 'Profile'); await wait();
      const name = 'Synthetic ' + editor + ' ' + failure;
      let scope, nameInput, saveText;
      if (editor === 'gym') {
        click(x.w, button(x.doc, 'New gym')); await wait();
        scope = [...x.doc.querySelectorAll('section')].find(s => s.querySelector('h2')?.textContent === 'My gym');
        nameInput = field(scope, 'Gym name'); saveText = 'Save and activate gym';
      } else {
        scope = [...x.doc.querySelectorAll('details')].find(s => s.querySelector('summary')?.textContent === 'Therapist-prescribed exercises');
        scope.open = true;
        nameInput = field(scope, 'Exercise name'); saveText = 'Add prescription';
        input(x.w, field(scope, 'Sets'), '3');
        input(x.w, field(scope, 'Prescribed frequency'), 'As entered by clinician');
      }
      input(x.w, nameInput, name); await wait();
      if (failure === 'quota') fault.quota = true;
      else {
        const concurrent = stored(x); concurrent.revision++; concurrent.data.profiles[0].profile.sleep = 8;
        x.w.localStorage.setItem(KEY, JSON.stringify(concurrent));
      }
      const before = x.w.localStorage.getItem(KEY);
      click(x.w, button(scope, saveText)); await wait();
      check(`Batch1 ${editor}: ${failure} preserves draft and stored envelope`, () => {
        assert.equal(nameInput.value, name);
        assert.equal(x.w.localStorage.getItem(KEY), before);
        assert(scope.textContent.includes('Not saved'));
        if (editor === 'prescription') assert.equal(field(scope, 'Sets').value, '3');
      });
      fault.quota = false;
      if (failure === 'conflict') {
        click(x.w, button(x.doc, 'Reload record')); await wait(); await wait();
        assert.equal(field(scope, editor === 'gym' ? 'Gym name' : 'Exercise name').value, name);
        assert(x.doc.contains(scope), 'Recovery reload must retain mounted editor');
      }
      click(x.w, button(scope, saveText)); await wait();
      check(`Batch1 ${editor}: successful retry saves exactly once before clearing`, () => {
        const p = bundle(x).profile;
        const records = editor === 'gym' ? p.gyms : p.prescribedRehab;
        assert.equal(records.filter(v => v.name === name).length, 1);
        if (editor === 'gym') assert.equal(p.activeGymId, records.find(v => v.name === name).id);
        else { assert.equal(nameInput.value, ''); assert.equal(records.find(v => v.name === name).sets, 3); }
        if (failure === 'conflict') assert.equal(p.sleep, 8, 'Retry must retain concurrent saved changes');
        assert.deepEqual(x.errors, []);
      });
    } finally { x.d.window.close(); }
  }

  {
    const revoked = []; let counter = 0;
    const x = await boot(copy(fixture), w => {
      english(w); w.URL.createObjectURL = () => 'blob:synthetic-report-' + (++counter);
      w.URL.revokeObjectURL = url => revoked.push(url);
    });
    try {
      tab(x.w, x.doc, 'Profile'); await wait();
      const picker = x.doc.querySelector('input[accept="image/jpeg,image/png,image/webp"]');
      const upload = async name => {
        Object.defineProperty(picker, 'files', {configurable:true, value:[new x.w.File(['synthetic'], name, {type:'image/png'})]});
        picker.dispatchEvent(new x.w.Event('change', {bubbles:true})); await wait();
      };
      const before = x.w.localStorage.getItem(KEY);
      await upload('first.png');
      check('Batch1 report preview uses object URL directly', () => assert.equal(x.doc.querySelector('.report-editor img').getAttribute('src'), 'blob:synthetic-report-1'));
      await upload('second.png');
      check('Batch1 replacing report image revokes only the old object URL', () => {
        assert.equal(x.doc.querySelector('.report-editor img').getAttribute('src'), 'blob:synthetic-report-2');
        assert.deepEqual(revoked, ['blob:synthetic-report-1']);
      });
      click(x.w, button(x.doc.querySelector('.report-editor'), 'Cancel')); await wait();
      check('Batch1 cancelling report preview revokes URL without persisting image bytes', () => {
        assert.deepEqual(revoked, ['blob:synthetic-report-1','blob:synthetic-report-2']);
        assert.equal(x.w.localStorage.getItem(KEY), before);
        assert.equal(x.doc.querySelector('.report-editor'), null);
      });
      await upload('third.png'); tab(x.w, x.doc, 'Today'); await wait();
      check('Batch1 leaving report editor revokes its object URL', () => assert.deepEqual(revoked, ['blob:synthetic-report-1','blob:synthetic-report-2','blob:synthetic-report-3']));
      assert.deepEqual(x.errors, []);
    } finally { x.d.window.close(); }
  }

  {
    const data = copy(fixture), original = {area:'knee',status:'improving',reportedAt:'2026-08-01',reviewed:true,history:[{status:'active',at:'2026-08-01T12:00:00Z'}]};
    data.data.profiles[0].profile.injuries = [original];
    let consent = false, asked = 0;
    const x = await boot(data, w => { english(w); w.confirm = () => { asked++; return consent; }; });
    try {
      tab(x.w,x.doc,'Profile'); await wait();
      const scope = [...x.doc.querySelectorAll('details')].find(s => s.querySelector('summary')?.textContent === 'Injuries and instructions'); scope.open = true;
      click(x.w,button(scope,'Knee')); await wait();
      check('Batch1 cancelling area deselection leaves injury and history unchanged', () => {
        assert.equal(asked,1); assert.deepEqual(bundle(x).profile.injuries,[original]);
      });
      consent = true; click(x.w,button(scope,'Knee')); await wait();
      check('Batch1 confirmed deselection records recovery without deleting history', () => {
        const injury=bundle(x).profile.injuries[0]; assert.equal(injury.status,'recovered');
        assert.equal(injury.reportedAt,original.reportedAt); assert.deepEqual(injury.history[0],original.history[0]);
        assert.equal(injury.history.at(-1).status,'recovered'); assert.equal(injury.reviewed,false);
      });
      click(x.w,button(scope,'Knee')); await wait();
      choose(x,scope.querySelector('.injury-row select'),'improving'); await wait();
      click(x.w,button(scope,'Mark recovered')); await wait();
      check('Batch1 recurrence and both status controls retain cumulative injury history', () => {
        const injuries=bundle(x).profile.injuries; assert.equal(injuries.length,1);
        assert.equal(injuries[0].reportedAt,original.reportedAt);
        assert.deepEqual(injuries[0].history.map(h=>h.status),['active','recovered','active','improving','recovered']);
        assert.deepEqual(x.errors,[]);
      });
    } finally { x.d.window.close(); }
  }

  {
    const data=copy(fixture), active=copy(data.data.profiles[0].sessions[0]);
    Object.assign(active,{id:'batch1-active',startedAt:new Date().toISOString(),finishedAt:null,sets:[],swaps:[],skipped:[]});
    data.data.profiles[0].sessions.push(active);
    let x=await boot(data,english);
    try {
      click(x.w,x.doc.querySelector('.exercise-row')); await wait();
      input(x.w,x.doc.querySelector('.logging-controls input'),'20'); await wait();
      click(x.w,button(x.doc,'Log set & start rest')); await wait();
      const first=bundle(x).sessions.at(-1), originalDeadline=first.restState.deadline;
      check('Batch1 set and rest deadline are saved atomically',()=>{
        assert.equal(first.sets.length,1); assert(originalDeadline>Date.now());
        assert.equal(first.restState.totalSeconds,active.slots[0].rest);
      });
      click(x.w,button(x.doc,'+30s')); await wait();
      const extended=stored(x);
      check('Batch1 rest extension persists exact deadline and existing set identity',()=>{
        const s=extended.data.profiles[0].sessions.at(-1);
        assert.equal(s.restState.deadline,originalDeadline+30000); assert.deepEqual(s.sets,first.sets);
      });
      x.d.window.close(); x=await boot(extended,english);
      click(x.w,x.doc.querySelector('.exercise-row')); await wait();
      check('Batch1 reloading restores extended rest countdown',()=>{
        assert(x.doc.querySelector('[role=timer]'));
        const text=x.doc.querySelector('.rest-timer strong').textContent;
        const [m,s]=text.split(':').map(Number), remaining=m*60+s;
        assert(Math.abs(remaining-(originalDeadline+30000-Date.now())/1000)<3);
      });
      const setItem=x.w.Storage.prototype.setItem;
      x.w.Storage.prototype.setItem=function(key,value){if(key===KEY)throw new x.w.DOMException('Synthetic quota','QuotaExceededError');return setItem.call(this,key,value)};
      click(x.w,button(x.doc,'End rest')); await wait();
      check('Batch1 failed rest dismissal preserves persisted and visible countdown',()=>{
        assert(x.doc.querySelector('[role=timer]'));assert.equal(bundle(x).sessions.at(-1).restState.deadline,originalDeadline+30000);
      });
      x.w.Storage.prototype.setItem=setItem;
      click(x.w,button(x.doc,'End rest')); await wait();const dismissed=stored(x);
      x.d.window.close();x=await boot(dismissed,english);
      check('Batch1 dismissed rest stays dismissed after reload',()=>{
        assert.equal(bundle(x).sessions.at(-1).restState.deadline,null);assert.equal(x.doc.querySelector('.floating-timer'),null);
      });
      const legacy=copy(extended);delete legacy.data.profiles[0].sessions.at(-1).restState;
      x.d.window.close();x=await boot(legacy,english);
      check('Batch1 legacy active session restores last-set rest without rewriting storage',()=>{
        assert(x.doc.querySelector('.floating-timer'));assert.deepEqual(stored(x),legacy);
      });
      const expired=copy(extended);expired.data.profiles[0].sessions.at(-1).restState.deadline=Date.now()-1000;
      x.d.window.close();x=await boot(expired,english);
      check('Batch1 expired persisted rest is not restarted on reload',()=>assert.equal(x.doc.querySelector('.floating-timer'),null));
      assert.deepEqual(x.errors,[]);
    } finally {x.d.window.close();}
  }
};
