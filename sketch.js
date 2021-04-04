
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player, box;
var plrimg,boximg;
var edges;
var gameState = 4;


function preload()
{
  plrimg = loadImage("car1.png")
  
}

function setup() {
	createCanvas(displayWidth-20,displayHeight-130);

	edges = createEdgeSprites();

	player = createSprite(windowWidth/2+530,windowHeight/2+300,50,50)
	player.bounceOff(edges)
	player.addImage(plrimg)
	box = createSprite(windowWidth/2-550,windowHeight/2-300,50,50)
	
	 box.shapeColor = "yellow"

	


	engine = Engine.create();
	world = engine.world;

	
	Engine.run(engine);
	}

	


function draw() {
	
	background("blue");
	if (gameState = 4){
		if(keyIsDown(UP_ARROW)&& player.y<displayHeight-130){
			player.y = player.y-20
		  }
	
		  if(keyIsDown(DOWN_ARROW)&& player.y<displayHeight-130){
			player.y = player.y+20
		  }
	
		  if(keyIsDown(RIGHT_ARROW)&& player.x<displayWidth-20){
			player.x = player.x+20
		  }
	
		  if(keyIsDown(LEFT_ARROW)&& player.x<displayWidth-20){
			player.x = player.x-20
		  }
		  
		  
	
		camera.position.x=windowWidth/2;
		camera.position.y=player.y;

	}

	if (player.isTouching(box)){
		text ("you Win ",windowWidth/2-20,windowHeight/2-130)
		  
	  }

	



	Engine.update(engine);
	
    drawSprites();
 
}



