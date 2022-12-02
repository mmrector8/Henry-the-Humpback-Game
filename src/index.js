import Game from "./scripts/game.js";
import Henry from "./scripts/henry.js"

 const canvas = document.getElementById("game-canvas")
 const ctx = canvas.getContext("2d")


let game1 = new Game(ctx);
let newHenry = new Henry(800, 600, ctx)