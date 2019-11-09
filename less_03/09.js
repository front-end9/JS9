// Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает минимальное и максимальное значения диапазона.

let firstNumber = +prompt("Введите первое число из диапазона");
let secondNumber = +prompt("Введите второе число из диапазона");

let max;
let minNumber;
let buf = ``;

if (firstNumber > secondNumber) {
    max = firstNumber;
    minNumber = secondNumber;
} else {
    max = secondNumber;
    minNumber = firstNumber;
}

if (max - minNumber < 3) {
    alert("Сорян бро");
} else {
    for (let i = minNumber + 3; i <= max; i += 4) {
        buf += i + " ";
    }
    alert(buf);
}