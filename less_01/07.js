// Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.

let hours, minutes;

hours = +prompt("Enter hours");
minutes = +prompt("Enter minutes");

let date = new Date;
date.setHours(hours);
date.setMinutes(minutes);

console.log(date);

let endDate = new Date;
endDate.setHours(23);
endDate.setMinutes(59);

console.log(new Date(endDate - date));

let resultHours, resultMinutes;