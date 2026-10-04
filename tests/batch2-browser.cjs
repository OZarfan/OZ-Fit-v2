// Run after the documented build. Uses synthetic fixtures and an isolated browser context.
// node tests/batch2-browser.cjs
// OZ_PLAYWRIGHT may point to an installed Playwright module; OZ_BROWSER to a Chromium executable.
const fs = require('node:fs'), path = require('node:path'), http = require('node:http'), assert = require('node:assert/strict');
const {chromium} = require(process.env.OZ_PLAYWRIGHT || 'playwright');
const root = path.resolve(__dirname,'..'), html = fs.readFileSync(process.env.OZ_HTML || path.join(root,'dist/Oz-Fit-v2.html'),'utf8');
const fixture = JSON.parse(fs.readFileSync(path.join(__dirname,'fixture.json'),'utf8'));
const screenshotDir = path.join(root,'.cache','batch2');
fs.mkdirSync(screenshotDir,{recursive:true});
const results = [], failures = [];

// Measurements use the browser's computed styles, rendered text ranges and real layout.
function measure() {
  const rgba = text => text.match(/[\d.]+/g).map(Number);
  const luminance = rgb => rgb.slice(0,3).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
  const background = el => {
    for(let node=el;node;node=node.parentElement) {
      const color=rgba(getComputedStyle(node).backgroundColor);
      if(color.length===3||color[3]===1)return color;
    }
    return [255,255,255];
  };
  const contrast = el => {
    const style=getComputedStyle(el), fg=luminance(rgba(style.color)),bg=luminance(background(el));
    return {text:el.textContent.trim(),foreground:style.color,background:background(el),ratio:(Math.max(fg,bg)+.05)/(Math.min(fg,bg)+.05)};
  };
  const rect = el => {const r=el.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,right:r.right,bottom:r.bottom};};
  const dialog=document.querySelector('[role=dialog]');
  let header=null;
  if(dialog) {
    const close=dialog.querySelector('[data-slot=dialog-close]'),title=dialog.querySelector('[data-slot=dialog-title]');
    const range=document.createRange();range.selectNodeContents(title);
    const c=rect(close),textRects=[...range.getClientRects()].filter(r=>r.width&&r.height).map(r=>({x:r.x,y:r.y,right:r.right,bottom:r.bottom}));
    header={close:c,closeName:close.textContent.trim(),title:title.textContent,dir:getComputedStyle(dialog).direction,
      titleOverlap:textRects.some(r=>r.x<c.right&&r.right>c.x&&r.y<c.bottom&&r.bottom>c.y),
      dialog:rect(dialog),scrollWidth:dialog.scrollWidth,clientWidth:dialog.clientWidth};
  }
  return {viewport:innerWidth,documentWidth:document.documentElement.scrollWidth,
    finish:[...document.querySelectorAll('.session-strip .secondary')].map(contrast),
    eyebrows:[...document.querySelectorAll('.eyebrow')].filter(el=>el.getClientRects().length).map(contrast),
    validation:[...document.querySelectorAll('.log-field-error')].map(contrast),header};
}

function verifyMeasurement(m, lang, dialog=false) {
  assert(m.documentWidth<=m.viewport+1,'Horizontal page overflow');
  for(const item of [...m.finish,...m.eyebrows,...m.validation])assert(item.ratio>=4.5,`${item.text}: contrast ${item.ratio}`);
  if(dialog) {
    const h=m.header;assert(h,'Missing dialog');
    assert.equal(h.dir,lang==='ar'?'rtl':'ltr');assert.equal(h.closeName,lang==='ar'?'إغلاق':'Close');
    assert(h.close.width>=44&&h.close.height>=44,'Close target smaller than 44px');assert.equal(h.titleOverlap,false,'Title overlaps close');
    assert(h.dialog.x>=0&&h.dialog.right<=m.viewport+1,'Dialog outside viewport');
    assert(h.close.x>=h.dialog.x&&h.close.right<=h.dialog.right,'Close outside dialog');
    assert(h.scrollWidth<=h.clientWidth+1,'Dialog horizontal overflow');
    assert(lang==='ar'?h.close.x<h.dialog.x+h.dialog.width/2:h.close.x>h.dialog.x+h.dialog.width/2,'Close is not at logical inline end');
  }
}

(async()=>{
  const server=http.createServer((req,res)=>{
    if(req.url!=='/'){res.writeHead(404);res.end();return;}
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});res.end(html);
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  let browser;
  try {
    browser=await chromium.launch({headless:true,...(process.env.OZ_BROWSER?{executablePath:process.env.OZ_BROWSER}:{})});
    for(const lang of ['en','ar'])for(const width of [360,390,430,1280]) {
      const context=await browser.newContext({viewport:{width,height:900},locale:lang});
      const data=JSON.parse(JSON.stringify(fixture)), active=JSON.parse(JSON.stringify(data.data.profiles[0].sessions[0]));
      Object.assign(active,{id:'batch2-browser',startedAt:new Date().toISOString(),finishedAt:null,sets:[],swaps:[],skipped:[]});
      data.data.profiles[0].sessions.push(active);
      await context.addInitScript(({data,lang})=>{localStorage.setItem('oz-fit-html-state-v1',JSON.stringify(data));localStorage.setItem('oz-language',lang)},{data,lang});
      const page=await context.newPage(),runtimeErrors=[];page.on('pageerror',error=>runtimeErrors.push(error.message));
      const evidence={lang,width,checks:[],measurements:{}};
      const settleDialog=async()=>{await page.getByRole('dialog').waitFor();await page.getByRole('dialog').evaluate(async el=>{await Promise.all(el.getAnimations().map(a=>a.finished.catch(()=>{})))});};
      try {
        await page.goto(`http://127.0.0.1:${server.address().port}/`);
        await page.locator('.session-strip').waitFor();
        evidence.measurements.today=await page.evaluate(measure);verifyMeasurement(evidence.measurements.today,lang);
        assert.equal(evidence.measurements.today.finish.length,1);assert(evidence.measurements.today.eyebrows.length);
        evidence.checks.push('Finish session and eyebrow text contrast >= 4.5:1');
        const filters=page.locator('.muscle-pills button');await filters.nth(1).click();
        assert.equal(await filters.nth(1).getAttribute('aria-pressed'),'true');assert.equal(await filters.nth(0).getAttribute('aria-pressed'),'false');
        await filters.nth(0).click();
        await page.locator('.exercise-row').first().click();
        await settleDialog();evidence.measurements.logging=await page.evaluate(measure);verifyMeasurement(evidence.measurements.logging,lang,true);
        await page.getByRole('spinbutton',{name:lang==='ar'?'الوزن · كجم':'Weight · kg',exact:true}).fill('');
        await page.locator('#log-reps').fill('0');
        await page.getByRole('button',{name:lang==='ar'?'سجل المجموعة وابدأ الراحة':'Log set & start rest',exact:true}).click();
        await page.locator('#log-weight-error').waitFor();
        assert.equal(await page.locator('#log-weight').evaluate(el=>el===document.activeElement),true);
        assert.equal(await page.locator('#log-weight').getAttribute('aria-describedby'),'log-weight-error');
        assert.equal(await page.locator('#log-reps').getAttribute('aria-describedby'),'log-reps-error');
        evidence.measurements.validation=await page.evaluate(measure);verifyMeasurement(evidence.measurements.validation,lang,true);
        await page.screenshot({path:path.join(screenshotDir,`${lang}-${width}-validation.png`)});
        await page.locator('#log-weight').fill('25');await page.locator('#log-weight-error').waitFor({state:'detached'});
        await page.getByRole('button',{name:lang==='ar'?'سجل المجموعة وابدأ الراحة':'Log set & start rest',exact:true}).click();
        assert.equal(await page.locator('#log-reps').evaluate(el=>el===document.activeElement),true);
        await page.locator('#log-reps').fill('8');await page.locator('#log-reps-error').waitFor({state:'detached'});
        await page.getByRole('button',{name:lang==='ar'?'سجل المجموعة وابدأ الراحة':'Log set & start rest',exact:true}).click();
        await page.getByRole('timer').waitFor();assert.equal(await page.locator('.log-field-error,.notice,.error').count(),0);
        evidence.checks.push('Field names, associated errors, correction, first-invalid focus and successful logging');
        await page.getByRole('button',{name:lang==='ar'?'إغلاق':'Close',exact:true}).click();
        await page.getByRole('dialog').waitFor({state:'detached'});
        await page.getByRole('button',{name:lang==='ar'?'إنهاء الحصة':'Finish session',exact:true}).click();
        await settleDialog();evidence.measurements.finishDialog=await page.evaluate(measure);verifyMeasurement(evidence.measurements.finishDialog,lang,true);
        await page.screenshot({path:path.join(screenshotDir,`${lang}-${width}-finish.png`)});
        await page.keyboard.press('Escape');await page.getByRole('dialog').waitFor({state:'detached'});
        evidence.checks.push('Both dialog headers avoid title collision; logical 44px close, localized name, click and Escape');
        // Finish through the existing dialog so the existing Plan and profile controls become editable.
        await page.getByRole('button',{name:lang==='ar'?'إنهاء الحصة':'Finish session',exact:true}).click();
        await page.locator('[role=dialog] .primary').click();
        await page.getByRole('button',{name:lang==='ar'?'إغلاق':'Close',exact:true}).click();
        await page.getByRole('tab',{name:lang==='ar'?'خطتي':'Plan',exact:true}).click();
        evidence.measurements.plan=await page.evaluate(measure);verifyMeasurement(evidence.measurements.plan,lang);
        assert.equal(await page.locator('.split-card[aria-pressed=true]').count(),1);
        const stage=page.getByRole('button',{name:lang==='ar'?'مرحلة 2':'Stage 2',exact:true});await stage.click();
        assert.equal(await stage.getAttribute('aria-pressed'),'true');
        await page.locator('.split-card[aria-pressed=false]:not([disabled])').first().click();
        assert.equal(await page.locator('.split-card[aria-pressed=true]').count(),1);
        await page.getByRole('tab',{name:lang==='ar'?'ملفي':'Profile',exact:true}).click();
        await page.locator('input[accept="image/jpeg,image/png,image/webp"]').setInputFiles({name:'synthetic.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+a9XYAAAAASUVORK5CYII=','base64')});
        const extracted=page.getByRole('textbox',{name:lang==='ar'?'النص المستخرج للمراجعة':'Extracted text for review',exact:true});
        await page.locator('.report-editor summary').click();await extracted.fill('Synthetic review text');
        assert.equal(await extracted.inputValue(),'Synthetic review text');
        await page.getByRole('button',{name:lang==='ar'?'المعدات العامة وأولوية العضلات':'General equipment & muscle priority',exact:true}).click();
        const balanced=page.getByRole('button',{name:lang==='ar'?'توازن الجسم':'Balanced',exact:true});
        await page.locator('.body-labels button').nth(1).click();assert.equal(await balanced.getAttribute('aria-pressed'),'false');
        await balanced.click();assert.equal(await balanced.getAttribute('aria-pressed'),'true');
        evidence.checks.push('Muscle, split, stage and Balanced selected states; report textarea accessible name and editing');
        assert.deepEqual(runtimeErrors,[]);evidence.status='passed';console.log(`PASS Batch2 browser ${lang} ${width}px`);
      } catch(error) {evidence.status='failed';evidence.error=error.stack;failures.push(`${lang} ${width}: ${error.message}`);console.error(evidence.error);}
      finally {results.push(evidence);await context.close();}
    }
    fs.writeFileSync(path.join(__dirname,'batch2-browser-results.json'),JSON.stringify({environment:`Headless Chromium ${browser.version()}, isolated synthetic fixtures. Desktop viewport emulation; not a real phone or screen-reader test.`,results},null,2));
  } finally {await browser?.close();await new Promise(resolve=>server.close(resolve));}
  assert.deepEqual(failures,[]);
})().catch(error=>{console.error(error);process.exitCode=1});
