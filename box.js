class Box {
    constructor(x, y, width, height, colour1, colour2, colour3) {
        var options = {
            restitution:0.3,
            friction:1,
            density:6,
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.colour1 = colour1;
        this.colour2 = colour2;
        this.colour3 = colour3;
        this.visibility = 255;
        World.add(world, this.body);
      }
    display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.colour1,this.colour2,this.colour3,200);
        rect(0, 0, this.width, this.height);
        pop();
        }
        else {
          World.remove(world, this.body);
          this.visibility -= 10;
          push();
          noStroke();
          fill(this.colour1,this.colour2,this.colour3,this.visibility);
          rect(this.body.position.x,this.body.position.y,this.width, this.height);
          pop();
        }
    }
}