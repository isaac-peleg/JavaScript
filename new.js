// Constructor
function Circle(x, y, radius, color) {  
    this.radius = radius;
    this.color = color;
    this.draw = function () { return `Draw location=[${x},${y}] radius=${radius} color=${color}`;}
    this.area = function () { return Math.PI * radius * 2;}
    this.array = function () { return [1, 2, 3, 4, 5];}
}

circle1 = new Circle (4, 5, 2, 'black');
console.log (circle1.draw ());
console.log ("Circle area: ", circle1.area());

circle2 = new Circle (6, 7, 3, 'white');
console.log (circle2.draw ());
console.log ("Circle area: ", circle2.area());
console.log (circle2.array());