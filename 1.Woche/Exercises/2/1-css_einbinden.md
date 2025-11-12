# **BLOCK 1 — Inline-CSS (ca. 10 Minuten)**

### **Übung**

Schreibe ein HTML-Dokument, in dem:

* ein `<h1>` blau ist
* ein `<p>` grün ist
* ein `<button>` einen gelben Hintergrund hat
* alles mit **Inline-CSS**




### **Fragen**

1. Wo wird Inline-CSS geschrieben?
1. Direkt im HTML-Tag im `style=""`.

2. Was hat Vorrang: Inline oder externes CSS?
2. Inline hat höchste Priorität.


3. Vorteil von Inline-CSS?
3. Gut für schnelle Tests oder einmalige Styles.



# **BLOCK 2 — Internes CSS (ca. 15 Minuten)**



### **Übung**

Erstelle ein HTML-Dokument, das im `<style>`-Block:

* alle `<h2>` rot färbt
* alle `<li>` auf 20px Schriftgröße setzt
* `<div>` eine graue Hintergrundfarbe gibt



###  **Fragen**

1. Wo steht internes CSS?
1. Im `<head>` in `<style>`.

2. Was passiert, wenn Inline und intern kollidieren?
2. Inline gewinnt.

3. Wofür eignet sich internes CSS?
3. Für kleine Projekte und schnelle Tests.


#  **BLOCK 3 — Externes CSS (ca. 20 Minuten)**

### **Übung**

Erstelle eine Projektstruktur:

```
projekt/
│ index.html
│ style.css
```

In `style.css`:

* mache den Body-Hintergrund hellgrau
* setze die Schrift aller `<p>` auf 1.2rem
* färbe `<h1>` orange

In `index.html` soll die Datei `style.css` korrekt eingebunden sein.


### **Fragen**

1. Wann nutzt man externe CSS-Dateien?
1. Für alle mittelgroßen und großen Projekte.

2. Wie bindet man eine externe CSS-Datei korrekt ein?
2. Mit `<link rel="stylesheet" href="style.css">`

3. Was ist der größte Vorteil gegenüber internem CSS?
3. Saubere Trennung von Struktur & Design; Wiederverwendung; bessere Wartbarkeit.

# **BLOCK 4 — Prioritäten & Best Practice (ca. 5 Minuten)**



**Best Practice:**
→ Für echte Projekte: **immer externes CSS** benutzen.

### **Übung**

Ordne folgende CSS-Arten nach Priorität (höchste zuerst):

A: Inline
B: Extern
C: Intern


A -> C -> B