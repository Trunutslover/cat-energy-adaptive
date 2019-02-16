var imageBefore = document.querySelector(".example__image--before");
var imageAfter = document.querySelector(".example__image--after");
var slider = document.querySelector(".example__slider");
var x1 = slider.value;
var buttonBefore = document.querySelector(".example__button--before");
var buttonAfter = document.querySelector(".example__button--after");
var imageWidth = imageBefore.width;
var imageHeight = imageBefore.height;
var result = imageWidth / 2;

buttonBefore.addEventListener("click", function (evt) {
    evt.preventDefault();

    slider.value = 0;
    x1 = slider.value;
    result = imageWidth - (imageWidth * x1 /100);
    imageBefore.style.clip = "rect(0, " + result + "px, " + imageHeight + "px, 0)";
    imageAfter.style.clip = "rect(0, " + imageWidth + "px, " + imageHeight + "px, " + result + "px)";
})

buttonAfter.addEventListener("click", function (evt) {
    evt.preventDefault();

    slider.value = 100;
    x1 = slider.value;
    result = imageWidth - (imageWidth * x1 /100);
    imageBefore.style.clip = "rect(0, " + result + "px, " + imageHeight + "px, 0)";
    imageAfter.style.clip = "rect(0, " + imageWidth + "px, " + imageHeight + "px, " + result + "px)";
})

slider.addEventListener("input", function (evt) {
    evt.preventDefault();

    x1 = slider.value;
    result = imageWidth - (imageWidth * x1 /100);
    imageBefore.style.clip = "rect(0, " + result + "px, " + imageHeight + "px, 0)";
    imageAfter.style.clip = "rect(0, " + imageWidth + "px, " + imageHeight + "px, " + result + "px)";
})