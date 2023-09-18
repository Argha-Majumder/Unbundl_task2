var slider = document.getElementById("slider");
var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");

let contentListOne = document.getElementById('content1');
let contentListTwo = document.getElementById('content2');
let toggleOne = true;
let toggleTwo = true;

arrowLeft.addEventListener("click", function() {
    slider.scrollLeft -= slider.offsetWidth;
});

arrowRight.addEventListener("click", function() {
    slider.scrollLeft += slider.offsetWidth;
});

function openMenuOne() {
    if (toggleOne) {
        toggleTwo = false;
        openMenuTwo();
    }
    contentListOne.style.visibility = toggleOne?'visible':'hidden';
    toggleOne = !toggleOne;
}

function openMenuTwo() {
    if (toggleTwo) {
        toggleOne = false;
        openMenuOne();
    }
    contentListTwo.style.visibility = toggleTwo?'visible':'hidden';
    toggleTwo = !toggleTwo;
}

