# Batch 9 — final P1 release blockers

Completed 2026-10-10. Scope is limited to the three authorized P1 blockers. No P2/P3 remediation, visual polish or documentation cleanup was performed.

## Changes and contracts

### Profile-owned drafts

Gym, prescribed-rehab and report editor state previously survived a profile switch as a single component state value while the current save callback referred to the newly active profile. `useProfileDraft` now stores temporary editor state by stable profile ID. Its setters capture the original owner, including an asynchronous gym-file read. Switching back restores that owner's draft; replacing the profile object with the same ID does not reset it. The existing explicit boolean save result, failed-save preservation, retry behavior and Active gym selection contract remain intact.

Report files, entered values and confirmation state are owner-scoped. Object URLs are created and revoked for the selected owner's file, and the preview is rendered only when both file and owner match. No OCR/file extraction capability was added.

Drafts remain temporary in-memory editor state, not a new persistent schema. No account, profile, session, report or storage-envelope migration was needed.

### Supported muscle priorities

The body priority controls now derive choices from the existing priority schema: balanced, chest, back, legs, shoulders, arms and core. Mobility remains an available primary/supporting goal. The schema and planner were not widened or changed.

Unsupported editor values receive localized feedback associated with the muscle-priority group and cannot advance/save until corrected. Invalid stored/imported priorities receive specific muscle-priority feedback while retaining the existing raw-data recovery and import-rejection behavior.

### Viewport-bounded dialogs

The shared dialog CSS now bounds height to `calc(100dvh - 32px)` and provides internal vertical scrolling with horizontal containment. Existing logging-specific height rules, localized close labels, 44px close targets and logical title spacing remain intact. Scrolling and keyboard focus make Save and Close reachable; they need not both remain simultaneously visible in a long dialog.

The PWA cache version was advanced through its existing update lifecycle so the corrected shell can replace the previous build after old clients close.

## Verification

| Check | Result |
|---|---|
| Typecheck and documented build | Passed; standalone HTML is 1,884,659 bytes with 221 embedded assets. |
| Complete logic suite | 16 passed; the existing alternative-coverage result remains partial with 574 gaps. |
| Complete DOM suite | 325 passed, including 87 new Batch 9 checks and all prior Batch 1–7 DOM regressions. |
| Simulated service-worker/PWA suite | 3 passed. |
| Batch 4 color-contract suite | 4 passed. |
| Batch 5 derived-output suite | 6 passed; all 125 representative plans match the established baseline. |
| Batch 5 performance suite | 19 passed; ten clock ticks still cause zero root renders and zero plan generations. |
| Generated/source consistency | Passed: fresh in-memory JS equals `app.js`; both HTML outputs embed current JS/CSS; PWA files and all 221 embedded assets equal their sources. |

The full DOM run preserves prior draft-save, Active gym failure/conflict, injury history, logging validation, accessible-state, rest persistence, selected-day, direct editing and weekly-plan regressions. The Batch 8 Progress DOM exception remains the existing approved export-style change. No earlier test assertion was weakened.

Batch 9 tests cover profile switching and return, same-owner storage failures/retries, conflict reloads that change `activeId`, delayed gym-file completion, report confirmation/preview cleanup, every supported priority in both onboarding and direct editing in both languages, invalid priority feedback, and Finish with zero through seven injury areas including failure/retry.

The completed CUA browser checks covered:

- 128 Finish cases: Arabic/English × 360/390/430/1280px × 800/480px heights × zero through seven injury areas.
- Eight additional short-height Finish cases with quota-error content, including pointer and keyboard reachability of Save and Close.
- Eight priority-editor cases and eight logging/rest cases across both languages and every required width.
- 28 shared component color cases, with no enabled text pair below 4.5:1.
- Actual profile switching in both languages, restoring A's gym/prescription/confirmed report after visiting B, and a decoded blob preview using the bundled public logo as the synthetic image.

See [browser evidence](../tests/batch9-browser-results.json), [focused regressions](../tests/batch9-dom-results.json), [complete DOM results](../tests/dom-results.json) and [build consistency](../tests/batch9-build-results.json). The browser record is an aggregate of executed observations, not exported raw per-case rows. The browser kernel later exited during a sandbox-helper refresh; the screenshot had already been saved. Some dialog matrix cases preceded unrelated final priority/preview code changes; dialog CSS/components were unchanged throughout, and the final build was separately checked.

![Arabic Finish dialog at 390×480, scrolled to Save](../.cache/batch9/finish-ar-390x480.jpg)

Commands used include the documented `npm run typecheck`, `npm run build`, `npm test`, `npm run test:dom` and `npm run test:pwa`, the existing Batch 4/5 test scripts, focused `OZ_DOM_SUITE=batch9` DOM execution, and `node tests/batch9-build.mjs`. Browser interaction used CUA against `tests/batch9-preview.mjs`; the older CLI browser runner was not rerun.

## Every changed or created file

| File | Reason |
|---|---|
| `app/profile-draft.ts` | New temporary state hook keyed by profile identity with owner-capturing setters. |
| `app/gym.tsx` | Owner-scoped gym draft, filters, error and saving state; delayed imports target their original owner. |
| `app/tools.tsx` | Owner-scoped prescribed-rehab draft and save feedback. |
| `app/reports.tsx` | Owner-scoped report fields/file/confirmation plus matching-owner object URL creation, display and cleanup. |
| `app/body.tsx` | Priority choices come from the supported schema. |
| `app/onboarding.tsx` | Localized, associated unsupported-priority validation and correction flow. |
| `app/oz-fit.tsx` | Field-specific stored/imported priority errors; existing raw-data protection retained. |
| `app.css` | Shared viewport height bound and internal scrolling only. |
| `public/sw.js` | Versioned the application shell cache for the Batch 9 build. |
| `tests/batch9-dom.cjs` | 87 focused regression checks for the three blockers. |
| `tests/dom.cjs` | Includes Batch 9 in full/focused execution and records its results. |
| `tests/batch9-preview.mjs` | Isolated synthetic browser fixtures for profile, priority, Finish and rest verification. |
| `tests/batch9-build.mjs` | Verifies generated/source consistency without manually changing generated code. |
| `tests/dom-results.json` | Regenerated complete 325-pass DOM evidence. |
| `tests/batch9-dom-results.json` | New 87-pass focused evidence. |
| `tests/batch9-build-results.json` | Generated consistency evidence and final hashes. |
| `tests/batch9-browser-results.json` | Aggregate completed browser evidence and explicit limitations. |
| `tests/fixture.json` | Logic tests regenerated the synthetic migration effective date from 2026-10-03 to 2026-10-09; no personal data. |
| `app.js` | Browser bundle regenerated by the documented build. |
| `dist/Oz-Fit-v2.html` | Generated standalone deliverable. |
| `dist/pwa/index.html` | Generated PWA shell. |
| `dist/pwa/sw.js` | Build-copied current service worker. |
| `dist/pwa/manifest.webmanifest` | Build-copied existing manifest. |
| `dist/pwa/icon-192.png` | Build-copied existing icon. |
| `dist/pwa/icon-512.png` | Build-copied existing icon. |
| `Oz-Fit-v2-Changes.md` | Batch 9 task-number completion entry only. |
| `docs/Batch9-P1-Release-Blockers.md` | This scoped implementation/evidence/file report. |

The build also regenerated `asset.ts` and `assets.json` without content differences. Other existing result files were regenerated with unchanged contents. Ignored `.cache/batch9/` files contain local test logs and the saved screenshot; they are evidence artifacts, not product code.

## Limits

Physical phones, Safari, screen readers, mobile keyboard behavior, installed-PWA startup/update/offline behavior and notification delivery still require real-device testing. Simulated service-worker passes do not establish installation or offline startup on a real device. Unsaved editor drafts are not persisted across a reload or editor unmount. The known alternative-coverage gaps remain outside this batch. This scoped completion is not a new final release audit.

Batch 9 stops here.
