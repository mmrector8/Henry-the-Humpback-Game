import Game from "./game.js"
import Henry from "./henry.js"

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;

const henry = new Image();
henry.src = './images/henrysprite.png'

const background = new Image();
background.src = './images/background.png'

export default class GameView{
    constructor(ctx) {
        this.game = new Game(ctx);
        this.ctx = ctx;
        this.henry = new Henry(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);
        this.animate();
    }

    animate(){
        // this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        //  //console.log(background instanceof HTMLMediaElement)
        //this.ctx.drawImage(background, 0, 0 , CANVAS_WIDTH, CANVAS_HEIGHT)
        //this.game.animateBackground()
        this.henry.animateHenry();
        requestAnimationFrame(this.animate.bind(this))
    }

    animateBackground(){
        
    }
}

