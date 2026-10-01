# Local Oz Fit v2 — current design and intended UX

Inspected: 2026-09-30. This file distinguishes current CSS/flows from proposed work. [Product](PRODUCT.md) · [Development](AGENTS.md).

## Identity and visual priorities

An Arabic-first mobile gym tool with white panels, a soft gray background, dark green typography and lime actions. Keep the supplied Oz Fit logo unchanged. Show the next useful action before secondary tools; the user may be tired, standing and using one hand.

Core order: today's work → one exercise → weight/reps/effort → saved set → rest → next work. Explanations, alternatives and plate tools should open when needed. Keep restrictions, storage errors and uncertain estimates visible without suggesting treatment or guilt.

## CSS ownership and current tokens

`base.css` is the checked-in compiled baseline; `app.css` is concatenated after it and overrides current application rules. `components/ui/` supplies button, checkbox, dialog, progress, radio and tab semantics. Do not assume rebuilding Tailwind from an unrelated app will reproduce this base.

| Role | Effective source value |
|---|---|
| Background | `#f5f6f7` from baseline |
| Main text | `#142319` override |
| Panel / popover | `#ffffff` baseline |
| Primary | `#c4f477` override |
| Primary foreground | `#17200c` baseline token; custom primary button styling may use `#1d2a10` |
| Secondary | `#ebeee8` |
| Accent | `#e7f4d4` |
| Muted text | `#52604d` override |
| Border | `#d9e0d5` override |
| Destructive | `#b83232` baseline |
| Explicit focus outline | `#547d21`, 3px with 3px offset |
| PR toast | `#203b17` background, `#d5ff9e` text, `#c1ef76` border |

This app currently has no user-selectable light/dark/system theme. Utility dark selectors in compiled CSS are not a finished dark experience. The requested alternate theme must cover forms, charts, dialogs, warnings and photos as well as the background.

## Typography, spacing and geometry

- Body inherits system `Arial, Tahoma, sans-serif`, 16px/1.65. Inputs/selects/textareas are explicitly 16px. Labels/small/muted text are 14px.
- Onboarding H1: `clamp(2rem, 6vw, 3rem)`; mobile page H1: 2.2rem. Keep Arabic line height and number readability.
- Workspace: maximum 1160px, desktop padding 32px 28px 110px; narrow override 20px 16px 110px.
- Common gaps 4/8/12/14/16/18/20/24/25/28/32px. Panel radius generally 20px, with smaller chip/button radii from baseline. This is an observed scale, not a single rigorously normalized token system.
- Default buttons minimum 44px; main navigation tabs minimum 70px wide ×56px high; logging CTA minimum 56px high. Validate effective sizes after actual wrapping.

## Components

| Component | Current behavior and design constraint |
|---|---|
| Four-tab shell | Today, Plan, Progress, Profile; retained across AR/EN |
| Week strip | Seven days ordered by chosen week start; selected/train/rest states |
| Safety banner | Shows review/stop guidance; no success-colored “medical clearance” |
| Muscle navigation | Text/icon/map navigation; do not require accurate taps on small anatomy regions |
| Exercise list | Photos, concise plan data, machine-busy action and detail dialog |
| Logging dialog | Max 900px, width `calc(100vw - 28px)`, 92dvh and internal scrolling; two desktop columns |
| Logging controls | Weight and reps, three numeric effort choices, prominent save action; preserve actual RIR/data semantics |
| Rest UI | Clear time, +30s/end, floating re-open timer when dialog closes |
| Progress | Inline SVG charts, labels/units, primary-muscle volume and suggestions |
| Gym/catalog | Image/name/alias search and explicit selected state; distinguish gym categories from exact exercise availability |
| Nutrition | Optional inputs, review gate, approximate meal totals and mismatch explanation |
| Rehab | Separate clinician-prescribed block with unchanged entered dose |
| Share | App-generated PNG; AR/EN direction, name opt-in; not yet visually verified |

## Responsive rules

Inherited baseline has 950px and 620px breakpoints. `app.css` adds 640px overrides. Keep all three in view when debugging 620–640px behavior; changing one rule may not alter inherited navigation.

At 640px or below, exercise/form layouts become one column, split/catalog/stats remain compact grids, week buttons have minimum 72px height, and dialog is up to 94dvh with 18px padding. Logging layout deliberately orders photo, pose switch, inputs, then longer guidance/alternatives; photo height is capped at 165px. The baseline bottom navigation activates at 620px. Sticky onboarding actions need keyboard/viewport checks.

Arabic uses RTL and English LTR. Use logical properties, wrap long text and keep units/values comprehensible. Do not solve overflow by hiding content that contains essential instructions or error state.

## Motion and UX work still pending

Existing PR feedback, progress elements and UI transitions must respect `prefers-reduced-motion`; current override disables animations/transitions. Never animate exercise stills as if they demonstrate verified technique.

Proposed, not implemented as a new approved design:

1. A small save-confirmed check/progress transition.
2. A short, clear exercise/swap transition preserving context and focus.
3. A completion ring/quiet celebration after actual session completion.

Requested previews: Today; logging/rest; session summary — each in light and dark. Profile should expose manageable sections for personal inputs, gym, restrictions/prescriptions and settings/backups. Weekly review and meaningful muscle-priority allocation remain product proposals, not finished UI claims.

## Required visual verification

Capture real rendered onboarding, Today, logging, Progress and nutrition at 360/390/430px RTL, plus English/desktop spot checks. Check overflow, contrast, 44px targets, long text, keyboard focus, screen reader, one-handed use, keyboard-open layout, bottom bar/timer overlap, reduced motion and share-card direction. Use synthetic data belonging only to this app. No real browser screenshots or phone QA were produced by this documentation pass; jsdom results do not satisfy this gate.
