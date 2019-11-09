// Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу.

let num = prompt("Введите число которое хотите проверить");

let flag = true;
let prostoe = 0;

for (let i = 1; i <= num; i++) {
    if (num % i) {
        flag = false;
    }
    if (flag == true) {
        prostoe++;
    }
    flag = true;
}

if (prostoe == 2) {
    alert("Введенное число простое");
} else {
    alert("Число не простое");
}