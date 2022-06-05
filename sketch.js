const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground,right,left,topWall;
var ball;
var bt1,bt2,bt3,bt4;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  bt1=createImg("right.png");
  bt1.position(220,30);
  bt1.size(60,50);
  bt1.mouseClicked(hForce);

  bt2=createImg("up.png");
  bt2.position(20,30);
  bt2.size(60,50);
  bt2.mouseClicked(vForce);

  bt3=createImg("down.png");
  bt3.position(30,220);
  bt3.size(60,50);
  bt3.mouseClicked(vDownForce);

  bt4=createImg("left.png");
  bt4.position(220,220);
  bt4.size(60,50);
  bt4.mouseClicked(hLeftForce);

  ground = new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  topWall = new Ground(200,10,400,20);
  var ball_options ={
    restitution: 0.95
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world, ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  topWall.show();
  right.show();
  left.show();
  ellipse(ball.position.x,ball.position.y,20);
  
  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0,y:-0.05})
}

function hLeftForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0})
}

function vDownForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0,y:0.05})
}

