"use strict";
var greet_1 = require("./greet");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
console.log("yolo");
function esSyntax(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
var myArray = [1, 2, 3];
esSyntax(myArray);
showHello("greeting", "TypeScript");
