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
        //this.gameView= new GameView(ctx);
        this.henry = new Henry(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);
        this.background = new Background(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);
        this.points = 0;
        this.timer = 200;
        this.winningScore = 300;
        this.collisions=[]
        this.animate(0);
        this.lives = 3;
    }

    //game loop, if the game isnt over, check for collisions

    play(){
        // show the instructions and facts
        
        //console.log(this.collisions)
        this.ctx.font= "25px Luckiest-Guy"
        //this.ctx.drawRect()
        this.ctx.fillText(`Points: ${this.points}`, 700, 40, 80)
        //check for collisions
            if(this.collisions.length){
                for (let i = 0; i < this.collisions.length; i++) {
                    if (this.collisions[i] === "KRILL"){
                        this.incrementScore();
                        this.increaseHenrySize();
                    }    
                    else if (this.collisions[i] !== false){
                        this.decrementScore();
                    }
                    this.collisions.shift();
                }
            }
            
        // this.ctx.fillText("Game over!", 10, 90)
            if(this.gameOver()){
                if (this.winner()) {
                    this.ctx.fillText("Congratulations, you won!", 900, 90)
                } else {
                    this.ctx.fillText("Oh no, you lost. Try again!", 400, 100)
                    this.points = 0;
                }
            }
 
     }


    increaseHenrySize(){
        //need to fix scaling here
        this.henry.henryWidth *= 1.02;
        this.henry.henryHeight *= 1.02;
    }

    winner(){
            if (this.points >= this.winningScore ){
                console.log("Congratulations, you won!")
            }else{
                console.log("oh no, try again!")
            }        
    }

    gameOver(){
       if (this.points >= 300 || this.points < 0) return true;
        return false;
    }

    threeLivesLost(){
        if (this.lives > 0) return false
        return true
    }

    incrementScore(){
        this.points += 100;
    }
    
    decrementScore(){
        this.points -= 100
    }

    loseLife(){
        this.lives -=1
    }
    

    animate(timeStamp) {
        const deltaTime = timeStamp - LAST_TIME;
        LAST_TIME = timeStamp;
        this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.background.animateBackground();
        this.background.updatePosition();
        this.henry.animateHenry();
        this.addKrill(deltaTime);
        this.addKelp(deltaTime);
        this.addRocks(deltaTime);
        this.addOtherWhales(deltaTime);
        this.addTrash(deltaTime)
        this.addSubs(deltaTime);
        this.obstacleArray();
        this.collisionWithObject();
        this.play();
        requestAnimationFrame(this.animate.bind(this))
    }

    addKrill(deltaTime) {
        let krillInterval = Math.floor(Math.random() * 4500 + 3500);
        if (KRILL_TIMER > krillInterval) {
            let randomY = Math.floor(Math.random() * (CANVAS_HEIGHT - 100) + 0)
            KRILL_ARR.push(new Krill(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, -10, randomY))
            KRILL_TIMER = 0;
        } else {
            KRILL_TIMER += deltaTime;
        }
        KRILL_ARR.forEach((krill) => {
            krill.animateKrill();
            krill.updateKrillPos();
            if (krill.x > CANVAS_WIDTH + 200) {
                KRILL_ARR.shift()
            }
        })
    }

    addKelp(deltaTime) {
        let kelpInterval = Math.floor(Math.random() * 500000);
        if (KELP_TIMER > kelpInterval) {
            KELP_ARR.push(new Kelp(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, -10, 385))
            KELP_TIMER = 0;
        } else {
            KELP_TIMER += deltaTime;
        }
        KELP_ARR.forEach((kelp) => {
            kelp.animate();
            kelp.updatePos();
            if (kelp.x > CANVAS_WIDTH + 300) {
                KELP_ARR.shift()
            }
        })
    }

    addRocks(deltaTime) {
        let rockInterval = Math.floor(Math.random() * 8000000);
        if (ROCK_TIMER > rockInterval) {
            ROCK_ARR.push(new Rock(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, -100, 385))
            ROCK_TIMER = 0;
        } else {
            ROCK_TIMER += deltaTime;
        }
        ROCK_ARR.forEach((rock) => {
            rock.animate();
            rock.updatePos();
            if (rock.x > CANVAS_WIDTH) {
                ROCK_ARR.shift()
            }
        })
    }

    addOtherWhales(deltaTime) {
        let whaleInterval = Math.floor(Math.random() * 6000000);
        let randomY = Math.floor(Math.random() * (CANVAS_HEIGHT - 340) + 0)
        if (WHALE_TIMER > whaleInterval) {
            WHALE_ARR.push(new Whale(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, -30, randomY))
            WHALE_TIMER = 0;
        } else {
            WHALE_TIMER += deltaTime;
        }
        WHALE_ARR.forEach((whale) => {
            whale.animate();
            whale.updatePos();
            if (whale.x > CANVAS_WIDTH) {
                WHALE_ARR.shift()
            }
        })

    }

    addTrash(deltaTime) {
        let trashInterval = Math.floor(Math.random() * 4000000);
        let randomX = Math.floor(Math.random() * (CANVAS_WIDTH - 600) + 0)
        let trashIdx = Math.floor(Math.random() * 3)
        if (TRASH_TIMER > trashInterval) {
            TRASH_ARR.push(new Trash(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, randomX, 0, trashIdx))
            TRASH_TIMER = 0;
        } else {
            TRASH_TIMER += deltaTime;
        }
        TRASH_ARR.forEach((trash) => {
            trash.animate();
            trash.updateTrashPos();
            if (trash.x > CANVAS_WIDTH) {
                TRASH_ARR.shift()
            }
        })
    }

    addSubs(deltaTime) {
        let subInterval = Math.floor(Math.random() * 50000000);
        let randomY = Math.floor(Math.random() * (CANVAS_HEIGHT - 375) + 0)
        if (SUB_TIMER > subInterval) {
            SUB_ARR.push(new Submarine(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, 0, randomY))
            SUB_TIMER = 0;
        } else {
            SUB_TIMER += deltaTime;
        }
        SUB_ARR.forEach((sub) => {
            sub.animate();
            sub.updatePos();
            if (sub.x > CANVAS_WIDTH + 100) {
                SUB_ARR.shift()
            }
        })
    }

    obstacleArray() {
        CURRENT_OBSTACLES = (KRILL_ARR).concat(SUB_ARR).concat(WHALE_ARR).concat(TRASH_ARR).concat(KELP_ARR).concat(ROCK_ARR)
        return CURRENT_OBSTACLES

    }

    collisionWithObject() {
        for (let i = 0; i < CURRENT_OBSTACLES.length; i++) {
            if ((CURRENT_OBSTACLES[i].y + CURRENT_OBSTACLES[i].height / CURRENT_OBSTACLES[i].divisor) >= this.henry.y
                && CURRENT_OBSTACLES[i].y <= this.henry.y + (this.henry.henryHeight / this.henry.divisor) &&
                (this.henry.x + (this.henry.henryWidth / this.henry.divisor)) >= CURRENT_OBSTACLES[i].x &&
                this.henry.x <= CURRENT_OBSTACLES[i].x + (CURRENT_OBSTACLES[i].width / CURRENT_OBSTACLES[i].divisor) &&
                CURRENT_OBSTACLES[i].name !== CURRENT_OBSTACLES[i].name.toUpperCase()) {
                CURRENT_OBSTACLES[i].name = CURRENT_OBSTACLES[i].name.toUpperCase();
                this.collisions.push(CURRENT_OBSTACLES[i].name)
                //console.log(this.collisions)
                return CURRENT_OBSTACLES[i].name
            }
        }
        return false;
    }

    //deal with collisions
    //increment Henry's size after each collision with krill
    
}