
# Übungen: Semantische HTML-Strukturelemente

---

# **Übung 1 – Semantische Abschnitte erkennen (ca. 10 min)**

## **Fragen**

1. Welche Art von Inhalt gehört in ein `<article>`?

Eigenständige Inhalte, die auch isoliert Sinn ergeben (Blogpost, News, Kommentar).

2. Wofür verwendet man `<section>`?
Themenabschnitte logisch gruppieren

3. Wo sollte ein `<nav>` stehen?
Für die Navigation; sollte links/Menü enthalten

4. Was gehört sinnvollerweise in ein `<footer>`?
Rechtliches, Impressum, Copyright, Kontakt, sekundäre Navigation

5. Wofür ist `<aside>` gedacht?
Zusatzinfos, Randbemerkungen, Seitenleisten, Hinweise.

---


# **Übung 2 – HTML-Struktur bauen **

## **Aufgabe**

Baue eine einfache Blog-Startseite mit folgenden Anforderungen:

* Kopfbereich mit Titel und Navigation
* Zwei Artikel
* Eine Seitenleiste
* Ein Footer

**Schreibe die passenden semantischen Elemente auf.**

## **Lösung (HTML-Code komplett)**

```html
<body>
  <header>
    <h1>Mein Webdev Blog</h1>
    <nav>
      <a href="#">Home</a> |
      <a href="#">Beiträge</a> |
      <a href="#">Kontakt</a>
    </nav>
  </header>

  <section>
    <article>
      <h2>Artikel 1</h2>
      <p>Dies ist der erste Blogartikel.</p>
    </article>

    <article>
      <h2>Artikel 2</h2>
      <p>Dies ist der zweite Blogartikel.</p>
    </article>
  </section>

  <aside>
    <h3>Links</h3>
    <ul>
      <li><a href="#">Externe Ressource 1</a></li>
      <li><a href="#">Externe Ressource 2</a></li>
    </ul>
  </aside>

  <footer>
    <p>© 2025 Webdev Blog</p>
    <address>Kontakt: mail@example.com</address>
  </footer>
</body>
```

# **Übung 3 – Ordne die Elemente richtig zu (ca. 5 min)**

## **Frage**

Ordne folgenden Elementen die passende Funktion zu:

* `<header>`
* `<footer>`
* `<section>`
* `<article>`
* `<address>`

Zuordnungsmöglichkeiten:

A) Kontaktinfo des Autors -> address
B) Kopfbereich eines Inhalts -> header
C) Unabhängiger Beitrag -> article
D) Themenabschnitt -> section
E) Abschlussbereich -> footer



---

# **Übung 4 – Mini-Projekt: Produktbeschreibung strukturieren (ca. 10 min)**

## **Aufgabe**

Strukturiere folgenden Text semantisch korrekt in Html:

„Das Produkt heißt SuperLaptop X1. Es ist schnell, hat 32 GB RAM und ein Aluminiumgehäuse.
Technische Daten: 32 GB RAM, 1 TB SSD, Intel i7. Der Kundenservice ist unter [support@example.com](mailto:support@example.com) erreichbar.“

Baue:

* Überschrift
* Hauptartikel
* Abschnitt „Technische Daten“
* Kontakt als `<address>`
* Footer

## **Lösung (HTML-Code)**

```html
<body>
  <header>
    <h1>SuperLaptop X1</h1>
  </header>

  <article>
    <p>Der SuperLaptop X1 ist schnell, hat 32 GB RAM und ein Aluminiumgehäuse.</p>

    <section>
      <h2>Technische Daten</h2>
      <ul>
        <li>32 GB RAM</li>
        <li>1 TB SSD</li>
        <li>Intel i7 Prozessor</li>
      </ul>
    </section>

    <address>
      Support: <a href="mailto:support@example.com">support@example.com</a>
    </address>
  </article>

  <footer>
    <p>© 2025 SuperLaptop</p>
  </footer>
</body>
```

