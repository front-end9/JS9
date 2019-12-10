// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// Продемонстрировать работу свойств и методов. 

class Circle {
    constructor(a) {
        // поле, хранящее радиус окружности;
        this.r = a;
    }
    // get-свойство, возвращающее радиус окружности;
    get radius() {
        return this.r;
    }
    // set-свойство, устанавливающее радиус окружности;
    set radius(b) {
        this.r = b;
    }
    // set radiusFromLength(_length) {
    //     this.r = _length / (2 * Math.PI);
    // }
    // get-свойство, возвращающее диаметр окружности;
    get diameter() {
        return 2 * this.r;
    }
    set diameter(_d) {
        this.r = _d / 2;
    }
    // метод, вычисляющий площадь окружности;
    Area() {
        return Math.PI * Math.pow(this.r, 2);
    }
    // метод, вычисляющий длину окружности.
    Length() {
        return Math.PI * this.diameter;
    }
}

let c = new Circle(5);

// get-свойство, возвращающее радиус окружности;
let circleRadius = c.radius;
// set-свойство, устанавливающее радиус окружности;
c.radius = 7;
// get-свойство, возвращающее диаметр окружности;
let circleDiameter = c.diameter;
// метод, вычисляющий площадь окружности;
let circleArea = c.Area();
// метод, вычисляющий длину окружности.
let circleLength = c.Length();