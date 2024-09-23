let left = document.getElementById("left");
let right = document.getElementById("right");
let pic = document.getElementById("post");
const slide = ["url(img1.jpg)", "url(img2.jpeg)", "url(img3.jpeg)"];
let currentColor = 0;
pic.style.backgroundImage = slide[currentColor];

left.onclick = function (){
    currentColor--;
    if (currentColor < 0) {
        currentColor = 2;
    }
    pic.style.backgroundImage = slide[currentColor];

    console.log(currentColor);
}
right.onclick = function (){
    currentColor++;
    if (currentColor > 2) {
        currentColor = 0;
    }
    pic.style.backgroundImage = slide[currentColor];
    console.log(currentColor);
}