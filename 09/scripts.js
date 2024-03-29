"use strict";

(function () {

    let counter = 0;
  
    // Save this for later use
    const originalHTML = document.body.innerHTML;
    let messageWrapper = document.getElementById('message');
  
    document.onclick = function (event) {
      event.preventDefault();
      document.body.innerHTML = originalHTML;
      messageWrapper = document.getElementById('message');
    }
  
    document.onkeydown = function (event) {
      // Prevents the space bar from scrolling down when pressed
      if (event.keyCode === 32) {
        event.preventDefault();
      }
    }
  
    document.onkeyup = function (event) {
      const keyCodePressed = event.keyCode;
  
      const coordinates = helpers.generateCoordinates();
  
      messageWrapper.innerText = keyCodePressed + ' : ' + event.key;
  
      if (keyCodePressed === 13) {
        // Figure out how to append a div with a
        // message into the coordinateWrapper
        // press space bar or enter to change background color
        document.body.style.backgroundColor = helpers.generateRandomColorString();
     
    } else if (keyCodePressed === 16) {
        // shift key for bouncing circles
        const circle = document.createElement('div');
        circle.className = 'circle bounce infinite animated';
        // circle.style.left = coordinates.x + 'px;'; // same as next
        circle.style.left = `${coordinates.x}px`; // string notation
        circle.style.top = `${coordinates.y}px`;
        circle.style.backgroundColor = helpers.generateRandomColorString();
        document.body.appendChild(circle);

        
      } else if (keyCodePressed === 67) {

        const degreesRotation = Math.floor(Math.random() * 360);

        // c key for pacman image
        const dog = document.createElement('img');
        dog.className = 'dog';
        dog.src = `images/pacman.png`;
        dog.style.left = `${coordinates.x}px`;
        dog.style.top = `${coordinates.y}px`;
        dog.style.transform = `-webkit-rotate(${degreesRotation}deg)`;
        dog.style.transform = `rotate(${degreesRotation}deg)`;
        document.body.appendChild(dog);
      }
     else if (keyCodePressed === 65) {

      const degreesRotation = Math.floor(Math.random() * 360);

      // a key for ghost image
      const ghost = document.createElement('img');
      ghost.className = 'ghost';
      ghost.src = `images/ghost.png`;
      ghost.style.left = `${coordinates.x}px`;
      ghost.style.top = `${coordinates.y}px`;
      ghost.style.transform = `-webkit-rotate(${degreesRotation}deg)`;
      ghost.style.transform = `rotate(${degreesRotation}deg)`;
      document.body.appendChild(ghost);

    
  
      } else if (keyCodePressed === 80) {
        const degreesRotation = Math.floor(Math.random() * 360);
  
        // p for pacman phrase
        const phrase = document.createElement('h3');
        phrase.className = 'phrase';
        phrase.style.left = `${coordinates.x}px`;
        phrase.style.top = `${coordinates.y}px`;
        phrase.innerText = getPhrase();
        phrase.style.color = helpers.generateRandomColorString(false);
        document.body.appendChild(phrase);
  
      } else if (keyCodePressed === 32) {
        // Space bar randomly changes background color of the body
        helpers.removeClass('animated');
        document.body.style.backgroundColor = helpers.generateRandomColorString();
      }
  
      counter++;
      // always keeps the message on top of other elements
      messageWrapper.style.zIndex = counter;
    }
  
    const getPhrase = function () {
      const exclamations = ['✮ pacman ✮ '];
      const index = Math.floor(Math.random() * exclamations.length);
      return exclamations[index];
    }
 

    setInterval(function () {
      messageWrapper.style.color = helpers.generateRandomColorString(false);
    }, 1000);





  
    // This object contains helper functions
    const helpers = {
  
      removeClass: (cssClass) => {
        if (document.body.classList.contains(cssClass)) {
          document.body.classList.remove(cssClass);
        }
      },
  
      generateCoordinates: () => {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        return { x, y };
      },
  
      // helpers.generateRandomColorString()
      generateRandomColorString: (alpha = true) => {
        // random RBG values
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        // fully opaque if `false` is passed to function
        let a = 1;
        if (alpha) {
          a = Math.random();
        }
  
        return `rgba(${r},${g},${b},${a})`;
      }
  
    }
  
  }());