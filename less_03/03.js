// Запросить число и степень. Возвести число в указанную степень и вывести результат.

let number = +prompt(`Укажите число которое необходимо возвести в степень`, ``);
let pow = +prompt(`Укажите степень`, ``);

let result = number;
if (pow != 0) {
    while (pow-- > 1) {
        result = result * number;
    }
} else {
    result = 1;
}

alert(result);