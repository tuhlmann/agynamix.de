---
slug: evaluating-a-java-workflow-engine
date: 2006-04-12
title: "Evaluating a Java Workflow engine"
author: "Torsten Uhlmann"
categories: ["business"]
keywords: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

For the next version of our [Net-Herald](http://www.agynamix.de/cms/index.php?option=content&task=view&id=13 "Net-Herald Monitoring and Controlling") monitoring and controlling software I'm evaluating the different open source workflow solutions for Java. One can find long lists [here](http://java-source.net/open-source/workflow-engines "Open-Source Java") and [here](http://www.manageability.org/blog/stuff/workflow_in_java/view "Manageability Blog"). So far I'm tending to use [OSWorkflow](http://www.opensymphony.com/osworkflow/ "OSWorkflow") as it seems to be easily integrated into a non J2EE (yes, there are non J2EE Java applications) app. I'd like to use a workflow engine for the inner structure of the software. So that there is more after-deployment control what actions are taken whenever a signal from some observed device arrives. For instance the user wants to wait for a period of time until finally an alarm is fired. Or he wants to control a different device according to the received signal. Anyway, never mind :) Just loud thinking... Please leave your comments about this.
