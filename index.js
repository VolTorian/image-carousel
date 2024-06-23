class ImageCarousel {
    constructor(elementId, images) {
        this.target = document.getElementById(elementId);

        if (this.target === null) {
            console.log(`Element with ID ${elementId} not found!`);
            return;
        }

        const frame = document.createElement("div");
        frame.classList.add("image-carousel-frame");
        this.target.appendChild(frame);

        const container = document.createElement("div");
        container.classList.add("image-carousel-container")
        images.forEach((image) => {
            const imgElement = document.createElement("img");
            imgElement.src = image;
            container.appendChild(imgElement);
        });
        frame.appendChild(container);
    }
}

const test = new ImageCarousel("test-carousel", ["./images/barberry.png", "./images/chilli.png", "./images/pepper.png", "./images/saffron.png"]);

let count = document.querySelectorAll(".image-carousel-container img").length;
let imgWidth = parseInt(window.getComputedStyle(document.querySelector(".image-carousel-container img")).getPropertyValue("width"));
let totalWidth = parseInt(window.getComputedStyle(document.querySelector(".image-carousel-container")).getPropertyValue("width"));

let container = document.getElementsByClassName("image-carousel-container")[0];
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