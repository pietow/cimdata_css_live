

# ** Variablen & Datentypen**

### **Aufgabe**

Lege drei Variablen an: einen String, eine Number und einen Boolean. Gib alle mit `console.log()` aus.

```js
let text = "irgendwas";
console.log(text); // "irgendwas"

let num = 0;
console.log(num);

let bool = true;
console.log(bool); 
```


# **Template Strings**

### **Aufgabe**

Erstelle einen Text mit Variablenersetzung via Template-String.

```js
let user = 'Bob';
console.log(`Hallo ${user}`)

```

---



# **Arithmetische Operatoren**

### **Aufgabe**

Berechne:
`(100 / 2) - (5 * 4)` und gib das Ergebnis aus.

```js

let ergebnis = 100 / 2 - 5 * 4
console.log(ergebnis)
```

---



# **Funktionen schreiben**

### **Aufgabe**

Schreibe eine Funktion `quadrat(n)`, die `n*n` zurückgibt.

```js
function quadrat(n) {
    return n * n;
}

console.log(quadrat(3)) //9
```



# **console.log Styling**

### **Aufgabe**

Gib einen farbigen Konsolen-Text aus.

```js
console.log("%cHallo Welt", "color: pruple")
```


# **Standarddialoge**

### **Aufgabe**

Verwende `confirm()`: Frage den User, ob er weitermachen möchte.

```js
confirm("weiter?")
```



# **Konsole als Werkzeug**

### **Aufgabe**

Erstelle eine Funktion und führe sie später über die Browserkonsole aus.

```js
function greet() {
    console.log("Hallo aus Funktion")
    return 'Rückgabewert'
}

console.log(greet())
```

# **JS in externer Datei**

### **Aufgabe**

Schreibe ein Script in eine externe Datei und binde es in HTML ein.

```html
<script src="app.js"></script>
```


# **Bonus - Node.js als JS-Laufzeit**

### **Aufgabe**

Speichere ein Script und führe es mit Node aus.

Terminal:

```
node test.js
```


