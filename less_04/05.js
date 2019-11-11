// Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9.

function table(_number) {
    let buf = '';
    for (let i = 2; i < 10; i++) {
        buf += _number + " * " + i + " = " + (_number * i) + "\n";
    }
    document.write(`<pre>${buf}</pre>`);
}

table(prompt("Enter number"));