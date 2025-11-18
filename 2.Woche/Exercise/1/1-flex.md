# **Teil 1 – Grundstruktur des Menüs (10 Minuten)**

## **Aufgabe**

Erstelle ein HTML-Dokument mit einem Navigationsmenü:

* Verwende `<nav>` + `<ul>` + `<li>` + `<a>`.
* Füge 5 Menüeinträge hinzu: Home, Features, Pricing, Support, About.
* Gib dem `ul` die Klasse `site-nav`.


**Warum ist ein `<ul>` die sinnvollste Struktur für ein Navigationsmenü?**

---

# **Teil 2 – Flexbox aktivieren (10 Minuten)**

## **Aufgabe**

Style das Menü so, dass die Menüeinträge **nebeneinander** stehen:

* Entferne Standardliste (`list-style: none`)
* Entferne Padding
* Aktiviere Flexbox: `display: flex`
* Füge Hintergrundfarbe hinzu


**Warum setzen wir `display: flex` auf das `<ul>` und nicht auf das `<nav>`?**

---


# **Teil 3 – Menüeinträge stylen (5 Minuten)**

## **Aufgabe**

* Setze alle `<a>` auf `display: block;`
* Nutze Padding für schöne Klickflächen
* Entferne Unterstreichungen


**Warum bekommt das `<a>` das Padding und nicht das `<li>`?**

---

# **Teil 4 – Abstand zwischen Menüitems (10 Minuten)**

## **Aufgabe**

Erzeuge Abstand **nur zwischen** den Menü-Items:

* Verwende den Selektor `.site-nav > li + li`
* Setze `margin-left: 1.5em`

**Warum nutzen wir den adjacent sibling combinator (`+`)?**

---

# **Teil 5 – Ein Item nach rechts schieben mit `margin-left: auto` (10 Minuten)**

## **Aufgabe**

* Verschiebe nur das letzte Menüelement (`About`) ganz nach rechts
* Nutze dafür:
  `.site-nav > .nav-right { margin-left: auto; }`


**Warum funktioniert `margin-left: auto` als „Platzfüller“ bei Flexbox?**

---
