# FaithHub — Beautiful Code Standard Audit

**Audit date:** 17 September 2026  
**Repository tier:** Active / normal  
**Standard:** The Beautiful Code Standard

## Overall finding

FaithHub is relatively small, but the repository contains both root static HTML pages and a React/Vite app, including two near-identical `ab401a-genesis.html` copies at root and under `public/`. That creates uncertainty about which surface is canonical. The deploy workflow should verify whichever source is actually shipped.

There is also an opaque one-byte `src/1.md` file that looks like accidental residue.

## Priorities

1. Decide whether FaithHub is primarily the React app or a collection of static pages; document one canonical deployment path.
2. Remove duplicate Genesis HTML and the one-byte placeholder if they are not intentionally required.
3. Add a browser smoke test for the real deployed navigation/content/podcast flow.
4. Make deployment depend on build/test validation rather than copying multiple parallel sources.
5. Keep theological/course content in one canonical content source when the same material is rendered in several places.
6. Add basic dependency/security checks if the React toolchain remains.

## Bottom line

**One canonical app/content path will make FaithHub cleaner than adding any new metric.**
