var backgroundImage;
var openImage;
var carpetImage;
var chairImage;
var basketImage;
var dogImage;
var bookImage;
var catImage;
var blanketImage;
var girlImage;
var findImage;
var missionImage;
var starImage;

function preload() {
	backgroundImage = loadImage("images/background.png");
	openImage = loadImage("images/open.png");
	carpetImage = loadImage("images/carpet.png");
	chairImage = loadImage("images/chair.png");
	basketImage = loadImage("images/basket.png");
	dogImage = loadImage("images/dog.png");
	bookImage = loadImage("images/book.png");
	catImage = loadImage("images/cat.png");
	blanketImage = loadImage("images/blanket.png");
	girlImage = loadImage("images/girl.png");
	findImage = loadImage("images/find.png");
	missionImage = loadImage("images/mission.png");
	starImage = loadImage("images/star.png");
}

function setup() {
	createCanvas(800, 600);
}

function draw() {
	image(backgroundImage, 0, 0);
	if (mouseX < 290 && mouseX > 70 && mouseY < 420 && mouseY > 120 && mouseIsPressed) {
		image(openImage, 0, 0);
	}	
	if (mouseX < 470 && mouseY > 450 && mouseY < 590) {
		image(carpetImage, mouseX - 400, 0);
	} else {
		image(carpetImage, 0, 0);
	}
	if (mouseX > 200 && mouseX < 300 && mouseY > 430 && mouseY < 530 && mouseIsPressed) {
		image(dogImage, 0, 0);
	} else {
		image(basketImage, random (- 3, 3), 0);
	}
	if (mouseX < 440 && mouseX > 330 && mouseY < 430 && mouseY > 250 && mouseIsPressed) {
		image(chairImage, mouseX - 330, 0);
	} else {
		image(chairImage, 0, 0);
	}
	if (mouseX > 610 && mouseY < 150 && mouseY > 50) {
		image(bookImage, mouseX - 600, 0);
	} else {
		image(bookImage, 0, 0);
	}
	if (mouseX > 550 && mouseX < 750 && mouseY > 310 && mouseY < 500 && mouseIsPressed) {
		image(girlImage, 0, 0);
		image(starImage, 0, 0);
	} else {
		image(blanketImage, 0, 0);
	}
	if (mouseX > 70 && mouseX < 270 && mouseY < 110 && mouseY > 30) {
		image(findImage, 0, 0);
	} else {
		image(missionImage, 0, 0);
	}
}

