# Styling

Components use compiled StyleX styles from `app/ui.stylex.js`. The semantic class markers let the existing `className` and CVA variant APIs compose these styles through `cn`. No Tailwind utility parser runs in the app.

`app/reset.css` preserves the original theme, preflight, property defaults, keyframes, and global selectors. Its Tailwind-derived declarations retain their MIT license in `app/reset.LICENSE`. Keep these defaults unchanged when editing component styles.

Compound states, responsive rules, and descendant selectors live in `app/ui-states.css`. Their cascade layer follows component styles but precedes the existing unlayered global rules. Zero-specificity sibling spacing stays in the component layer so children can still override their own margins. The button SVG and focus exclusions preserve the former class-merging behavior.

A padding override clears inherited logical padding, and a font-size override clears the previous `--tw-leading` declaration. Preserve those null entries when composing styles.

Validation covered the three public routes at 390, 639, 640, 767, 768, and 1280 pixels; GPA semester/cycle/stream selection, grades and honors; prediction results; and the disclaimer and methodology. A temporary fixture exercised all 48 button variant/size combinations in light and dark modes, including focus, invalid, disabled, and hover states. The fixture is not part of the app.

The unchanged Recharts component can retain slightly different solid stroke dash lengths after a resize animation. Final curve geometry and chart screenshots matched. The comparison did not call the database submission endpoint: prediction fixtures stubbed only that logging request in the test browser. The production build requires `MONGODB_URL`; a loopback placeholder was used for the static-page build, not a production database.
