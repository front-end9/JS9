class SimpleSlider {
    constructor(_id, _options) {
        // содержимое нашего слайдера получаем по id
        this.container = document.getElementById(_id);
        // свойство для хранения слайдов
        this.slides = this.container.querySelectorAll("img");
        // опция автовоспроизведения
        this.autoplay = _options.autoplay ? _options.autoplay : false;
        // опция скорости воскпроизведения
        this.autoplaySpeed = _options.autoplaySpeed ? _options.autoplaySpeed : 500;
        // опция добавления навигации
        this.navigation = _options.navigation ? _options.navigation : false;
        // опция для зацикливания
        this.infinite = _options.infinite ? _options.infinite : false;
        // переменная для хранения текущего слайда
        this.active = _options.active ? _options.active - 1 : 0;

        // функция для инициализации и запуска слайдера
        this.Init();
    }

    Init() {
        this.SetActiveDefault();

        if (this.navigation) {
            this.btnNext = document.createElement("button");
            this.btnNext.innerText = "Next Slide";
            this.btnPrev = document.createElement("button");
            this.btnPrev.innerText = "Prev Slide";

            this.btnNext.addEventListener("click", () => this.Render(1));
            this.btnPrev.addEventListener("click", () => this.Render(-1));

            this.container.appendChild(this.btnPrev);
            this.container.appendChild(this.btnNext);
        }

        if (this.autoplay) {
            setInterval(() => {
                this.Render(1);
            }, this.autoplaySpeed);

            // clearInterval()
        }
    }
    // метод который изменяет текущий активный слайд
    MoveActiveSlide(_index) {

        this.active += _index;

        // если хотим зациклить слайдер, если в значении поля infinite лежит true
        if (this.infinite) {
            // если текущий активный слайд превышает максимальный индекс слайдов (если слайдов всего 4 то и индекс не может быть равен 4)
            if (this.active >= this.slides.length) {
                // если дошли до последнего слайда и хотим пойти еще дальше, то возвращаемся на первый слайд
                this.active = 0;
            }
            // если мы ушли в -1 слайд, то возвращяемся на последний
            else if (this.active < 0) {
                // последний слайд это количество слайдов -1
                this.active = this.slides.length - 1;
            }
        }
        else {
            // еслин е зацикливаем
            if (this.active >= this.slides.length) {
                // остаемся на последнем
                this.active = this.slides.length - 1;
            }
            else if (this.active < 0) {
                // остаемся на первом
                this.active = 0;
            }
        }

    }
    // метод предназначеный для перерисовки слайдера (изменения отображения)
    Render(_index) {
        // получаем текущий слайд и прячем его
        this.slides[this.active].style.display = "none";

        // изменяем текущий активный слайд
        this.MoveActiveSlide(_index);

        // показываем новый активный слайд
        this.slides[this.active].style.display = "block";
    }
    // метод для установки активного слайда после инициализации
    SetActiveDefault() {
        for (let i = 0; i < this.slides.length; i++) {
            const element = this.slides[i];
            element.style.display = "none";
        }

        this.slides[this.active].style.display = "block";
    }
}

let slider = new SimpleSlider("slider", {
    autoplay: false,
    autoplaySpeed: 1000,
    navigation: true,
    active: 1,
    infinite: true
});

document.getElementById("stopInfinite").addEventListener("click", () => slider.infinite = false);