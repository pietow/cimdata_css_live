# **UE 2 – Struktur, Verschachtelung & Attribute**


## **Teil 1: Tags und Elemente**

**Aufgabe 1:**
Erstelle folgende Struktur in deiner Datei:

```html
<h1>Über mich</h1>
<p>Ich heiße <b>Alex</b> und lerne <i>HTML</i>.</p>
<p>Ich wohne in <u>Deutschland</u>.</p>
```

**Frage 1:**
Was ist der Unterschied zwischen einem **Tag** und einem **Element**?

Ein **Tag** ist nur der Name in spitzen Klammern (`<p>`).
Ein **Element** besteht aus **Start-Tag, Inhalt und End-Tag** (`<p>Text</p>`).

---

##  **Teil 2: Verschachtelung**

**Aufgabe 2:**
Füge einen Absatz ein, in dem du ein Wort fett und kursiv kombinierst:

```html
<p>Ich lerne <b><i>HTML</i></b> jeden Tag.</p>
```

**Frage 2:**
Warum muss `<i>` **innerhalb** von `<b>` geschlossen werden?

Weil HTML **verschachtelt** ist.
Innere Tags müssen **zuerst geschlossen** werden.


---

## **Teil 3: Attribute verwenden**

**Aufgabe 3:**
Füge ein Bild und einen Link hinzu:

```html
<img src="https://placehold.co/200x150" alt="Platzhalterbild">
<p>Besuche <a href="https://www.mozilla.org/de/">Mozilla</a> für mehr Infos.</p>
```

**Frage 3:**
Wofür steht `src` und `alt`?
* `src` = Quelle des Bildes (url oder Pfad)
* `alt` = Alternativtext, falls das Bild nicht geladen wird

**Frage 4:**
Wofür steht `href`?
Hyperlink-Referenz, also Zieladresse des Links.
---

##  **Teil 4: Kommentare & optionale Tags**

**Aufgabe 4:**
Füge Kommentare ein:

```html
<!-- Mein erster Kommentar -->
<p>Dieser Text ist sichtbar.</p>
<!-- <p>Dieser Text ist unsichtbar.</p> -->
```

**Frage 5:**
Werden HTML-Kommentare im Browser angezeigt?
Nein, sie sind **nur im Quelltext** sichtbar.

---

##  **Teil 5: Void-Tags (alleinstehende Elemente)**

**Aufgabe 5:**
Füge einen Zeilenumbruch ein:

```html
<p>Erste Zeile<br>Zweite Zeile</p>
```

**Frage 6:**
Warum hat `<br>` kein schließendes Tag?
Es ist ein **void-Tag**, also ein Element **ohne Inhalt**.
Ein anderes Beispiel wäre der <img> Tag




