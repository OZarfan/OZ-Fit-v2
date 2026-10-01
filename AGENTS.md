# Local Oz Fit v2 — development instructions

Updated: 2026-09-30. Applies only to `oz-fit-v2/`. Read [PRODUCT.md](PRODUCT.md), [DESIGN.md](DESIGN.md), [README.md](README.md), and [Oz-Fit-v2-Changes.md](Oz-Fit-v2-Changes.md).

## App and data boundary

This is a generic offline local application with multiple local profiles. It is not the hosted account service or a private personal app. Never embed real personal exports, health MD files, membership data or signing material here. Tests use synthetic fixtures.

Each app keeps its own records. Do not share a writable origin/store with sibling apps or auto-import sibling exports. Two apps using `oz-fit-export/1` do not necessarily implement compatible bundle schemas. There is no shared backend or synchronization layer.

Preserve `oz-fit-html-state-v1`, its revision envelope, profile identities, original set IDs and the pre-migration backup. Renaming keys or file locations is not a harmless cleanup: it can hide existing saved records. Do not silently reset unreadable or future-version data.

## Architecture

| Source | Responsibility |
|---|---|
| `entry.tsx` | Browser boot, storage-availability check, UUID fallback |
| `app/oz-fit.tsx` | Four tabs, session logging, swaps, import/export, foreground alerts |
| `app/onboarding.tsx` | Intake, profile edits, schedule and injury inputs |
| `app/progress.tsx`, `app/nutrition.tsx` | Progress calculations/views and food UI |
| `app/gym.tsx`, `app/tools.tsx` | Gym profiles, versioned gym files, plates, prescribed rehab, share image |
| `app/reports.tsx`, `app/body.tsx` | Manual report entry/image preview and anatomy controls |
| `lib/fitness.ts` | Schemas, migrations, eligibility, planning, progression, plates |
| `lib/legacy.ts`, `lib/extra.ts` | Stable exercise IDs and expanded authoritative catalog |
| `lib/meals.ts` | Approximate food composition and sample-menu arithmetic |
| `local-state.ts` | Local replacement for state API semantics: GET/PUT/revision/409 |
| `asset.ts`, `assets.json`, `app.js` | Generated asset resolver, inlined assets, browser bundle |
| `base.css`, `app.css`, `components/ui/` | Compiled baseline CSS, current overrides and primitives |
| `build.mjs` | Produces standalone HTML and separate PWA files |
| `public/` | Own exercise photos, logo, licenses, manifest, service worker, catalog audit |

React/TypeScript bundled by esbuild. Runtime is self-contained and rule-based: no API keys, accounts, tracking, remote fonts or network AI. `localState()` ignores its URL argument; `/api/state`-style calls here are local, not a request to the hosted service.

Build output includes all code and pictures in `dist/Oz-Fit-v2.html`; `dist/pwa/` adds manifest, worker and icons. HTML opened through `file://` cannot provide the same install/service-worker behavior as the PWA on an appropriate secure origin.

## Persisted contracts

- Storage envelope: `{data: Account, revision: number}` under `oz-fit-html-state-v1`.
- Account: `{profiles: Bundle[], activeId, schemaVersion: 2}`. Bundle: `{profile,sessions,reports,rehabLogs}`.
- `migrate()` clones/parses data, rejects future account schema versions, derives availability/session count from old days and creates schedule history from the migration date. Never invent earlier adherence.
- Raw pre-v2 envelope: `oz-fit-html-state-v1-pre-v2`, created only if absent. Preserve it. Language uses `oz-language`; `oz-test` is a temporary storage probe.
- JSON backup: `schemaVersion:'oz-fit-export/1'`, `appVersion:'2.0.0'`, one active profile bundle. Back up each profile separately.
- Gym exchange: `gym-equipment/1`. AI intake draft: `fitness-profile-draft/1`, reviewed before acceptance. These are distinct from full workout backups.
- `set.rir` remains numeric, including historical zero. Quick effort buttons are representative numeric choices, not a rewrite of prior RIR.
- Gym and goal snapshots, pain values, swaps and completed rehab snapshots retain their original meaning. Unknown historical exercise IDs alone must not erase history.
- Reports store entered/confirmed values and text; local image preview does not establish that image bytes are saved or that OCR exists.

## Rules to preserve

1. Apply equipment, exact-gym and injury filters to original selection and alternatives. Preferred exercises cannot override restrictions.
2. Active areas exclude tagged movements; improving areas require review and limited eligible forms. Area tags are approximate and not medical clearance. Acute-symptom blocking remains.
3. Keep `injuryCardioMap` editable and disabled pending qualified review; retain the source comment `MUST be reviewed by a qualified physiotherapist before release`.
4. Never generate or reinterpret prescribed rehab. Preserve legacy free text separately from structured prescriptions; record the prescription snapshot actually followed.
5. If no movement or alternative qualifies, show a reason and next action/move-to-end. Do not force a fake equivalent to pass coverage.
6. Keep completed sets intact when swapping. Preserve gym/exercise identity and use the alternative's own previous load only as a hint.
7. Keep availability separate from desired session count; primary and secondary goals have different roles. Do not auto-escalate stage or load by elapsed calendar time.
8. Keep nutrition optional, estimates labeled, allergy review visible, adult minimum and BMI disclaimer intact. No supplement or treatment prescriptions.
9. Preserve AR/EN, RTL, correct photo attribution, reduced motion, raw export, corruption protection and 409 handling.

## Commands and portability

Run from this directory with Node 22+ and npm:

```sh
npm install
npm run typecheck
npm run build
npm test
npm run test:dom
npm run test:pwa
```

Dependencies are pinned in `package.json`, but no lockfile is supplied. `make-extra.py` is an intermediate generator, not part of the required build. Do not regenerate reviewed catalog entries blindly.

`OZ_ESBUILD` can point to an installed esbuild module; `OZ_OUTPUT` selects output. DOM tests accept `OZ_JSDOM` and `OZ_HTML`. Use these overrides when an isolated environment stores tools/outputs elsewhere; do not borrow a sibling's user data. Build writes generated `assets.json`, `asset.ts`, `app.js` and output files. Tests write result artifacts. Avoid running them in a documentation-only pass merely to refresh timestamps.

## Evidence and continuation

Stored evidence: `tests/results.json` has 14 passes and one partial coverage result; `tests/dom-results.json` has 12 passes; `tests/pwa-results.json` has 3 simulated-worker passes. Prior review reports successful typecheck/build. None of these establishes real phone layout, installability, offline startup or notification delivery. No application tests were rerun in this documentation pass.

The preserved specification is [docs/Feedback-Requirements.md](docs/Feedback-Requirements.md); the later review is [docs/Review-and-Vision-2026-09-29.md](docs/Review-and-Vision-2026-09-29.md). Product status below supersedes any earlier “not started” label in historical snapshots. Current source and dated evidence take precedence over promises in a roadmap.

Before the next release, address known state defects, verify migrations/swap behavior with synthetic fixtures, then perform actual browser and PWA checks. Keep a task-number changelog and explicitly report incomplete acceptance criteria. Do not claim that shared conceptual ancestry makes another app's fixes available here.
