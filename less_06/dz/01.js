// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

let shopList = [{
        name: "Banana",
        count: 2,
        bought: true
    },
    {
        name: "Хлеб",
        count: 1,
        bought: false
    },
    {
        name: "Chips",
        count: 1,
        bought: true
    },
    {
        name: "Beeeeeer",
        count: 6,
        bought: false
    },
    {
        name: "Smoke",
        count: 2,
        bought: false
    }
]

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

function shopListPrint(_list) {
    _list.sort(function (a, b) {
        if (a.bought < b.bought) {
            return -1;
        }
        if (a.bought > b.bought) {
            return 1;
        }
        return 0;
    });
    let _buf = '<ul>';
    for (let i = 0; i < _list.length; i++) {
        const object = _list[i];
        _buf += '<li><ul>';
        for (const key in object) {
            const value = object[key];
            if (value == false) {
                _buf += `<li style="color:red">${key}:\t${value}</li>`;
            } else {
                _buf += `<li style="color:green">${key}:\t${value}</li>`;
            }
        }
        _buf += `<li>*****</li></ul></li>`;
    }
    _buf += '</ul>';
    document.getElementById("root").innerHTML = `<pre>${_buf}</pre>`;
}

// shopListPrint(shopList);

// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.

function shopListAdd(_list) {
    let _name = prompt("Какой продукт вы хотите добавить?");
    let _added = false;
    for (let i = 0; i < _list.length; i++) {
        if (_list[i].name.toLowerCase() == _name.toLowerCase()) {
            _list[i].count++;
            _added = true;
        }
    }
    if (!_added) {
        let _count = +prompt('Сколько?');
        let _obj = {
            name: _name,
            count: _count ? _count : 1,
            bought: false
        };
        _list.push(_obj);
    }
    shopListPrint(_list);
    return _list;
}

// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

function shopListBuy(_list) {
    let _product = prompt("Что купил?");
    for (let i = 0; i < _list.length; i++) {
        if (_list[i].name.toLowerCase() == _product.toLowerCase()) {
            _list[i].bought = true;
        }
    }
    shopListPrint(_list);
}