# Übung: Validierung, :not(), ::after und Unicode

## Aufgaben

1. Erstelle ein Formular mit drei Feldern:

   * Name (Pflicht)
   * E-Mail (Pflicht, type=email)
   * Kommentar (textarea, Pflicht)

2. Nach jedem Feld kommt ein `<span class="hint"></span>`.

3. Verwende CSS, um:

   * `:valid` Felder grün zu umranden
   * `:invalid` Felder rot zu umranden
   * mittels `::after` ein Unicode-Häkchen (✓) bzw. Kreuz (✕) anzuzeigen
   * das Feld `#kommentar` von der Häkchen/Kreuz-Anzeige auszuschließen (mit `:not()`)

4. Nutze die Unicode-Codes
   ✓ → `\2713`
   ✕ → `\2715`


