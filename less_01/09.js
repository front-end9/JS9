// Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).

let num = prompt("num?");

let resultOne = (((num % 10000) % 1000) % 100) % 10;
let result = resultOne * 10000 + ((num - resultOne) / 10);

console.log(result);