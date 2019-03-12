---
slug: dopus-097-released
date: 2006-12-21
title: "Dopus 0.9.7 released"
author: "Torsten Uhlmann"
categories: ["business", "programming"]
keywords: []
description:
banner: "./banner.jpg"
bannerCredit: "Photo by Torsten Uhlmann"
---

From the release notes (also a docbook document transformed while packaging Dopus):

-   <span class="bold">**Version 0.9.7**</span>
-   Property substitution in Docbook documents: The separator can be adjusted in build.properties (or overwritten in localbuild.properties if you want to have different separators in your files). This mechanism is disabled by default, to enable, set 'substitute.properties=yes' in your build.properties file (or localbuild.properties)
-   Linebreak support in html based and fo customization layers: Just type &lt; ?lb ?&gt; which will result in a line at the resulting position.
-   Added target "manpages"
-   Added target "wordml"
-   You can now have multiple documents within a document directory. To process documents other then the master document (same name as the doc dir): `generator.bat fluff pdf subfluff` If the 3rd parameter is omitted the document is assumed to be of the same name as the documents directory (e.g. fluff.xml for a document directory named "fluff" (as usual).

As of version 0.9.6 there is a version with JRE (Windows) and one without. Enjoy! Torsten.
