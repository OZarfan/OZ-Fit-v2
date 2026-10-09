// Synthetic browser fixtures only; navigation reseeds this isolated origin.
// Build first, then node tests/batch9-preview.mjs. No user records are read.
// ?lang=ar|en&state=active|rest|profile|new&injuries=0..7&failure=quota
import fs from 'node:fs';
import http from 'node:http';
import {build} from 'esbuild';
const root=process.cwd();
const compile=async options=>(await build({...options,bundle:true,write:false,format:'iife',platform:'browser',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},alias:{'@/lib':root+'/lib','@/components':root+'/components'}})).outputFiles[0].text.replace(/<\/script/gi,'<\\/script');
const components=await compile({entryPoints:[root+'/tests/batch4-components.tsx']});
const priority=await compile({stdin:{contents:"import {createRoot} from 'react-dom/client';import Onboarding from './app/onboarding';const c=window.batch9Priority;createRoot(document.getElementById('root')).render(<Onboarding lang={c.lang} initial={c.profile} section='equipment' busy={false} onSave={async()=>true}/>);",loader:'tsx',resolveDir:root}});
http.createServer((req,res)=>{
  const url=new URL(req.url,'http://127.0.0.1:4197');
  if(url.pathname==='/components'||url.pathname==='/priority'){
    const lang=url.searchParams.get('lang')==='ar'?'ar':'en',fixture=JSON.parse(fs.readFileSync('tests/fixture.json','utf8'));
    const input=JSON.stringify({lang,profile:{...fixture.data.profiles[0].profile,priority:'mobility'}});
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});
    res.end('<!doctype html><html lang="'+lang+'" dir="'+(lang==='ar'?'rtl':'ltr')+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+fs.readFileSync('base.css','utf8')+'\n'+fs.readFileSync('app.css','utf8')+'</style></head><body><div id="root"></div><script>window.batch9Priority='+input+';</script><script>'+(url.pathname==='/components'?components:priority)+'</script></body></html>');return;
  }
  if(url.pathname!=='/'){res.writeHead(404);res.end();return}
  const fixture=JSON.parse(fs.readFileSync('tests/fixture.json','utf8')),b=fixture.data.profiles[0];
  const count=Math.min(7,Math.max(0,Number(url.searchParams.get('injuries')||0)));
  b.profile.remindersEnabled=false;
  b.profile.injuries=['shoulder','elbow','back','hip','knee','ankle','neck'].slice(0,count).map(area=>({area,status:'active',reportedAt:'2026-10-01',reviewed:false,history:[]}));
  const state=url.searchParams.get('state')||'active';
  if(state==='active'||state==='rest'){
    const s=structuredClone(b.sessions[0]);Object.assign(s,{id:'batch9-browser',startedAt:new Date().toISOString(),finishedAt:null,sets:[],swaps:[],skipped:[],restState:{deadline:state==='rest'?Date.now()+120000:null,totalSeconds:120}});b.sessions.push(s);
  }
  if(state==='profile'){
    b.profile.gyms=[];b.profile.activeGymId='';b.profile.prescribedRehab=[];b.reports=[];
    const other=structuredClone(b);other.profile.id='batch9-b';other.profile.name='Profile B';fixture.data.profiles.push(other);
  }
  if(state==='new'){fixture.data.profiles=[];fixture.data.activeId=''}
  const seed='<script>localStorage.setItem("oz-fit-html-state-v1",'+JSON.stringify(JSON.stringify(fixture))+');localStorage.setItem("oz-language",'+JSON.stringify(url.searchParams.get('lang')==='ar'?'ar':'en')+');'+(url.searchParams.get('failure')==='quota'?'const originalSet=Storage.prototype.setItem;Storage.prototype.setItem=function(key,value){if(key==="oz-fit-html-state-v1")throw new DOMException("Synthetic quota","QuotaExceededError");return originalSet.call(this,key,value)};':'')+'</script>';
  const html=fs.readFileSync('dist/Oz-Fit-v2.html','utf8');
  res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});res.end(html.replace('<head>','<head>'+seed));
}).listen(4197,'127.0.0.1',()=>console.log('Batch9 synthetic preview: http://127.0.0.1:4197/'));
