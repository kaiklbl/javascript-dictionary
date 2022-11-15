// Paar methoden Was Javascript hat


//  break stoppt zähl durchgang 
let meineHelden = ['Darth Vader', 'Darth Revan','Darth Maul'];
for(i in meineHelden){
    alert(meineHelden[i])
    if(i == 1){
        break
    }
}

// continue überspringt den durchgang
for(i in meineHelden){
    if(i == 1){
        continue
    }
    alert(meineHelden[i])
}