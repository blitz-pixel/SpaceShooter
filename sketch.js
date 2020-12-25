var PLAY = 0;
var END = 1;
var gameState = PLAY;
var fighter,aliens;
var Asteroids,Asteroids2,Asteroids3;
var Heart,laser,Background,coins;
var coinGroup,heartGroup;
//var alienGroup;
var aesteroidGroup,aesteroidGroup2,aesteroidGroup3;
var score;
var level= 1;

var fighterImg

function preload(){
   fighterImg = loadImage("Fighter.jpg");
   space = loadImage("images.jpg");

}

function setup() {
  createCanvas(950,480);

  //alienGroup = createGroup();

  score = 0;

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
 fighter.x = World.mouseX;
          //(OR)
 //if(keyDown(RIGHT_ARROW)){
  //fighter.x = fighter.x + 8;
// }

// if(keyDown(LEFT_ARROW)){
  // fighter.x = fighter.x - 8;
// }

// PROPERTIES
 fighter.collide(edges);
 //fighter.debug = true;
 fighter.setCollider("circle",0,0,18)

 if(laser.isTouching(aesteroidGroup) || laser.isTouching(aesteroidGroup2) || laser.isTouching(aesteroidGroup3) ){
   score=score+20;
 }
 
 if(gameState === PLAY){
    playGame();

    spawnAsteroids();
    spawnAsteroids2();
    spawnAsteroids3();

    spawnHearts();
    spawnCoins();

  }else if(gameState === END){
    gameEnd();
    score = 0;
 }

  //if (keyDown("r")){
  //    gameState = PLAY;
 // }

 console.log(score);
 resetLaser();




  drawSprites();
  fill("blue");
 // if(laser.isTouching(aesteroidGroup)){
    // aesteroidGroup.destroyEach();
   //  text("+5",random(0,940),20);
  // }
  text("SCORE :" + score,800,20);
  text("Level :" + level,400,20);
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
        Asteroids.velocityY = 3.3;
        Asteroids.lifetime = 141;
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
        Asteroids2.velocityY = 3.3;
        Asteroids2.lifetime = 141;
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
        Asteroids3.velocityY = 3.3;
        Asteroids3.lifetime = 141;
        Asteroids3.debug = true;
        Asteroids3.setCollider("rectangle",0,0,24,28);
        aesteroidGroup3.add(Asteroids3);
      }
    }

 function resetLaser(){
   if(laser.y<0 || laser.collide(aesteroidGroup) || laser.collide(aesteroidGroup2) || laser.collide(aesteroidGroup3) ){
     laser.x = fighter.x; 
     laser.y = 464;
     laser.velocityY = 0;
   //  laser.visible = false;
  }
 
  }

  function gameEnd(){
   Background.velocityY = 0;
   laser.x = fighter.x;
   fighter.x !== World.mouseX;
   laser.y = 464;
   laser.velocityY = 0;
   aesteroidGroup.setLifetimeEach(0);
   aesteroidGroup.setLifetimeEach(0);
   aesteroidGroup.setLifetimeEach(0);

   aesteroidGroup.setVisibleEach(false);
   aesteroidGroup2.setVisibleEach(false);
   aesteroidGroup3.setVisibleEach(false);

   heartGroup.setLifetimeEach(0);
   heartGroup.setVisibleEach(false);

   coinGroup.setLifetimeEach(0);
   coinGroup.setVisibleEach(false);

  }

  function playGame(){

  Background.velocityY = -6;

  laser.x = fighter.x;

//   if(laser.y <= 420){
  //  fighter.x != laser.x ;
  //}

  //console.log(laser.y);

  if(Background.y<0){
    Background.y = Background.height/2;
  }

  if(keyDown("SPACE")){
    laser.velocityY = -34;
  }

  if(laser.isTouching(aesteroidGroup)){
    aesteroidGroup.destroyEach();
   // text("+5",540,20);
  }

  if(laser.isTouching(aesteroidGroup2)){
    aesteroidGroup2.destroyEach();
  }

  if(laser.isTouching(aesteroidGroup3)){
    aesteroidGroup3.destroyEach();
  }

  if(fighter.collide(aesteroidGroup) || fighter.collide(aesteroidGroup2) || fighter.collide(aesteroidGroup3)){
    gameState = END;
  }
  }

  //function increaseLevel(){
     // if(score%1000 === 0){
    //       level+=1;

      //}
  //}

  function spawnHearts(){
   if (score >=80 && frameCount%120 === 0){
            Heart = createSprite(random(5,940),10,20,15);
            Heart.shapeColor = "red";
            Heart.scale = 0.5;
            Heart.velocityY = 5;
            heartGroup.add(Heart);
    }
  }

  function spawnCoins(){
    if(score >= 20 && frameCount%220 === 0){
           coins = createSprite(random(10,230),10,20,15);
           coins.shapeColor = "yellow";
           coins.scale = 0.5;
           coins.velocityY = 5;
           coinGroup.lifetime = 44;
           coinGroup.add(coins);
    }


 }