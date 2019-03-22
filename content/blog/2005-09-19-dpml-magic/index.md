---
slug: dpml-magic
date: 2005-09-19
title: "DPML Magic"
author: "Torsten Uhlmann"
tags: []
categories: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

I’ll probably will give [DPML Magic](http://dpml.net/magic/latest/) a try. I found this (below) and thought to post it here to remember myself to do it:

If you like Maven, but would rather just run Ant with the resource ability, check out DPML’s Magic. DPML is what used to be Apache Avalon. It isn’t well documented yet, but if I had a blog or a confluence page online, I would surely create some. It has only been in existance for about 8 months or so, but works quite well. They best thing to do is just checkout DPML Metro via Subversion, bootstrap Magic, and then have Ant + Magic build the 10s of projects in Metro (about 10 minutes).

> svn checkout <http://paris.dpml.net/svn/development/main>
>  cd main
>  ant -f setup.xml
>  ant

If artifacts (jars) are not found, edit your bootstrap repository in setup.properties or edit your hosts in ~/.dpml/transit/authority/hosts.xml

http://repository.dpml.net/classic
Is the “classic” Maven style repo.
