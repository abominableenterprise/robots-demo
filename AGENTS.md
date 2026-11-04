# Robot Roll Call

A tiny static web toy for live change requests with The Robots.

## Conventions

- No build step and no dependencies. Opening `index.html` directly must work.
- Keep files small (well under 300 lines) and changes easy to understand.
- Keep robot data in `robots.js`; expose it through `globalThis.robotRollCall`
  so the same script works in a browser from disk and in Node.js tests.
- Use semantic HTML, visible keyboard focus, and respect reduced motion.
- Support light and dark appearance through `prefers-color-scheme`.
- Run `npm test` before committing. Check visible changes in a browser.
- Public demo: no personal names, private project names, credentials, or internal addresses.
  Refer to the platform only as The Robots.

## Review and merge

- Small, modular code: one job per file; no source file over ~800 lines / 50 KB; new features in new modules.
- Small PRs: one area, about 500 changed lines or fewer (tests and pure moves excluded). Never widen a PR during review. Push after every commit. Bug fixes come with a failing-first test.
- Reviewer: Check Norris (`checknorrisbot[bot]`, status `checknorris`, green only at 5/5). It reviews ~10 quiet minutes after the last push (never push empty commits to trigger it). Commands: `@checknorrisbot review`, `@checknorrisbot re-review`, `@checknorrisbot rescore`.
- Findings (reply in the thread, mention first, one reply per thread):
  - real P0/P1: fix with a test, `@checknorrisbot Fixed in <sha> (<what changed>)`;
  - false positive: explain citing code;
  - minor P2: fix if small, else `@checknorrisbot Deferred to #N: <why minor>` into one `follow-up` issue per PR (`Follow-ups from #<PR>: <title>`). Answer every P2 before pushing again.
  - Resolve each thread after its verdict.
- Merge without asking when, on the current head commit, `checknorris` is green, every review thread is resolved and all checks are green: `gh pr merge <n> --merge --match-head-commit <sha>`. Never force-push shared branches, never `--delete-branch`.

## The Robots automation (ignore unless you are running inside a The Robots task)

hub-merge: on
hub-merge-requires: checknorris
