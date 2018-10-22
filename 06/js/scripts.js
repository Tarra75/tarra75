"use strict";

const messageWrapper = document.getElementById('message');



const name = prompt('What is your name?');
let age = prompt('What is your age?');
let color = prompt('What is your favorite color?')

let message = 'Hello, ' + name + '!\n '; 
message += ' You are ' + age + ' years old!\n ';

if (age > 30) {
message += 'That is old!';
} else if (age < 13){ 
message += 'Should you even be on the internet?\n';
}

message += 'Your favorite color is ' + color  + '! ' ;


console.log(message);

messageWrapper.innerText = message;


/*console.log('Hello, ' + name + ' ! ');*/
/*console.log('Hiii, ' + age + ' ! ');*/

