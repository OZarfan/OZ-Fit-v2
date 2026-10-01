# Local Oz Fit v2 — product

Updated: 2026-09-30. Documentation only; no functional changes in this pass. [Development](AGENTS.md) · [Design](DESIGN.md) · [Detailed task changelog](Oz-Fit-v2-Changes.md).

## Purpose and audience

An offline gym planner and fast workout logger for adults, with Egyptian Arabic/English and RTL/LTR. It supports different local profiles without preloading a real person's data. Profiles are organizational containers, not password-protected accounts.

The core experience is: know today's work, see a trustworthy exercise reference, record a set with little effort, take a rest, and understand progress. It is a transparent rules application, not a connected AI coach or an injury treatment service.

Standalone HTML and a separate PWA package are two delivery forms of this app. Keeping a single downloadable HTML does not make it an installable PWA from `file://`. A hosted PWA origin needs its own data boundary, separate from other applications.

## Current user flows

1. **Intake:** review an optional AI draft or enter data; set primary/secondary goals, experience, availability, session count/time, equipment, health areas and optional food preferences. Under-18 users receive an explanation; the minimum remains 18.
2. **Plan review:** inspect the recommended split and actual-input reason; optionally choose another split; inspect days, goals, warnings and missing patterns.
3. **Today:** choose a day, see muscles/blocks and injury guidance, then start or continue. Unavailable movement options lead to an explanation, not an invented safe plan.
4. **Log:** open exercise, see reference poses/cues and load convention, reuse prior weight/reps, choose effort, save set, rest, add 30 seconds or end rest.
5. **Machine busy:** replace remaining work with a qualifying same-group/same-pattern exercise, retain past sets, review alternative load, swap back or move to end.
6. **Finish:** notes and optional area pain, saved session, optional image share. Share name is off by default.
7. **Progress:** inspect exercise trends, PRs, weekly primary-muscle hard sets, consistency and cautious load/plateau suggestions.
8. **Profile:** manage gyms, equipment and plates, exercise preferences, report values, optional nutrition, clinician prescriptions and backup/import.
9. **Return after absence:** optional lighter comeback after a missed scheduled session; no guilt backlog. Full rolling rescheduling is still incomplete.

## Decisions that must survive future sessions

| Decision | Meaning |
|---|---|
| Independent local app | No real personal seed, login requirement, backend sync or hidden tracking |
| Keep existing storage key | Migrate with defaults and preserve raw data; never reset corruption/future schemas |
| Separate availability and frequency | Five available weekdays does not mean five sessions |
| Multiple goals | One primary goal governs conflicting dose/calorie choices; secondary mobility/cardio goals add eligible blocks |
| Injury-aware, not therapeutic | Conservative programming plus exclusions; urgent symptoms still block; tags do not guarantee safety |
| Honest no-alternative state | Restrictions and actual equipment win over a requested universal alternative guarantee |
| Prescriptions belong to clinician/user | Schedule/log as entered; do not generate or adjust rehab dose |
| No automatic escalation | Stage and load changes are reviewable; historical effort is preserved |
| Honest measurements | Dated body values, BMI limitation, estimated 1RM restrictions, no invented historical adherence |
| Image correctness | Two matching reference photos; a band-assisted pull-up is not an assisted-pull-up machine |
| Local privacy | Separate profiles are visible to anyone with the same browser access; export has no encryption layer |

## Requirements and implementation status

The full historical specification contains F01–F04 and 74 numbered P/Q subtasks. Preserve task identifiers in changes. This summary is not a claim that every requested acceptance test passed.

| Group | Current implementation / gap |
|---|---|
| F01–F04 | Goals affect rules; conservative health route; availability versus frequency; primary/secondary goals |
| P1 health | Regional tags/filtering and warnings; urgent symptoms remain blocked; no clinically certified “safe” plan |
| P2 library | 108 exercise records, 216 resized WebP reference photos, AR/EN/alias search; alternative coverage incomplete |
| P3 planning | Cardio/mobility blocks for eligible goals, five splits including Arnold, week-start setting, time limits and conservative dose; stages 0/1 currently share two-set dose |
| P4 progress | SVG exercise/body trends, PRs, primary-muscle hard sets, load advice, plateau/consistency; priority chiefly sorts exercises, not full weekly volume allocation |
| P5 logging | Effort shortcuts, retained inputs, foreground timer/sound, weekly consistency, backup prompt; no OS notification delivery |
| P6 nutrition | Egyptian examples, percent calories, unspecified-sex fallback, vegetarian/allergen checks and actual sample totals |
| P7 profile | Preferred/disliked exercises, first-load guidance, adult explanation; report image preview/manual verification, no local OCR/image archive |
| P8 packaging | ~1.85 MB prior HTML report; self-contained HTML plus PWA shell; local revision shim; corrected AI intake reference |
| P9 visual QA | Required screen/width/device evidence is not complete |
| Q1 injuries | Active/improving/recovered, dated/history fields, pain and prescribed rehab; automatic injury cardio map deliberately disabled |
| Q2 machine busy | One-tap eligible swap/undo and move-to-end; preserves actual logged variants |
| Q3 my gym | Multiple gyms, one active, categories/exact exercise availability, versioned gym JSON; no B2B mode |
| Q4 reasons | Actual-input plan/split explanation; not a separate explanation for every exercise |
| Q5 sharing | Local Canvas PNG, Web Share if available/download fallback, AR/EN/name opt-in; visual rendering unverified |
| Q6 comeback | Opt-in reduced session and no backlog; complete forward rescheduling remains partial |
| Q7 plates | Kg totals and inverse solver, finite gym inventory, no-over-target solution when possible; no machine-resistance conversion |

Original Batch 2 dependency: P1/P2 establish tags before Q work. Original order: Q2 → Q1 → Q3 → Q4 → Q6 → Q7 → Q5. Later review priority: fix persistence/behavior → preview UX → implement design → separately scope notification platform integration → improve personalization. These are app-specific plans, not authorization to edit siblings.

## Rule details and data meaning

- Equipment: machine, cable, dumbbell, barbell, cardio, bodyweight, kettlebell, band. Exact gym mode constrains eligible equipment exercises; bodyweight is treated specially in source.
- Active injury excludes matching loaded areas. Improving permits tagged machine/cable movements only after review. Recovered removes that area's restriction; other restrictions still apply.
- `safeMode` includes non-`none` health or any non-recovered injury. The editable injury-cardio candidate map remains unreviewed and unused for automatic suggestions.
- Normal plans start at two sets; stage 2 permits three, conservative mode one. Strength compounds receive lower reps/longer rest; endurance adjusts reps/rest. The first two ordinary stages are currently not distinct in set dose.
- Quick effort stores numeric values; the current three-button mapping is 3 / 2 / 0. A band such as “1–2 left” is represented by one number. Existing RIR is not reclassified.
- Hard-set volume counts primary group with `rir <= 3`, excluding cardio/mobility. It does not allocate indirect muscle stimulus or establish an individualized optimal volume.
- Estimated 1RM is restricted to eligible loaded rep exercises, excludes bodyweight/assistance/time modes, and uses up to 12 reps. It is not a tested maximum.
- Load advice checks comparable history, gym/goal/rep targets and recorded pain, uses small increments and does not auto-apply. Missing pain is not evidence of clinical clearance.
- Nutrition currently applies maintenance ×0.85 for loss, ×1.10 for muscle/weight gain, otherwise maintenance, with Mifflin–St Jeor and factors 1.4/1.6/1.8. Unspecified sex uses the equation midpoint and a rougher-estimate label. Medical/unknown health and underweight fat-loss remain restricted. These are implemented estimates, not validated individual prescriptions.

## Data inventory

| Item | Purpose / protection |
|---|---|
| `lib/fitness.ts` | Profile/area/rehab/gym/set/session/report/account contracts and migration |
| `lib/legacy.ts`, `lib/extra.ts` | App-owned catalog; preserve identifiers and reviewed tags |
| `lib/meals.ts` | Approximate foods/allergens and example composition |
| `public/exercise-manifest.json`, `public/exercise-audit.json` | Asset selection/provenance evidence |
| `lib/body-polygons.json`, public license files | Anatomy assets and attribution |
| `public/Fitness-V2-AI-Intake-Prompt.md` | Exact intake format and manual-review instructions |
| `tests/fixture.json` | Synthetic four-session test account; never replace with real personal logs |
| `tests/*results.json` | Historical automated evidence, not user workout data |
| `assets.json`, `app.js` | Generated presentation bundles, not state databases |
| Browser localStorage | App account/revision envelope and pre-migration backup; independent per origin |

New/default fields include goals, availableDays/session count/week start, planHistory, injuries/history/review, prescribedRehab, rehabLogs, gym definitions/active ID, preferences, increments, reminder/backup/comeback/share flags, food review/allergens, gym/goal snapshots, pain and optional blocks. Exact defaults and field types are in `lib/fitness.ts`; the detailed changelog has the migration table.

## Known problems, limitations and acceptance evidence

| Item | Status |
|---|---|
| No guaranteed alternative for every equipment combination | 574 slots without an alternative across 255 tested combinations; explicit fallback retained |
| Rest extension persistence | +30s/end-rest are component state; reload reconstructs original rest from last set and can lose the extension/dismissal |
| Profile save/day selection | Save selects `profile.days[0]` |
| Injury uncheck/history | Area selection can remove the record; status transition and deletion need separation |
| Stage 0 versus 1 | Same ordinary two-set dose despite distinct stage labels |
| Notifications | In-page notice and foreground sound; no Notification API/push/native scheduling implementation |
| Theme | No wired light/dark/system selector in this app |
| Injury cardio | Mapping needs qualified review; knee optional automatic cardio acceptance not delivered |
| Clinical/food assumptions | Tags, menu portions and allergy coverage are not clinically validated |
| PWA/offline | Node cache simulation passed; actual install, first-cache completion, airplane mode and upgrade persistence untested |
| Mobile/accessibility/share visuals | 360/390/430, thumb reach, screen reader, real audio and PNG RTL appearance still unverified |

Recorded automated results: 14 logic passes plus one partial alternative-coverage result; 12 DOM passes; 3 mocked service-worker passes. Four-session progress, migration, repeated sets and swap/undo have automated evidence. A real-device screenshot/test pack has not been produced. Do not turn these partial results into “all acceptance tests passed.”

The previous light/dark preview request covered Today, logging/rest and session summary, plus functional save/swap/completion motion. It remains future UI work for this app. Native notifications would require a separately scoped Android implementation; wrapping HTML alone would not implement them.
