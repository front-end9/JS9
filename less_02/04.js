// Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.

let time = prompt("Введите время в формате 'часы,минуты,секунды'", '23,05,20');

let hours = time.slice(0, 2);

let minutes = time.slice(3, 5);

let seconds = time.slice(6);

if (hours > 24) {
    alert("Часывведены неверно");
}
if (minutes > 60) {
    alert("Минуты введены неверно");
}
if (seconds > 60) {
    alert("Секунды введены неверно");
}