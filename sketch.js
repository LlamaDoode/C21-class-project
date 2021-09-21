
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle = 60 ;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.6,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var ledge_options ={
     isStatic:true
   }
  
   var wedge_options = {
      isStatic:true 
   }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball);

  ledge = Bodies.rectangle(350,300,200,20,ledge_options) ;
  World.add(world,ledge) ;

  wedge = Bodies.rectangle(150,300,200,20,wedge_options) ;
  World.add(world,wedge) ;
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  Matter.Body.rotate(wedge,angle)
  push ()
  translate(wedge.position.x,wedge.position.y)
  rotate(angle) ;
  rect(0,0,200,20) ;
  ellipse(ball.position.x,ball.position.y,20);
  pop ()
  angle = angle+0.1 ;
  rect(ground.position.x,ground.position.y,400,20);
  push ()
  fill("red")
  rect(ledge.position.x,ledge.position.y,200,20)
  pop ()
 
}

