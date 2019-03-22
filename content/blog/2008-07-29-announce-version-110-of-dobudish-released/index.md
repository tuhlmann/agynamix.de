---
slug: announce-version-110-of-dobudish-released
date: 2008-07-29
title: "Announce: Version 1.1.0 of DobuDish released"
author: "Torsten Uhlmann"
tags: ["docbook", "english", "programming"]
categories: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

Hi all, today I released version 1.1.0 of DobuDish. The change: I have added new global-\[pre/post\] targets to DobuDish as well as an initially empty file "system/etc/build-user-augments.xml" which is supposed to hold user defined actions for the global targets. The logic is as follow:

-   first try to execute a local target
-   if that does not exist, try to execute the corresponding global target. That way you can overwrite global actions with local ones. Please note if a local action is found, the corresponding global action is not executed- unless you explicitely call it inside the local action.

You can download DobuDish at the [usual place](http://cms.agynamix.de/downloads/cat_view-2.html). Enjoy, Torsten.
