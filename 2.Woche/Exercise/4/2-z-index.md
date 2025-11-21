

# Stacking- & z-Index-Übung

---

## **Aufgabe 1 — Negativer z-index**

**Frage:**
Erstelle zwei positionierte Boxen.
Box A soll *hinter* dem normalen Text liegen (`z-index: -1`).
Box B liegt normal über dem Text.
**Lösung:**
Negativer z-index funktioniert nur bei *positionierten* Elementen.

**Code:**

```html
<div class="boxA">A</div>
<div class="boxB">B</div>
<p>Normaler Fließtext</p>

<style>
  p { position: relative; }

  .boxA {
    position: relative;
    z-index: -1; /* liegt hinter dem Text */
    background: lightblue;
    width: 100px;
    padding: 1em;
  }

  .boxB {
    position: relative;
    z-index: 1; /* liegt vor dem Text */
    background: lightcoral;
    width: 100px;
    padding: 1em;
  }
</style>
```

## **Aufgabe 2 — Positiver z-index überschreibt Reihenfolge im DOM**

**Frage:**
Zwei Boxen überlappen sich.
Box 2 steht im HTML später, soll aber *hinter* Box 1 liegen.
Nutze z-index, um die Reihenfolge zu drehen.

**Lösung:**
Box 1 z-index: 2 → liegt vorne.
Box 2 z-index: 1 → liegt hinten.

**Code:**

```html
<div class="b1">Box 1</div>
<div class="b2">Box 2</div>

<style>
  .b1, .b2 {
    position: relative;
    width: 150px;
    padding: 1em;
    margin-top: -40px; /* Überlappung erzeugen */
  }

  .b1 {
    background: #8cf;
    z-index: 2; /* obwohl früher im DOM: liegt vorne */
  }

  .b2 {
    background: #f88;
    z-index: 1; /* liegt hinten */
  }
</style>
```

---

## **Aufgabe 3 — Neuer Stacking Context durch z-index**

**Frage:**
Box Außen hat z-index: 5.
Darin liegt Box Innen mit z-index: 999.
Daneben liegt eine andere Box (rot) mit z-index: 10.
Wer liegt vorne?

**Lösung:**
Das Kind ist **im Stacking-Context der Elternbox eingeschlossen**.
→ Die rote Box mit z-index: 10 liegt **vor** dem inneren 999er.

**Code:**

```html
<div class="outer">
  Außen
  <div class="inner">Innen</div>
</div>

<div class="red">ROT</div>

<style>
  .outer {
    position: relative;
    z-index: 5; /* neuer Stacking Context */
    width: 200px;
    height: 140px;
    background: #cfc;
  }

  .inner {
    position: absolute;
    z-index: 999; /* bleibt im Context der outer gefangen */
    background: #9cf;
    padding: 0.5em;
    right: -20px;
    top: 20px;
  }

  .red {
    position: relative;
    z-index: 10; /* steht über beiden */
    background: #f44;
    padding: 1em;
    margin-top: -60px;
    width: 140px;
  }
</style>
```

## **Aufgabe 4 — Negativer z-index innerhalb eines Stacking Contexts**

**Frage:**
Erzeuge einen Stacking Context (Elternbox mit z-index).
Darin liegt ein Kind mit z-index: -1.
Außerhalb liegt ein statisches Element.
Wo erscheint das Kind?
**Code:**

```html
<div class="parent">
  Parent
  <div class="child">Child</div>
</div>

<p class="static">Statischer Text</p>

<style>
  .parent {
    position: relative;
    z-index: 3; /* neuer Stacking Context */
    width: 200px;
    height: 130px;
    background: #eef;
  }

  .child {
    position: absolute;
    z-index: -1; /* liegt hinter allen Parent-Kindern, aber bleibt im Context */
    background: #ddf;
    padding: 0.5em;
    bottom: 10px;
    left: 10px;
  }

  .static {
    margin-top: -50px;
    background: yellow;
  }
</style>
```
---

## **Aufgabe 5 — Zwei verschachtelte Stacking-Contexts**

**Frage:**
Erzeuge:

* Parent (z-index: 10)
* Child (z-index: 50 → neuer Context)
* Nested (z-index: 1 innerhalb des Child-Contexts)
* Daneben eine Box (z-index: 20)

```html
<div class="parent">
  Parent
  <div class="child">
    Child
    <div class="nested">Nested</div>
  </div>
</div>

<div class="other">Andere Box</div>

<style>
  .parent {
    position: relative;
    z-index: 10;
    background: #cee;
    padding: 1em;
    width: 200px;
  }

  .child {
    position: relative;
    z-index: 50; /* neuer Stacking Context */
    background: #acf;
    padding: 1em;
    margin-top: -40px;
  }

  .nested {
    position: relative;
    z-index: 1; /* nur innerhalb des Child-Contexts relevant */
    background: #def;
    padding: 0.5em;
  }

  .other {
    position: relative;
    z-index: 20; /* liegt über dem gesamten parent-Stack */
    background: #faa;
    padding: 1em;
    margin-top: -60px;
    width: 140px;
  }
</style>
```
