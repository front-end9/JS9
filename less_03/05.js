// Посчитать факториал введенного пользователем числа.
let number = +prompt("Введите число");
let result = 1;

while (number >= 1) {
    result *= number--;
}
document.write(result);