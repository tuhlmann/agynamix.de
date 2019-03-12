---
slug: dopus-new-docbook-publishing-framework
date: 2006-11-22
title: "Dopus: New Docbook Publishing Framework"
author: "Torsten Uhlmann"
categories: ["business", "programming"]
keywords: []
description:
banner: "./banner.jpg"
bannerCredit: "Photo by Torsten Uhlmann"
---

During a project with T-Systems Germany we've created a new Docbook toolchain which is easy to use under Windows or Unix systems. T-Systems was kind enough to allow us to distribute the system under an Open Source license so others can use and profit from it. Dopus (the name of our new babe) is based on Java components and glued together using Apache Ant. It come preconfigured with all needed software components (including the Java JRE). On Windows, just unpack the thing into a directory of your choice. Then open a cmd shell, cd into the Dopus directory and type: *generator.bat fluff create book* This will create a new directory *documents/fluff* which contains a Docbook book template. To create PDF, just type *generator.bat fluff pdf*. The resulting PDF can be found in *documents/fluff/output/pdf*. Other available targets are:

-   html : create chunked html
-   singlehtml: create a single page html file
-   htmlhelp: create a Windows Help (CHM) file
-   eclipse: create an Eclipse Help plugin (together with toc.xml and plugin.xml)
-   javahelp: Create a Jar file containing the help suitable to view with JavaHelp
-   pdf: Create a PDF document
-   validate: Validate the input docbook file
-   distribute: export the Docbook input files into a ZIP archive

Dopus can be downloaded in the freeware section of our [download area](http://cms.agynamix.de/downloads/index.php). I've set up a discussion group for Dopus [here](http://issues.agynamix.de/default.php?dopus). Feel free to download and tell me what you think!
