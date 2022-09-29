class Circle
{
    constructor(radius)
    {
        this.radius = radius;
        this.pi = 3.14;
    }

     getArea = () =>
    {
        return this.pi * this.radius * this.radius;
        
    }
    getPerimeter = ()=>
    {
        return 2 * this.pi * this.radius;
        
    }
}

let circle1 = new Circle(5);
console.log(circle1.getArea());
console.log(circle1.getPerimeter())