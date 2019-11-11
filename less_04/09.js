// Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).

function evenOdd(_min, _max, _evenOdd = true) {
    let buf = '';
    for (let i = _min; i <= _max; i++) {
        let j = i < 0 ? -i : i;
        if (j % 2 != _evenOdd) {
            buf += i + ' ';
        }
    }
    alert(buf);
}

evenOdd(-30, 56, true);