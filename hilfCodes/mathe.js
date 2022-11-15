
// funktion für Falkultät = 5! = 5*4*3*2
function falk(n){
    if(n <= 2){
        return n;
    }
    return n*falk(n-1);
}