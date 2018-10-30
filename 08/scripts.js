"use strict";

//1. tie into keyup event listener
//2. display keycode of key pressed

let keyCodePressed; 
let coordinateWrapper = document.getElementById('coordinates'); 

document.onkeyup = function (event) {
 const keyCodePressed = event.keyCode; 
 document.getElementById('message').innerHTML = keyCodePressed;
 if(keyCodePressed === 13) {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    console.log(x, y);
    const coordinates = 'x: ' + x + ', y:' + y;
    coordinateWrapper.innerHTML = coordinates;
    //Figure out how to append div with a 
    // message into coordinateWrapper
    coordinateWrapper.appendChild
   // console.log(Math.floor(Math.random()*100));
 }
}




//document.onkeyup = function (event) {
//    const keyCodePressed = ('hi'); 
//    document.getElementById('message').innerHTML = keyCodePressed;
//    }

//   let keyCodepressed; 

//console.log(Math.random());