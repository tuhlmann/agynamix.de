---
slug: initialize-swt-action-accelerators-in-swt-34
date: 2008-11-11
title: "Initialize SWT Action accelerators in SWT 3.4"
author: "Torsten Uhlmann"
categories: ["english", "programming"]
keywords: []
description:
banner: "./banner.jpg"
bannerCredit: "Photo by Torsten Uhlmann"
---

While developing my new application [Simidude](http://www.simidude.com) I ran about a funny problem with JFace's MenuManager. I develop Simidude (an easy to use cross platform clipboard synchronizer and Drag & Drop tool- it's exciting, [you should look at it](http://www.simidude.com) :)) using Java 5 and the SWT/JFace libraries from [Eclipse](http://www.eclipse.org). SWT provides Java with a platform specific look and feel which makes my application appear native on all supported (Windows, Mac and Linux) platforms. Because I want the application to be small and carry as little overhead as possible I do not use the Eclipse RCP platform but rather just the GUI libraries. Now when writing a JFace application you subclass ApplicationWindow for your application's main window. To create a menu bar you overwrite the method "MenuMnager createMenuManager()" in which you create your top level menu items like "File", "Edit" or "Help" as well as the Actions that you plug into them. An Action basically wraps up the information needed to display a menu entry as well as some code to do something. Actions can be reused to be shown in the menubar as well as in the toolbar. An Action can hold for instance an image object, a tooltip text or an accelerator definition. To set an accelerator for my "Quit" action I'd do something like this:

> setAccelerator(SWT.MOD1 + 'Q');

"SWT.MOD1" is replaced with the platform specific modifier like "CTRL" on Windows and Linux and "Command" (Apple key) on Mac. Now one would expect that you could actually USE this key combination in a running application. Far from it. I had to click on the menu with the mouse, then do something in the application and then the keys would work. Sounds like an initialization problem. So I filed a bug with Eclipse. Turned out they had "optimized" the menu creation code in Eclipse 3.4 which would actually cause this pain. Btw it works fine if you're in an Eclipse plugin or RCP applications. And it also works if you're using plain SWT and are not using Actions but creating the menu entries the SWT style. Turns out this is some weird JFace initialization thing. But the good news is there is a workaround: After creating your menubar you need to **initialize** it. This is my initialization routine which is called in the beginning of the life cycle:

> public void initializeApplicationGUI() { makeActions(); addMenuBar(); addToolBar(SWT.TOP | SWT.FLAT | SWT.HORIZONTAL | SWT.SHADOW\_OUT ); addStatusLine(); **create(); getMenuBarManager().updateAll(true);** }

If you add the last two lines suddenly your menu flies. I don't know how long I digged around for such a stupid bug... Anyway I hope I could save some of your time!
