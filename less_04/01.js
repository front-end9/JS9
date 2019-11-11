// Написать функцию, которая принимает 2 числа и возвращает меньшее из них.

let numOne = prompt("enter number one"),
    numTwo = prompt("enter number two");

let result = findMin(numOne, numTwo);

function findMin(_numOne, _numTwo) {
    let result = _numOne > _numTwo ? _numTwo : _numOne;
    return result;
}

alert(result);

// ;(function () {

// })();