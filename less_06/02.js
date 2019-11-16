// Создать еще один массив из 5 случайных чисел и написать следующие функции

function getRndInteger(_min, _max) {
    return Math.floor(Math.random() * (_max - _min + 1)) + _min;
}

let arr1 = [],
    arr2 = [];

for (let i = 0; i < 5; i++) {
    arr1[i] = getRndInteger(0, 10);
}

for (let i = 0; i < 5; i++) {
    arr2[i] = getRndInteger(0, 10);
}

function arrayPrint(_arr) {
    let _buf = '';
    for (let i = 0; i < _arr.length; i++) {
        _buf += `${i + 1}:\t${_arr[i]}\n`;
    }
    document.write(`<pre>${_buf}</pre>`);
}

arrayPrint(arr1);
arrayPrint(arr2);

// Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.

function arrayPlus(_arr1, _arr2) {
    let _arrTemp = [], // временный массив для слияния двух других
        _inArray = false; // наличие элемента во временном массиве
    for (let i = 0; i < _arr1.length; i++) { // проход по массиву 1
        for (let j = 0; j < _arrTemp.length; j++) { // проход по временному массиву
            if (_arrTemp[j] == _arr1[i]) { // проверка на наличие елементов по индексам
                _inArray = true; // если елемент из первого массива присутствует в новом массиве меняем значение
            }
        }
        if (_inArray == false) { // проверяем повторился дли елемент в массиве
            _arrTemp.push(_arr1[i]); // если елемент не повторился, мы его добавляем во временный массив
        }
        _inArray = false; // считаем что новый елемент не повторился
    }
    for (let i = 0; i < _arr2.length; i++) {
        for (let j = 0; j < _arrTemp.length; j++) {
            if (_arrTemp[j] == _arr2[i]) {
                _inArray = true;
            }
        }
        if (_inArray == false) {
            _arrTemp.push(_arr2[i]);
        }
        _inArray = false;
    }
    return _arrTemp;
}

arrayPrint(arrayPlus(arr1, arr2));

// Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.



// Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве. 