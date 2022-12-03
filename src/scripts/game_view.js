import Game from "./game.js"
import Henry from "./henry.js"

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;

export default class GameView{
    constructor(ctx) {
        this.game = new Game(ctx)
        this.ctx = ctx
    }

    animate(){
        this.game.animateBackground();
        this.game.henry.animateHenry();
        this.game.henry.moveHorizontallyLeft()
        this.game.henry.moveHorizontallyRight()
        this.game.henry.moveVerticallyDown()
        this.game.henry.moveVerticallyUp
        requestAnimationFrame(this.animate.bind(this))
    }
}

