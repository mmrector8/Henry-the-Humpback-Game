const henry = new Image();
henry.src = './images/newHenry.png'


export default class Henry {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx){
        this.name = "Henry";
        this.ctx = ctx;
        this.CANVAS_WIDTH = CANVAS_WIDTH;
        this.CANVAS_HEIGHT = CANVAS_HEIGHT;
        this.henryWidth = 527;
        this.henryHeight = 212;
        this.frameX= 1;
        this.incrementer =0;
        this.animationIncrementer = 0;
        this.divisor = 3;
        this.upForceApplied =1;
        this.downForceApplied = 1;
        this.leftForceApplied = 1;
        this.rightForceApplied = 1;
        this.y = 250;
        this.x =575;
        this.addListeners();
    }

    animateHenry() {
        this.ctx.drawImage(henry, (this.frameX * 527), 212, 527, 212, this.x, this.y, this.henryWidth/3, this.henryHeight/3)
        if (this.incrementer % 15 === 0) {
            if (this.frameX < 4) {
                this.frameX++;
            } if (this.frameX === 4) {
                this.frameX = 0;
            }
        }
       this.incrementer++
    }

    moveHorizontallyLeft(){
        if (this.animationIncrementer % 2 === 0) {
            this.leftForceApplied += 0.015;
        }
        if(this.x > 0){
            console.log(10* this.leftForceApplied)
            this.x -= (10 * this.leftForceApplied)
        }else{
            this.x = 0;
        }
    }

    moveHorizontallyRight() {
        if (this.animationIncrementer % 10 === 0) {
            this.rightForceApplied += 0.005;
        }
        if (this.x <590) {
            this.x+=20;
        } else {
            this.x = 590;
        }
    }

    moveVerticallyUp(){
        if(this.animationIncrementer % 20 ===0){
            this.upForceApplied += 0.01;
        }
            if (this.y > 0) {
                this.y-=(10 * this.upForceApplied);
            } else {
                this.y = 0;
            }
    }

    moveVerticallyDown() {
        if (this.animationIncrementer % 2 === 0) {
            this.downForceApplied += 0.015;
            }
            if (this.y < 450) {
                this.y += (10 * this.downForceApplied);
            } else {
                this.y = 450;
            }
    }

    addListeners(){
        window.addEventListener("keydown", (e)=>{
            e.preventDefault();
            if(e.key === "ArrowLeft"){
                this.moveHorizontallyLeft()
            } else if (e.key === "ArrowRight") {
                this.moveHorizontallyRight();
            } else if(e.key === "ArrowUp"){
                this.moveVerticallyUp();
            }else if(e.key === "ArrowDown"){
                this.moveVerticallyDown();
            }
            this.animationIncrementer++
        });

        window.addEventListener("keyup", (e) => {
            e.preventDefault();
            if (e.key === "ArrowLeft") {
                this.leftForceApplied=1;
            } else if (e.key === "ArrowRight") {
                this.rightForceApplied = 1;
            } else if (e.key === "ArrowUp") {
                this.upForceApplied = 1;
            } else if (e.key === "ArrowDown") {
                this.downForceApplied = 1;
            }
        });
    }

}