function Circle(x, y, r){
    this.body = Bodies.circle(width-290, height-450, r);
    this.x = x;
    this.y = y;
    this.r = r;
    World.add(world, this.body);

    this.show = function(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        fill("red");
        ellipse(pos.x, pos.y, r);
        pop();
    }
}