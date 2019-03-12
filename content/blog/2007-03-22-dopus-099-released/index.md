---
slug: dopus-099-released
date: 2007-03-22
title: "Dopus 0.9.9 released"
author: "Torsten Uhlmann"
categories: ["business"]
keywords: []
description:
banner: "./banner.jpg"
bannerCredit: "Photo by Torsten Uhlmann"
---

Hi everybody, right now (well actually, a few minutes ago) I released a new version of the Docbook Publishing Tool [**Dopus**](http://cms.agynamix.de/downloads/cat_view-2.html). I'm sorry for the quietness around but I was very busy with projects at my customers places, own projects and, of course, the very cool EclipseCon. Anyway, without boring you to dust, here are the new features of this release:[![img\_1673.jpg](/img/uploads/2007/03/img_1673.jpg)](/img/uploads/2007/03/img_1673.jpg "img_1673.jpg")

-   Some people reguested Docbook Slides support. Well, here it is. Dopus does not yet support SVG or htmlhelp for Docbook Slides (you are welcome to help me figure out why). But it does support: PDF, HTML, XHTML and the table and frame versions of HTML and XHTML. To create a Slides document, just type:[](/img/uploads/2007/03/img_1673.jpg "img_1673.jpg")*generator.bat fluffyslides create slides* After that, you can use these targets to generate output:
-   pdf
-   html
-   tablehtml
-   framehtml
-   xhtml
-   tablexhtml
-   framexhtml
-   Dopus is now packaged on a Mac. Ant on Unix systems supports the setting of the executable flag for files. So now when you unpack the Dopus archive you don't have to change the file mode of generator.sh anymore- it works out of the box.

You can download Dopus as usual in our[](http://cms.agynamix.de/downloads/cat_view-2.html) [download area](http://cms.agynamix.de/downloads/cat_view-2.html). Enjoy!
