---
slug: how-to-migrate-your-thunderbird-mail-to-outlook
date: 2006-08-15
title: "How to migrate your Thunderbird mail to Outlook"
author: "Torsten Uhlmann"
tags: ["business", "programming"]
categories: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

Now, Thunderbird is a wonderful email client. I like it. I really do! For instance there is that nifty little feature which let's you edit a sent mail as if it were brand new. Cool. But in a corporate environment where everybody else is exchanging contacts, appointments and other PIM data via Outlook it's just uncool to open you vcard files with an ordinary editor. So I decided to jump upon the Outlook wagon. But I didn't want to loose my Thunderbird mail archive which keeps mails of my different projects as reference points. The problem however is that Outlook can't directly import mail from Thunderbird, only from Eudora and Outlook Express. Outlook Express in turn can import from older versions of Netscape Communicator, but not from Thunderbird. But I wouldn't write this entry if I didn't succeed. So here's what I did:

-   I installed Netscape Communicator 4.78 ([here](http://download.freenet.de/download.php?file_id=3745&download=Netscape%20Communicator)) and created an email account in Netscape Messenger. After that I closed the Messenger
-   Netscape put my user data into `C:\\Programme\\Netscape\\Users\\tuhlmann`. Within that directory there is a folder called 'Mail'. Rename it and create a new folder 'Mail'.
-   Copy the content of Thunderbirds 'Local Folders' directory into this 'Mail' dir. Thunderbird usually stores it's profiles under `C:\\Dokumente und Einstellungen\\Anwendungsdaten\\Thunderbird`. Of course on an english windows the names would differ.
-   After copying the tree remove all the .msf files (in the new location, not on Thunderbird's side)
-   Then start Netscape Messenger. You should now see all your mails and folders. Highlight all folders and choose File->Compress. This will create Netscapes old index. After that close Netscape again.
-   Then start Outlook Express and create a mail account there. Then say Import from Netscape Communicator and choose the 'Mail' directory of Netscape Messenger. The import should begin now. In the end all your mails should now be available from Outlook Express. Now you close Outlook Express
-   Last step: Start Outlook and create- yep, you guessed it- a mail account. No import your mail from Outlook Express. In the end, all your mail is available from Outlook (I used Outlook 2003 here but I guess it will work with older versions, too.).

You still have to recreate all filters. And I did not look into migrating the spam filter training data. Maybe this is a product idea: Create a mail tool migrator which can migrate form/to different mail systems... I hope this little howto will be useful for someone...
