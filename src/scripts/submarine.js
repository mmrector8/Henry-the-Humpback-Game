import Obstacle from "./obstacles.js"

const sub = new Image();
sub.src = "./images/sub.png"

export default class Submarine extends Obstacle {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y) {
        super(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y)
        this.width = 240;
        this.height = 220;
        this.divisor = 2.5
    }

    animate() {
        this.ctx.drawImage(sub, (this.frameX * this.width), this.height, this.width, this.height, this.x, this.y, this.width/this.divisor, this.height/this.divisor);
        if (this.incrementer % 20 === 0) {
            if (this.frameX < 6) {
                this.frameX++;
            } if (this.frameX === 6) {
                this.frameX = 0;
            }
        }
        this.incrementer++
    }
}