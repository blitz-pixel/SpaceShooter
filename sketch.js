var PLAY = 1;
var END = 1;
var gameState = PLAY;
var player ,Asteroids,aliens;
var Heart,laser;
var coinGroup,heartGroup;
var alienGroup,aesteroidGroup;
var background,score;

function setup() {
  createCanvas(800,400);
 player = createSprite(400, 200, 50, 50);

  alienGroup = createGroup();
  aesteroidGroup = createGroup();
  heartGroup = createGroup();
  coinGroup = createGroup();

  background = createSprite();
  background.addImage();

  player = createSprite();
  player.addImage();

  laser = createSprite(player.x,player.y);
  laser.shapeColor = "";

  Heart = createSprite();
  Heart.shapeColor = "";
}

function draw() {
  createEdgeSprites();
  background(255,255,255);  
  if(gameState === PLAY){
     arguments
  } else if(gameState === END){
    arguments
  }

  //if (keyDown("r")){
  //    gameState = PLAY;
 // }
 resetLaser();

  drawSprites();
}

function spawnAliens(){
 if(argument){
aliens = createSprite();
 }
}

function spawnAsteroids(){
  if(argument){
    Asteroids = createSprite();
}
}

function resetLaser(){
  if(argument){

  }
}

function gameEnd(){
  if(argument){

  }
}

function playGame(){

}

function spawnHearts(){
  if (arguments){

  }
}

function spawnCoins(){
  if(arguments){

  }
}