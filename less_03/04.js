// Запросить 2 числа и найти все общие делители.

let firstNumber = +prompt(`Укажите первое число`, ``);
let secondNumber = +prompt(`Укажите второе число`, ``);

let buffer = ``;

let max;

if (firstNumber > secondNumber) {
    max = firstNumber;
} else {
    max = secondNumber;
}

let i = 1;

while (i <= max) {
    if (firstNumber % i) {
        i++;
        continue;
    } else {
        if (secondNumber % i) {
            i++;
            continue;
        } else {
            buffer += `${i} `;
        }
    }
    i++;
}
document.write(buffer);