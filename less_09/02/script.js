// Создать html-страницу с любым содержимым и запретить пользователю выделять текст и вызывать контекстное меню кликом правой кнопки.

window.addEventListener("contextmenu", function (event) {
    // console.log(event);
    event.preventDefault();
    // return false;
});

window.addEventListener("mousedown", function (event) {
    // console.log(event);
    event.preventDefault();
    // return false;
});

window.addEventListener("beforeunload", function (event) {
    console.log(event);
    confirm("Точно покинуть страницу?");
    return false;
});

// window.open("http://google.com", "_self");