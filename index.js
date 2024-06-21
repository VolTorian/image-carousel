let count = document.querySelectorAll(".container img").length;
let imgWidth = parseInt(window.getComputedStyle(document.querySelector(".container img")).getPropertyValue("width"));
let totalWidth = parseInt(window.getComputedStyle(document.querySelector(".container")).getPropertyValue("width"));

let container = document.getElementsByClassName("container")[0];
const containerStyle = window.getComputedStyle(container);

console.log(imgWidth);
console.log(totalWidth);

function prevImage() {
    let currentMargin = parseInt(containerStyle.marginLeft);

    if (currentMargin === 0) {
        currentMargin = 0 - totalWidth;
    }
    container.style.marginLeft = (currentMargin + imgWidth).toString() + "px";
}

function nextImage() {
    let currentMargin = parseInt(containerStyle.marginLeft);
    if (currentMargin === 0 - totalWidth + imgWidth) {
        currentMargin = 0 + imgWidth;
    }
    container.style.marginLeft = (currentMargin - imgWidth).toString() + "px";
}

const prevButton = document.getElementsByClassName("previous")[0].addEventListener("click", prevImage);
const nextButton = document.getElementsByClassName("next")[0].addEventListener("click", nextImage);