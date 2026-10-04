// Run with Node 22+: node tests/batch4-components.mjs
// Test-only local preview for browser color/disabled/hover/focus checks. Ctrl+C stops it.
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const {build}=await import(process.env.OZ_ESBUILD||'esbuild');
const result=await build({entryPoints:[root+'/tests/batch4-components.tsx'],bundle:true,write:false,format:'iife',platform:'browser',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},alias:{'@/lib':root+'/lib','@/components':root+'/components'}});
const js=result.outputFiles[0].text.replace(/<\/script/gi,'<\\/script');
http.createServer((req,res)=>{
  if(req.url!=='/'){res.writeHead(404);res.end();return;}
  const css=fs.readFileSync(root+'/base.css','utf8')+'\n'+fs.readFileSync(root+'/app.css','utf8');
  res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
  res.end('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Batch 4 component fixture</title><style>'+css+'</style></head><body><div id="root"></div><script>'+js+'</script></body></html>');
}).listen(4185,'127.0.0.1',()=>console.log('Synthetic component fixture: http://127.0.0.1:4185/'));
