class rope
{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = { bodyA :body1,
            bodyB : body2,
            stiffness : 1,
            length :400
                            }

         this.body = constraint.create(options)
         World.add(world, this.body)

        // this.offsetX=offsetX;
        // var options= { bodyA: body1, 
        // bodyB: body2,
        // pointB:{x:this.offsetX, y:0} } 
        // this.body = Constraint.create(options); 
        // World.add(world,this.body);
    }

    display()
    {
        var bobopos = this.body.bodyA.position;
        var staticopos = this.body.bodyB.position;
        stroke("white")
        line(bobopos.x,bobopos.y,staticopos.x,staticopos.y)
    }
}