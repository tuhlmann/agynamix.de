---
slug: doo-and-figwheel
date: 2015-09-22
title: "ClojureScript Testing with Doo and Figwheel"
author: "Torsten Uhlmann"
categories: []
keywords: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

These days I was playing with strategies to run
ClojureScript tests. Information about this particular topic is not too easy to find, so here's a short list of posts I found particularly useful:

* [How can you test ClojureScript applications and libraries?](http://www.lispcast.com/testing-clojurescript)
* [Testing ClojureScript code with cljs.test with phantomjs and figwheel](https://nvbn.github.io/2015/06/08/cljs-test/)

The Unit test library used in these cases is `cljs.test`.
One way to run the tests is to add a test and runner configuration to your `project.clj` (see the second link for an example).

Another way is to use [lein-doo](https://github.com/bensu/doo) as a way to configure all kinds of different test runners, like Karma, SlimerJs or PhantomJs, and also watch your source directories and run tests on file change.

I was playing with that Doo configuration in my project and ran into a strange error.

My project uses a figwheel configuration, and the funny thing is, figwheel barks on this piece of Doo config:

`:main 'example.runner`

with the exception:

```
java.lang.ClassCastException:
clojure.lang.PersistentList cannot be cast to
clojure.lang.Named
```

To get around this problem, write the Doo config like this:

`:main "example.runner"`

Figwheel works again and even Doo still works :)

Hope this might help somebody...
