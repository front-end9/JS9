// Создать html-страницу с кнопкой Like, при нажатии на которую увеличивается счетчик лайков.

let btn = document.createElement("button");
document.body.appendChild(btn);

let btn2 = document.createElement("button");
document.body.appendChild(btn2);


btn.addEventListener("click", function () {
    btnOne(event);
});
btn2.addEventListener("click", () => {
    btnTwo(event);
});


let Like = function () {
    let like = 0;
    return function (event) {
        like++;
        event.target.innerText = like;
    };
};

let btnOne = Like();
let btnTwo = Like();