---
title: "Community Meeting am 04.04.2025"
description: "Vielen Dank an alle, die heute am Community Meeting teilgenommen haben! Hier findet ihr eine kurze Zusammenfassung mit den wichtigsten Infos, Ankündigungen und Diskussionspunkten."
pubDate: 2025-04-04
language: "de"
category: "Community"
authors: 
    - jkoblitz
tags: [Release, Community]
---


Vielen Dank an alle, die heute am Community Meeting teilgenommen haben!
Wie versprochen ist hier die Zusammenfassung mit den wichtigsten Infos, Ankündigungen und Diskussionspunkten.

## Neues Release: OSIRIS Version 1.2.1

📢 Die neue Version **1.2.1** wurde am 03.04.2025 (gestern) veröffentlicht. Mehr auf 👉🏻 [Github](https://github.com/OSIRIS-Solutions/osiris/releases/tag/v1.4.1).

!!! warning "Wichtige Hinweise"

    Es gibt Änderungen am **LDAP-Interface**, daher sollte der **Login vor dem Livegang getestet** werden. Außerdem wurde ein **Maintenance-Modus** eingeführt, der die Wartung erleichtert.


Einen Überblick über die wichtigsten neuen Funktionen findet ihr hier:

<!-- more -->

### 🏢 Organisationen

Externe Organisationen wurden als eigene Entität eingeführt. Sie lassen sich automatisch über ROR-IDs anlegen und sind mit Projekten sowie Verbundinfrastrukturen verknüpfbar. Eine neue Übersichtsseite zeigt alle relevanten Informationen. ⚠️ Achtung: Für die Bearbeitung müssen neue Rechte vergeben werden, das kann OSIRIS nicht automatisch machen.

Es gab dazu auch die Frage, ob es ein Datenfeld gibt, mit dem man Organisationen zu Aktivitäten hinzufügen kann. Das ist zurzeit noch nicht vorhanden, aber ebenfalls geplant und wird kurzfristig hinzugefügt.

### 🧪 Forschungsinfrastrukturen

Forschungsinfrastrukturen können nun direkt in OSIRIS angelegt und verwaltet werden. Die Datenfelder orientieren sich am neuen **KDSF 2.0**. Infrastrukturen lassen sich mit Personen und Aktivitäten verknüpfen, inklusive Zeiträumen, Rollen und VZÄs. Personen mit der Rolle „Reporter“ werden jährlich zur Aktualisierung aufgefordert. Eine Statistikseite erlaubt Auswertungen, wie sie im KDSF gefordert werden. Auch Verbundinfrastrukturen mit kooperierenden Einrichtungen sind abbildbar. Die Daten werden über die API bereitgestellt. ⚠️ Bitte denkt daran, dass Infrastrukturen zentral eingeschaltet (im Bereich Funktionen) und auch hier neue Rechte vergeben werden müssen.

Es gab auch die Frage, ob Nutzungszahlen von außen automatisiert übernommen werden können. Dies ist aber aktuell nur manuell möglich ist, da die externen Systeme oftmals keine passende Schnittstelle bieten. Außerdem ist es für max. 5 Zahlen pro Infrastruktur pro Jahr vielleicht etwas viel Aufwand.

### ⚙️ Kleinere Verbesserungen

Das Status-Feld wurde erweitert (z. B. mit „in Vorbereitung“) und eine erweiterte Logik macht es für mehr Anwendungsfälle nutzbar. Außerdem gibt es noch viele weitere kleine Verbesserungen, die ich nicht im Detail zeigen konnte, Custom Fields unterstützen z.B. jetzt auch klickbare URLs.

### 🔐 LDAP Sync

Ein neues LDAP-Interface erlaubt die lesende Synchronisation von Nutzer:innen. Bestimmte Attribute können für die Synchronisation definiert werden und sind im OSIRIS-UI dann schreibgeschützt. Für die automatische Synchronisation gibt es ein PHP-Script, das mit CRON ausgeführt werden kann (`php jobs/synchronize_users.php`). Ein Zeitstempel zeigt die letzte Ausführung an. Die eindeutige Nutzer-ID wird nun gespeichert, um Probleme bei Namensänderungen zu vermeiden – eine dauerhafte Lösung ist in Arbeit.

### 🐳 Docker Support

Ein großes Dankeschön an **Paul Gaida**, der OSIRIS in Docker gepackt hat! Die Anleitung zur Einrichtung findet ihr hier: 👉 [OSIRIS Docker Setup](https://github.com/OSIRIS-Solutions/osiris/blob/master/docker.md)

Ein offizielles Docker-Image auf Docker-Hub steht noch aus, wird aber später noch nachgeliefert.

Severin (LIB) berichtete über sein Container-Setup mit SSL und die Möglichkeit, Updates ohne Downtime durchzuführen.

Außerdem wurde ein neuer Testdatensatz angeteasert, der in Zukunft für Testzwecke und als Entwicklungsumgebung dienen kann. Er soll dann auch öffentlich zur Verfügung gestellt werden.

## Diskussion & Fragen

### 🔓 Open Access Status

Es wurde noch mal darauf hingewiesen, dass das in der Vergangenheit standardmäßig voreingestellte Datenfeld „openaccess“ nicht den Status (z.B. gold oder bronze) aufnimmt und für die Leibniz-Abfrage zu Open Access-Publikationen daher nicht geeignet ist. Es sollte dafür besser das Datenfeld mit openaccess-status ersetzt werden. Es gab noch weitere Diskussionen zu diesem Punkt und der Wunsch kam auf, „diamond“ als Status hinzuzufügen. Es wurde auch bemerkt, dass dieses Feld von OpenAlex auch ausgeliefert wird.

### 💡 Idee: Credit Giving im KDSF

Jochen sprach sich für eine genauere Abbildung von Schöpfungsleistung bei Aktivitäten aus. Julia erklärte, dass dies eine größere Erweiterung darstellen würde, aber grundsätzlich möglich ist.

### 📊 Kurzer Ausblick: weitere Statistik-Seiten in Entwicklung

Es gab außerdem einen kurzen Ausblick auf die aktuelle Entwicklung, die verschiedene Statistiken hinzufügt. Diese orientieren sich an den Statistiken der Infrastrukturen. Es ist bereits eine umfangreiche Statistik-Seite für Lehre vorhanden und an Aktivitäten und Projekten wird zurzeit gearbeitet.

> 📬 Außerdem gab es noch die Frage, wie **Änderungswünsche und Probleme am besten kommuniziert** werden sollen. Die beste Art und Weise ist dabei natürlich [per Ticket (Issue) im Github](https://github.com/OSIRIS-Solutions/osiris/issues), da es für alle Nutzenden offen und transparent ist und sich Code-Änderungen und Releases damit verknüpfen lassen. Dadurch kann man später auch noch nachvollziehen, welche Probleme mit welchen Updates behoben wurden. Falls keine Github-Account verwendet werden kann/möchte, darf aber natürlich auch gern per Email kommuniziert werden. Bitte aber darauf achten, dass das Problem bestmöglich beschrieben wird (vor allem mit der Frage im Hinterkopf: wie lässt sich das Problem reproduzieren?).

Wenn ihr Ergänzungen oder Korrekturen habt, meldet euch gern. Vielen Dank für eure Beteiligung – wir freuen uns schon aufs nächste Mal! 🙌

## 📅 Save the Date

Den nächsten Termin könnt ihr euch auch schon mal im Kalender vormerken: **18. Juni 2025 um 13:00 Uhr** (dieses Mal an einem Mittwoch, da der Donnerstag in manchen Bundesländern ein Feiertag ist ☺️).