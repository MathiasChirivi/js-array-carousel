let containerElement = document.getElementById("container");
let sliderElement = document.getElementById("slider");

let img1 = document.createElement("img");
img1.src = "./img/01.webp";
img1.className = "slide ";
sliderElement.append(img1);

let img2 = document.createElement("img");
img2.src = "./img/02.webp";
img2.className = "slide hidden";
sliderElement.append(img2);

let img3 = document.createElement("img");
img3.src = "./img/03.webp";
img3.className = "slide hidden";
sliderElement.append(img3);

let img4 = document.createElement("img");
img4.src = "./img/04.webp";
img4.className = "slide hidden";
sliderElement.append(img4);

let img5 = document.createElement("img");
img5.src = "./img/05.webp";
img5.className = "slide hidden";
sliderElement.append(img5);

const images = [
    {
        image: 'img/01.webp',
    },{
        image: 'img/02.webp',
    },{
        image: 'img/03.webp',
    },{
        image: 'img/04.webp',
    },{
        image: 'img/05.webp',
    }
];

console.log(images)

//buttoni
const back = document.getElementById('indietro');
const next = document.getElementById('avanti');
let currentSlide = 0;
let ultimaSlideconNext = 5;
let slideElement = document.getElementById("slide");

next.addEventListener("click", function(){
    console.log("Current Slide: ", currentSlide);

    if(currentSlide < ultimaSlideconNext) {
        for (let i = 0; i < slideElement.length; i++) {
            const slide = slideElement[i];
            
        }
    }
})