let i = 0;

// so lange wie die Bedingung erfüllt ist wiederholl das
// Falls Bedingung immer wahr ist, ist es eine endlos Schleife
while(i < 5){
    alert(i);
    i++;
}

// führt zuerst Schleife aus und fragt dann erst ob Bedingung erfüllt ist
do{
    alert(i);
    i++
}while(i <5);