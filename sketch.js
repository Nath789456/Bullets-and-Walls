var bullet,wall, thickness;
var speed, weight;



function setup() {
  createCanvas(1600,400);

  bullet=createSprite(50,100,50,30);

  
  thickness=random(22,83);

  wall=createSprite(1200,380,thickness,800);
  wall.shapeColor=(20,230,100);

  speed=random(223,321);
  weight=random(30,52);


 
}

function draw() {
  background(0,0,0);  
  bullet.velocityX= speed;

if(hasCollided(bullet,wall){
  bullet.velocityX=0;
  var damage= 0.5* weight* speed1* speed1/(thickness* thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

   if(damage<10){
     wall.shapeColor=color(0,255,0);
}
  }
  
  drawSprites();
}

function hasCollided(lbullet,lWall){
      bulletRightEdge=lbullet.x +lbullet.width;
      wallLeftEdge=lWall.x;
      if(bulletRightEdge>wallLeftEdge){
        return true;
      }
      else{
        return false;
      }
}