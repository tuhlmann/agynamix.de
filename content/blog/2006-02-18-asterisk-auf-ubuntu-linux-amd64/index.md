---
slug: asterisk-auf-ubuntu-linux-amd64
date: 2006-02-18
title: "Asterisk auf Ubuntu Linux (AMD64)"
author: "Torsten Uhlmann"
categories: ["business", "news"]
keywords: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---

Da denkt man nun, man hat einen tollen Prozessor. Ha, Pustekuchen! Wenn man sich außerhalb der i386 Gewässer bewegt, darf man an manchen Stellen zum eigenen Schraubenzieher greifen. Aber jetzt läuft es- [Asterisk](http://blog.agynamix.de/wp-admin/www.asterisk.org) (1.2.1) zusammen mit [AMP](http://coalescentsystems.ca/index.php?option=com_content&task=view&id=31&Itemid=57 "Asterisk Management Portal") auf unserem Ubuntu-Server. Ich bin dabei, für den ganzen Kram eine Installanleitung zu verfassen, hier schonmal ein paar Tipps im Voraus: Für die Installation habe ich mir den Bristuff-Patch von [www.junghanns.net](http://83.137.99.169/~junghanns.net/downloads/bristuff-0.3.0-PRE-1f.tar.gz) heruntergeladen (Version mit dem f hintendran), dazu dann noch den passenden [Florz-Patch](http://zaphfc.florz.dyndns.org/):

ins bristuff-Paket wechseln, ./download.sh tipseln und warten

danach Florz-Patch einspielen: `zcat /path/to/zaphfc_0.3.0-PRE-1f_florz-11.diff.gz | patch -p1`

dann in den Verzeichnissen zaphfc und zaptel die Makefiles anpassen: dem Schalter **KFLAGS** wird noch folgendes hinzugefügt: -mcmodel=kernel. Wenn man das nicht macht, lässt sich das Ganze zwar übersetzen, aber die Kernel-Module können nicht geladen werden. Dumm das. Das bringt uns zum nächsten: die Kernelquellen müssen installiert und konfiguriert sein:

-   aus dem Verzeichnis /boot die entspr. config-Datei ins Kernel-Source Verzeichnis kopieren (nach .config), dann mal make menuconfig ausführen, exit auswählen und Konfiguration speichern. Danach: make prepare-all. Die Quellen werden gesucht unter /usr/src/linux bzw. /usr/src/linux-2.6. Man sollte beide symbolische Links anlegen.

Mit diesen Schritten sollte sich Asterisk übersetzen lassen. Aus dem bristuff-Verzeichnis ./compile.sh aufrufen.

Nach der Installation des AMP-Moduls musste ich noch folgende Änderungen durchführen:

-   der User, der Asterisk ausführt, ist bei mir www-data:www-data. Es gibt Probleme, wenn ein Teil als asterisk-User läuft und der Web-Teil als www-data, daher diese Anpassung. Das muss im Script /usr/sbin/amportal geändert werden.
-   in /var/www/recordings/modules/settings.module: Das ARI Modul erwartet vom Asterisk Call Manager die Rückmeldung: "Asterisk Call Manager 1.0", das "1.0" muss durch "1.2" ersetzt werden. 2 Positionen sind hier zu ändern.
-   in /var/lib/asterisk/agi-bin/dialparties.agi gibt es 2x die Zeile `$tn->waitfor('/0\\n$/');`, die muss geändert werden nach: `$tn->waitfor('/2\\n$/');`, sonst wartet das Teil ewig mit dieser Meldung im Log: "dialparties.agi: Checking CW and CFB status for extension xxx". Hu, ich kann die Haare gar nicht zählen, die mich das gekostet hat!

Nuja, mit ein bißchen Glück sollte das Ganze jetzt funktionieren.
