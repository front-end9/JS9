// Создать массив фруктов и отсортировать его по алфавиту. Написать следующие функции. 

let fruits = [{
    "genus": "Malus",
    "name": "Apple",
    "id": 6,
    "family": "Rosaceae",
    "order": "Rosales",
    "nutritions": {
        "carbohydrates": 11.4,
        "protein": 0.3,
        "fat": 0.4,
        "calories": 52,
        "sugar": 10.3
    }
}, {
    "genus": "Musa",
    "name": "Banana",
    "id": 1,
    "family": "Musaceae",
    "order": "Zingiberales",
    "nutritions": {
        "carbohydrates": 22,
        "protein": 1,
        "fat": 0.2,
        "calories": 96,
        "sugar": 17.2
    }
}, {
    "genus": "Prunus",
    "name": "Cherry",
    "id": 9,
    "family": "Rosaceae",
    "order": "None",
    "nutritions": {
        "carbohydrates": 12,
        "protein": 1,
        "fat": 0.3,
        "calories": 50,
        "sugar": 8
    }
}, {
    "genus": "Citrus",
    "name": "Lemon",
    "id": 26,
    "family": "Rutaceae",
    "order": "Sapindales",
    "nutritions": {
        "carbohydrates": 9,
        "protein": 1.1,
        "fat": 0.3,
        "calories": 29,
        "sugar": 2.5
    }
}, {
    "genus": "Mangifera",
    "name": "Mango",
    "id": 27,
    "family": "Anacardiaceae",
    "order": "Sapindales",
    "nutritions": {
        "carbohydrates": 15,
        "protein": 0.82,
        "fat": 0.38,
        "calories": 60,
        "sugar": 13.7
    }
}, {
    "genus": "Citrus",
    "name": "Orange",
    "id": 2,
    "family": "Rutaceae",
    "order": "Sapindales",
    "nutritions": {
        "carbohydrates": 8.3,
        "protein": 1,
        "fat": 0.2,
        "calories": 43,
        "sugar": 8.2
    }
}, {
    "genus": "Pyrus",
    "name": "Pear",
    "id": 4,
    "family": "Rosaceae",
    "order": "Rosales",
    "nutritions": {
        "carbohydrates": 15,
        "protein": 0.4,
        "fat": 0.1,
        "calories": 57,
        "sugar": 10
    }
}, {
    "genus": "Ananas",
    "name": "Pineapple",
    "id": 10,
    "family": "Bromeliaceae",
    "order": "Poales",
    "nutritions": {
        "carbohydrates": 13.12,
        "protein": 0.54,
        "fat": 0.12,
        "calories": 50,
        "sugar": 9.85
    }
}, {
    "genus": "Rubus",
    "name": "Raspberry",
    "id": 23,
    "family": "Rosaceae",
    "order": "Rosales",
    "nutritions": {
        "carbohydrates": 12,
        "protein": 1.2,
        "fat": 0.7,
        "calories": 53,
        "sugar": 4.4
    }
}, {
    "genus": "Fragaria",
    "name": "Strawberry",
    "id": 3,
    "family": "Rosaceae",
    "order": "Rosales",
    "nutritions": {
        "carbohydrates": 5.5,
        "protein": 0.8,
        "fat": 0.4,
        "calories": 29,
        "sugar": 5.4
    }
}, {
    "genus": "Solanum",
    "name": "Tomato",
    "id": 5,
    "family": "Solanaceae",
    "order": "Solanales",
    "nutritions": {
        "carbohydrates": 3.9,
        "protein": 0.9,
        "fat": 0.2,
        "calories": 74,
        "sugar": 2.6
    }
}, {
    "genus": "Citrullus",
    "name": "Watermelon",
    "id": 25,
    "family": "Cucurbitaceae",
    "order": "Cucurbitales",
    "nutritions": {
        "carbohydrates": 8,
        "protein": 0.6,
        "fat": 0.2,
        "calories": 30,
        "sugar": 6
    }
}];

fruits.sort(function (a, b) {
    if (a.name < b.name) {
        return 1;
    }
    if (a.name > b.name) {
        return -1;
    }
    // a должно быть равным b
    return 0;
});

// console.log(fruits);

// Вывод на экран с помощью document.write() в виде списка (с помощью тегов ul и li). 

// let buf = '<ul>';

// for (let i = 0; i < fruits.length; i++) {
//     buf += `<li>${fruits[i].name}</li>`;
// }
// buf += '</ul>';

// let buf2 = '<ol>';

// for (const iterator of fruits) {
//     buf2 += `<li>${iterator.name}<ul>`;
//     for (const key in iterator) {
//         if (iterator.hasOwnProperty(key)) {
//             if (typeof iterator[key] == 'object') {
//                 buf2 += `<li><b>${key}</b><ul>`;
//                 for (const iteratorChild in iterator[key]) {
//                     if (iterator[key].hasOwnProperty(iteratorChild)) {
//                         buf2 += `<li><b>${iteratorChild}</b>: ${iterator[key][iteratorChild]}</li>`;
//                     }
//                 }
//                 buf2 += '</li></ul>';
//             } else {
//                 buf2 += `<li><b>${key}</b>: ${iterator[key]}</li>`;
//             }
//         }
//     }
//     buf2 += '</ul></li>';
// }

// buf2 += '</ol>';

// document.write(buf2);

function printFruits(_fruits) {
    let _buf = '<ul>';
    for (const key in _fruits) {
        if (typeof _fruits[key] == 'object') {
            _buf += `<li>${key.toUpperCase()}: ${printFruits(_fruits[key])}</li>`;
        } else {
            _buf += `<li>${key}: ${_fruits[key]}</li>`;
        }
    }
    return _buf + '</ul>';
}

document.write(`${printFruits(fruits)}`);

// Поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс найденного элемента или -1, если не найден. Поиск должен быть не регистрозависимым.

function searchFruit(_fruits) {
    let _name = prompt("Имя фрукта");
    for (let i = 0; i < _fruits.length; i++) {
        if (_fruits[i].name.toLowerCase() == _name.toLowerCase()) {
            return i;
        }
    }
    return -1;
}

alert(searchFruit(fruits));