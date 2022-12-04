//import Game from "./scripts/game.js";
import GameView from "./scripts/game_view.js"
 const canvas = document.getElementById("game-canvas")
 const ctx = canvas.getContext("2d")


let newView = new GameView(ctx);
newView.generateRandomKrill();
