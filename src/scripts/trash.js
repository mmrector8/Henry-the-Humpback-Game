import Obstacle from "./obstacles.js"
const trash = new Image()
trash.src = "./images/trash.png"

export default class Trash extends Obstacle {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y, num) {
        super(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y);
        this.width = 159;
        this.height = 205;
        this.frame = 1;
        this.trashIdx = num
        this.divisor = 7;
    }
    animate() {
        if (this.trashIdx === 0){
            this.ctx.drawImage(trash, (this.width), (0 * this.height), this.width, this.height, this.x, this.y, this.width / 4, this.height / 5);
        } else if (this.trashIdx === 1){
            this.ctx.drawImage(trash, (this.width), (1 * this.height), this.width, this.height, this.x, this.y, this.width / 4, this.height / 5);
        } else{
            this.ctx.drawImage(trash, (this.width), (2* this.height), this.width, this.height, this.x, this.y, this.width / 4, this.height / 5);
        }
        if (this.incrementer % 25 === 0) {
            if (this.frame < 9) {
                this.frame++;
            } if (this.frame === 9) {
                this.frame = 0;
            }
        }
        this.incrementer++
    }

    updateTrashPos(){
        this.x += this.scroll
        this.y += 1
    }
}