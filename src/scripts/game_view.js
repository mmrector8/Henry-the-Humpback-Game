import Game from "./game.js"
import Henry from "./henry.js"
import Krill from "./krill.js";
import Background from "./background.js";

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const KRILL_ARR = []
let LAST_TIME = 0;
let KRILL_TIMER = 0;
let KRILL_INTERVAL = 3500;

export default class GameView{
    constructor(ctx) {
        this.game = new Game(ctx);
        this.ctx = ctx;
        this.henry = new Henry(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);
        this.background = new Background(CANVAS_WIDTH, CANVAS_HEIGHT, ctx)
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
        requestAnimationFrame(this.animate.bind(this))
    }
    

    //  generateRandomKrill(){
    //     //generate a random number between 2 and 4
    //     let randomNumOfKrills = Math.floor(Math.random() * (3) + 2)
    //     //loop from 0 to that number
    //      KRILL_ARR.push(new Krill(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx))
    //     //  for(let i=0; i < randomNumOfKrills; i++){
    //     //     KRILL_ARR.push(new Krill(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx))
    //     // //         console.log('hi')
    //     //  }
    //     console.log(KRILL_ARR.length)
    // }

    // let krillTimer =0;
    // let krillInterval = 1000;

    handleKrill(deltaTime){  
        if(KRILL_TIMER > KRILL_INTERVAL){
            let randomY = Math.floor(Math.random() * (CANVAS_HEIGHT - 100) + 0)
            KRILL_ARR.push(new Krill(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, 0, randomY))
            KRILL_TIMER = 0;
        } else{
            KRILL_TIMER += deltaTime;
        }
        KRILL_ARR.forEach((krill)=> {
            let randomX = Math.floor(Math.random() * (CANVAS_WIDTH) + 0)
            let randomY = Math.floor(Math.random() * (CANVAS_HEIGHT - 200) + 0)
            krill.animateKrill(500, 500);
            krill.updateKrillPos();
        })
    }
    
}

