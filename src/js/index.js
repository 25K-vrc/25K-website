import LocomotiveScroll from 'locomotive-scroll';

const imagesLoaded = require("imagesloaded");


let scrollContainer = document.querySelector("[data-scroll-container]");

export var scroll;

scroll = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true,
  getSpeed: true,
  multiplier: 1.1,

  
  smartphone: {
    smooth: false,
  },
  
  tablet: {
    smooth: true,
  },
});

imagesLoaded(scrollContainer, { background: true }, function () {
  scroll.update();
});

document.addEventListener('lazyloaded', function(){
  locoScroll.update()
});

//print("test");
