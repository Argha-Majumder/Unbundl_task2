var slider = document.getElementById("slider");
var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");

arrowLeft.addEventListener("click", function() {
  slider.scrollLeft -= slider.offsetWidth;
});

arrowRight.addEventListener("click", function() {
  slider.scrollLeft += slider.offsetWidth;
});