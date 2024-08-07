import './styles.css';

class ImageCarousel {
    constructor(elementId, images, options = {}) {
        this.target = document.getElementById(elementId);

        if (this.target === null) {
            console.log(`Element with ID ${elementId} not found!`);
            return;
        }

        const defaultOptions = { 
            auto: true,
            interval: 5000,
            timeout: 10000,
        };

        this.finalOptions = {...defaultOptions, ...options};
        this.target.classList.add("image-carousel");

        const frame = document.createElement("div");
        frame.classList.add("image-carousel-frame");

        this.container = document.createElement("div");
        this.container.classList.add("image-carousel-container");
        const selector = document.createElement("div");
        selector.classList.add("image-carousel-selector");
        this.circleSelectors = [];

        for (let i = 0; i < images.length; i++) {
            const imgElement = document.createElement("img");
            imgElement.src = images[i];
            this.container.appendChild(imgElement);

            const circle = document.createElement("span");
            circle.classList.add("image-carousel-circle");
            circle.addEventListener("click", (event) => this.selectImage(event, i));
            selector.appendChild(circle);
            this.circleSelectors.push(circle);
        }

        selector.firstChild.classList.add("image-carousel-circle-selected");
        frame.appendChild(this.container);

        const controls = document.createElement("div");
        controls.classList.add("image-carousel-controls");
        const buttons = document.createElement("div");
        buttons.classList.add("image-carousel-buttons");
        controls.append(selector, buttons);
        controls.append(buttons);

        const prevButton = document.createElement("button");
        prevButton.classList.add("image-carousel-previous");
        prevButton.textContent = "Previous";
        const nextButton = document.createElement("button");
        nextButton.classList.add("image-carousel-next");
        nextButton.textContent = "Next";
        buttons.append(prevButton, nextButton);

        this.target.append(frame, controls);

        this.imgWidth = parseInt(window.getComputedStyle(this.target.querySelector(".image-carousel-container img")).getPropertyValue("width"));
        this.totalWidth = parseInt(window.getComputedStyle(this.target.querySelector(".image-carousel-container")).getPropertyValue("width"));
        this.containerStyle = window.getComputedStyle(this.container);
        console.log(this.totalWidth);

        prevButton.addEventListener("click", () => this.prevClicked());
        nextButton.addEventListener("click", () => this.nextClicked());

        this.interval;
        this.timeout;
        if (this.finalOptions.auto === true) {
            this.interval = setInterval(() => this.nextImage(), this.finalOptions.interval);
        }
    }

    prevImage() {
        let currentMargin = parseInt(this.containerStyle.marginLeft);
    
        if (currentMargin === 0) {
            currentMargin = 0 - this.totalWidth;
        }
        let finalMargin = currentMargin + this.imgWidth;
        this.container.style.marginLeft = finalMargin.toString() + "px";
        this.circleSelectors.forEach((circle) => {
            circle.classList.remove("image-carousel-circle-selected");
        });
        this.circleSelectors[finalMargin / -(this.imgWidth)].classList.add("image-carousel-circle-selected");
    }

    nextImage() {
        let currentMargin = parseInt(this.containerStyle.marginLeft);

        if (currentMargin === 0 - this.totalWidth + this.imgWidth) {
            currentMargin = 0 + this.imgWidth;
        }
        let finalMargin = currentMargin - this.imgWidth;
        this.container.style.marginLeft = finalMargin.toString() + "px";
        this.circleSelectors.forEach((circle) => {
            circle.classList.remove("image-carousel-circle-selected");
        });
        this.circleSelectors[finalMargin / -(this.imgWidth)].classList.add("image-carousel-circle-selected");
    }

    selectImage(event, index) {
        const circles = event.target.parentNode.querySelectorAll(".image-carousel-circle");
        circles.forEach((circle) => {
            circle.classList.remove("image-carousel-circle-selected");
        });

        event.target.classList.add("image-carousel-circle-selected");
        this.container.style.marginLeft = -(this.imgWidth * index) + "px";

        this.startTimeout();
    }

    startTimeout() {
        if (this.finalOptions.auto === true) {
            clearInterval(this.interval);
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.nextImage();
                this.interval = setInterval(() => this.nextImage(), this.finalOptions.interval);
            }, this.finalOptions.timeout);
        }
    }

    nextClicked() {
        this.nextImage();
        this.startTimeout();
    }

    prevClicked() {
        this.prevImage();
        this.startTimeout();
    }
}

export default ImageCarousel;