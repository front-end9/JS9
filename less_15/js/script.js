let root = document.createElement('div'); // создаем елемент
document.body.appendChild(root); // добавляем элемент

let clock = document.createElement('div');
clock.classList.add("clock");
document.body.appendChild(clock);

let arrowseconds = document.createElement('div');
arrowseconds.classList.add('arrowseconds');
clock.appendChild(arrowseconds);

let arrowmin = document.createElement('div');
arrowmin.classList.add('arrowmin');
clock.appendChild(arrowmin);

setInterval(() => {
    let date = new Date; // новая дата
    let time = date.toLocaleTimeString(); // получаем строку с временем
    root.innerText = `${time}`; // пишем
    let sec = date.getSeconds();
    let anglesec = sec * (360 / 60);
    let anglemin = sec * (360 / 360);
    arrowseconds.style.transform = `rotateZ(${anglesec}deg)`
    arrowmin.style.transform = `rotateZ(${anglemin}deg)`


}, 1000); // с интервалом
