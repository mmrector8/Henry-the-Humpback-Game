import Game from "./game.js"
import Henry from "./henry.js"
import Krill from "./krill.js";
import Background from "./background.js";

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const KRILL_ARR = []

export default class GameView{
    constructor(ctx) {
        this.game = new Game(ctx);
        this.ctx = ctx;
        this.henry = new Henry(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);
        this.krill = new Krill(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);
        this.background = new Background(CANVAS_WIDTH, CANVAS_HEIGHT, ctx)
        this.animate();
        this.incrementer = 0;
        // this.krillArr = new Array;
    }

    animate(){
         this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.background.animateBackground();
        this.background.updatePosition();
        this.henry.animateHenry();
        this.handleKrill();
        //this.krill.animateKrill();
        //this.krill.updateKrillPos();
        requestAnimationFrame(this.animate.bind(this))
    }

     generateRandomKrill(){
        //generate a random number between 2 and 4
        let randomNumOfKrills = Math.floor(Math.random() * (3) + 2)
        //loop from 0 to that number
        for(let i=0; i < randomNumOfKrills; i++){
            KRILL_ARR.push(new Krill(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx))
        }
    }

    handleKrill(){   
        if(this.incrementer % 20 === 0){
            for (let i = 0; i < KRILL_ARR.length; i++) {
                let randomX = Math.floor(Math.random() * (CANVAS_WIDTH) + 0)
                let randomY = Math.floor(Math.random() * (CANVAS_HEIGHT - 200) + 0)
                KRILL_ARR[i].animateKrill(randomX, randomY);
                KRILL_ARR[i].updateKrillPos();
            } 
        }
        this.incrementer++  
    }
    
}

