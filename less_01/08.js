// Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).

let num, resultOne, resultTwo, resultThree;

num = prompt("enter num");

resultOne = (num % 100) % 10;
resultTwo = ((num % 100) - resultOne) / 10;

console.log(resultTwo);