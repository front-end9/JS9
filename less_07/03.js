// Реализовать класс, описывающий новостную ленту. Класс должен содержать:
// Продемонстрировать работу написанных методов.

class Tag {
    constructor(_options) {
        this.fontSize = _options.fontSize;
        this.fontColor = _options.fontColor;
        this.fontFamily = _options.fontFamily;
        this.tagName = _options.tagName;
        this.className = _options.className ? _options.className : '';
    }
    Print(_text) {
        return `
        <${this.tagName} style="
            font-size: ${this.fontSize}px;
            font-family: ${this.fontFamily};
            color: ${this.fontColor};"
            class="${this.className}"
        >
            ${_text}
        </${this.tagName}>
        `;
    }
}

class Link extends Tag {
    constructor(_options) {
        super(_options);
        this.href = _options.href;
    }
    Print(_text) {
        return `
        <${this.tagName}
            target="_blank"
            href="${this.href}"
            style="
                font-size: ${this.fontSize}px;
                font-family: ${this.fontFamily};
                color: ${this.fontColor};
        ">
            ${_text}
        </${this.tagName}>
        `;
    }
}

class Article {
    constructor(_options) {
        this._title = _options.title;
        this._text = _options.text;
        this._tags = _options.tags;
        this._date = _options.date ? _options.date : new Date();
        this._date.month--;
    }
    get title() {
        return new Tag({
            fontSize: 50,
            fontColor: "black",
            fontFamily: "Arial",
            tagName: "h1",
            className: "VikaDostatochnoPlease"
        }).Print(this._title);
    }
    get text() {
        return new Tag({
            fontSize: 18,
            fontColor: "darkgrey",
            fontFamily: "Times new roman",
            tagName: "p"
        }).Print(this._text);
    }
    get tags() {
        let buf = "<ul>";
        for (let i = 0; i < this._tags.length; i++) {
            buf += "<li>";
            const element = this._tags[i];
            buf += new Link({
                fontSize: 22,
                fontColor: "blue",
                fontFamily: "Times new roman",
                tagName: "a",
                href: `https://${element.link}`
            }).Print(element.text);
            buf += "</li>";
        }
        return buf + "</ul>";
    }
    get date() {
        let d = this._date;
        const timeInMs = Date.now();
        let dateNow = new Date(timeInMs);
        let dateArticle = new Date(d.year, d.month, d.day);
        let daysAfterPost = new Date(dateNow - dateArticle) / 1000 / 60 / 60 / 24;
        let dateText;
        if (daysAfterPost < 1) {
            dateText = "Today";
        }
        else if (daysAfterPost < 7 && daysAfterPost > 1) {
            dateText = `${Math.trunc(daysAfterPost)} days ago`;
        }
        else {
            dateText = `${d.day}.${d.month + 1}.${d.year}`;
        }
        return new Tag({
            tagName: 'time',
            fontSize: 12,
            fontColor: "grey",
            fontFamily: "Times new roman"
        }).Print(dateText);
    }
    Print() {
        return (`
            <article>
                ${this.title}
                ${this.text}
                ${this.tags}
                ${this.date}
            </article>
        `);
    }
}

class News {
    // массив новостей;
    constructor(_options) {
        this._articles = [];
        for (let i = 0; i < _options.length; i++) {
            const element = _options[i];
            this._articles.push(new Article(element));
        }
    }
    // get-свойство, которое возвращает количество новостей;
    get length() {
        return this._articles.length;
    }
    // метод для вывода на экран всех новостей;
    Print(_articlesArray = []) {
        let articlesToPrint = [];
        if (_articlesArray.length > 0) {
            articlesToPrint = _articlesArray;
        }
        else {
            articlesToPrint = this._articles;
        }
        let buf = '';
        for (let i = 0; i < articlesToPrint.length; i++) {
            const element = articlesToPrint[i];
            buf += element.Print();
        }
        document.write(buf);
    }
    // метод для добавления новости;
    AddArticle() {
        let _title = prompt("Введите заголовок новости");
        _title = _title ? _title : `New article ${this._articles.length + 1}`;

        let _text = prompt("Введите текст новости");
        _text = _text ? _text : "Lorem ipsum dolor sit amet" + this._articles.length + 1;

        let _date = prompt("Введите дату написания новости в формате дд:мм:гггг");
        _date = _date ? _date : "21.07.1990";

        let _tags = [];

        do {
            _tags.push({
                text: prompt("Введите тег"),
                link: "javascript:void(0)"
            });
        } while (confirm("Добавить еще тег?"));

        let _newArticle = {
            title: _title,
            text: _text,
            date: _date,
            tags: _tags
        };
        this._articles.push(new Article(_newArticle));
        this.Print();
    }
    // метод для сортировки новостей по дате (от последних новостей до старых);
    Sort() {
        this._articles.sort(function (a, b) {
            if (a._date.day > b._date.day) {
                return 1;
            }
            else if (a._date.day < b._date.day) {
                return -1;
            }
            else {
                return 0;
            }
        });
        this.Print();
    }
    // метод для поиска новостей по тегу (возвращает массив новостей, в которых указан переданный в метод тег).
    Search() {
        let searchingTag = prompt("Введите тег для поиска новостей");
        if (searchingTag === null) {
            alert("Nothing found!");
            this.Print();
        }
        else {
            searchingTag = searchingTag.toLowerCase();
            let bufArticles = [];
            let isSearchingTag = false;
            for (let i = 0; i < this._articles.length; i++) {
                const element = this._articles[i];
                for (let j = 0; j < element._tags.length; j++) {
                    const tag = element._tags[j].text;
                    if (tag.toLowerCase() == searchingTag) {
                        isSearchingTag = true;
                    }
                }
                if (isSearchingTag) {
                    bufArticles.push(element);
                    isSearchingTag = false;
                }
            }
            if (bufArticles.length > 0) {
                this.Print(bufArticles);
            }
            else {
                alert("Nothing found!");
                this.Print();
            }
        }
    }
    // метод для удаления новости;
    Delete() {
        let index = prompt("Введите номер новости для удаления");
        if (index === null) {
            alert("Ничего не было удалено");
            this.Print();
        }
        else {
            this._articles.splice(index, 1);
            this.Print(this._articles);
        }
    }
}

let news = new News([
    {
        title: "Премьер-министр Гончарук утверждает, что в Украине нет коррупции на высшем уровне",
        text: "Глава Кабинета министров Украины Алексей Гончарук заявил, что в Украине нет коррупции на высшем уровне.Об этом он написал на своей странице в Facebook.Гончарук сделал такое заявление по итогам участия в Инвестиционном саммите Европейского банка реконструкции и развития для стран-членов Восточного партнерства.",
        tags: [{
            text: "Зеленський",
            link: "facebook.com"
        },
        {
            text: "Трамп",
            link: "google.com"
        }, {
            text: "ukrainegate",
            link: "instagram.com"
        }
        ],
        date: {
            day: 22,
            month: 11,
            year: 2019
        }
    },
    {
        title: "МОРОЗИ ДО -12 ТА СИЛЬНИЙ ВІТЕР. ЯКОЮ БУДЕ ПОГОДА В УКРАЇНІ 23 ЛИСТОПАДА",
        text: "Сьогодні, 23 листопада, в Україні очікується переважно суха та холодна погода. На Сході країни температура буде найнижчою. Вночі та вранці морози до -12 градусів.",
        tags: [{
            text: "погода",
            link: "facebook.com"
        },
        {
            text: "синоптики",
            link: "google.com"
        }, {
            text: "прогноз погоди",
            link: "instagram.com"
        }, {
            text: "погода в україні",
            link: "instagram.com"
        }
        ],
        date: {
            day: 23,
            month: 11,
            year: 2019
        }
    },
    {
        title: "КОЛОМОЙСЬКИЙ ЗАЯВИВ, НІБИ ЙОМУ СКОРО ПОВЕРНУТЬ \"ПРИВАТБАНК\". ПРЕМ'ЄР ЦЕ ЗАПЕРЕЧИВ",
        text: "Бізнесмен Ігор Коломойський заявив у коментарі виданню The Kyiv Post, ніби йому невдовзі повернуть \"ПриватБанк\" із державної власності, який три роки тому націоналізували.",
        tags: [{
            text: "ПриватБанк",
            link: "facebook.com"
        },
        {
            text: "коломойський",
            link: "google.com"
        }, {
            text: "гончарук",
            link: "instagram.com"
        }
        ],
        date: {
            day: 22,
            month: 11,
            year: 2019
        }
    },
    {
        title: "КОЛОМОЙСЬКИЙ ЗАЯВИВ, НІБИ ЙОМУ СКОРО ПОВЕРНУТЬ \"ПРИВАТБАНК\". ПРЕМ'ЄР ЦЕ ЗАПЕРЕЧИВ",
        text: "Бізнесмен Ігор Коломойський заявив у коментарі виданню The Kyiv Post, ніби йому невдовзі повернуть \"ПриватБанк\" із державної власності, який три роки тому націоналізували.",
        tags: [{
            text: "кредит",
            link: "facebook.com"
        },
        {
            text: "дороги",
            link: "google.com"
        }, {
            text: "ремонт доріг",
            link: "instagram.com"
        }, {
            text: "єбрр",
            link: "instagram.com"
        }, {
            text: "гончарук",
            link: "instagram.com"
        }
        ],
        date: {
            day: 21,
            month: 11,
            year: 2019
        }
    }
]);

// news.Print();
news.Sort();
// news.AddArticle();
// news.Search();
// news.Delete();

// function toDataURL(url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//         var reader = new FileReader();
//         reader.onloadend = function () {
//             callback(reader.result);
//         }
//         reader.readAsDataURL(xhr.response);
//     };
//     xhr.open('GET', url);
//     xhr.responseType = 'blob';
//     xhr.send();
// }

// toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0', function (dataUrl) {
//     console.log('RESULT:', dataUrl);
// });