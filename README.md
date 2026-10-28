# מסלולי מילים — Wordways

A Hebrew RTL English-learning maze adventure for grades 3–6. Browser-native Canvas 2D, HTML and CSS; no build step or dependencies. Desktop keyboard and tap navigation, mobile movement buttons, three worlds, 48 bilingual practice challenges, and independent local progress for each grade.

## Run locally

From this folder run `node serve.cjs`, then open [the game](http://127.0.0.1:4173/) or [the live development journal](http://127.0.0.1:4173/journal.html).

## Verify

Run `node verify.cjs`, `node verify-saves.cjs`, `node verify-render.cjs`, `node verify-win.cjs`, and `node verify-gates.cjs`.

These verify challenge completion, gate progression, replay, grade saves and rendering calls in a simulated DOM. Browser checks are recorded in the journal; these tests do not replace physical-device, human listening, or classroom testing.

## Assets and behavior

- `dist/` is the portable game. Serve it with any static web server.
- `lessons.js` provides four grade-specific practice sets, with optional Hebrew assistance. These are introductory practice sets, not a complete school curriculum.
- Original sound effects from the workspace are in `dist/audio/`. Listening tasks use the browser's English speech synthesis. An explicitly labeled transcript hint remains available if a voice cannot play.
- Progress is stored on this device in browser local storage; it is not synchronized between devices. Returning to a chapter starts at its entrance while retaining completed challenges.
- The visual comparison reference is [Monument Valley II](https://ustwogames.co.uk/our-games/monument-valley-2/). Its artwork is not used as game assets. The journal records unresolved quality gaps honestly.

The user approved a private online preview. Hosting configuration is prepared; the local game also works independently of hosting.

Private playable preview: https://wordways-english-adventure-tidha.quirkybox19.chatgpt.site

The final anonymous static-scene panel preferred this build 2–1. The accompanying critic and one panel judge still preferred the reference’s architectural richness. Full evidence and limitations are in dist/journal.html.

## Endless adventure

Select **הרפתקה חופשית** under **סוג המסע**. Rounds have no fixed ending. Grade-specific offline templates generate four bilingual tasks per round; seeded maze variations and content reproduce after reload. Campaign and endless progress are stored separately per grade. Words/templates may repeat; this is unlimited replay, not unlimited unique English content.

Run `node verify-endless.cjs` to check generation, map safety, endless progression, and mode-save isolation.
