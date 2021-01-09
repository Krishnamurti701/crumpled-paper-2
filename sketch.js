const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var paper,paperImg;
var ground;
var dustbin,dustbinImg;
var dustbin1,dustbin2,dustbin3;

function preload() {
	paperImg = loadImage("images/paper.png");
	dustbinImg = loadImage("images/dustbingreen.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;



	dustbin = new Dustbin(964,520,20,20);
	dustbin.addImg(dustbinImg);
	dustbin.scale=0.45;

	dustbin1 = new Dustbin(902,505,10,20);
	dustbin2 = new Dustbin(962,565,130,10);
	dustbin3 = new Dustbin(1024,505,120,10);

	paper= new Paper(100,100);
	paper.addImg(paperImg)
	paper.scale=0.2

}

function draw(){
    background(0);
    Engine.update(engine);
	strokeWeight(4);
	ground.display();
	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position({x:85,y:-85}))
	}

}
