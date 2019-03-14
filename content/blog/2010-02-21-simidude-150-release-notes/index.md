---
slug: simidude-150-release-notes
date: 2010-02-21
title: "Simidude 1.5.0 Release Notes"
author: "Torsten Uhlmann"
categories: ["release-notes"]
keywords: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

Hurray, great news! I finally released version 1.5.0 of Simidude. This version fixed some important any annoying bugs and provides a few new features:

-   **Bug Fix:** Circling Clipboard Items: There where circumstances when a clipboard item was sent back and forth between connected clients.
-   **Bug Fix:** Wrong Sort Order of Clipboard Items: Sometimes clipboard items where inserted at the right position in the item list.
-   **Bug Fix:** Fixed Drag&Drop on Mac: There where problems using Drag&Drop on Mac systems.
-   **Bug Fix:** Runs on Ubuntu 09.10: Using new libraries problems while using Simidude on new Linux/Ubuntu have been resolved.
-   **Bug Fix:** Sometimes Simidude crashed right after the start if the computer's clipboard held certain data.
-   **Feature**: Preference Setting to manually overwrite a clients IP address: You can enter a specific IP address in the network preferences if you want to force Simidude to that address and not auto detect the most probable primary IP address.
-   **Feature**: You can now select which Clipboard items are being monitored: You can now enable/disable the monitoring of Text/Image or File items. That way you can for instance disable the monitoring of images copied to the clipboard when you only care for Text / Files.
-   **Feature**: Network Analysis Dialog: In the Help menu there is now a "Network Analysis" dialog that shows information about connected clients and a connection history of received data (only statistical data). The Network Analysis report is appended to the Bug Report that can be sent from inside Simidude and is a useful debugging aid in case of connection trouble.

This version is recommended for all users. As always if you have any feature requests please let me know- loud and clear.
