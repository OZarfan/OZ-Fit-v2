const assert = require('node:assert/strict');

// Full suite: npm run test:dom
// Focused suite: set OZ_DOM_SUITE=gym-selector, then npm run test:dom.
module.exports = async function gymSelector({boot, wait, button, click, tab, input, check, fixture}) {
  const KEY='oz-fit-html-state-v1', copy=value=>JSON.parse(JSON.stringify(value));
  const field=(scope,text)=>{
    const label=[...scope.querySelectorAll('label')].find(el=>el.textContent.trim().startsWith(text));
    assert(label,'Missing field '+text);return label.querySelector('input,select');
  };
  const choose=(x,el,value)=>{el.value=value;el.dispatchEvent(new x.w.Event('change',{bubbles:true}));};
  const stored=x=>JSON.parse(x.w.localStorage.getItem(KEY));
  const snapshot=scope=>[...scope.querySelectorAll('input,[role=checkbox]')].map(el=>({
    type:el.type||el.getAttribute('role'),value:el.value??null,checked:el.getAttribute('aria-checked')
  }));

  for(const draftKind of ['new','existing'])for(const failure of ['quota','conflict']) {
    const data=copy(fixture),p=data.data.profiles[0].profile;
    const gym=id=>({id,name:'Saved '+id,equipment:[...p.equipment],exerciseIds:[],exact:false,bars:[20],plates:[{kg:2.5,pairs:2}]});
    p.gyms=[gym('gym-a'),gym('gym-b')];p.activeGymId='gym-a';
    const fault={enabled:false};
    const x=await boot(data,w=>{
      w.localStorage.setItem('oz-language','en');
      const set=w.Storage.prototype.setItem;
      w.Storage.prototype.setItem=function(key,value){
        if(key===KEY&&fault.enabled)throw new w.DOMException('Synthetic quota failure','QuotaExceededError');
        return set.call(this,key,value);
      };
    });
    try {
      tab(x.w,x.doc,'Profile');await wait();
      const scope=[...x.doc.querySelectorAll('section')].find(s=>s.querySelector('h2')?.textContent==='My gym');
      if(draftKind==='new'){click(x.w,button(scope,'New gym'));await wait();}
      const name='Synthetic '+draftKind+' '+failure;
      input(x.w,field(scope,'Gym name'),name);await wait();
      input(x.w,field(scope,'Bar weights'),'15,20');await wait();
      input(x.w,field(scope,'Plate kg'),'5');await wait();
      input(x.w,field(scope,'Available pairs'),'3');await wait();
      const exact=[...scope.querySelectorAll('label')].find(l=>l.textContent.startsWith('Use only photo-selected'));
      click(x.w,exact.querySelector('[role=checkbox]'));await wait();
      click(x.w,scope.querySelector('.catalog-card [role=checkbox]'));await wait();
      const draftSnapshot=snapshot(scope);
      if(failure==='quota')fault.enabled=true;
      else {const concurrent=stored(x);concurrent.revision++;concurrent.data.profiles[0].profile.sleep=8;x.w.localStorage.setItem(KEY,JSON.stringify(concurrent));}
      const before=x.w.localStorage.getItem(KEY);
      // Match the verified path: an explicit failed save, followed by a failed selector save.
      click(x.w,button(scope,'Save and activate gym'));await wait();
      assert.deepEqual(snapshot(scope),draftSnapshot);
      choose(x,field(scope,'Active gym'),'gym-b');await wait();
      check(`Gym selector ${draftKind}/${failure}: failed selection preserves complete editable draft and stored selection`,()=>{
        assert.deepEqual(snapshot(scope),draftSnapshot);
        assert.equal(field(scope,'Active gym').value,'gym-a');
        assert.equal(x.w.localStorage.getItem(KEY),before);
        assert(x.doc.querySelector('.error[role=alert]'));
        assert.equal(field(scope,'Gym name').disabled,false);
      });
      input(x.w,field(scope,'Gym name'),name+' edited');await wait();
      input(x.w,field(scope,'Bar weights'),'10,20');await wait();
      check(`Gym selector ${draftKind}/${failure}: draft accepts further edits after failure`,()=>{
        assert.equal(field(scope,'Gym name').value,name+' edited');
        assert.equal(field(scope,'Bar weights').value,'10,20');
        assert.equal(field(scope,'Plate kg').value,'5');
        assert.equal(field(scope,'Available pairs').value,'3');
        assert.equal(exact.querySelector('[role=checkbox]').getAttribute('aria-checked'),'true');
      });
      const editedSnapshot=snapshot(scope);fault.enabled=false;
      if(failure==='conflict'){
        click(x.w,button(x.doc,'Reload record'));await wait();await wait();
        assert(x.doc.contains(scope));assert.deepEqual(snapshot(scope),editedSnapshot);
      }
      const beforeSuccess=stored(x),savedGyms=copy(beforeSuccess.data.profiles[0].profile.gyms);
      choose(x,field(scope,'Active gym'),'gym-b');await wait();
      check(`Gym selector ${draftKind}/${failure}: confirmed selection clears draft and displays saved target without saving draft`,()=>{
        const next=stored(x);assert.equal(next.revision,beforeSuccess.revision+1);
        assert.equal(next.data.profiles[0].profile.activeGymId,'gym-b');
        assert.deepEqual(next.data.profiles[0].profile.gyms,savedGyms);
        assert.equal(field(scope,'Active gym').value,'gym-b');
        assert.equal(field(scope,'Gym name').value,'Saved gym-b');
        assert.equal(field(scope,'Bar weights').value,'20');
        assert.equal(scope.querySelector('[role=status]'),null);
        assert.equal(x.doc.querySelector('.error[role=alert]'),null);
        if(failure==='conflict')assert.equal(next.data.profiles[0].profile.sleep,8);
      });
      choose(x,field(scope,'Active gym'),'');await wait();
      check(`Gym selector ${draftKind}/${failure}: confirmed general-equipment selection retains existing behavior`,()=>{
        assert.equal(stored(x).data.profiles[0].profile.activeGymId,'');
        assert.equal(scope.querySelector('.catalog-grid'),null);
        assert.deepEqual(stored(x).data.profiles[0].profile.gyms,savedGyms);
        assert.deepEqual(x.errors,[]);
      });
    } finally {x.d.window.close();}
  }
};
