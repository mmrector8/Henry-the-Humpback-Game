import Obstacle from "./obstacles.js"
const submarine = new Image()
submarine.src = "./images/submarine.png"

export default class Submarine extends Obstacle {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y) {
        super(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y);
        this.width = 70;
        this.height = 112;
    }
    animate() {
        this.ctx.drawImage(submarine, (this.frameX * this.width), this.height, this.width, this.height, this.x, this.y, this.width, this.height * 1.5);
        if (this.incrementer % 15 === 0) {
            if (this.frameX < 4) {
                this.frameX++;
            } if (this.frameX === 4) {
                this.frameX = 0;
            }
        }
        this.incrementer++
    }
}