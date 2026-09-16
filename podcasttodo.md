# Podcast Integration TODO

**Decision:** Add — strong fit.  
**Status:** ✅ Independent FaithHub podcast experience deployed from this repository.  
**Topic bank:** Bible, theology, prayer, spiritual formation, Christian living, Sabbath/rest, family faith.

## Completed
- [x] Curate 25 thoughtful Spotify episodes across Scripture, prayer, formation, Sabbath, family and theology.
- [x] Keep the main FaithHub **🎧 Podcasts** button native to this repository.
- [x] Build a self-contained podcast player in `podcasts.html` with direct Spotify embeds.
- [x] Add **🎲 Different podcast** and per-episode **▶ Play here** controls.
- [x] Persist the last selected episode locally and avoid immediate repeats for random selection.
- [x] Keep Spotify deep links available without assuming autoplay.
- [x] Keep episode metadata and tags inside FaithHub rather than loading a shared JoshHub catalogue.
- [x] Keep the experience visually simple and separate from quiet prayer/reflection screens.

## Independence rule
FaithHub does **not** require JoshHub, `podcast-launcher-v3.js`, `podcast-dock-universal.js`, or a remote podcast JSON file for its podcast experience. If another app's podcast implementation fails, FaithHub remains unaffected.

## Future
- [ ] Add lightweight browser-level automated tests for player selection and persistence.
- [ ] Review/refresh episode curation periodically.
