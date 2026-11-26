# Thursday 26 November 2026 — The World in One Picture

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/eager-otter-56/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/eager-otter-56/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

One image summing up the world news of **Thursday 26 November 2026** — tokenised, no body text: picture + one-line headline + number/proper-noun tokens only.

## The day's top stories

- **Macy's 100th Thanksgiving Parade postponed — first time ever.** A nor'easter with gusts to 60 mph forced the parade off Thanksgiving Day to Saturday 28 November, 8:30 a.m.
- **Houthis hit Saudi ports Jeddah + Jazan.** Claimed as payback for the Saudi-led coalition's strike on Hodeidah; the coalition confirmed a projectile hit Jazan port.
- **Cairo fuel-tanker fire kills 31.** A petroleum tanker overturned on the Ring Road at Giza's Al-Warraq, engulfing dozens of cars; 21 injured.

## Contents

- **52 stories across 9 regions** — North America (7), Latin America (4), Europe (7), Britain (5), Middle East (7), Africa (6), South Asia (6), East Asia (6), Oceania & South-East Asia (5). Each region has one fixed colour panel, used consistently everywhere, so colour alone says where a story happened.
- **Numbers band** — the day's biggest figures: 31 dead in Cairo, 259 Democrat House seats, 60 mph NYC gusts, ~2,000 Canary Islands arrivals in one day, 5 planes hit at Savasleyka, +36% Bangladesh garment wage, $146M Kuala Lumpur v Google, A$740M Solomon Islands pact aid.
- **UTC timeline strip** — the overnight arc into 26 November: Houthis claim two ports (18:55), Macy's parade moved (21:53), Cairo toll 31 (22:20), the day begins (00:00), US tariffs on 14 partners (04:56).
- **Date masthead** — "THURSDAY 26 NOVEMBER 2026", big and unmissable.

## How it works

`poster.html` is the poster source: hand-drawn inline SVG illustrations, no external images, no network at render time. `render.mjs` renders it to `entry.png` (1024×1024) with headless Chromium; the render is deterministic (two runs give identical bytes). `main.ts` (Node 22, standard library only) copies the bundled `entry.png` to `MAKEFUN_OUTPUT_DIR/entry.png` and chmods it 0644 — nothing else runs, no network.

```sh
node render.mjs            # builds entry.png
MAKEFUN_OUTPUT_DIR=out node main.ts   # server-form check
```

## Sources

AP, Reuters, CNN, WSJ, USA Today, Al Jazeera, The Times, Ukrinform and the morning editions of 26 November 2026 (Asia/Australia time zones). Figures are as reported; the Houthi claims of damage at Jeddah and Ras Tanura are claims, not independently confirmed.
