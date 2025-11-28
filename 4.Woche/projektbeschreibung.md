# Abschlussprojekt (1 Woche) 


## Projektidee

Du erstellst in einer Woche eine **moderne, responsive Website**.
Als Design-Grundlage kannst du:

* **eine** der folgenden Seiten möglichst nah nachbauen **oder**
* dich vom Look & Feel inspirieren lassen und ein eigenes Thema umsetzen:

  * [https://vwa.org.au/](https://vwa.org.au/)
  * [https://www.codarts.nl/](https://www.codarts.nl/)
  * [https://www.elkridgeresort.com/](https://www.elkridgeresort.com/)
  * [https://www.evolvingforests.com/](https://www.evolvingforests.com/)
  * [https://www.artandmap.com/](https://www.artandmap.com/)
  * [https://gardenofcedar.org/](https://gardenofcedar.org/)
  * [https://metro.solardigital.com.ua/](https://metro.solardigital.com.ua/)
  * [https://myluxecierge.com/](https://myluxecierge.com/)
  * [https://www.bohostudio.pl/](https://www.bohostudio.pl/)

Fokus liegt nicht auf Perfektion, sondern darauf, möglichst viele gelernte CSS-Techniken bewusst einzusetzen.

---

## Lernziele

* Grundlagen von HTML und CSS anwenden
* Layout mit Flexbox umsetzen
* Positionierung (relative, absolute, sticky/fixed) sinnvoll einsetzen
* Responsive Design mit Media Queries und Navigation
* Dropdown-Navigation umsetzen
* Formular mit Validierung erstellen
* Saubere Code-Struktur und Lesbarkeit

---

## Funktionale Anforderungen

1. Seitenstruktur

   * Mindestens folgende Bereiche:

     * Header mit Logo/Titel und Navigation
     * Hero-Bereich (z. B. großes Bild + Claim/Text)
     * Mindestens 2–3 Content-Sektionen (z. B. „Über uns“, „Angebot“, „Galerie“, „Team“ …)
     * Kontaktbereich mit Formular
     * Footer mit Basisinformationen

2. Navigation & Dropdown

   * Eine horizontale Hauptnavigation im Header
   * ein Dropdown-Menü für kleine Bildschirme:
     * Anzeige/Verstecken per :hover (Desktop)
   * Navigation muss auf mobilen Geräten sinnvoll funktionieren (z. B. untereinander angeordnete Links, einfache mobile Version; optional Burger-Menü)

3. Formular & Validierung

   * Kontaktformular mit mindestens:

     * Name (Pflichtfeld)
     * E-Mail (Pflichtfeld, mit HTML5-E-Mail-Validierung)
     * Nachricht/Textfeld (Pflichtfeld)
   * CSS-Validierung:

     * Einsatz von :valid / :invalid
     * Visuelles Feedback (Rahmenfarbe, Hintergrund oder Icons per ::after und content, z. B. ✓ / ✕)

---

## Technische Anforderungen (CSS/HTML)

1. Grundlagen

   * HTML5-Grundstruktur korrekt
   * Semantische Elemente, wo sinnvoll (header, nav, main, section, footer)
   * Konsistente Klassennamen

2. Flexbox

   * Mindestens zwei Layout-Bereiche mit Flexbox:
     * z. B. Content + Sidebar
     * Cards/Kacheln im Layout mit Flexbox

3. Positioning

   * Mindestens:

     * Ein Element mit position: relative
     * Ein Element mit position: absolute (z. B. Badge, Overlay, Button)
     * Optional/empfohlen: sticky oder fixed (z. B. sticky Navigation oder fixed Button)

4. Responsive Design

   * Mobile-First Ansatz (CSS beginnt bei kleiner Bildschirmbreite)
   * Mindestens zwei Media Queries:

     * z. B. für Tablet und Desktop
   * Layout passt sich an:

     * Mobile: einspaltig
     * Tablet/Desktop: mehrspaltig (z. B. 2–3 Spalten mit Flexbox)
   * Bilder und Container sind responsive (max-width, height: auto, etc.)

5. Codequalität & Struktur

   * HTML und CSS in getrennten Dateien
   * Saubere Einrückung und Formatierung
   * Keine toten/ungenutzten Selektoren
   * Sinnvolle Kommentare an wichtigen Stellen (z. B. Layout-Blöcke, Media Queries)
   * Möglichst geringe Spezifität, Wiederverwendung von Klassen

---

## Präsentation

* **Präsentation am Freitag:**

  * Jede Gruppe / jeder Schüler hat **10 Minuten** Zeit

    * 5 Minuten Vorstellung der Website
    * 5 Minuten technische Erläuterung (Layout, Responsive Design, Navigation, Formular/Validierung, Positioning)
  * Danach kurze Rückfragen durch Trainer und Gruppe.


## Vorschlag für Wochenstruktur (optional für dich zur Planung)

* Tag 1: Analyse der gewählten Beispielseite, Grundstruktur HTML aufsetzen
* Tag 2: Grundlayout + Flexbox für Hauptbereiche
* Tag 3: Navigation inkl. Dropdown, erstes Responsive Verhalten (moble first!)
* Tag 4: Kontaktformular + Validierung, Feinschliff Layout
* Tag 5: Responsives Finetuning, Code aufräumen, Tests auf verschiedenen Geräten/Größen

