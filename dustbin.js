class Dustbin{

    constructor(x,y,width,height,options){
        var options={
            isStatic: true
        }
    this.body= Bodies.rectangle(x,y,width,height,options);
    this.height= height;
    this.width=width;
    World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
    }
}