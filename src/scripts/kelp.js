import Obstacle from "./obstacles.js"
const kelp = new Image()
kelp.src = "./images/kelp.png"

export default class Kelp extends Obstacle{
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y){
        super(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y);
        this.width = 70;
        this.height = 112;
        this.divisor = 1.5;
        this.name = 'kelp'
    }
    animate(){
        this.ctx.drawImage(kelp, (this.frameX * this.width), this.height, this.width, this.height, this.x, this.y, this.width, this.height *1.5);
        if (this.incrementer % 20 === 0) {
            if (this.frameX < 7) {
                this.frameX++;
            } if (this.frameX === 7) {
                this.frameX = 0;
            }
        }
        this.incrementer++
    }
}