
// ---------------------------------------- Variablen-------------------------------------------

// variable mit let hat einen Block Scope , kann wieder überschrieben werden
let person = 'Kevin';           // String

// variablen mit const können in nachhinein nicht mehr verändert werden, hat einen Block Scope
const geboren =  1999;          // Number

// Ist der Datentyp für große Zahlen
let bigInt = 123456789n;

// variable var war einmal haben einen function scope
var alter = false;              // Bool

// ohne sollte man nicht machen hat einen globalen Scope 
// mit 'use strict' am programmanfang verhindert man das man es unabsichtlich schreibt weil man bekommt Fehler
beruf = 'Kellner'

// so überschreibt man vorhanden Variable
person = 'gandalf';

console.log(person);        // Ausgabe über Konsole

let x;          // leere Variable was in nachhinein erst ein Wert bekommt
x = 5

let y = 10;

let z = x + y;      // rechnet zwei Variablen zusammen und übernimmt das Ergebniss auf z
     

let text1 = 'hansi';
let text2 = 'Peter';

let fullText = text1 + text2;   // zwei Strings mit + werden zusammengehängt, auch bei string (Zahlen)




// Objekte in Javascript (Asoziative Arrays)

// in Objekte kann man alles rein muss mit key:value pairs sein
var pinguin = {
    name:'Skipper',
    alter:43,
    isAlive:true
};

// beim ausrufen muss man dann nur noch name / alter schreiben
const { name,alter } = pinguin;

// mit der DOT syntax um auf die Werte zuzugreifen
console.log(pinguin.alter);


// Template Literals ist eine Neue Form von Strings zum schreiben 
// mit ${} kann man variablen einbinden ohne + 
let newString = `Mein Name ist ${newVar}`;