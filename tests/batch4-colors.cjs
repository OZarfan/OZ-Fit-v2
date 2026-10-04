// Source-contract guard; rendered contrast/layout evidence is recorded separately by browser QA.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {parse}=require('rrweb-cssom'); // Already installed with the DOM-test dependency.
const root=path.resolve(__dirname,'..'),css=fs.readFileSync(root+'/app.css','utf8');
const rules=[];
function visit(items){for(const rule of items){if(rule.cssRules)visit(rule.cssRules);else if(rule.style)rules.push(rule);}}
visit(parse(css).cssRules);
const results=[],check=(name,fn)=>{fn();results.push({name,status:'passed'});console.log('PASS',name);};
const pigments=v=>v.replace(/--[\w-]+/g,'TOKEN').match(/#[\da-fA-F]{3,8}\b|\b(?:white|black)\b|\b(?:rgba?|hsla?|oklch)\([^)]*\)/g)||[];
const counts={tokenPigments:0,directPigments:0,transparencyKeywords:0,sharedPigmentUtilities:0};
const direct=[];
for(const rule of rules)for(let i=0;i<rule.style.length;i++){
  const property=rule.style[i],value=rule.style.getPropertyValue(property),colors=pigments(value);
  counts[property.startsWith('--')?'tokenPigments':'directPigments']+=colors.length;
  counts.transparencyKeywords+=(value.match(/\btransparent\b/g)||[]).length;
  if(!property.startsWith('--'))direct.push(...colors.map(color=>({selector:rule.selectorText,property,color})));
}
for(const file of fs.readdirSync(root+'/components/ui')){
  const source=fs.readFileSync(root+'/components/ui/'+file,'utf8');
  counts.sharedPigmentUtilities+=(source.match(/(?:bg|text|border|fill|ring)-(?:white|black)(?:\/\d+)?/g)||[]).length;
}
check('Color substitutions never change CSS property names',()=>{
  for(const rule of rules)for(let i=0;i<rule.style.length;i++)assert.match(rule.style[i],/^(?:--)?[a-z][a-z0-9-]*$/i);
});
check('Batch 3 weekday non-wrapping contract remains intact',()=>{
  const rule=rules.find(r=>r.selectorText==='.week-day>span');
  assert.equal(rule.style.getPropertyValue('white-space'),'nowrap');
  assert.equal(rule.style.getPropertyValue('overflow-wrap'),'normal');
});
check('Direct pigment literals are limited to intentional toast/chart one-offs',()=>{
  assert.deepEqual(direct,[
    {selector:'.pr-toast',property:'background',color:'#203b17'},
    {selector:'.pr-toast',property:'color',color:'#d5ff9e'},
    {selector:'.pr-toast',property:'border',color:'#c1ef76'},
    {selector:'.pr-toast',property:'box-shadow',color:'#0003'},
    {selector:'.chart text',property:'fill',color:'#43573a'}
  ]);
  assert.equal(counts.sharedPigmentUtilities,0);
});
check('App color references resolve to declared semantic roles',()=>{
  const combined=fs.readFileSync(root+'/base.css','utf8')+'\n'+css;
  const declared=new Set([...combined.matchAll(/(--[\w-]+)\s*:/g)].map(m=>m[1]));
  for(const match of css.matchAll(/var\((--[\w-]+)/g))assert(declared.has(match[1]),'Missing '+match[1]);
});
fs.writeFileSync(__dirname+'/batch4-color-results.json',JSON.stringify({environment:'CSS source-contract checks; not a browser contrast/layout test',counting:'Declaration values only; CSS variable identifiers excluded; black/white UI utilities included',counts,direct,results},null,2)+'\n');
