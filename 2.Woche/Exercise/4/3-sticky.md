# **Übung 1 – Sticky Header im Content-Bereich**

**Aufgabe:**
Erstelle einen Abschnitt mit viel Text.
Darin soll eine Überschrift beim Scrollen **sticky** am oberen Rand des Viewports kleben bleiben (z. B. 10px Abstand).

**Lösung:**
Elternelement erzeugt Scroll-Kontext → Überschrift sticky + top.

**Code:**

```html
<section class="block">
  <h2 class="sticky-head">Kapitel 1</h2>
  <p>Langer Text …</p>
  <p>Noch mehr Text …</p>
  <p>Noch mehr …</p>
</section>

<style>
  .block {
    height: 200vh; /* nur für Demo */
    padding: 1em;
  }

  .sticky-head {
    position: sticky;
    top: 10px; /* bleibt 10px unter dem Viewportrand kleben */
    background: #fff;
  }
</style>
```
---
**weiter Lösung: siehe Exercise Ordner**

# **Übung 2 – Sticky Navigation innerhalb eines Containers**

**Aufgabe:**
Erstelle eine Navigation innerhalb eines großen Containers.
Die Navigation soll *nur innerhalb des Containers* sticky sein.
Wenn der Container endet, soll die Navigation wieder mitscrollen.

---

# **Übung 4 – Sticky Table Header**

**Aufgabe:**
Recherchiere wie Tabellenin html erstellt werden.
Erstelle eine Tabelle, bei der die Tabellenkopf-Zeile (`<thead>`) sticky ist.

**Hinweis:**
Sticky auf `<th>` + Hintergrund setzen.

