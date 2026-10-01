import {Profile,nutrition} from './fitness';
export type Food={id:string;ar:string;en:string;p:number;c:number;f:number;allergens:string[];veg:boolean};
// Per 100 g edible/cooked food unless indicated. Approximate recipe values; see food-source notes in UI.
export const foods:Food[]=[
{id:'ful',ar:'فول مطبوخ بدون زيت',en:'Cooked fava beans, no oil',p:7.6,c:19.7,f:.4,allergens:['legumes'],veg:true},
{id:'eggs',ar:'بيض مسلوق',en:'Boiled eggs',p:12.6,c:1.1,f:10.6,allergens:['eggs'],veg:true},
{id:'areesh',ar:'جبنة قريش قليلة الدسم',en:'Low-fat areesh cheese',p:13,c:4,f:3,allergens:['milk'],veg:true},
{id:'chicken',ar:'صدر فراخ مطبوخ بدون جلد',en:'Cooked skinless chicken breast',p:31,c:0,f:3.6,allergens:[],veg:false},
{id:'rice',ar:'أرز مطبوخ بدون زيت',en:'Cooked rice, no oil',p:2.7,c:28,f:.3,allergens:[],veg:true},
{id:'bread',ar:'عيش بلدي',en:'Baladi bread',p:9,c:55,f:1.5,allergens:['wheat'],veg:true},
{id:'lentils',ar:'عدس مطبوخ بدون زيت',en:'Cooked lentils, no oil',p:9,c:20,f:.4,allergens:['legumes'],veg:true},
{id:'yogurt',ar:'زبادي سادة',en:'Plain yogurt',p:5,c:7,f:3,allergens:['milk'],veg:true},
{id:'banana',ar:'موز بدون قشر',en:'Peeled banana',p:1.1,c:23,f:.3,allergens:[],veg:true},
{id:'oil',ar:'زيت زيتون (يشمل الطبخ)',en:'Olive oil (including cooking)',p:0,c:0,f:100,allergens:[],veg:true},
{id:'salad',ar:'سلطة خضار بدون زيت',en:'Vegetable salad, no oil',p:1,c:5,f:.2,allergens:[],veg:true},
{id:'taameya',ar:'طعمية مقلية — تقدير وصفة',en:'Fried taameya — recipe estimate',p:13,c:32,f:18,allergens:['legumes','sesame','wheat'],veg:true},
{id:'koshari',ar:'كشري — تقدير وصفة',en:'Koshari — recipe estimate',p:5,c:28,f:5,allergens:['wheat','legumes'],veg:true},
{id:'molokhia',ar:'ملوخية بدون سمنة — تقدير',en:'Molokhia without ghee — estimate',p:3,c:5,f:1,allergens:[],veg:true}];
export const allergens={milk:['لبن ومنتجاته','Milk'],eggs:['بيض','Eggs'],wheat:['قمح / جلوتين','Wheat / gluten'],legumes:['بقوليات','Legumes'],sesame:['سمسم','Sesame'],nuts:['مكسرات','Nuts']};
export function mealPlan(p:Profile){const n=nutrition(p);if(!n||p.allergies.trim()&&!p.foodReview)return null;const allowed=foods.filter(f=>(p.diet!=='vegetarian'||f.veg)&&!f.allergens.some(a=>p.allergenTags.includes(a)));const names=p.diet==='vegetarian'?['ful','eggs','areesh','rice','lentils','yogurt','banana','oil','salad']:['ful','eggs','chicken','rice','yogurt','banana','oil','salad'];let fs=names.map(id=>allowed.find(f=>f.id===id)).filter(Boolean) as Food[];if(fs.length<4)return null;const grams:number[]=fs.map(f=>f.id==='oil'?20:f.id==='salad'?200:150);const totals=()=>fs.reduce((v,f,i)=>({protein:v.protein+f.p*grams[i]/100,carbs:v.carbs+f.c*grams[i]/100,fat:v.fat+f.f*grams[i]/100}),{protein:0,carbs:0,fat:0});const err=()=>{const v=totals();return((v.protein-n.protein)/n.protein)**2+((v.carbs-n.carbs)/n.carbs)**2+((v.fat-n.fat)/n.fat)**2};for(let iter=0;iter<500;iter++){let improved=false;for(let i=0;i<grams.length;i++){const orig=grams[i],step=fs[i].id==='oil'?1:5;let best=err(),newG=orig;for(const delta of [-step,step]){grams[i]=Math.max(fs[i].id==='oil'?0:50,Math.min(fs[i].id==='oil'?60:fs[i].id==='rice'?650:fs[i].id==='chicken'?350:400,orig+delta));const e=err();if(e<best){best=e;newG=grams[i]}}grams[i]=newG;improved||=newG!==orig;}if(!improved)break}const total=totals();return{items:fs.map((f,i)=>({...f,grams:grams[i],meal:['ful','eggs','areesh'].includes(f.id)?0:['yogurt','banana'].includes(f.id)?2:1})),...total,calories:4*total.protein+4*total.carbs+9*total.fat,close:Math.abs(total.protein-n.protein)/n.protein<.15&&Math.abs(total.carbs-n.carbs)/n.carbs<.15&&Math.abs(total.fat-n.fat)/n.fat<.15}}
