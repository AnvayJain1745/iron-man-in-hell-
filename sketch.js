var box1
var backGroundImage
var thanosImage,thanos
var ironMan,ironManLeft,ironManRight,ironManFly
var characterButtonImage,characterButton
var trainingButtonImage,trainingButton
var commentBoxImage1,commentBoxImage2,commentBoxImage3,commentBoxImage4,commentBoxImage5,comment1,comment2,comment3,comment4,comment5;
function preload(){
  backGroundImage=loadImage("images/background Image.jpg")
  thanosImage=loadImage("images/thanos side.png")
  ironManFly=loadImage("images/IR Fly.png")
  ironManLeft=loadImage("images/IR FL.png")
  ironManRight=loadImage("images/IR FR.png")
  commentBoxImage1=loadImage("images/commentBox1.png")
  commentBoxImage2=loadImage("images/commentBox2.png")
  characterButtonImage=loadImage("images/characterButton.png")
  trainingButtonImage=loadImage("images/training.png")

}
function setup() {
  createCanvas(displayWidth, displayHeight);
  thanos=createSprite(230,550 )
  thanos.addImage("thanosImage",thanosImage);
  thanos.scale=0.5
  thanos.depth=3

  ironMan=createSprite(1300,570);
  ironMan.addImage("IMI",ironManLeft)
  ironMan.scale=0.5
  ironMan.depth=3

  comment1=createSprite(310,350);
  comment1.addImage("comment1",commentBoxImage1);
  comment1.lifetime=540
  comment1.scale=0.4 
  
  comment2=createSprite(1200,400);
  comment2.addImage("comment2",commentBoxImage2);
  comment2.lifetime=740
  comment2.scale=0.4 
  comment2.visible=false;

  characterButton=createSprite(1450,50);
  characterButton.addImage("characterButton",characterButtonImage);
  characterButton.scale=0.4
  characterButton.depth=3

  trainingButton=createSprite(1250,50);
  trainingButton.addImage("trainingButton",trainingButtonImage);
  trainingButton.scale=0.4
  trainingButton.depth=3

  box1=createSprite(770,430,1400,850);
  box1.addImage("box1",backGroundImage)
  box1.depth=2
  box1.visible=false
  
}

function draw() {
  background(backGroundImage);
  console.log(ironMan.y)
  if(mousePressedOver(characterButton)){
    
  }

  if(keyDown("UP_ARROW")){
    ironMan.addImage("IMI",ironManFly)
    ironMan.velocityY=-1
    
  }
  if(keyDown("LEFT_ARROW")){
    ironMan.addImage("IMI",ironManLeft)
    ironMan.velocityY=0
  }
  if(keyDown("RIGHT_ARROW")){
    ironMan.addImage("IMI",ironManRight)
    ironMan.velocityY=0
  }

  if(comment1.lifetime===1){
    comment2.visible=true;
  }
  if(mousePressedOver(trainingButton) && comment2.lifetime<2 ){
    box1.visible=true
    text("press up arrow key to make Iron Man fly")
    text("press down arrow key to make Iron Man come to ground after flying")
    text("press left arrow key to move Iron Man left")
    text("press right arrow key to move Iron Man right")
  }
  if(mousePressedOver(trainingButton) && box1.visible===true){

  }
 drawSprites()
}