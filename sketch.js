var backGroundImage
var thanosImage,thanos
var ironManImage,ironMan
function preload(){
  backGroundImage=loadImage("images/background Image.jpg")
  thanosImage=loadImage("images/thanos side.png")
  ironManImage=loadImage("images/IR FL.png")
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  thanos=createSprite(230,550 )
  thanos.addImage("thanosImage",thanosImage);
  thanos.scale=0.5
  ironMan=createSprite(1300,570);
  ironMan.addImage("ironManImage",ironManImage)
  ironMan.scale=0.5
}

function draw() {
  background(backGroundImage);

 drawSprites()
}