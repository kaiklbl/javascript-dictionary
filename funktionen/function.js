// -----------------Fuktionen---------------


// Die normale standart Funktion ohne Argument
// Der return gibt etwas an das Programm zurück und beendet die Funktion

function machSachen(){
    return `Hello World`;
}

// -------------------------------------------------------------------------------------

// Funktionen sind auch Datentypen deswegen kann man sie auch in einer Variable speichern

const machSachen2 = function(){
    return `2tes Hello World`;
}

// -------------------------------------------------------------------------------------

// ----------Arrow Fuction----------

// Wenn man es in einer Variable speichert kann man das Wort function weglassen

const machSachen3 = () =>{
    return `3tes Hello World`;
}

// -------------------------------------------------------------------------------------

// Wenn die funktion nur eine Sache macht kann man die {} weglassen 
// Mann braucht kein return mehr Ausgabe wird automatisch zu return

const machSachen4 = () => `4tes Hello World`;

// -------------------------------------------------------------------------------------

// Bei einem Argument braucht man keine ()

const machSachen5 = arg => `5tes Hello World ${arg}`;

// ----------------------------------------------------------------------------------------

// Bei 2 oder mehr Argumente braucht man ()

const machSachen6 = (arg1,arg2) => `ich bin da ${arg1} und ich esse gerne ${arg2}`;

// -------------------------------------------------------------------------------------

// Mit ...args kann man so viele Elemente übergeben wie man will sie werden dann zu einem Array
// Falls man ein Array übergeben will muss man zuerst ...[Dann Array] sonst hat man ein verschachteltes Array

const machSachen7 = (...args) => 'So viele Elemente wie man will';

