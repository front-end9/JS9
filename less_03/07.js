// Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.

let number = 1000;
let i = 0;

do {
    number /= 2;
    i++;
} while (number > 50);

alert(number + ' ' + i);