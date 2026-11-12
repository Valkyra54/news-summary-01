# news-summary-01

A summary of the world's news of Wednesday 11 November 2026, in English,
written from the day's reporting (see `summary.txt`).

`main.ts` (Node 22, standard library only) copies `summary.txt` to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check `out/entry.txt`.
