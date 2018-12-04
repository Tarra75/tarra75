window.onload = function () {

    const doSomething = function () {
      console.log('did something');
    };
  
    inView('#section-2')
      .on('enter', el => {
        el.style.backgroundColor = 'blue';
      })
      .on('exit', el => {
        el.style.backgroundColor = 'lightcoral';
      })
  inView('#section-3 p')
     .on('enter', el => {
    el.className = 'active';
     })
     .on('exit', el => {
         el.className=''
     }





    )}
