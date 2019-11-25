let hr = document.getElementsByTagName("hr")[0];
let percent = 5;
hr.style.marginLeft = "0";
hr.style.transition = "ease 0.3s all";
hr.style.width = `${percent}%`;
function addProgress() {
    if (percent < 100) {
        percent += 5;
    }
    else {
        alert("Куда еще длинее ты хочешь, человек");
    }
    hr.style.width = `${percent}%`;
}
function minusProgress() {
    if (percent > 0) {
        percent -= 5;
    }
    else {
        alert("Куда еще меньше ты хочешь, человек");
    }
    hr.style.width = `${percent}%`;
}
function makeProgress() {
    percent = +prompt("Введите длинну");
    hr.style.width = `${percent}%`;
}