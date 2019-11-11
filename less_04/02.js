// Написать функцию, которая возводит переданное число в указанную степень.

function Power(_number, _exponent) {
    return (_number ** _exponent);
}

let result = Power(prompt("enter number"), prompt("enter exponent"));

alert(result);

function sayHello() {
    alert("Hello, stranger!");
}