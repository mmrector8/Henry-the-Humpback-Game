const krill = new Image();
krill.src = './images/krillcloud.png'

export default class Krill {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y){
        this.ctx = ctx;
        this.CANVAS_WIDTH = CANVAS_WIDTH;
        this.CANVAS_HEIGHT = CANVAS_HEIGHT;
        this.krillWidth = 115;
        this.krillHeight = 71;
        this.frameX = 1;
        this.incrementer = 0;
        this.y = y;
        this.x = x;
        this.scroll = 2;
        this.divisor = 1;
    }

    animateKrill(){
        this.ctx.drawImage(krill, (this.frameX * this.krillWidth), this.krillHeight, this.krillWidth, this.krillHeight, this.x, this.y, this.krillWidth, this.krillHeight);
         if (this.incrementer % 20 === 0) {
            if (this.frameX < 5) {
                this.frameX++;
            } if (this.frameX ===5) {
                this.frameX =0;
            }
        }
        this.incrementer++
    }

    updateKrillPos(){
        this.x += this.scroll;

    }
    
}
