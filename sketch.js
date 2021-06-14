const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var box5, box6, box7,box8;
var box9, box10, box11,box12;
var box13, box14, box15,box16;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 50, 50);
  box2 = new Box(700, 140, 50, 50);
  box3 = new Box(600, 200, 50, 50);
  box5 = new Box(900, 250, 50, 50);
  box6 = new Box(700, 300, 50, 50);
  box7 = new Box(900, 320, 50, 50);
  box8 = new Box(600, 400, 50, 50);
  box9 = new Box(900, 430, 50, 50);
  box10 = new Box(600, 500, 50, 50);
  box11 = new Box(900, 530, 50, 50);
  box12 = new Box(600, 250, 50, 50);
  box13 = new Box(700, 650, 50, 50);
  box14 = new Box(600, 460, 50, 50);
  box15 = new Box(700, 350, 50, 50);
  box16 = new Box(600, 600, 50, 50);
  box4 = new Box(700, 390, 50, 50);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  // if (gameState ==="onSling"){
       Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
   //}
}


function mouseReleased(){
   rope.fly();
   //gameState = "launched";
}

function keyPressed(){
   if(keyCode === 32&& hero.body.speed<1){
   Matter.Body.setPosition(hero.body,{x:500, y:50});
   rope.attach(hero.body);
   }
}
