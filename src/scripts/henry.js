const henry = new Image();
henry.src = './images/henrysprite.png'

export default class Henry {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx){
        this.name = "Henry";
        this.ctx = ctx;
        this.CANVAS_WIDTH = CANVAS_WIDTH;
        this.CANVAS_HEIGHT = CANVAS_HEIGHT;
        this.henryWidth = 188;
        this.henryHeight = 55;
        this.frameX= 1;
        this.incrementer =0;
        this.y = 250;
        this.x =600;
        this.speed = 0;
        this.animateHenry();
    }

    animateHenry() {
        this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.ctx.fillRect(0, 0, 800, 600);
        this.ctx.drawImage(henry, (this.frameX * this.henryWidth), this.henryHeight, this.henryWidth, this.henryHeight, this.x, this.y, this.henryWidth, this.henryHeight)
        //this.moveHorizontally();
        if (this.incrementer % 20 === 0) {
            if (this.frameX < 4) {
                this.frameX++
            } if (this.frameX === 4) {
                this.frameX = 0
            }
        }
       this.incrementer++
        requestAnimationFrame(this.animateHenry.bind(this));
    }

    moveHorizontally(){
        if(this.x > 0){
            this.x--
        }else{
            this.x = 600;
        }
     requestAnimationFrame(this.moveHorizontally.bind(this))
    }

    moveVertically(){
        if (this.y > 0) {
            this.y--;
        } else {
            this.y = 250;
        }
    requestAnimationFrame(this.moveVertically.bind(this))
    }

    addListeners(){
        window.addEventListener("keydown", (e)=>{
            if(e.key === "ArrowLeft" || e.key === "ArrowRight"){
                console.log('henry should move horizontally')
                this.moveHorizontally()
            } else if (e.key === "ArrowDown" || e.key === "ArrowUp" ){
                console.log('henry should move vertically')
                this.moveVertically()
            }
        })
    }

}