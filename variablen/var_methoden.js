
typeof(Var);     // gibt den Datentyp aus



// -------------String methoden-----------------

Variable.length;    // Gibt die länge zurück

// Verkürzen / Ersetzten
Variable.slice(start,end);      // Gibt nur den bereich dazwischen zurück (verändert das original nicht) 

Variable.substring(start,end);  // macht das gleiche wie slice

Variable.replace('Altes','Neues');      // Ersetzt einen String mit einem Neuen

Variable.replace(/Altes/g, 'Neues');    // Ersetzt alle Strings gegen den Neuen

Variable.replaceAll('Altes','Neues');   // Ersetzt alle Strings gegen den Neuen  (funktioniert nicht im Internet Explorer)

// Zusammenführen
Variable.concat('String oder', Variable);       // Macht das gleiche wie + und verbindet String miteinander

// Klein / Groß
Variable.toUpperCase();      // Macht alles zu Großbuchstaben

Variable.toLowerCase();     // Macht alles zu Kleinbuchstaben

// Leerzeichen
Variable.trim();        // Enfernt Leerzeichen vom String

Variable.trimStart();       // Entfernt Leerzeichen aber nur vom Anfang

Variable.trimEnd();         // Entfernt Leerzeichen aber nur vom Ende

// Platzhalter
Variable.padStart(4,'x');   // Schreibt sozusagen platzhalter von vorne weg hin, zB: Eingabe=30 dann kommt xx30, Eingabe=1 dann kommt xxx1

Variable.padEnd(4,'x');     // Schreibt sozusagen platzhalter von hinten weg hin, zB: Eingabe=30 dann kommt 30xx, Eingabe=1 dann kommt 1xxx 

// Einzelne Buchstaben
Variable.charAt(Index);     // Gibt den Buchstaben mit dem Index zurück

Variable.charCodeAt(Index);     // Gibt den unicode von dem Index zurück

Variable[Index];        // Um auf einzelne Buchstaben zugreifen zu können

// Array
Variable.split('Bei welchem Zeichen');      // Erstellt ein Array , Die Elemente werden immer beim Zeichen getrennt

Variable.match('');     // Gibt ein Array mit dem String, Index zurück

Variable.matchAll('');      // Zusätzlich mit Array.from() - gibt es dir ein Array mit allen Inhalten 

// Suche
Variable.indexOf('$');      // Gibt den Index vom gesuchten zurück

Variable.search('$');      // Gibt den Index vom gesuchten zurück ; Unterschie zu indexOf: search kann regular expression

Variable.includes('')       // Gibt true wenn es gibt oder false wenn es nicht gibt zurück

// Startet / Endet mit
Variable.startsWith('');        // Gibt true oder false zurück, Schaut auf erste (Zeichen, Wort);

Variable.endsWith('');      // Gibt true oder false zurück, Schaut auf letzte (Zeichen, Wort);

// Zu String
Variable.toString();        // Macht aus der Variable einen String





