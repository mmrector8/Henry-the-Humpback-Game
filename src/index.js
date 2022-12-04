import GameView from "./scripts/game_view.js"
import Rock from "./scripts/rock.js";
 const canvas = document.getElementById("game-canvas")
 const ctx = canvas.getContext("2d")


let newView = new GameView(ctx);
