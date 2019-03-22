---
slug: images-with-windows-live-writer
date: 2006-08-27
title: "Images with Windows Live Writer"
author: "Torsten Uhlmann"
tags: ["business"]
categories: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

Using Wordpress 2 as our blogging tool, I'd like to be able to set up MS Live Writer in a way that it can upload images to Wordpress' upload directory via FTP. This is a test for this: [](http://blog.agynamix.de/wp-content/uploads/ImageswithWindowsLiveWriter_F340/Sonnenuntergang1.jpg)[](http://blog.agynamix.de/wp-content/uploads/ImageswithWindowsLiveWriter_F340/Sonnenuntergang9.jpg)

![](http://blog.agynamix.de/wp-content/uploads/ImageswithWindowsLiveWriter_F340/Sonnenuntergang_thumb7.jpg)

Wow, it seems to work... To make this entry at least a tiny bit useful, I should probably write about the settings I've used:

-   I choose Weblog =&gt; Edit Weblog Setttings and clicked "Upload images to an FTP server".
-   There you enter the address of your ftp server (probably the same as your blog's address, www.agynamix.de in my case), username and password.
-   Inside the Wordpress installation is a folder called "uploads" where Wordpress stores images that you upload through the web interface. Find out the complete path (not URL) of that directory (type 'pwd' if you're on a Unix box).
-   In the last filed type the URL of the "uploads" folder, http://blog.agynamix.de/wp-content/uploads in our case.

You're done! Live Writer will upload the image into a self created directory (check that your ftp user has permission to create directories in "uploads") and put a link into your blog entry. Cool.
