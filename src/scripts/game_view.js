import Game from "./game.js";
import Henry from "./henry.js";
import Krill from "./krill.js";
import Background from "./background.js";
import Kelp from "./kelp.js";

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const KRILL_ARR = []
const KELP_ARR = []
let LAST_TIME = 0;
let KRILL_TIMER = 0;
let KRILL_INTERVAL = Math.floor(Math.random() * 4500 + 3500);
let KELP_TIMER = 0;
let KELP_INTERVAL = Math.floor(Math.random() * 8000 + 10);

export default class GameView{
    constructor(ctx) {
        this.game = new Game(ctx);
        this.ctx = ctx;
        this.henry = new Henry(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);
        this.background = new Background(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);
        this.kelp = new Kelp(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, 0,0)
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
        this.handleKrill(deltaTime);
        this.handleKelp(deltaTime)
        requestAnimationFrame(this.animate.bind(this))
    }

    handleKrill(deltaTime){  
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

    handleKelp(deltaTime) {
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
    
}

