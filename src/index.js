import Game from "./scripts/game.js";

 const canvas = document.getElementById("game-canvas")
 const ctx = canvas.getContext("2d")
let game1 = new Game(ctx);


// // let game1 = new Game(ctx);
// const CANVAS_WIDTH = 800;
// const CANVAS_HEIGHT = 600;

// // const henry = new Image();
// // henry.src = './images/henrysprite.png'

// let henryWidth = 188;
// let henryHeight = 55;
// let frameX = 1; 
// let gameFrame = 0;



// function animate(){
//     ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
//     ctx.fillRect(0,0,800,600);
//     ctx.fillStyle = "#2B65EC"
    
//     ctx.drawImage(henry, (frameX * henryWidth), (henryHeight), (henryWidth), (henryHeight), 600, 250, henryWidth, henryHeight)
//     if(gameFrame % 20 === 0){
//         if (frameX < 4){
//             frameX++
//         }if (frameX === 4){
//             frameX = 0
//         } 
//     }
//     gameFrame++
//     requestAnimationFrame(animate);
// }
// animate();