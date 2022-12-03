const background = new Image();
background.src = './images/background.png'

export default class Background {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx){
        this.ctx = ctx;
        this.CANVAS_WIDTH = CANVAS_WIDTH;
        this.CANVAS_HEIGHT = CANVAS_HEIGHT;
        this.x = 0
        this.y = 0
        this.scroll = 2
    }

    animateBackground(){
        this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.ctx.fillRect(0, 0, 800, 600);
        this.ctx.drawImage(background, this.x, this.y, this.CANVAS_WIDTH, this.CANVAS_HEIGHT)
        this.ctx.drawImage(background, this.x - this.CANVAS_WIDTH + 2, this.y, this.CANVAS_WIDTH, this.CANVAS_HEIGHT)
    }

    updatePosition(){
        this.x += this.scroll;
        if(this.x > this.CANVAS_WIDTH) this.x = 0;
    }
}