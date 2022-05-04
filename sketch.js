let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7; 
let img8;
let img9;

let img1X;
let img1Y;
let img2X;
let img2Y;
let img3X;
let img3Y;
let img4X;
let img4Y;
let img5X;
let img5Y;
let img6X;
let img6Y;
let img7X;
let img7Y;
let img8X;
let img8Y;
let img9X;
let img9Y;

let mouseOverImg1 = false;
let mouseOverImg2 = false;
let mouseOverImg3 = false;
let mouseOverImg4 = false;
let mouseOverImg5 = false;
let mouseOverImg6 = false;
let mouseOverImg7 = false;
let mouseOverImg8 = false;
let mouseOverImg9 = false;

function preload() {
  img1 = loadImage('row-1-column-1.png');
  img2 = loadImage('row-1-column-2.png');
  img3 = loadImage('row-1-column-3.png');
  img4 = loadImage('row-2-column-1.png');
  img5 = loadImage('row-2-column-2.png');
  img6 = loadImage('row-2-column-3.png');
  img7 = loadImage('row-3-column-1.png');
  img8 = loadImage('row-3-column-2.png');
  img9 = loadImage('row-3-column-3.png');
}

function setup() {
  createCanvas(650, 400);
  
  img1X = width/2+120;
  img1Y = height/2-150
  img2X = width/2+120
  img2Y = height/2+-20 
  img3X = width/2+190;
  img3Y = height/2-150
  img4X = width/2+190
  img4Y = height/2+-90
  img5X = width/2+120;
  img5Y = height/2+50
  img6X = width/2+190
  img6Y = height/2+-15
  img7X = width/2+190;
  img7Y = height/2+60
  img8X = width/2+120
  img8Y = height/2+-90
  img9X = width/2+250
  img9Y = height/2+-90
  
}

function draw() {
  background(220);
  textSize(360);
  text('🎞', 0, 300);
  textSize(50)
  text('In the future, I want a cat',10,379)

  
  if(mouseOverImg1) {
    img1X = mouseX;
    img1Y = mouseY;
  }
  
  if(mouseOverImg2) {
    img2X = mouseX;
    img2Y = mouseY;
  }
  if(mouseOverImg3) {
    img3X = mouseX;
    img3Y = mouseY;
  }
  if(mouseOverImg4) {
    img4X = mouseX;
    img4Y = mouseY;
  }
  if(mouseOverImg5) {
    img5X = mouseX;
    img5Y = mouseY;
  }
  if(mouseOverImg6) {
    img6X = mouseX;
    img6Y = mouseY;
  }
  if(mouseOverImg7) {
    img7X = mouseX;
    img7Y = mouseY;
  }
  if(mouseOverImg8) {
    img8X = mouseX;
    img8Y = mouseY;
  }
  if(mouseOverImg9) {
    img9X = mouseX;
    img9Y = mouseY;
  }
  image(img1, img1X, img1Y, 50, 50);
  image(img2, img2X, img2Y, 50, 50);
  image(img3, img3X, img3Y, 50, 50);
  image(img4, img4X, img4Y, 50, 50);
  image(img5, img5X, img5Y, 50, 50);
  image(img6, img6X, img6Y, 50, 50);
  image(img7, img7X, img7Y, 50, 50);
  image(img8, img8X, img8Y, 50, 50);
  image(img9, img9X, img9Y, 50, 50);
}

function mousePressed() {
  if(mouseX > img1X && mouseX < img1X + 50 && mouseY > img1Y && mouseY < img1Y + 50) {
    mouseOverImg1 = true;
  } else {
    mouseOverImg1 = false;
  }
  
  if(mouseX > img2X && mouseX < img2X + 50 && mouseY > img2Y && mouseY < img2Y + 50) {
    mouseOverImg2 = true;
  } else {
    mouseOverImg2 = false;
  }
if(mouseX > img3X && mouseX < img3X + 50 && mouseY > img3Y && mouseY < img3Y + 50) {
    mouseOverImg3 = true;
  } else {
    mouseOverImg3 = false;
  }

if(mouseX > img4X && mouseX < img4X + 50 && mouseY > img4Y && mouseY < img4Y + 50) {
    mouseOverImg4 = true;
  } else {
    mouseOverImg4 = false;
  }

if(mouseX > img5X && mouseX < img5X + 50 && mouseY > img5Y && mouseY < img5Y + 50) {
    mouseOverImg5 = true;
  } else {
    mouseOverImg5 = false;
  }

if(mouseX > img6X && mouseX < img6X + 50 && mouseY > img6Y && mouseY < img6Y + 50) {
    mouseOverImg6 = true;
  } else {
    mouseOverImg6 = false;
  }

if(mouseX > img7X && mouseX < img7X + 50 && mouseY > img7Y && mouseY < img7Y + 50) {
    mouseOverImg7 = true;
  } else {
    mouseOverImg7 = false;
  }

if(mouseX > img8X && mouseX < img8X + 50 && mouseY > img8Y && mouseY < img8Y + 50) {
    mouseOverImg8 = true;
  } else {
    mouseOverImg8 = false;
  }

if(mouseX > img9X && mouseX < img9X + 50 && mouseY > img9Y && mouseY < img9Y + 50) {
    mouseOverImg9 = true;
  } else {
    mouseOverImg9 = false;
  }
}

function mouseReleased() {
  mouseOverImg1 = false;
  mouseOverImg2 = false;
  mouseOverImg3 = false;
  mouseOverImg4 = false;
  mouseOverImg5 = false;
  mouseOverImg6 = false;
  mouseOverImg7 = false;
  mouseOverImg8 = false;
  mouseOverImg9 = false;
}