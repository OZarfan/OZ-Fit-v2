# Batch 4 — color roles and verification

Completed 2026-10-04. Baseline: `dce251c` (completed Batch 3). Scope is token/color-contract cleanup with the current single-theme appearance preserved.

## Inventory and counting method

Counts are occurrences in declaration values, not unique swatches. “Pigment” means hex, RGB/HSL/OKLCH or named black/white colors, including `text-white` and `bg-black/50` utilities in `components/ui/`. CSS transparency keywords are reported separately because they describe a transparent surface rather than a new palette color. Property names such as `white-space` and token identifiers such as `--color-black` are not literals. Compiled `base.css`, generated bundles, images, SVG artwork and other application files are excluded from these source counts.

| Scope | Before | After |
|---|---:|---:|
| Pigment literals used directly in `app.css` component rules | 46 | 5 |
| Pigment utilities in shared UI source | 2 | 0 |
| **Direct pigment uses outside token definitions** | **48** | **5** |
| Pigment values owned by token definitions in `app.css` | 4 | 49 |
| **Total pigment occurrences, including definitions** | **52** | **54** |
| CSS `transparent` keywords, including token definitions | 2 | 6 |

The total declaration count rises by two because existing baseline button, form, error and navigation colors now have editable semantic ownership in `app.css`; it does not represent two new visible colors. The initial broad text search also matched `white-space`; the final inventory parses declaration values and excludes token identifiers. Repeated white surfaces (eight direct `white`/`#fff` backgrounds plus the return timer's white foreground), card borders and dividers now reference shared roles. No baseline-generated CSS was edited or regenerated from an unrelated Tailwind setup.

## Existing roles reused

`--background`, `--foreground`, `--card`, `--primary`, `--primary-foreground`, `--secondary`, `--secondary-foreground`, `--muted`, `--muted-foreground`, `--accent`, `--accent-foreground`, `--destructive`, `--border`, `--input` and `--ring` retain their existing values/meaning. The overlay reuses the compiled neutral `--color-black` through an application semantic alias.

## Added roles

All concrete color values below are existing rendered values. Distinct greens remain distinct to avoid palette drift.

| Purpose | New roles |
|---|---|
| Focus and links | `--focus`, `--link-foreground` |
| Warning surface | `--warning`, `--warning-border`, `--warning-foreground` |
| Dark workout panel | `--session-surface`, `--session-foreground`, `--session-track` |
| Cards and successful completion | `--card-border`, `--success-border`, `--success-surface` |
| Exercise secondary text | `--exercise-muted` |
| Dividers | `--divider`, `--divider-subtle`, `--inset-border`, `--injury-divider`, `--table-divider` |
| Form controls | `--control-border`, `--control-foreground` |
| Split choices | `--split-border`, `--split-selected`, `--split-selected-border` |
| Catalog choices | `--catalog-border`, `--catalog-selected`, `--catalog-selected-border` |
| Rest | `--rest-surface`, `--rest-return-surface` |
| Comeback guidance | `--comeback-surface`, `--comeback-border` |
| Primary actions | `--action-primary-foreground`, `--action-primary-hover` |
| Secondary/subtle actions | `--action-secondary-border`, `--action-subtle-foreground`, `--action-subtle-hover` |
| Selected chips/weekdays | `--chip-border`, `--selected-surface`, `--selected-foreground`, `--weekday-selected-surface` |
| Error/destructive | `--error-surface`, `--error-foreground`, `--error-border`, `--destructive-foreground` |
| Disabled treatment | `--disabled-opacity` preserves 0.45; no new disabled palette |
| Navigation | `--navigation-foreground`, `--navigation-active-foreground`, `--navigation-indicator`, `--navigation-mobile-active-foreground`, `--navigation-mobile-active-surface` |
| Dialog scrim | `--dialog-overlay` preserves the 50% black overlay |
| Transparent actions in dark panels | Scoped `--context-foreground` and `--context-link-foreground` |

There are 49 new root roles (48 color roles and one opacity role), plus two scoped context aliases. Values are defined at the beginning of `app.css`; color-only contracts follow existing layout/responsive rules.

## Shared contracts and intentional differences

- Custom primary/secondary actions, selected chips, selected weekdays, split/catalog states, form controls, panels and dialogs now declare their appropriate foreground/background pairing explicitly.
- Shared Button default/secondary variants already used paired tokens. Outline gets an explicit foreground. Ghost uses an explicit foreground for its current surface context and the existing accent pair on hover. Destructive gets `--destructive-foreground`. Link uses the existing focus green on light surfaces and the existing lime on dark panels.
- The shared link variant previously used pale lime on a transparent light surface. Its readable foreground and dark-panel ghost/subtle inheritance corrections are intentional compatibility fixes. They do not change the captured application views; the test-only component fixture exercises them directly.
- Dialog content keeps its existing page-background color, text, dimensions and close behavior. Its overlay has semantic ownership with the exact same computed `oklab(0 0 0 / 0.5)` color.
- The Finish session secondary action retains its already-verified `--secondary-foreground` on `--card`. It is not recolored to match custom secondary actions outside the dark panel.
- Existing `--primary-foreground` and the custom action foreground differ slightly. Form text, muted exercise text, split/catalog selection greens, warning and error colors also have deliberate existing differences. Combining these into one swatch would alter appearance, so they are retained as separate roles rather than merged by visual similarity.

## Intentional literals left

Five pigment literals remain in `app.css` component rules: PR-toast background `#203b17`, text `#d5ff9e`, border `#c1ef76`, its `#0003` shadow, and chart label fill `#43573a`. These are single-purpose celebration/chart values with no reusable shared role in this batch. Transparency remains explicit where buttons/inputs expose their host surface. Other compiled baseline one-offs, anatomy/chart artwork, share-image canvas colors, the logo and PWA branding are outside this targeted inventory and remain unchanged.

## Verification

- Typecheck and documented build pass.
- Four focused source-contract checks pass with `node tests/batch4-colors.cjs`: valid property names, preserved weekday non-wrapping, intentional-literal allowlist and declared token references. A source comparison additionally confirms all 336 original non-color declarations remain unchanged. This caught and corrected an over-broad initial `white` replacement in `white-space` before completion.
- Logic: 16 passes and the unchanged partial alternative-coverage result (574 gaps).
- DOM: all 102 checks pass, including every Batch 1, Batch 2, gym-selector and Batch 3 regression.
- PWA: all three simulated-worker checks pass. Only the cache version changed; activation/offline policy and stored-data schemas are unchanged.
- AR/EN at 360, 390, 430 and 1280px, height 800px: all eight browser cases pass. Today, local logging validation, active rest and Plan compare 3,160 element observations / 75,840 computed style and dimension values against the pre-edit build, with zero final differences. The run crossed midnight; the final comparison explicitly selects the same Saturday as the original baseline.
- Batch 3 rest controls and editable fields remain visible/uncovered, weekday labels remain intact with targets at least 44px, and shared dialog close controls remain 44×44px without title collisions.
- Contrast is unchanged: Finish session 13.24:1, eyebrow 6.18:1, exercise small text 5.83:1, field validation 5.48:1.
- The component fixture checks real shared Button variants and app actions on existing light/dark panels, checked and disabled controls, hover, keyboard focus and opening a dialog from a dark panel. Enabled text contrast is 4.85:1 or better; disabled opacity remains 0.45.
- Before/after and final-build English 390px screenshots are byte-identical. Arabic rest screenshots were visually inspected; the countdown remains live. Raw computed-style snapshots and five screenshots are retained under `.cache/batch4/`. Summary evidence is `tests/batch4-browser-results.json`.

The fixture can be opened for repeat browser checks with `node tests/batch4-components.mjs` (Node 22+, existing project dependencies); it listens only on `127.0.0.1:4185`. It does not import application state or enter the production bundle.

Limitations: desktop Chromium viewport emulation does not establish physical-phone touch/virtual-keyboard behavior, Safari behavior, screen-reader announcements, PWA installation or real offline startup. No theme switch, performance optimization or polish was added.
