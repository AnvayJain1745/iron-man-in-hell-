var lifeThanos,lifeIronMan
var Laser,laser, laserGroup
var whiteBox
var TBP=0
var backGroundImage,BACKGROUND
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
  laser=loadImage("images/laser 2.png")

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

  whiteBox=createSprite(displayWidth/2+30,displayHeight/2,1100,50)
  whiteBox.shapeColor="white"
  whiteBox.visible=false

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

  BACKGROUND=createSprite(displayWidth/2,displayHeight/2)
  BACKGROUND.addImage("q",backGroundImage)
  BACKGROUND.depth=0

  lifeThanos=createSprite(thanos.x,thanos.y-170,100,20)
  lifeThanos.shapeColor="red";

  
  lifeIronMan=createSprite(ironMan.x,ironMan.y-170,100,20)
  lifeIronMan.shapeColor="green";
  

  laserGroup = new Group();

  Laser=createSprite(ironMan.x-150,ironMan.y-70)
  Laser.addImage("laser",laser)
  Laser.visible=false
  Laser.scale=0.2
  
  

  laserGroup.add(Laser);
}

function draw() {
  
  background(1,1,1,1);
 
//console.log(thanos.width+ "," +thanos.height)


  

  if(mousePressedOver(characterButton)){
    
  }
 /* if(keyDown("LEFT_ARROW") && ironMan.y<570){
    ironMan.velocityX=-1
    
  }
  if(keyDown("RIGHT_ARROW") && ironMan.y<570){
    ironMan.velocityX=1
        
  }
*/
if(laserGroup.collide(thanos)){
  if(lifeThanos.width >1){
    lifeThanos.width=lifeThanos.width-1
  }
  
  laserGroup.setLifetimeEach(3);
 
       }
  if(keyDown("UP_ARROW")){
    ironMan.addImage("IMI",ironManFly)
    ironMan.velocityY=-1
    lifeIronMan.velocityY=-1
  }
  if(keyDown("LEFT_ARROW")){
  //  ironMan.addImage("IMI",ironManLeft)
    ironMan.velocityX=-1
    lifeIronMan.velocityX=-1

  }
  if(keyDown("RIGHT_ARROW")){
    // ironMan.addImage("IMI",ironManRight)
     ironMan.velocityX=1
     lifeIronMan.velocityX=1
     
   }
   if(keyDown("RIGHT_ARROW")){
    // ironMan.addImage("IMI",ironManRight)
     ironMan.velocityX=1
     lifeIronMan.velocityX=1
     
   }
   if(keyDown("DOWN_ARROW")){
    // ironMan.addImage("IMI",ironManRight)
     ironMan.velocityY=1
     lifeIronMan.velocityY=1
     
   }

   if(keyDown("space")){
laserGroup.setVisibleEach(true);
laserGroup.setVelocityXEach(-7)
ironMan.addImage("IMI",ironManLeft)
Laser=createSprite(ironMan.x-150,ironMan.y-70)
  Laser.addImage("laser",laser)
  Laser.visible=false
  Laser.scale=0.2
  
  laserGroup.add(Laser);
   }
     if(ironMan.y>440 && ironMan.y<450){
      ironMan.velocityX=0
      ironMan.velocityY=0
      ironMan.addImage("IMI",ironManLeft)
     }

     
  if(comment1.lifetime===1){
    comment2.visible=true;
  }
  if(mousePressedOver(trainingButton)){
    console.log(TBP)
if(TBP===0){
  TBP=1
}else{
  TBP=0
}
  }
  drawSprites()
  if(TBP===1){
   console.log("1111111111111111111111111111111")
    text("press up arrow key to make Iron Man fly",500,300)
    text("press down arrow key to make Iron Man come to ground after flying",500,350)
    text("press left arrow key to move Iron Man left",500,400)
    text("press right arrow key to move Iron Man right",500,450)
  }
  
 if(lifeThanos.width===1){
  thanos.visible=false
  textFont("Georgia")
  whiteBox.visible=true
  textSize(30)
  text("No ,this can't happen ,why this???why??? he have gone into the wormhole,no,no",displayWidth/2-500,displayHeight/2)
}
}