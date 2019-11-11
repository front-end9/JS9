// Написать функцию, которая проверяет, является ли переданное ей число простым.

function isSimple(_number) {
    let flag = true;
    let prostoe = 0;

    for (let i = 1; i <= _number; i++) {
        if (_number % i) {
            flag = false;
        }
        if (flag == true) {
            prostoe++;
        }
        flag = true;
    }
    if (prostoe == 2) {
        alert("Введенное число простое");
    } else {
        alert("Число не простое");
    }
}

let number = prompt("Enter number");

isSimple(number);