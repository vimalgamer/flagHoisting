const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall, flag, flag_pole, flag2, flag_image;
var wall2, wall3;
var sprite, particle, particle1, particle2;
var background, bgImage;
var circles = [];
var box;

function preload(){
  flag_image = loadImage("safron.jpg");
  flag2_animation = loadImage("animation.gif");
  bgImage = loadImage("rsklogo.png")
}

function setup(){
  createCanvas(600, 600);

  engine = Engine.create();
  world = engine.world;

  text("Touch the screen to host the flag", 100, 100);
  
  wall = createSprite(width-360, height-100, 100, 20);
  wall2 = createSprite(width-360, height-75, 150, 20);
  wall.shapeColor = "black"
  wall2.shapeColor = "black"
  
  flag = createSprite(width-350, height-150, 10, 10);
  flag.addImage(flag_image);
  flag.scale = .1
  flag.lifetime = 150 
   
  flag2 = createSprite(width-290, height-450, 10,10);
  flag2.addImage(flag2_animation);
  flag2.scale = .5
  flag2.visible = false
  
  flag_pole = createSprite(width/2.5 ,height/2, 10, 400);
  flag_pole.shapeColor = "black"

  Engine.run(engine);
}

function draw() {
  
  background(bgImage);
  
  Engine.update(engine);

  flower();

  drawSprites();
  
  fill("blue")
  text("Touch the screen to host the flag or press space in windows", 100, 100);

  if(keyDown('space') || touches.length > 0){
    flag.velocityY = -2
    console.log(frameCount);
  }
  
  if(frameCount >= 170){
    //flag2.visible = true
    for(var i=0; i<circles.length; i=i+8){
      circles[i].show();
    }
  }
}

function flower (){
  if(frameCount >= 170){
    circles.push(new Circle(random(-250, -400), height-450, 5));
    circles.push(new Circle(width-260, height-450, 5));
    circles.push(new Circle(width-290, height-450, 5));
  }
  //width-290
}
