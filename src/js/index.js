import LocomotiveScroll from 'locomotive-scroll';

const imagesLoaded = require("imagesloaded");


let scrollContainer = document.querySelector("[data-scroll-container]");

var scroll;

scroll = new LocomotiveScroll({
  el: scrollContainer,
  firefoxMultiplier: 100,
  smooth: true,
  getSpeed: true,
  multiplier: 1.5,

  
  
  
  tablet: {
    smooth: true,
    firefoxMultiplier: 100,
  },
});

imagesLoaded(scrollContainer, { background: true }, function () {
  scroll.update();
});

//print("test");
