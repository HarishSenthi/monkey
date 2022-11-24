var path,monkey,carrot,leaf,potato,rock;
var pathImg,monkeyImg,carrotImg,potatoImg,leafImg,rockImg;
var foodCollection = 0;
var carrotGroup,potatoGroup,leafGroup,rockGroup;


var gameState="play";

function preload(){
    pathImg = loadImage("forest.png");
    monkeyImg = loadAnimation("monkey1.png");
    carrotImg = loadImage("banana.png");
    leafImg = loadImage("leaf.png");
    potatoImg = loadImage("potato.png");
    rockImg = loadImage("rock.png");
    
 }

function setup() {
    createCanvas(400,500);
    path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 3;
path.scale=2

monkey = createSprite(70,480,20,20);
monkey.addAnimation("Running",monkeyImg);
monkey.scale=0.2;


bananaGroup=new Group();
potatoGroup=new Group();
leafGroup=new Group();
rockGroup=new Group();
}

function draw() {
    if(gameState==="play"){
        background(0);
        monkey.x = World.mouseX;
        
        edges= createEdgeSprites();
        monkey.collide(edges);

if(path.y > 400 ){
    path.y = height/2;
  }
    createBanana();
    createPotato();
    createLeaf();
    createRock();
}
if (bananaGroup.isTouching(monkey)) {
    bananaGroup.destroyEach();
    foodCollection=foodCollection+300;
  }
  else if (potatoGroup.isTouching(monkey)) {
    potatoGroup.destroyEach();
    foodCollection=foodCollection+200;
    
  }else if(leafGroup.isTouching(monkey)) {
    leafGroup.destroyEach();
    foodCollection=foodCollection+100
  }
  else{
    if(rockGroup.isTouching(monkey)) {
      
      

      gameState="end"
      path.velocityY=0
      monkey.visible=false
      

        bananaGroup.destroyEach();
        potatoGroup.destroyEach();
        leafGroup.destroyEach();
        rockGroup.destroyEach();

         bananaGroup.setVelocityYEach(0);
         potatoGroup.setVelocityYEach(0);
        leafGroup.setVelocityYEach(0);
        rockGroup.setVelocityYEach(0);
        
    }
    
    drawSprites()
    textSize(20);
  fill("white");
  text("Food: "+ foodCollection,10,30);
}
if(gameState=="end"){
stroke("yellow")
fill("yellow")
textSize(30)
text("Gameover",200,200)
}
}




function createBanana() {
    if (World.frameCount % 200 == 0) {
     banana = createSprite(Math.round(random(50, 350),40, 10, 10));
    banana.addImage(carrotImg);
    banana.scale=0.12;
    banana.velocityY = 3;
    banana.lifetime = 250;
    bananaGroup.add(banana);
    }
  }
  
  function createPotato() {
    if (World.frameCount % 320 == 0) {
     potato = createSprite(Math.round(random(50, 350),40, 10, 10));
    potato.addImage(potatoImg);
    potato.scale=0.3;
    potato.velocityY = 3;
    potato.lifetime = 250;
    potatoGroup.add(potato);
  }
  }
  
  function createLeaf() {
    if (World.frameCount % 410 == 0) {
    leaf = createSprite(Math.round(random(50, 350),40, 10, 10));
    leaf.addImage(leafImg);
    leaf.scale=0.13;
    leaf.velocityY = 3;
    leaf.lifetime = 250;
    leafGroup.add(leaf);
    }
  }
  
  function createRock(){
    if (World.frameCount % 530 == 0) {
    rock = createSprite(Math.round(random(50, 350),40, 10, 10));
    rock.addImage(rockImg);
    rock.scale=0.3;
    rock.velocityY = 3;
    rock.lifetime = 250;
    rockGroup.add(rock);
    }
  }
