// Synthetic local browser fixture only. Requires the documented build first.
// /?lang=ar&state=new|profile|active&version=before|after
// Every navigation reseeds this isolated origin; persistence reload checks use DOM tests.
import fs from 'node:fs';
import http from 'node:http';
import {execFileSync} from 'node:child_process';
const html=fs.readFileSync('dist/Oz-Fit-v2.html','utf8');
const oldJS=execFileSync('git',['show','3eab33b:app.js'],{encoding:'utf8',maxBuffer:8e6});
const before=html.replace(/<script>[\s\S]*?<\/script>/,()=>'<script>'+oldJS.replace(/<\/script/gi,'<\\/script')+'</script>');
http.createServer((req,res)=>{
 const url=new URL(req.url,'http://127.0.0.1:4187');if(url.pathname!=='/'){res.writeHead(404);res.end();return}
 const fixture=JSON.parse(fs.readFileSync('tests/fixture.json','utf8')),b=fixture.data.profiles[0];
 b.profile.availableDays=[0,1,2,3,4,5];b.profile.remindersEnabled=false;
 if(url.searchParams.get('state')==='new'){fixture.data.profiles=[];fixture.data.activeId=''}
 if(url.searchParams.get('state')==='active'){
  const s=structuredClone(b.sessions[0]);Object.assign(s,{id:'batch6-browser',startedAt:new Date().toISOString(),finishedAt:null,sets:[],swaps:[],skipped:[],restState:{deadline:null,totalSeconds:120}});b.sessions.push(s);
 }
 const seed='<script>localStorage.setItem("oz-fit-html-state-v1",'+JSON.stringify(JSON.stringify(fixture))+');localStorage.setItem("oz-language",'+JSON.stringify(url.searchParams.get('lang')==='ar'?'ar':'en')+');</script>';
 res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});
 res.end((url.searchParams.get('version')==='before'?before:html).replace('<head>','<head>'+seed));
}).listen(4187,'127.0.0.1',()=>console.log('Batch6 synthetic preview: http://127.0.0.1:4187/'));
