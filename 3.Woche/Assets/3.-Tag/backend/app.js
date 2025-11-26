const express = require("express");
const app = express();


// Formular auslesen (urlencoded)
app.use(express.urlencoded({ extended: true }));

// POST-Endpunkt
app.post("/submit", (req, res) => {
  console.log("Formulardaten erhalten:");
  console.log(req.body); // <-- Formular daten


// Hier wird gesteurt welche Antwort zurückgegeben wird
  if (true) {  
    res.redirect("/danke.html");
  } else {
    res.redirect("/fehler.html");
  }
});

// Statische HTML-Dateien aus /public bereitstellen
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Express läuft auf http://localhost:3000");
});