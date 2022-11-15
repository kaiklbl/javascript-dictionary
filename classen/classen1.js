
// Eine function um einen Pinguin zu erstellen
function Pinguin(name,alter,geschw){
    this.name = name;
    this.alter = alter;
    this.geschw = geschw;
    this.getFaster = function (){
        this.geschw += 3;
    }
}

// hier werden 2 Pinguine angelegt
let pingu1 = new Pinguin('Franz',43,8);
let pingu2 = new Pinguin('Hansi',66,4);

// um durch ein objekt die einzelnen werte zum durchgehen
for(let x in pingu1){
    window.alert(pingu1[x]);
}

// hier wird eine methode von Pinguin aufgerufen
pingu1.getFaster();

// --------------Classen--------------------

class Person{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    greeting(){
        console.log('Griasti');                 // eine Methode der Klasse
    }
    get fullName(){
        return this.firstname + this.lastname;          // getter zum anzeigen eines Wertes
    }
    set name(first){
        this.firstname = first;
                           // setter zum verändern von Werten oder zum setzten
    }

    static zeitBisGeburt(){
        return '100 Jahre';         // static methoden kann nur die Klasse aufrufen nicht
    }                               // nicht die objekte
}

let kevin = new Person('Kevin','Muster',33);

kevin.fullName;             // getter methoden ohne () aufrufen

kevin.name = 'Maxi';        // setter werden so aufgerufen Maxi ist neuer vorname

Person.zeitBisGeburt();     // kann nur über Klasse aufgerufen werden 

class Student extends Person{
    constructor(firstname,lastname,age,course){
        super(firstname,lastname,age);
        this.course = course;
    }
}
