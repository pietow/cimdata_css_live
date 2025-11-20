

# Stacking- & z-Index-Übung

---

## **Aufgabe 1 — Negativer z-index**

**Frage:**
Erstelle zwei positionierte Boxen.
Box A soll *hinter* dem normalen Text liegen (`z-index: -1`).
Box B liegt normal über dem Text.


## **Aufgabe 2 — Positiver z-index überschreibt Reihenfolge im DOM**

**Frage:**
Zwei Boxen überlappen sich.
Box 2 steht im HTML später, soll aber *hinter* Box 1 liegen.
Nutze z-index, um die Reihenfolge zu drehen.


---

## **Aufgabe 3 — Neuer Stacking Context durch z-index**

**Frage:**
Box Außen hat z-index: 5.
Darin liegt Box Innen mit z-index: 999.
Daneben liegt eine andere Box (rot) mit z-index: 10.
Wer liegt vorne?

---

## **Aufgabe 4 — Negativer z-index innerhalb eines Stacking Contexts**

**Frage:**
Erzeuge einen Stacking Context (Elternbox mit z-index).
Darin liegt ein Kind mit z-index: -1.
Außerhalb liegt ein statisches Element.
Wo erscheint das Kind?

---

## **Aufgabe 5 — Zwei verschachtelte Stacking-Contexts**

**Frage:**
Erzeuge:

* Parent (z-index: 10)
* Child (z-index: 50 → neuer Context)
* Nested (z-index: 1 innerhalb des Child-Contexts)
* Daneben eine Box (z-index: 20)


