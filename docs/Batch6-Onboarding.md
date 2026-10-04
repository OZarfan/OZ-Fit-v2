# Batch 6 — onboarding and direct profile editing

Date: 2026-10-04. Baseline: `3eab33b`, completed Batch 5. Scope: only the verified onboarding/profile-editing issues. No Weekly Plan redesign, general polish, new theme, typography/layout system change, or unrelated optimization.

## Existing flow and bounded information architecture

Previously, `OzFit` owned a boolean `editing` state. Both Profile's Edit action and Plan's Edit availability action rendered `Onboarding` with the existing profile, always starting at step zero. The shared component required the same six-step path for changing any existing setting. It also regenerated training days on every completion. Step one displayed primary goal radios and supporting goal buttons simultaneously, including the possibility of selecting the primary goal again as a supporting goal.

The root now owns a transient `ProfileSection | null` editor destination. Five Profile settings actions open the existing field groups directly:

| Section | Existing information edited |
|---|---|
| Goals | One primary goal and optional supporting goals |
| Personal details & experience | Name, birth date/age, measurements, measurement date and experience |
| Availability & duration | Available weekdays, session count, week start, default duration and per-day duration |
| General equipment & muscle priority | General equipment and body priority; copy distinguishes these from an active gym's own inventory |
| Health & daily routine | Health status, injury controls, restrictions, acute-symptom flag, activity and sleep |

The existing Plan availability action opens Availability & duration; the acute-symptom Review details action opens Health & daily routine. Both keep their existing surrounding screen and behavior. Gym inventory, nutrition, prescription, report, exercise-preference and other existing local editors remain in place. The four-tab navigation architecture and Weekly Plan layout are unchanged.

The same `Onboarding` component renders these sections and first-time setup. The shared `Choices` component, health/injury inputs, validation and schema parsing remain common. There is no second form model or duplicate business logic. Section editors show Save changes and Cancel without a wizard counter or unrelated Next steps. Focus enters the section heading and returns to the invoking action after save/cancel. Fields and actions are disabled while saving, using the existing busy state.

First-time setup still has six guided steps: goals; personal details/experience; availability; equipment/priority; health/routine; review. It retains required-field validation, the adult minimum, AI draft intake/review, the recommended split and explicit final save. No required setup information was removed. All new labels and guidance have Arabic and English versions.

## Goal semantics

All seven primary goal options remain in the named single-choice radio group. A concise heading and description explain the primary goal's role. Only after a primary choice does a native disclosure expose optional supporting goals, collapsed by default with a selected-count summary. Supporting goals have their own named group and pressed states. Their choices contain all other goal options; selecting a supporting goal as the new primary removes its duplicate from the supporting array and preserves the other choices. The existing conflicting-weight-goals explanation remains.

This uses the existing typography, surfaces, tokens, controls and disclosure styles. No CSS or primitive component changes were needed.

## Save, state and data contracts

- `Onboarding.onSave` returns `Promise<boolean>`. The editor awaits confirmed success; root `saveProfile()` closes it only after `commit()` succeeds. Failure or revision conflict preserves the draft and keeps it editable with focused feedback in the editor. Cancel does not commit a draft or overwrite another revision.
- During testing, first-time save failure exposed a pre-existing root condition, `error && !p`, that replaced the wizard with the read-failure screen. `loadFailed` now distinguishes a failed read from a failed save. Corrupt/unreadable records still use the protective raw-export/retry screen; a failed first save keeps the six-step draft and permits retry.
- Direct section saves preserve unrelated profile fields, existing session/report records, IDs, creation time and split. Numeric normalization is limited to personal details; primary/supporting normalization is limited to goals. AI intake is kept in guided setup so direct editing cannot overwrite unrelated fields through an import.
- Only setup and availability editing consider training-day generation. An existing custom distribution is retained when its day count equals the requested session count and every selected training day is still available. Otherwise the existing `chooseDays()` algorithm chooses valid days. Schedule history is appended only when training-day membership changes.
- The Batch 3 selected-day contract is retained: unrelated saves keep the currently viewed workout/rest day; an actual changed schedule keeps a still-valid selected training day or selects its first valid day.
- Account schema 2, profile schemas, `oz-fit-html-state-v1`, revision handling, pre-v2 backup and export formats are unchanged. Existing synthetic profiles open without rewriting storage; no migration was required. The PWA shell cache version is `oz-fit-shell-v2-20261004-batch6`; worker lifecycle/offline logic is unchanged.

## Verification

Commands run against the documented build:

```sh
npm run typecheck
npm run build
npm test
npm run test:dom
npm run test:pwa
node tests/batch4-colors.cjs
node tests/batch5-derived.mjs
node tests/batch5-performance.mjs
```

The focused Batch 6 DOM suite was also run separately using `OZ_DOM_SUITE=batch6` (PowerShell command in README). The final complete DOM run includes its final 94 checks.

| Verification | Result |
|---|---|
| Typecheck / documented build | Passed; standalone HTML and separate PWA rebuilt |
| Logic | 16 passed; unchanged partial result for 574 missing equipment/alternative combinations |
| DOM | 196 passed: all 102 prior checks plus 94 Batch 6 checks |
| PWA | 3 simulated-worker checks passed |
| Batch 4 colors | 4 guards passed |
| Batch 5 derivations | 6 checks passed, including identical output for 125 plans and representative Progress/PR histories |
| Batch 5 performance | 19 checks passed; ten clock ticks still cause zero root renders/plan generations, and three search edits cause zero plan generations |

New DOM coverage runs in both languages and includes six-step first-time completion, required-field/adult validation, first-time quota failure and retry, corruption protection, every direct editor, explicit save/cancel, focus return, primary/supporting semantics, unrelated-field/history preservation, selected-day preservation, valid custom schedule retention and invalidated-schedule reselection. Every section is exercised under both quota failure and revision conflict, checking draft values, continued editing, contextual error focus, successful quota retry, and preservation of the other revision on cancel.

All previous P1 suites remain included: gym/prescription draft failure/retry and Active gym selection conflict handling; report object-URL cleanup; injury history; logging validation; accessible names/selected states; dialog contracts; and persisted rest extension/dismissal. The Batch 3 selected-day and rest/weekday contracts also remain covered. No cross-batch regression was found.

### Browser evidence

`tests/batch6-browser-results.json` records Codex in-app Chromium checks using isolated synthetic fixtures, Arabic RTL and English, widths **360, 390, 430 and 1280px**, height 800px.

- All eight cases completed first-time setup and exercised 14 setup/editor states: primary choice, collapsed and expanded supporting goals, the remaining setup steps, direct availability, Profile settings and each other direct editor. Save/cancel, focus return and selected workout-day retention passed. No horizontal page overflow was measured; editor actions and measured choice/disclosure targets retain at least 44px height.
- Seven unchanged states per case were compared with the Batch 5 browser bundle: Today, invalid logging, active rest, rest-return control, finish dialog, Plan and Progress. Recorded component geometry and computed colors, typography, spacing and positioning match. Rest and load/reps remain visible and hit-testable; +30s retains visibility; the return control is in flow and does not overlap workout cards. Weekday targets remain at least 44px wide. Dialog headers retain localized 44px close controls with no title collision.
- Logging errors remain associated with the invalid fields, focus the first invalid field, disappear after correction, and leave no stale error after a successful log. Contrast remains Finish session **13.24:1**, eyebrow **6.18:1**, exercise small text **5.83:1**, validation **5.48:1**.
- Additional checks in all eight cases confirm split/stage selected states, report images decoding from actual blob URLs, localized extracted-text textarea editing, and Balanced body-selector naming and selected state through its new direct equipment entry.
- The existing component fixture confirms all **28 foreground/background/disabled pairs** match Batch 4, as do ghost hover colors, the 3px keyboard focus outline and shared dialog colors.

Screenshots under `.cache/batch6/` were visually inspected: Arabic 390px direct availability and English 390px direct goals. Raw measurements are stored there alongside the concise tracked JSON evidence. Browser interactions used the computer-use tool; the optional Playwright CLI runner was not launched separately. Its assertions were exercised through this browser matrix, with the entry route updated in the script for future runs.

## Every changed file and generated output

| File | Reason |
|---|---|
| `app/onboarding.tsx` | Shared section registry, direct editing mode, awaited save/error contract, retained schedule distribution, clearer primary/supporting goals and localized focus/error behavior |
| `app/oz-fit.tsx` | Section destination state/entry actions, focus return, contextual editor error wiring and separate read-failure state; existing save/persistence contracts retained |
| `public/sw.js` | Version rebuilt PWA shell cache |
| `tests/batch6-dom.cjs` | 94 focused synthetic regressions |
| `tests/dom.cjs` | Include Batch 6 in the complete suite and support a focused run |
| `tests/batch2-dom.cjs` | Enter the body selector through direct equipment editing; preserve existing assertions |
| `tests/batch2-browser.cjs` | Same entry-route update for the optional standalone browser runner |
| `tests/batch6-preview.mjs` | Isolated localhost new/profile/active fixtures and Batch 5 baseline bundle for browser verification |
| `tests/batch6-dom-results.json` | New focused regression result artifact |
| `tests/dom-results.json` | Complete 196-check result artifact |
| `tests/batch6-browser-results.json` | Eight onboarding cases, eight baseline comparisons, eight additional P1 checks and shared component evidence |
| `tests/fixture.json` | Logic runner regenerated the synthetic migration date from 2026-10-03 to 2026-10-04; no manual edit |
| `README.md` | Focused test and isolated preview commands, baseline requirement and report link |
| `docs/Batch6-Onboarding.md` | This architecture, contract, verification, file-inventory and limitation report |
| `Oz-Fit-v2-Changes.md` | Task-number record for Batch 6 |
| `app.js` | Browser bundle regenerated by the documented build |
| `dist/Oz-Fit-v2.html`, `dist/pwa/index.html` | Generated standalone and PWA HTML |
| `dist/pwa/sw.js` | Build copy of the versioned worker |
| `dist/pwa/manifest.webmanifest`, `dist/pwa/icon-192.png`, `dist/pwa/icon-512.png` | Unchanged public PWA assets copied by the build |
| `.cache/batch6/onboarding-browser-raw.json`, `.cache/batch6/cross-batch-browser-raw.json`, `.cache/batch6/additional-browser-checks.json`, `.cache/batch6/components.json` | Ignored local browser measurements, using synthetic data |
| `.cache/batch6/ar-390-direct-availability.jpg`, `.cache/batch6/en-390-direct-goals.jpg`, `.cache/batch6/synthetic-report.png` | Ignored screenshots and the synthetic report-image fixture |

`asset.ts`, `assets.json`, `tests/acceptance.cjs` and other existing test result artifacts were regenerated without content changes. No generated file was manually edited. `app.css`, `base.css`, UI primitives, storage schemas and Batch 5 calculation/clock code remain unchanged.

## Remaining verification limits

Desktop viewport and synthetic DOM checks do not establish physical-phone touch/virtual-keyboard behavior, Safari rendering or assistive-technology announcements. Native radio/disclosure behavior, focus transitions and errors still need real screen-reader testing. Worker simulation does not prove actual PWA installation, installed update lifecycle or real offline startup. Browser fixture navigation deliberately reseeds isolated data; persistence/reload and failure/conflict evidence comes from the DOM/logic suites. The pre-existing partial alternative coverage remains outside this batch. No production profiles or personal exports were used.

Batch 6 is complete within this scope. No subsequent batch, Weekly Plan redesign, polish or unrelated optimization was performed.
