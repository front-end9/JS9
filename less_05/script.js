/*
Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена).
Функция принимает объект-прямоугольник и возвращает его ширину. 
Функция принимает объект-прямоугольник и возвращает его высоту.
Функция принимает объект-прямоугольник и возвращает его площадь.
Функция принимает объект-прямоугольник и возвращает его периметр. 
Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину. 
Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить высоту.
Функция изменения ширины и высоты прямоугольника. Она принимает объект-прямоугольник и два значения – для изменения ширины и высоты. 
Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
Функция смещения прямоугольника и по оси X и по  оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.
Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и координаты точки.
*/

let rectangle = {
    leftX: 15,
    leftY: 0,
    rightX: 50,
    rightY: 20
}

// let rectangle2 = {};

// for (const key in rectangle) {
//     if (rectangle.hasOwnProperty(key)) {
//         rectangle2[key] = rectangle[key];
//     }
// }

// rectangle2.rightX = 500;

function rectangleInfo(_rectangle) {
    let _info = `Coordinates of rectangle
leftX = ${_rectangle.leftX},
leftY = ${_rectangle.leftY},
rightX = ${_rectangle.rightX},
rightY = ${_rectangle.rightY}`;
    alert(_info);
}

function rectangleWidth(_rectangle) {
    console.log("rectangle width = " + (_rectangle.rightX - _rectangle.leftX) + 'px');
    return _rectangle.rightX - _rectangle.leftX;
}

function rectangleHeight(_rectangle) {
    console.log("rectangle Height = " + (_rectangle.rightY - _rectangle.leftY) + 'px');
    return _rectangle.rightY - _rectangle.leftY;
}

function rectangleArea(_rectangle) {
    console.log("Rectangle Area = " + rectangleWidth(_rectangle) * rectangleHeight(_rectangle) + ' квадратных px');
    return rectangleWidth(_rectangle) * rectangleHeight(_rectangle);
}

function rectanglePerimeter(_rectangle) {
    console.log("Rectangle Perimeter = " + (rectangleWidth(_rectangle) * 2 + rectangleHeight(_rectangle) * 2) + ' px');
    return (rectangleWidth(_rectangle) * 2 + rectangleHeight(_rectangle) * 2);
}

function rectangleChangeWidth(_rectangle) {
    let _width = +prompt("enter new width");
    _rectangle.rightX += _width;
    Draw("rectangle", _rectangle);
}

function rectangleChangeHeight(_rectangle) {
    let _height = +prompt("enter new height");
    _rectangle.rightY += _height;
    Draw("rectangle", _rectangle);
}

function rectangleChangeDimensions(_rectangle) {
    rectangleChangeWidth(_rectangle);
    rectangleChangeHeight(_rectangle);
}

function rectangleMoveX(_rectangle) {
    let _x = +prompt("enter left offset");
    _rectangle.leftX += _x;
    _rectangle.rightX += _x;
    Draw("rectangle", rectangle);
}

function rectangleMoveY(_rectangle) {
    let _Y = +prompt("enter top offset");
    _rectangle.leftY += _Y;
    _rectangle.rightY += _Y;
    Draw("rectangle", rectangle);
}

function rectangleMove(_rectangle) {
    rectangleMoveX(_rectangle);
    rectangleMoveY(_rectangle);
    Draw("rectangle", rectangle);
}

function isRectanglePoint(_rectangle) {
    let _x = prompt("enter x coordinate");
    let _y = prompt("enter y coordinate");
    if ((_x >= _rectangle.leftX) && (_x <= _rectangle.rightX) && (_y >= _rectangle.leftY) && (_y <= _rectangle.rightY)) {
        alert("point is ok");
    } else {
        alert("point is !ok");
    }
}

function Draw(_id, _rectangle) {
    let elRectangle = document.getElementById(_id);
    elRectangle.style.top = _rectangle.leftY + 'px';
    elRectangle.style.left = _rectangle.leftX + 'px';
    elRectangle.style.width = _rectangle.rightX - _rectangle.leftX + 'px';
    elRectangle.style.height = _rectangle.rightY - _rectangle.leftY + 'px';
}
Draw("rectangle", rectangle);