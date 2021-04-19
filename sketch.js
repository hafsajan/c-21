var fixedRect, movingRect;
var object1,object2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(300, 400, 50, 80);
  object1.shapeColor = "green";
  object2 = createSprite(400, 400, 50, 80);
  object2.shapeColor = "green";
}

function draw() {

  background(0,0,0); 

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,object1)){
    movingRect.shapeColor="red";
    object1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    object1.shapeColor="green";
  }

  
  bounceOff(movingRect,fixedRect);
  
  drawSprites();
  
}
