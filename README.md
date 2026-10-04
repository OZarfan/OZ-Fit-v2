# Oz Fit 2 — local review build

نسخة مراجعة للتغييرات P1–P9 وQ1–Q7. اقرأ `Oz-Fit-v2-Changes.md` للميزات المكتملة والحدود. ليست نسخة اجتازت مراجعة سريرية أو اختبارًا بصريًا على الهواتف.

## تشغيل سريع

- افتح `Oz-Fit-v2.html` في متصفح حديث يسمح بـ JavaScript وlocalStorage. الكود والصور داخل الملف، ولا توجد خدمة AI لبناء الخطة.
- احتفظ باسم الملف ومساره. سلوك تخزين `file://` يختلف بين المتصفحات؛ تغيير الملف أو مكانه قد يجعل السجل السابق غير ظاهر.
- قبل الانتقال من النسخة القديمة: صدّر JSON منها، ثم استورده في الجديدة من «ملفي». إذا وجدت البيانات في نفس أصل التخزين، يرحّلها التطبيق تلقائيًا، ويحتفظ بنسخة خام قبل الترحيل.
- كل ملف شخصي محلي مستقل منطقيًا، لكنه ليس حسابًا محميًا بكلمة مرور. أي شخص لديه وصول لنفس المتصفح يمكنه فتحه. التصدير الحالي للملف الشخصي النشط؛ كرّره لكل شخص.
- الصوت يحتاج تفاعلًا أوليًا؛ جرّب «اختبار الصوت». إبقاء التطبيق مفتوحًا مطلوب للتنبيهات. قفل الشاشة أو سياسات المتصفح قد توقفها.

## PWA / Android

حزمة `pwa` فيها `index.html`, `manifest.webmanifest`, `sw.js`, وصور الأيقونة. ارفع محتوياتها كما هي إلى مسار HTTPS ثابت. لا يوجد نشر تلقائي أو تعديل للموقع الحالي.

افتح الرابط مرة واحدة مع اتصال، وانتظر انتهاء تحميله وتسجيل عامل الخدمة. عند دعم المتصفح سيظهر خيار تثبيت التطبيق (أو Add to Home Screen). أغلق النسخة القديمة من التطبيق لإكمال تحديث عامل الخدمة. جرب فتحه في وضع الطيران بعد اكتمال التحميل. تشغيل ملف HTML مباشرة لا يثبت PWA ولا يسجّل Service Worker. هذه الحزمة ليست APK، ولا تتضمن خدمة خلفية أو مزامنة سحابية.

**لم يُختبر التثبيت أو التشغيل دون شبكة في متصفح فعلي هنا.** اختُبر منطق الكاش بمحاكاة Node فقط. لا تعتمد عليه لحفظ سجلك قبل تجربة تصدير/استيراد JSON على جهازك.

## Build source

Requires Node 22+ and npm. Install dependencies once (network needed for development only):

```sh
npm install
npm run typecheck
npm run build
npm test
npm run test:dom
npm run test:pwa
```

`dist/Oz-Fit-v2.html` is the standalone output; `dist/pwa` is the installable web package. Runtime does not need npm, network, or a backend. Third-party dependencies are version-pinned in package.json; no dependency lockfile is supplied.

Batch 5 focused regressions run with `node tests/batch5-derived.mjs` and `node tests/batch5-performance.mjs`. They compare plan/history output and deterministic render/calculation counts against the completed Batch 4 Git commit `866d444` (that object must be available locally). The latter builds both versions in memory, uses a synthetic jsdom clock, and regenerates its temporary baseline under `.cache/batch5/`. No production instrumentation or user data is used. Results are written to `tests/batch5-derived-results.json` and `tests/batch5-performance-results.json`; see [the Batch 5 report](docs/Batch5-Performance.md) for browser evidence and limits.

Batch 6 onboarding/profile-editing regressions are included in `npm run test:dom`. To run only these checks in PowerShell: `$env:OZ_DOM_SUITE='batch6'; node tests/dom.cjs; Remove-Item Env:OZ_DOM_SUITE`. They write `tests/batch6-dom-results.json`. After building, `node tests/batch6-preview.mjs` serves isolated synthetic browser fixtures on `http://127.0.0.1:4187/?lang=en&state=new`; use `lang=ar`, `state=profile` or `state=active` for other cases. `version=before` uses the completed Batch 5 Git object `3eab33b`, which must be available locally. Each navigation reseeds this test origin, so use the DOM tests for persistence/reload checks. Never serve this fixture on a user-data origin. See [the Batch 6 report](docs/Batch6-Onboarding.md) for verification and the complete file inventory.

Batch 2 browser regressions can also be run after building with `node tests/batch2-browser.cjs`. This optional development check needs Playwright and Chromium: `OZ_PLAYWRIGHT` can point to an existing Playwright module and `OZ_BROWSER` to an existing Chromium executable. It creates an isolated context with synthetic records and a temporary localhost server; it never uses a personal browser profile. Results are saved in `tests/batch2-browser-results.json`, with local screenshots under `.cache/batch2/`. These tools are not runtime dependencies.

`public/exercises` contains 216 resized WebP photos from the Unlicense dataset. The original source audit/manifest and license are included. `lib/legacy.ts` preserves old exercise IDs. `lib/extra.ts` is the authoritative expanded catalog. `make-extra.py` was an intermediate generator and is not required for rebuild.

## Code map

- `lib/fitness.ts`: zod schemas, migrations, eligibility, plans, progression, plate solver.
- `lib/meals.ts`: approximate food data and example-menu arithmetic; not clinical dietetics.
- `local-state.ts`: existing storage key, revision/409 shim, pre-migration backup.
- `app/onboarding.tsx`, `app/oz-fit.tsx`: intake, Today, set logging.
- `app/progress.tsx`, `app/nutrition.tsx`, `app/gym.tsx`, `app/tools.tsx`: progress, food, gyms, prescribed rehab and tools.
- `public/sw.js`: application-shell cache only; no profile data or uploads cached there.
- `tests`: synthetic fixtures, reproducible logic and DOM tests, results.

Never silently replace corrupt or future-version records. Keep the pre-migration backup. Review injury loading tags and the disabled cardio candidate map with a qualified physiotherapist before release. Test realistic medical histories separately; area tags are not diagnosis or a clinical clearance mechanism.

## Verification limits

DOM tests use jsdom; it does not calculate phone layout, exercise images, contrast or thumb reach. Its inability to parse all Tailwind CSS is recorded, not treated as visual verification. Batch 2 additionally passed focused headless Chromium checks in Arabic RTL and English at 360, 390, 430 and 1280px widths, covering logging validation, selected states, report-text naming, text contrast and dialog header geometry. This is desktop viewport emulation, not real-phone, screen-reader, installability or physical offline-start verification. See the dated changelog and browser result file for the tested scope; do not treat this as a release-approved build.
