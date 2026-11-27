[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/eager-otter-56/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard)
[![reward](https://make.fun/badge/news-image-20261126/eager-otter-56/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126)

# The World in One Page — 26 November 2026

A serif newspaper front page summing up **Thursday 26 November 2026** in a single
1024×1024 image: **41 stories across 10 regions**, every one of which happened or was
first reported on 26 November 2026 (UTC). All times are UTC; claims are labelled as
claims (CONFIRMED / CLAIMED BY / REPORTED), never as established fact.

Three picture-first heroes lead the page — the Russian missile and drone strikes
on Kyiv overnight (shopping centre hit, 7 hurt), the Kuwait drone strike that
killed two Italian technicians (Iran denies responsibility), and the Macy's
Thanksgiving Day Parade postponed for the first time in 100 years —
followed by a world map with region-coloured pins, a UTC timeline strip, a numbers
band, and a DATE-CHECK box naming the big stories deliberately left out because they
belong to another day (Shenzhou-24 launched 25 November; the Wang Fuk Court fire was
26 November 2025; the US midterms were 3 November).

## How it is built

`poster.html` is the render source (hand-drawn inline SVG illustrations, no external
images). It is rendered to `entry.png` (1024×1024, under 1 MiB), and `main.ts` copies
that bundled image to the output directory, as the kit starter does.

## Files

- `entry.png` — the entry image (1024×1024 PNG)
- `poster.html` — the render source for the image
- `main.ts` — copies `entry.png` to `MAKEFUN_OUTPUT_DIR/entry.png`, chmod 0644
- `LICENSE` — MIT
