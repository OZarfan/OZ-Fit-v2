import {Download,Dumbbell} from 'lucide-react';
import {DayPlan,Lang,Profile,byId,days,goals,groups,recommended,reason,splits,words} from '@/lib/fitness';

// Presentation of the root's memoized plan; no second schedule or planner state.
export default function WeeklyPlan({p,plan,lang,busy,active,completedSessions,save,onSchedule,onAvailability,onExport}:{
 p:Profile;plan:DayPlan[];lang:Lang;busy:boolean;active:boolean;completedSessions:number;
 save:(p:Profile)=>Promise<boolean>;onSchedule:()=>void;onAvailability:()=>void;onExport:()=>void;
}){
 const t=(a:string,e:string)=>words(lang,a,e),li=lang==='ar'?0:1;
 const suggested=recommended(p),locked=active||busy;
 const week=Array.from({length:7},(_,i)=>(p.weekStartsOn+i)%7);
 return <>
  <div className="page-heading"><h1>{t('أسبوعك','Your week')}</h1><button className="secondary" onClick={onExport}><Download/>MD</button></div>
  <section className="panel weekly-overview" aria-labelledby="weekly-heading">
   <h2 id="weekly-heading">{t('أيام التمرين','Training days')}</h2>
   <p className="weekly-summary">{t(`${plan.length} حصص تمرين من ${p.availableDays.length} أيام متاحة.`,`${plan.length} training sessions from ${p.availableDays.length} available days.`)}</p>
   {active&&<p className="note">{t('الحصة المفتوحة لها التمارين المحفوظة وقت بدايتها. كمّلها من «اليوم» قبل تعديل الأسبوع.','Your active session keeps the exercises saved when it started. Continue it in Today before changing the week.')}</p>}
   {p.urgentSymptoms&&<p className="note">{t('اقتراح التمارين متوقف بسبب الأعراض الحادة المبلّغ عنها. راجع مختصًا قبل التمرين.','Exercise suggestions are paused because of reported acute symptoms. Seek professional assessment before exercising.')}</p>}
   <ol className="weekly-sessions">
    {plan.map(d=><li key={d.weekday} className="weekly-session" data-weekday={d.weekday}>
     <div className="weekly-session-heading">
      <h3><span className="weekly-weekday">{days[d.weekday][li]}</span><span className="weekly-session-title">{lang==='ar'?d.title:d.titleEn}</span></h3>
      <p className="weekly-duration">{d.warning?t('لا حصة مؤهلة','No eligible session'):t(`≈ ${d.minutes} دقيقة`,`≈ ${d.minutes} min`)}<small>{t(`${p.dayMinutes[String(d.weekday)]??p.minutes} دقيقة متاحة`,`${p.dayMinutes[String(d.weekday)]??p.minutes} min available`)}</small></p>
     </div>
     {d.warning?<p className="note">{p.urgentSymptoms?t('التمارين متوقفة لحين مراجعة الأعراض.','Exercises paused pending symptom review.'):t('مفيش تمارين مؤهلة بالمعدات والقيود الحالية. راجع المعدات والقيود من ملفك.','No exercises qualify with your current equipment and restrictions. Review these in Profile.')}</p>:<>
      <p className="muted weekly-muscles">{[...new Set(d.slots.map(s=>byId[s.exId]?.group).filter(Boolean))].map(g=>groups[g][li]).join(' · ')}</p>
      <details className="weekly-exercises"><summary>{t('التمارين','Exercises')} · {d.slots.length}</summary><ul>{d.slots.map(s=><li key={s.key}>{byId[s.exId][lang==='ar'?'ar':'en']} · {s.sets} × {s.low}–{s.high} {byId[s.exId].mode==='seconds'?t('ثانية','sec'):t('عدة','reps')}</li>)}{d.blocks.map(b=><li key={b.id}>{byId[b.exId][lang==='ar'?'ar':'en']} · {b.minutes} {t('دقيقة','min')}</li>)}</ul></details>
      {!!d.missing.length&&<p className="muted">{t('بعض أنماط الحركة مستبعدة بالمعدات أو القيود؛ التغطية مش كاملة.','Some movement patterns are excluded by equipment or restrictions; coverage is incomplete.')}</p>}
      {d.conservative&&<p className="muted">{t('حصة محافظة حسب القيود؛ راجعها مع مختص.','Conservative session for your restrictions; review with a professional.')}</p>}
     </>}
    </li>)}
   </ol>
   {!plan.length&&<p className="note">{t('مفيش أيام تمرين مختارة. راجع الإتاحة وعدد الحصص أدناه.','No training days selected. Review availability and session count below.')}</p>}
   <p className="weekly-rest"><strong>{t('أيام بدون حصة في الخطة','Days without a planned session')}: </strong>{week.filter(d=>!p.days.includes(d)).map(d=>days[d][li]).join(' · ')||'—'}</p>
   <p className="muted">{t('المدة تقديرية وتشمل الراحة. التنفيذ وتسجيل المجموعات من «اليوم».','Durations are estimates including rest. Use Today to train and log sets.')}</p>
  </section>
  <section className="panel weekly-reason" aria-labelledby="weekly-reason-heading">
   <h2 id="weekly-reason-heading">{t('ليه التقسيمة دي مقترحة؟','Why this recommendation?')}</h2>
   <p>{reason(p,lang)}</p>
   <p>{t('الأيام المتاحة','Available days')}: {week.filter(d=>p.availableDays.includes(d)).map(d=>days[d][li]).join(' · ')}</p>
   {suggested!==p.split&&<p className="note">{t(`اختيارك المحفوظ: ${splits[p.split][0]}. الأسبوع المعروض يتبع اختيارك؛ المقترح مش بيتطبق تلقائيًا.`,`Your saved choice: ${splits[p.split][1]}. The week above follows your choice; the recommendation is not applied automatically.`)}</p>}
   <p className="muted">{t('الوقت في التوصية هو المدة الافتراضية؛ وقت كل يوم ظاهر فوق.','The recommendation uses your default duration; each day’s available time is shown above.')}</p>
   <p>{t('أولوية العضلة','Muscle priority')}: {p.priority==='balanced'?t('متوازن','Balanced'):groups[p.priority][li]} · {t('أهداف مساندة','Supporting goals')}: {p.secondaryGoals.map(g=>goals[g][li]).join('، ')||'—'}</p>
  </section>
  <section className="panel weekly-settings" aria-labelledby="weekly-settings-heading">
   <h2 id="weekly-settings-heading">{t('عدّل أسبوعك','Adjust your week')}</h2>
   <h3>{t('توزيع الحصص داخل أيامك المتاحة','Place sessions within your available days')}</h3>
   <div className="chips">{p.availableDays.map(d=><button key={d} className={'chip '+(p.days.includes(d)?'active':'')} aria-pressed={p.days.includes(d)} disabled={locked} onClick={onSchedule}>{days[d][li]} {p.days.includes(d)?'✓':''}</button>)}</div>
   <button className="secondary" data-profile-edit="availability" disabled={locked} onClick={onAvailability}>{t('تعديل الإتاحة وعدد الحصص','Edit availability and session count')}</button>
   <details className="weekly-advanced"><summary>{t('التقسيمة والتدرج','Split & progression')} · {splits[p.split][li]} · {t('مرحلة','Stage')} {p.stage+1}</summary>
    <h3>{t('تقسيمة التمرين','Training split')}</h3>
    <div className="split-grid">{Object.entries(splits).map(([k,v])=><button aria-pressed={p.split===k} className={'split-card '+(p.split===k?'selected':'')} disabled={locked||(['ppl','bro','arnold'].includes(k)&&p.sessionsPerWeek<3)} key={k} onClick={()=>{void save({...p,split:k as Profile['split']})}}><Dumbbell/><b>{v[li]}</b>{suggested===k&&<span className="badge">{t('مقترح','Recommended')}</span>}</button>)}</div>
    {p.split==='bro'&&p.sessionsPerWeek<=3&&<p className="note">{t('في توزيع البرو سبليت ده، أغلب العضلات لها يوم رئيسي واحد أسبوعيًا. تقسيمة جسم كامل قد توزع التكرار بشكل أفضل لثلاث حصص.','In this Bro split, most muscles have one main day weekly. Full body may distribute frequency better across three sessions.')}</p>}
    <p className="muted">{t('التقسيمة المختارة قرارك؛ جرعة التمرين تتبع الهدف والخبرة والوقت والقيود. تغيير اسم التقسيمة مش بديل عن متابعة الأداء.','The chosen split is yours; training dose follows goal, experience, time and restrictions. A split name does not replace performance tracking.')}</p>
    <h3>{t('التدرج','Progression')}</h3><p>{t('ابدأ بمجموعتين. المرحلة الثالثة تصل لثلاث مجموعات حسب وقتك. لا تنتقل تلقائيًا بالتاريخ؛ راجع الأداء والاستشفاء بعد 4 ثم 12 حصة.','Start with two sets. Stage three reaches three sets within your time. Stages do not advance by date; review performance/recovery after 4 then 12 sessions.')}</p>
    <div className="chips">{[0,1,2].map(stage=><button key={stage} aria-pressed={stage===p.stage} className={'chip '+(stage===p.stage?'active':'')} disabled={locked||stage>p.stage&&completedSessions<(stage===1?4:12)} onClick={()=>{void save({...p,stage})}}>{t('مرحلة','Stage')} {stage+1}</button>)}</div>
    <p className="note">{t('القوة: المركبات 5–8 عدات، راحة 3 دقائق؛ بعد حصتين بكل المجموعات عند الحد الأعلى وRIR≥2، نقترح زيادة صغيرة لا تتجاوز تقريبًا 5% ونرجع لأول النطاق. الحصة المحافظة تستثنى من الزيادة الآلية.','Strength: compounds 5–8 reps, 3-min rest. After two complete top-range sessions at RIR≥2, suggest a small increase capped around 5% and return to the lower range. Conservative plans do not auto-increase.')}</p>
   </details>
  </section>
 </>;
}
