# Übung: HTML-Formular + Backend-Verbindung


* HTML-Formular verstehen
* `action` und Datenfluss verstehen
* Verbindung zwischen **Frontend (Live Server)** und **Backend (Express)**
* Minimales Backend inkl. `danke.html` und `fehler.html`
* Schrittweise Installation von Node.js & npm
* Vollständiger Code (HTML & CSS & Express)


## Ziel der Übung

1. verstehen, was das `action`-Attribut eines `<form>` macht
2. verstehen, wie ein Formular Daten an ein Backend schickt
3. Express-Backend starten und Ergebnisse sehen
4. Erfolg/Fehler-Weiterleitung testen

---

# Teil 1 – Node.js & npm unter Windows installieren

1. gehe auf [https://nodejs.org](https://nodejs.org)
2. lade die LTS-Version herunter
3. Installer starten → „Next“ → „Install“
4. Terminal öffnen: Windows-Taste → „cmd“

Prüfen:

```bash
node -v
npm -v
```

---

# Teil 2 – Ein neues Backend-Projekt erstellen (Windows)

Im Terminal:

```bash
mkdir backend
cd backend
npm init -y
npm install express
```

Backend starten später mit:

```bash
node app.js
```

---

# Teil 3 – Minimales Express-Backend (mit danke/fehler)

## Dateistruktur

```
projekt/
├── backend/
│   ├── app.js
│   └── public/
│       ├── danke.html
│       └── fehler.html
└── frontend/
    ├── index.html
    └── style.css
```

---

# Backend: app.js

```js
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.post("/submit", (req, res) => {
  console.log("Formulardaten erhalten:", req.body);

  const ok = req.body.name && req.body.mail && req.body.nachricht;
  if (ok) {
    return res.redirect("/danke.html");
  } else {
    return res.redirect("/fehler.html");
  }
});

app.listen(3000, () => {
  console.log("Backend läuft auf http://localhost:3000");
});
```

---

# Backend: danke.html

```html
<!DOCTYPE html>
<html lang="de">
<body>
  <h2>Vielen Dank!</h2>
  <p>Wir haben Ihre Nachricht erhalten.</p>
  <a href="http://127.0.0.1:5500/frontend/index.html">Zurück zum Formular</a>
</body>
</html>
```

# Backend: fehler.html

```html
<!DOCTYPE html>
<html lang="de">
<body>
  <h2>Fehler</h2>
  <p>Die Daten konnten nicht verarbeitet werden.</p>
  <a href="http://127.0.0.1:5500/frontend/index.html">Zurück zum Formular</a>
</body>
</html>
```

---

# Teil 4 – Frontend (läuft separat über Live Server)

Basierend auf der vorherigen Formular-Übung – hier ein minimales Beispiel:

## frontend/index.html

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Form</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <form method="post" action="http://localhost:3000/submit">

    <label for="name">Name</label>
    <input type="text" id="name" name="name" required placeholder=" ">
    <span class="hint"></span>

    <label for="mail">E-Mail</label>
    <input type="email" id="mail" name="mail" required placeholder=" ">
    <span class="hint"></span>

    <label for="nachricht">Nachricht</label>
    <textarea id="nachricht" name="nachricht" required placeholder=" "></textarea>
    <span class="hint"></span>

    <button type="submit" class="btn">Absenden</button>

  </form>

</body>
</html>
```

---



# Teil 5 - Anweisungen

1. Starte das Backend:

   ```bash
   cd backend
   node app.js
   ```

2. Öffne die `index.html` im Frontend mit Live Server (Port 5500).

3. Fülle das Formular korrekt aus → du landest auf:

   ```
   http://localhost:3000/danke.html
   ```

4. Fülle das Formular unvollständig aus → du landest auf:

   ```
   http://localhost:3000/fehler.html
   ```

5. Kontrolliere im Terminal, welche Formulardaten Express erhalten hat.

6. Experimentiere:

   * ändere die `action`
   * füge ein weiteres Feld hinzu
   * prüfe, ob es ankommt
   * simuliere absichtliche Fehler

---
