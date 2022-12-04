import Obstacle from "./obstacles.js"

const otherWhale = new Image();
otherWhale.src = "./images/otherwhale.png"

export default class Whale extends Obstacle{
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y){
        super(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y)
        this.width = 360;
        this.height = 105;
    }

    animate(){
        this.ctx.drawImage(otherWhale, (this.frameX * this.width), this.height, this.width, this.height, this.x, this.y, this.width, this.height);
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