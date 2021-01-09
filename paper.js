class paper {
    constructor(x, y,r) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
    this.body = Bodies.circle(250,540,20,options);
    this.width=-33;
    this.image = loadImage("images/paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     var angle = this.body.angle;
      rotate(angle);
      imageMode(CENTER);
      fill("white");
      image(this.image,pos.x,pos.y,33,33);
      
    }
  }
  