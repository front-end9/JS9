// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним.

let academy = [{
    name: "Front-end",
    count: 12,
    fakl: "basic"
}, {
    name: "Back-end",
    count: 5,
    fakl: "basic"
}, {
    name: "React",
    count: 8,
    fakl: "advanced"
}, {
    name: "Python",
    count: 3,
    fakl: "advanced"
}]

// Вывод на экран всех аудиторий.

function Print(_list) {
    let _buf = '<ul>';
    for (const key in _list) {
        if (typeof _list[key] == 'object') {
            _buf += `<li>${key.toUpperCase()}: ${Print(_list[key])}</li>`;
        } else {
            _buf += `<li>${key}: ${_list[key]}</li>`;
        }
    }
    return _buf + '</ul>';
}

// Вывод на экран аудиторий для указанного факультета.

function PrintPlus(_list) {
    let _buf = '<ul>',
        _fakl = prompt("Факультет?");
    for (let i = 0; i < _list.length; i++) {
        if (_list[i].fakl == _fakl) {
            _buf += `<li>
            name:\t${_list[i].name}<br>
            count:\t${_list[i].count}<br>
            fakl:\t${_list[i].fakl}
            </li>`;
        }
    }
    _buf += '</ul>';
    return _buf;
}

// document.write(`${PrintPlus(academy)}`);

// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета.

// Функция сортировки аудиторий по количеству мест.

academy.sort(function (a, b) {
    if (a.count < b.count) {
        return -1;
    }
    if (a.count > b.count) {
        return 1;
    }
    // a должно быть равным b
    return 0;
});

// Функция сортировки аудиторий по названию (по алфавиту).

// academy.sort(function (a, b) {
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name > b.name) {
//         return 1;
//     }
//     // a должно быть равным b
//     return 0;
// });

document.write(`${Print(academy)}`);