---
slug: nagios-und-asterisk-nagios-lernt-sprechen
date: 2006-03-01
title: "Nagios und Asterisk (Nagios lernt sprechen)"
author: "Torsten Uhlmann"
categories: ["news", "programming"]
keywords: []
description:
banner: "./banner.jpg"
bannerCredit: "Photo by Torsten Uhlmann"
---

Da wir ja bei uns eine [Asterisk](http://www.asterisk.org)-Telefonanlage im Einsatz haben (Hint: wir verkaufen die auch!) und außerdem ein Nagios-Monitoringsystem (NMS: Network Management System), lag die Idee ja nahe, Nagios über Asterisk reden zu lassen. Dazu habe ich folgendes gemacht: Im Nagios ein neues Kommando notify-by-asterisk angelegt, dass im entsprechenden Kontakt angegeben wird. Das Kommando selbst ist recht simpel:

# 'notify-by-asterisk' command definition define command{ command_name notify-by-asterisk command_line /usr/local/nagios/bin/asterisk_call.sh $NOTIFICATIONTYPE$ $SERVICEDESC$ $HOSTALIAS$ $SERVICESTATE$ $SERVICEOUTPUT$ }

Das Skript asterisk\_call.sh ist ein einfaches Shellskript, das zuerst einen Textstring erzeugt, diesen dann durch Festival jagt (erzeugt eine Wav-Datei) und anschließend eine Asterisk-Call-Datei erzeugt, die dann in das outgoing-Verzeichnis von Asterisk kopiert wird. Asterisk nimmt die Datei, generiert einen Anruf und spielt die wav-Datei ab.

![103-0391\_img.jpg](/img/uploads/2006/03/103-0391_img.jpg "103-0391_img.jpg")

Die Lösung funktioniert auf unserem System. Damit sie auch woanders läuft müssen noch ein paar Einstellungen vorgenommen werden:

-   visudo ausführen: Der Nagios-User (bei mir: nagios) braucht das Recht, eine Datei als User www-data (unter dem läuft Asterisk bei mir. Ist der Web-User weil ich zusätzlich noch AMP im Einsatz habe und hier gibt es Rechtekonflikte, wenn AMP als Webapplikation nicht auf die Asteriskdateien zugreifen darf.) in das Asterisk outgoing-Verzeichnis (*/var/spool/asterisk/outgoing*) zu dürfen:
-   nagios ALL = (www-data NOPASSWD:) /bin/cp

-   Die Datei asterisk\_call.sh anpassen und für nagios ausführbar in */usr/local/nagios/bin* (oder woanders, dann aber das Nagios-Kommando anpassen) zur Verfügung stellen:

<!-- -->

#!/bin/sh

NOTIFICATIONTYPE=$1 SERVICEDESC=$2 HOSTALIAS=$3 SERVICESTATE=$4 SERVICEOUTPUT=$5

OUT_STR=`/usr/bin/printf "%b" "This is the Nagios Monitoring System sending a \ $NOTIFICATIONTYPE notification. The Service $SERVICEDESC at host $HOSTALIAS \ is in state $SERVICESTATE. This is the service output: $SERVICEOUTPUT."`

play_file="/tmp/asterisk_nagios" bf="$play_file.wav" cf="$play_file.call" lf="$play_file.log"

CHANNEL="SIP/(peer)/(no to dial)" CALLER_ID="Nagios " echo "$OUT_STR" > $lf echo "$OUT_STR" | /usr/bin/text2wave -scale 1.5 -F 8000 -o $bf echo "Channel: $CHANNEL" > $cf echo "WaitTime: 60" >> $cf echo "MaxRetries: 3" >> $cf echo "CallerId: $CALLER_ID" >> $cf echo "Application: Playback" >> $cf echo "Data: $play_file" >> $cf sudo -u www-data cp $cf /var/spool/asterisk/outgoing rm $cf

Das wars. Festival ist nur als englische Version erhältlich (es gibt zwar deutsche Anpassungen, hab ich aber noch nicht ausprobiert), es gibt jedoch unter <http://www.cepstral.com> sehr gut klingende englische und deutsche Stimmen- die kosten so um die 30$. Viel Spaß.
