// Вывести # столько раз, сколько указал пользователь.
let heg = +prompt("Количество выводов");
let buf = '';
while (heg > 0) {
    heg--;
    buf += "#";
}
document.write(buf);