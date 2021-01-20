class Log1{
    constructor() {

        this.body = Bodies.rectangle(350,570,150,20);
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        this.width = 150;
        this.height = 20;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
    }

         }