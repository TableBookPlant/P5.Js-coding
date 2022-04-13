let playerX = 200;
let playerY = 200;
let targetX = 50;
let targetY = 50;
let targetSpeed = 1;
let score = 0;
function setup() {
  createCanvas(400, 400);
  textSize(50);
}

let randomNumber = Math.random()
if( randomNumber > 0.2 ) {
  targetX = targetX + Math.random() * targetSpeed;
} else {
  targetX = targetX - Math.random() * targetSpeed;
}
function draw() {
   if(playerX + 50 >= targetX && playerX - 50 <= targetX && playerY + 45 >= targetY && playerY - 45 <= targetY)
  {
    score = score + 1
    targetSpeed = score;
    console.log ('your score is', score);
    
    targetX = Math.random() * width
    
    targetY = Math.random() * height
    
     background('turquoise')
    
  } else
    
  {
    background('pink');
    
  }
  noStroke();
  
  fill('blue')
  
  text('🐱', targetX,targetY)
  //circle( targetX,targetY,10)
  
  fill('white')
  
  circle(playerX,playerY,70)
  
  targetX = targetX + Math.random ()* -2 + 1;
  targetY = targetY + Math.random ()* -2 + 1;
  
  noStroke()
  
  //drawBackground ('🌺')
  
  if(keyIsDown(LEFT_ARROW)){
    playerX = playerX -10;
    console.log(playerX,playerY)
  }
  if(keyIsDown(RIGHT_ARROW)){
    playerX = playerX +10;
    console.log(playerX,playerY)
  }
  if(keyIsDown(UP_ARROW)){
     playerY = playerY -10;
    console.log(playerX,playerY)
  }
   if(keyIsDown(DOWN_ARROW)){
    playerY = playerY +10;
     console.log(playerX,playerY)
  }
}

function drawBackground(backgroundText) {
  for(let count = 0; count <100; count = +1 ) 
  
  text(backgroundText, Math.random() * width, Math.random() * height);
}