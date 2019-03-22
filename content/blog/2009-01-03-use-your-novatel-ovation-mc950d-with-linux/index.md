---
slug: use-your-novatel-ovation-mc950d-with-linux
date: 2009-01-03
title: "Use your Novatel Ovation MC950D with Linux"
author: "Torsten Uhlmann"
tags: ["business", "english"]
categories: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

A while back I bought myself a Vodafone [UMTS flat rate](http://www.moobicent.de/) together with one of thise nifty UMTS USB sticks. Mine is a Novatel Ovation MC950D.

![](./thalheim_im_winter.jpg)

For Windows, there isn't much to bother. The stick comes with the Mobile Connect Lite software installed in the memory part. These kinds of USB devices act as a memory stick when not activated otherwise or as an UMTS modem. So the first time you connect the stick it will connect as a memory stick and show you a directory with the setup files for the Mobile Connect drivers. Install them and the next time (you might need to reboot) you connect the stick it will reconnect as an UMTS modem.

That's the way it works on Windows XP. On my Vista machine, it doesn't automatically reconnect. I have to start the "LiteAuto.exe" application fom the stick manually. After that it works as expected.

Now for my travels I have bought this little beautiful MSI Wind Netbook. It comes preinstalled with Windows XP. Being me I created a dual boot setup with Windows XP in one partition and Ubuntu 8.10 in the other. BTW, [this site](http://wiki.msiwind.net/index.php/Ubuntu_8.04_Tweaks) describes some tweaks you should engage in in order to get your MSI Window running fully under Ubuntu. I for instance exchanged the installed WLan card or an " [Intel PRO/Wireless 3945ABG](http://support.intel.com/support/wireless/wlan/pro3945abg/ "http://support.intel.com/support/wireless/wlan/pro3945abg/")" in order to make use of WiFi.

Now I also wanted to use my UMTS modem when working with Ubuntu. The first (semi successful) attempt I made was by following the description in [this blog post](http://quilombo.wordpress.com/2008/01/21/modem-usb-35g-novatel-ovation-mc950d-in-ubuntulinux/).

It worked, but I found it dreadfull to call some command line script in order to reconnect the stick as a modem. So I set it up as an exercise but didn't really use it much.

Now these last days a ran across a site caled [Betavine](http://www.betavine.net/bvportal/web/linux_drivers), a Vodafone research and community site where they publish, among others, UMTS card drivers for Linux.

I downloaded the "[Autoinstall for Ubuntu Fedore SuSE](https://forge.betavine.net/frs/download.php/269/vodafone-mobile-connect-card-driver-for-linux-2.0.beta3-ALL-i386-installer.run)" file, installed it:

```
sudo .vodafone-mobile-connect-card-driver-for-linux-2.0.beta3-ALL-i386-installer.run
```

and, after a reboot of my machine it just worked!

I inserted the Novatel stick and, after the stick had powered up, it would show a new entry in Ubuntu's Network Manager (you access it from the little icon in the upper panel). When you click on the network Manager icon you see a new Network "Vodafone D2" (or whatever network you are in), you can click on it and it will connect. Mighty cool.

Now I just need to get that stick working with my Mac...

--

My name is Torsten Uhlmann, I'm founder of [AGYNAMIX](http://www.agynamix.de), a tiny (sooo tiiiny its just me) software company specializing in Java software consulting for larger corporations.

I also develop [Simidude](http://www.simidude.com), a cross platform network clipboard and Drag&Drop tool which you might happen to find usefull.
