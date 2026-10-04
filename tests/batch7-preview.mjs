// Isolated synthetic browser fixtures. Navigation reseeds data; never serve on a user-data origin.
// After npm run build: node tests/batch7-preview.mjs
// ?lang=en|ar&state=profile|active|new|blocked&version=before|after
import fs from 'node:fs';
import http from 'node:http';
import {execFileSync} from 'node:child_process';
const html=fs.readFileSync('dist/Oz-Fit-v2.html','utf8');
const previous=execFileSync('git',['show','6f62388:app.js'],{encoding:'utf8',maxBuffer:8e6});
const before=html.replace(/<script>[\s\S]*?<\/script>/,()=>'<script>'+previous.replace(/<\/script/gi,'<\\/script')+'</script>');
http.createServer((req,res)=>{
 const url=new URL(req.url,'http://127.0.0.1:4188');if(url.pathname!=='/'){res.writeHead(404);res.end();return}
 const fixture=JSON.parse(fs.readFileSync('tests/fixture.json','utf8')),b=fixture.data.profiles[0];
 b.profile.availableDays=[0,1,2,3,4,5];b.profile.remindersEnabled=false;
 if(url.searchParams.get('duration')==='varied')b.profile.dayMinutes={0:30,1:60,3:45,5:75};
 if(url.searchParams.get('state')==='new'){fixture.data.profiles=[];fixture.data.activeId=''}
 if(url.searchParams.get('state')==='blocked')b.profile.urgentSymptoms=true;
 if(url.searchParams.get('state')==='active'){
  const s=structuredClone(b.sessions[0]);Object.assign(s,{id:'batch7-browser',startedAt:new Date().toISOString(),finishedAt:null,sets:[],swaps:[],skipped:[],restState:{deadline:null,totalSeconds:120}});b.sessions.push(s);
 }
 const seed='<script>localStorage.setItem("oz-fit-html-state-v1",'+JSON.stringify(JSON.stringify(fixture))+');localStorage.setItem("oz-language",'+JSON.stringify(url.searchParams.get('lang')==='ar'?'ar':'en')+');</script>';
 res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});
 res.end((url.searchParams.get('version')==='before'?before:html).replace('<head>','<head>'+seed));
}).listen(4188,'127.0.0.1',()=>console.log('Batch7 synthetic preview: http://127.0.0.1:4188/'));
