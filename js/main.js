let containerElement = document.getElementById("container");
let sliderElement = document.getElementById("slider");



const images = [];
let img1 = document.createElement("img");
img1.src = "./img/01.webp";
images.push(img1);
img1.className = "slide ";
sliderElement.append(img1);

let img2 = document.createElement("img");
img2.src = "./img/02.webp";
images.push(img2);
img2.className = "slide hidden";
sliderElement.append(img2);

let img3 = document.createElement("img");
img3.src = "./img/03.webp";
images.push(img3);
img3.className = "slide hidden";
sliderElement.append(img3);

let img4 = document.createElement("img");
img4.src = "./img/04.webp";
images.push(img4);
img4.className = "slide hidden";
sliderElement.append(img4);

let img5 = document.createElement("img");
img5.src = "./img/05.webp";
images.push(img5);
img5.className = "slide hidden";
sliderElement.append(img5);

console.log(images)

//buttoni
const back = document.getElementById('indietro');
const next = document.getElementById('Avanti');
let currentSlide = 0;
let ultimaSlideconNext = 5;
let slideElement = document.getElementsByClassName("slide");

next.addEventListener("click", function(){
    console.log("Current Slide: ", currentSlide);

    if(currentSlide < ultimaSlideconNext) {
        for (let i = 0; i < slideElement.length; i++) {
            const slide = slideElement[i];
            
            if (i == currentSlide + 1) {
                slide.classList.remove("hidden");
                console.log("slide corrente : " + i + "--> Va visualizzata");
            } else {
                slide.classList.add("hidden");
                console.log("Slide corrente: " + i + " -> Va nascosta")
            }
        }
        currentSlide++;
    }else{
        console.log("Non c'e una slide successiva")
    }
});