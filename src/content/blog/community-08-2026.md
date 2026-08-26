---
title: "Community Meeting am 20.08.2026"
description: "Vielen Dank an alle, die heute am Community Meeting teilgenommen haben! Hier ist die Zusammenfassung mit den wichtigsten Infos, Ankündigungen und Diskussionspunkten."
pubDate: 2026-08-26
language: "de"
category: "Community"
authors: 
    - jkoblitz
tags: [Release, Community]
heroImage: "../../assets/community-08-2026.png"
---


Bei diesem Community Meeting haben wir 18 Teilnehmer:innen gezählt, die sich über die aktuellen Entwicklungen in OSIRIS ausgetauscht haben. Vielen Dank an alle, die dabei waren! 

Hier findet ihr [die gezeigte Präsentation als PDF-Datei](/docs/OSIRIS%20Community%2026-08%202.1.pdf) und im folgenden habe ich die wichtigsten Themen und Neuerungen zusammengefasst, die wir im Meeting besprochen (oder vergessen zu besprechen) haben.

## OSIRIS v2.1 ist da!

Die neuste Version von OSIRIS bringt euch neue Features und Verbesserungen von bestehenden Funktionen.

### ORCID-Integration

Die ORCID-Integration ist nun in OSIRIS verfügbar. Mit dieser Funktion können Nutzer:innen ihre ORCID iD mit ihrem OSIRIS-Profil verknüpfen, um ihre wissenschaftlichen Arbeiten und Aktivitäten automatisch zu synchronisieren. Dafür muss zuerst zentral in OSIRIS die ORCID-Integration aktiviert und ein API-Zugang hinterlegt werden. Danach können Nutzer:innen ihre ORCID iD in ihrem Profil hinterlegen und die Synchronisation starten.

Wir haben im Community Meeting den gesamten Prozess der Einrichtung und Nutzung der ORCID-Integration vorgestellt – von der Aktivierung in OSIRIS, über die Verknüpfung der ORCID iD im Nutzerprofil, bis hin zur Synchronisation der wissenschaftlichen Arbeiten und Aktivitäten.

Weitere Informationen zur Einrichtung findet ihr im [Wiki](https://wiki.osiris-app.de/admins/content/orcid-integration).


### Journale und Statistiken

Wir haben gezeigt, wie die Administration von Journalen angepasst wurde, sodass jetzt alle Einstellungen an einem zentralen Ort vorgenommen werden können. Zudem wurden die neuen Einstellungsmöglichkeiten gezeigt, wie zum Beispiel die Benennung des Impact Factors und das Hinzufügen von Custom Fields für Journale. Außerdem haben wir die neuen Statistiken vorgestellt, die es ermöglichen, die Nutzung von Journalen und deren Impact im Detail zu analysieren. Dazu gehören auch detaillierte Auswertungen in Tabellen und Boxplots der Custom Fields.

### Das Forschungsspektrum: transparenter und flexibler

Wie bereits in Version 2.0 vorgestellt, basiert das sogenannte Forschungsspektrum auf KI-gestützten Vorschlägen, die automatisch aus OpenAlex integriert werden. Allerdings war es teilweise undurchsichtig, welche Publikationen für bestimmte Spektrumthemen in Nutzerprofilen oder in Gruppenprofilen verantwortlich waren. Besonders bei nach eigener Sicht nicht nachvollziehbaren Zuordnungen war es für die Nutzer:innen schwierig, die Publikationen zu identifizieren, die für die Zuordnung verantwortlich waren.

In Version 2.1 haben wir deshalb einen Link zu jedem aggregierten Spektrumthema hinzugefügt, der die Nutzer:innen direkt zu den Publikationen führt, die für die Zuordnung verantwortlich sind. So können die Nutzer:innen nachvollziehen, welche Publikationen zu welchem Spektrumthema gehören und bei Bedarf Anpassungen vornehmen. Denn zusätzlich ist es jetzt möglich, die Zuordnung von Publikationen zu Spektrumthemen manuell zu ändern. So können Nutzer:innen selbst entscheiden, welche Publikationen für ein bestimmtes Spektrumthema relevant sind und welche nicht.

Falls Änderungen rückgängig gemacht werden müssen, ist auch dies jederzeit möglich. So wird das Forschungsspektrum noch transparenter und flexibler für die Nutzer:innen.

Besonders relevant ist dies, da das Forschungsspektrum jetzt auch über die Portfolio-API ausgeliefert und entsprechend im neuen Portfolio angezeigt werden kann. Mehr Infos dazu findet ihr [hier](https://blog.osiris-app.de/blog/26-08-10_new-portfolio/).


### Mehr Admin-Einstellungen

Wir haben im Community Meeting auch die neuen Admin-Einstellungen vorgestellt. So könnt ihr beispielsweise im Bereich *Design* jetzt eigenes CSS hinzufügen und damit das Erscheinungsbild eures Portfolios individuell anpassen. Als Beispiel haben wir da eine Nutzeranfrage, ob man die Farbe der Open-Access-Icons ändern kann. Mit dem neuen CSS-Feature ist dies jetzt möglich.

Auch Aktivitäten haben mehr Funktionen bekommen. Im Form-Builder könnt ihr jetzt die Sichtbarkeit von Feldern für bestimmte Rollen steuern. So können beispielsweise bestimmte Felder nur für Admins sichtbar sein, während andere Rollen diese Felder nicht sehen können. Dies ermöglicht eine noch individuellere Anpassung der Formulare an die Bedürfnisse der Nutzer:innen.

Außerdem kann man die Auslieferung von Feldern in der Portfolio-API ebenfalls steuern, sodass nicht alle Felder in der API verfügbar sind, sondern nur die, die man dafür eingestellt hat. Besonders relevant ist dies für Custom Fields, die zuvor unabhängig ihrem Inhalt immer in der Portfolio-API ausgeliefert wurden. Dies kann nun individuell gesteuert werden, sodass nur die relevanten Felder in der API verfügbar sind.

Zuletzt haben wir eine Möglichkeit vorgestellt, neben Pflichtfeldern auch *Empfohlene Felder* zu definieren. Diese Felder sind nicht zwingend auszufüllen, sollen aber in einem kommenden Release im Interface hervorgehoben werden, um die Nutzer:innen darauf aufmerksam zu machen, dass diese Felder für die Administration relevant sein könnten. So können Admins die Nutzer:innen gezielt auf bestimmte Felder hinweisen, ohne dass diese zwingend ausgefüllt werden müssen. Des Weiteren dient dieser Schritt auch als Vorbereitung für die geplante Einführung eines *Quality Scores*, der in einem späteren Release die Qualität der Daten in OSIRIS bewerten und Admins dabei helfen, die Datenqualität gezielt zu verbessern und auf problematische Aktivitäten hinweisen soll.

Zu guter Letzt gab es auch noch Neuerungen bei den Templates von Aktivitäten. Es gibt neue Datumsformate, durch die die Darstellung von Datumsangaben in Aktivitäten flexibler gestaltet werden kann. So sind beispielsweise auch APA-konforme Datumsangaben möglich, die für die Darstellung von Publikationsdaten relevant sind. Mehr Infos zu den neuen Datumsformaten und allen damit verbundenen Möglichkeiten findet ihr im [Wiki](https://wiki.osiris-app.de/admins/reports_tools/templates/#4-datumsformatierung-dateformat).


### Neue Aggregationsmöglichkeiten in der erweiterten Suche

Die erweiterte Suche in OSIRIS wurde um neue Aggregationsmöglichkeiten erweitert. So können Nutzer:innen jetzt nicht nur Daten nach einzelnen Kriterien aufsummieren, sondern auch den Mittelwert, den Median und die Summe von bestimmten numerischen Feldern berechnen lassen. 

So ist es beispielsweise nicht nur möglich, die Anzahl der Lehraktivitäten pro Jahr zu zählen, sondern auch die Summe der Semesterwochenstunden (SWS) zu berechnen. Dies ermöglicht eine noch detailliertere Analyse der Daten in OSIRIS und bietet den Nutzer:innen mehr Flexibilität bei der Auswertung ihrer Daten.


### Gruppenfotos

Eine Sache, **die ich im Meeting vergessen habe zu erwähnen**, ist die Möglichkeit, Gruppenfotos zu einzelnen Organisationseinheiten in OSIRIS hochzuladen. Diese Funktion wurde von der Community gewünscht und ermöglicht es, Gruppenfotos direkt in den Gruppenprofilen anzuzeigen. So können Nutzer:innen ihre Gruppen visuell präsentieren und die Zusammenarbeit innerhalb der Gruppe fördern, ohne dass diese umständlich in die Beschreibung eingefügt und für Übersetzungen mehrfach hochgeladen werden müssen. Die Gruppenfotos lassen sich mit einem Untertitel und einen Bildnachweis versehen, sodass die Urheber:innen der Fotos korrekt angegeben werden können. Die Gruppenfotos werden in den Gruppenprofilen angezeigt und können auch in der Portfolio-API abgerufen werden. So können sie auch in externen Systemen wie Webseiten oder Intranets genutzt werden.


## Das neue Portfolio

Wir haben außerdem das neue Portfolio vorgestellt, das in Version 2.1 eingeführt wurde. Wir haben Portfolio komplett überarbeitet und einen [neuen Webauftritt entwickelt, der über Portfolio informiert](https://osiris-portfolio.de).

Details findet ihr auf den unten angehängten Folien und hier im Blog, wo wir ausführlich auf die neuen Funktionen und Möglichkeiten eingehen: [Das ist das neue OSIRIS Portfolio](https://blog.osiris-app.de/blog/26-08-10_new-portfolio/).



## Weitere Themen

Wir haben ebenfalls über eingeschränkten Support im September informiert und den Umzug des Blogs auf die neue Seite [blog.osiris-app.de](https://blog.osiris-app.de) angekündigt. Außerdem haben wir über die Community Days im Januar informiert und ein paar Details zu den bisherigen Anmeldungen verraten. Eine Anmeldung ist noch möglich, die Plätze sind aber begrenzt. Wer sich anmelden möchte, kann dies [hier](https://osiris-app.de/community-days) tun.

Außerdem haben wir kurz erwähnt, dass wir einen neuen Anbieter für unseren OSIRIS Newsletter nutzen. Falls die letzte Ausgabe des Newsletters nicht bei euch angekommen ist, wäre es lieb, wenn ihr einmal euren Spam-Ordner prüft und die Email als "kein Spam" markiert. So können wir sicherstellen, dass ihr auch in Zukunft alle wichtigen Infos rund um OSIRIS erhaltet. Wer sich für den Newsletter anmelden möchte, kann dies [hier](https://osiris-app.de/#community) tun.


## Save the Date

Das nächste Community Meeting wird am **28.10.2026 um 13 Uhr** stattfinden. Um immer auf dem Laufenden zu bleiben, könnt ihr euch auch für unseren Newsletter anmelden oder den Community-Kalender abonnieren. So verpasst ihr keine wichtigen Termine und Neuigkeiten rund um OSIRIS. Beide Optionen findet ihr im [Community-Bereich auf der OSIRIS Homepage](https://osiris-app.de/#community).


