var ball, blower, blowermouth
var button

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ball = new Ball(500,200,50,50)
  blower = new Blower(300,300,100,50)
  blowermouth = new Blowermouth(400,250,50,50)
  button = createButton("click to blow")
  button.position(width/2,height-100)
  button.class("blowbutton")
  button.mousePressed(blow)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ball.show()
  blower.show()
  blowermouth.show()
}
function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}