// Запросить координаты точки (x, y) и определить номер четверти, в которую попала эта точка. Необходимо учесть случаи попадания точки на оси X или Y или в начало координат.

let x, y;

if ((x == y) == 0) {
    alert("0,0");
}
if (x == 0) {
    alert("Точка лежит на оси X");
}
if ((x > 0) && (y > 0)) {
    alert('Точка находиться в первой четверти');
}