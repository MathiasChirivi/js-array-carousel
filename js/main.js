let containerElement = document.getElementById("container");
let sliderElement = document.getElementById("slider");
let slideElement = document.getElementsByClassName("slide");
const next = document.getElementById('Avanti');
const back = document.getElementById('indietro');
let currentSlide = 0;
let ultimaSlideconNext = 5;



const images = ["./img/01.webp","./img/02.webp","./img/03.webp","./img/04.webp","./img/05.webp" ];
console.log(images);


for (let i = 0; i < images.length; i++) {
    let image = images[i];

    if(i == 0){
        let Image = document.createElement("img");
        Image.src = `./img/${image}`;
        Image.className = "slide";
        sliderElement.append(Image)
    } else {
        let Image = document.createElement("img");
        Image.src = `./img/${image}`;
        Image.className = "slide hidden";
        slider.append(Image);
    }

}

//buttoni
//next.addEventListener("click", function(){
//    console.log("Current Slide: ", currentSlide);
//
//    if(currentSlide < ultimaSlideconNext) {
//        for (let i = 0; i < slideElement.length; i++) {
//            const slide = slideElement[i];
//            
//            if (i == currentSlide + 1) {
//                slide.classList.remove("hidden");
//                console.log("slide corrente : " + i + "--> Va visualizzata");
//            } else {
//                slide.classList.add("hidden");
//                console.log("Slide corrente: " + i + " -> Va nascosta")
//            }
//        }
//        currentSlide++;
//    }else{
//        console.log("Non c'e una slide successiva")
//    }
//});