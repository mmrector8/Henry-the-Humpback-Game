
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const henry = new Image();
henry.src = './images/henrysprite.png'

let henryWidth = 188;
let henryHeight = 55;
let frameX = 1;
let gameFrame = 0;

export default class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.score = 0;
        this.timer = 200
        this.winningScore = 100;
        this.lives = 3
        this.setUpGame()
    }

    animateBackground(){
        this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.ctx.fillStyle = "#2B65EC";
        this.ctx.fillRect(0, 0, 800, 600);
    }
    
    setUpGame() {
        this.animateBackground()
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

}