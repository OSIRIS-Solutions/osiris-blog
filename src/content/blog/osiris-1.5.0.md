---
title: "OSIRIS 1.5.0 ist jetzt verfügbar!"
description: "Endlich. Es hat 267 Commits und mehr als 32.000 Zeilen Code gebraucht, aber OSIRIS Version 1.5.0 ist jetzt offiziell veröffentlicht! 🎉 Danke für eure Geduld und euren Support auf dem Weg hierher."
pubDate: 2025-07-31
language: "de"
category: "Release"
authors: 
    - jkoblitz
links:
  - Changelog: "../../home/news/#version-150"
tags: [Release]
---


Endlich. Es hat `267` Commits und mehr als `32.000` Zeilen Code gebraucht, aber OSIRIS Version 1.5.0 ist jetzt offiziell veröffentlicht! 🎉 Danke für eure Geduld und euren Support auf dem Weg hierher.

## :octicons-rocket-16: Was ist neu in Version 1.5.0?

In dieser Version haben wir uns mal wieder selbst übertroffen und eine Menge neuer Features, Verbesserungen und Bugfixes implementiert. Besonders stolz sind wir auf die Änderungen im Admin-Interface, die OSIRIS noch flexibler und benutzerfreundlicher machen.

Die vollständige Liste der Änderungen findet ihr im [Changelog](/home/news.md). Hier sind die Highlights:

- Komplett überarbeitete Projekt- und Antragverwaltung: Projekte bilden jetzt den gesamten Lebenszyklus ab, inkl. konfigurierbarer Typen, Custom Fields, Antrag-Workflow mit Status, Filter- und Statistikfunktionen sowie verbesserter Darstellung. Außerdem gibt es Anträge als neue Entität: Verwaltung von beantragten, bewilligten und abgelehnten Projekten inkl. Uploads, Rechten & Statuswechseln.
- Custom Fields überall: Eigene Felder können jetzt für Projekte, Personen und Infrastrukturen definiert werden – über eine zentrale Konfiguration im Admin-Bereich.
- Neuer Adminbereich „Inhalte“: Übersicht aller Kategorien, Felder, Templates & Vokabulare. Viele Einstellungen wurden aus anderen Bereichen hierher verschoben.
- Erweiterte Benachrichtigungen & Messaging: Nachrichten an Rollen oder einzelne Nutzer:innen, verbesserte Darstellung und optional E-Mail-Benachrichtigungen für bestimmte Aktionen.
- Verbesserte Personen- und Infrastrukturdarstellung: Konfigurierbare Felder, Sichtbarkeitsoptionen, neue Vokabulare und bessere Filter.
- Events & Forschungsreisen: Neue Visualisierungen (Timelines), Filteroptionen, Formatierungen und Aktivitätsverknüpfung.
- Feintuning der Darstellung: Neue Templates für Aktivitäten, Sichtbarkeit von Kategorien steuerbar, APA-Stile, neue Widgets (z. B. Konfetti-Timeline).
- Impact-Faktoren aktualisierbar: Neue Seite für Journal-Metriken, Graphen für Quartilsverläufe, manuelle Anpassungen möglich.
- Unzählige Bugfixes und kleinere Verbesserungen: Über 100 kleinere und größere Fehler behoben und insgesamt 20 GitHub-Issues geschlossen.
- und vieles mehr!

## :octicons-alert-16: Was ist zu beachten?

Bitte beachtet, dass für das Upgrade auf Version 1.5.0 einige Änderungen an der Datenbankstruktur erforderlich sind. Stellt sicher, dass ihr ein vollständiges Backup eurer Datenbank und Dateien erstellt, bevor ihr das Upgrade durchführt. Besonders Projekte und Anträge können von den Änderungen betroffen sein, da sie jetzt eine neue Struktur haben.

Beachtet bitte auch, dass einige neue Features bei Release eventuell nicht eingeschaltet sind. Ihr könnt sie im Admin-Bereich unter "Einstellungen" > "Funktionen" aktivieren. Manche Features benötigen auch zusätzliche Rechte oder Konfigurationen, die ihr ebenfalls im Admin-Bereich vornehmen könnt.


## :octicons-code-review-16: Wie geht es weiter?

Auch wenn unglaublich viele Features bereits in dieser Version enthalten sind, haben es einige spannende Dinge nicht mehr in den Release geschafft. Wir arbeiten zum Beispiel bereits an der vereinfachten Erstellung von Folgeprojekten, Beziehungen zwischen Aktivitäten und einer Qualitätsmanagement-Pipeline, die euch ermöglichen soll, Aktivitäten durch verschiedene Prüfungsstufen zu leiten. Außerdem wird es später dieses Jahr auch noch eine ORCID-Integration geben, die euch den Zugriff auf eure ORCID-Daten direkt in OSIRIS ermöglicht.