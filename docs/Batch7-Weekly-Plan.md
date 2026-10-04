# Batch 7 — Weekly Plan outcome first

Completed 2026-10-04. Mode: Operate. Scope: the existing Plan screen, using the established Code-first workflow. This batch implements the approved direction; it does not begin a final audit or general polish.

## Information hierarchy and contracts

The previous screen presented recommended split names and configuration before showing what the week contained. The new order is:

1. **Your week:** selected training days in the configured week order, each paired with its actual generated session, estimated duration including rest, and the available time for that day. Muscle groups and optional exercise details explain the session without adding logging controls. Days without a planned session remain explicit.
2. **Why this recommendation:** the existing rule-based explanation, session count, goal, default duration and experience, alongside available weekdays. When the saved split differs from the recommendation, the screen explicitly says the displayed week follows the saved choice. Per-day time budgets are distinguished from the recommendation's default duration.
3. **Adjust your week:** existing schedule and direct availability editing, followed by a collapsed native Split & progression disclosure. All five split options, three stages, eligibility gates, selected states and existing guidance remain available.

`app/plan.tsx` receives the root's existing memoized `DayPlan[]`, profile and callbacks. It does not generate a second plan, copy schedule state, add persistence fields, or modify the planning algorithm. It uses each `DayPlan.weekday`, localized title, slots, blocks and estimated minutes. Acute-symptom or empty-eligible plans show their blocked state instead of advertising the planner's placeholder five-minute duration as an executable workout. Active sessions retain their stored snapshot and lock configuration as before.

The root keeps profile saving and selected-day ownership. Split/stage changes call the existing awaited save contract and display only confirmed state. The existing schedule modal previously called `void saveProfile(v)` and immediately closed, losing its draft on a failed save. The new Plan failure regressions exposed that defect. Its callback now awaits success before closing; busy controls prevent duplicate submissions, and quota/conflict failures retain the editable schedule and existing contextual persistence error. Storage, revision and recovery contracts themselves are unchanged.

No schema migration is required. Account schema 2, `oz-fit-html-state-v1`, pre-v2 backup, profile identities, history, exports and stored sessions are unchanged. Opening Plan does not write storage. The Batch 3 selected-day contract and Batch 6 direct availability editor remain intact. Today, onboarding/profile fields, Progress, Reports, Tools, shared primitives, semantic token values and clock/calculation code are unchanged. Nutrition remains below Plan with its existing behavior.

## Verification

Commands run through the documented local Node/npm setup:

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

The focused Batch 7 DOM suite was also run separately with `OZ_DOM_SUITE=batch7`. The standard full DOM command now includes it.

| Check | Result |
|---|---|
| Typecheck / documented build | Passed; standalone HTML and separate PWA rebuilt, 221 assets |
| Logic | 16 passed; the pre-existing partial result remains for 574 equipment/alternative coverage gaps |
| DOM | 238 passed: all 196 previous checks plus 42 Batch 7 checks |
| PWA | 3 simulated-worker checks passed |
| Batch 4 semantic colors | 4 source-contract guards passed; intentional literal count and tokens unchanged |
| Batch 5 derived results | 6 passed, including identical output for 125 representative plans and tested Progress/PR histories |
| Batch 5 performance | 19 passed; ten clock ticks still cause zero root renders/plan generations, and three search edits cause zero plan generations |

The 42 new checks cover both languages: weekly outcome before configuration; collapsed advanced controls; recommendation and saved-choice distinction; exact weekday/title/duration/exercise parity with Today for all five splits, varied week starts and per-day time budgets; explicit split/stage changes and progression gates; selected rest-day preservation; quota failures, retries and revision conflicts for split, stage and schedule; active-session locks; and blocked-day presentation. Existing stored fixtures remain readable without rewriting storage on a Plan visit. `lib/fitness.ts` is unchanged from Batch 6.

The complete suite retains every P1 regression: gym/prescription drafts and Active gym failure/conflict paths, report blob preview/revocation, injury history, local logging validation/errors, accessible states/names and dialog contracts, and rest persistence. Batch 3 rest/weekday/selected-day checks and all 94 Batch 6 onboarding/direct-editing checks pass. No cross-batch regression was found.

### Browser evidence

`tests/batch7-browser-results.json` records isolated synthetic Codex in-app Chromium checks at **360, 390, 430 and 1280px**, **Arabic RTL and English LTR**, height 800px.

- All eight Plan cases pass for the initial outcome, keyboard-opened exercise details, keyboard-opened advanced configuration, and saved schedule. They verify split/stage save, selected states, recommendation distinction, actual day remapping, selected-day retention, and the existing direct availability editor/cancel path.
- No horizontal page overflow or measured control-content overflow occurred. Measured disclosure/button targets have a minimum 44px height. Full weekday labels remain unbroken. DOM order is outcome, explanation, configuration in both directions.
- Six unchanged states per language/width case were compared with the completed Batch 6 browser bundle (`6f62388`): Today, invalid logging, active rest, rest-return control, finish dialog and Progress. Recorded component sizes and computed colors, typography, spacing and positioning match in every case. Both bundles use current CSS; all new CSS is scoped to the new Plan classes and does not apply to these comparison states.
- Invalid logging still focuses `log-weight`, associates both field errors, and clears stale feedback on successful submission. Rest actions and load/reps remain visible and hit-testable; +30 seconds retains visibility; the return control stays in flow without covering cards. Weekday targets remain at least 44px wide. Dialog close controls remain localized, at least 44px square, and clear of title text.
- Contrast remains **Finish session 13.24:1**, **eyebrow 6.18:1**, **exercise small text 5.83:1**, **field validation 5.48:1**.

The before English mobile Plan, after Arabic mobile Plan/configuration, and after English desktop Plan screenshots were saved under `.cache/batch7/`; the after screenshots were visually inspected. Raw DOM measurements are saved alongside them. Browser interactions used CUA; no separate Playwright CLI browser process was launched. The existing Batch 2 optional browser script now opens the configuration disclosure before checking its existing split/stage assertions.

## Every changed file and generated output

| File | Reason |
|---|---|
| `app/plan.tsx` | New presentation-only Weekly Plan component with outcome-first hierarchy, actual session details, existing recommendation and deferred configuration |
| `app/oz-fit.tsx` | Wire the shared root plan/save callbacks into WeeklyPlan; await successful schedule save before closing and disable schedule controls during saves |
| `app.css` | Fourteen appended lines of scoped weekly-row/disclosure rules using existing tokens and type scale; keep weekday and Recommended labels intact |
| `public/sw.js` | Version the shell cache to `oz-fit-shell-v2-20261004-batch7`; preserve worker lifecycle/offline logic |
| `tests/batch7-dom.cjs` | 42 focused regressions for the new hierarchy, actual mapping, configuration and failure paths |
| `tests/dom.cjs` | Include Batch 7 in the complete DOM suite and add its focused entry point |
| `tests/batch2-dom.cjs` | Open the new advanced disclosure before existing split/stage assertions |
| `tests/batch2-browser.cjs` | Same disclosure-entry update for the optional browser runner |
| `tests/batch7-preview.mjs` | Isolated synthetic profile/active/new/blocked fixtures, varied daily budgets, and completed Batch 6 baseline bundle |
| `tests/batch7-dom-results.json` | 42 focused result records |
| `tests/dom-results.json` | Complete 238-check result artifact |
| `tests/batch7-browser-results.json` | Eight responsive Plan cases, eight baseline comparisons, contrast and interaction evidence |
| `tests/fixture.json` | Logic runner regenerated the synthetic migration date from 2026-10-03 to 2026-10-04; no manual edit |
| `README.md` | Focused suite/preview commands, fixture warnings and report link |
| `Oz-Fit-v2-Changes.md` | Task-number changelog entry |
| `docs/Batch7-Weekly-Plan.md` | This scope, contract, verification, inventory and limitation report |
| `app.js` | Browser bundle regenerated through the documented build |
| `dist/Oz-Fit-v2.html`, `dist/pwa/index.html` | Generated standalone and PWA HTML |
| `dist/pwa/sw.js` | Build copy of the versioned worker |
| `dist/pwa/manifest.webmanifest`, `dist/pwa/icon-192.png`, `dist/pwa/icon-512.png` | Unchanged public assets copied by the build |
| `.cache/batch7/weekly-browser-raw.json`, `.cache/batch7/cross-batch-browser-raw.json` | Ignored local synthetic browser measurements |
| `.cache/batch7/before-en-390-plan.jpg`, `.cache/batch7/after-ar-390-plan.jpg`, `.cache/batch7/after-ar-390-configuration.jpg`, `.cache/batch7/after-en-1280-plan.jpg` | Ignored local screenshot evidence |

`asset.ts`, `assets.json`, `tests/acceptance.cjs` and other existing test result artifacts were regenerated without content changes. No generated file was manually edited.

## Remaining limits

Desktop viewport checks do not establish physical-phone touch/virtual-keyboard behavior, Safari rendering, or screen-reader announcements and disclosure navigation. Actual PWA installation, update lifecycle, offline cold start and locked-screen timer delivery still need real-device checks; worker simulation cannot establish those results. Fixture navigation deliberately reseeds the isolated origin; persistence/reload and failure/conflict verification comes from the logic/DOM suites. The existing partial exercise-alternative coverage is outside this batch. Only synthetic data was used.

Batch 7 stops here. No general polish, unrelated optimization, or final audit was performed.
