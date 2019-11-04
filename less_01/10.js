// Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.

const sellary = 250,
    percent = 0.1;

let sold = +prompt("Enter items sold");

alert(sold * percent + sellary + "$");