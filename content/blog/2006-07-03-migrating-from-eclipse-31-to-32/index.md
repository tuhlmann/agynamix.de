---
slug: migrating-from-eclipse-31-to-32
date: 2006-07-03
title: "Migrating from Eclipse 3.1 to 3.2"
author: "Torsten Uhlmann"
categories: ["english", "programming"]
keywords: []
description:
banner: "./banner.jpg"
bannerCredit: "Photo by Torsten Uhlmann"
---

I thought this would be kind of easy. After 3 hours I know there is nothing that is really easy in software development. I'm developing a Client Server application with an Eclipse RCP Client. Now I wanted to update the Eclipse libs I use for the client from 3.1 to the newly arrived 3.2. I also use [GEF](http://www.eclipse.org/gef/) in my application, this was one reason for the update, the other one being the [really cool tabbed property dialogs](http://www.eclipse.org/articles/Article-Tabbed-Properties/tabbed_properties_view.html). So I edited my Target platform (you should really seperate the Eclipse which you might use to develop your application from the Eclipse which IS your application). After cleaning all projects and shutting down the IDE I was still not able to start my application again. Fancy error messages like "no product id found" or "Bundle ... not resolved" would occur in the log. I then tried to create a sample RCP project. I could create it but it would not start for the same reasons mine would not start. Hm, okay then. I exported my preferences, saved the Eclipse .metadata directory and started from scratch. I then imported my settings and tried the example aplication again. Voila! Cool, easy migration path :) Sure enough, my RCP client would start like a rocket in this new environment. So I wasted half a day just to find out it was not my fault but an old .metadata repository. Moral of the story: It's not always your fault :)
