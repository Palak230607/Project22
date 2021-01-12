var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw() {
  background(bgImg);

  if(isTouching(fairy,star)){
    star.velocityY= 0;
  }
  else{
	star.velocityY= 5;  
  }

  drawSprites();
  keyPressed();
}

function keyPressed() {
	//write code here
	if(keyCode === RIGHT_ARROW){
	 fairy.x = fairy.x + 5; } 
	if(keyCode === LEFT_ARROW){
	 fairy.x = fairy.x - 5; } 
	if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(starBody,false); } 

	 if(keyCode=== ENTER){
      star.velocityY= 5;
	 }
}


function isTouching(obj1,obj2){
	    //isTouching command
	if(obj1.x-obj2.x < obj1.width/2 + obj2.width/2 &&
	  obj2.x-obj1.x <obj1.width/2+ obj2.width/2 && 
	  obj1.y-obj2.y< obj1.height/2+ obj2.height/2 &&
	  obj2.y- obj1.y< obj1.height/2+ obj2.height/2){
	  return true;
	}
	else{
	 return false;
	}
	}
	
