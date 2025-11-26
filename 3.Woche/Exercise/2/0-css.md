# **ÜBUNG 1 – Welche Regel gewinnt?**

Gegeben:

```css
p { color: blue; }
.text { color: green; }
#intro { color: red; }
```

HTML:

```html
<p id="intro" class="text">Hallo Welt</p>
```

**Frage:** Welche Farbe hat der Text?



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



# **ÜBUNG 3 – Kombinatoren**

CSS:

```css
div p { color: blue; }
.container p { color: red; }
```

HTML:

```html
<div class="container">
    <p>Text</p>
</div>
```

**Frage:** Blau oder Rot?

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


---

# **ÜBUNG 7 – Mehrere Klassen**

CSS:

```css
.btn.primary { background: blue; }
.primary { background: purple; }
```

HTML:

```html
<button class="btn primary"></button>
```

**Frage:** Welche Farbe?



---

# **ÜBUNG 8 – Universal-Selektor**

CSS:

```css
* { color: gray; }
p { color: black; }
```

HTML:

```html
<p>Hallo</p>
```

**Frage:** Welche Textfarbe gilt?

---

# **ÜBUNG 9 – Verschachtelte Selektoren**

CSS:

```css
ul li a { color: blue; }
.nav a { color: red; }
```

HTML:

```html
<ul class="nav">
  <li><a href="#">Link</a></li>
</ul>
```



# **ÜBUNG 10 – IDs vs. viele Klassen**

CSS:

```css
.big.red.round { border-radius: 50%; }
#hero { border-radius: 0; }
```

HTML:

```html
<div id="hero" class="big red round"></div>
```

