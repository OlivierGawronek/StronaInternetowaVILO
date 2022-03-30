class Game{
    constructor(conf) {
        this.element = conf.element;
        this.canvas = this.element.querySelector(".ContGry");
        this.ctx = this.canvas.getContent("2d")
    }
}