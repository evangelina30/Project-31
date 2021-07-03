const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world;
var backgroundImade;
var ground1;
var Division;
var Plinkos;






function preload(){
  backgroundImade = loadImage("cool/back.png");
}


function setup() {
  createCanvas(550,780);
  engine = Engine.create();
  world = engine.world;
  
   ground1 = new ground(100,300);
   Division = new division(250,660,10,200);
   Division1 = new division(150,660,10,200);
   Division2 = new division(50,660,10,200);
   Division3 = new division(350,660,10,200);
   Division4 = new division(450,660,10,200);
   
  
}

function draw() {
  background(backgroundImade); 

  for (var j = 40; j <=width ; j=j+50){
    Plinkos.push(new Plinko(j,75));
  }
 for (var j =15; j <=widht-10; j=j+50){
 Plinkos.push(new Plinko(j,175));
 }
  
  ground1.display();
  Division.display();
  Division1.display();
  Division2.display();
  Division3.display();
  Division4.display();
  Plinkos.display();
  drawSprites();
}