// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции.

let cheque = [{
        name: "Banana",
        count: 2,
        price: 48
    },
    {
        name: "Хлеб",
        count: 1,
        price: 10
    },
    {
        name: "Chips",
        count: 1,
        price: 85
    },
    {
        name: "Beeeeeer",
        count: 2,
        price: 28
    },
    {
        name: "Smoke",
        count: 2,
        price: 55
    }
];

// Распечатка чека на экран.

function chequePrint(_list) {
    let _buf = '';
    for (let i = 0; i < _list.length; i++) {
        const _product = _list[i];
        _buf += '\n';
        for (const key in _product) {
            _buf += `${key}:\t${_product[key]}\n`;
        }
        _buf += '*****\n';
    }
    document.write(`<pre>${_buf}</pre>`);
}

chequePrint(cheque);

// Подсчет общей суммы покупки.

function chequeSum(_list) {
    let _sum = 0;
    for (let i = 0; i < _list.length; i++) {
        _sum += _list[i].count * _list[i].price;
    }
    return _sum;
}

chequeSum(cheque);

// Получение самой дорогой покупки в чеке.

function chequeMax(_list) {
    let _max = _list[0];
    for (let i = 0; i < _list.length; i++) {
        if (_max.price * _max.count < _list[i].price * _list[i].count) {
            _max = _list[i];
        }
    }
    alert(_max.name);
}

chequeMax(cheque);

// Подсчет средней стоимости одного товара в чеке.

function chequeAverage(_list) {
    let _average = chequeSum(cheque) / _list.length;
    alert(_average);
}

chequeAverage(cheque);