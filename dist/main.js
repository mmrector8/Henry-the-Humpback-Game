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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_henry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/henry.js */ \"./src/scripts/henry.js\");\n\n\nconst canvas = document.getElementById(\"game-canvas\");\nconst ctx = canvas.getContext(\"2d\");\nlet game1 = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\nlet newHenry = new _scripts_henry_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](800, 600, ctx);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXFDO0FBQ0M7QUFFckMsTUFBTUUsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDckQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFHcEMsSUFBSUMsS0FBSyxHQUFHLElBQUlQLHdEQUFJLENBQUNLLEdBQUcsQ0FBQztBQUN6QixJQUFJRyxRQUFRLEdBQUcsSUFBSVAseURBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFSSxHQUFHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZW5yeWh1bXBiYWNrLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lLmpzXCI7XG5pbXBvcnQgSGVucnkgZnJvbSBcIi4vc2NyaXB0cy9oZW5yeS5qc1wiXG5cbiBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpXG4gY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxuXG5cbmxldCBnYW1lMSA9IG5ldyBHYW1lKGN0eCk7XG5sZXQgbmV3SGVucnkgPSBuZXcgSGVucnkoODAwLCA2MDAsIGN0eCkiXSwibmFtZXMiOlsiR2FtZSIsIkhlbnJ5IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lMSIsIm5ld0hlbnJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\nconst CANVAS_WIDTH = 800;\nconst CANVAS_HEIGHT = 600;\nconst henry = new Image();\nhenry.src = './images/henrysprite.png';\nlet henryWidth = 188;\nlet henryHeight = 55;\nlet frameX = 1;\nlet gameFrame = 0;\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.score = 0;\n    this.timer = 200;\n    this.winningScore = 100;\n    this.lives = 3;\n    this.setUpGame();\n  }\n  animateBackground() {\n    this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n    this.ctx.fillStyle = \"#2B65EC\";\n    this.ctx.fillRect(0, 0, 800, 600);\n  }\n  setUpGame() {\n    this.animateBackground();\n  }\n  winner() {\n    if (this.gameOver()) {\n      if (this.score >= this.winningScore && !this.threeLivesLost()) {\n        console.log(\"Congratulations, you won!\");\n      } else {\n        console.log(\"oh no, try again!\");\n      }\n    }\n  }\n  gameOver() {\n    if (this.timeOut() || this.threeLivesLost()) return true;\n  }\n  timeOut() {\n    if (this.timer === 0) return true;\n    return false;\n  }\n  threeLivesLost() {\n    if (this.lives > 0) return false;\n    return true;\n  }\n  incrementScore() {\n    this.score += 100;\n  }\n  loseLife() {\n    this.lives -= 1;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNQSxZQUFZLEdBQUcsR0FBRztBQUN4QixNQUFNQyxhQUFhLEdBQUcsR0FBRztBQUN6QixNQUFNQyxLQUFLLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0FBQ3pCRCxLQUFLLENBQUNFLEdBQUcsR0FBRywwQkFBMEI7QUFFdEMsSUFBSUMsVUFBVSxHQUFHLEdBQUc7QUFDcEIsSUFBSUMsV0FBVyxHQUFHLEVBQUU7QUFDcEIsSUFBSUMsTUFBTSxHQUFHLENBQUM7QUFDZCxJQUFJQyxTQUFTLEdBQUcsQ0FBQztBQUVGLE1BQU1DLElBQUksQ0FBQztFQUN0QkMsV0FBVyxDQUFDQyxHQUFHLEVBQUM7SUFDWixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQUM7SUFDZCxJQUFJLENBQUNDLEtBQUssR0FBRyxHQUFHO0lBQ2hCLElBQUksQ0FBQ0MsWUFBWSxHQUFHLEdBQUc7SUFDdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUNkLElBQUksQ0FBQ0MsU0FBUyxFQUFFO0VBQ3BCO0VBRUFDLGlCQUFpQixHQUFFO0lBQ2YsSUFBSSxDQUFDTixHQUFHLENBQUNPLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFbEIsWUFBWSxFQUFFQyxhQUFhLENBQUM7SUFDckQsSUFBSSxDQUFDVSxHQUFHLENBQUNRLFNBQVMsR0FBRyxTQUFTO0lBQzlCLElBQUksQ0FBQ1IsR0FBRyxDQUFDUyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ3JDO0VBRUFKLFNBQVMsR0FBRztJQUNSLElBQUksQ0FBQ0MsaUJBQWlCLEVBQUU7RUFDNUI7RUFFQUksTUFBTSxHQUFFO0lBQ0osSUFBSSxJQUFJLENBQUNDLFFBQVEsRUFBRSxFQUFDO01BQ2hCLElBQUksSUFBSSxDQUFDVixLQUFLLElBQUksSUFBSSxDQUFDRSxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUNTLGNBQWMsRUFBRSxFQUFDO1FBQzFEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQztNQUM1QyxDQUFDLE1BQUk7UUFDREQsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7TUFDcEM7SUFDSjtFQUNKO0VBRUFILFFBQVEsR0FBRTtJQUNOLElBQUksSUFBSSxDQUFDSSxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUNILGNBQWMsRUFBRSxFQUFFLE9BQU8sSUFBSTtFQUM1RDtFQUVBRyxPQUFPLEdBQUU7SUFDTCxJQUFJLElBQUksQ0FBQ2IsS0FBSyxLQUFLLENBQUMsRUFBRSxPQUFPLElBQUk7SUFDakMsT0FBTyxLQUFLO0VBQ2hCO0VBRUFVLGNBQWMsR0FBRTtJQUNaLElBQUksSUFBSSxDQUFDUixLQUFLLEdBQUcsQ0FBQyxFQUFFLE9BQU8sS0FBSztJQUNoQyxPQUFPLElBQUk7RUFDZjtFQUVBWSxjQUFjLEdBQUU7SUFDWixJQUFJLENBQUNmLEtBQUssSUFBSSxHQUFHO0VBQ3JCO0VBRUFnQixRQUFRLEdBQUU7SUFDTixJQUFJLENBQUNiLEtBQUssSUFBRyxDQUFDO0VBQ2xCO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZW5yeWh1bXBiYWNrLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgQ0FOVkFTX1dJRFRIID0gODAwO1xuY29uc3QgQ0FOVkFTX0hFSUdIVCA9IDYwMDtcbmNvbnN0IGhlbnJ5ID0gbmV3IEltYWdlKCk7XG5oZW5yeS5zcmMgPSAnLi9pbWFnZXMvaGVucnlzcHJpdGUucG5nJ1xuXG5sZXQgaGVucnlXaWR0aCA9IDE4ODtcbmxldCBoZW5yeUhlaWdodCA9IDU1O1xubGV0IGZyYW1lWCA9IDE7XG5sZXQgZ2FtZUZyYW1lID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4KXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnRpbWVyID0gMjAwXG4gICAgICAgIHRoaXMud2lubmluZ1Njb3JlID0gMTAwO1xuICAgICAgICB0aGlzLmxpdmVzID0gM1xuICAgICAgICB0aGlzLnNldFVwR2FtZSgpXG4gICAgfVxuXG4gICAgYW5pbWF0ZUJhY2tncm91bmQoKXtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzJCNjVFQ1wiO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCA4MDAsIDYwMCk7XG4gICAgfVxuICAgIFxuICAgIHNldFVwR2FtZSgpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlQmFja2dyb3VuZCgpXG4gICAgfVxuXG4gICAgd2lubmVyKCl7XG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKCkpe1xuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPj0gdGhpcy53aW5uaW5nU2NvcmUgJiYgIXRoaXMudGhyZWVMaXZlc0xvc3QoKSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25ncmF0dWxhdGlvbnMsIHlvdSB3b24hXCIpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9oIG5vLCB0cnkgYWdhaW4hXCIpXG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIGlmICh0aGlzLnRpbWVPdXQoKSB8fCB0aGlzLnRocmVlTGl2ZXNMb3N0KCkpIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRpbWVPdXQoKXtcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPT09IDApIHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRocmVlTGl2ZXNMb3N0KCl7XG4gICAgICAgIGlmICh0aGlzLmxpdmVzID4gMCkgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgaW5jcmVtZW50U2NvcmUoKXtcbiAgICAgICAgdGhpcy5zY29yZSArPSAxMDA7XG4gICAgfVxuXG4gICAgbG9zZUxpZmUoKXtcbiAgICAgICAgdGhpcy5saXZlcyAtPTFcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsImhlbnJ5IiwiSW1hZ2UiLCJzcmMiLCJoZW5yeVdpZHRoIiwiaGVucnlIZWlnaHQiLCJmcmFtZVgiLCJnYW1lRnJhbWUiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjdHgiLCJzY29yZSIsInRpbWVyIiwid2lubmluZ1Njb3JlIiwibGl2ZXMiLCJzZXRVcEdhbWUiLCJhbmltYXRlQmFja2dyb3VuZCIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2lubmVyIiwiZ2FtZU92ZXIiLCJ0aHJlZUxpdmVzTG9zdCIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lT3V0IiwiaW5jcmVtZW50U2NvcmUiLCJsb3NlTGlmZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/henry.js":
/*!******************************!*\
  !*** ./src/scripts/henry.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Henry; }\n/* harmony export */ });\nconst CANVAS_WIDTH = 800;\nconst CANVAS_HEIGHT = 600;\nconst henry = new Image();\nhenry.src = './images/henrysprite.png';\nlet henryWidth = 188;\nlet henryHeight = 55;\nlet frameX = 1;\nlet gameFrame = 0;\nclass Henry {\n  constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx) {\n    this.name = \"Henry\";\n    this.ctx = ctx;\n    this.CANVAS_WIDTH = CANVAS_WIDTH;\n    this.CANVAS_HEIGHT = CANVAS_HEIGHT;\n    this.width = 200;\n    this.height = 200;\n    this.x = 0;\n    this.y = 0;\n    this.speed = 0;\n    this.animateHenry();\n  }\n  animateHenry() {\n    this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n    this.ctx.fillRect(0, 0, 800, 600);\n    this.ctx.drawImage(henry, frameX * henryWidth, henryHeight, henryWidth, henryHeight, 600, 250, henryWidth, henryHeight);\n    if (gameFrame % 20 === 0) {\n      if (frameX < 4) {\n        frameX++;\n      }\n      if (frameX === 4) {\n        frameX = 0;\n      }\n    }\n    gameFrame++;\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZW5yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTUEsWUFBWSxHQUFHLEdBQUc7QUFDeEIsTUFBTUMsYUFBYSxHQUFHLEdBQUc7QUFDekIsTUFBTUMsS0FBSyxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUN6QkQsS0FBSyxDQUFDRSxHQUFHLEdBQUcsMEJBQTBCO0FBRXRDLElBQUlDLFVBQVUsR0FBRyxHQUFHO0FBQ3BCLElBQUlDLFdBQVcsR0FBRyxFQUFFO0FBQ3BCLElBQUlDLE1BQU0sR0FBRyxDQUFDO0FBQ2QsSUFBSUMsU0FBUyxHQUFHLENBQUM7QUFFRixNQUFNQyxLQUFLLENBQUM7RUFDdkJDLFdBQVcsQ0FBQ1YsWUFBWSxFQUFFQyxhQUFhLEVBQUVVLEdBQUcsRUFBQztJQUN6QyxJQUFJLENBQUNDLElBQUksR0FBRyxPQUFPO0lBQ25CLElBQUksQ0FBQ0QsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDWCxZQUFZLEdBQUdBLFlBQVk7SUFDaEMsSUFBSSxDQUFDQyxhQUFhLEdBQUdBLGFBQWE7SUFDbEMsSUFBSSxDQUFDWSxLQUFLLEdBQUcsR0FBRztJQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO0lBQ2pCLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBRSxDQUFDO0lBQ1QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUNkLElBQUksQ0FBQ0MsWUFBWSxFQUFFO0VBQ3ZCO0VBRUFBLFlBQVksR0FBRztJQUNYLElBQUksQ0FBQ1AsR0FBRyxDQUFDUSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRW5CLFlBQVksRUFBRUMsYUFBYSxDQUFDO0lBQ3JELElBQUksQ0FBQ1UsR0FBRyxDQUFDUyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ2pDLElBQUksQ0FBQ1QsR0FBRyxDQUFDVSxTQUFTLENBQUNuQixLQUFLLEVBQUdLLE1BQU0sR0FBR0YsVUFBVSxFQUFJQyxXQUFXLEVBQUlELFVBQVUsRUFBSUMsV0FBVyxFQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUVELFVBQVUsRUFBRUMsV0FBVyxDQUFDO0lBRS9ILElBQUlFLFNBQVMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFO01BQ3RCLElBQUlELE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDWkEsTUFBTSxFQUFFO01BQ1o7TUFBRSxJQUFJQSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2hCQSxNQUFNLEdBQUcsQ0FBQztNQUNkO0lBQ0o7SUFDQUMsU0FBUyxFQUFFO0lBQ1hjLHFCQUFxQixDQUFDLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbEQ7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbnJ5aHVtcGJhY2svLi9zcmMvc2NyaXB0cy9oZW5yeS5qcz8yNWU2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgQ0FOVkFTX1dJRFRIID0gODAwO1xuY29uc3QgQ0FOVkFTX0hFSUdIVCA9IDYwMDtcbmNvbnN0IGhlbnJ5ID0gbmV3IEltYWdlKCk7XG5oZW5yeS5zcmMgPSAnLi9pbWFnZXMvaGVucnlzcHJpdGUucG5nJ1xuXG5sZXQgaGVucnlXaWR0aCA9IDE4ODtcbmxldCBoZW5yeUhlaWdodCA9IDU1O1xubGV0IGZyYW1lWCA9IDE7XG5sZXQgZ2FtZUZyYW1lID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVucnkge1xuICAgIGNvbnN0cnVjdG9yKENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCwgY3R4KXtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJIZW5yeVwiO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5DQU5WQVNfV0lEVEggPSBDQU5WQVNfV0lEVEg7XG4gICAgICAgIHRoaXMuQ0FOVkFTX0hFSUdIVCA9IENBTlZBU19IRUlHSFQ7XG4gICAgICAgIHRoaXMud2lkdGggPSAyMDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMjAwO1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPTA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmFuaW1hdGVIZW5yeSgpXG4gICAgfVxuXG4gICAgYW5pbWF0ZUhlbnJ5KCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgODAwLCA2MDApO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGVucnksIChmcmFtZVggKiBoZW5yeVdpZHRoKSwgKGhlbnJ5SGVpZ2h0KSwgKGhlbnJ5V2lkdGgpLCAoaGVucnlIZWlnaHQpLCA2MDAsIDI1MCwgaGVucnlXaWR0aCwgaGVucnlIZWlnaHQpXG5cbiAgICAgICAgaWYgKGdhbWVGcmFtZSAlIDIwID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoZnJhbWVYIDwgNCkge1xuICAgICAgICAgICAgICAgIGZyYW1lWCsrXG4gICAgICAgICAgICB9IGlmIChmcmFtZVggPT09IDQpIHtcbiAgICAgICAgICAgICAgICBmcmFtZVggPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZUZyYW1lKytcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJoZW5yeSIsIkltYWdlIiwic3JjIiwiaGVucnlXaWR0aCIsImhlbnJ5SGVpZ2h0IiwiZnJhbWVYIiwiZ2FtZUZyYW1lIiwiSGVucnkiLCJjb25zdHJ1Y3RvciIsImN0eCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5Iiwic3BlZWQiLCJhbmltYXRlSGVucnkiLCJjbGVhclJlY3QiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGUiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/henry.js\n");

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