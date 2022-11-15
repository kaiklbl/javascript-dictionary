// Animation mit Javascript
// für dieses beispiel braucht man ein Element zum bewegen

let div             = document.querySelector('#red');

function animation(){
    var add = 0;
    var id = setInterval(e =>{
        if(add >= 300){
            clearInterval(id);
        }else{
            div.style.marginLeft = add + 'px';
            add++;
        }
    }, 5);
}