import hallo from "./test2.js";         //import hollt von der export Datei (hallo) = der undefinierte string

console.log(hallo);

import halloFun from "./test3.js";      //import hollt von der export Datei (halloFun) = ist jetzt der functions Name

console.log(halloFun());

import {plus, minus as minusZahl} from "./test4.js";    //{} da stehn functionen, variablen ... die einen Namen haben drinnen
                                                        // mit , kann man mehrer von dieser Datei holln 
                                                        //mit as kann man den Namen ändern

console.log(plus());
console.log(minusZahl(30));


// bei module Programmiereung kein onclick möglich