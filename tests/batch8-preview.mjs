// Isolated synthetic UI verification only. Navigation reseeds this origin.
// npm run build; node tests/batch8-preview.mjs
// ?lang=en|ar&state=profile|active|new|empty|injury&version=before|after
// Still captures activate the existing reduced-motion rule; motion=normal retains OS media behavior.
import fs from 'node:fs';
import http from 'node:http';
import {execFileSync} from 'node:child_process';
const previous=execFileSync('git',['show','b76feb6:app.js'],{encoding:'utf8',maxBuffer:8e6});
const beforeCss=fs.readFileSync('base.css','utf8')+'\n'+execFileSync('git',['show','b76feb6:app.css'],{encoding:'utf8'});
http.createServer((req,res)=>{
 const url=new URL(req.url,'http://127.0.0.1:4189');if(url.pathname!=='/'){res.writeHead(404);res.end();return}
 let html=fs.readFileSync('dist/Oz-Fit-v2.html','utf8');
 if(url.searchParams.get('version')==='before')html=html.replace(/<style>[\s\S]*?<\/style>/,()=>'<style>'+beforeCss+'</style>').replace(/<script>[\s\S]*?<\/script>/,()=>'<script>'+previous.replace(/<\/script/gi,'<\\/script')+'</script>');
 if(url.searchParams.get('motion')!=='normal')html=html.replace(/@media\s*\(\s*prefers-reduced-motion\s*:\s*reduce\s*\)/g,'@media all');
 const fixture=JSON.parse(fs.readFileSync('tests/fixture.json','utf8')),b=fixture.data.profiles[0];
 b.profile.availableDays=[0,1,2,3,4,5];b.profile.remindersEnabled=false;
 b.reports=[{id:'batch8-report',fileKey:'',date:'2026-09-20',weight:80,fat:20,muscle:35,bmr:1700,confirmed:true,raw:'Synthetic UI fixture'}];
 const state=url.searchParams.get('state');
 if(state==='new'){fixture.data.profiles=[];fixture.data.activeId=''}
 if(state==='empty'){b.sessions=[];b.reports=[]}
 if(state==='injury'){b.profile.health='injury';b.profile.injuries=[{area:'knee',reportedAt:'2026-09-20',status:'active',reviewed:false,history:[]}]}
 if(state==='active'){
  const s=structuredClone(b.sessions[0]);Object.assign(s,{id:'batch8-browser',startedAt:new Date().toISOString(),finishedAt:null,sets:[],swaps:[],skipped:[],restState:{deadline:null,totalSeconds:120}});b.sessions.push(s);
 }
 const seed='<script>localStorage.setItem("oz-fit-html-state-v1",'+JSON.stringify(JSON.stringify(fixture))+');localStorage.setItem("oz-language",'+JSON.stringify(url.searchParams.get('lang')==='ar'?'ar':'en')+');</script>';
 res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});res.end(html.replace('<head>','<head>'+seed));
}).listen(4189,'127.0.0.1',()=>console.log('Batch8 synthetic preview: http://127.0.0.1:4189/'));
