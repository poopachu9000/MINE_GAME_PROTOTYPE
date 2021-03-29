//Variables
if(1===1){
var delay = 0;

var inGameDays = 0;
var inGameHours = 0;

	var gameWait = 0;
	var dia = 0;
	var growAmount = .2;
	var grow = true;

	var loaderPlayer;
var player,player_run,player_idle,player_walk,player_roll,player_mine,player_chop,player_dig,player_attack,player_ham,player_water,player_doing,player_jump,player_fish1,player_fish2,player_fish3,player_swim;
var iconNumber = 5;

var dust,dustIMG;

var energy = 7;
var button;
//UI
var icon1,icon2,icon3,icon4,icon5,icon6,icon7;
var axeUI,picUI,swordUI,hamUI,shovelUI,waterUI,fishUI;

//trees
var tree,treeGroup,stone,stoneGroup,flower,flowerGroup;
var stump1,stump2,tree1,tree2,tree3,stone1,stone2,stone3,stone4,flower;

var collisionGroups,smallBlueCheckGroup;

var walkTime = 0;
var playerAnimation = 1;
var direction = 0;
var speed = 3;

var wood,woodIMG,stone,stoneIMG,flower,flowerIMG,seed,seedImage,carrot,carrotImage,carrotGroup,carrotIMG;

var healthShrineIMG,energyShrineIMG;
var healthShrineGroup,energyShrineGroup;
var i = 1;
var w = 1;
var l = 1;
var f = 1;
var d = 0;
var deathTimer = 0;
var hurtTimer = 0;
var doTimer = 0;
var inventoryTimer = 0;


var loader;
var bg;

//Amounts
var woodAmount = 0,stoneAmount = 0,flowerAmount = 0,seedAmount = 3,carrotAmount = 0,boneAmount = 0;

var playerColliderY = 10;
var playerColliderX = 10;

var woodShrink;

var energy1,energy2,energy3,energy4,energy5,energy6,energy7;
var energyBar;
var health1,health2,health3,health4,health5,health6,health7;
var healthBar;
var health = 7;

var mouseIMG,mouse;

var skeleton,skeleton_run,skeleton_idle,skeleton_attack,skeleton_death;
var skeletonX,skeletonY;
var skeletonDirection = 0;

var skeletonDied = "false";

var gameState = "play";

var hole1,hole2,holeGroup;


var chopTime = 0,mineTime = 0;

var smallBlue,smallBlueIMG,smallBlueGroup;
var productionSpeed = 100;

var houseCount = 0;

var inventory,inventoryIMG;
var inventoryShow = "false";
var inventorySlot = 1;

var wheatSeedCount = 0;
var wheatSeed;
var wheatAmount = 0
var woodIcon,stoneIcon,flowerIcon,seedIcon,carrotIcon,houseIcon,fishIcon;

var bone,boneIcon,boneIMG;

var row = 1;
var columns = 1;

var right,rightIMG,down,downIMG;

var lakeIMG;

var fishDrop,fishIMG,lakeGroup;
var fishTime = 0;
var fishAmount = 0;
}
function preload()
{
	player_idle = loadImage("player/idle.gif");
	player_run = loadImage("player/run.gif");
	player_walk = loadImage("player/walking.gif");
	player_roll = loadImage("player/roll.gif");
	player_mine = loadImage("player/mining.gif");
	player_chop = loadImage("player/axe.gif");
	player_dig = loadImage("player/dig.gif");
	player_attack = loadImage("player/attack.gif");
	player_ham= loadImage("player/hammering.gif");
	player_water= loadImage("player/watering.gif");
	player_death= loadImage("player/death.gif")
	player_hurt= loadImage("player/hurt.gif")
	player_doing= loadImage("player/doing.gif")
	player_jump= loadImage("player/jump.gif")
	player_fish1= loadImage("player/casting.gif")
	player_fish2= loadImage("player/waiting.gif")
	player_fish3= loadImage("player/reeling.gif")
	player_swim= loadImage("player/swimming.gif")

	axeUI = loadImage("UI/axe copy.png");
	picUI = loadImage("UI/pickaxe copy.png");
	swordUI = loadImage("UI/sword copy.png");
	hamUI = loadImage("UI/hammer copy.png");
	shovelUI = loadImage("UI/shovel copy.png");
	waterUI = loadImage("UI/water copy.png");
	fishUI = loadImage("UI/rod.png");

	stump1 = loadImage("tree/tree (1).png")
	stump2 = loadImage("tree/tree (2).png")
	tree1 = loadImage("tree/tree (3).png")
	tree2 = loadImage("tree/tree (4).png")
	tree3 = loadImage("tree/tree (5).png")
	flower = loadImage("stone/sun4 .png")

	stone1 = loadImage("stone/stone (1).png")
	stone2 = loadImage("stone/stone (2).png")
	stone3 = loadImage("stone/stone (3).png")
	stone4 = loadImage("stone/stone (4).png")
	
lakeIMG = loadImage("water/lake.png");

	woodIMG = loadImage("drops/wood.png")
	stoneIMG = loadImage("drops/rock.png")
	flowerIMG = loadImage("drops/sun5 .png")
	stoneIMG = loadImage("drops/rock.png")
	hole1 = loadImage("stone/soil3.png")
	hole2 = loadImage("stone/soil4.png");
	seedImage = loadImage("drops/carrotSeeds.png");
	carrotIMG = loadImage("drops/carrot.png");
wheatIMG = loadImage("drops/wheat_05 .png")
wheatDropIMG = loadImage("drops/wheat.png")
boneIMG = loadImage("drops/Bone.png")
fishIMG = loadImage("drops/fish copy.png")


	bg = loadImage("grass.png")


	energy7 = loadImage("UI/green6-1.png");
	energy6 = loadImage("UI/green5.png");
	energy5 = loadImage("UI/green4.png");
	energy4 = loadImage("UI/green3.png");
	energy3 = loadImage("UI/green2.png");
	energy2 = loadImage("UI/green1.png");
	energy1 = loadImage("UI/green0.png");

	health7 = loadImage("UI/bar_06 .png");
	health6 = loadImage("UI/bar_05 .png");
	health5 = loadImage("UI/bar_04 .png");
	health4 = loadImage("UI/bar_03 .png");
	health3 = loadImage("UI/bar_02 .png");
	health2 = loadImage("UI/bar_01 .png");
	health1 = loadImage("UI/bar_00 .png");

	
	mouseIMG = loadImage("UI/mouse.png");

	skeleton_run = loadImage("enemy/ton_walk.gif");
	skeleton_idle= loadImage("enemy/ton_idle.gif");
	skeleton_death = loadImage("enemy/ton_death.gif");
	skeleton_attack = loadImage("enemy/ton_attack.gif");

	skeletonOffScreen = "false"

	healthShrineIMG = loadImage("stone/1 (1).png");
	energyShrineIMG = loadImage("stone/1 (2).png");
dustIMG = loadImage("drops/dust.gif");

carrotImage = loadAnimation("stone/carrot1.png","stone/carrot2.png","stone/carrot3.png","stone/carrot4.png")
wheatImage = loadAnimation("stone/wheat_01 .png","stone/wheat_02 .png","stone/wheat_03 .png","stone/wheat_04 .png")

smallBlueIMG = loadImage("Buildings/SmallBlue.png");

inventoryIMG = loadImage("UI/inventory.png");

downIMG = loadImage("UI/up.png")
rightIMG = loadImage("UI/right.png")
}

function setup() {
	createCanvas(600, 400);

player = createSprite(200,200,5,5)
player.addImage("player_idle",player_idle);
player.addImage("player_run",player_run);
player.addImage("player_walk",player_walk);
player.addImage("player_roll",player_roll);
player.addImage("player_mine",player_mine);
player.addImage("player_chop",player_chop);
player.addImage("player_dig",player_dig);
player.addImage("player_attack",player_attack);
player.addImage("player_ham",player_ham);
player.addImage("player_water",player_water);
player.addImage("player_death",player_death);
player.addImage("player_hurt",player_hurt);
player.addImage("player_doing",player_doing);
player.addImage("player_jump",player_jump);
player.addImage("player_fish1",player_fish1);
player.addImage("player_fish2",player_fish2);
player.addImage("player_fish3",player_fish3);
player.addImage("player_swim",player_swim);


player.depth = 2;
player.scale = 2.5;
player.setCollider("rectangle", 20, 0, 20, 30);

playerCollider = createSprite(0,0,1,1);
playerCollider.setCollider("rectangle", 0, 0, 25, 25);
playerCollider.depth  =-200;

loaderPlayer = createSprite(200,200,20,20);
loaderPlayer.addImage("player_jump",player_jump);
loaderPlayer.scale = 2.5

icon1 = createSprite(200,200,20,20);
icon1.addImage(picUI);
icon1.scale = 3.5;
icon2 = createSprite(200,200,20,20);
icon2.addImage(axeUI);
icon2.scale = 2;
icon3 = createSprite(200,200,20,20);
icon3.addImage(shovelUI);
icon3.scale = 2;
icon4 = createSprite(200,200,20,20);
icon4.addImage(swordUI);
icon4.scale = 2;
icon5 = createSprite(200,200,20,20);
icon5.addImage(hamUI);
icon5.scale = 2;
icon6 = createSprite(200,200,20,20);
icon6.addImage(waterUI);
icon6.scale = 2;
icon7 = createSprite(200,200,20,20);
icon7.addImage(fishUI);
icon7.scale = 2;

inventory = createSprite(0,0,20,20);
inventory.addImage(inventoryIMG);
inventory.scale = .9;

collisionGroups = createGroup();
treeGroup = createGroup();
stoneGroup = createGroup();
flowerGroup = createGroup();
healthShrineGroup = createGroup();
energyShrineGroup = createGroup();
holeGroup = createGroup();
carrotGroup = createGroup();
smallBlueGroup = createGroup();
smallBlueCheckGroup = createGroup();
lakeGroup = createGroup();

loader = createSprite(300,200,2000,2000);
loader.addImage(bg)

energyBar = createSprite(0,0,20,20);
energyBar.addImage(energy1);
energyBar.addImage(energy2);
energyBar.addImage(energy3);
energyBar.addImage(energy4);
energyBar.addImage(energy5);
energyBar.addImage(energy6);
energyBar.addImage(energy7);
energyBar.scale = 3.5

healthBar = createSprite(0,0,20,20);
healthBar.addImage(health1);
healthBar.addImage(health2);
healthBar.addImage(health3);
healthBar.addImage(health4);
healthBar.addImage(health5);
healthBar.addImage(health6);
healthBar.addImage(health7);
healthBar.scale = 3.5
/*
mouse = createSprite(0,0,5,5)
mouse.addImage(mouseIMG)
mouse.scale = 2.5;
*/

skeleton = createSprite(0,0,5,5);
skeleton.addImage("run",skeleton_run)
skeleton.addImage("death",skeleton_death)
skeleton.addImage("attack",skeleton_attack)
skeleton.addImage("idle",skeleton_idle)
skeleton.scale = 2.5;
skeleton.setCollider("rectangle", 0, 0, 30, 30);

woodIcon= createSprite(0,0,2,2);
woodIcon.addImage(woodIMG);
woodIcon.scale = 3.3
stoneIcon= createSprite(0,0,2,2);
stoneIcon.addImage(stoneIMG);
stoneIcon.scale = 3.3
flowerIcon= createSprite(0,0,2,2);
flowerIcon.addImage(flowerIMG);
flowerIcon.scale = 3.3
carrotIcon= createSprite(0,0,2,2);
carrotIcon.addImage(carrotIMG);
carrotIcon.scale = 3.3
seedIcon= createSprite(0,0,2,2);
seedIcon.addImage(seedImage);
seedIcon.scale = 3.3
houseIcon= createSprite(0,0,2,2);
houseIcon.addImage(smallBlueIMG);
houseIcon.scale = 3;
wheatIcon= createSprite(0,0,2,2);
wheatIcon.addImage(wheatDropIMG);
wheatIcon.scale = 3;
wheatGrownIcon= createSprite(0,0,2,2);
wheatGrownIcon.addImage(wheatIMG);
wheatGrownIcon.scale = 3;
boneIcon= createSprite(0,0,2,2);
boneIcon.addImage(boneIMG);
boneIcon.scale = 2;
fishIcon= createSprite(0,0,2,2);
fishIcon.addImage(fishIMG);
fishIcon.scale = 2;

right = createSprite(50,0,2,2);
right.addImage(rightIMG);
right.scale = 2.5;
right.depth =1000;
down = createSprite(0,50,2,2);
down.addImage(downIMG);
down.scale = 2.5;
down.depth =1000;

}



function draw() {
	background(bg);
	cursor("UI/mouse.png")
	loader.x = player.x;
	loader.y = player.y
	if(gameState === "play"){


		
		//Start Stuff
if(1===1){
/*
mouse.x = mouseX-95;
mouse.y = mouseY+10;
*/
playerCollider.x = player.x
playerCollider.y = player.y



  rectMode(CENTER);
  //startSpawning
if(i<300){
	//i<blank is the load time
i += 1;
	createTrees();
	createTrees();
	createTrees();
	createTrees();
	createTrees();
	createTrees();
	createTrees();
	createTrees();
	createTrees();
}
if(frameCount > 300){
	loader.destroy();
	loaderPlayer.destroy();
	
}else{
loaderPlayer.depth = 1002;
	loader.depth = 1000;
	player.x = 200;
	player.y = 200;
}
camera.x = player.x;
camera.y = player.y;
}

//time
if(1===1){
	if(frameCount > 300){
if(inGameHours === 25){
	inGameDays +=1;
	inGameHours = 1;
}
if(frameCount % 150 ===0){
inGameHours +=1;
}}


}
//Inventory

if(1===1){
	if(keyWentDown("q") && inventoryShow === "false" && inventoryTimer >0  &&frameCount>300){
		inventoryTimer = 0

		inventoryShow = "true"
	}
	if(keyWentDown("q") && inventoryShow === "true"&& inventoryTimer >0){
	inventoryTimer = 0
		inventoryShow = "false"
	}
	if(keyWentUp("q")){
		inventoryTimer +=1;

	} 
	inventoryAmount = woodAmount + stoneAmount +seedAmount+flowerAmount+carrotAmount;
	
if(inventoryShow === "true"){
inventory.x = player.x+170;
if(row<5){
//Row 1
woodIcon.x = player.x +94;
woodIcon.y = player.y -94;
stoneIcon.x = player.x +174;
stoneIcon.y = player.y -94;
flowerIcon.x = player.x +250;
flowerIcon.y = player.y -94;

//Row 2
seedIcon.x = player.x +94;
seedIcon.y = player.y -15;
carrotIcon.x = player.x +174;
carrotIcon.y = player.y -15;
houseIcon.x = player.x +250;
houseIcon.y = player.y -15;

//Row 3
wheatIcon.x = player.x +94;
wheatIcon.y = player.y +64;
wheatGrownIcon.x = player.x +174;
wheatGrownIcon.y = player.y +64;
boneIcon.x = player.x +250;
boneIcon.y = player.y +64;

//Row 4
fishIcon.x = player.x +94;
fishIcon.y = player.y +143;
}else{
	woodIcon.x = player.x +2000;
stoneIcon.x = player.x +2000;
flowerIcon.x = player.x +2000;
seedIcon.x = player.x +2000;
carrotIcon.x = player.x +2000;
houseIcon.x = player.x +2000;
wheatIcon.x = player.x +2000;
wheatGrownIcon.x = player.x +2000;
boneIcon.x = player.x +2000;
fishIcon.x = player.x +2000;
}
down.x = player.x+100
down.y = player.y-145
right.x = player.x+30;

if(row === 1){
	right.y = player.y -95 ;
}
if(row === 2){
	right.y = player.y -5 ;

}
if(row === 3){
	right.y = player.y +85 ;

}
if(row === 4){
	right.y = player.y +150 ;

}
if(row === 5){
	right.y = player.y -95 ;

}
if(row === 6){
	right.y = player.y -5 ;

}

if(row === 7){
	right.y = player.y +85 ;

}
if(row === 8){
	right.y = player.y +150 ;

}


if(columns === 1){
	down.x = player.x +110 ;

}
if(columns === 2){
	down.x = player.x +180 ;

}
if(columns === 3){
	down.x = player.x +240 ;

}

if(row === 1 ){
	inventorySlot = columns
	
}
if(row === 2 ){
	inventorySlot = columns+3
}
if(row === 3 ){
	inventorySlot = columns+6
}
if(row === 4 ){
	inventorySlot = columns+9
}
if(row === 5 ){
	inventorySlot = columns+12
}
if(keyWentDown("w")){
	row +=1;
}
if(row === 9){
	row = 1;
}
if(keyDown("z")){
	columns = 1;
}
if(keyDown("x")){
	columns = 2;
}
if(keyDown("c")){
	columns = 3;
}

switch(inventorySlot){
	case 1:inventorySelect(woodIcon);
		break;
		case 2:inventorySelect(stoneIcon);
		break;
		case 3:inventorySelect(flowerIcon);
		break;
		case 4:inventorySelect(seedIcon);
		break;
		case 5:inventorySelect(carrotIcon);
		break;
		case 6:inventorySelect(houseIcon);
		break;
		case 7:inventorySelect(wheatIcon);
		break;
		case 8:inventorySelect(wheatGrownIcon);
		break;
		case 9:inventorySelect(boneIcon);
		break;
		case 10:inventorySelect(fishIcon);
		break;
}
}
if(inventoryShow === "false"){
	inventory.x = player.x+870;
	down.x = player.x +2000;
	right.x = player.x +2000;

	//Row 1
woodIcon.x = player.x +2000;
stoneIcon.x = player.x +2000;
flowerIcon.x = player.x +2000;
seedIcon.x = player.x +2000;
carrotIcon.x = player.x +2000;
houseIcon.x = player.x +2000;
wheatIcon.x = player.x +2000;
wheatGrownIcon.x = player.x +2000;
boneIcon.x = player.x +2000;
fishIcon.x = player.x +2000;

}
inventory.y = player.y;
}
  //movment
  if(1===1){
  if(keyWentDown(RIGHT_ARROW)){
	if(direction === 1){
		player.setCollider("rectangle", 10, 0, 30, 30);
		playerColliderX = 10;
playerColliderUpdate();
		playerColliderUpdate();
	player.mirrorX(player.mirrorX() * -1);
	direction = 0;
	}
}
if(keyWentDown(LEFT_ARROW)){
	if(direction === 0){
		player.setCollider("rectangle", -10, 0, 30, 30);
		playerColliderX = -10;
		playerColliderUpdate();
		playerCollider.setCollider("rectangle", playerColliderX, playerColliderY, 1, 60);
		playerColliderUpdate();
	player.mirrorX(player.mirrorX() * -1);
	direction = 1;
	}
}
if(keyDown(RIGHT_ARROW) == false && keyDown(LEFT_ARROW) == false && keyDown(DOWN_ARROW) == false && keyDown(UP_ARROW) == false && playerAnimation != 12&& playerAnimation != 11&& playerAnimation != 13){
	playerAnimation = 1;
	walkTime = 0
}
if(keyDown(RIGHT_ARROW) && playerCollider.isTouching(collisionGroups) ==false && playerAnimation !=10&& playerAnimation != 12&& playerAnimation != 11&& playerAnimation != 13){
	walkTime +=.03
if(keyDown("s")){
	roll(-1);

}else if(walkTime < 1){
		player.x += speed;
		playerAnimation = 3;
	}else{
		player.x += speed * 1.5;
	playerAnimation = 2;
	}

}
if(keyDown(LEFT_ARROW)&& playerCollider.isTouching(collisionGroups) ==false && playerAnimation !=10&& playerAnimation != 12&& playerAnimation != 11&& playerAnimation != 13){
	walkTime +=.03;
	if(keyDown("s")){
		roll(1);
	}else if(walkTime < 1){
		player.x -= speed;
		playerAnimation = 3;
	}else{
		player.x -= speed * 1.5;
	playerAnimation = 2;
	}
}
if(keyDown(LEFT_ARROW) && keyDown(RIGHT_ARROW)&& playerAnimation != 12&& playerAnimation != 11&& playerAnimation != 13){
	playerAnimation = 1;

}
if(keyDown(DOWN_ARROW) && playerAnimation !=10 ){
playerColliderY = 10;
playerColliderUpdate();
if(playerCollider.isTouching(collisionGroups) ==false){

	if(keyDown(RIGHT_ARROW) == false && keyDown(LEFT_ARROW) == false&& playerAnimation != 12&& playerAnimation != 11&& playerAnimation != 13){
		playerAnimation = 3;
	}
	player.y += speed;
}
}
if(keyDown(UP_ARROW)&& playerAnimation !=10){
	playerColliderY = -10;
	playerColliderUpdate();
	if(playerCollider.isTouching(collisionGroups) ==false){
	if(keyDown(RIGHT_ARROW) == false && keyDown(LEFT_ARROW) == false&& playerAnimation != 12&& playerAnimation != 11&& playerAnimation != 13){
		playerAnimation = 3;
	}
	player.y -= speed;
}}
  }
  //iconsToolbar
  if(1===1){


	if(keyDown("1")){
		iconSelect(5);
	}else if(keyDown("2")){
		iconSelect(6);
	}else if(keyDown("3")){
		iconSelect(7);
	}else if(keyDown("4")){
		iconSelect(8);
	}else if(keyDown("5")){
		iconSelect(9);
	}else if(keyDown("6")){
		iconSelect(10);
	}else if(keyDown("7")){
		iconSelect(11);
	}
	
	
	icon1.x = player.x-100;
	icon1.y = player.y+160;
	icon2.x = player.x-50;
	icon2.y = player.y+160;
	icon3.x = player.x;
	icon3.y = player.y+160;
	icon4.x = player.x+50;
	icon4.y = player.y+160;
	icon5.x = player.x+100;
	icon5.y = player.y+160;
	icon6.x = player.x+150;
	icon6.y = player.y+160;
	icon7.x = player.x+200;
	icon7.y = player.y+160;
	energyBar.x = player.x+25;
	energyBar.y = player.y+120;
	healthBar.x = player.x-25;
	healthBar.y = player.y+120;
	

	if(playerAnimation === 5 && frameCount % 2 === 0){
		if(icon1.scale === 2.8){
			icon1.scale = 3;
		}else{
			icon1.scale = 2.8;
		
		}}
	 if(playerAnimation === 6 && frameCount % 2 === 0){
		if(icon2.scale === 2.8){
			icon2.scale = 3;
		}else{
			icon2.scale = 2.8;
		
		}}
		 if(playerAnimation === 7 && frameCount % 2 === 0){
		if(icon3.scale === 2.8){
			icon3.scale = 3;
		}else{
			icon3.scale = 2.8;
		
		}}
		 if(playerAnimation === 8 && frameCount % 2 === 0){
	if(icon4.scale === 2.8){
		icon4.scale = 3;
	}else{
		icon4.scale = 2.8;
	
	}
	}

  if(iconNumber ===6 && player.isTouching(treeGroup) && keyDown("a") && energy>1){
	  if(chopTime > 20){
energy -= 1;	
spawnDrop(wood,woodIMG)
spawnDrop(wood,woodIMG)
spawnDrop(wood,woodIMG)
	 if(frameCount % 3 === 0){
	 spawnDrop(wood,woodIMG)
	 spawnDrop(wood,woodIMG)
	 woodAmount += 2;
	 }
	 woodAmount += 3;
	 chopTime = 0;
	}else{
chopTime +=1;
	}
  }
  if(iconNumber ===5 && player.isTouching(stoneGroup) && keyDown("a") && energy>1){
	if(mineTime > 20){
	energy -= 1;	
	spawnDrop(stone,stoneIMG)
	spawnDrop(stone,stoneIMG)
	spawnDrop(stone,stoneIMG)
	if(frameCount % 3 === 0){
	spawnDrop(stone,stoneIMG)
	spawnDrop(stone,stoneIMG)
	stoneAmount += 2;
	}
	stoneAmount += 3;
	mineTime = 0;
}else{
	mineTime +=1;
}
	  }
	  if(iconNumber ===7 && player.isTouching(flowerGroup) && keyDown("a") && frameCount % 40 === 0 && energy>1){
		energy -= 1;	
		spawnDrop(flower,flowerIMG)
		flowerAmount += 1;
		if(frameCount % 10 === 0){
			spawnDrop(seed,seedImage)
		

			seedAmount += 1;

		}
		  }
		  if(iconNumber ===8 && player.isTouching(skeleton) && keyDown("a") && frameCount % 40 === 0){
			energy -= 1;

			skeleton.changeImage("death",skeleton_death);
			d+=1
	 if(d>1){
		 d = 0
skeleton.destroy();
skeletonDied = "true";
energy += 2;
if(random(1,2) === 1){
spawnDrop(bone,boneIMG,1.5);
boneAmount +=1
}else{
spawnDrop(bone,boneIMG,1.5);
spawnDrop(bone,boneIMG,1.5);
boneAmount +=2

}
		}
			  }
			  if(d ===1){
				  if(frameCount %100 === 0){
					  d =0;
				  }
			 }
			 if(iconNumber ===10 && keyDown("a") && frameCount % 40 === 0&& energy>1 && playerCollider.isTouching(lakeGroup) === false){
		energy -=1;
			createTrees(1); 
			createTrees(1); 
			createTrees(1); 
			if(frameCount % 3 === 0){
			createTrees(1); 
			createTrees(1); 

			}
			
			if(frameCount % 12 === 0){
				spawnDrop(stone,stoneIMG)
				spawnDrop(stone,stoneIMG)
				spawnDrop(stone,stoneIMG)
				stoneAmount += 3;

			}
			if(frameCount % 13 === 0){
				spawnDrop(wood,woodIMG)
				spawnDrop(wood,woodIMG)
				spawnDrop(wood,woodIMG)
				woodAmount += 3;

			}
			if(frameCount % 14 === 0){
				spawnDrop(flower,flowerIMG)
				spawnDrop(flower,flowerIMG)
				spawnDrop(flower,flowerIMG)
				flowerAmount += 3;

			}
			if(frameCount % 15 === 0){
				spawnDrop(seed,seedImage)
			

				seedAmount += 1;

			}
			if(frameCount % 16 === 0){
				spawnDrop(wheatSeed,wheatDropIMG)
				wheatSeedCount += 1;

			}
		
					}
					
						if(iconNumber ===7 && player.isTouching(treeGroup)==false && player.isTouching(holeGroup)==false&& player.isTouching(flowerGroup) == false&& keyDown("a") && frameCount % 40 === 0 && energy>1){
							energy -= 1;	
							digHoles();
							  }
							  if(wheatSeedCount>0&&keyDown("d") && player.isTouching(holeGroup) && row === 3 && columns === 1){
								if(direction === 0){
									wheat = createSprite(player.x +27,player.y+30,15,15);
									}
									if(direction === 1){
										wheat = createSprite(player.x -27,player.y+30,15,15);
										} 
										wheat.addAnimation("wheat",wheatImage);
										wheat.scale = 2.5;
										wheat.frameDelay = 100;
										carrotGroup.add(wheat);
										if(wheat.isTouching(carrotGroup)){
											wheat.destroy();
										}else{
											playerAnimation = 13;
											wheatSeedCount -=1;
											wheatAmount +=1;
											spawnDrop(wheat,wheatIMG);										}
										wheat.lifetime = 300;
							  }
							  if(seedAmount>0&&keyDown("d") && player.isTouching(holeGroup) && row === 2 && columns === 1){
								if(direction === 0){
									carrot = createSprite(player.x +27,player.y+30,15,15);
									}
									if(direction === 1){
										carrot = createSprite(player.x -27,player.y+30,15,15);
										} 
										carrot.addAnimation("carrot",carrotImage);
										carrot.scale = 2.5;
										carrot.frameDelay = 100;
										carrotGroup.add(carrot);
										if(carrot.isTouching(carrotGroup)){
											carrot.destroy();
										}else{
											playerAnimation = 13;
											seedAmount -=1;
											carrotAmount +=1;
											spawnDrop(carrot,carrotIMG);										}
										carrot.lifetime = 300;
							  }

							  if(iconNumber ===11 && player.isTouching(lakeGroup) && keyDown("a") && energy>1&& playerCollider.isTouching(lakeGroup) === false){
							
								if(fishTime > 150){
									playerAnimation = 16
								fishTime = -20;
								energy -= 1;	
								spawnDrop(fishDrop,fishIMG)
								if(frameCount % 3 === 0){
									spawnDrop(fishDrop,fishIMG)
									fishAmount += 1;
								}
								fishAmount += 1;
								
							}else{
								fishTime +=1;
								if(fishTime>15 ){
								playerAnimation = 15
								}
								if(fishTime<15){
									playerAnimation = 14
									}
							}
								  }
							  if(iconNumber ===9  && player.isTouching(smallBlueGroup)==true &&keyDown("a") ){
								  productionSpeed = 30
							  }else{
								productionSpeed = 100
							  }

		}
//Animations
if(1===1){
	if(playerCollider.isTouching(lakeGroup)){
		playerAnimation = 17;

	}else{
  if(keyDown("a") && iconNumber !=11){
	  playerAnimation = iconNumber;
  }
  
  if(keyWentUp ("a")&& iconNumber !=11){
	playerAnimation = 1;
  }
  if(keyWentUp ("a")&& iconNumber ===11){
fishTime = -20
	playerAnimation = 16;

}
	}
switch(playerAnimation){
	
	case 1:
		player.changeImage("player_idle",player_idle);
	break;
	case 2:player.changeImage("player_run",player_run);
	break;
	case 3:player.changeImage("player_walk",player_walk);
	break;
	case 4:player.changeImage("player_roll",player_roll);
	break;
	case 5:player.changeImage("player_mine",player_mine);
	break;
	case 6:player.changeImage("player_chop",player_chop);
	break;
	case 7:player.changeImage("player_dig",player_dig);
	break;
	case 8:player.changeImage("player_attack",player_attack);
	break;
	case 9:player.changeImage("player_ham",player_ham);
	break;
	case 10:player.changeImage("player_water",player_water);
	break;
	case 11:player.changeImage("player_death",player_death);
	break;
	case 12:player.changeImage("player_hurt",player_hurt);
	hurtTimer +=1;
if(hurtTimer > 20){
	playerAnimation = 1;
	hurtTimer = 0;
}
	break;
	case 13:player.changeImage("player_doing",player_doing);
	doTimer +=1;
	if(doTimer > 20){
		playerAnimation = 1;
		doTimer = 0;
	}
	break;
	case 14:player.changeImage("player_fish1",player_fish1);
	break;
	case 15:player.changeImage("player_fish2",player_fish2);
	break;
	case 16:player.changeImage("player_fish3",player_fish3);
	break;
	case 17:player.changeImage("player_swim",player_swim);
	break;
}
if(health <1){
gameState = "death";
}
	}
//Shrines
if(1===1){
	if(player.isTouching(healthShrineGroup) && keyDown("a") && health<7){
		health =7;		
		player.x = random(-4000,4000);
		player.y = random(-2000,2000);
		}	
		if(player.isTouching(energyShrineGroup) && keyDown("a")){
	
		if(skeletonDied){
			createSkeleton();
		}
		skeleton.x = player.x;
		skeleton.y = player.y;
			energy = 7;		 
			}
			}
//skeleton
if(1===1){

if(skeletonOffScreen === "true" ){
	if(frameCount % 100 === 0 && skeletonDied === "false"){
	createSkeleton();
	}
	 if(frameCount % 400 ===0 && skeletonDied === "true"){
		createSkeleton();

	}
}




if(skeleton.x < player.x -500 || skeleton.x > player.x +500 ||skeleton.y < player.y -350 ||skeleton.y > player.y +350 ){
	skeletonOffScreen = "true";
}
if(frameCount % 15 === 0){
	skeletonX =random(-10,10)
	skeletonY =random(-10,10)

}
if(frameCount % 10 === 0){
	skeletonX =0
	skeletonY =0

}

if(skeleton.x > player.x -160 && skeleton.x < player.x +160 && skeleton.y > player.y-160&& skeleton.y < player.y+160 && d === 0){
	skeleton.changeImage("run",skeleton_run);
skeleton.x += skeletonX;
skeleton.y += skeletonY;
}else{
	if( d === 0){
	skeleton.changeImage("idle",skeleton_idle);
	}
}
if(skeleton.isTouching(playerCollider) &&  d === 0){
	skeleton.changeImage("attack",skeleton_attack);
if(frameCount % 20 === 0){
	health -=1;
	if(health > 1){
	playerAnimation = 12;
	}
}
}
if(skeletonDirection === 1 && skeleton.x < player.x){
skeleton.mirrorX(skeleton.mirrorX() * -1);
skeletonDirection = 0;
}
if(skeletonDirection === 0 && skeleton.x > player.x){
	skeleton.mirrorX(skeleton.mirrorX() * -1);
	skeletonDirection = 1;
	}

}
//Energy/Health
if(1===1){
if(energy>7){
	energy = 7;
}

if(energy != 1){
	w+=1
	if(inGameDays < 2){
		if(w>900){
			w = 0
	   energy -= 1
		}
	}else{
	 if(w>600){
		 w = 0
	energy -= 1
	 }
	}
}
if(energy < 2 && health>1){
	w+=1
	 if(w>300){
		 energy = 4
		 health -=1;
		 playerAnimation = 12;

	 }
}



switch(energy){
case 1:energyBar.addImage(energy1)
	break;
	case 2:energyBar.addImage(energy2)
break;
case 3:energyBar.addImage(energy3)
	break;
	case 4:energyBar.addImage(energy4)
	break;
	case 5:energyBar.addImage(energy5)
	break;
	case 6:energyBar.addImage(energy6)
	break;
	case 7:energyBar.addImage(energy7)
	break;
}
switch(health){
	case 1:healthBar.addImage(health1)
		break;
		case 2:healthBar.addImage(health2)
	break;
	case 3:healthBar.addImage(health3)
		break;
		case 4:healthBar.addImage(health4)
		break;
		case 5:healthBar.addImage(health5)
		break;
		case 6:healthBar.addImage(health6)
		break;
		case 7:healthBar.addImage(health7)
		break;
	}
}

if(keyWentUp("e") && gameWait === 0){
	gameState = "pause";
	gameWait = 1;
	loader = createSprite(300,200,2000,2000);
loader.addImage(bg)
}
if(keyWentUp("e")  && gameWait === 1){
	gameWait = 0;

}
	}
	if(delay>-1){
		delay -=1;
	}
	//gameStates
if(gameState === "death"){
	inventoryShow === "false";
	skeleton.changeImage("idle",skeleton_idle)
	player.changeImage("player_death",player_death);
	deathTimer +=1;
	if(deathTimer >30){
		player.destroy();
		
	}
}
if(gameState === "pause" ){
		if(keyWentDown("e")&& gameWait === 0){
loader.destroy();
		gameState = "play"
		gameWait = 1;
	}
	if(keyWentUp("e")  && gameWait === 1){
		gameWait = 0;

	}
}
  drawSprites();


//House
if(1===1){
if(keyDown("d") && woodAmount >24 && stoneAmount > 9 && row === 2 && columns === 3){
	if(direction === 0){
		smallBlue = createSprite(player.x +100,player.y+30,60,60)
		smallBlueCollide = createSprite(player.x +100,player.y+30,1,1)

	}
		if(direction === 1){
			smallBlue = createSprite(player.x -100,player.y-30,60,60)
			smallBlueCollide = createSprite(player.x -100,player.y-30,1,1)

		}
		if(smallBlue.isTouching(smallBlueCheckGroup)){
			smallBlue.destroy();
			smallBlueCollide.destroy();
		}else{
		smallBlueCollide.setCollider("rectangle", 0, 0, 500, 500);
	collisionGroups.add(smallBlue)
	smallBlueGroup.add(smallBlueCollide);
	smallBlueCheckGroup.add(smallBlue);
	woodAmount -=25;
	stoneAmount -= 10;
	houseCount +=1;
	smallBlue.addImage(smallBlueIMG);
	smallBlue.scale = 2.5;
	smallBlue.depth = player.depth - 0.04
		}
}
if(frameCount % productionSpeed === 0 && player.isTouching(smallBlueGroup)){
switch(houseCount){
case 1:spawnDrop(wood,woodIMG);
	break;
	case 2:spawnDrop(wood,woodIMG);
		spawnDrop(stone,stoneIMG);
	break;
	case 3:spawnDrop(wood,woodIMG);
	spawnDrop(stone,stoneIMG);
		spawnDrop(flower,flowerIMG);
	break;
	case 4:spawnDrop(wood,woodIMG);
	spawnDrop(stone,stoneIMG);
		spawnDrop(flower,flowerIMG);
		spawnDrop(seed,seedImage);
	break;
	case 5:
	spawnDrop(wood,woodIMG);
	spawnDrop(stone,stoneIMG);
		spawnDrop(flower,flowerIMG);
		spawnDrop(seed,seedImage);
		spawnDrop(wheatSeed,wheatDropIMG);

	break;
	case 6:
	spawnDrop(wood,woodIMG);
	spawnDrop(stone,stoneIMG);
		spawnDrop(flower,flowerIMG);
		spawnDrop(seed,seedImage);
		spawnDrop(wheatSeed,wheatDropIMG);
		spawnDrop(bone,boneIMG,1.5);

	break;
	case 7:spawnDrop(wood,woodIMG);
	spawnDrop(stone,stoneIMG);
	spawnDrop(wood,woodIMG);
	spawnDrop(stone,stoneIMG);
	spawnDrop(flower,flowerIMG);
	spawnDrop(bone,boneIMG,1.5);
	spawnDrop(seed,seedImage);
	break;
	case 8:spawnDrop(wood,woodIMG);
	spawnDrop(stone,stoneIMG);
	spawnDrop(wood,woodIMG);
	spawnDrop(stone,stoneIMG);
	spawnDrop(flower,flowerIMG);
	spawnDrop(bone,boneIMG,1.5);
	spawnDrop(seed,seedImage);
		spawnDrop(seed,seedImage);
	break;
}
}
}
//FOOD
if(1===1){
	if(frameCount % 3 === 0){
if(keyDown("d") && carrotIcon.scale > 4  && carrotAmount >0 && energy<7 && delay<0){
	playerAnimation = 13
	carrotAmount -=1;
	
	energy +=3;
	delay = 10
}
if(keyDown("d") && row === 3 && columns === 2  && wheatAmount >0 && energy<7 && delay<0){
	playerAnimation = 13
	wheatAmount -=1;
	energy +=4;
	delay = 10

}
if(keyDown("d") && row === 4 && columns === 1  && fishAmount >0 && energy<7 && delay<0){
	playerAnimation = 13
	fishAmount -=1;
	energy +=4;
	delay = 10

}
if(keyDown("d") && row === 2 && columns === 1 && seedAmount >0 && energy<7 && delay<0){
	playerAnimation = 13
	seedAmount -=1;
	energy +=1;
	delay = 10

}
if(keyDown("d")&& row === 3 && columns === 1  && wheatSeedCount >0 && energy<7 && delay<0){
	playerAnimation = 13
	wheatSeedCount -=1;
	energy +=1;
	delay = 10

}}

}

//TEXT
if(1===1){
	if(gameState === "pause"){
		textSize(25)
		fill(2000, 2000, 2000, 2000);
		text("Press 'e' to resume the game",player.x-160,player.y);
	
	}
	
	if(frameCount > 300 && gameState === "play"){
		textSize(25)
		fill(2000, 2000, 2000, 2000);
		text("Days: " + Math.round(inGameDays),player.x-300,player.y-180);
		text("Time: " + inGameHours + ":00",player.x-300,player.y-150);
		textSize(30)
		text("1",player.x-150,player.y+170);
		if(inventoryShow === "false"){
		text("7",player.x+230,player.y+170);
		}
		textSize(20)
		if(player.isTouching(energyShrineGroup)){
			text("Press A to gain energy, at a cost",player.x,player.y - 30)
		}
		if(player.isTouching(healthShrineGroup)){
			text("Press A to regain health, at a cost",player.x,player.y - 30)
		}
	}
if(inventoryShow === "true"){
fill("white")
textSize(15)
text("W",right.x+20,right.y)
text("Z",player.x+90,player.y-130,)
text("X",player.x+170,player.y-130,)
text("C",player.x+240,player.y-130,)

text(`Space:` + inventoryAmount + `/500`,player.x+150,player.y-180)
if(row<5){
text(`Wood:


  	  	 ` + woodAmount,player.x+68,player.y-114)
text(`Stone:


		 	  ` + stoneAmount,player.x+148,player.y-114)
text(`Flower:


			   ` + flowerAmount,player.x+218,player.y-114)
text(`Carrot Seeds:


			   ` + seedAmount,player.x+58,player.y-40)
text(`Carrots:


			   ` + carrotAmount,player.x+151,player.y-40)
			  text(`Houses (25 wood,
10 stone):


			   ` + houseCount,player.x+220,player.y-40)
			 text(`Wheat Seeds:


			   ` + wheatSeedCount,player.x+58,player.y+40)
			text(`Wheat :


			   ` + wheatAmount,player.x+157,player.y+40)
			   text(`Bones :


			   ` + boneAmount,player.x+225,player.y+40)
			   text(`Fish :


			   ` + fishAmount,player.x+58,player.y+120)
}else{

}


}
if(frameCount<300){
	fill(2000, 2000, 2000, 2000);
	textSize(dia);
	text("Please Wait...",130,150)
	textSize(20);

	text( Math.round(i/3) +" %",390,50)

	if (dia > 30) {
		grow = false
	  }
	  if (dia < 0) {
		grow = true
	  }
	  
	  if (grow == true) {
		dia += growAmount
	  } else {
		dia -= growAmount
	  }
}
}
}

function roll(multi){
	if(frameCount % 40 === 0){
	energy -= 1;
	}
	playerAnimation = 4;
		player.x -= speed * 2.5*multi;
		walkTime = 1;

}

function iconSelect(icon){
	iconNumber = icon;
	icon1.scale = 2;
	icon2.scale = 2;
	icon3.scale = 2;
	icon4.scale = 2;
	icon5.scale = 2;
	icon6.scale = 2;
	icon7.scale = 2;

switch(icon){
	case 1:
	break;
	case 2:
	break;
	case 3:
	break;
	case 4:
	break;
	case 5:icon1.scale = 3.5
	break;
	case 6:icon2.scale = 3.5
	break;
	case 7:icon3.scale = 3.5
	break;
	case 8:icon4.scale = 3.5
	break;	
	case 9:icon5.scale = 3.5
	break;
	case 10:icon6.scale = 3.5
	break;
	case 11:icon7.scale = 3.5
	break;
}
}
	
function createTrees(water){
	
	if(frameCount < 2){
	var treeNum = 1
	}else{
		var treeNum = Math.round(random(1,19));
	}
	if(water === 1){
	tree = createSprite(player.x+random(-200,200),player.y + random(-200,200),0,0);
	}else{
		tree = createSprite(random(-4000,4000),random(-2000,2000),2,2);
	}
	switch(treeNum){
case 1:tree.addImage(lakeIMG);
tree.setCollider("rectangle", 0, -10, 38, 52);
lakeGroup.add(tree)
	break;
case 2:tree.addImage(tree2);
treeGroup.add(tree);
collisionGroups.add(tree);

	break;
case 3:tree.addImage(tree3);
treeGroup.add(tree);
collisionGroups.add(tree);

	break;
	case 4:tree.addImage(stump1);
	treeGroup.add(tree);
	collisionGroups.add(tree);

	break;
	case 5:tree.addImage(stump2);
	treeGroup.add(tree);
	collisionGroups.add(tree);

	break;
	case 6:tree.addImage(tree2);
	treeGroup.add(tree);
	collisionGroups.add(tree);
	

	break;
case 7:tree.addImage(tree3);
treeGroup.add(tree);
collisionGroups.add(tree);

	break;
	case 8:tree.addImage(tree1);
	treeGroup.add(tree);
	collisionGroups.add(tree);

	break;
	case 9:tree.addImage(tree1);
	treeGroup.add(tree);
	collisionGroups.add(tree);

	break;
	case 10:tree.addImage(tree1);
	treeGroup.add(tree);
	collisionGroups.add(tree);

	break;
	case 11:tree.addImage(stone1);
	stoneGroup.add(tree);
	break;
	case 12:tree.addImage(stone1);
	stoneGroup.add(tree);
	break;
	case 13:tree.addImage(stone1);
	stoneGroup.add(tree);
	break;
	case 14:tree.addImage(stone2);
	stoneGroup.add(tree);

	break;
	case 15:tree.addImage(stone3);
	stoneGroup.add(tree);
	break;
	case 16:tree.addImage(stone4);
	stoneGroup.add(tree);
	break;
	case 17:tree.addImage(flower);
	flowerGroup.add(tree);
	break;
	case 18:
		if(Math.round(random(0,3)) ===3 ){
			tree.addImage(healthShrineIMG);
	healthShrineGroup.add(tree);
	collisionGroups.add(tree);
	tree.depth = .8;
		tree.setCollider("rectangle", 0, 0, 20, 30);
				}else{
					tree.destroy();
				}
	break;
	case 19:
		if(Math.round(random(1,3)) ===3 ){

	tree.addImage(energyShrineIMG);
	energyShrineGroup.add(tree);
	collisionGroups.add(tree);
	tree.depth = .8;
		tree.setCollider("rectangle", 0, 0, 20, 30);
		}else{
			tree.destroy();

		}
	break;

	}
	tree.scale = 2.5;
	tree.depth = .7;
	if(treeNum < 18 && treeNum != 1){
	tree.height = tree.height * .4;
	tree.setCollider("rectangle", 0, -10, tree.width, tree.height);

	}
	
	if(tree.isTouching(treeGroup) || tree.isTouching(player)||tree.isTouching(lakeGroup)){
		tree.destroy();
	
	}

}
function spawnDrop(obj,objIMG,scale){
	obj = createSprite(player.x + random(-60,60),player.y + random(-60,60),20,20)
	obj.addImage(objIMG);
	if(scale === 1.5){
		obj.scale = 1.5;
	}else{
	obj.scale = 2.5;
	}
	obj.depth = player.depth - .1;
	obj.lifetime = 25;
dust = createSprite(obj.x,obj.y+15,20,20);
dust.addImage(dustIMG);
	dust.lifetime = 28
	dust.depth = obj.depth - .1;
}
function playerColliderUpdate(){
playerCollider.setCollider("rectangle", playerColliderX, playerColliderY, 1, 10);
}
function createSkeleton(){
	skeletonDied === "false";
	skeletonOffScreen = "false";
	skeleton.destroy();
	skeleton = createSprite(player.x + random(-300,300),player.y + random(-300,300),20,20)
	skeleton.addImage("idle",skeleton_idle);
	skeleton.addImage("run",skeleton_run);
	skeleton.addImage("death",skeleton_death)
	skeleton.addImage("attack",skeleton_attack)
	skeleton.scale = 2.5;
	skeleton.setCollider("rectangle", 0, 0, 30, 30);
	skeletonDirection = 0;
	skeleton.depth = player.depth -1;
}
function digHoles(){
	if(direction === 0){
	holes = createSprite(player.x +27,player.y+30,15,15);
	}
	if(direction === 1){
		holes = createSprite(player.x -27,player.y+30,15,15);
		}
		holeGroup.add(holes);
		var holeRand = Math.round(random(1,2));
switch(holeRand){
	case 1:holes.addImage(hole1);
		break;
	case 2:holes.addImage(hole1);
		break;
}
if(Math.round(random(1,2)) === 1){
	spawnDrop(seed,seedImage);
	seedAmount +=1;
}
if(Math.round(random(1,3)) === 1){
	wheatSeedCount +=1;
	spawnDrop(wheatSeed,wheatDropIMG);
}
holes.scale = 2.5;
holes.depth = player.depth - 3
holes.lifetime = 2000;

		if(holes.isTouching(holeGroup)){
			holes.destroy();
		}
}
function inventorySelect(icon){
woodIcon.scale =3.3;
stoneIcon.scale =3.3;
flowerIcon.scale =3.3;
seedIcon.scale =3.3;
carrotIcon.scale =3.3;
houseIcon.scale =2;
wheatIcon.scale =3.3;
wheatGrownIcon.scale =3.3;
boneIcon.scale =2;
fishIcon.scale =2;

if(icon !=houseIcon ){
	if (icon !=boneIcon){
icon.scale = 4.5;
	}else{
		icon.scale = 2.4;
	}

	}else{
		icon.scale = 3;
	}
}
