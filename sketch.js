var car,wall,speed,weight,def



function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(700, 200, 60, 100);
  speed=random(55,90)
  weight=random(400,1050)
  car.velocityX=speed
  
}

function draw() {
  background(255,255,255);
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    car.x=wall.x-50
    def=0.5*weight*speed*speed/22509
    text(def,50,50)
    if(def>180){
      car.shapeColor='red'
    }
    if(def>100&&def<180){
      car.shapeColor='yellow'
    }
    if(def<100){
      car.shapeColor='green'
    }
  }  
  drawSprites();
}