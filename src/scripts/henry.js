const henry = new Image();
henry.src = './images/henrysprite.png'

let henryWidth = 188;
let henryHeight = 55;
let frameX = 1;
let gameFrame = 0;

export default class Henry {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx){
        this.name = "Henry";
        this.ctx = ctx;
        this.CANVAS_WIDTH = CANVAS_WIDTH;
        this.CANVAS_HEIGHT = CANVAS_HEIGHT;
        this.width = 200;
        this.height = 200;
        this.x = 0;
        this.y =0;
        this.speed = 0;
        this.animateHenry();
    }

    animateHenry() {
        this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.ctx.fillRect(0, 0, 800, 600);
        this.ctx.drawImage(henry, (frameX * henryWidth), (henryHeight), (henryWidth), (henryHeight), 600, 250, henryWidth, henryHeight)

        if (gameFrame % 20 === 0) {
            if (frameX < 4) {
                frameX++
            } if (frameX === 4) {
                frameX = 0
            }
        }
        gameFrame++
        requestAnimationFrame(this.animateHenry.bind(this));
    }

    moveHorizontally(){

    }

    move
}