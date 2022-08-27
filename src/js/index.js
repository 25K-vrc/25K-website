import LocomotiveScroll from 'locomotive-scroll';

const imagesLoaded = require("imagesloaded");


let scrollContainer = document.querySelector("[data-scroll-container]");

export var scroll;

scroll = new LocomotiveScroll({
  el: scrollContainer,
  firefoxMultiplier: 100,
  smooth: true,
  getSpeed: true,
  multiplier: 1.1,

  
  smartphone: {
    smooth: true,
  },
  
  tablet: {
    smooth: true,
    firefoxMultiplier: 100,
  },
});

imagesLoaded(scrollContainer, { background: true }, function () {
  scroll.update();
});

//print("test");
