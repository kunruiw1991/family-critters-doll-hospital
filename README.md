# Little Hugs · Family Critter Care

A cozy, touch-friendly doll repair game starring LunaBat, SunnyFox and PoppyDash.

**Play:** https://kunruiw1991.github.io/family-critters-doll-hospital/

## Play
Choose a family friend, wash five muddy spots, brush five tangles, stitch a patch in order, return the signature charm, pick a decoration, and give a big hug. Repaired dolls and reward stickers are saved on this device. Each character has three rotating adventure themes.

- Mouse, touch, and keyboard controls; large controls and generous hit areas.
- English / Chinese interface, optional spoken instructions, synthesized gentle sounds.
- No countdown, failure penalty, account, ads, purchases, or analytics.
- Generated 3D-style plush artwork; the game uses illustrated sprites, not rotatable 3D meshes.
- If browser storage is unavailable, play still works; the shelf lasts for the current session.

## Run locally
Use any static server, for example `python3 -m http.server 8000`, then open http://localhost:8000.
No build system or package installation is required.

## Files
- `index.html`: accessible page and dialogs
- `style.css`: responsive studio layout and animation
- `game.js`: interactions, audio, translations and collection
- `assets/dolls.webp`: original generated family doll artwork
- `docs/source-review.md`: source repository review and design choices

Art references come from the owner's `google-family-day-critters` repository. The game is a personal family project; no third-party franchise license is implied. Google Fonts is optional and has local font fallbacks. No gameplay data leaves the browser.
