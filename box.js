function Box(x, y, w, h){
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    World.add(world, this.body);

    this.show = function(){
        var pos = this.body.position;
        push();
        rect(width-350, height-410, w, h);
        pop();
    }
}