const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var box,boxinv;
var player;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world; 

  ground = createSprite(600,570,1200,20);
  box = createSprite(700,540,40,40);
  boxinv= createSprite(720,540,10,40);
  boxinv.visible=false;
  box.debug=true;
  box.setCollider("rectangle",0,0,40,20)
 
  player = createSprite(200,530,40,40);


}

function draw(){
  background("white");
  Engine.update(engine);

  

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 5;
  }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x - 5;
  }

  if(keyDown("space")){
    player.y = player.y - 50;
  }
  

  player.velocityY = player.velocityY + 0.5; 
  drawSprites();

  player.collide(ground);
  //player.bounce(box);
  if(player.isTouching(box))
  {
    box.x=box.x+5
    boxinv.x=boxinv.x+5
    }
    if(player.isTouching(boxinv))
    {
      box.x=box.x-5
      boxinv.x=boxinv.x-5
      }
      

  
}