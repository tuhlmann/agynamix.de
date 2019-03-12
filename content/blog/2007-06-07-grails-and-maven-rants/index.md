---
slug: grails-and-maven-rants
date: 2007-06-07
title: "Grails and Maven rants"
author: "Torsten Uhlmann"
categories: ["english", "programming"]
keywords: []
description:
banner: "./banner.jpg"
bannerCredit: "Photo by Torsten Uhlmann"
---

**Grails:** Lately I've been delving into the [Grails](http://grails.codehaus.org/) project. Grails is something like [Ruby on Rails](http://www.rubyonrails.org/) but for the Java world. It uses the [Groovy](http://groovy.codehaus.org/) language, a dynamic language similar to Ruby but with Java syntax and a tight integration into the Java VM. Groovy brings those great features like Closures to Java developers. Since I can't deny 10 years of Java experience I'm somewhat dran to this solution, rather than to Rails. Now for those you would like to delve into Grails, there is a free book available at [InfoQ](http://www.infoq.com/minibooks/grails). It might help you understand it's potential which to a great degree comes from the underlying Groovy. **Maven:** [Maven](http://maven.apache.org/) is a project management tool for Java projects. It supports building projects just like [Ant](http://ant.apache.org/) but is supposed to go much further. It allows you to specify dependencies to other projects or 3rd party libraries. It also build a nice web site for you containing build stats, Javadoc and Documentation. Until now I'm using Ant for building my projects. I have used Maven 1.0 for the server part of our Net-Herald application. What I do not like in the Maven approach is that all artefacts (3rd party libs, generated libs from own projects) live in a repository. If a dependency is not met, Maven tries to fetch it from a mirror. This works most of the time for open source libs, but of course must fail if you depend on commercial or your own libs. Anyway I like my dependencies to be in Subversion along with the source. Some people say this is wrong. But for me I just know where all the stuff is... But still I wanna give a new try to Maven. And today I found this [free Maven book online at DevZuz](http://www.devzuz.com/web/guest/products/resources?gclid=CID3rsXTyYwCFQlrXgodoU6JQg#BBWM). So mayve you find those books helpful. Tell me what you think regarding Build management. This is an area where I think a lot can be improved- especially in my case :)
