---
slug: click2dial-with-your-snom-phone-and-mac-address-book
date: 2010-09-01
title: "Click2Dial with your Snom Phone and Mac Address Book"
author: "Torsten Uhlmann"
tags: ["english", "fritzbox-snom-phone", "mac", "telefonie"]
categories: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

A while back my old trusty FritzBox (PBX/router/fax/whatever) went south which actually was a good thing. Shopping for a new model I noticed that the newer versions of it (from 7170 onwards) support IP phones like the Snom IP phones I had lying around. When I had separate office rooms I used an Asterisk (Trixbox, in fact) pbx and Snom phones with it. After a switched solely to FritzBox these Snom's lied dormant- until now. One thing I liked about the Asterisk solution was a quick way to dial a phone number from an address book. Back then I used Windows machines with Outlook and the free Asterisk Outlook Tapi plugin that was available. Now the Fritzbox does not support click2dial for IP phone (at least I have not found this feature) but the Snom phone supports command URLs. So the URL:

http://snom-user:snom-pw@snom-ip-address/command.htm?number=123456

will dial "123456" from your phone. **Important Note:** To make this work you must disable "Hidden Features" in the Snom QoS/Security settings (I use firmware version 8 with my Snom 360). If these are enabled then basically these action URLs don't work. Now you can test the above URL from any web browser and test you got this end working. The other thing is the connection with Apple Addressbook. For this I have copied an AppleScript from [here](http://hints.macworld.com/article.php?story=20040317010729892) and adapted it to my needs:

Open the AppleScript Editor and copy and paste the above script. Save the script into "Library/Address Book Plug-Ins" in your home directory. After you restart the address book application and left click on the text next to a phone number there should be a line in the appearing menu that reads "Dial with SNOM". \[UPDATE\] I have updated the script to automatically change the '+' in a number into '00', this way the number "+49 123 45678" would automatically get translated into "004912345678". Now click there and let the dial begin... Enjoy, Torsten.
