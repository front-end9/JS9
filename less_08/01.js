class Accordion {
    constructor(_params) {
        this.show = true;

        this.p = document.createElement('p');
        this.btn = document.createElement("button");

        this.p.innerText = "lorem ipsum";
        this.btn.innerText = "hide";

        this.btn.addEventListener("click", () => this.toogleP());

        let root = document.getElementById("root");
        root.appendChild(this.btn);
        root.appendChild(this.p);
    }
    toogleP() {
        // this.p.style.display = this.show ? "none" : "block";
        let o;
        o = this.show ? 9 : 0;
        let interval = setInterval(
            () => this.p.style.opacity = `0.${this.show ? o-- : o++}`,
            100);
        setTimeout(() => {
            clearInterval(interval);
            // this.p.style.display = this.show ? "none" : "block";
            this.show = !this.show;
        }, 1000);
        this.btn.innerText = this.show ? "show" : "hide";
    }
}

let a = new Accordion();