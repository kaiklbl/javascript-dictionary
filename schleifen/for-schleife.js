let meineHelden = ['Darth Vader', 'Darth Revan','Darth Maul'];

//  Die Lange Version einer for Schleife
for(let i = 0; i < meineHelden.length; i++){
    alert(meineHelden[i]);
}

// Schleift durch die Properties bei einem objekt
for(let i in meineHelden){
    alert(meineHelden[i])
}

// schleift durch iterierbare objekte durch
for(let x of meineHelden){
    console.log(x);
}

// -------------------ES6 Methoden-------------------------

// geht jedes einzelne Element durch und führt dabei eine funktion aus
myArr.forEach(element => {
    console.log(element);
});

// geht durch Array durch und gibt mir erstes elem zurück auf die die beschreibung passt
myArr.find(elem => elem == 'gansi')


// geht durch Array durch und gibt mir alle elem zurück wo beschreibung passt
// gibt alls rückgabewert immer ein array zurück
myArr.filter(elem => elem == 'memet');


// geht durch array durch / kann an jedes elem etwas anhängen oder dazu rechnen
// gibt ein array mit zusatz zurück
myArr.map(elem => elem + ' stinkt')