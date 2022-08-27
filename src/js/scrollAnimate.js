import { scroll } from './index.js';

//functions for animating text

//console.log("textAnimate.js loaded");


scroll.on('call', func => {
  var countAnimate = document.querySelectorAll('.textAnimate.is-inview').length;
  //console.log("countAnimate:" + countAnimate);
  //console.log("textAnimate.js called");

  for(let i = 0; i < countAnimate; i++){
    const text = document.querySelectorAll('.textAnimate.is-inview')[i];
  
    //console.log(text);
  
    const strText = text.textContent;
    const splitText = strText.split(" ");
  
    //console.log(strText);
    //console.log(i);
  
    let char = 0;
    let timer = setInterval(onTick, 100);
  
    function onTick(){
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade-in-animate');
        
        char++;
        if(char === splitText.length){
            complete();
            return;
        }
    }
  
    function complete(){
        clearInterval(timer);
        timer = null;
    }
  }
});


//console.log("test");