
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;


var bob1;
var staticobject1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 //bob object
	bob1 = new bob(700,320,70,70);
	bob2 = new bob(700,320,70,70);
	bob3 = new bob(700,320,70,70);
	bob4 = new bob(700,320,70,70);

	staticobject1 = new staticbody(404,34,550,45);
     //rope object
	rope1 = new rope(bob1.body, staticobject1.body, -70*2,0)
    rope2 = new rope(bob2.body, staticobject1.body, -70*70,0)
	rope3 = new rope(bob3.body, staticobject1.body, -70*70,0)
	rope4 = new rope(bob4.body, staticobject1.body, -70*70,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(mouseX)
 

  
  staticobject1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  bob1.show();
  bob2.show();
  bob3.show();
  bob4.show();

  drawSprites();
 
}



