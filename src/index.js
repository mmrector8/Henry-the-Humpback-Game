console.log('webpack is working!')

const canvas = document.getElementById("game-canvas")
const ctx = canvas.getContext("2d")
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 600;

const henry = new Image();
henry.src = './images/henrysprite.png'

let henryWidth = 188;
let henryHeight = 55;
let frameX = 1; 
let gameFrame = 0;

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.fillRect(0,0,800,600);
    ctx.fillStyle = "blue"
    //ctx.drawImage(playerImage, 600, 340, 190, 240)
    
    ctx.drawImage(henry, (frameX * henryWidth), (henryHeight), (henryWidth), (henryHeight), 0, 0, henryWidth, henryHeight)
    if(gameFrame % 20 === 0){
        if (frameX < 4) frameX++
        if (frameX === 4) frameX= 0
    }
    gameFrame++
    requestAnimationFrame(animate);
}
animate();