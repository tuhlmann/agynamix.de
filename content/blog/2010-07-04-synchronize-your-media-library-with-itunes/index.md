---
slug: synchronize-your-media-library-with-itunes
date: 2010-07-04
title: "Synchronize your media library with iTunes"
author: "Torsten Uhlmann"
tags: ["english", "it", "itunes", "mac", "media", "news", "programming"]
categories: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

This article will show you how you can synchronize your media library (movies, tv shows and iTunes shows at the moment) with iTunes.

### Background:

To understand my solution I'd like to share with you how my media setup works: I use eyeTV (great program btw) to record movies and tv shows. I then use Toast to cut out commercials and convert the file into Apple TV format. I then copy the media files unto a NAS (Drobo in my case) into a predefined directory structure (see below). To watch shows through Apple TV I first have to import them into my Mac Mini (the same that records the shows). I then have the Mac Mini connected to the Apple TV and let it stream media into the living room. So for that purpose the Apple TV is just an overly expensive iTunes connector that just works...

### How does it work:

In order to have an automated process (synchronize your current media library with the iTunes library) I have written a small piece of software that does just that. iTunesMediaImport is a Java based cross platform software that is freely available at <http://code.google.com/p/itunesmediaimport/> When it runs it parses a defined directory structure, dissects the file and directory name and creates a proper iTunes entry. iTunesMediaImport is started from a command line terminal.

### Directory Structure:

The important thing is that the media archive directory structure is what iTunesMediaImport expects. It knows 3 different kind of media types: iTunes shows, movies you recorded yourself and self recorded TV shows.

#### iTunes Shows:

For iTunes shows you point the variable "itunesShowsPath.x" (x is a unique number) straight to the "TV shows" folder. The content of that folder should be the folders of your iTunes shows.

#### Movies:

For movies point "moviePath.x" to a folder that contains genre folders. Each genre folder contains the movie files that you file under that genre. So in my case I point the variable (from etc/mediaimport.properties) to: "/Volumes/Drobo/Mediathek/Movies". This folder contains genre folders like "Adventure", "Action", "Comedy". You can have as many and name them as you see fit. When the movie is imported into iTunes it will be filed under a genre category with that name. Then the genre folder contains your movie files. The file name of the movie will be used as it's name in iTunes.

#### TV Shows:

TV shows are handled much like movies except there is another directory layer, the season folder. In mediaimport.properties you find a key "tvSeriesPath.x" that points to a directory that forms the root of my tv shows archive, "/Volumes/Drobo/Mediathek/TV Series" in my case. Then this folder contains the names of my tv shows, like "Bones", "Stargate" or whatever your poison is. Now under that folder you need to define another folder named "S&lt;season number&gt;", so "Stargate/S3/" would be the 3rd season of Stargate. Under the season folder you file the tv shows that belong to that season, for instance: "Stargate 11 - Tokra.m4v". iTunesMediaImport will parse the file name backwards and stop at the first dash ('-') it finds. If it finds a number after the dash (looking towards the beginning of the filename) that number will become the show number in iTunes. The part after the dash until the end of the file name (except the .m4v extension) will become the name of the show. --- iTunesMediaImport will keep a log of media files it has added into iTunes in order to avoid processing them over and over again. It will also delete shows from iTunes that have been deleted or renamed in your archive. I invite you to give it a try, if you want you are welcome to contribute to it on Google Code. There's also a forum for it [here](http://helpdesk.agynamix.de/index.php?pg=forums.topics&id=6). Have fun!

#### References:

-   iTunesMediaImport on Google Code: <http://code.google.com/p/itunesmediaimport/>
-   iTunesMediaImport forum: <http://helpdesk.agynamix.de/index.php?pg=forums.topics&id=6>
-   My website: <http://www.agynamix.de>

