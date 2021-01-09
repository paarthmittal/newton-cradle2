
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1=new Bob(280,400,30)
	bob2=new Bob(340,400,30)
	bob3=new Bob(400,400,30)
	bob4=new Bob(460,400,30)
	bob5=new Bob(520,400,30)
	table1=new table(400,200,300,20)


	chain1=new chain(bob1.body,table1.body,-100,0)
	chain2=new chain(bob2.body,table1.body,-50,0)
	chain3=new chain(bob3.body,table1.body,-0*2,0)
	chain4=new chain(bob4.body,table1.body,50,0)
	chain5=new chain(bob5.body,table1.body,100,0)

	Engine.run(engine);
	
}


function draw() {
 
  background(256);
  rectMode(CENTER)
  table1.display()

 
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
 bob5.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  
  if(keyWentDown('down')){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:0})
  }
}



