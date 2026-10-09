// Rebuild in memory and compare with the documented build's generated files.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {build,transform} from 'esbuild';
const root=process.cwd(),read=p=>fs.readFileSync(p,'utf8');
const hash=value=>createHash('sha256').update(value).digest('hex');
const result=await build({entryPoints:[root+'/entry.tsx'],outfile:root+'/app.js',bundle:true,write:false,format:'iife',platform:'browser',jsx:'automatic',minify:true,target:['es2020'],define:{'process.env.NODE_ENV':'"production"'},alias:{'@/lib':root+'/lib','@/components':root+'/components'},logLevel:'warning'});
const js=read('app.js');assert.equal(result.outputFiles[0].text,js);
const css=(await transform(read('base.css')+'\n'+read('app.css'),{loader:'css',minify:true})).code;
for(const file of ['dist/Oz-Fit-v2.html','dist/pwa/index.html']){
  const html=read(file);assert.equal(html.match(/<style>([\s\S]*?)<\/style>/)[1],css);assert.equal(html.match(/<script>([\s\S]*?)<\/script>/)[1],js.replace(/<\/script/gi,'<\\/script'));
}
for(const file of ['sw.js','manifest.webmanifest','icon-192.png','icon-512.png'])assert.deepEqual(fs.readFileSync('dist/pwa/'+file),fs.readFileSync('public/'+file));
const assets=JSON.parse(read('assets.json'));
for(const [name,url] of Object.entries(assets))assert.deepEqual(Buffer.from(url.split(',')[1],'base64'),fs.readFileSync('public'+name));
const evidence={appSha256:hash(js),htmlSha256:hash(read('dist/Oz-Fit-v2.html')),assets:Object.keys(assets).length,checks:['Generated JS equals fresh in-memory build','Standalone and PWA embed current JS/CSS','PWA assets equal public sources','Every embedded asset equals its source'],status:'passed'};
fs.writeFileSync('tests/batch9-build-results.json',JSON.stringify(evidence,null,2)+'\n');console.log(evidence);
