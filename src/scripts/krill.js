const krill = new Image();
krill.src = './images/krillcloud.png'

export default class Krill {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx){
        this.ctx = ctx;
        this.CANVAS_WIDTH = CANVAS_WIDTH;
        this.CANVAS_HEIGHT = CANVAS_HEIGHT;
        this.krillWidth = 115;
        this.krillHeight = 71;
        this.frameX = 1;
        this.incrementer = 0;
        this.y = 0;
        this.x = 0;
        this.scroll = 2;
    }

    animateKrill(x, y){
        this.ctx.drawImage(krill, (this.frameX * this.krillWidth), this.krillHeight, this.krillWidth, this.krillHeight, x, y, this.krillWidth, this.krillHeight);
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
    
    //place krill randomly on page in groups
    // generateRandomKrill(){
    //     //generate a random number between 2 and 4
    //     let randomNumOfKrills = Math.floor(Math.random() * (3) + 2)
    //     //loop from 0 to that number
    //     for(let i=0; i < randomNumOfKrills; i++){
    //         let randomX = Math.floor(Math.random() * (this.CANVAS_WIDTH) + 0)
    //         let randomY = Math.floor(Math.random() * (this.CANVAS_HEIGHT) + 0)
            
    //     }
    // }
}
