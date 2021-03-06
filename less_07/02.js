// Реализовать класс, описывающий новость (заголовок, текст, массив тегов, дата публикации). В классе необходимо реализовать один метод print, который выводит всю информацию через document.Print() Если с даты публикации прошло менее дня, то выводится «сегодня», если с даты публикации прошло менее недели, то выводится «N дней назад», в остальных случаях, полная дата в формате «дд.мм.гггг».

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
        document.write(`
            <article>
                ${this.title}
                ${this.text}
                ${this.tags}
                ${this.date}
            </article>
        `);
    }
}

let a = new Article({
    title: "New article",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, sint.",
    tags: [{
        text: "facebook",
        link: "facebook.com"
    },
    {
        text: "google",
        link: "google.com"
    }, {
        text: "instagram",
        link: "instagram.com"
    }
    ],
    date: {
        day: 17,
        month: 11,
        year: 2019
    }
});

a.Print();