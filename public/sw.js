// All application code, exercise images and fonts are local. No health data cached here.
const CACHE='oz-fit-shell-v2-20261003-batch3';
const SHELL=['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL))));
// Do not force a running workout onto a new build; activate after old clients close.
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('oz-fit-shell-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 if(url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
 if(event.request.mode==='navigate'){
  event.respondWith(caches.open(CACHE).then(async cache=>await cache.match('./index.html')||fetch(event.request)));
 }else if(SHELL.some(p=>new URL(p,self.registration.scope).href===url.href)){
  event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request)));
 }
});
