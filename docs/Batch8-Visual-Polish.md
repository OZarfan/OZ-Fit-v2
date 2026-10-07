# Batch 8 — visual polish

Completed 2026-10-07. Implementation and browser captures: 2026-10-05 Cairo time. Baseline: completed Batch 7, Git `b76feb6`.

This pass refines the existing Arabic/English product. It retains the four tabs, guided onboarding, direct profile editors, outcome-first Weekly Plan, fast logger, green/lime identity and system fonts. There are no data migrations, new persistence fields, planning changes or performance refactors.

## Strategy and independent review

Two independent reviewers inspected the existing implementation and representative screenshots: one for visual design, one for mobile/RTL/accessibility. Their overlapping findings were consolidated into shared rules: heading weight, field spacing, stretched selection indicators, action grouping, surface rhythm, rest-day contrast and rest feedback placement.

The reviewers differed on whether the weekday or session name should dominate a weekly row. The final treatment emphasizes the weekday and duration while keeping the session name readable, preserving Batch 7's day → session → duration hierarchy. No information architecture change was made.

The initial implementation received one correction round: restore wrapping for allergen/gym options after the shared minimum-width change, and separate the comeback actions using the existing row pattern. The mobile reviewer confirmed the final correction. The visual reviewer's final confirmation was unavailable because its usage limit was reached; the primary agent inspected the corrected screenshots and measurements. No final audit or adversarial review was started.

## Improvements by screen

| Area | Intentional visual change |
|---|---|
| Today | Clearer heading/session hierarchy, consistent exercise-row rhythm, tabular timer values, separated comeback actions, and readable rest-day labels. |
| Logging and rest | Stronger editable load/reps values, consistent label/error spacing, compact rest controls, correct LTR rendering of `+30s` inside RTL, and a compact top PR message that does not intercept taps or cover rest/input controls. Logger order, actions, timer ownership and persistence are unchanged. |
| Weekly Plan | Stronger weekday and duration emphasis, quieter session/supporting detail, tighter exercise disclosure spacing and a clearer advanced-settings divider. Week outcome → recommendation → configuration remains intact. |
| Progress | Quieter stat surfaces, aligned numeric emphasis, chart/table rhythm, and JSON export changed from primary to secondary alongside CSV. All calculations and historical output remain unchanged. |
| Profile | Consistent direct-editor actions and a wrapping action row for New profile / Import JSON backup. No section or save/cancel behavior changes. |
| Onboarding and profile forms | Existing fonts with clearer heading levels, an even three-column/two-column choice grid, square selection indicators inside large labels, and one consistent owner for label/control/inter-field spacing. Goal semantics and progressive disclosure remain unchanged. |
| Nutrition, Gym, Reports and prescribed rehab | Shared field/panel/action spacing, readable wrapping options, consistent control geometry and report-editor rhythm. Report preview and prescribed-dose behavior remain unchanged. |
| Navigation and shared components | Active tab weight, explicit summary keyboard focus, consistent action radii/weights/icon sizing, logical dialog alignment, and 44px minimum icon-button targets. No navigation or color-system restructure. |

## Shared contracts

`app.css` owns the changes after the compiled baseline. Four reusable geometry/rhythm variables were added: `--surface-radius:16px`, `--control-radius:12px`, `--section-space:24px`, and `--form-gap:16px`. All color references reuse Batch 4 roles; no new pigment palette or theme was introduced.

Fields own label/control separation; form grids own spacing between fields. Standard inputs retain at least 16px text and now have a 46px minimum height. Logging values use 20px bold tabular numerals. Radio/checkbox indicators are 20px squares inside large clickable option labels; catalog checkboxes remain 24px. The measured option labels were at least 51px high.

Dialog title line height is 1.45 with logical alignment. The existing close-button reservation, localized name, focus behavior and 44×44px target remain. Mobile rest ordering, the static mobile logging action and the in-flow reopen timer remain as established in Batch 3.

New motion is limited to 140ms color/background/border feedback under `prefers-reduced-motion:no-preference`. The existing reduced-motion override still disables animation and transition. There are no new entrance, bounce or decorative animations.

## Verification

The documented build regenerated the standalone HTML and PWA package. Final standalone size: **1,881,954 bytes**, with **221 assets**. Typecheck and build passed.

| Check | Result |
|---|---|
| `npm test` | 16 passed; the existing alternative-coverage result remains partial, with 574 unsupported slots explicitly handled by the no-alternative path. |
| `npm run test:dom` | 238 passed, including every Batch 1–7 DOM regression. |
| Batch 6 / Batch 7 focused result files | 94 / 42 passed; included in the full DOM total, not additional tests. |
| `npm run test:pwa` | 3 simulated-worker checks passed. |
| `node tests/batch4-colors.cjs` | 4 passed; 49 centralized pigment occurrences, 5 intentional direct pigments, 6 transparency keywords and 0 shared pigment utilities, unchanged from Batch 4. |
| `node tests/batch5-derived.mjs` | 6 passed; 125 representative plans and tested Progress/PR results remain identical. |
| `node tests/batch5-performance.mjs` | 19 passed, including a final-source rerun. Timer updates, reminders, rest expiry, midnight/noon/DST boundaries and render/calculation counts remain covered. |

The performance comparator now permits exactly one approved presentation difference: `<button class="primary">JSON</button>` becomes `secondary`. It first asserts there is exactly one such baseline button, then compares all remaining Progress markup exactly. Output assertions and render/calculation thresholds were not loosened.

| Deterministic work | Batch 4 baseline | Batch 8, retaining Batch 5 optimization |
|---|---:|---:|
| Root renders / plan generations across 10 Progress clock ticks | 10 / 10 | 0 / 0 |
| Root renders / plan generations across 10 active-session ticks | 10 / 10 | 0 / 0 |
| Plan generations across 3 search edits | 3 | 0 |
| Historical processing for 2,000 sets | 1,999,000 preceding-set entries reconstructed | 2,000 set reads |

These are deterministic operation counts, not device-speed or wall-time benchmarks.

### Browser and screenshot evidence

The Codex in-app Chromium browser was used with synthetic records on isolated port 4189. All **8 AR/EN × 360/390/430/1280px** cases were checked at 800px viewport height. Each contains 20 states: Today, Plan, expanded Plan configuration, Nutrition, Progress, charts, Profile, Gym, Reports, rehab, availability editor, equipment editor, onboarding, primary goal selected, active session, logging, invalid logging, active rest, rest after closing the logger, and finish dialog.

There are **160 final captures** and **80 baseline captures**. Baseline pairs cover both languages at 390px and 1280px for every listed state. The [local comparison gallery](../.cache/batch8/comparison.html) provides all 80 pairs; [the screenshot index](../.cache/batch8/screenshot-index.json) also lists the additional 360px and 430px captures. These ignored local artifacts are retained in this workspace, not embedded in the application.

The compact [browser result](../tests/batch8-browser-results.json) is derived from the saved before/after measurements. Checks confirmed:

- No measured document/dialog horizontal overflow or control-content overflow across the matrix.
- Measured non-indicator controls are at least 44px high; option indicators are 20×20px within larger labels.
- All measured dialog close controls are 44×44px with localized labels and no title-text collision.
- Rest countdown/actions and editable load/reps remain visible and reachable; PR feedback does not cover them or intercept input.
- Invalid logging focuses weight first, associates both field errors, and clears invalid state after successful logging.
- Report object-URL images decode successfully in all eight cases.
- Plan's native disclosure opens from keyboard input with the 3px green focus outline.
- The lowest sampled text contrast is 4.52:1 for inactive navigation; no sampled value is below 4.5:1.

| Established text case | Before | After |
|---|---:|---:|
| Finish session | 13.24:1 | 13.24:1 |
| Eyebrow | 6.18:1 | 6.18:1 |
| Field validation | 5.48:1 | 5.48:1 |
| Rest weekday | 3.79:1 | 5.77:1 |
| Rest caption | 4.14:1 | 5.77:1 |

For settled screenshots, the preview activates the **existing production reduced-motion declarations** by changing their media condition in the served test fixture. All 160 measured states report zero active animation/transition under those declarations. This verifies their effect; it is **not a test of a real OS reduced-motion preference toggle**. `motion=normal` serves the original media condition. The production build is not altered by this fixture.

The optional legacy Playwright browser runner was not rerun in this pass; the CUA matrix supplies rendered layout/contrast evidence, and the full DOM suite supplies accessible-name/selected-state/failure-path regressions. The separate 28-pair Batch 4 component-browser fixture was not rerun; its source color guards passed and the application contrast cases above were remeasured. Do not treat this pass as an exhaustive accessibility audit.

### Preservation of previous batches

All 238 DOM checks continue to cover failed explicit saves and Active gym selector conflicts, editable retries, blob preview lifecycle, injury history, contextual validation, names/selected states, dialog semantics, persisted rest extension/dismissal, selected workout-day retention, direct profile editing, onboarding completion and Plan configuration failure/retry paths. The logic suite confirms existing stored envelopes remain readable. Source changes outside CSS are only two action-row wrappers, the JSON button class, and the PWA cache version. No state or persistence implementation was changed.

## Changed files

| File/output | Why |
|---|---|
| `app.css` | Shared visual rhythm, type hierarchy, forms/options/actions, screen-specific presentation details, rest feedback, responsive refinements and reduced-motion-aware feedback; existing semantic colors reused. |
| `app/oz-fit.tsx` | Wrap Profile and comeback action pairs in the existing row pattern; handlers unchanged. |
| `app/progress.tsx` | Change JSON export to the existing secondary visual treatment. |
| `public/sw.js` | Set shell cache identity to `oz-fit-shell-v2-20261005-batch8`; lifecycle/cache boundaries unchanged. |
| `tests/batch5-performance.mjs` | Permit only the approved JSON export class difference in exact baseline markup comparison. |
| `tests/batch5-performance-results.json` | Record the updated comparison name and passing performance results. |
| `tests/fixture.json` | Logic runner regenerated the synthetic migration effective date from 2026-10-03 to 2026-10-05; no manual fixture edit. |
| `tests/batch8-preview.mjs` | Isolated synthetic before/after browser fixture, baseline `b76feb6`, and settled-capture motion option. |
| `tests/batch8-browser-results.json` | Compact final responsive, contrast, geometry and interaction evidence with explicit limits. |
| `README.md` | Preview/evidence instructions and link to this report. |
| `DESIGN.md` | Record current Batch 8 presentation contracts while retaining the older inspection as historical context. |
| `Oz-Fit-v2-Changes.md` | Task-number changelog entry. |
| `docs/Batch8-Visual-Polish.md` | This scope, review reconciliation, verification, inventory and limitations report. |
| `app.js` | Browser bundle regenerated by the documented build. |
| `dist/Oz-Fit-v2.html`, `dist/pwa/index.html` | Generated standalone/PWA application. |
| `dist/pwa/sw.js` | Build copy of the versioned worker. |
| `dist/pwa/manifest.webmanifest`, `dist/pwa/icon-192.png`, `dist/pwa/icon-512.png` | Existing public assets copied by the build without visual changes. |
| `.cache/batch8/before-raw.json`, `after-raw.json`, `initial-after-raw.json` | Ignored synthetic measurements; `initial-after-raw.json` is historical inspection data, not the final result. |
| `.cache/batch8/before-*.jpg`, `after-*.jpg` | 80 baseline and 160 final screenshots, enumerated in the screenshot index. |
| `.cache/batch8/comparison.html`, `screenshot-index.json` | Local review gallery and exact screenshot inventory. |

`asset.ts`, `assets.json`, `tests/acceptance.cjs`, and other existing result files were regenerated without content changes. No generated file was manually edited. Dependencies and exercise catalog were not changed.

## Deferred details and verification limits

Native select menus, meters, file controls and scrollbars retain platform presentation. Exercise-photo quality, the generated share-image composition and the five intentional toast/chart color literals are retained. Those are not reasons to expand this pass into asset replacement, a new theme, copy/IA work or another token refactor. Existing empty, informational, safety, disabled and failure states retain their messages and behavior and inherit the shared styles; no new state flow was invented.

Real phones, Safari, touch reach, virtual-keyboard layout, screen-reader announcements, actual OS reduced-motion switching, PWA installation/update lifecycle, offline cold start and locked-screen timer delivery still require device testing. Browser fixtures reseed their isolated storage on navigation; persistence/reload evidence comes from logic/DOM tests. Simulated worker tests do not establish installability or physical offline startup. The pre-existing partial alternative coverage is outside this visual batch.

Batch 8 is complete. No final audit or adversarial review was performed.
