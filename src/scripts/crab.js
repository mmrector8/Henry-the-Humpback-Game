import Obstacle from "./obstacles.js"
const crab = new Image()
crab.src = "./images/crab.png"

export default class Crab extends Obstacle {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y) {
        super(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y);
        this.width = 128;
        this.height = 124;
        this.divisor = 1;
        this.name = 'crab'
    }
    animate() {
        this.ctx.drawImage(crab, (this.frameX * this.width), this.height, this.width, this.height, this.x, this.y, this.width/2, this.height/2);
        if (this.incrementer % 10 === 0) {
            if (this.frameX < 6) {
                this.frameX++;
            } if (this.frameX === 6) {
                this.frameX = 0;
            }
        }
        this.incrementer++
    }

    updateCrab(){
        this.x += 3;
    }
}