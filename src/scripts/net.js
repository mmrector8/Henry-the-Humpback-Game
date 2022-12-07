import Obstacle from "./obstacles.js"
const net = new Image()
net.src = "./images/fishingnet.png"


export default class Net extends Obstacle{
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y) {
        super(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y);
        this.width = 111;
        this.height = 116;
        this.divisor = 1;
        this.name = 'net'
    }
    animate() {
        this.ctx.drawImage(net, (this.frameX * this.width), this.height, this.width, this.height, this.x, this.y, this.width *1.2, this.height*1.2);
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