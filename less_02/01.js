// Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.

let number = prompt("Введите число для проверки");

if (typeof (+number) == "number") {
    // alert("Красава");

    if (number > 0) {
        alert("Ваше число больше 0");
    } else if (0 == number) {
        alert("Ваше число это 0");
    } else {
        alert("Ваше число меньше 0");
    }
}