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

When I have time, I add hand-crafted hints via a small local-only admin UI: pick a date, pick an item, type six hints. It writes back to the schedule JSON. Past dates are read-only so I cannot accidentally rewrite history.

Later on, I added a free tier Cloudflare worker to store the number of daily players and the hint schedule. That way I don't need to deploy the app every time I add hints.

## Result

A small daily ritual for Isaac fans. New puzzle at 00:00 UTC, share your score, come back tomorrow.

https://github.com/avelouk/something-of-isaac

### I got actual players!

Great success! (✦ ‿ ✦)

I made my own [post](https://www.reddit.com/r/bindingofisaac/comments/1t6r3a9/made_a_little_daily_game_inspired_by_a_thread_a/) on the subreddit once the game was finished, and I got a very positive response, along with a few bug reports and very cool suggestions. **622 players** tried the game on the first day, with **40** of them playing every day since launch. I haven't done any further promotion as I am not sure how to do it.

I would say this retention curve is not bad at all. While there is no viral growth, many people who tried it once keep playing for almost 2 weeks now. (✪‿✪)ノ

![[something_isaac_retention.png]]

## Credits

Fan project, not affiliated with Edmund McMillen, Nicalis, or the official Binding of Isaac team. Item data from [Platinum God](https://platinumgod.co.uk/repentance), IDs and seed helpers from [Isaaconnect](https://github.com/AlexisL61/Isaaconnect) (GPLv3).
