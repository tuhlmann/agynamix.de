---
slug: nested-properties-in-ant
date: 2008-04-29
title: "Nested properties in Ant"
author: "Torsten Uhlmann"
categories: ["english", "programming"]
keywords: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

Today while scripting my [Dopus](http://cms.agynamix.de/downloads/cat_view-2.html) Ant files I came across a problem with nested properties.

Something of the sort `${document.${input.file}.type}`.

Turns out that Ant cannot do this by default. Yet I found a [blog entry](http://blog.joerghoh.de/index.php?/archives/93-Ant-Properties-indirekt-aufloesen.html) that explains how it can be done with newer versions of Ant (those that support macros). I adapted the solution a little bit with the following result:

```
<!-- Needed to resolve a nested property like ${document.${input.file}.type} -->
<macrodef name="resolveProperty">
<attribute name="property" />
<attribute name="value" />
<sequential>
<property name="tmp1.@{property}" value="document.@{value}.type" />
<resolveProperty2 property="@{property}" value="${tmp1.@{property}}" />
</sequential>
</macrodef>

<macrodef name="resolveProperty2">
<attribute name="property" />
<attribute name="value" />
<sequential>
<property name="@{property}" value="${@{value}}" />
</sequential>
</macrodef>
```

Now I can set my property like so:

```
<resolveProperty property="document.calculated.type" value="${project.input.file}" />
```

which effectively sets `document.calculated.type=${document.${project.input.file}.type}`.

Nice.
