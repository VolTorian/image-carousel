let count = document.querySelectorAll(".container img").length;
let imgWidth = parseInt(window.getComputedStyle(document.querySelector(".container img")).getPropertyValue("width"));
let totalWidth = parseInt(window.getComputedStyle(document.querySelector(".container")).getPropertyValue("width"));

let container = document.getElementsByClassName("container")[0];

console.log(imgWidth);
console.log(totalWidth);