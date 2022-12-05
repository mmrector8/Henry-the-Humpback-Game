import GameView from "./game_view.js"

const background = new Image();
background.src = "./images/background.png"

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;

export default class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.gameView= new GameView(ctx);
        this.score = 0;
        this.timer = 200
        this.winningScore = 100;
        this.lives = 3;
    }

    //game loop, if the game isnt over, check for collisions

    //collisions?(){
        //set result of collision function to variable
        //if that variable name is 'whale', subtract 10 points
        // else subtr
        //collides with krill, gains points
    //}

    increaseHenrySize(){
        //need to fix scaling here
        this.gameView.henry.henryWidth += 2;
        this.gameView.henry.henryHeight += 2;
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
    

    //increment Henry's size after each collision with krill
}