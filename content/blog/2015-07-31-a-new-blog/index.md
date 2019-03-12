---
slug: a-new-blog
date: 2015-07-31
title: "A New Time, a New Blog"
author: "Torsten Uhlmann"
categories: ["Cryogen"]
keywords: []
description:
banner: "./banner.jpg"
---

After torching my old site
(Wordpress, vulnerable, was compromised, bla, bla)
I was long thinking about what to do with the new.
I wanted to make it easier for me to publish new posts, and a bit
more tech savvy, that is. And I wanted to have a static site
that does not expose my server to all the world.

I first looked at [Jekyll](http://jekyllrb.com/) and
[Octopress](http://octopress.org/) as they seemed to be the big
players in the field of static site generators.

They worked ok. However I didn't want to learn Ruby if I wanted
to change some functionality. They also seemed complicated for
what I had in mind.

So after a while I ended up with [Cryogen](http://cryogenweb.org/),
an easy to use and fairly simple static site generator written
in [Clojure](http://clojure.org/). Since Clojure is the language
I want to dive in deeper that seems the perfect fit for me.

To start a new website with cryogen, first install [Leiningen](http://leiningen.org/),
the Clojure build tool, and then type:

```
$ lein new cryogen my-site
$ lein ring server
```

This create a new Clojure project from the "cryogen" template.
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
