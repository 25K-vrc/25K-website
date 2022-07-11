const nav = document.querySelector("nav");
const title = document.querySelector(".bg-cover");

const titleOptions = {};

const titleObserver = new IntersectionObserver(
  function(entries, titleObserver) {
    entries.forEach(entry => {
      //console.log(entry.target);

      if (!entry.isIntersecting) {
        nav.classList.add("nav-scrolled");
      }
      else {
        nav.classList.remove("nav-scrolled");
      }


    })
}, 
titleOptions);

titleObserver.observe(title);