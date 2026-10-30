---
title: "Community Meeting am 28.10.2026"
description: "Sicherheitsupdates, gesponserte Funktionen und ein Ausblick auf OSIRIS 3.0: Hier findet ihr die wichtigsten Themen und Diskussionen aus unserem Community Meeting im Oktober."
pubDate: 2026-10-30
language: "de"
category: "Community"
authors:
    - jkoblitz
tags: [Release, Community]
heroImage: "../../assets/community-10-2026.png"
---

Vielen Dank an alle, die beim Community Meeting dabei waren! Diesmal haben wir über aktuelle Sicherheitsupdates, neue Funktionen und die nächsten größeren Entwicklungsschritte gesprochen. Besonders viel Raum haben der Ausblick auf OSIRIS 3.0 und die Frage bekommen, wie ihr künftig mit einem eigenen Chatbot auf ausgewählte OSIRIS-Daten zugreifen könnt.

Hier findet ihr [die gezeigte Präsentation als PDF-Datei](/docs/OSIRIS%20Community%202026-10.pdf) und im folgenden habe ich die wichtigsten Themen und Neuerungen zusammengefasst, die wir im Meeting besprochen haben.

## Sicherheitsupdates und OSIRIS 2.1.3

In der Woche vor dem Meeting wurden zwei PHP-Sicherheitslücken bekannt. Wir haben den verfügbaren Mini-Patch sofort eingespielt und noch am selben Abend alle betreuten Instanzen aktualisiert, sobald auch die Betriebssystem-Updates verfügbar waren. Die Instanzen blieben dabei online.

Am Morgen des Meetings ist außerdem OSIRIS 2.1.3 erschienen. Das Release enthält vor allem Sicherheits- und Betriebsverbesserungen sowie Fehlerbehebungen. Wenn ihr OSIRIS 2 selbst betreibt, empfehlen wir euch ein Update.

Auch einige kleinere Neuerungen sind dazugekommen: Beim Import könnt ihr ORCID-Aktivitäten jetzt überspringen, und die Eventübersicht auf der Startseite wurde verbessert. Im Adminbereich findet ihr einen neuen Datenbankbereich mit Shortcuts für Render-Vorgänge sowie zusätzliche OSIRIS-Informationen. Ein Health Check zeigt euch unter anderem, ob benötigte Verzeichnisse beschreibbar sind und welche Upload-Limits gelten. Auch die PHP-Systemausgabe ist jetzt übersichtlicher.

Für regelmäßige Hintergrundimporte ist außerdem eine zentrale Ablage der Importprotokolle vorgesehen. Damit könnt ihr künftig direkt im Interface nachsehen, was beim letzten Import passiert ist.

Unsere Docker-Umgebung läuft bereits mit PHP 8.4. Bei MongoDB prüfen wir noch die nächsten Schritte: Ein größeres Update einer verwendeten Bibliothek könnte es ermöglichen, mit dem nächsten größeren OSIRIS-Release auch die aktuelle MongoDB-Version zu unterstützen.

Aus der Community kam außerdem der Hinweis, dass zu Version 2.1.3 noch kein Tag und kein GitHub-Release vorhanden waren. Danke dafür! Wir wollen auch für Patch-Releases wieder GitHub-Releases anlegen, damit ihr neue Versionen dort zuverlässig verfolgen könnt.

## Vier gesponserte Funktionen in Vorbereitung

Vier beauftragte Erweiterungen sind fertig entwickelt, warten aber noch auf die Freigabe der jeweiligen Kunden. Erst danach können wir sie veröffentlichen. Wegen vertraulicher Kundendaten gab es im Meeting dazu noch keine Screenshots, aber einen ersten Überblick:

- **Bedingte Formularfelder:** Eine Ja-Nein-Frage steuert, ob ein Custom Field angezeigt wird. Die Antwort lässt sich später auch zum Filtern nutzen.
- **Resource Hub:** Ein zentraler Einstieg bündelt Materialien, Plattformen und Ansprechpartner:innen. Vorgesehen sind eine Kartenansicht und eine klickbare Lounge. Die Idee kommt aus einem Netzwerk, das OSIRIS auch als Intranet nutzt.
- **News- und Redaktionsworkflow:** Mitglieder können Inhalte für Website, Newsletter oder soziale Medien vorschlagen. Eine Redaktion erstellt daraus Fassungen für die jeweiligen Kanäle und Zielgruppen. Optional können Autor:innen diese noch einmal zur Prüfung zurückbekommen.
- **Login und Kontoverknüpfung:** OSIRIS-Konten sollen neben einem institutionellen Login-System genutzt werden können, auch wenn dort nicht alle Nutzer:innen vorhanden sind. Bestehende Profile sollen sich mit dem Single Sign-on der Institution verknüpfen lassen. Dazu gehört auch eine modernisierte Login-Seite.

Wie andere OSIRIS-Bereiche sollen diese Funktionen konfigurierbar und bei Bedarf abschaltbar sein.

Da aktuell viele beauftragte Projekte in der Pipeline liegen und einige davon dringend sind, wird es bei den Community-Feature-Requests auf GitHub bis Jahresende voraussichtlich nur wenig Fortschritt geben. Kleinere Verbesserungen können sich zwischendurch trotzdem ergeben.

## Initiativen, Kooperationen und Patente

Mit **Initiativen und Objectives** planen wir eine umfangreichere Funktion, mit der ihr thematische Strukturen neben dem Organigramm abbilden könnt. Initiativen sollen der strategischen Orientierung eines Instituts dienen und sich optional mit Mitgliedern, Laufzeiten, Aktivitäten und Projekten verknüpfen lassen. Bei Bedarf können Objectives hinzukommen. Voraussichtlich kann ich euch im Dezember mehr dazu zeigen.

Auch bei **Kooperationen** sind Erweiterungen vorgesehen. Sie sollen künftig eigene Datensätze bekommen und aus den Organisationsdaten herausgelöst werden. Bestehende Einträge werden dabei migriert, damit keine Daten verloren gehen. Auf Nachfrage haben wir erläutert, was das konkret bringt: Eine Organisation kann in mehreren getrennten Zeiträumen Kooperationspartner sein. Dazu sollen sich weitere Informationen und Dokumente hinterlegen lassen.

Für **Patente** kommen zunächst zusätzliche Datenfelder, die sich hauptsächlich am KDSF orientieren. Eine spätere Schnittstelle zum Europäischen Patentamt könnte diese Angaben automatisch ergänzen, muss aber voraussichtlich zugunsten anderer Prioritäten warten.

Aus der Community kam außerdem die Bitte, das GitHub-Ticket zur gleichzeitigen Nutzung von OAuth-Login und LDAP-Synchronisierung erneut anzusehen. Diese Kombination ist für Institute relevant, die ihre Profile über LDAP synchronisieren, die Anmeldung aber über OAuth abwickeln möchten. Das nehmen wir noch einmal auf.

## Ausblick auf OSIRIS 3.0

OSIRIS 3.0 kommt voraussichtlich noch vor Weihnachten. Der Versionssprung hat einen konkreten Grund: Für die Mehrsprachigkeit ändern wir die Datenstruktur grundlegend. Bisher werden etwa deutsche und englische Profilangaben unter getrennten Schlüsseln gespeichert. Künftig sollen sich weitere Sprachen einheitlich ergänzen lassen, ohne jedes Mal neue Schlüssel einzuführen.

**Diese Umstellung bringt Breaking Changes mit sich:** Nach der Migration funktioniert das bisherige Interface mit der neuen Datenstruktur nicht mehr. Der Sprung auf Version 3.0 macht diese Änderung auch in der Versionsnummer sichtbar. Die letzte Stelle der Versionsnummer bleibt künftig Patches und Hotfixes ohne größere neue Funktionen vorbehalten.

### Mehr Sprachen und eigene Begriffe

Im Entwicklungszweig unterstützt das Interface bereits zahlreiche Sprachen. Dafür nutzen wir eine selbst entwickelte Übersetzungspipeline mit der DeepL-API. Auch institutionelle Konfigurationen sollen sich künftig mehrsprachig pflegen lassen. Die Oberfläche soll dabei übersichtlich zeigen, welche Sprachfassungen bereits ausgefüllt sind.

Außerdem könnt ihr einzelne Bezeichnungen an eure Institution anpassen: Wenn ihr statt „Users“ lieber „Staff“, „Members“ oder „Associates“ verwenden möchtet, soll das direkt im Interface möglich sein – und zwar für alle unterstützten Sprachen. Nicht benötigte Sprachen könnt ihr deaktivieren. Bei Englisch und Portugiesisch setzen wir auf europäische Varianten; Portugiesisch gehört voraussichtlich zu den nächsten Sprachen, die hinzukommen.

Eine wichtige Klarstellung aus der Diskussion: DeepL wird derzeit für die Übersetzung des Interfaces verwendet. Eigene Inhalte über das DeepL-Konto einer Institution übersetzen zu lassen, war eine Idee im Gespräch, keine angekündigte Funktion.

### OSIRIS-Daten über einen eigenen Chatbot abfragen

Mit OSIRIS 3.0 soll außerdem eine **MCP-Schnittstelle** verfügbar werden. Damit könnt ihr einen Chatbot eurer Wahl mit OSIRIS verbinden. Denkbar sind zum Beispiel Fragen nach aktiven Projekten in diesem Jahr, nach Mitarbeitenden mit Expertise zu Klimawandel oder nach der Anzahl abgeschlossener Abschlussarbeiten in den letzten drei Jahren.

Dafür betreibt die Institution einen separaten OSIRIS-MCP-Service, der über die API auf OSIRIS zugreift und dem Chatbot ausgewählte Werkzeuge bereitstellt. **Eine eigene Chat-Oberfläche in OSIRIS ist nicht vorgesehen.** Ihr bringt also euren eigenen Chatbot mit.

Zum Start sind zwölf ausschließlich lesende Werkzeuge geplant. Eine Allowlist legt fest, welche Daten gelesen werden dürfen; der Chatbot erhält damit keinen pauschalen Zugriff auf alle OSIRIS-Daten. Die Institution kann festlegen, wer den Service nutzen darf und welche Zugriffe erlaubt sind, etwa über einen Identity Provider mit Rollen oder Gruppen. Ein eigener API-Client für den MCP-Service lässt sich bei Bedarf wieder deaktivieren.

Das zugrunde liegende Hackathon-Projekt wurde bisher ausschließlich mit synthetischen Daten getestet. Ein Artikel und das vollständige Testprotokoll sind bereits veröffentlicht. Wenn bei euch eigene Chatbot-Projekte laufen, lohnt sich ein gemeinsamer Blick auf die Unterlagen und die Kompatibilität.

## Community Days und kommende Themen

Unsere **Community Days finden Ende Januar 2027** statt. Für Community-Mitglieder ist die Teilnahme kostenlos. Bisher sind erst wenige Beiträge eingegangen – gestaltet das Programm also gerne mit! Auch informelle Formate sind willkommen. Wenn ihr unsicher seid, ob euer Thema oder Format passt, meldet euch bei uns. Informationen findet ihr auf der [Seite zu den Community Days](https://osiris-app.de/community-days).

Im Meeting entstand zum Beispiel die Idee einer etwa einstündigen Austauschsession zu **Genehmigungsworkflows**. Dabei könnt ihr Erfahrungen teilen und besprechen, wie unterschiedliche Institute ihre Prozesse in OSIRIS gestalten. Es gab bereits Interesse aus der Runde, auch von einer Teilnehmerin, die OSIRIS noch testet und den Einsatz im nächsten Jahr plant. Reicht solche Vorschläge gerne direkt ein; bei der Programmplanung berücksichtigen wir die verschiedenen Zielgruppen und Interessen.

Ein weiteres Thema für die Community Days sind die **OSIRIS Commons** und die damit verbundene KDSF-Konformität. Das stieß im Meeting ebenfalls auf Interesse.


## Weitere Fragen und Hinweise

Im Blog findet ihr neben den Meeting-Zusammenfassungen auch einen [Beitrag zu Strategien für die Einführung von OSIRIS](/blog/big-bang-oder-schrittweise-einfuehrung/). Eure Erfahrungen und Rückmeldungen dazu interessieren uns sehr! Aus der Runde kam außerdem der Hinweis, dass der Blog auf der OSIRIS-Website noch nicht verlinkt sei. Das schauen wir uns an.

Bitte nehmt auch an unserer kurzen **Community-Umfrage** teil. Sie dauert etwa fünf Minuten und bietet Raum für eure Erfahrungen und Wünsche. Wer am Ende eine E-Mail-Adresse angibt, kann an der Verlosung einer Geschenkbox teilnehmen, unter anderem mit einer OSIRIS-Tasse und einem Kartenspiel. Als Frist für die Verlosung wurde im Meeting der **11. November 2026** genannt. Danach bleibt die Umfrage offen, die Teilnahme an der Verlosung endet aber. Ihr findet die Umfrage [hier](https://forms.cloud.microsoft/e/15Thq73N1G).

Eine Frage betraf außerdem **Altmetric-Badges** im öffentlichen Portfolio. Diese Badges werden derzeit nur intern verwendet und von OSIRIS nicht im Portfolio ausgespielt. Ob und unter welchen Bedingungen eine öffentliche institutionelle Nutzung kostenpflichtig wäre, konnten wir im Meeting nicht abschließend klären.

## Save the Date

Das nächste Community Meeting findet am **16.12.2026** als Weihnachtsedition mit Jahresrückblick statt. Ich freue mich darauf, mit euch auf das Jahr zurückzuschauen und die nächsten Schritte zu besprechen!

Für weitere Termine und Neuigkeiten könnt ihr unseren Newsletter abonnieren oder den Community-Kalender nutzen. Beides findet ihr im [Community-Bereich auf der OSIRIS-Homepage](https://osiris-app.de/#community).
