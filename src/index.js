
import Game from "./scripts/game.js"

 const canvas = document.getElementById("game-canvas")
 const ctx = canvas.getContext("2d")

let newGame = new Game(ctx)
newGame.gameView.obstacleArray();

