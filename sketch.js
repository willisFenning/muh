// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Body = Matter.Body;

//var engine, world;
var man;
var manImgRight, manImgLeft;
var maze, maze2, maze3, mazeImg;
var gameState = 0;
var playButton, playBtnImg;
var score = 0;



function preload(){
manImgRight = loadImage("images/fat man running.png");
manImgLeft = loadImage("images/fat man running LEFTWARDS.jpg");

playBtnImg = loadImage("images/playBtn.png");

}

function setup() {
  canvas = createCanvas(500, 500);
  // engine = Engine.create();
  // world = engine.world;

  man = createSprite(20, 50, 20, 20);
  man.addImage(manImgRight);
  man.addImage(manImgLeft);
  man.scale = 0.15;

  playButton = createSprite(250, 250, 300, 100);
  playButton.addImage(playBtnImg);
  playButton.visible = true;

 

}

function draw() {
  background(1000);
 

  if(mousePressedOver(playButton)) {
    gameState = 1;
  }

  if(gameState == 1) {
    playButton.visible = false;

    if(keyIsDown(LEFT_ARROW)){
        man.addImage(manImgLeft);
        man.x -= 3.5;  
      }
      
      if(keyIsDown(RIGHT_ARROW)){
          man.addImage(manImgRight);
          man.x += 3.5;  
         
      }
      
      if(keyIsDown(DOWN_ARROW)){
          man.y += 3.5;
      }
      
      if(keyIsDown(UP_ARROW)){
          man.y -= 3.5;
      }
    }
  

  fill(10);
  stroke(200);
  text("Score: " + score, 430, 30);

drawSprites();
}



