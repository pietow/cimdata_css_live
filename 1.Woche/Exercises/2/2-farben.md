# **BLOCK 1 – Farbname (color keywords)**

Beispiele: `red`, `blue`, `green`, `tomato`, `gold`, `rebeccapurple`

### **Übung**

Schreibe ein HTML-Dokument, in dem:

* `<h1>` die Farbe **tomato** hat
* `<p>` die Farbe **steelblue** hat
* `<button>` einen Hintergrund **gold** bekommt


### **Fragen**

1. Wie heißt die CSS-Schreibweise für z. B. „red“?
2. Was ist der Vorteil von Farbnamen?
3. Was ist der Nachteil?


# **BLOCK 2 – HEX-Farben (#RRGGBB)**

Format: `#FF0000` (Rot), `#00FF00` (Grün), `#0000FF` (Blau)

### **Übung**

Nutze HEX-Farben, um:

* `<h2>` dunkelblau `#001F54` zu färben
* `<p>` ein helles Grau `#f2f2f2` zu geben
* `<div>` mit `#ff8800` zu füllen


### **Fragen**

1. Wie viele HEX-Ziffern hat ein normaler Hex-Farbwert?
2. Welcher Wert ist maximal?
3. Wofür stehen die Paarwerte RR, GG, BB?

### **Antworten**

1. 6
2. `FF` (255)
3. Rot, Grün, Blau-Anteil.

---

# **BLOCK 3 – HEX mit Alpha (#RRGGBBAA)**

Format: `#RRGGBBAA` → letzter Wert ist Transparenz

###  **Übung**

Erzeuge Transparenzeffekte:

* ein halbtransparentes Schwarz: `#00000080`
* ein fast unsichtbares Rot: `#FF000020`
* ein 75% sichtbares Blau: `#0000FFBF`

Setze 3 Hintergrundfarbe mit unterschiedlichen Transparenzen auf 3 verschiedene `<div>`.

**Lösung: Ersetze die Fragezeichen mit CSS**

```html
<style>
  .box1 { ???????????????? }
  .box2 { ?????????????????? }
  .box3 { ???????????????? }
</style>

<div class="box1">Box 1</div>
<div class="box2">Box 2</div>
<div class="box3">Box 3</div>
```

### **Fragen**

1. Wofür steht das letzte „AA“?
2. Was bedeutet `00`?
3. Was bedeutet `FF`?


# **BLOCK 4 – rgb() und rgba()**

Format:

* `rgb(255, 0, 0)` → Rot
* `rgba(255, 0, 0, 0.5)` → Rot, 50% transparent

### **Übung**

Erstelle:

* einen grünen Text: `rgb(?????)`
* ein halbtransparentes Grau: `rgba(120,120,120,???)`
* einen blau mit 80% Deckkraft `rgba(0,0,????,???)`


### **Fragen**

1. Welche Werte akzeptiert rgb?
2. Welche zusätzlichen Werte akzeptiert rgba?
3. Was bedeutet `0.0` bis `1.0`?



# **BLOCK 5 – hsl() & hsla()**

Format:

* `hsl(Hue, Saturation, Lightness)`
* `hsla(H,S,L,A)`

### **Übung**

Erzeuge:

* ein kräftiges Orange: `hsl(30, 100%, 50%)`
* ein entsättigtes Blau: `hsl(220, 40%, 60%)`
* ein transparentes Grün: `hsla(120, 100%, 40%, 0.5)`


### **Fragen**

1. Was stellt der Hue-Wert dar?
2. Was sagt Lightness aus?
3. Welcher Bereich hat Saturation?



# **Bonus-BLOCK 6 – Farbverläufe (gradients)**

* Recherchiere Farbgradienten in CSS

Format:
`linear-gradient(direction, color1, color2)`
oder
`radial-gradient(...)`

### **Übung**

Erzeuge drei DIV-Boxen:

* **Linearer Verlauf**: Blau → Hellblau
* **Diagonal**: Orange → Pink
* **Radialer Verlauf**: Gelb → Transparent


### **Fragen**

1. Welche CSS-Funktion erzeugt Verläufe?
2. Kann ein Gradient als `background` eingesetzt werden?
3. Braucht man eine extra Datei für Verläufe?




