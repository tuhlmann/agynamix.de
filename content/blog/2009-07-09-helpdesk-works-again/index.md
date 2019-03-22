---
slug: helpdesk-works-again
date: 2009-07-09
title: "Helpdesk works again"
author: "Torsten Uhlmann"
tags: ["it"]
categories: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

After a day of bug hunting and help from the great guys and gals at [Userscape](http://www.userscape.com) we were able to track down the problem to a wrong 'include\_path' setting in the PHP preferences. I have absolutely no clue why this setting was changed during a PHP security update or if it has been there all along. Fact is the problem occured only after the update, and only in this one application. The value of 'include\_path' was set to '.' in a global confixx file 'confixx\_mhost.conf'. After commenting out the property the whole thing suddenly worked again. So go ahead and use the [helpdesk](http://helpdesk.agynamix.de). Have a great day, Torsten.
