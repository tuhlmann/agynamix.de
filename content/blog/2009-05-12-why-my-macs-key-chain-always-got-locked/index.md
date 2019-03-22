---
slug: why-my-macs-key-chain-always-got-locked
date: 2009-05-12
title: "Why my Mac's key chain always got locked"
author: "Torsten Uhlmann"
tags: ["english", "mac"]
categories: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

During the last couple of weeksI recognized an annoying problem with my Mac: Every now and then the standard key chain got locked and I had to enter my password over and over so that depending application could run. The Backup application would not work because it required the key chain password to be entered. As a possible solution to that problem the apple hotline suggested to run the disk utility application and check and fix potential file systems problems. But of course that wouldn't work- would be way too easy... After a lot of frustration I decided to reinstall my Mac. I'm used to that from my Windows machines, so no big deal :) I reinstalled Leopard and restored the user directory from Time Capsule (which worked like a charm). I was careful not to restore existing applications so that I would not take the original problem back. Now everything worked fine- until I installed [Sshkeychain](http://www.sshkeychain.org/)! [Sshkeychain](http://www.sshkeychain.org/) is a great utility application that manages your ssh keys for you so that you can use them with ssh or [Cyberduck](http://cyberduck.ch/) etc. without entering the keys password again. Apparently Sshkeychain has a preference setting that secures the Mac's key chain after some idle time in order to keep your keys secure. After unchecking this option the key chain never got locked by itself. I hope this little hint is useful to someone. If so please leave a comment! Have a great day!

–

My name is Torsten Uhlmann, I’m founder of [AGYNAMIX](http://www.agynamix.de/), a tiny (sooo tiiiny its just me) software company specializing in Java software consulting for larger corporations.

I also develop [Simidude](http://www.simidude.com/), an easy to use cross platform network clipboard and Drag & Drop tool which you might happen to find useful.
