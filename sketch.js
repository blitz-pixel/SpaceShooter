var PLAY = 1;
var END = 1;
var gameState = PLAY;
var fighter,aliens;
var Asteroids,Asteroids2,Asteroids3;
var Heart,laser,Background;
var coinGroup,heartGroup;
var alienGroup;
var aesteroidGroup,aesteroidGroup2,aesteroidGroup3;
var score;

var fighterImg

function preload(){
   fighterImg = loadImage("Fighter.jpg");
   space = loadImage("images.jpg");

}

function setup() {
  createCanvas(950,480);

  alienGroup = createGroup();

  aesteroidGroup = createGroup();
  aesteroidGroup2 = createGroup();
  aesteroidGroup3 = createGroup();

  heartGroup = createGroup();
  coinGroup = createGroup();

  Background = createSprite(480,270,950,480);
  Background.addImage(space);
 //Background.shapeColor = "grey";
  //Background.width = 950;
  //Background.height = 550;
  Background.scale =5;

  fighter = createSprite(480, 460, 15, 15);
  //fighter.scale = 0.1;
  //fighter.addImage(fighterImg);
  fighter.shapeColor = "red";


 laser = createSprite(fighter.x,470,3,15);
 laser.shapeColor = "red";

  //Heart = createSprite();
//  Heart.shapeColor = "";
}

function draw() {
  var edges = createEdgeSprites();
  
  background("white");
  
  //ALL ABOUT FIGHTER
 //fighter.x = World.mouseX;
          //(OR)
 if(keyDown(RIGHT_ARROW)){
  fighter.x = fighter.x + 8;
 }

 if(keyDown(LEFT_ARROW)){
   fighter.x = fighter.x - 8;
 }

// PROPERTIES
 fighter.collide(edges);
 //fighter.debug = true;
 fighter.setCollider("circle",0,0,18)

 if(gameState === PLAY){
    playGame();

    spawnAsteroids();
    spawnAsteroids2();
    spawnAsteroids3();
  }// else if(gameState === END){
    //arguments
 // }

  //if (keyDown("r")){
  //    gameState = PLAY;
 // }

 resetLaser();


  drawSprites();
}

//function spawnAliens(){
  //if(argument){
  //aliens = createSprite();
  //}
  //}

  function spawnAsteroids(){
      if(frameCount%100 === 0){
        Asteroids = createSprite(random(10,314),10,20,15);
        Asteroids.shapeColor = "green";
        Asteroids.scale = 0.5;
        Asteroids.velocityY = 4;
        Asteroids.lifetime = 118;
        Asteroids.debug = true;
        Asteroids.setCollider("rectangle",0,0,24,28);
        aesteroidGroup.add(Asteroids);
      }
    }

   function spawnAsteroids2(){
      if(frameCount%90 === 0){
         Asteroids2 = createSprite(random(314,640),random(0,10),20,15);
         Asteroids2.shapeColor = "green";
        Asteroids2.scale = 0.5;
        Asteroids2.velocityY = 4;
        Asteroids2.lifetime = 118;
        Asteroids2.debug = true;
        Asteroids2.setCollider("rectangle",0,0,24,28);
        aesteroidGroup2.add(Asteroids2);
      }
    }

   function spawnAsteroids3(){
      if(frameCount%110 === 0){
        Asteroids3 = createSprite(random(644,930),random(10,20),20,15);
        Asteroids3.shapeColor = "green";
        Asteroids3.scale = 0.5;
        Asteroids3.velocityY = 4;
        Asteroids3.lifetime = 118;
        Asteroids3.debug = true;
        Asteroids3.setCollider("rectangle",0,0,24,28);
        aesteroidGroup3.add(Asteroids3);
      }
    }

 function resetLaser(){
   if(laser.y<0 || laser.collide(aesteroidGroup) || laser.collide(aesteroidGroup2) || laser.collide(aesteroidGroup3) ){
     laser.x = fighter.x; 
     laser.y = fighter.y;
     laser.velocityY = 0;
   //  laser.visible = false;
  }
 
  }

  //function gameEnd(){
    //if(argument){

    //}
  //}

  function playGame(){

  Background.velocityY = -6;

  laser.x = fighter.x;

//   if(laser.y <= 420){
  //  fighter.x != laser.x ;
  //}

  console.log(laser.y);

  if(Background.y<0){
    Background.y = Background.height/2;
  }

  if(keyDown("SPACE")){
    laser.velocityY = -34;
  }

  if(laser.isTouching(aesteroidGroup)){
    aesteroidGroup.destroyEach();
  }

  if(laser.isTouching(aesteroidGroup2)){
    aesteroidGroup2.destroyEach();
  }

  if(laser.isTouching(aesteroidGroup3)){
    aesteroidGroup3.destroyEach();
  }
  }

  //function spawnHearts(){
   // if (arguments){

   // }
  //}

  //function spawnCoins(){
    //if(arguments){

    //}
 // }