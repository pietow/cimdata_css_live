
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
Das `alt`-Attribut beschreibt das Bild für Screenreader und wenn das Bild nicht geladen werden kann.

2. Was passiert ohne `width` und `height`?
Ohne `width`/`height` springt das Layout beim Nachladen, weil kein Platz reserviert ist.



#  **Teil 2 – `<figure>` und `<figcaption>` **

### **Aufgabe**

Erstelle ein Bild mit einer Bildunterschrift.
Die Bildunterschrift soll *unter* dem Bild stehen.
Nutze unbedingt `<figure>` und `<figcaption>`.

### **Fragen**

1. Wozu ist `<figure>` gedacht?
`<figure>` gruppiert Medien + deren Beschreibung.
2. Muss `<figcaption>` immer unter dem Bild stehen?
Nein, `<figcaption>` kann auch über dem Bild stehen (erstes oder letztes Element).
3. Wie viele `<figcaption>` pro `<figure>` sind erlaubt?
Pro `<figure>` ist **genau ein** `<figcaption>` erlaubt.


# **Teil 3 – Lazy Loading **

### **Aufgabe**

Baue eine Seite, bei der das zweite Bild erst beim Scrollen geladen wird.
Verwende `loading="lazy"` und einen hohen Abstand davor.

###  **Fragen**

1. Was bewirkt `loading="lazy"`?
Bilder werden erst geladen, wenn sie in der Nähe des sichtbaren Bereichs erscheinen.
2. Wird ein Bild mit `lazy` garantiert erst beim Scrollen geladen?
Nein – bei sehr kleinen Bildern, sehr schnellem Netz oder geringer Distanz lädt Chrome manchmal trotzdem früh.



# **Teil 4 – Bilder tauschen mit `<picture>`**

### **Aufgabe**

Erstelle eine Seite, die je nach Bildschirmbreite ein anderes Bild lädt.

Regeln:

* **bis 600px** → quadratisches Bild
* **bis 800px** → Hochformat
* **ab 801px** → Panorama

verwende für die Bilder https://picsum.photos/

### **Lösungscode**

```html
<!doctype html>
<html lang="de">
<meta charset="utf-8">
<title>Picture Übung</title>
<body>

<picture>
  <source media="(max-width: 600px)" srcset="birne-quadrat.webp">
  <source media="(max-width: 1023px)" srcset="birne-hoch.webp">
  <source media="(min-width: 1024px)" srcset="birne-pano.webp">
</picture>

</body>
</html>
```




