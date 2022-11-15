// -------------fetch API----------------

fetch('der Pfad')                        //was gehollt werden soll
.then(response => response.text())       // bekommt response Objekt zurück und wandelt in text/json/blob um
.then(result => console.log(result))     // mach was damit zb Tabelle bauen
.catch(err => console.log(err));         // fängt Fehler ab und zeigt sie an