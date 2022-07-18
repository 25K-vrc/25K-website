const buttonRight = document.getElementById('m-button-right');
const buttonLeft = document.getElementById('m-button-left');

buttonLeft.onclick = function() {
  document.getElementById('member-scroller').scrollLeft -= 500;
};

buttonRight.onclick = function() {
  document.getElementById('member-scroller').scrollLeft += 500;
};