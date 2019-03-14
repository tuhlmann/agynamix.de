---
slug: version-130-of-agynamix-simidude-the-cross-platform-network-clipboard-is-available
date: 2009-06-16
title: "Version 1.3.0 of AGYNAMIX Simidude, the cross platform network clipboard is available"
author: "Torsten Uhlmann"
categories: ["it", "marketing", "newsletter"]
keywords: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

Finally! After a short beta period I have now released version 1.3.0 of AGYNAMIX Simidude, my cross platform network clipboard and file copy tool. I did not get around to create new and shiny screenshots yet- I'll post them as soon as possible! This one is a pretty big release with huge improvements in usability and features. Here is a list of new features that were added since version 1.2.0:

-   **An embedded HTTP server**. The embedded HTTP server allows you to access Simidude entries from any machines that has a browser installed. This is useful if you want to access Simidude but have no permission to install your own software, maybe because you’re setting up your client’s machine and want to use Simidude to transfer data back and forth. Here is a more [in depth article](../blog/2009/version-13-beta-of-the-network-clipboard-agynamix-simidude-is-coming/) about this new exiting feature.
-   **Save compressed…** Simidude now offers a way to quickly save any text, image, file or directory in ZIP compressed format. To do this simply right click on an entry and choose “Save compressed…”. That is actually the most efficient way to get some text stuffed into a compressed file: copy the text passage to clipboard, after it occurs in Simidude click “Save compressed…”, change the file name if you want and hit that big “Save” button. That’s it you’re done.
-   **Restore the Clipboard after a reboot.** There is now an option in the preferences, if set the current content of the clipboard will be saved to disk. After a restart Simidude checks if the clipboard is still empty. If that is the case the saved entry will be restored. It was a bit hard to test because I didn’t find a way to really empty the clipboard (on Mac) other then rebooting the machine…
-   **Some minor GUI improvements.** There is no Exit-Button in the toolbar any more that might have caused trouble.
-   Finally there are 64bit releases for Windows and Linux. I have tested them on Windows 64bit and Ubuntu 64. If you have a 64 bit machine please make sure to try them out and report back any misbehavior.
-   **A list of IP addresses or network names to connect after launch.** In the preferences you can now add IP addresses or network names of machines you wish to always connect to. This option is intended to be used to connect to machines in different subnets or in those rare cases when your network configuration prohibits the sending of broadcast messages which Simidude uses to find other clients.
-   **The modifier key can be changed.** Available options are: "Ctrl" on Windows or "Apple" on Mac, "Shift" and "Alt". The modifier key for instance alternates the behavior of a double click on a Simidude entry. Without holding the modifier key the entry will be opened in the chosen application (see below), holding the modifier key activates that clicked entry (puts it into the clipboard)
-   **Select an application for opening Simidude entries.** In the preferences you can now set an application for each entry type (Text, Image or File/Folder). When double clicking of a Simidude entry that data will then be opened within the specified application.

This new and exciting version can be found on our [download page](http://www.simidude.com/download). If you have suggestions or questions please use our [helpdesk](http://helpdesk.agynamix.de/index.php?pg=request) or [email address](mailto:tuhlmann@agynamix.de) to contact us. We are excited to hear from you! Have a great day!
