// Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.

let result;

do {
    result = +prompt("Введите правильный ответ");
} while (result != 6);
alert("Все правильно!");