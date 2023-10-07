
  // TODO: Funcion recursiva que va cambiando el titulo de forma progresiva (Texto a colocar, Texto Actual, Letra actual)
  async function dinamic(text,first,i=1){
    setTimeout(() => {
      var act = ""
      var title = (document.getElementById("title"));
      if(first.length>0){
        act=first.substring(0, first.length - 1);
      }
      else{
        act=text.substring(0,i);
      }
      title.innerHTML=act
      
      if(i<text.length){
        if(first.length>0){
          dinamic(text,act)
        }
        else{
          dinamic(text,"",i+1)
        }
      }
    }, 100);
  }

 function titleText(position){

    switch (position) {
      case 0:
         dinamic(" Creadores"," Crecer")
        break;
      case 1:
         dinamic(" Empresarios"," Creadores")
        break;
      case 2:
         dinamic(" Negocios"," Empresarios")
        break
      case 3:
         dinamic(" Empresas"," Negocios")
        break;
      case 4:
         dinamic(" Crecer"," Empresas")
      break;
    }
  }

async function control(r){
        if(r>=5){
            r=0
        }
        titleText(r)
        setTimeout(() => {
            control(r+1)
        }, 4000)
}

  control(0)

function callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.style.transform = 'rotateX(0deg)';
      }
    });
  }
  
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };
  
  const observer = new IntersectionObserver(callback, options);
  const target = document.querySelector('#cambio');
  observer.observe(target);


  let myElement = document.querySelector('.descuento_text');
  simplyCountdown(myElement, {
    year: 2023, // required
    month: 11, // required
    day: 1, // required
    hours: 0, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'dia', plural: 'dias' },
        hours: { singular: 'hora', plural: 'horas' },
        minutes: { singular: 'minuto', plural: 'minutos' },
        seconds: { singular: 'second', plural: 'seconds' }
    },
    plural: true, //use plurals
    inline: true, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false,
    onEnd: function () {
        // your code
        return;
    },
    refresh: 1000, //default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false, // enable count up if set to true
});