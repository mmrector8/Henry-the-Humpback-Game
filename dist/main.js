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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n\nconst canvas = document.getElementById(\"game-canvas\");\nconst ctx = canvas.getContext(\"2d\");\nlet game1 = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n\n// // let game1 = new Game(ctx);\n// const CANVAS_WIDTH = 800;\n// const CANVAS_HEIGHT = 600;\n\n// // const henry = new Image();\n// // henry.src = './images/henrysprite.png'\n\n// let henryWidth = 188;\n// let henryHeight = 55;\n// let frameX = 1; \n// let gameFrame = 0;\n\n// function animate(){\n//     ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)\n//     ctx.fillRect(0,0,800,600);\n//     ctx.fillStyle = \"#2B65EC\"\n\n//     ctx.drawImage(henry, (frameX * henryWidth), (henryHeight), (henryWidth), (henryHeight), 600, 250, henryWidth, henryHeight)\n//     if(gameFrame % 20 === 0){\n//         if (frameX < 4){\n//             frameX++\n//         }if (frameX === 4){\n//             frameX = 0\n//         } \n//     }\n//     gameFrame++\n//     requestAnimationFrame(animate);\n// }\n// animate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBcUM7QUFFcEMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDckQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDcEMsSUFBSUMsS0FBSyxHQUFHLElBQUlOLHdEQUFJLENBQUNJLEdBQUcsQ0FBQzs7QUFHekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVucnlodW1wYmFjay8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZS5qc1wiO1xuXG4gY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKVxuIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcbmxldCBnYW1lMSA9IG5ldyBHYW1lKGN0eCk7XG5cblxuLy8gLy8gbGV0IGdhbWUxID0gbmV3IEdhbWUoY3R4KTtcbi8vIGNvbnN0IENBTlZBU19XSURUSCA9IDgwMDtcbi8vIGNvbnN0IENBTlZBU19IRUlHSFQgPSA2MDA7XG5cbi8vIC8vIGNvbnN0IGhlbnJ5ID0gbmV3IEltYWdlKCk7XG4vLyAvLyBoZW5yeS5zcmMgPSAnLi9pbWFnZXMvaGVucnlzcHJpdGUucG5nJ1xuXG4vLyBsZXQgaGVucnlXaWR0aCA9IDE4ODtcbi8vIGxldCBoZW5yeUhlaWdodCA9IDU1O1xuLy8gbGV0IGZyYW1lWCA9IDE7IFxuLy8gbGV0IGdhbWVGcmFtZSA9IDA7XG5cblxuXG4vLyBmdW5jdGlvbiBhbmltYXRlKCl7XG4vLyAgICAgY3R4LmNsZWFyUmVjdCgwLDAsIENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVClcbi8vICAgICBjdHguZmlsbFJlY3QoMCwwLDgwMCw2MDApO1xuLy8gICAgIGN0eC5maWxsU3R5bGUgPSBcIiMyQjY1RUNcIlxuICAgIFxuLy8gICAgIGN0eC5kcmF3SW1hZ2UoaGVucnksIChmcmFtZVggKiBoZW5yeVdpZHRoKSwgKGhlbnJ5SGVpZ2h0KSwgKGhlbnJ5V2lkdGgpLCAoaGVucnlIZWlnaHQpLCA2MDAsIDI1MCwgaGVucnlXaWR0aCwgaGVucnlIZWlnaHQpXG4vLyAgICAgaWYoZ2FtZUZyYW1lICUgMjAgPT09IDApe1xuLy8gICAgICAgICBpZiAoZnJhbWVYIDwgNCl7XG4vLyAgICAgICAgICAgICBmcmFtZVgrK1xuLy8gICAgICAgICB9aWYgKGZyYW1lWCA9PT0gNCl7XG4vLyAgICAgICAgICAgICBmcmFtZVggPSAwXG4vLyAgICAgICAgIH0gXG4vLyAgICAgfVxuLy8gICAgIGdhbWVGcmFtZSsrXG4vLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuLy8gfVxuLy8gYW5pbWF0ZSgpOyJdLCJuYW1lcyI6WyJHYW1lIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\nconst CANVAS_WIDTH = 800;\nconst CANVAS_HEIGHT = 600;\nconst henry = new Image();\nhenry.src = './images/henrysprite.png';\nlet henryWidth = 188;\nlet henryHeight = 55;\nlet frameX = 1;\nlet gameFrame = 0;\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.score = 0;\n    this.timer = 200;\n    this.winningScore = 100;\n    this.lives = 3;\n    this.setUpGame();\n  }\n  animate() {\n    this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n    this.ctx.fillStyle = \"#2B65EC\";\n    this.ctx.fillRect(0, 0, 800, 600);\n    this.ctx.drawImage(henry, frameX * henryWidth, henryHeight, henryWidth, henryHeight, 600, 250, henryWidth, henryHeight);\n    if (gameFrame % 20 === 0) {\n      if (frameX < 4) {\n        frameX++;\n      }\n      if (frameX === 4) {\n        frameX = 0;\n      }\n    }\n    gameFrame++;\n    requestAnimationFrame(this.animate.bind(this));\n  }\n  setUpGame() {\n    this.animate();\n  }\n  winner() {\n    if (this.gameOver() === true) {\n      if (this.score === this.winningScore && this.threeLivesLost() === false) {\n        console.log(\"Congratulations, you won!\");\n      } else {\n        console.log(\"oh no, try again!\");\n      }\n    }\n  }\n  gameOver() {\n    if (this.timeOut() || this.threeLivesLost()) return true;\n  }\n  timeOut() {\n    if (this.timer === 0) return true;\n    return false;\n  }\n  threeLivesLost() {\n    if (this.lives > 0) return false;\n    return true;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNQSxZQUFZLEdBQUcsR0FBRztBQUN4QixNQUFNQyxhQUFhLEdBQUcsR0FBRztBQUN6QixNQUFNQyxLQUFLLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0FBQ3pCRCxLQUFLLENBQUNFLEdBQUcsR0FBRywwQkFBMEI7QUFFdEMsSUFBSUMsVUFBVSxHQUFHLEdBQUc7QUFDcEIsSUFBSUMsV0FBVyxHQUFHLEVBQUU7QUFDcEIsSUFBSUMsTUFBTSxHQUFHLENBQUM7QUFDZCxJQUFJQyxTQUFTLEdBQUcsQ0FBQztBQUVGLE1BQU1DLElBQUksQ0FBQztFQUN0QkMsV0FBVyxDQUFDQyxHQUFHLEVBQUM7SUFDWixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQUM7SUFDZCxJQUFJLENBQUNDLEtBQUssR0FBRyxHQUFHO0lBQ2hCLElBQUksQ0FBQ0MsWUFBWSxHQUFHLEdBQUc7SUFDdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUNkLElBQUksQ0FBQ0MsU0FBUyxFQUFFO0VBQ3BCO0VBRUFDLE9BQU8sR0FBRTtJQUNMLElBQUksQ0FBQ04sR0FBRyxDQUFDTyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWxCLFlBQVksRUFBRUMsYUFBYSxDQUFDO0lBQ3JELElBQUksQ0FBQ1UsR0FBRyxDQUFDUSxTQUFTLEdBQUcsU0FBUztJQUM5QixJQUFJLENBQUNSLEdBQUcsQ0FBQ1MsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNqQyxJQUFJLENBQUNULEdBQUcsQ0FBQ1UsU0FBUyxDQUFDbkIsS0FBSyxFQUFHSyxNQUFNLEdBQUdGLFVBQVUsRUFBSUMsV0FBVyxFQUFJRCxVQUFVLEVBQUlDLFdBQVcsRUFBRyxHQUFHLEVBQUUsR0FBRyxFQUFFRCxVQUFVLEVBQUVDLFdBQVcsQ0FBQztJQUUvSCxJQUFJRSxTQUFTLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRTtNQUN0QixJQUFJRCxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ1pBLE1BQU0sRUFBRTtNQUNaO01BQUUsSUFBSUEsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNoQkEsTUFBTSxHQUFHLENBQUM7TUFDZDtJQUNKO0lBQ0FDLFNBQVMsRUFBRTtJQUNYYyxxQkFBcUIsQ0FBQyxJQUFJLENBQUNMLE9BQU8sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ2xEO0VBSUFQLFNBQVMsR0FBRztJQUNSLElBQUksQ0FBQ0MsT0FBTyxFQUFFO0VBQ2xCO0VBRUFPLE1BQU0sR0FBRTtJQUNKLElBQUksSUFBSSxDQUFDQyxRQUFRLEVBQUUsS0FBSyxJQUFJLEVBQUM7TUFDekIsSUFBSSxJQUFJLENBQUNiLEtBQUssS0FBSyxJQUFJLENBQUNFLFlBQVksSUFBSSxJQUFJLENBQUNZLGNBQWMsRUFBRSxLQUFLLEtBQUssRUFBQztRQUNwRUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7TUFDNUMsQ0FBQyxNQUFJO1FBQ0RELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO01BQ3BDO0lBQ0o7RUFDSjtFQUVBSCxRQUFRLEdBQUU7SUFDTixJQUFJLElBQUksQ0FBQ0ksT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDSCxjQUFjLEVBQUUsRUFBRSxPQUFPLElBQUk7RUFDNUQ7RUFFQUcsT0FBTyxHQUFFO0lBQ0wsSUFBSSxJQUFJLENBQUNoQixLQUFLLEtBQUssQ0FBQyxFQUFFLE9BQU8sSUFBSTtJQUNqQyxPQUFPLEtBQUs7RUFDaEI7RUFFQWEsY0FBYyxHQUFFO0lBQ1osSUFBSSxJQUFJLENBQUNYLEtBQUssR0FBRyxDQUFDLEVBQUUsT0FBTyxLQUFLO0lBQ2hDLE9BQU8sSUFBSTtFQUNmO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZW5yeWh1bXBiYWNrLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgQ0FOVkFTX1dJRFRIID0gODAwO1xuY29uc3QgQ0FOVkFTX0hFSUdIVCA9IDYwMDtcbmNvbnN0IGhlbnJ5ID0gbmV3IEltYWdlKCk7XG5oZW5yeS5zcmMgPSAnLi9pbWFnZXMvaGVucnlzcHJpdGUucG5nJ1xuXG5sZXQgaGVucnlXaWR0aCA9IDE4ODtcbmxldCBoZW5yeUhlaWdodCA9IDU1O1xubGV0IGZyYW1lWCA9IDE7XG5sZXQgZ2FtZUZyYW1lID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4KXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnRpbWVyID0gMjAwXG4gICAgICAgIHRoaXMud2lubmluZ1Njb3JlID0gMTAwO1xuICAgICAgICB0aGlzLmxpdmVzID0gM1xuICAgICAgICB0aGlzLnNldFVwR2FtZSgpXG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpe1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMkI2NUVDXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIDgwMCwgNjAwKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGhlbnJ5LCAoZnJhbWVYICogaGVucnlXaWR0aCksIChoZW5yeUhlaWdodCksIChoZW5yeVdpZHRoKSwgKGhlbnJ5SGVpZ2h0KSwgNjAwLCAyNTAsIGhlbnJ5V2lkdGgsIGhlbnJ5SGVpZ2h0KVxuXG4gICAgICAgIGlmIChnYW1lRnJhbWUgJSAyMCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGZyYW1lWCA8IDQpIHtcbiAgICAgICAgICAgICAgICBmcmFtZVgrK1xuICAgICAgICAgICAgfSBpZiAoZnJhbWVYID09PSA0KSB7XG4gICAgICAgICAgICAgICAgZnJhbWVYID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdhbWVGcmFtZSsrXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG5cbiAgICBcbiAgICBzZXRVcEdhbWUoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpXG4gICAgfVxuXG4gICAgd2lubmVyKCl7XG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKCkgPT09IHRydWUpe1xuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPT09IHRoaXMud2lubmluZ1Njb3JlICYmIHRoaXMudGhyZWVMaXZlc0xvc3QoKSA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29uZ3JhdHVsYXRpb25zLCB5b3Ugd29uIVwiKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvaCBubywgdHJ5IGFnYWluIVwiKVxuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICBpZiAodGhpcy50aW1lT3V0KCkgfHwgdGhpcy50aHJlZUxpdmVzTG9zdCgpKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aW1lT3V0KCl7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyID09PSAwKSByZXR1cm4gdHJ1ZVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aHJlZUxpdmVzTG9zdCgpe1xuICAgICAgICBpZiAodGhpcy5saXZlcyA+IDApIHJldHVybiBmYWxzZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJDQU5WQVNfV0lEVEgiLCJDQU5WQVNfSEVJR0hUIiwiaGVucnkiLCJJbWFnZSIsInNyYyIsImhlbnJ5V2lkdGgiLCJoZW5yeUhlaWdodCIsImZyYW1lWCIsImdhbWVGcmFtZSIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImN0eCIsInNjb3JlIiwidGltZXIiLCJ3aW5uaW5nU2NvcmUiLCJsaXZlcyIsInNldFVwR2FtZSIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJ3aW5uZXIiLCJnYW1lT3ZlciIsInRocmVlTGl2ZXNMb3N0IiwiY29uc29sZSIsImxvZyIsInRpbWVPdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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