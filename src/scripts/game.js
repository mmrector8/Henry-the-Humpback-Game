import GameView from "./game_view.js"
import Henry from "./henry.js";
import Krill from "./krill.js";
import Background from "./background.js";
import Kelp from "./kelp.js";
import Rock from "./rock.js";
import Whale from "./whale.js";
import Trash from "./trash.js";
import Submarine from "./submarine.js"

const background = new Image();
background.src = "./images/background.png"

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
let LAST_TIME = 0;
const KRILL_ARR = [];
const KELP_ARR = [];
let KRILL_TIMER = 0;
let KELP_TIMER = 0;
const ROCK_ARR = [];
let ROCK_TIMER = 0;
let WHALE_TIMER = 0;
const WHALE_ARR = [];
let TRASH_TIMER = 0;
const TRASH_ARR = [];
let SUB_TIMER = 0;
const SUB_ARR = [];
let OBSTACLE_TIMER = 0;
let CURRENT_OBSTACLES = [];

export default class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.gameView= new GameView(ctx);
        this.henry = new Henry(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);
        this.background = new Background(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);
        this.points = 0;
        this.timer = 200;
        this.winningScore = 100;
    }

    //game loop, if the game isnt over, check for collisions

    //collisions?(){
        //set result of collision function to variable
        //if that variable name is 'whale', subtract 10 points
        // else subtr
        //collides with krill, gains points
    //}

    play(){
        // show the instructions and facts
        this.gameView.animate(0);
        //display points
        //while game is not over

        // console.log(this.gameView.collisionWithObject())
        // while(!this.gameOver()){
        //     if (this.gameView.collisionWithObject()) {
        //         console.log(this.points)
        //     } else {
        //         console.log('false')
        //     }

        // }
           
            //     if(this.gameView.collisionWithObject() !== "krill"){
            //         this.points -= 100;
            //     }else{
            //         this.points += 100;
            //     }
            // }
        // check for collisions
        // if there is a collision and the name is not krill
            // subtract points
        // else if there is a collision and the name is krill
            // add points
        // display end of game messafe
    }


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
       //if (this.timeOut() || this.threeLivesLost()) return true;
        return false;
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