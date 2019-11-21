// Реализовать класс PrintMaсhine, которой состоит из:
// размера шрифта;
// цвета шрифта;
// семейства шрифта;
// метода print(), который принимает текст и печатает его соответствующим шрифтом с помощью document.write().
// Создать объект такого класса и продемонстрировать работу метода.

class PrintMaсhine {
    constructor(_options) {
        this.fontSize = _options.fontSize;
        this.fontColor = _options.fontColor;
        this.fontFamily = _options.fontFamily;
    }
    write(_text) {
        document.write(`
        <p style="
            font-size: ${this.fontSize}px;
            font-family: ${this.fontFamily};
            color: ${this.fontColor};
        ">
            ${_text}
        </p>
        `);
    }
}

let print = new PrintMaсhine({
    fontSize: 48,
    fontColor: "#000",
    fontFamily: "Roboto"
});

print.write('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, sint.');