 class bob
 {
     constructor(x,y,radius)
     {
       var  options = {
                       'restitution':0.8,
                       'density':1.0,
                       
                      }              

       this.body = Bodies.circle(x,y,radius,options)    
       this.bobDiameter =  this.radius ;
       World.add(world, this.body);                             
     }

     show()
     {
       var bobpos =  this.body.position ;
         push();
               //translate(bobpos.x, bobpos.y);
               ellipseMode(RADIUS);
               fill("red");
               ellipse(bobpos.x,bobpos.y,this.bobDiameter,this.bobDiameter);
         pop();
     }
 }