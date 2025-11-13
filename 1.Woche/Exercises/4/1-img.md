
#  **Teil 1 – Bilder mit `<img>` einbinden**

### **Aufgabe**

Erstelle eine HTML-Seite, die ein Bild mit `<img>` einbindet.
Das Bild soll:

* ein korrektes `alt`-Attribut haben
* mit `width` und `height` feste Größe reservieren
* sinnvoll benannt sein (z. B. `hund.jpg`)

Die Datei liegt im `images` Ordener.

### **Fragen**

1. Wofür braucht man das `alt`-Attribut?
2. Was passiert ohne `width` und `height`?


#  **Teil 2 – `<figure>` und `<figcaption>` **

### **Aufgabe**

Erstelle ein Bild mit einer Bildunterschrift.
Die Bildunterschrift soll *unter* dem Bild stehen.
Nutze unbedingt `<figure>` und `<figcaption>`.

### **Fragen**

1. Wozu ist `<figure>` gedacht?
2. Muss `<figcaption>` immer unter dem Bild stehen?
3. Wie viele `<figcaption>` pro `<figure>` sind erlaubt?


# **Teil 3 – Lazy Loading **

### **Aufgabe**

Baue eine Seite, bei der das zweite Bild erst beim Scrollen geladen wird.
Verwende `loading="lazy"` und einen hohen Abstand davor.

###  **Fragen**

1. Was bewirkt `loading="lazy"`?
2. Wird ein Bild mit `lazy` garantiert erst beim Scrollen geladen?



# **Teil 4 – Bilder tauschen mit `<picture>`**

### **Aufgabe**

Erstelle eine Seite, die je nach Bildschirmbreite ein anderes Bild lädt.

Regeln:

* **bis 600px** → quadratisches Bild
* **bis 800px** → Hochformat
* **ab 801px** → Panorama
* Fallback über `<img>`

verwende für die Bilder https://picsum.photos/




