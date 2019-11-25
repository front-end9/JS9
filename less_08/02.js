// Создать html-страницу со вкладками. С левой стороны страницы отображается несколько вкладок, по которым можно переключаться. У каждой вкладки есть свое содержимое, но в один момент времени отображается содержимое только активной вкладки.

class Tabs {
    constructor(_nav, _content) {
        this.nav = document.querySelectorAll(_nav);
        this.content = document.querySelectorAll(_content);

        this.active = 0;

        if (this.nav.length == this.content.length) {
            for (let i = 0; i < this.nav.length; i++) {
                this.nav[i].addEventListener("click", () => this.GetActive());
            }
            this.ChangeActive();
        }
        else {
            console.error("tabs and content are not equal");
        }
    }
    ChangeActive() {
        for (let i = 0; i < this.content.length; i++) {
            this.content[i].style.display = "none";
            this.nav[i].classList.remove("active");
        }
        this.nav[this.active].classList.add("active");
        this.content[this.active].style.display = "block";
    }
    GetActive() {
        for (let i = 0; i < this.nav.length; i++) {
            const element = this.nav[i];
            if (element == event.target) {
                this.active = i;
            }
        }
        this.ChangeActive();
    }
}

let tabs = new Tabs("li", "div");