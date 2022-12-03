//import Henry from "./scripts/henry.js"
import Henry from "./henry.js"

const background = new Image();
background.src = "./images/background.png"

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;

export default class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.score = 0;
        this.timer = 200
        this.winningScore = 100;
        this.lives = 3
        //this.setUpGame()
        //this.henry = new Henry(CANVAS_WIDTH, CANVAS_HEIGHT, ctx)
    }

    winner(){
        if (this.gameOver()){
            if (this.score >= this.winningScore && !this.threeLivesLost()){
                console.log("Congratulations, you won!")
            }else{
                console.log("oh no, try again!")
            }        
        }
    }

    gameOver(){
        if (this.timeOut() || this.threeLivesLost()) return true;
    }

    timeOut(){
        if (this.timer === 0) return true
        return false
    }

    threeLivesLost(){
        if (this.lives > 0) return false
        return true
    }

    incrementScore(){
        this.score += 100;
    }

    loseLife(){
        this.lives -=1
    }

    //increment Henry's size after each collision
}