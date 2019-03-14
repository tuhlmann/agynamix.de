---
slug: simidude-133-release-notes
date: 2009-07-14
title: "Simidude 1.3.3 Release Notes"
author: "Torsten Uhlmann"
categories: ["release-notes"]
keywords: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

These are the release notes for version 1.3.3 of the cross platform network clipboard Simidude. I published version 1.3.1 and 1.3.2 earlier this week but had to pull it back due to a problem with the installer. Version 1.3.3 is a maintenance release that fixed some bugs and brought a few new features:

-   **Fix**: Simidude saves the active clipboard entry to disk so that after a restart of your computer that item can be reloaded and will immediately be available to your system. That mechanism was broken and has now been fixed.
-   **Fix**: Simidude caches files and directories that are transfered between computers into a special cache directory. That directories are removed when the application exits normally. In case of a crash that cache directories remain and will not be removed in the future. That has now been fixed. Cache directories that have no reference to a Simidude item will now be deleted.
-   **Fix**: Simidude crashed when you tried to access it through a browser but where using the server port, not the designated http port. That has been fixed.
-   **Fix**: In some circumstances the written logfile could get huge. Writing of logfile entries has been limited to Error messages and a bug has been fixed that let log files grow endlessly. The Simidude logfile is contained in `c:\\Users\\\\.Simidude` (Windows Vista and 7). It's surprisingly called simidude.log.
-   **Fix**: I added an installer option to delete old application libraries from Simidude's lib dir. That did not work on all platforms.
-   **Feature**: The title bar of the Simidude window now shows the URL you can use with a browser to access it's entries- if http access is enabled.

This version is recommended for all users.
