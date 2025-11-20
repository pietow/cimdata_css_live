# **Übung: Fixed & Absolute Positioning**

---

## **Aufgabe 1 — Fixed Header**

**Frage:**
Erstelle einen Header, der immer oben am Viewport klebt, egal wie weit die Seite scrollt.

header mit `position: fixed` + `top: 0`

```html
<header class="fix-head">Mein Header</header>

<style>
    body {
        margin: 0; height:200vh;
    }
    .fix-head {
        position:fixed;
        top:0;
        left: 0;
        right: 0;
        background-color: yellow;
        padding: 1em

    }
</style>
```
---

## **Aufgabe 2 — Fixed Button unten rechts**

**Frage:**
Platziere einen kleinen runden Button unten rechts am Bildschirm, der beim Scrollen sichtbar bleibt.

**Lösung:**
`position: fixed` + `bottom` + `right`.

```html
<button class="fix-btn">?</button>
<style>
  .fix-btn {
    position: fixed;
    bottom: 1em;
    right: 1em;
    width: 3em;
    height: 3em;
    border-radius: 50%;
  }
</style>
```

---

## **Aufgabe 3 — Absolute Box in Container rechts oben**

**Frage:**
Erstelle einen Container (200×200px).
Platziere darin mit `absolute` ein kleines Kästchen rechts oben.

```css
.container {
    position: relative;
}

.kind {
    position: absolute;
}
```




## **Aufgabe 4 — Absolute Element überlappt Text**

**Frage:**
Füge ein absolut positioniertes Label hinzu, das über einem Absatz erscheint (links oben auf dem Text).
**Lösung:**
Parent `position: relative`, Label `absolute`.
---

## **Aufgabe 5 — Fixed Sidebar**

**Frage:**
Erstelle eine linke Sidebar mit fester Position, die 20% Breite hat


---

## **Aufgabe 6 — Absolutes Dropdown (ohne Hover)**

**Frage:**
Baue ein kleines Menü, bei dem die Dropdown-Liste absolut *unter* dem Label erscheint (ohne Hover, immer sichtbar).
**Lösung:**

**Code:**

```html
<div class="drop">
  <div class="label">Menu</div>
  <ul class="menu">
    <li>A</li><li>B</li><li>C</li>
  </ul>
</div>

<style>
  .drop { position: relative; display: inline-block; }
  .label { padding: 0.5em; background: #ddd; }
  .menu {
    position: absolute;
    top: 2em;
    left: 0;
    background: #eee;
    padding: 0;
    margin: 0;
    list-style: none;
    border: 1px solid #999;
  }
  .menu li {
    padding: 0.5em 1em;
  }
</style>
```
---

## **Aufgabe 7 — Fixed Modal**

**Frage:**
Erstelle ein einfaches Modal mit Backdrop (beide fixed).
**Lösung:**

**Code:**

```html
<button>Open</button>

<div class="back"></div>
<div class="modal">Hallo!</div>

<style>
  .back {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
  }
  .modal {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2em;
  }
</style>
```