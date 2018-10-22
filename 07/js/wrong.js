"use strict";

const messageWrapper = document.getElementById('message');



function myFunction() {
    var y = document.getElementById("txt1").value;
    var z = document.getElementById("txt2").value;
    var w = document.getElementById("txt3").value;
    var t = document.getElementById("txt4").value;
    var x = (Number(y) + Number(z) - Number(w)) * Number(t);
    document.getElementById("equation").innerHTML = x;
  } 

  let message =  document.getElementById("txt1").value + ' + ' + document.getElementById("txt2").value + 
  ' - ' + document.getElementById("txt3").value + ' x ' + document.getElementById("txt4").value + ' = ' ;




console.log(message);

messageWrapper.innerText = message;


/*console.log('Hello, ' + name + ' ! ');*/
/*console.log('Hiii, ' + age + ' ! ');*/



