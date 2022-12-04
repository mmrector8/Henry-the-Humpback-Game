let LAST_TIME = 0;
let TIMER = 0;
let INTERVAL = Math.floor(Math.random() * 4500 + 3500);
let OBSTACLE_ARR  = []

export default class Obstacle {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y){
        this.ctx = ctx;
        this.CANVAS_WIDTH = CANVAS_WIDTH;
        this.CANVAS_HEIGHT = CANVAS_HEIGHT;
        this.frameX = 1;
        this.incrementer = 0;
        this.x = x;
        this.y = y
        this.scroll = 2;
    }

    handleObstacle(deltaTime, animate) {
        if (TIMER > INTERVAL) {
            let randomY = Math.floor(Math.random() * (CANVAS_HEIGHT - 100) + 0)
            OBSTACLE_ARR.push(new this.handleObstacle(CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, -10, randomY))
            TIMER = 0;
        } else {
            TIMER += deltaTime;
        }
        OBSTACLE_ARR.forEach((obstacle) => {
            obstacle.animate();
            obstacle.updatePos();
        })
    }

    updatePos() {
        this.x += this.scroll;
    }
}
