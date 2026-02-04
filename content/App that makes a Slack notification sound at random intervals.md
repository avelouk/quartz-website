---
title: App that makes a Slack notification sound at random intervals
tags:
  - project
  - done
---
Using AI to write code in recent years has been quite a satisfying experience. While most of the code I wrote for work has been related to boring data analysis, some rudimentary lambda functions, or automating boring tasks (thank god for the Apps script in Google Sheets), I have been using different programming languages and tech stacks without specialized knowledge. I know the most important concepts from my years as an Android developer, and AI takes care of the rest. 

Anyway, for Halloween, I am going to be dressed as a late-night Slack notification, and I need my costume to make this sound at random points. I didn't find an easy way to do this, so it's time to vibe code a quick solution. I'll start a stopwatch and see how long it takes to build this app from scratch using Cursor. 

### Working prototype
Checking the stopwatch... aaaand it took 26 minutes to get a working prototype and have the AI add some flavor. （＾ω＾） It suggested using React Native, and I ran it on my phone using Expo Go. 
![[slack_screen_1.png|400]]
### It doesn't work when the app is closed
Now we need to make sure it runs in the background because currently it stops as soon as I lock the screen. For that, I will need to run the app locally, which means installing Android Studio and going through some setup. That will take a while. 

### Building the app locally
And it took almost an entire hour to build the app. Some things never change. ( ˇ෴ˇ )

### Permissions
Speaking of things that never change. ( ఠൠఠ ) I was stuck in the permission jail for almost another hour. The culprit was the battery optimization thing that kept canceling the app's scheduled notifications. After providing unrestricted access, it seems to be working.

![[slack_screen_2.png|400]]
Hey, my phone got fully charged ٩(◕‿◕)۶
### **Total time:** 
#done in 2 hours 22 minutes
### **Result:** 
https://github.com/avelouk/app-that-makes-slack-notification-sound

The costume was quite annoying in the best possible way. 

