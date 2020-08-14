class Bird {
    constructor(x, y){
        var options= {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.width = 30;
        this.height = 30;
        World.add(world, this.body);
    }
    display() {
        var pos =this.body.position;
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("red");
        ellipse(pos.x, pos.y, this.width, this.height);
    }
}