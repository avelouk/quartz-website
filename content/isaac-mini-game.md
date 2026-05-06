---
title: Something of Isaac
tags:
  - project
  - done
---
*The Binding of Isaac* is one of my favorite games ever. With 500 hours of hours and a Dead God under my belt, I I saw this [Reddit thread](https://www.reddit.com/r/bindingofisaac/comments/1t12aqm/try_to_guess_the_item_with_the_least_amount_of/) where players guess items with the fewest hints possible, I thought it would make a fun little Wordle-style daily puzzle. A weekend later, here it is. (✪‿✪) 

**Play it:** [avelouk.com/something-of-isaac](https://avelouk.com/something-of-isaac/)

## How it works

- New puzzle every UTC day, the game reveals one hint. 
- You type a guess - search the item's name, its pickup quote, its effect, the pool it comes from, or even a snippet of the description. 
- Wrong guess? The next hint shows up. 
- Six text hints, and if you still haven't got it, an four-tile multiple final round. 
- Share string at the end, like Wordle.
## Hints

By default, the game generates a six-step hint ladder from item metadata - quality first, then type, pools, DLC, the first sentence of the description, and the pickup quote. Generic but works.

When I have time add hand-crafted hints via a small local-only admin UI: pick a date, pick an item, type six hints. It writes back to the schedule JSON. Past dates are read-only so I cannot accidentally rewrite history.

## Result

A small daily ritual for Isaac fans. New puzzle at 00:00 UTC, share your score, come back tomorrow.

https://github.com/avelouk/something-of-isaac

## Credits

Fan project, not affiliated with Edmund McMillen, Nicalis, or the official Binding of Isaac team. Item data from [Platinum God](https://platinumgod.co.uk/repentance), IDs and seed helpers from [Isaaconnect](https://github.com/AlexisL61/Isaaconnect) (GPLv3).
