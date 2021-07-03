class ground{
    constructor(){
     var ground_options = {
        isStatic:false
       }
        
        this.body = Bodies.rectangle(250,770,400,20,ground_options);
        World.add(world,this.body);
    }
    display(){
        fill("#FC41A1 ");
        rectMode(CENTER);
       rect(this.body.position.x,this.body.position.y,600,20);
    }

}