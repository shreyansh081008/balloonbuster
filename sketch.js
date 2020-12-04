var ground;
var groundImage;
var balloon,balloon1,balloon2,balloon3,bow;
var balloonImage;
var balloon1Image;
var balloon2Image;
var balloon3Image;
var bowImage;
var arrow;
var arrowImage;
var select_balloon
var scoreballoon = 0;
var greengroup;
var bluegroup;
var pinkgroup;
var redgroup;
var arrowgroup;
var edges;



function preload(){
 //load your images here 
 
  

groundImage = loadImage("background0.png");
balloonImage = loadImage("blue_balloon0.png");
balloon1Image = loadImage ("green_balloon0.png");
balloon2Image = loadImage("pink_balloon0.png");
balloon3Image = loadImage("red_balloon0.png");
bowImage = loadImage("bow0.png");
arrowImage = loadImage("arrow0.png");

}

function setup() {
  createCanvas(600, 500);
  
  //add code here
  
 edges = createEdgeSprites();
  
  
  greengroup = new Group();
  pinkgroup = new  Group();
  bluegroup = new Group();
  redgroup = new Group();
  arrowgroup = new Group();
  
  
  
  
  ground = createSprite(0,0,400,20);
  ground.addImage(groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -5; 


bow = createSprite(525,275,400,20);
bow.addImage(bowImage);


}

function draw() {

  background("white");
  
  //add code here
 




  
  
  
  
  
  
  
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  } 
  
  
  ground.setVelocity(-10,0);
  
 
  
  ground.scale = 3
   
 
  
  
  
  bow.y=World.mouseY;
  
  
 if (keyWentDown("space")){
  var arrow = createarrow ();  
  arrow.addImage (arrowImage);
  arrow.y = bow.y; 
   
 
 }
  
  var select_balloon = Math.round(random(1,4));
  
  
  if(World.frameCount % 80 == 0){
  if (select_balloon == 1)  {
   redballoon(); 
   }
 else if (select_balloon == 2 ){
   greenballoon();
 }
 else if (select_balloon == 3 ){
  blueballoon();
   
 }  
      
 else if (select_balloon == 4)   {
  pinkballoon(); 
   
   
 }
  
  }
  
 if (redgroup.isTouching(arrowgroup)){
   
   
 arrowgroup.destroyEach();  
 redgroup.destroyEach();  
scoreballoon = scoreballoon+2;
 
 }
  
 if (bluegroup.isTouching(arrowgroup)){
   
   
 arrowgroup.destroyEach();  
 bluegroup.destroyEach();  
scoreballoon = scoreballoon+1;
 
 }
  
 if (greengroup.isTouching(arrowgroup)){
   
   
 arrowgroup.destroyEach();  
 greengroup.destroyEach();  
scoreballoon = scoreballoon+1;
 
 } 
  
  
 if (pinkgroup.isTouching(arrowgroup)){
   
   
 arrowgroup.destroyEach();  
 pinkgroup.destroyEach();  
scoreballoon = scoreballoon+3;
 
 }  
  drawSprites(); 

  textSize(20);
  stroke("black");
  text("Score :" +scoreballoon,475,25);
   
  


}










function createarrow(){

 arrow = createSprite(475,100,5,10);
  arrow.velocityX = -6
  arrow.scale = 0.3
arrow.lifetime = 100;
 arrowgroup.add(arrow);
  return arrow;




}


function redballoon(){

var red = createSprite(0,Math.round(random(25,370)),20,20);
red.addImage(balloon3Image);
red.velocityX = 3;
red.lifetime = 200;
red.scale= 0.1;
redgroup.add(red);

}

function greenballoon(){

var green = createSprite(0,Math.round(random(25,370)),20,20);
green.addImage(balloon1Image);
green.velocityX = 3;
green.lifetime = 200;
green.scale= 0.1;
greengroup.add(green);

}


function blueballoon(){

var blue = createSprite(0,Math.round(random(30,370)),30,20)
blue.addImage(balloonImage);
blue.velocityX = 3;
blue.lifetime = 200;
blue.scale= 0.1;
bluegroup.add(blue);

}


function pinkballoon(){

var pink = createSprite(0,Math.round(random(25,370)),20,20)
pink.addImage(balloon2Image);
pink.velocityX = 3;
pink.lifetime = 200;
pinkgroup.add(pink);

}

