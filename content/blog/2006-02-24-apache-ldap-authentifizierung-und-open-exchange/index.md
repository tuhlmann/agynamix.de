---
slug: apache-ldap-authentifizierung-und-open-exchange
date: 2006-02-24
title: "Apache LDAP Authentifizierung und Open-Exchange"
author: "Torsten Uhlmann"
categories: ["programming"]
keywords: []
description:
banner: "./banner.jpg"
bannerCredit: "Photo by Torsten Uhlmann"
---

Open-Exchange ist ja eine wunderbare Sache. Die schönste und am schwierigsten zu installierende Groupware, die mir bis jetzt untergekommen ist. Nun möchte ich gern unsere Subversion-Repositories über mod\_svn zugänglich machen und zur Authentifizierung die LDAP-Daten nutzen, die Open-Exchange sowieso schon anlegt. Also:

-   neue Gruppe "developers" angelegt mit addgroup\_ox
-   dann meinen User mittels addusertogroup\_ox zu dieser Gruppe hinzugefügt

Schön, noch alles im apache.conf (/etc/apache2/conf.d/websvn) eingestellt... hm, Apache wollte nicht. Kann den User nicht zu dieser Gruppe zuordnen. Nach einer Weile forschen habe ich dann den Grund herausgefunden. Apache erwartet in dem member (hier: memberUid) Attribut einen Verweis der Form *uid=tuhlmann,ou=Users,ou=OxObjects,dc=agynamix,dc=de* , OX schreibt aber nur den Usernamen rein. Hm, also hab ich die addusertogroup und deluserfromgroup Skripte etwas erweitert, sodass 2 Einträge geschrieben werden, einer für OX (den braucht der wirklich in dieser Form) und den, den Apache möchte. Voila. Hier die Einstellungen für den Apache Authentifizierungsmechanismus für Subversion:

... AuthLDAPUrl "ldap://localhost:389/ou=Users,ou=OxObjects,dc=agynamix,dc=de?uid?sub?" AuthLDAPGroupAttribute "memberUid" AuthType basic AuthName "Subversion Entwicklerzugang" require group cn=developers,ou=Groups,ou=OxObjects,dc=agynamix,dc=de ...

Nun noch die 2 Änderungen:

addusertogroup_ox

addusertogroup_ox

addusertogroup\_ox:

UID_PART=`echo "$GROUP_BASEDN" | $AWK_BIN -F , '{ print $2","$3","$4 }'` UID_FULL="uid=$USER,ou=Users,$UID_PART" echo "memberUid: $UID_FULL" >> $TMPDIF

Unter die Zeile

echo "memberUid: $USER" >> $TMPDIF

anfügen. Ähnlich in deluserfromgroup\_ox:

UID_PART=`echo "$GROUP_BASEDN" | $AWK_BIN -F , '{ print $2","$3","$4 }'` UID_FULL="uid=$USERNAME,ou=Users,$UID_PART" echo "memberUid: $UID_FULL" >> $TMPDIF

Nach diesen Änderungen sollte man seine Apache Authentifizierung gegen den Open-Exchange LDAP laufen lassen können.
