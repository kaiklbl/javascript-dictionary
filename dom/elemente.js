// Schlüsselwort this

function myFunk(Element){
    Element.innerHTML = 'supagail';
}
// in HTML kann man das jetzt mit onclick auf jedes Element benutzen indem man in die
//  Klammern this schreibt
// <h1 onclick="myFunk(this)" this meint hier immer sich selber
// ------------------------------------------------------------------------------

function neuesEl(){
    let p = document.createElement('p');
    p.innerHTML = 'du arge Ratettete';
    div.appendChild(p);
}
// um ein neues <p> zu erzeugen