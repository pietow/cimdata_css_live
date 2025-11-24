* **Teil A:** Normale Tabelle (Desktop-Ansicht)
* **Teil B:** Responsive Tabelle (Mobile), **mit `display:block`-Technik**

#  **ÜBUNG – Tabellen normal & responsive (Mobile First)**

# **HTML**

- erstelle eine Html Tabelle

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="style.css">
  <title>Responsive Tabelle Übung</title>
</head>
<body>

  <h1>Kaffee-Preisliste</h1>

  <table class="coffee-table">
    ??????
  </table>

</body>
</html>
```

---

# ** TEIL A — Normale Tabelle für Desktop**

---

## ** Aufgabe A1**

Gib der Tabelle ein klassisches Tabellendesign:

* dünne Rahmen
* zebra rows (abwechselnde Hintergrundfarben)
* Text linksbündig
* Tabelle soll vollbreit sein

---

## ** Frage A1**

Was macht `border-collapse: collapse;`?

---

# **TEIL B — Responsive Tabelle (Mobile) – display:block**

Ziel:
Auf kleinen Screens sollen **diese Tabellen → Karten** werden:

* jede Tabellenzeile = eigener Block
* alle Zellen untereinander
* `<thead>` wird unsichtbar (nicht gelöscht!)
* Spaltenüberschriften erscheinen **per CSS vor jeder Zelle**

---

# **Aufgabe B1 – Tabelle mobil umwandeln**

1. Mache die Tabellenstruktur ab `max-width: 35em` flach:

   * `table`, `tr`, `th`, `td` → `display:block`
2. Verschiebe `<thead>` außerhalb des Viewports
3. Jede Tabellenzeile soll einen Abstand bekommen (Kartenlook)

---

## **Frage B1**

Warum verstecken wir die `<thead>`-Zeile *nicht* mit `display:none`?


---


# **BONUS - Aufgabe B2 – Spaltenüberschriften vor jede Zelle setzen**

Damit Mobile-User sehen, was die Daten bedeuten, sollen Labels davor erscheinen:

Beispiel:

```
Sorte: Single Origin
Herkunft: Äthiopien
Röstgrad: Mittel
Preis: 12 €
```

---

## **Frage B2**

Warum nutzen wir dafür `content:` + `attr(data-label)`?


##  HTML-Anpassung

Erweitere **jede `<td>`** um ein Label: z.b.:

```html
<td data-label="Sorte">Single Origin</td>

```

