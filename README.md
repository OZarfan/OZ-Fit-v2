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

DOM tests use jsdom; it does not calculate phone layout, exercise images, contrast or thumb reach. Its inability to parse all Tailwind CSS is recorded, not treated as visual verification. No screenshots are included because no approved browser QA workflow was available. Do not treat this as a release-approved build.
