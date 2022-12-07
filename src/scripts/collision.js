const collision = new Image();
collision.src = './images/splash.png'

export default class Collision{
    constructor(ctx, CANVAS_WIDTH, CANVAS_HEIGHT, posX, posY){
        this.ctx = ctx;
        this.CANVAS_WIDTH = CANVAS_WIDTH;
        this.CANVAS_HEIGHT = CANVAS_HEIGHT;
        this.posX = posX;
        this.posY = posY;
        this.collisionH = 404;
        this.collisionW = 395;
        this.frameX = 0;
        this.incrementer = 0;
        this.animate();
    }

    animate(){
            this.ctx.drawImage(collision, (this.frameX * this.collisionW), this.collisionH, this.collisionW, this.collisionH, this.posX, this.posY, this.collisionW/3, this.collisionH/3)
            if (this.incrementer % 10 === 0) {
                if (this.frameX < 7) {
                    this.frameX++;
                } if (this.frameX === 7) {
                    this.frameX = 0;
                }
            }
            this.incrementer++
    }

    update(){
        this.posX += 3
    }
       
}