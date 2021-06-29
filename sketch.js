
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paperObj=new paper(200,650,70)
	Engine.run(engine);
  
}

function keypressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paperObj.Body,paperObj.Body.position,(x=180,y=-160));
	}
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
paperObj.display();
}

