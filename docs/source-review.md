# Source review · September 24, 2026

Reviewed the repository trees, README files where present, and main HTML source of all four projects.

| Repository | Findings | Applied here |
|---|---|---|
| google-family-day-critters | 81 KB single-page application combining family image composition and arcade gameplay; pointer input and synthesized audio. Character references identify a golden lantern fox, quilted-wing moon-star bat, and striped-tail popcorn skunk. | Preserve all three family identities and pendant designs. Create softer new plush renders. Keep repair state separate from markup and style. |
| smiling-critters-assets | Image catalog and gallery with custom family portraits among franchise reference art. README headline, summary and table report different inventory totals (118 and 102). | Use the three verified custom portraits rather than relying on headline asset counts. Avoid importing unrelated franchise characters. |
| smiling-critters-lianliankan | Single HTML matching game with local icons, board presets, synthesized sounds and a runtime image-background flood-fill normalization step. | Reuse the static-hosting convenience and gentle synthesized audio concept. Ship a prepared transparent asset, avoiding runtime pixel processing. |
| critters-havoc-in-heaven | Illustrated chapter reader with bilingual speech synthesis, keyboard navigation and service worker support. | Provide English/Chinese UI and optional spoken instructions. Preserve Moon-Star and Lantern visual identities. |

## Product choices
The repair experience has six sequential activities with distinct interactions, generous touch targets, keyboard-operable targets, no failure state, and no timer. All three dolls get three rotating scenario themes and slight cleaning-placement variation; these share the same core six-stage mechanic. Local collection history is bounded to 60 rewards per character. Audio failures and unavailable browser storage do not block play. Motion follows the reduced-motion preference.

## Reference limitation
The supplied YouTube page could not be fetched (online fetch throttled). Its exact mechanics and footage were not reviewed. This is an original family doll washing, mending and decorating game based on the requested general direction.

## Artwork
Generated with the built-in image-generation tool using the three verified source portraits as identity references: `101_SunnyFox_Lantern_Custom_Smiling_Critter.jpg`, `102_LunaBat_MoonStar_Custom_Smiling_Critter.jpg`, and `103_PoppyDash_Skunk_Studio_Portrait.jpg`. Prompt: three full-body, front-facing, plush 3D dolls on transparent background in equal columns; LunaBat left, SunnyFox center, PoppyDash right; preserve their colors, quilted wings, striped tail and signature pendants, with smaller embroidered smiles and soft rounded proportions suitable for young children.
