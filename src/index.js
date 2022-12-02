import Game from "./scripts/game.js";

 const canvas = document.getElementById("game-canvas")
 const ctx = canvas.getContext("2d")


let game1 = new Game(ctx);
game1.incrementScore()
game1.timer = 0;
console.log(game1.timeOut())
console.log(game1.score)
console.log(game1.gameOver())
console.log(game1.winner())
