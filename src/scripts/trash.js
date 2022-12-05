import Obstacle from "./obstacles.js"
const trash = new Image()
trash.src = "./images/trash.png"

export default class Trash extends Obstacle {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y) {
        super(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y);
        this.width = 159;
        this.height = 205;
    }
    animate() {
        let randomTrashNum = Math.floor(Math.random() * 3)
        this.ctx.drawImage(trash, (this.frameX * this.width), this.height, this.width, this.height, this.x, this.y, this.width/4, this.height/4);
        if (this.incrementer % 15 === 0) {
            if (this.frameX < 4) {
                this.frameX++;
            } if (this.frameX === 4) {
                this.frameX = 0;
            }
        }
        this.incrementer++
    }

    updateTrashPos(){
        this.x += this.scroll
        this.y += 1
    }
}