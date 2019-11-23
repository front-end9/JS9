// Реализовать класс PrintMaсhine, которой состоит из:
class PrintMaсhine {
    constructor(_options) {
        // размера шрифта;
        this.fontSize = _options.fontSize;
        // цвета шрифта;
        this.fontColor = _options.fontColor;
        // семейства шрифта;
        this.fontFamily = _options.fontFamily;
    }
    // метода print(), который принимает текст и печатает его соответствующим шрифтом с помощью document.write().
    print(_text) {
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

// Создать объект такого класса и продемонстрировать работу метода.
let print = new PrintMaсhine({
    fontSize: 48,
    fontColor: "#000",
    fontFamily: "Roboto"
});

print.print('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, sint.');