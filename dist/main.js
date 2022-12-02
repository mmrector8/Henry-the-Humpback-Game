/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n\nconst canvas = document.getElementById(\"game-canvas\");\nconst ctx = canvas.getContext(\"2d\");\nlet game1 = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\ngame1.incrementScore();\ngame1.timer = 0;\nconsole.log(game1.timeOut());\nconsole.log(game1.score);\nconsole.log(game1.gameOver());\nconsole.log(game1.winner());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBcUM7QUFFcEMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDckQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFHcEMsSUFBSUMsS0FBSyxHQUFHLElBQUlOLHdEQUFJLENBQUNJLEdBQUcsQ0FBQztBQUN6QkUsS0FBSyxDQUFDQyxjQUFjLEVBQUU7QUFDdEJELEtBQUssQ0FBQ0UsS0FBSyxHQUFHLENBQUM7QUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUssQ0FBQ0ssT0FBTyxFQUFFLENBQUM7QUFDNUJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLENBQUNNLEtBQUssQ0FBQztBQUN4QkgsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUssQ0FBQ08sUUFBUSxFQUFFLENBQUM7QUFDN0JKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLENBQUNRLE1BQU0sRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVucnlodW1wYmFjay8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZS5qc1wiO1xuXG4gY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKVxuIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcblxuXG5sZXQgZ2FtZTEgPSBuZXcgR2FtZShjdHgpO1xuZ2FtZTEuaW5jcmVtZW50U2NvcmUoKVxuZ2FtZTEudGltZXIgPSAwO1xuY29uc29sZS5sb2coZ2FtZTEudGltZU91dCgpKVxuY29uc29sZS5sb2coZ2FtZTEuc2NvcmUpXG5jb25zb2xlLmxvZyhnYW1lMS5nYW1lT3ZlcigpKVxuY29uc29sZS5sb2coZ2FtZTEud2lubmVyKCkpXG4iXSwibmFtZXMiOlsiR2FtZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2FtZTEiLCJpbmNyZW1lbnRTY29yZSIsInRpbWVyIiwiY29uc29sZSIsImxvZyIsInRpbWVPdXQiLCJzY29yZSIsImdhbWVPdmVyIiwid2lubmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\nconst CANVAS_WIDTH = 800;\nconst CANVAS_HEIGHT = 600;\nconst henry = new Image();\nhenry.src = './images/henrysprite.png';\nlet henryWidth = 188;\nlet henryHeight = 55;\nlet frameX = 1;\nlet gameFrame = 0;\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.score = 0;\n    this.timer = 200;\n    this.winningScore = 100;\n    this.lives = 3;\n    this.setUpGame();\n  }\n  animate() {\n    this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n    this.ctx.fillStyle = \"#2B65EC\";\n    this.ctx.fillRect(0, 0, 800, 600);\n    this.ctx.drawImage(henry, frameX * henryWidth, henryHeight, henryWidth, henryHeight, 600, 250, henryWidth, henryHeight);\n    if (gameFrame % 20 === 0) {\n      if (frameX < 4) {\n        frameX++;\n      }\n      if (frameX === 4) {\n        frameX = 0;\n      }\n    }\n    gameFrame++;\n    requestAnimationFrame(this.animate.bind(this));\n  }\n  setUpGame() {\n    this.animate();\n  }\n  winner() {\n    if (this.gameOver() === true) {\n      if (this.score >= this.winningScore && !this.threeLivesLost()) {\n        console.log(\"Congratulations, you won!\");\n      } else {\n        console.log(\"oh no, try again!\");\n      }\n    }\n  }\n  gameOver() {\n    if (this.timeOut() || this.threeLivesLost()) return true;\n  }\n  timeOut() {\n    if (this.timer === 0) return true;\n    return false;\n  }\n  threeLivesLost() {\n    if (this.lives > 0) return false;\n    return true;\n  }\n  incrementScore() {\n    this.score += 100;\n  }\n  loseLife() {\n    this.lives -= 1;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDaEIsS0FBSyxJQUFHLENBQUM7RUFDbEI7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbnJ5aHVtcGJhY2svLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBDQU5WQVNfV0lEVEggPSA4MDA7XG5jb25zdCBDQU5WQVNfSEVJR0hUID0gNjAwO1xuY29uc3QgaGVucnkgPSBuZXcgSW1hZ2UoKTtcbmhlbnJ5LnNyYyA9ICcuL2ltYWdlcy9oZW5yeXNwcml0ZS5wbmcnXG5cbmxldCBoZW5yeVdpZHRoID0gMTg4O1xubGV0IGhlbnJ5SGVpZ2h0ID0gNTU7XG5sZXQgZnJhbWVYID0gMTtcbmxldCBnYW1lRnJhbWUgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMudGltZXIgPSAyMDBcbiAgICAgICAgdGhpcy53aW5uaW5nU2NvcmUgPSAxMDA7XG4gICAgICAgIHRoaXMubGl2ZXMgPSAzXG4gICAgICAgIHRoaXMuc2V0VXBHYW1lKClcbiAgICB9XG5cbiAgICBhbmltYXRlKCl7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMyQjY1RUNcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgODAwLCA2MDApO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGVucnksIChmcmFtZVggKiBoZW5yeVdpZHRoKSwgKGhlbnJ5SGVpZ2h0KSwgKGhlbnJ5V2lkdGgpLCAoaGVucnlIZWlnaHQpLCA2MDAsIDI1MCwgaGVucnlXaWR0aCwgaGVucnlIZWlnaHQpXG5cbiAgICAgICAgaWYgKGdhbWVGcmFtZSAlIDIwID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoZnJhbWVYIDwgNCkge1xuICAgICAgICAgICAgICAgIGZyYW1lWCsrXG4gICAgICAgICAgICB9IGlmIChmcmFtZVggPT09IDQpIHtcbiAgICAgICAgICAgICAgICBmcmFtZVggPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZUZyYW1lKytcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgXG4gICAgc2V0VXBHYW1lKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGUoKVxuICAgIH1cblxuICAgIHdpbm5lcigpe1xuICAgICAgICBpZiAodGhpcy5nYW1lT3ZlcigpID09PSB0cnVlKXtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjb3JlID49IHRoaXMud2lubmluZ1Njb3JlICYmICF0aGlzLnRocmVlTGl2ZXNMb3N0KCkpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29uZ3JhdHVsYXRpb25zLCB5b3Ugd29uIVwiKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvaCBubywgdHJ5IGFnYWluIVwiKVxuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICBpZiAodGhpcy50aW1lT3V0KCkgfHwgdGhpcy50aHJlZUxpdmVzTG9zdCgpKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aW1lT3V0KCl7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyID09PSAwKSByZXR1cm4gdHJ1ZVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aHJlZUxpdmVzTG9zdCgpe1xuICAgICAgICBpZiAodGhpcy5saXZlcyA+IDApIHJldHVybiBmYWxzZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGluY3JlbWVudFNjb3JlKCl7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTAwO1xuICAgIH1cblxuICAgIGxvc2VMaWZlKCl7XG4gICAgICAgIHRoaXMubGl2ZXMgLT0xXG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJoZW5yeSIsIkltYWdlIiwic3JjIiwiaGVucnlXaWR0aCIsImhlbnJ5SGVpZ2h0IiwiZnJhbWVYIiwiZ2FtZUZyYW1lIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY3R4Iiwic2NvcmUiLCJ0aW1lciIsIndpbm5pbmdTY29yZSIsImxpdmVzIiwic2V0VXBHYW1lIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsIndpbm5lciIsImdhbWVPdmVyIiwidGhyZWVMaXZlc0xvc3QiLCJjb25zb2xlIiwibG9nIiwidGltZU91dCIsImluY3JlbWVudFNjb3JlIiwibG9zZUxpZmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZW5yeWh1bXBiYWNrLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;