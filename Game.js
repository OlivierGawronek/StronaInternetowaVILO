class Game{
    constructor(conf) {
        this.element = conf.element;
        this.canvas = this.element.querySelector(".KontGry");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        const image = new Image();
        image.onload = () => {this.ctx.drawImage(image, 4, 4)};
        image.src = "images/mapatest.png";

        const mainChar = new Image();
        mainChar.onload = () => {this.ctx.drawImage(mainChar, 0, 0)};
        mainChar.src = "images/boh1.png";


    }

}