---
slug: wordpress-26-safe-mode-and-file-uploads
date: 2008-11-14
title: "Wordpress 2.6, safe_mode and file uploads"
author: "Torsten Uhlmann"
categories: ["english", "programming"]
keywords: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

Since I'm (most of the time) a responsible internet user I try to keep my web applications up to date.

In [this article](http://blog.agynamix.de/blog/2008/keep-wordpress-up-to-date-with-subversion/) I describe how you can keep Wordpress up to date with updates directly from the source. Now I've done that for this blog and my new [Simidude website](http://www.simidude.com). All went well, software got updated and I got a good feeling knowing I did something for peace on the internet.

Now these days I wanted to write some new articles including some charming images. Images in posts are great because the just make the post more pleasant.

So I cheerfully wrote some text about our [new baby boy "Sim"](http://www.simidude.com/blog/2008/simidude-screenshots/) whom I like to call Simi dude and I also wanted to include some screenshots about how he looks by now so that, in a few weeks or so, people would see how fast he has grown and become a real boy.

Hm, suddenly Wordpress bombards me with the following error message while I was trying to upload a foto:

> Unable to create directory "\[...\]/uploads/2008/11". Is its parent directory writeable by server?

Of course it is writable! And sure enough it worked a few weeks ago. (well actually month- the last time I uploaded an image into this blog was in May. I'm ashamed.)

Since I'm running a real root server with ssh access I went to the server and toyed with the Unix file permissions. So I tried setting the wp-content directory world-writable (777). No effect, same error message. FYI I changed the settings back- no need to hack the server...

Then I realized the following:

[![](http://blog.agynamix.de/wp-content/uploads/2008/11/linstow_006-224x300.jpg "linstow_006")](./linstow_006.jpg)

The uploads directory was owned by web4.www-data. web4 is my user account on the machine, www-data is the user and group of the Apache server (standard on Debian based systems).

A directory "2008" was actually created with the owner "www-data.www-data" because it had been created by the Apache server through the PHP script. Just the "11" directory could not be created. So I did this by hand, setting ownership to www-data.www-data. Now I rushed over to the upload dialog being pretty sure it would work now. No luck! Still I received an error message (see above) that this directory could not be created.

After spending some time with my friend Google and reading helpless posts that sugessted setting the file permissions to 777 and don't care about the rest I came across some explanation of PHP safe\_mode (did I mention I use safe\_mode on)?

What matters here is that safe\_mode checks if the executed script belongs to the same owner as the directory it writes into. Now my Wordpress installation belongs to web4.www-data so that I could use FTP or SSH to connect as user web4 and actually have write permission.

So the script that uploads the image tries to create the directory "2008". That works because the parent directory, "uploads", belong to web4.www-data. But the created directory "2008" is now owned by www-data.www-data because it was created by the Apache server. When it tries to create "11" inside "2008" it fails miserably because "2008" is not owned by web4.

After creating the directory "11" by hand and changing the ownership of "2008" and "11" to web4.www-data I was able to upload images!

Now for a somewhat permanent solution because I don't want to go to my server each month and create a new directory by hand:

Apparently there is a setting in php.ini which tells the safe\_mode to not just look at the owner of a file but also the goup of it. The setting is called:

> **safe\_mode\_gid = On**

It was Off in my case. After changing it and restarting Apache I could readily create directories and upload images.

Now if you can't change that setting because you don't have root access it might also work if you can change the ownership of your Wordpress php files to www-data.www-data. Because after you've done that the user of the script and of the created directory would match again.

Hope this saves some of your time!
