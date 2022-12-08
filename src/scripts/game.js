import Henry from "./henry.js";
import Krill from "./krill.js";
import Background from "./background.js";
import Kelp from "./kelp.js";
import Rock from "./rock.js";
import Whale from "./whale.js";
import Trash from "./trash.js";
import Submarine from "./submarine.js";
import Collision from "./collision.js";
import Net from "./net.js"
import Crab from "./crab.js"

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
let NET_TIMER = 0;
const NET_ARR =[];
let CRAB_TIMER = 0;
const CRAB_ARR = [];
let OBSTACLE_TIMER = 0;
let CURRENT_OBSTACLES = [];
let COLLISION_OBJS =[];

export default class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.henry = new Henry(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);
        this.background = new Background(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);
        this.krillLbs = 0;
        this.timer = 200;
        this.winningKrillEaten = 3000;
        this.collisions=[]
        this.health = 500;
        this.timer = 0;
        this.backgroundAudio = document.getElementById("background-music");
        this.startAnimation = false;
        this.gameStarted = false;
        this.addMuteAudioButton();
        this.addModalButtons()
        this.startGame();
        this.pauseGame();
    }

    startGame(){
        let display = document.getElementById("startImage")
            window.addEventListener('keydown', () => {
                this.gameStarted = true;
                this.backgroundAudio.play();
                display.style.display = "none"
                this.animate(0)
            }, { once: true })
    }

    pauseGame(){
        window.addEventListener('keydown', (e)=>{
            if(e.keyCode == 32){
                console.log('space pressed')
                if(this.startAnimation === true && this.gameStarted === true){
                    this.startAnimation = false;
                } else{
                    this.startAnimation = true;
                };
            }
        })
    }



    play(){        
        this.ctx.font= "bold 25px copperplate"
        this.ctx.fillStyle = "black"
        this.ctx.fillText("Health Points:", 340, 30, 150)
        this.addHealthColor();
        this.ctx.fillText(`${this.health}`, 500,30, 150)
        this.addKrillToEat();
        this.checkCollisions();
        this.handleCollisionAnimations();
        this.endOfGame();
     }

     addModalButtons(){
         const openInstructionsButton = document.getElementById("open-instructions")
         const closeInstructionsButton = document.getElementById("close-button")
         const modal = document.getElementById("modal")

         openInstructionsButton.addEventListener("click", ()=>{
            modal.classList.add("active")
         })

         closeInstructionsButton.addEventListener('click', ()=>{
            modal.classList.remove("active")
         })
     }

     addKrillToEat(){
         let remainingKrillToEat = this.winningKrillEaten - this.krillLbs
         this.ctx.fillStyle = "black"
         this.ctx.fillText("Eat:", 20, 30, 50)
         if(remainingKrillToEat >= 2500){
             this.ctx.fillStyle = "red"
         } else if(remainingKrillToEat <2500 && remainingKrillToEat > 1000){
            this.ctx.fillStyle = "yellow"
         }else{
            this.ctx.fillStyle = "green"
         }
         this.ctx.fillText(`${remainingKrillToEat}`, 80, 30, 150)
         this.ctx.fillStyle = "black"
         this.ctx.fillText("more lbs of Krill!", 150, 30, 175)
     }

     addHealthColor(){
         if (this.health >= 350) {
             return this.ctx.fillStyle = "green"
         } else if (this.health > 150 && this.health < 350) {
             return this.ctx.fillStyle = "yellow"
         } else {
            return this.ctx.fillStyle = "red"
         }
     }

     addMuteAudioButton(){
        let audioButton = document.getElementById('mute')
        audioButton.addEventListener('click', ()=>{
            if(audioButton.innerHTML === "Unmute"){
                this.backgroundAudio.play();
                audioButton.innerHTML = "Mute";
            }else {
                this.backgroundAudio.pause();
                audioButton.innerHTML = "Unmute";
            }
        });
     }
     checkCollisions(){
         if (this.collisions.length) {
             for (let i = 0; i < this.collisions.length; i++) {
                 if (this.collisions[i] instanceof Krill) {
                     this.incrementKrillEaten();
                     this.increaseHenrySize();
                     this.incrementHealth();
                     let krillIdx = KRILL_ARR.indexOf(this.collisions[i])
                    if (krillIdx >= 0){
                        KRILL_ARR.splice(krillIdx, 1)
                    }
                 } 
                else if(this.collisions[i] instanceof Kelp){
                    this.collisions.shift();
                     continue;
                 } else if(this.collisions[i] instanceof Crab){
                    this.collisions.shift();
                    continue;
                 }
                 else if (this.collisions[i]) {
                    this.decrementHealth();
                    let collisionXHenry = this.henry.x
                    let collisionXObj = this.collisions[i].x + (this.collisions[i].width)/2
                     let collisionYHenry = this.henry.y
                     let collisionYObj = this.collisions[i].y

                     let avgX = (collisionXHenry + collisionXObj)/2
                     let avgY = (collisionYHenry + collisionYObj)/2


                    COLLISION_OBJS.push(new Collision(this.ctx, CANVAS_WIDTH, CANVAS_HEIGHT, avgX, avgY))
                 }
                 this.collisions.shift();
             }
         }
     }

     handleCollisionAnimations() {
       
        COLLISION_OBJS.forEach((collision)=> {
            collision.animate();
            collision.update();
        })    
     }


     endOfGame(){
        if(this.gameOver()){
            let bodyOverflow = document.getElementById("body")
            bodyOverflow.style.overflow = "visible"
            if (this.winner()) {
                this.ctx.font = "bold 50px copperplate"
                this.textAlign = "center";
                this.ctx.fillText("Congratulations, you won!", 110, 200, 600)
                this.ctx.fillText("Henry is ready for", 110, 270, 600)
                this.ctx.fillText("a successful migration!", 110, 330, 600)
                window.cancelAnimationFrame(animate)
            } else if (this.gameOver()) {
                this.health = 0;
                this.ctx.font = "bold 50px copperplate"
                this.ctx.fillText(" Oh no, Henry can't migrate! ", 100, 260, 600)
                this.ctx.fillText("Click below to try again!", 100, 300, 600)
                window.cancelAnimationFrame(animate)
            }
        }
     }

    increaseHenrySize(){
        this.henry.henryWidth *= 1.02;
        this.henry.henryHeight *= 1.02;
    }

    winner(){
        if (this.krillLbs >= this.winningKrillEaten ){
            return true
        }
        false;      
    }

    gameOver(){
        if(this.krillLbs >= this.winningKrillEaten || this.health <= 0) return true
        return false;
    }

    incrementKrillEaten(){
        this.krillLbs += 150;
    }
    
    decrementHealth(){
        this.health -= 100
    }

    incrementHealth(){
        this.health += 10;
    }

    animate(timeStamp) {
        let frame = requestAnimationFrame(this.animate.bind(this))
        if (this.startAnimation){
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
            this.addNet(deltaTime);
            this.addCrab(deltaTime)
            this.obstacleArray();
            this.collisionWithObject();
            this.play();

            
        } else if (this.startAnimation=== false){
            this.ctx.font = "bold 35px copperplate"
            this.ctx.fillStyle ="#ffca66"
            this.ctx.fillText("           Game paused", 170, 280, 600)
            this.ctx.fillText("Press space bar to continue", 170, 340, 600)
            window.cancelAnimationFrame(animate)
        }
       
    }

    obstacleArray() {
        CURRENT_OBSTACLES = (KRILL_ARR).concat(SUB_ARR).concat(WHALE_ARR).concat(TRASH_ARR).concat(KELP_ARR).concat(ROCK_ARR).concat(NET_ARR)
        return CURRENT_OBSTACLES

    }

    collisionWithObject() {
        for (let i = 0; i < CURRENT_OBSTACLES.length; i++) {

            if (CURRENT_OBSTACLES[i].x < 700 && this.henry.x < 700) {
                if ((CURRENT_OBSTACLES[i].y + (CURRENT_OBSTACLES[i].height / CURRENT_OBSTACLES[i].divisor)) >= this.henry.y
                    && CURRENT_OBSTACLES[i].y <= this.henry.y + (this.henry.henryHeight / this.henry.divisor)
                    && (this.henry.x + (this.henry.henryWidth / this.henry.divisor)) >= CURRENT_OBSTACLES[i].x
                    && this.henry.x <= CURRENT_OBSTACLES[i].x + (CURRENT_OBSTACLES[i].width / CURRENT_OBSTACLES[i].divisor)
                    && CURRENT_OBSTACLES[i].name !== CURRENT_OBSTACLES[i].name.toUpperCase()) {
                    CURRENT_OBSTACLES[i].name = CURRENT_OBSTACLES[i].name.toUpperCase();
                    this.collisions.push(CURRENT_OBSTACLES[i])
                }
            }

        }
        return false;
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
        let kelpInterval = Math.floor(Math.random() * 900000);
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
        let rockInterval = Math.floor(Math.random() * 6000000);
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
        let whaleInterval = Math.floor(Math.random() * 9000000);
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
        let trashInterval = Math.floor(Math.random() * 8000000);
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

    addNet(deltaTime) {
        let netInterval = Math.floor(Math.random() * 10000000);
        let randomX = Math.floor(Math.random() * (CANVAS_HEIGHT - 375) + 0)
        if (NET_TIMER > netInterval) {
            NET_ARR.push(new Net(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, randomX, -5))
            NET_TIMER = 0;
        } else {
            NET_TIMER += deltaTime;
        }
        NET_ARR.forEach((net) => {
            net.animate();
            net.updatePos();
            if (net.x > CANVAS_WIDTH + 100) {
                NET_ARR.shift()
            }
        })
    }

    addCrab(deltaTime) {
        let crabInterval = Math.floor(Math.random() * 1000000);
        if (CRAB_TIMER > crabInterval) {
            CRAB_ARR.push(new Crab(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, -100, CANVAS_HEIGHT-75))
            CRAB_TIMER = 0;
        } else {
            CRAB_TIMER += deltaTime;
        }
        CRAB_ARR.forEach((crab) => {
            crab.animate();
            crab.updateCrab();
            if (crab.x > CANVAS_WIDTH + 100) {
                CRAB_ARR.shift()
            }
        })
    }

 
}