const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var division, plinko, particle;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

  ground = new Ground(600,height,1200,20);
  division = new Division(700,100,300,1000);
  plinko = new Plinko(100,150,15);
  particle = new Particle(200,180,15);
}

function draw() {
  background(255,255,255);
  
  ground.display();
  division.display();
  plinko.display();
  particle.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }


  drawSprites();
}

for(var k = 0; k <=width; k = k + 80){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for(var j = 40; j <=width; j=j+50){
  plinkos.push(new Plinko(j,75));
}
for(var j = 15; j <=width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}

for(var j = 0; j < particles.length; j++){
  particles[j].display();
}
for(var k = 0; k < particles.length; k++){
  divisions[k].display();
}