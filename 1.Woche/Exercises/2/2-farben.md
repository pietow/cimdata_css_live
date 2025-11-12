# **BLOCK 1 – Farbname (color keywords)**

Beispiele: `red`, `blue`, `green`, `tomato`, `gold`, `rebeccapurple`

### **Übung**

Schreibe ein HTML-Dokument, in dem:

* `<h1>` die Farbe **tomato** hat
* `<p>` die Farbe **steelblue** hat
* `<button>` einen Hintergrund **gold** bekommt


### **Fragen**

1. Wie heißt die CSS-Schreibweise für z. B. „red“?

1. **Color Keywords**

2. Was ist der Vorteil von Farbnamen?
2. Schnell, lesbar, leicht zu merken.

3. Was ist der Nachteil?
3. Sehr unpräzise, geringe Auswahl.


# **BLOCK 2 – HEX-Farben (#RRGGBB)**

Format: `#FF0000` (Rot), `#00FF00` (Grün), `#0000FF` (Blau)

### **Übung**

Nutze HEX-Farben, um:

* `<h2>` dunkelblau `#001F54` zu färben
* `<p>` ein helles Grau `#f2f2f2` zu geben
* `<div>` mit `#ff8800` zu füllen


### **Fragen**

1. Wie viele HEX-Ziffern hat ein normaler Hex-Farbwert?
1. 6

2. Welcher Wert ist maximal?
2. `255` (Dezimalzahl) bzw. `FF` (Hexadezimalzahl)

3. Wofür stehen die Paarwerte RR, GG, BB?
3. Rot, Grün, Blau-Anteil.




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
  .box1 { 
    background: #00000080;
  }
  .box2 { 
    background:
  }
  .box3 { 
    background:
   }
</style>

<div class="box1">Box 1</div>
<div class="box2">Box 2</div>
<div class="box3">Box 3</div>
```

### **Fragen**

1. Wofür steht das letzte „AA“?
1. Alpha (Transparenz)

2. Was bedeutet `00`?
2. Voll transparent

3. Was bedeutet `FF`?
3. Voll deckend


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
1. Drei Werte 0–255

2. Welche zusätzlichen Werte akzeptiert rgba?
2. Eine Transparenz 0–1

3. Was bedeutet `0.0` bis `1.0`?
3. 0 = transparent, 1 = deckend



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
1. Farbwinkel 0–360°

2. Was sagt Lightness aus?
2. Helligkeit

3. Welcher Bereich hat Saturation?
3. 0%–100%



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




