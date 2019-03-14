---
slug: simidude-132-withdrawn-again
date: 2009-07-16
title: "Simidude 1.3.2 withdrawn - again"
author: "Torsten Uhlmann"
categories: ["it"]
keywords: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

I'm very very sorry for this trouble but today I had to withdraw my Simidude 1.3.2 release again. There is a major installer problem on the Mac side. I have reports from users that the Windows version works great, so no problem here. However I added a step to the installer to remove files from previous installations. I told the installer to delete the contents of the installation dir. On Windows this would be `C:\\Program Files\\Simidude` for instance. On Mac however this is `/Applications` because an application directory is treated as some kind of special file. Alas my installer tried to remove everything from `/Applications` which I only recognized today when I tried to read my mail and my Mail.app program was gone. Now thanks to Time Machine all the files get rolled back in place, but I sincerely hope no one of you guys was installing 1.3.2 on a Mac! After properly testing the installer changes on Mac Linux and Windows I'm gonna release a new version- again. Torsten.
