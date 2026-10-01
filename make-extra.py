import json
from pathlib import Path
m=json.load(open('oz-v2-assets/manifest.json'))
rows='''Goblet_Squat|سكوات كيتل بيل أمام الصدر|knee
Smith_Machine_Squat|سكوات سميث|knee
Hack_Squat|هاك سكوات|knee
Bodyweight_Squat|سكوات وزن الجسم|knee
Barbell_Squat|سكوات بار|knee
Dumbbell_Lunges|لانجز دمبل|knee
Dumbbell_Rear_Lunge|لانجز خلفي دمبل|knee
Dumbbell_Step_Ups|طلوع بنش بالدمبل|knee
Split_Squat_with_Dumbbells|سكوات بلغاري دمبل|knee
Thigh_Adductor|ضم الفخذ جهاز|adductor
Thigh_Abductor|فتح الفخذ جهاز|abductor
Barbell_Hip_Thrust|هيب ثرست بار|hip
Barbell_Glute_Bridge|جسر الحوض بالبار|hip
Single_Leg_Glute_Bridge|جسر الحوض رجل واحدة|hip
Standing_Leg_Curl|خلفية رجل واقف جهاز|curl
Stiff-Legged_Dumbbell_Deadlift|ديدلفت دمبل ركبة شبه مفرودة|hinge
Standing_Calf_Raises|سمانة واقف جهاز|calf
Smith_Machine_Calf_Raise|سمانة سميث|calf
Barbell_Bench_Press_-_Medium_Grip|بنش بار مستوي|push
Barbell_Incline_Bench_Press_-_Medium_Grip|بنش بار مائل|incline
Decline_Dumbbell_Bench_Press|بنش دمبل مائل لتحت|decline
Leverage_Decline_Chest_Press|صدر جهاز مائل لتحت|decline
Smith_Machine_Bench_Press|بنش مستوي سميث|push
Smith_Machine_Incline_Bench_Press|بنش مائل سميث|incline
Smith_Machine_Decline_Press|بنش سميث مائل لتحت|decline
Cable_Chest_Press|ضغط صدر كابل|push
Incline_Cable_Chest_Press|ضغط صدر مائل كابل|incline
Cable_Crossover|كروس أوفر كابل|fly
Low_Cable_Crossover|تجميع كابل من تحت|fly
Dumbbell_Flyes|تفتيح صدر دمبل|fly
Incline_Dumbbell_Flyes|تفتيح دمبل مائل|fly
Decline_Dumbbell_Flyes|تفتيح دمبل مائل لتحت|fly
Close-Grip_Front_Lat_Pulldown|سحب عالي قبضة ضيقة|vertical
V-Bar_Pulldown|سحب عالي قبضة محايدة V|vertical
Underhand_Cable_Pulldowns|سحب عالي قبضة مقلوبة|vertical
Band_Assisted_Pull-Up|عقلة بمساعدة مطاط|vertical
One-Arm_Dumbbell_Row|سحب دمبل يد واحدة|row
Dumbbell_Incline_Row|سحب دمبل صدر مسنود|row
Bent_Over_Barbell_Row|سحب بار منحني|row
Leverage_High_Row|سحب عالي جهاز|row
Straight-Arm_Pulldown|سحب كابل ذراع مفرود|pullover
Seated_One-arm_Cable_Pulley_Rows|سحب أرضي كابل يد واحدة|row
Leverage_Shoulder_Press|ضغط كتف جهاز|press
Smith_Machine_Overhead_Shoulder_Press|ضغط كتف سميث|press
Cable_Rear_Delt_Fly|رفرفة خلفي كابل|rear
Face_Pull|فيس بول حبل|rear
Seated_Bent-Over_Rear_Delt_Raise|رفرفة خلفي دمبل جالس|rear
Front_Dumbbell_Raise|رفرفة أمامي دمبل|front
Dumbbell_Bicep_Curl|باي دمبل|biceps
Incline_Dumbbell_Curl|باي دمبل مائل|biceps
Concentration_Curls|باي تركيز دمبل|biceps
Cable_Hammer_Curls_-_Rope_Attachment|باي هامر حبل|biceps
Preacher_Curl|باي بار على سكوت|biceps
Barbell_Curl|باي بار مستقيم|biceps
Cable_Rope_Overhead_Triceps_Extension|تراي حبل فوق الرأس|triceps
Seated_Triceps_Press|تراي دمبل فوق الرأس جالس|triceps
Lying_Triceps_Press|تراي دمبل نايم|triceps
Reverse_Grip_Triceps_Pushdown|تراي كابل قبضة مقلوبة|triceps
Triceps_Pushdown_-_V-Bar_Attachment|تراي كابل مقبض V|triceps
Plank|بلانك|core
Knee_Hip_Raise_On_Parallel_Bars|رفع الركب على كرسي البطن|core
Hanging_Leg_Raise|رفع الرجلين متعلق|core
Ab_Crunch_Machine|كرانش جهاز|core
Cable_Crunch|كرانش كابل|core
Reverse_Crunch|كرانش عكسي|core
Crunches|كرانش أرضي|core
Cat_Stretch|حركة القطة للضهر|mobility
Kneeling_Hip_Flexor|إطالة أمام الحوض راكع|mobility
Seated_Floor_Hamstring_Stretch|إطالة خلفية الفخذ جالس|mobility
Calf_Stretch_Hands_Against_Wall|إطالة السمانة على الحائط|mobility
Shoulder_Stretch|إطالة الكتف|mobility
Triceps_Stretch|إطالة الترايسبس|mobility
Chest_And_Front_Of_Shoulder_Stretch|إطالة الصدر والكتف الأمامي|mobility
Elliptical_Trainer|إليبتكال|cardio
Rowing_Stationary|جهاز تجديف|cardio
Step_Mill|جهاز السلم|cardio'''
trans={v.split('|')[0]:v.split('|')[1:] for v in rows.splitlines()}
eqs={'kettlebells':'kettlebell','body only':'body','e-z curl bar':'barbell',None:'body','other':'body'}
special={'Band_Assisted_Pull-Up':'band','Knee_Hip_Raise_On_Parallel_Bars':'machine','Hanging_Leg_Raise':'machine','Lying_Triceps_Press':'dumbbell'}
loads={'Plank':['shoulder','elbow','back','hip','ankle','neck'],'Hanging_Leg_Raise':['shoulder','elbow','back','hip','neck'],'Knee_Hip_Raise_On_Parallel_Bars':['shoulder','elbow','back','hip'],'Cat_Stretch':['back','neck','shoulder','elbow','knee','hip'],'Kneeling_Hip_Flexor':['knee','hip','back'],'Seated_Floor_Hamstring_Stretch':['hip','back','knee'],'Calf_Stretch_Hands_Against_Wall':['ankle','shoulder','elbow','knee'],'Shoulder_Stretch':['shoulder','elbow','neck'],'Triceps_Stretch':['shoulder','elbow','neck'],'Chest_And_Front_Of_Shoulder_Stretch':['shoulder','elbow','neck'],'Elliptical_Trainer':['knee','hip','ankle','shoulder','elbow','back'],'Rowing_Stationary':['knee','hip','back','shoulder','elbow','neck','ankle'],'Step_Mill':['knee','hip','ankle','back'],'Leverage_High_Row':['shoulder','elbow','neck'],'Dumbbell_Incline_Row':['shoulder','elbow','neck']}
cues={'knee':('اتعلم الحركة بحمل خفيف. ثبّت القدم واتحرك في مدى مريح؛ استخدم أقفال الجهاز ومساعدة المدرب.','Learn with a light load. Keep feet stable and use a comfortable range, safety stops and coaching.'),'row':('اسحب بالكوع من غير تأرجح أو شد الرقبة. ارجع بتحكم.','Pull through the elbows without swinging or straining the neck; return with control.'),'vertical':('اسحب قدام الوجه من غير تأرجح. اختار مدى مريح.','Pull in front without swinging; choose a comfortable range.'),'core':('اتنفس وحافظ على تحكم الجذع. قلّل المدى لو بتعوض بضهرك.','Breathe and control the trunk; reduce range if your back compensates.'),'mobility':('حركة هادية من غير نط أو ضغط على الألم. الإطالة مريحة مش مؤلمة.','Move gently without bouncing or pushing into pain; a stretch should be comfortable.'),'cardio':('ابدأ بسهولة تقدر تتكلم معاها. ظبّط الجهاز وخفّض السرعة لو تعبت.','Start at an easy conversational pace; adjust the machine and slow down when needed.')}
out=[]
for x in m:
 if x['existing']:continue
 id=x['id'];ar,pat=trans[id];eq=special.get(id,eqs.get(x['equipment'],x['equipment']));g=x['suggestedGroup']
 if g=='cardio':eq='cardio'
 cue=cues.get(pat,('اختار حمل خفيف، ثبّت جسمك واتحرك بتحكم في مدى مريح من غير اندفاع.','Choose a light load, keep your body stable and move with control through a comfortable range.'))
 v=dict(id=id,ar=ar,en='Lying dumbbell triceps extension' if id=='Lying_Triceps_Press' else x['sourceName'],group=g,pattern=pat,eq=eq,reps=[8,12] if x['mechanic']=='compound' else [10,15],rest=120 if x['mechanic']=='compound' else 90,arCue=cue[0],enCue=cue[1],unit='body' if eq in ['body','band','cardio'] or id in ['Hanging_Leg_Raise','Knee_Hip_Raise_On_Parallel_Bars'] else 'each' if eq in ['dumbbell','kettlebell'] and id not in ['Goblet_Squat','Seated_Triceps_Press'] else 'total' if eq in ['barbell','kettlebell'] or 'Smith' in id else 'stack',compound=x['mechanic']=='compound',aliases=[ar.replace('جهاز','').strip(),x['sourceName'].replace('-',' ')])
 if id in loads:v['loadedAreas']=loads[id]
 if id=='Band_Assisted_Pull-Up':v['assisted']=True
 if g=='mobility' or id=='Plank':v.update(mode='seconds',reps=[15,30])
 if g=='cardio':v.update(mode='minutes',reps=[5,12],compound=False)
 out.append(v)
Path('oz-fit-v2/lib/extra.ts').write_text("import type {Exercise} from './fitness';\nexport const extraExercises:Exercise[]="+json.dumps(out,ensure_ascii=False)+';\n')
p=Path('oz-fit-v2/lib/fitness.ts');s=p.read_text().replace("kettlebell:['كيتل بيل','Kettlebell']","kettlebell:['كيتل بيل','Kettlebell'],band:['مطاط + بار عقلة','Band + pull-up bar']").replace("'body','kettlebell'","'body','kettlebell','band'");s=s.replace("core:['back','hip','neck']","core:['back','hip','neck'],front:['shoulder','neck'],pullover:['shoulder','elbow','back','neck']");p.write_text(s)
p=Path('oz-fit-v2/lib/legacy.ts');s=p.read_text().replace("'رفرفة جانبي كابل','Seated cable lateral raise','shoulders','lateral'","'رفرفة خلفي كابل منحني جالس','Seated bent-over cable rear fly','shoulders','rear'")
# explicit cardio load tags and unit are attached below without rewriting historical ids
s += '''\nfor(const e of legacyExercises){if(e.id==='Walking_Treadmill'||e.id==='Bicycling_Stationary'){e.mode='minutes';e.loadedAreas=['knee','hip','ankle','back'];}if(e.id==='Leverage_Iso_Row')e.loadedAreas=['shoulder','elbow','neck'];e.aliases=e.id==='Wide-Grip_Lat_Pulldown'?['لات بول داون','سحب عالي']:e.id==='Leg_Press'?['ليج بريس']:e.id==='Reverse_Machine_Flyes'?['باك فلاي']:e.id==='Leverage_Iso_Row'?['ايه ريم','سحب جهاز']:[];}\n''';p.write_text(s)
print('Extra library',len(out))
