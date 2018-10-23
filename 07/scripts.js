"use strict";

const messageWrapper = document.getElementById('message');



const x = prompt('Enter a number');
const y = prompt('Enter a number');
const z = prompt('Enter a number');
const w = prompt('Enter a number');

let message = '(' + x + ' + ' + y + ' - ' + z + ')' +' x ' + w + ' = ' + (((Number(x) + Number(y)) - Number(z)) * Number(w));


console.log(message);

messageWrapper.innerText = message;



