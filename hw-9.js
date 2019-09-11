/* a Shape constructor has a name property sides property number */
    function Shape(name,sides){
        this.name = name
        this.sides = sides
    }

/* a Rectangle is a shape height width */

 function Rectangle(height,width,name,sides) {
     this.height = height
     this.width = width
     Shape.call(name,sides)
 }

/*  on the Rectangle's prototype an area function a perimeter function make sure to connect the Rectangle and the Shape */

Rectangle.prototype = Object.create(Shape.prototype)

Rectangle.prototype.area = function () {
    var area = this.height * this.width
    console.log(area)
    //we can use return
}
Rectangle.prototype.perimeter = function () {
    var perimeter = (2*this.height)+(2*this.width)
    console.log(perimeter)
}

/* 3. a Square is a Rectangle but if the height and width are different then set the width to be the height. MyNOTES: we are creating a new prototype object Square*/

function Square(height,name,sides) {
    Rectangle.call(this,height,height,name,sides)
}

Square.prototype = Object.create(Rectangle.prototype)

var a = new Rectangle(100,200,name,4)
var b = new Square(100,name,4)

//testing the perimeter and area for a rectacngle
a.area()
a.perimeter()

b.area()
b.perimeter()
