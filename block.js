class Block{
    constructor(x,y,width,height) {
        var options={
            isStatic:true,
            friction:1.0,
            restitution:0,
            density:1.0,

        }

        this.Visiblity = 255
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display() {

        if(this.body.speed< 3) {
            this.body.display();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visiblity= this.Visiblity - 5;
            tint(255,this.Visiblity);
            fill("pink");
            rect(this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
        }
        
    }
}
