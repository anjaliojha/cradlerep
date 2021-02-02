
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//roofObject
	roofObject=new Roof(width/2,height/4,width/4,20);

	bobDiameter=40;

	startBobPositionX=width/2.23;
	startBobPositionY=height/4+300;


	//craete the bob objects
	bobObject1 = new Bob(320,startBobPositionY,bobDiameter);
	bobObject2 = new Bob(360,475,bobDiameter);
	bobObject3 = new Bob(400,475,bobDiameter);
	bobObject4 = new Bob(440,475,bobDiameter);
	bobObject5 = new Bob(480,475,bobDiameter);




	//create the rope objects
	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 10)
	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 10)
	rope3=new Rope(bobObject3.body,roofObject.body,-bobDiameter*0, 10)
	rope4=new Rope(bobObject4.body,roofObject.body,40, 10)
	rope5=new Rope(bobObject5.body,roofObject.body,80, 10)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  keyPressed();
  text(mouseX+","+mouseY,mouseX,mouseY);

  Engine.update(engine);
  
	  roofObject.display();
	  	
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();



	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.isStatic = false;
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});
	}
}



