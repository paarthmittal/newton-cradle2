class Bob{
    constructor(x,y,radius){

        var options={
            isStatic:false,
            restitution:1.1,
            friction:0, 
            density:7.0
        }
            this.body = Bodies.circle(x,y,radius,options);
            this.radius= 30
            World.add(world,this.body)
            
    }
    display(){
        push()
        fill(254,0,255) 
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius);
      pop ()
    }

}