class Log3{
    constructor() {

        this.body = Bodies.rectangle(400,550,20,100);
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        this.width = 20;
        this.height = 100;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
    }

         }