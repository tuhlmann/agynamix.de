---
slug: keep-wordpress-up-to-date-with-subversion
date: 2008-05-12
title: "Keep Wordpress up to date with Subversion"
author: "Torsten Uhlmann"
categories: ["business", "english", "subversion", "wordpress"]
keywords: []
description:
banner: "./banner.jpg"
bannerCredit: "Photo by Torsten Uhlmann"
---

I use Wordpress as my blogging system. I'm very satisfied. I need to keep it up to date. Now it's daunting to do the whole update ceremony by hand. Wouldn't it be nice if there where an automated mechanism? There is. ![101-0133\_IMG](/img/uploads/2008/05/101-0133-img.jpg)The german [CT](http://www.heise.de/ct/) magazine published an article about using Subversion for automated updates. The idea is so simple I'm embarrassed I didn't think of it before! Wordpress uses Subversion as it's source control system. In Subversion you usually create a directory "branches" where a directory is created for each release branch. And then there's a directory "tags" which contains a tag name (like "2.5.1" which is the latest release as of this post) for every release. Now what you can do is check out (svn co) the Wordpress code from the Subversion repository telling it you want to the, say, release tagged with "2.5.1". Subversion will copy the code into a specified directory and will also keep the Subversion metadata (".svn" directories) in place. Now whenever the fine folks at Wordpress release their version "2.5.2" you "switch" the code over to that tag, Subversion automatically updates your local sources with the latest changes from the repository and you are done. For all this stuff to work you need the Subversion client installed on your Wordpress host as well as ssh access to your account. To install Subversion on a Debian based system like Ubuntu you just say "apt-get install subversion" and it will be installed if not already present. The Wordpress repository is located at <http://svn.automattic.com/wordpress>. If you want to checkout the "2.5.1" release tag you would issues the following command:

> svn co http://svn.automattic.com/wordpress/tags/2.5.1 blog

This would check out the release version "2.5.1" into a directory "blog" which will be created by Subversion in the current directory. After that you need to adjust the file permissions so that your web server can access the files and directories. The following command is valid for Ubuntu (and probably other Debian-based systems as well):

> chown -R www-data.www-data blog

Then, suppose Wordpress releases version "2.5.2" you would issues the following commands from within your "blog" directory to update your local copy:

> svn switch http://svn.automattic.com/wordpress/tags/2.5.2

That's it. The folks at [Heise](http://www.heise.de) even released a GPL'ed script which encapsulates the Subversion commands. It even let's you add specific language files to your Wordpress installation. I have attached the wptool to this post.

-   [wptool-10](http://blog.agynamix.de/wp-content/uploads/2008/05/wptool-10.tgz)

As always I hope I could solve a few pain points in your life as a blogger...
