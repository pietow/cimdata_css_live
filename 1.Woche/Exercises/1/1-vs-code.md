

### **1 Vorbereitung: VS Code einrichten **

#### **a) Projektordner erstellen**

1. Erstelle auf deinem Desktop einen neuen Ordner:
   📁 `my_first_website`
2. Öffne diesen Ordner in **VS Code**

   * Rechtsklick → *Mit Code öffnen*
   * oder in VS Code: *Datei → Ordner öffnen*

#### **b) Erweiterungen installieren**

Öffne die Seitenleiste: *Erweiterungen* 

Installiere:

1.  **Live Server** – zeigt deine Seite automatisch im Browser
2.  **Peacock** – färbt dein VS Code-Fenster (hilft bei Ordnung)


### **2 Dateien & Struktur**

Erstelle folgende Struktur im VS Code-Explorer:

```
my_first_website/
│
├── index.html
└── style.css
```

*(Hinweis: Rechtsklick → Neue Datei)*

---

### **3 HTML-Grundgerüst schreiben**

Öffne **index.html** und füge Folgendes ein:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meine erste Webseite</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Willkommen auf meiner ersten Webseite!</h1>
    <p>Ich lerne HTML und CSS in Visual Studio Code.</p>

    <button>Klick mich!</button>
  </body>
</html>
```

*Tipp:*
Wenn du „html“ oder „!“ tippst und dann `Tab` drückst, erzeugt VS Code automatisch das Grundgerüst (`Emmet`-Feature).

---

### **4 CSS-Datei verknüpfen und gestalten (10 Minuten)**

Öffne **style.css**:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  text-align: center;
  margin-top: 50px;
}

h1 {
  color: #3366cc;
}

button {
  background-color: #3366cc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #224499;
}
```

Speichere beide Dateien (`Ctrl + S`).

---

### **5 Seite im Browser anzeigen **

1. Klicke in VS Code im Editorbereich der Html Datei mit der rechten Maustaste auf **“Go Live”** oder **Live server**.
2. Dein Standardbrowser öffnet automatisch `http://127.0.0.1:5500/index.html`
3. Ändere etwas in der Datei und speichere – die Seite aktualisiert sich automatisch.

---

### **6 Bonus: VS Code anpassen**

#### a) Farbe des Fensters ändern

* Öffne die **Befehls-Palette** (`Ctrl + Shift + P`)
* Tippe **“Peacock: Change Color”**
* Wähle z. B. *Blue*

#### b) Schriftgröße oder Design ändern

* Zahnrad ⚙️ unten links → *Einstellungen → Schriftgröße 16*
* Thema wechseln: *Farbdesign → Dark+ (Standard)*

#### c) Autovervollständigung aktivieren (standardmäßig an)

* Teste: Tippe `<p>` → drücke `Tab` → `<p></p>` wird automatisch ergänzt

---

### **7 (Optional) Experimentiere weiter (Bonus 10 Minuten)**

Probiere Folgendes:

* Füge ein Bild hinzu:

  ```html
  <img src="https://placehold.co/200x150" alt="Platzhalterbild">
  ```

* Füge weitere Überschriften und Listen ein

  ```html
  <ul>
    <li>HTML lernen</li>
    <li>CSS verstehen</li>
    <li>Eigene Projekte bauen</li>
  </ul>
  ```

