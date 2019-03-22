---
slug: developing-on-windows-10
date: 2017-02-27
title: "Developing Web Applications on Windows 10"
author: "Torsten Uhlmann"
tags: ["Windows", "Clojure", "Scala"]
categories: []
description:
banner: banner.jpg
---

Oh I was so desperately waiting for a new Macbook Pro to be released in 2017. And it was. And I was so disappointed, like many others were. I wasn't looking for a super thin designer laptop, what I need is a work horse.

At the same time I was also disappointed by the performance of Ubuntu on my Lenovo W540. I mean it works, but once in a while it wouldn't wake, I was missing some tools I knew from Mac, and so on.

After a long hiatus I thought it might be interesting to come back to Windows and see how it developed. I looked at Windows 8 and 8.1 from afar and only was grateful I wouldn't need to work with it. But now, Windows 10 looks a lot nicer and I find it actually quiet usable. With the advent of [Bash On Windows](https://msdn.microsoft.com/commandline/wsl/about) there was enough interest to check it out and try to set up a development machine that is really usable.

I develop mostly web applications with Scala and Clojure, both languages
are running on the Java virtual machine. I mainly use IntelliJ Idea with it's
Scala and Clojure plugins. The projects I'm currently working on
exclusively use Unix tools (Bash, curl, etc) so they need to be supported.

The following lines are my adventures in Windows land. I'll try to
describe the customizations I installed as well as the problems I
ran into when compiling or running web applications.

### A note about Bash on Windows

I think that's a super cool feature. WSL basically lets you run Ubuntu
(other Linuxes will be supported in the future) on Windows.

While this could bring proper Unix support to Windows I felt it's not
quiet ready yet for running my projects. One problem was the slow Scala
compiler (even slower than normal), the other was a problem running
Javascript tests through Karma.

After another year or so, WSL might be awesome and usable.

This document does not describe Bash on Windows- I took a standard Windows
only approach.

## Your Project directory

- outside home
- don't run indexer
- Windows defender exception
- Right Click -> Settings -> disable indexing

## Cygwin

First thing I did was installing [Cygwin](https://cygwin.com/).
Please note that some people prefer
[Git for Windows](https://git-for-windows.github.io/) which comes with a
lot of Unix command line tools, probably all you'll ever need.
It also makes it easier to work with Git projects, for instance it
sets the correct fileMode in your Unix projects, something you'd have
to do manually with the Cygwin version of Git. However I prefered the
extensibility of Cygwin.


```
$ lein new cryogen my-site
$ lein ring server
```

This creates a new Clojure project from the "cryogen" template.
`lein ring server` starts listening for changes in the posts and pages and
creates a web server that listens at `http://localhost:3000`.

As soon as you change contents or add a page it will re-create the static site in
`my-site/resources/public`.

Oh, and you can write your posts and pages in Markdown or Asciidoc. To use Asciidoc just
add the [appropriate plugin](https://github.com/cryogen-project/cryogen-asciidoc) to the `my-site` project.

To publish the site simply copy the contents of this directory to your DocumentRoot
or a Github Pages repository, etc.

One thing I'm thinking about is adding client side search to my site via
something like [lunr.js](http://lunrjs.com/), which seems like a cool
project.

So here it is, a new site, and a new blog. I hope due to a simple publishing chain
I will keep on posting stuff.
