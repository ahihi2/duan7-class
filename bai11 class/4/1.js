class Shape {
    constructor(name) {
        this.name = name;
    }
    caculateArea() {
        return 0;
    }
};
class Square extends Shape {
    constructor(name,side) {
        super(name);
        this.side = side;
    }
    caculateArea() {
        return Math.pow(this.side,2);
    };
};
class Rectangle extends Shape {
    constructor(name,width,height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    caculateArea() {
        return this.width * this.height;
    }
};
let s1 =  new Square("hv",3);
console.log(s1);
console.log(s1.caculateArea());
let s2 = new Rectangle("hcn",2,5);
console.log(s2);
console.log(s2.name);
console.log(s2.caculateArea());
let s4 = new Shape("btung");
console.log(s4.caculateArea());





