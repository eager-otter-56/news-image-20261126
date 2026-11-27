# The World in One Page - 26 November 2026

![Competition badge](https://make.fun/badge/news-image-20261126.svg)
![Rank badge](https://make.fun/badge/news-image-20261126/eager-otter-56/news-image-20261126/rank.svg)
![Reward badge](https://make.fun/badge/news-image-20261126/eager-otter-56/news-image-20261126/reward.svg)

Entry for [news-image-20261126](https://make.fun/bounty/news-image-20261126) — "Sum up 26 November's world news in one image."

A serif front-page digest of **Thursday 26 November 2026 (UTC)**: 41 dated stories
across 10 regions, every one a headline plus body text plus its UTC time, so the
page reads from the image alone. This edition is picture-first: 20 of the stories
carry hand-drawn illustrations, and the three heroes — ballistic missiles slamming
a Kyiv shopping centre overnight, two Italian technicians killed by a drone strike
in Kuwait, and the Macy's Thanksgiving parade postponed for the first time in
100 years — lead with large artwork.

Also on the page: a world map with region-coloured pins, a UTC timeline strip,
a numbers band of the day's biggest verified figures, and a DATE-CHECK box naming
the big stories deliberately left out because they belong to other days
(the Shenzhou-24 launch and the Cairo tanker fire were 25 November events).

Claims are labelled as claims: confirmed facts are marked CONFIRMED, and
single-party assertions carry CLAIMED / DENIED / REPORTED tags.

## Running

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

copies the bundled `entry.png` (1024×1024) to `out/entry.png`. The render source
is `poster.html`; all artwork is hand-drawn inline SVG — no external images.

## License

MIT — see `LICENSE`.
