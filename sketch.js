
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(600,height,1200,20);

	paper= new Paper(200,320,10);

	dustbin1left = new Dustbin(490,60,20,100);
	dustbin2right = new Dustbin(710,60,20,100);
	dustbin3base = new Dustbin(600,20,200,20);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  console.log;

  paper.display();

  dustbin1left.display();
  dustbin2right.display();
  dustbin3base.display();
  
  drawSprites();
 

}
 function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85})

	 }
 }
