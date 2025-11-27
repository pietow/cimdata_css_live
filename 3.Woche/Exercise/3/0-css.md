# **ÜBUNG 1 – Welche Regel gewinnt?**

Gegeben:

```css
p { color: blue; }  (0,0,1)
.text { color: green; } (0,1,0)
#intro { color: red; }  (1,0,0) /*Diese Regel gewinnt*/
```

HTML:

```html
<p id="intro" class="text">Hallo Welt</p>
```

**Frage:** Welche Farbe hat der Text?

color: red; 

# **ÜBUNG 2 – Kaskade + Reihenfolge**

CSS:

```css
.box { background: yellow; }
.box { background: orange; }
```

HTML:

```html
<div class="box"></div>
```

**Frage:** Welche Hintergrundfarbe gilt?
- orange



# **ÜBUNG 3 – Kombinatoren**

CSS:

```css
div p { color: blue; }  (0,0,2)
.container p { color: red; } (0,1,1)
```

HTML:

```html
<div class="container">
    <p>Text</p>
</div>
```

**Frage:** Blau oder Rot?

Rot 

# **ÜBUNG 4 – Attributselektor vs. Klasse**

CSS:

```css
.button { padding: 10px; }
button[type="submit"] { padding: 20px; }
```

HTML:

```html
<button class="button" type="submit">OK</button>
```

**Frage:** Welches Padding gilt?

20px - der Attributselektor hat Spezifität von (0,1,1) 
---

# **ÜBUNG 6 – !important**

CSS:

```css
.btn { color: green !important; }
#save { color: red; }
```

HTML:

```html
<button id="save" class="btn">Speichern</button>
```

**Frage:** Welche Farbe gilt?
- grün wegen !important(schlägt id Selektor)

---

# **ÜBUNG 7 – Mehrere Klassen**

CSS:

```css
.btn.primary { background: blue; } /*2 Klassen*/
.primary { background: purple; }/*1 Klasse*/
```

HTML:

```html
<button class="btn primary"></button>
```

**Frage:** Welche Farbe?
- Blau


---

# **ÜBUNG 8 – Universal-Selektor**

CSS:

```css
* { color: gray; } (0,0,0)
p { color: black; } (0,0,1)
```

HTML:

```html
<p>Hallo</p>
```

**Frage:** Welche Textfarbe gilt?

- Schwarz
---

# **ÜBUNG 9 – Verschachtelte Selektoren**

CSS:

```css
ul li a { color: blue; } (0,0,3)
.nav a { color: red; } (0,1,1)
```

HTML:

```html
<ul class="nav">
  <li><a href="#">Link</a></li>
</ul>
```

- rot


# **ÜBUNG 10 – IDs vs. viele Klassen**

CSS:

```css
.big.red.round { border-radius: 50%; } (0,3,0)
#hero { border-radius: 0; } (1,0,0)
```

HTML:

```html
<div id="hero" class="big red round"></div>
```

border-radius: 0 wird angezeigt
