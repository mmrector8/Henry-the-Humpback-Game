import Obstacle from "./obstacles.js"
const rock = new Image()
rock.src = "./images/rock.png"

export default class Rock extends Obstacle {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y) {
        super(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y);
        this.width = 221;
        this.height = 278;
        this.divisor = 2;
        this.name = 'rock';
    }

    animate(){
       this.ctx.drawImage(rock, this.x , 300, this.width, this.height)
    }
}