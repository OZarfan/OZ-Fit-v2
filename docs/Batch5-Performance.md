# Batch 5 — bounded P2 performance fixes

Completed 2026-10-04. Baseline: `866d444`, the completed Batch 4 commit. This batch changes timer render ownership, plan caching and Progress derivation only. It does not change CSS, shared UI components, persistence schemas or save behavior.

## Inspection and implementation

The root `OzFit` component previously owned `now` and updated it every 500ms. Every tick rerendered the app root, called `makePlan(profile)` and, when Progress was mounted, rebuilt every set's preceding history and reran all PR comparisons. Search, dialog input and other parent state changes also regenerated the plan. There is one production call site for `makePlan`, in `app/oz-fit.tsx`; its other callers are tests.

`app/clock.tsx` now keeps time state inside `TimerText`, which returns text without adding DOM elements. Only mounted elapsed/countdown labels rerender on their 500ms intervals. `useClockEvents` checks deadlines at the same cadence using the latest committed callback; it does not put each tick into root state. The root changes only for real rest/session/reminder events or calendar boundaries. Midnight refreshes date-based summaries. The original comeback deadline is now exposed separately and memoized by sessions/scheduled days, so the clock refreshes the parent only when that exact threshold is crossed. This preserves the existing four elapsed 24-hour periods even when daylight-saving changes shift the threshold away from local noon. Timers derive elapsed time from wall-clock timestamps, so delayed foreground ticks catch up. Rest state still comes from the existing persisted deadline contract.

`planInputKey` sits next to the planner. Its small serialized key contains split, days/order, week start, effective duration for each selected day, primary/secondary goals, priority, stage, health, acute symptoms, injury area/status/review, effective gym equipment/exact inventory, preferred and disliked exercise IDs. Those are the fields read by `makePlan`, `eligible`, `score`, `safeMode` and `restFor`. The root memoizes on this key rather than profile object identity: successful saves parse/clone profiles even when only nutrition or unrelated metadata changed. The planner algorithm itself is unchanged. Cache values are memory-only, never stored or exported.

Progress memoizes exercise IDs and historical PRs by sessions; exercise trends by sessions/exercise/gym; weekly volume and adherence by their session/schedule/calendar dependencies; and load advice by the selected exercise and bundle. `prHistory` walks stored sessions/sets once and keeps maximum weight, estimated 1RM and reps per load for each exercise/gym. It preserves strict comparisons, baseline exclusion, set order, current unfinished sessions, unknown exercise handling and bodyweight/assisted/hold exclusions. Localization remains at rendering time.

## Deterministic before/after evidence

These are work counts, not a claim about phone speed or frame rate. The test harness instruments source only in its in-memory test bundle. Its clock is controlled and both versions receive the same synthetic records.

| Scenario | Before | After |
|---|---:|---:|
| 10 clock ticks with Progress open: app-root renders | 10 | 0 |
| Same ticks: plan generations | 10 | 0 |
| Same ticks: Progress renders/full derivations | 10 | 0 |
| Same ticks: per-set PR calls on 8-set fixture | 80 | 0 |
| 10 active-session/rest ticks: app-root renders / plans | 10 / 10 | 0 / 0 |
| Three search edits: plan generations | 3 | 0 |
| PR derivation for 2,000 sets | 1,999,000 preceding-set entries reconstructed, plus scans | 2,000 set reads in one pass |

The first history pass is now linear in set count (with map lookups), and unchanged history is reused on unrelated renders. All **125 representative plans** match the original implementation exactly. PR parity covers empty and large histories, ties, different gyms, unknown IDs, assisted/bodyweight/hold exercises, repetitions above 12, unfinished sessions and nonchronological stored dates. Trends, load advice, volume and adherence match the old implementation on representative history. The Progress DOM matches the pre-optimization result exactly in the deterministic fixture.

Evidence: `tests/batch5-performance-results.json` (19 checks), `tests/batch5-derived-results.json` (6 checks). Run with the commands documented in README. Tests require the baseline Git object, existing Node dependencies and synthetic `tests/fixture.json`.

## Validation and previous-batch regressions

- Typecheck and documented build passed.
- Existing logic suite: 16 passed, plus its unchanged partial result for 574 equipment/alternative coverage gaps.
- Existing DOM suite: 102 passed (12 original, 22 Batch 1, 30 Batch 2, 16 Active gym selector, 22 Batch 3).
- PWA suite: 3 simulated-worker checks passed. Cache version changed to `oz-fit-shell-v2-20261004-batch5`; activation and offline routing code are unchanged.
- Batch 4 color guards: 4 passed.
- Clock tests verify elapsed/countdown advance, one-time session and rest alerts, current-language expiry, retained editable load, reminder timing/dismissal, midnight summary refresh, noon comeback behavior and a daylight-saving transition that moves the threshold to 13:00. Deadline parity also passes in UTC, New York and Lord Howe (including its half-hour shift).
- Plan tests verify unrelated nutrition saves do not regenerate the plan and a planner preference save regenerates it once.
- All P1 draft failure/conflict, object-URL lifecycle, injury history, dialog validation, accessible names/selected states and rest persistence tests passed. All selected-day preservation and responsive DOM contracts passed.

Browser comparison used the baseline built `app.js` and the new documented build, with identical CSS and isolated synthetic records. Arabic RTL and English were checked at **360, 390, 430 and 1280px**, height 800px. Six states per case: Today, invalid logging, active rest, rest return control, Plan and Progress. All **1,744 element observations** matched in geometry, computed styles and recorded accessible state; no page overflow or title/close collision was found. Rest controls remained visible and validation focused the weight field. Close targets remain 44×44px.

Contrast is unchanged: Finish session **13.24:1**, eyebrow **6.18:1**, exercise small text **5.83:1**, validation **5.48:1**. All 28 shared component foreground/background/disabled pairs match Batch 4. Ghost hover, the 3px keyboard focus outline, and dialog foreground/background/overlay also match. Evidence is in `tests/batch5-browser-results.json`; raw computed observations and the Arabic 390px rest screenshot are under `.cache/batch5/`.

## Every changed file and generated output

| File | Reason |
|---|---|
| `app/clock.tsx` | Isolated timer text state, current callback deadline checks and exact calendar/deadline boundary detection. |
| `app/oz-fit.tsx` | Remove the root clock state, use isolated timer text/events and memoize the existing plan. |
| `app/progress.tsx` | Memoize derived history and render badges from the equivalent single-pass calculation. |
| `lib/fitness.ts` | Add the plan dependency key and single-pass PR history helper; expose the unchanged comeback threshold for clock invalidation. Existing schemas are retained. |
| `public/sw.js` | Version the newly built PWA shell cache. |
| `tests/batch5-performance.mjs` | Test-only render/calculation instrumentation, baseline comparison, clock and invalidation regressions. |
| `tests/batch5-derived.mjs` | Exact plan/history parity fixtures and measured history operation counts. |
| `tests/batch5-performance-results.json` | Deterministic before/after counters and 19 regression results. |
| `tests/batch5-derived-results.json` | Six derived-data regression results, including 125 plan comparisons. |
| `tests/batch5-browser-results.json` | Eight AR/EN viewport comparisons and shared-color regression evidence. |
| `tests/fixture.json` | Logic runner regenerated the synthetic migration date from 2026-10-03 to 2026-10-04; no manual fixture edit. |
| `tests/acceptance.cjs` | Logic test runner regenerated its bundled copy of the extracted comeback deadline helper. |
| `README.md` | Commands, baseline requirement and location of the focused performance evidence. |
| `docs/Batch5-Performance.md` | Scope, dependency inventory, measurements, file inventory and limitations. |
| `Oz-Fit-v2-Changes.md` | Task-number entry for Batch 5. |
| `app.js` | Browser bundle regenerated by `npm run build`. |
| `dist/Oz-Fit-v2.html`, `dist/pwa/index.html` | Standalone and PWA HTML generated by the documented build. |
| `dist/pwa/sw.js` | Build copy of the versioned worker. |
| `dist/pwa/manifest.webmanifest`, `dist/pwa/icon-192.png`, `dist/pwa/icon-512.png` | Unchanged public assets copied by the build into the new output directory. |

The build also regenerates `asset.ts` and `assets.json`, and test commands regenerate existing result files; those contents did not change. Ignored `.cache/batch5/` contains temporary baseline measurements, the baseline Progress DOM, raw browser observations and the screenshot, not application data.

## Deliberately left alone and limitations

No virtualization, web worker, lazy loading, asset compression, debounce, general component memoization, storage rewrite or event-only logging optimization was introduced. Those would go beyond the verified repeated render work. Stored-data parsing/cloning still invalidates session-reference caches after a save; the next history calculation is one linear pass. Progress still renders the full session history, and first-open cost still grows with history size. The small plan key is serialized on ordinary root renders.

The 500ms foreground deadline checks remain, and mounted timer labels each retain their own interval. This batch removes unrelated rendering, not all wakeups. Real-phone CPU, battery, background throttling, audio/vibration, screen-reader announcements, installed-PWA update/startup and physical offline behavior were not measured. Desktop viewport checks and simulated worker tests do not establish those results. No UI polish or further batch was performed.
