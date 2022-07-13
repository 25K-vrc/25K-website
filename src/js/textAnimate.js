//functions for animating text

const countAnimate = document.querySelectorAll('.textAnimate').length;

//console.log(countAnimate);

for(let i = 0; i <= countAnimate; i++){
  const text = document.querySelectorAll('.textAnimate')[i];

  const strText = text.textContent;
  const splitText = strText.split(" ");


  let char = 0;
  let timer = setInterval(onTick, 100);

  function onTick(){
      const span = text.querySelectorAll('span')[char];
      //console.log(text);
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


