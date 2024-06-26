import './styles.css';

class ImageCarousel {
    constructor(elementId, images) {
        this.target = document.getElementById(elementId);

        if (this.target === null) {
            console.log(`Element with ID ${elementId} not found!`);
            return;
        }

        const frame = document.createElement("div");
        frame.classList.add("image-carousel-frame");

        this.container = document.createElement("div");
        this.container.classList.add("image-carousel-container");
        // const selector = document.createElement("div");
        // selector.classList.add("image-carousel-selector");
        
        images.forEach((image) => {
            const imgElement = document.createElement("img");
            imgElement.src = image;
            this.container.appendChild(imgElement);

            // const circle = document.createElement("span");
            // circle.classList.add("image-carousel-circle");
            // selector.appendChild(circle);
        });
        frame.appendChild(this.container);

        const controls = document.createElement("div");
        controls.classList.add("image-carousel-controls");
        const buttons = document.createElement("div");
        buttons.classList.add("image-carousel-buttons");
        // controls.append(selector, buttons);
        controls.append(buttons);

        const prevButton = document.createElement("button");
        prevButton.classList.add("image-carousel-previous");
        prevButton.textContent = "Previous";
        const nextButton = document.createElement("button");
        nextButton.classList.add("image-carousel-next");
        nextButton.textContent = "Next";
        buttons.append(prevButton, nextButton);

        this.target.append(frame, controls);

        this.imgWidth = parseInt(window.getComputedStyle(document.querySelector(".image-carousel-container img")).getPropertyValue("width"));
        this.totalWidth = parseInt(window.getComputedStyle(document.querySelector(".image-carousel-container")).getPropertyValue("width"));
        this.containerStyle = window.getComputedStyle(this.container);

        prevButton.addEventListener("click", () => this.prevImage());
        nextButton.addEventListener("click", () => this.nextImage());
    }

    prevImage() {
        let currentMargin = parseInt(window.getComputedStyle(this.container).marginLeft);
    
        if (currentMargin === 0) {
            currentMargin = 0 - this.totalWidth;
        }
        this.container.style.marginLeft = (currentMargin + this.imgWidth).toString() + "px";
    }

    nextImage() {
        let currentMargin = parseInt(this.containerStyle.marginLeft);
        if (currentMargin === 0 - this.totalWidth + this.imgWidth) {
            currentMargin = 0 + this.imgWidth;
        }
        this.container.style.marginLeft = (currentMargin - this.imgWidth).toString() + "px";
    }
}

// let count = document.querySelectorAll(".image-carousel-container img").length;
// let imgWidth = parseInt(window.getComputedStyle(document.querySelector(".image-carousel-container img")).getPropertyValue("width"));
// let totalWidth = parseInt(window.getComputedStyle(document.querySelector(".image-carousel-container")).getPropertyValue("width"));

// let container = document.getElementsByClassName("image-carousel-container")[0];
// const containerStyle = window.getComputedStyle(container);

// console.log(imgWidth);
// console.log(totalWidth);

// function prevImage() {
//     let currentMargin = parseInt(containerStyle.marginLeft);

//     if (currentMargin === 0) {
//         currentMargin = 0 - totalWidth;
//     }
//     container.style.marginLeft = (currentMargin + imgWidth).toString() + "px";
// }

// function nextImage() {
//     let currentMargin = parseInt(containerStyle.marginLeft);
//     if (currentMargin === 0 - totalWidth + imgWidth) {
//         currentMargin = 0 + imgWidth;
//     }
//     container.style.marginLeft = (currentMargin - imgWidth).toString() + "px";
// }

// const prevButton = document.getElementsByClassName("image-carousel-previous")[0].addEventListener("click", prevImage);
// const nextButton = document.getElementsByClassName("image-carousel-next")[0].addEventListener("click", nextImage);

export default ImageCarousel;