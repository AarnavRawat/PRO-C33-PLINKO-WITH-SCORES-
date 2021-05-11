const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var userWorld,userEngine
var particles;
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var gameState;
var count = 0;
var score =0;
function setup() {
  createCanvas(800, 800);
  userEngine = Engine.create();
  userWorld = userEngine.world;

  gameState = 'ready';
  ground = new Ground(width/2,height,width,20);
  
  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }  
  //create 4th row of plinko objects
  for (var j = 0; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(userEngine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  text("500",30,600);
  text("500",110,600);
  text("500",190,600);
  text("500",270,600);
  text("100",350,600);
  text("100",430,600);
  text("100",510,600);
  text("200",590,600);
  text("200",670,600);
  text("200",750,600);
  text("200",830,600);

  text("SCORE :"+score,680,40);

  if(count == 9){
    gameState = 'end'
  }
  
}

function mousePressed(){
  if(gameState == 'ready'){

    count++;
    particles = new Particle(mouseX,800,5);
    particles.display();
    if(plinkos.x<=320 && plinkos.y>=500){
       score = score + 500;
    }
    else{

      if(plinkos.x>320 && plinkos.x <= 595 && plinkos.y>=500){
        score = score + 100;
      }
      else{
        if(plinkos.x > 595 && plinkos.y>= 500){
           score = score + 200;
        }
      }
    }
  }
}
