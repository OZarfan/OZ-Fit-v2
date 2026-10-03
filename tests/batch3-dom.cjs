const assert=require('node:assert/strict');
module.exports=async function batch3({boot,wait,button,click,tab,input,check,fixture}){
  const copy=v=>JSON.parse(JSON.stringify(v)),KEY='oz-fit-html-state-v1';
  for(const lang of ['en','ar']){
    const ar=lang==='ar',t={today:ar?'اليوم':'Today',plan:ar?'خطتي':'Plan',profile:ar?'ملفي':'Profile',reload:ar?'إعادة تحميل السجل':'Reload record'};
    const data=copy(fixture);data.data.profiles[0].profile.availableDays=[0,1,2,3,4,5];
    const x=await boot(data,w=>w.localStorage.setItem('oz-language',lang));
    const choose=(el,value)=>{el.value=value;el.dispatchEvent(new x.w.Event('change',{bubbles:true}));};
    const weekDay=day=>x.doc.querySelectorAll('.week-day')[(day-data.data.profiles[0].profile.weekStartsOn+7)%7];
    const selected=day=>assert.equal(weekDay(day).getAttribute('aria-pressed'),'true');
    const returnToday=async()=>{tab(x.w,x.doc,t.today);await wait();};
    try{
      click(x.w,weekDay(1));await wait();
      check(`Batch3 ${lang} weekdays retain full localized accessible names and short labels`,()=>{
        const expected=ar?['السبت','الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة']:['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
        [...x.doc.querySelectorAll('.week-day')].forEach((b,i)=>{
          assert(b.getAttribute('aria-label').startsWith(expected[i]+' · '));
          assert(b.querySelector('.weekday-short').textContent.trim());assert(b.querySelector('.weekday-full').textContent.trim());
        });selected(1);
      });
      tab(x.w,x.doc,t.plan);await wait();click(x.w,x.doc.querySelector('#nutrition [role=checkbox]'));await wait();await returnToday();
      check(`Batch3 ${lang} nutrition save preserves viewed workout day`,()=>selected(1));
      tab(x.w,x.doc,t.profile);await wait();choose(x.doc.querySelector('.preference-row select'),'preferred');await wait();await returnToday();
      check(`Batch3 ${lang} exercise preference save preserves viewed workout day`,()=>selected(1));
      tab(x.w,x.doc,t.profile);await wait();click(x.w,button(x.doc,ar?'ركبة':'Knee'));await wait();await returnToday();
      check(`Batch3 ${lang} injury save preserves viewed workout day and injury record`,()=>{
        selected(1);assert.equal(JSON.parse(x.w.localStorage.getItem(KEY)).data.profiles[0].profile.injuries[0].area,'knee');
      });
      click(x.w,weekDay(2));await wait();tab(x.w,x.doc,t.profile);await wait();
      const increment=()=>[...x.doc.querySelectorAll('label')].find(l=>l.textContent.includes(ar?'زيادة العلوي':'Preferred upper increment')).querySelector('input');
      input(x.w,increment(),'2');await wait();await returnToday();
      check(`Batch3 ${lang} unrelated settings save also preserves a viewed rest day`,()=>selected(2));
      click(x.w,weekDay(1));await wait();
      const schedule=async(remove,add)=>{
        tab(x.w,x.doc,t.plan);await wait();click(x.w,x.doc.querySelector('.split-grid').closest('section').querySelector('.chips button'));await wait();
        const dialog=x.doc.querySelector('[role=dialog]'),names=ar?['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة']:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
        click(x.w,button(dialog,names[remove]));await wait();click(x.w,button(dialog,names[add]));await wait();
        click(x.w,button(dialog,ar?'احفظ التوزيع':'Save schedule'));await wait();await returnToday();
      };
      await schedule(5,2);
      check(`Batch3 ${lang} schedule change retains a selected day that remains scheduled`,()=>selected(1));
      await schedule(1,4);
      check(`Batch3 ${lang} schedule change moves an invalid selection to first scheduled day`,()=>{
        selected(0);const p=JSON.parse(x.w.localStorage.getItem(KEY)).data.profiles[0].profile;
        assert.deepEqual(p.days,[0,3,2,4]);assert.equal(p.planHistory.length,data.data.profiles[0].profile.planHistory.length+2);
      });
      assert.deepEqual(x.errors,[]);
    }finally{x.d.window.close();}

    const restData=copy(fixture),active=copy(restData.data.profiles[0].sessions[0]),deadline=Date.now()+120000;
    Object.assign(active,{id:'batch3-rest',startedAt:new Date().toISOString(),finishedAt:null,sets:[],swaps:[],skipped:[],restState:{deadline,totalSeconds:120}});
    restData.data.profiles[0].sessions.push(active);
    const y=await boot(restData,w=>w.localStorage.setItem('oz-language',lang));
    try{
      check(`Batch3 ${lang} rest return control is in workspace flow before workout content`,()=>{
        const control=y.doc.querySelector('.floating-timer');assert.equal(control.parentElement.className,'workspace');
        assert(control.compareDocumentPosition(y.doc.querySelector('.exercise-card'))&y.w.Node.DOCUMENT_POSITION_FOLLOWING);
      });
      click(y.w,y.doc.querySelector('.floating-timer'));await wait();
      check(`Batch3 ${lang} active rest precedes editable load/reps in logger`,()=>{
        const timer=y.doc.querySelector('.rest-timer'),weight=y.doc.querySelector('#log-weight');
        assert(timer.compareDocumentPosition(weight)&y.w.Node.DOCUMENT_POSITION_FOLLOWING);
        assert(y.doc.querySelector('.log-dialog').classList.contains('resting'));assert.equal(weight.disabled,false);
        input(y.w,weight,'18');
      });await wait();
      click(y.w,button(y.doc,'+30s'));await wait();
      check(`Batch3 ${lang} reordered rest actions preserve exact extension and editable draft`,()=>{
        assert.equal(JSON.parse(y.w.localStorage.getItem(KEY)).data.profiles[0].sessions.at(-1).restState.deadline,deadline+30000);
        assert.equal(y.doc.querySelector('#log-weight').value,'18');
      });
      click(y.w,button(y.doc,ar?'إنهاء الراحة':'End rest'));await wait();
      check(`Batch3 ${lang} dismissal retains persisted null deadline and exits rest layout`,()=>{
        assert.equal(JSON.parse(y.w.localStorage.getItem(KEY)).data.profiles[0].sessions.at(-1).restState.deadline,null);
        assert.equal(y.doc.querySelector('.rest-timer'),null);assert(!y.doc.querySelector('.log-dialog').classList.contains('resting'));assert.deepEqual(y.errors,[]);
      });
    }finally{y.d.window.close();}
  }
};
