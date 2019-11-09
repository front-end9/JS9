// Пользователь ввел число, а на экран вывелись все числа от введенного до 0.

let number = +prompt("Введите нужное число");
let str = "";
while (number >= 0) {
    str += `${number--} `;
}

document.write(str);