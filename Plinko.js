class Plinko {
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution: 1
        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
        fill("white");
        strokeWeight(5);
        stroke("yellow");
    }
}