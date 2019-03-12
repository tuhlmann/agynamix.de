---
slug: how-you-can-add-gps-information-to-your-digital-photos
date: 2009-03-02
title: "How you can add GPS information to your digital photos"
author: "Torsten Uhlmann"
categories: ["english", "gps", "photography"]
keywords: []
description:
banner: "./banner.jpg"
bannerCredit: "Photo by Torsten Uhlmann"
---

One of the great waves of the last years is geotagging, meaning you keep track of the locations you have been with the means of a GPS tracker and than be able to create a map that shows the waypoint of your last trip. Of course geotagging is more but for the course of this article it generically means to tag something with GPS information.

[![](http://blog.agynamix.de/wp-content/uploads/2009/03/gps_tagged_photo-300x299.jpg)](/img/uploads/2009/03/gps_tagged_photo.jpg)

Lately I thought of a way to tag my digital photos with GPS information. Recent SLR cameras may come with a build in GPS but my Canon 400D is just 2 years old and I don't wont to buy a new one just because of this. A few days ago I figured out a pretty convenient way to record the location of where I am and later put this information into my photos. This procedure works under the assumption that both your GPS logger and your digital camera use nearly the same clock settings. **Theory:** The GPS logger records our present location every, say, 30 seconds. At home when you upload your photos to your camera you need a software that will look up the time code in your photo and then use that time code to look up a recording of a GPS location that was made to a close point in time. If no recording is found (say one minute before and after the time code of the photo) then no location information is added. **Let's get to work:** I found the following components best to work with:

-   I use my Nokia E71 handy with integrated GPS chip as the logger. Whenever I shoot photos I start the logger (see below) and let it run in the background. You may use another GPS handy or even a specialized GPS logger. The system is pretty flexible and does work with a great number of components.
-   As a GPS logging software on my E71 I use [TrekBuddy](http://linuxtechs.net/kruch/tb/forum/index.php). TrekBuddy is a free Java based tracking software. It does a lot more things like showing your present location on a map but I just use it to record my GPS location. The setup of the software is described on the Website. **Update:** It is important that you enable Tracklog logging. To do this go to *Settings-&gt;Location* and set Tracklog to "always". Below that you can change the interval a log entry is written. I have changed mine to 30s. After running the software it will create a folder TrekBuddy/tracks-gpx either on your phones card or internal memory, that depends on your device. That directory contains GPX files, one for each run of the software. Download these files to your computer.
-   A camera. Of course. You can use any brand you want, as long as it writes a time tag into your photos- which to my knowledge all cameras do. I use JPG to archive my photos. You can also use the RAW format. The software I use to merge GPS location into my photos supports some RAW formats (see below).
-   A software to merge GPS location information into your photos. For this I have found [GPicSync](http://code.google.com/p/gpicsync/). GPicSync is a free software that takes a GPX file and a folder with to be tagged images and merges the two together. Please see [this site](http://code.google.com/p/gpicsync/wiki/RawFormats) if your RAW format is supported. Now, what if you have multiple GPX files to tag your photos with (for instance, one for each day): The only way I have found to handle this is to synchronize that image folder with each GPX file subsequentially. If a time stamp does not match between image and GPX entry then the image is not changed.
-   After that you can import your photos into your photo software. I use iPhoto 2009 which shows me the location of the photo when I click on the little "i".

I have found that procedure to work and be pretty unobtrusive. Switching on the GPS logger on my handy is pretty easy and can run in background. Then the only additional steps are to download the GPX files from my handy (I do this through Bluetooth) and synchronize my photos via GPicSync. I can also no longer just upload my photos with iPhoto. Instead I use Image Capture which comes with my Mac to upload the camera's photos into a temp folder. After the sync I import them into iPhoto. I don't know about you but I really like knowing where I shot a photo even after a long period of time. What do you think about the process? We are now open to take comments!

–

My name is Torsten Uhlmann, I’m founder of [AGYNAMIX](http://www.agynamix.de/), a tiny (sooo tiiiny its just me) software company specializing in Java software consulting for larger corporations.

I also develop [Simidude](http://www.simidude.com/), a cross platform network clipboard and Drag&Drop tool which you might happen to find useful.
