class Bob{
    constructor(x,y,r){
        var options = {
            isStatic:true,
            restitution: 1,
            weight: 10
        }
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        stroke("black");
        fill("pink")
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}