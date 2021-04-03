
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin;
var ground;

var engine,world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	ground = new Ground(400,600,800,20);

	leftSide = new Dustbin(550,540,20,100);
	bottom = new Dustbin(610,580,100,20);
	rightSide = new Dustbin(670,540,20,100);
	paper =new Paper(100,500,10);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();

  ground.display();
  leftSide.display();
  bottom.display();
  rightSide.display();  


  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
};



