// Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.

let number = +prompt('Введите число');
let buf = "";
for (let i = 1; i <= 100; i++) {
    if (i % number) {
        continue;
    } else {
        buf += i + ' ';
    }

}
alert(buf);