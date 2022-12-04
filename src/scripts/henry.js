const henry = new Image();
henry.src = './images/henrysprite.png'
const background = new Image();
background.src = './images/background.png'


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
        this.addListeners();
    }

    animateHenry() {
        this.ctx.drawImage(henry, (this.frameX * this.henryWidth), this.henryHeight, this.henryWidth, this.henryHeight, this.x, this.y, this.henryWidth, this.henryHeight);
        if (this.incrementer % 20 === 0) {
            if (this.frameX < 4) {
                this.frameX++;
            } if (this.frameX === 4) {
                this.frameX = 0;
            }
        }
       this.incrementer++
    }

    moveHorizontallyLeft(){
        if(this.x > 0){
            this.x--;
        }else{
            this.x = 600;
        }
     requestAnimationFrame(this.moveHorizontallyLeft.bind(this));
    }

    moveHorizontallyRight() {
        if (this.x <600) {
            this.x++;
        } else {
            this.x = 600;
        }
       requestAnimationFrame(this.moveHorizontallyRight.bind(this));
    }

    moveVerticallyUp(){
        if (this.y > 0) {
            this.y--;
        } else {
            this.y = 0;
        }
    requestAnimationFrame(this.moveVerticallyUp.bind(this));
    }

    moveVerticallyDown() {
        if (this.y < 450) {
            this.y++;
        } else {
            this.y = 450;
        }
    requestAnimationFrame(this.moveVerticallyDown.bind(this));
    }

    addListeners(){
        window.addEventListener("keydown", (e)=>{
            if(e.key === "ArrowLeft"){
                this.moveHorizontallyLeft();
                console.log('should be moving left')
            } else if (e.key === "ArrowRight") {
                this.moveHorizontallyRight();
            } else if(e.key === "ArrowUp"){
                this.moveVerticallyUp();
            }else if(e.key === "ArrowDown"){
                this.moveVerticallyDown();
            }
        });
    }

}