import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

console.log("yolo");

function esSyntax(array: number[]) {
  for (let i = 0; i < array.length; i ++) {
      console.log(array[i]);
  }
}

let myArray: number[] = [1,2,3];

esSyntax(myArray);


showHello("greeting", "TypeScript");
