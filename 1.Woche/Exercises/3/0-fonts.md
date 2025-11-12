
# **BLOCK 2 – Schriftfamilien, Gewicht & Stil **

**Beispiel:**

```css
font-family: "Roboto";
font-weight: 300;   /* Light */
font-style: italic; /* Schräg */
```

---

## **Übung**

Erstelle CSS, in dem:

* `<h2>`:

  * `"Georgia"` als Schrift nutzt
  * `font-weight: 700` (bold)

* `<p>`:

  * `"Arial"` 
  * `font-style: italic`

* `<strong>`:

  * `"Courier New"`
  * `font-weight: 400`

- verwende google fonts

**Lösung:**

```html
<style>
  h2 {
    font-family: "Georgia", serif;
    font-weight: 700;
  }
  p {
    font-family: "Arial", sans-serif;
    font-style: italic;
  }
  strong {
    font-family: "Courier New", monospace;
    font-weight: 400;
  }
</style>

<h2>Abschnitt</h2>
<p>Ein kursiver Absatz.</p>
<strong>Monospace Beispiel</strong>
```

---

## **Fragen**

1. Was macht `font-family`?
2. Was bedeutet `font-weight: 700`?


---

## **Antworten**

1. Definiert die Schriftart und Alternativen.
2. Bold/kräftige Schrift.


---

# **BLOCK 2 – Typografische Feinheiten**

**Wichtige Properties:**

* recherchiere folgende CSS-Eigenschaften:

```css
text-transform: uppercase;
text-indent: 2em;
text-align: center;
text-decoration: underline;
font-variant: small-caps;
```

---

## **Übung**

Stelle folgendes typografisch ein:

* `<h3>`:

  * `text-transform: uppercase`
  * `letter-spacing: 0.1em`

* `<p>`:

  * `text-align: center`
  * `text-indent: 2em`

* `<em>`:

  * `font-variant: small-caps`
  * `text-decoration: underline`

**Lösung:**

```html
<style>
  h3 {
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  p {
    text-align: justify;
    text-indent: 2em;
  }
  em {
    font-variant: small-caps;
    text-decoration: underline;
  }
</style>

<h3>Titel</h3>
<p>Ein Absatz, der voll ausgerichtet ist und einen eingerückten ersten Satz hat.</p>
<em>Kleiner Hinweistext</em>
```

---

## ✅ **Fragen**

1. Was macht `text-transform`?
2. Wofür wird `text-indent` genutzt?
3. Was erzeugt `font-variant: small-caps`?






# **BLOCK 3 – Schriftgröße, Zeilenhöhe & Einheiten (15 min)**

* Recherchiere zu line-height, letter-spacing
  , word-spacing

**Wichtige Typo-Properties:**

```css
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.05em;
word-spacing: 0.1em;
```

* `px` → fix
* `em` → relativ zur Schriftgröße
* `rem` → relativ zur Root-Schriftgröße
* `line-height: 1.5` → ohne Einheit

---

## **Übung**

Erstelle ein HTML-Dokument, das:

* `<h1>` mit `font-size: 2rem` setzt

* `<p>` mit:
  * `font-size: 1rem`
  * `line-height: 1.6`
  * `letter-spacing: 0.05em`

* `<small>` mit sehr kleiner Schrift (`0.8em`)



<h1>Überschrift</h1>
<p>Ein Absatz mit angenehmer Lesbarkeit.</p>
<small>Kleiner Hinweistext</small>


---

## **Fragen**

1. Was bedeutet `1rem`?
2. Was bedeutet `line-height: 1.6;`?
3. Warum ist `letter-spacing` oft in `em` sinnvoll?

