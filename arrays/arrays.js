// Arrays fangen immer bei indexNr. 0 an zu zählen

let myArray = ['hallo',2,'haha',4,'lal',6,7];


myArray[0];                       // myArray[] = in der eckigen Klammer gehört index rein 
                                  // Gibt Element mit der Index zurück 

myArray[0] =   'Griasti';         // so kann mann den wert ändern

myArray.length;                   // gibt die länge vom array zurück




// ---------------------For Schleifen-----------------

function forIn(){
    for(let item in myArray){         // for in Schleife geht durch Array durch und item bekommt den index von jeden Element
  
      console.log(myArray[item]);     // gibt die Werte von den Elementen zurück

        console.log(item);            //gibt die index nummern zurück
    }
}

function langeFor(){
    for (let item = 0; item < myArray.length; item++) {         //macht das gleiche wie for in ist nur die lange schreibweiße

      console.log(myArray[item]);                     
    
    }
}




