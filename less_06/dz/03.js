// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let styles = [{
    color: "#0f0",
    "font-size": "24px",
    "text-decoration": "underline"
}, {
    "font-size": "16px",
    color: "#0f0",
    "text-decoration": "overline"
}, {
    "font-size": "16px",
    color: "#0f0",
    "text-decoration": "none"
}];

let paragraphs = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, laborum.",
    "Deleniti natus voluptas vel exercitationem nisi sequi voluptatum ipsum impedit?",
    "Maiores sapiente perspiciatis in corrupti magni suscipit molestiae a! Soluta."
];

function print(_list, _p) {
    let _buf = '';
    for (let i = 0; i < _p.length; i++) {
        let _style = '';
        for (const property in _list[i]) {
            const value = _list[i][property];
            _style += `${property}: ${value};`;
        }
        _buf += `
        <p style="
            ${_style}
        ">
            ${_p[i]}
        </p>
        `;
    }
    document.write(_buf);
}

print(styles, paragraphs);