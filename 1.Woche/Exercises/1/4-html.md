# **UE 3 – DOM-Struktur, Inspektor & Validierung (45 min)**


##  **Teil 1: DOM-Prinzip**

**Aufgabe 1:**
Erkläre in eigenen Worten:
Was passiert, wenn ein Browser HTML lädt?

1. Der Browser stellt eine HTTP-Anfrage and den Webserver
2. Der Webserver gibt eine HTTP Antwort mit dem Html-Text
3. Dieser Text wird ins DOM vom Browsr umgewandelt
4. Jedes HTML-Element wird zu einem Knoten im Baum

## **Teil 2: DOM-Inspektor**

**Aufgabe 2:**

1. Öffne eine Seite im Browser.
2. Rechtsklick → **„Untersuchen“** → Tab *Elements* oder *Inspector*.
3. Fahre mit der Maus über verschiedene Elemente.

**Frage 1:**
Was zeigt der DOM-Inspektor an?

- Quellcode
- Die **verschachtelte Struktur** (Eltern- und Kindelemente) deines HTML-Dokuments.


## **Teil 3: Falsche Verschachtelung finden**

**Aufgabe 3:**
Kopiere folgenden Fehler in deine Datei:

```html
<p>Hier steht ein <b>Text.</p></b>
```

**Frage 2:**
Was ist hier falsch?
Die Tags sind **überkreuz** geschlossen.

## **Teil 4: Baumstruktur visualisieren**

**Aufgabe 4:**
Zeichne auf Papier den Baum für dieses Dokument:

```html
<html>
  <body>
    <h1>Überschrift</h1>
    <p>Ein <b>fetter</b> Text.</p>
  </body>
</html>
```
![alt text](<shapes at 25-11-11 13.42.37.png>)

**Frage 3:**
Welches Element ist die Wurzel?
html element

**Frage 4:**
Welche Elemente sind Kinder von `<body>`?

h1 und p sind die Kinderelemente vom body


