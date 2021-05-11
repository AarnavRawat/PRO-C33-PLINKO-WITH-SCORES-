class Particle{
    constructor(x,y,radius){
        var options = {
            'restitution': 1.0,
            'density': 1.0,
            'friction': 1.0,
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(userWorld,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0,0,this.radius*2);
        pop();
    }
}