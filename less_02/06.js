// Запросить у пользователя номер месяца и вывести на экран его название.

let month = prompt("Введите номер месяца")

switch (month) {
    case 1:
        alert("Январь");
        break;
    case "2": // if (x === "value")
        alert("Февраль");
        break;
    default:
        alert("Вы что с марса?")
        break;
}