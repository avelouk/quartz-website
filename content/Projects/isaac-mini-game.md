---
title: Something of Isaac
tags:
  - project
  - done
---
*The Binding of Isaac* is one of my favorite games ever. With 500 hours of hours and a Dead God under my belt, I I saw this [Reddit thread](https://www.reddit.com/r/bindingofisaac/comments/1t12aqm/try_to_guess_the_item_with_the_least_amount_of/) where players guess items with the fewest hints possible, I thought it would make a fun little Wordle-style daily puzzle. A weekend later, here it is. (✪‿✪) 

**Play it:** [somethingofisaac.com](https://somethingofisaac.com/)

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

### The marketing campaign I forgot I ran

After the Reddit post I emailed a few Isaac YouTubers and streamers, got zero replies, and forgot about the whole thing — believe it or not, I have a family and a job.

A month later one of them, anothermatt_, started streaming the game. I had no idea. And in a spectacular display of timing, that was exactly when I got too busy to write hand-crafted hints for a few weeks. The game fell back to the auto-generated ones, and they were bad enough that he stopped playing. (✖﹏✖)

But before that he posted a video, and then a [YouTube short](https://www.youtube.com/shorts/wiSQ2tc98Yo) that got 44k views. I only found out any of this happened when I opened my player graph and saw the spike: a peak of ~260 daily players, settling at about triple the old baseline.

![[something_isaac_retention_jul7.png]]

### Fixing my act

The lesson wrote itself: the hints are the game, and they can't depend on me having a free evening. So:

- I recruited a friend to write hints with me. Quality is good now and will stay good.
- All 718 items got a proper pre-built hint ladder, so even if we both disappear, the fallback is no longer embarrassing.
- That fallback made **endless mode** possible — the most requested feature from the Reddit post. When the daily puzzle isn't enough, keep going.
- I had my first real production incident (a bug this time, not the hints) and ended up fixing it on a sidewalk. So the game now has a **"Report a problem" button** that pings my Telegram directly.

A weekend project with an actual live audience now. (✦ ‿ ✦)

### Moving out (Aug – Sep 2026)

The game got its own home: **[somethingofisaac.com](https://somethingofisaac.com/)**.

Moving a website is easy. Moving it without wiping everyone's streak is not. Stats live in the browser's local storage, and browsers keep that per domain, so the new domain opens with an empty history. A normal redirect can't help, because it never runs any code on the old page.

So I did it in two steps:

- **First, back up every player to a server.** A small sync to the Cloudflare worker ran quietly for a month before the move, until basically every regular player had a copy there.
- **Then turn the old URL into a bridge.** No game on it anymore, just a few lines of JavaScript that read your player ID and send you to the new domain with it. The new site picks the ID up and restores your streak from the server. Old Reddit links and bookmarks keep working, and nobody has to do anything.

If you landed on the new domain directly, there's a "played before on avelouk.com? bring your streak over" link that makes the same trip on purpose.

### The first dollar

The move was also a small experiment: can a tiny game earn *anything*? I added one small corner ad (nothing inside the puzzle), and in the first week it made... **\$1.00**. One of my goals for the year was literally "earn at least $1 from my own product", so I'll take it. 

(ﾉ◕ヮ◕)ﾉ\*:･ﾟ✧

Fun fact I learned along the way: about **55%** of players run an ad blocker. It's a gamer audience after all.

### Better robot hints

Bad auto-generated hints are what lost me a streamer, and I don't always have time to manually write hints, so I rebuilt them:

- They're now written from the Isaac wiki instead of a single description line, so the middle hints can talk about synergies, unlocks and quirks instead of repeating the effect.
- In the process I found out that **141 of the 718 items had the wrong quality** in my data (a parsing bug with DLC-dependent values).
- For the "what does it look like" hint, an AI looked at every sprite without being told the item's name. Before that it was guessing the look from the name, which was wrong half the time.

### Done (for now)

Where it stands: around **40–50 players a day**, and about 100 who come back every week. It isn't growing, but it isn't dying either.

Hosting costs are negligible, the hint schedule is written weeks ahead, and all 718 items have a decent fallback ladder, so the game runs on its own. I'm putting it into maintenance mode and moving on to the next thing. If you're an Isaac creator and want to play it on stream: please do (✪‿✪)ノ

## Credits

Fan project, not affiliated with Edmund McMillen, Nicalis, or the official Binding of Isaac team. Item data from [wiki.gg](https://bindingofisaacrebirth.wiki.gg/), [Platinum God](https://platinumgod.co.uk/repentance), IDs and seed helpers from [Isaaconnect](https://github.com/Demorck/Isaaconnect) (GPLv3).
