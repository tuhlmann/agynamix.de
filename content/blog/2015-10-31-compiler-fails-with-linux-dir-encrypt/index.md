---
slug: compiler-fails-with-linux-dir-encrypt
date: 2015-10-31
title: "Scala compiler fails with Linux directory encryption"
author: "Torsten Uhlmann"
tags: ["Scala", "Linux", "Ubuntu"]
categories: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

I'm always quiet excited when a new release of my currently favorite Linux OS appears and so I was installing shiny Ubuntu 15.10 on a test machine a few days ago.

There aren't many visible changes even compared to 14.04 which I use for daily work. Still, there is progress and excitement lies in the new...

Ubuntu- and I would guess any decent Linux distribution- offers a few out of the box ways to encrypt your data.

One way is to let it reformat you disc the it likes it and encrypt everything (except the `/boot` partition).

The other out of the box option is to choose the option to encrypt the users home directory only.

If neither of these options suits you, maybe because you can't allow Ubuntu to wipe out all your hard drive, you can set up encryption manually. That's what I do usually following [this recipe](https://wiki.ubuntuusers.de/system_verschl%C3%BCsseln), here's the [Google translation](https://translate.google.com/translate?sl=de&tl=en&js=y&prev=_t&hl=de&ie=UTF-8&u=https%3A%2F%2Fwiki.ubuntuusers.de%2Fsystem_verschl%25C3%25BCsseln&edit-text=&act=url) for all non german readers.

But back on track to the topic of this article. For this installation I was trying to encrypt just the home folder, not the whole disk.

Internally Linux uses a different mechanism for this. Encrypting the whole partition will setup the logical volume manager to create logical volumes within an encrypted partition. The above mentioned article describes the procedure in greater detail.

Encrypting just the home folder uses a layer of [eCryptfs](http://ecryptfs.org/) for this procedure.

All great, no problems so far. The positive thing of this setup is that I only have to enter one password when booting my machine, not one for the encrypted drive and one to log in as me. The downside of course is it only encrypts the home folder. This may or may not be what you need.

On to [Scala](http://scala-lang.org/) the main work horse for daily projects.

Compiling my current project suddenly threw a baffling IOException saying file name is too long!

After a bit of [googling](https://github.com/dcaoyuan/nbscala/issues/9) I learned that this is caused by Scala's default behavior to create veeerrry long filenames.

The workaround apparently is to limit the length of the generated class file names via `-Xmax-classfile-name`, but there are [drawbacks](https://groups.google.com/forum/#!msg/scala-internals/hNWuwWBJCOg/GwnqXxjnK58J).

So, I didn't bother too much with this error but went ahead and set up encryption the usual way, encrypting the whole partition.

If this article saves you some time along the sometimes bumpy road of software interaction that would be awesome...
