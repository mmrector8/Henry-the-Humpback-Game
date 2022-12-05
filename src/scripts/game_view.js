import Game from "./game.js";
import Henry from "./henry.js";
import Krill from "./krill.js";
import Background from "./background.js";
import Kelp from "./kelp.js";
import Rock from "./rock.js";
import Whale from "./whale.js";
import Trash from "./trash.js";
import Submarine from "./submarine.js"

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const KRILL_ARR = [];
const KELP_ARR = [];
let LAST_TIME = 0;
let KRILL_TIMER = 0;
let KRILL_INTERVAL = Math.floor(Math.random() * 4500 + 3500);
let KELP_TIMER = 0;
const ROCK_ARR = [];
let ROCK_TIMER = 0;
let WHALE_TIMER = 0;
let WHALE_ARR =[];
let TRASH_TIMER = 0;
let TRASH_ARR = [];
let SUB_TIMER = 0;
let SUB_ARR = [];


export default class GameView{
    constructor(ctx) {
        this.game = new Game(ctx);
        this.ctx = ctx;
        this.henry = new Henry(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);
        this.background = new Background(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);
        this.animate(0);
        this.incrementer = 0;
    }

    animate(timeStamp){
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
        this.addSubs(deltaTime)
        requestAnimationFrame(this.animate.bind(this))
    }

    addKrill(deltaTime){  
        if(KRILL_TIMER > KRILL_INTERVAL){
            let randomY = Math.floor(Math.random() * (CANVAS_HEIGHT - 100) + 0)
            KRILL_ARR.push(new Krill(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, -10, randomY))
            KRILL_TIMER = 0;
        } else{
            KRILL_TIMER += deltaTime;
        }
        KRILL_ARR.forEach((krill)=> {
            krill.animateKrill();
            krill.updateKrillPos();
        })
    }

    addKelp(deltaTime) {
        let KELP_INTERVAL = Math.floor(Math.random() * 600000);
        if (KELP_TIMER > KELP_INTERVAL) {
            KELP_ARR.push(new Kelp(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, -10, 385))
            KELP_TIMER = 0;
        } else {
            KELP_TIMER += deltaTime;
        }
        KELP_ARR.forEach((kelp) => {
            kelp.animate();
            kelp.updatePos();
        })
    }

    addRocks(deltaTime) {
        let ROCK_INTERVAL = Math.floor(Math.random() * 8000000);
        if (ROCK_TIMER > ROCK_INTERVAL) {
            ROCK_ARR.push(new Rock(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, -100, 385))
            ROCK_TIMER = 0;
        } else {
            ROCK_TIMER += deltaTime;
        }
        ROCK_ARR.forEach((rock) => {
            rock.animate();
            rock.updatePos();
        })
    }

    addOtherWhales(deltaTime) {
        let WHALE_INTERVAL = Math.floor(Math.random() * 6000000);
        let randomY = Math.floor(Math.random() * (CANVAS_HEIGHT - 300) + 0)
        if (WHALE_TIMER > WHALE_INTERVAL) {
            WHALE_ARR.push(new Whale(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, -30, randomY))
            WHALE_TIMER = 0;
        } else {
            WHALE_TIMER += deltaTime;
        }
        WHALE_ARR.forEach((whale) => {
            whale.animate();
            whale.updatePos();
        })
    }
    
    addTrash(deltaTime) {
        let TRASH_INTERVAL = Math.floor(Math.random() * 4000000);
        let randomX = Math.floor(Math.random() * (CANVAS_WIDTH - 600) + 0)
        let trashIdx = Math.floor(Math.random() * 3)
        if (TRASH_TIMER > TRASH_INTERVAL) {
            TRASH_ARR.push(new Trash(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, randomX, 0, trashIdx))
            TRASH_TIMER = 0;
        } else {
            TRASH_TIMER += deltaTime;
        }
        TRASH_ARR.forEach((trash) => {
            trash.animate();
            trash.updateTrashPos();
        })
    }

    addSubs(deltaTime) {
        let SUB_INTERVAL = Math.floor(Math.random() * 6000000);
        let randomY = Math.floor(Math.random() * (CANVAS_HEIGHT - 300) + 0)
        if (SUB_TIMER > SUB_INTERVAL) {
            SUB_ARR.push(new Submarine(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, 0, randomY))
            SUB_TIMER = 0;
        } else {
            SUB_TIMER += deltaTime;
        }
        SUB_ARR.forEach((sub) => {
            sub.animate();
            sub.updatePos();
        })
    }
   
}

