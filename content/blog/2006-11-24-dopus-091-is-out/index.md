---
slug: dopus-091-is-out
date: 2006-11-24
title: "Dopus 0.9.1 is out"
author: "Torsten Uhlmann"
categories: ["business"]
keywords: []
description:
banner: "./banner.jpg"
bannerCredit: "Photo by Torsten Uhlmann"
---

I've released a new version of Dopus (Docbook Publishing System) today. New features include:

-   I've put together a User Manual which is included as Docbook source and PDF. So the manual itself is an example for using Dopus.
-   I've changed the stylesheet and XML encodings to UTF-8 which is more international then ISO-8859-1.

Meanwhile I've created a [Dopus forum](http://issues.agynamix.de/default.php?dopus) and a project in [our FogBugz bug tracker](http://issues.agynamix.de/default.php?pg=pgPublicEdit). Feel free to download the latest version from the freeware section of [our download area](http://cms.agynamix.de/downloads/index.php) and enjoy it. For future versions I have planned:

-   Add plain text to the available file types. That would enable you to create a ChangeLog or ToDo document from a Docbook file
-   Variable substitution: Make all variables from the build process available to the Docbook file. In the Docbook file then I would substitute '${variable.name}' against it's value. One can of course add it's own variables (Ant properties) to the build process and use them in the Docbook document. So when I change the property 'document.version' I want that same version be printed in the document.

