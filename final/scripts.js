window.onload = function () {

     inView('#section-2')
      .on('enter', el => {
        el.className = 'active';
      }) 
     .on('exit', el => {
        el.className = '';
      })

      inView('#section-2f')
      .on('enter', el => {
        el.className = 'active';
      }) 
     .on('exit', el => {
        el.className = '';
      })

      inView('#section-2ff')
      .on('enter', el => {
        el.className = 'active';
      }) 
     .on('exit', el => {
        el.className = '';
      })

      inView('#section-2fff')
      .on('enter', el => {
        el.className = 'active';
      }) 
     .on('exit', el => {
        el.className = '';
      })

      inView('#section-3')
      .on('enter', el => {
       el.className = 'active';
    }) 
    .on('exit', el => {
      el.className = '';
     })

     
      inView('#section')
      .on('enter', el => {
        el.className = 'active';
      }) 
      .on('exit', el => {
        el.className = '';
      })


}