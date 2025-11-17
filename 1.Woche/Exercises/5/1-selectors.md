
# **Übung: CSS-Selektoren meistern**

## **1. HTML-Grundgerüst (5 min)**

Erstelle eine Datei **`selectors_exercise.html`** mit folgendem Inhalt:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>CSS-Selektoren Übung</title>
  <style>
    /* Grundstil */
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f5f5f5;
      padding: 2em;
    }

    h1 {
      color: darkblue;
      text-align: center;
    }

    section {
      background-color: #fff;
      border-radius: 0.5em;
      padding: 1em;
      margin-bottom: 1em;
    }

    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>
  <h1>Arbeiten mit CSS-Selektoren</h1>

  <section id="intro">
    <p class="info">Dies ist ein <strong>Beispieltext</strong>.</p>
    <p class="note">Eine zusätzliche Notiz.</p>
  </section>

  <section id="products">
    <ul>
      <li class="item" data-price="15" data-category="book">Buch</li>
      <li class="item" data-price="9" data-category="pen">Stift</li>
      <li class="item" data-price="5" data-category="paper">Papier</li>
    </ul>
  </section>

  <section id="footer">
    <p>© 2025 Beispielshop</p>
    <a href="#" class="link external">Kontakt</a>
    <a href="#" class="link internal">Impressum</a>
  </section>
</body>
</html>
```

---

## **2. Aufgabe A – Einfache Selektoren (10 min)**

### **Aufgabe**

1. Ändere die Textfarbe des ersten Absatzes (`.info`) auf **Blau**.
2. Gib dem Element mit der **ID „intro“** einen **grauen Hintergrund**.
3. Mache die Überschrift (`h1`) **fett und unterstrichen**.

```css
.info {
  color: blue;
}



.note {...}
```


## **3. Aufgabe B – Mittlere Selektoren (15 min)**

### ️ **Aufgabe**

1. Färbe das Produkt **„Buch“** gelb.
2. Färbe alle Produktnamen (alle `<li>`) grau.
3. Gib allen Links mit Klasse `link` eine **blaue Schriftfarbe**.


## **4. Aufgabe C – Kombinierte Selektoren (10 min)**

### ️ **Aufgabe**

1. Verändere die Schriftgröße des `<strong>`-Elements **innerhalb** von `.info`.
2. Färbe alle externen Links im Footer **rot**.
3. Markiere Produkte mit `data-price="15"` orange.


## **5. Bonus – Pseudo-Selektoren (optional, 5 min)**

### ️ **Aufgabe**

1. Markiere das **letzte Produkt**.
2. Gib jedem **ungeradem Produkt** einen gestrichelten Rahmen.