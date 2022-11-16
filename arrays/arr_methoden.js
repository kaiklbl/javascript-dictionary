// -----------------------------------------------------------------------------------------

// Hinzufügen 

myArray.unshift('erstes');          //unshift fügt ein Element am Anfang von einem Array dazu

myArray.push(9);                    //push fügt hinten ein Element Dazu

myArray[myArray.length] = 'Susi';         // fügt hinten in Array ein 

// ------------------------------------------------------------------------------------------

// Entfernen

myArray.shift();                    //shift entfernt das erste Element

myArray.pop();                      // pop entfernt das letzte Element


// ------------------------------------------------------------------------------------------

// Suche
myArray.indexOf('haha');                  // indexOf gibt als rückgabewert die indexNr vom gesucheten Elemnt zurück

// umdrehen
myArray.reverse();                        // reverse dreht das Komplette Array um 


// ------------------------------------------------------------------------------------

// String / verbinden
myArray.toString();                       // toString zeigt Array auf seite mit , an und macht daraus einen String

myArray.join('+');                        // join zeigt Array an mit dazwischen das was in Klammern steht


myArray.concat(zweitesArray);       // concat erzeugt ein neues Array wo man zwei oder mehr arrays miteinander verbinden kann
                                    // man kann auch nur Strings reinschreiben dann kommen sie hinten an das Array
                                    //die alten Arrays bleiben unberührt

//--------------------------------------------------------------------------------------    

// Tauschen / Verkleinern

zweitesArray.splice(2,0,'haha', 'prost');       //splice fügt Elemente ein / der Erste Parameter bestimmt die Position wo es eingefügt werden soll
                                                //der zweite Parameter beschreibt wie viele Elemnte nach Param 1 entfernt werden
                                                //also kann man mit splice auch nur Elemente löschen

                                           

zweitesArray.slice(2);       // slice erstellt neues Array aus einem alten und entfernt die stellen am anfang

zweitesArray.slice(1,3);     // slice entfernt jetzt alles was nicht innerhalb von den zahlen steht 
                            //3 bleibt dabei 1 kommt weg alles außerhalb kommt auch weg

// -----------------------------------------------------------------------------

// sortieren

fünftesArray.sort();              // sort sortiert das Array nach alphabet

// ---------------------------------------------------------------------------------

//----------------- Schleifen

// Überprüfung---------

arr.every(test);            // every geht durch jedes Element vom Array durch und führt funktion aus
                            // wichtig every gibt nur true wenns bei allen passt zurück 
                            // oder false wenns bei einem nicht passt
// --------------------


arr.map(test2);         // geht durch jedes Element  und führt function aus 
                        // erstellt ein neues Array
                        // Das original Array bleibt unberührt

                        

const test3 = (total,x) => total + x;

arr.reduce(test3);

arr.reduceRight(test3)

// Reduce nimmt das erste Element von links und führt dann nach der reihe die Funktion aus
// ReduceRight nimmt das letzte Element
// gut wenn man vom ersten Element alle anderen dazu rechnen will
// gibt nur ergebnis zurück array bleibt unberührt

// ----------------------------------------------------------------------------------

let arr = Array.from('irgendwas');

// erzeugt ein Array von einem iterierbaren Objekt


// -----------------------------------------------------------------------------------

// Gibt von einem String alle Buchstaben einzeln in einem Array zurück 
let x = [...myString];


// ----------------------------------------------------------------------------------


myArray.at(0);
myArray.at(1);      // ist ganz normal wie bei indexierung spricht das 2 Element an
myArray.at(2);

myArray.at(-1);
myArray.at(-2);     // fängt von hinten zum zählen an fängt aber bei -1 an
myArray.at(-3);

