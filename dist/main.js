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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n\nconst canvas = document.getElementById(\"game-canvas\");\nconst ctx = canvas.getContext(\"2d\");\nlet game1 = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBcUM7QUFFcEMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDckQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFHcEMsSUFBSUMsS0FBSyxHQUFHLElBQUlOLHdEQUFJLENBQUNJLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbnJ5aHVtcGJhY2svLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWUuanNcIjtcblxuIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIilcbiBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG5cblxubGV0IGdhbWUxID0gbmV3IEdhbWUoY3R4KTtcbiJdLCJuYW1lcyI6WyJHYW1lIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _henry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./henry.js */ \"./src/scripts/henry.js\");\n//import Henry from \"./scripts/henry.js\"\n\nconst CANVAS_WIDTH = 800;\nconst CANVAS_HEIGHT = 600;\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.score = 0;\n    this.timer = 200;\n    this.winningScore = 100;\n    this.lives = 3;\n    this.setUpGame();\n    this.henry = new _henry_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](CANVAS_WIDTH, CANVAS_HEIGHT, ctx);\n  }\n  animateBackground() {\n    this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n    this.ctx.fillStyle = \"#2B65EC\";\n    this.ctx.fillRect(0, 0, 800, 600);\n  }\n  setUpGame() {\n    this.animateBackground();\n  }\n  winner() {\n    if (this.gameOver()) {\n      if (this.score >= this.winningScore && !this.threeLivesLost()) {\n        console.log(\"Congratulations, you won!\");\n      } else {\n        console.log(\"oh no, try again!\");\n      }\n    }\n  }\n  gameOver() {\n    if (this.timeOut() || this.threeLivesLost()) return true;\n  }\n  timeOut() {\n    if (this.timer === 0) return true;\n    return false;\n  }\n  threeLivesLost() {\n    if (this.lives > 0) return false;\n    return true;\n  }\n  incrementScore() {\n    this.score += 100;\n  }\n  loseLife() {\n    this.lives -= 1;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDOEI7QUFFOUIsTUFBTUMsWUFBWSxHQUFHLEdBQUc7QUFDeEIsTUFBTUMsYUFBYSxHQUFHLEdBQUc7QUFFVixNQUFNQyxJQUFJLENBQUM7RUFDdEJDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFDO0lBQ1osSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsR0FBRztJQUNoQixJQUFJLENBQUNDLFlBQVksR0FBRyxHQUFHO0lBQ3ZCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQUM7SUFDZCxJQUFJLENBQUNDLFNBQVMsRUFBRTtJQUNoQixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJWCxpREFBSyxDQUFDQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUcsR0FBRyxDQUFDO0VBQzVEO0VBRUFPLGlCQUFpQixHQUFFO0lBQ2YsSUFBSSxDQUFDUCxHQUFHLENBQUNRLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFWixZQUFZLEVBQUVDLGFBQWEsQ0FBQztJQUNyRCxJQUFJLENBQUNHLEdBQUcsQ0FBQ1MsU0FBUyxHQUFHLFNBQVM7SUFDOUIsSUFBSSxDQUFDVCxHQUFHLENBQUNVLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFDckM7RUFFQUwsU0FBUyxHQUFHO0lBQ1IsSUFBSSxDQUFDRSxpQkFBaUIsRUFBRTtFQUM1QjtFQUVBSSxNQUFNLEdBQUU7SUFDSixJQUFJLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEVBQUM7TUFDaEIsSUFBSSxJQUFJLENBQUNYLEtBQUssSUFBSSxJQUFJLENBQUNFLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQ1UsY0FBYyxFQUFFLEVBQUM7UUFDMURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO01BQzVDLENBQUMsTUFBSTtRQUNERCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztNQUNwQztJQUNKO0VBQ0o7RUFFQUgsUUFBUSxHQUFFO0lBQ04sSUFBSSxJQUFJLENBQUNJLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQ0gsY0FBYyxFQUFFLEVBQUUsT0FBTyxJQUFJO0VBQzVEO0VBRUFHLE9BQU8sR0FBRTtJQUNMLElBQUksSUFBSSxDQUFDZCxLQUFLLEtBQUssQ0FBQyxFQUFFLE9BQU8sSUFBSTtJQUNqQyxPQUFPLEtBQUs7RUFDaEI7RUFFQVcsY0FBYyxHQUFFO0lBQ1osSUFBSSxJQUFJLENBQUNULEtBQUssR0FBRyxDQUFDLEVBQUUsT0FBTyxLQUFLO0lBQ2hDLE9BQU8sSUFBSTtFQUNmO0VBRUFhLGNBQWMsR0FBRTtJQUNaLElBQUksQ0FBQ2hCLEtBQUssSUFBSSxHQUFHO0VBQ3JCO0VBRUFpQixRQUFRLEdBQUU7SUFDTixJQUFJLENBQUNkLEtBQUssSUFBRyxDQUFDO0VBQ2xCO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZW5yeWh1bXBiYWNrLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IEhlbnJ5IGZyb20gXCIuL3NjcmlwdHMvaGVucnkuanNcIlxuaW1wb3J0IEhlbnJ5IGZyb20gXCIuL2hlbnJ5LmpzXCJcblxuY29uc3QgQ0FOVkFTX1dJRFRIID0gODAwO1xuY29uc3QgQ0FOVkFTX0hFSUdIVCA9IDYwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4KXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnRpbWVyID0gMjAwXG4gICAgICAgIHRoaXMud2lubmluZ1Njb3JlID0gMTAwO1xuICAgICAgICB0aGlzLmxpdmVzID0gM1xuICAgICAgICB0aGlzLnNldFVwR2FtZSgpXG4gICAgICAgIHRoaXMuaGVucnkgPSBuZXcgSGVucnkoQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hULCBjdHgpXG4gICAgfVxuXG4gICAgYW5pbWF0ZUJhY2tncm91bmQoKXtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzJCNjVFQ1wiO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCA4MDAsIDYwMCk7XG4gICAgfVxuICAgIFxuICAgIHNldFVwR2FtZSgpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlQmFja2dyb3VuZCgpO1xuICAgIH1cblxuICAgIHdpbm5lcigpe1xuICAgICAgICBpZiAodGhpcy5nYW1lT3ZlcigpKXtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjb3JlID49IHRoaXMud2lubmluZ1Njb3JlICYmICF0aGlzLnRocmVlTGl2ZXNMb3N0KCkpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29uZ3JhdHVsYXRpb25zLCB5b3Ugd29uIVwiKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvaCBubywgdHJ5IGFnYWluIVwiKVxuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICBpZiAodGhpcy50aW1lT3V0KCkgfHwgdGhpcy50aHJlZUxpdmVzTG9zdCgpKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aW1lT3V0KCl7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyID09PSAwKSByZXR1cm4gdHJ1ZVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aHJlZUxpdmVzTG9zdCgpe1xuICAgICAgICBpZiAodGhpcy5saXZlcyA+IDApIHJldHVybiBmYWxzZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGluY3JlbWVudFNjb3JlKCl7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTAwO1xuICAgIH1cblxuICAgIGxvc2VMaWZlKCl7XG4gICAgICAgIHRoaXMubGl2ZXMgLT0xXG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIkhlbnJ5IiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImN0eCIsInNjb3JlIiwidGltZXIiLCJ3aW5uaW5nU2NvcmUiLCJsaXZlcyIsInNldFVwR2FtZSIsImhlbnJ5IiwiYW5pbWF0ZUJhY2tncm91bmQiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIndpbm5lciIsImdhbWVPdmVyIiwidGhyZWVMaXZlc0xvc3QiLCJjb25zb2xlIiwibG9nIiwidGltZU91dCIsImluY3JlbWVudFNjb3JlIiwibG9zZUxpZmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/henry.js":
/*!******************************!*\
  !*** ./src/scripts/henry.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Henry; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nconst henry = new Image();\nhenry.src = './images/henrysprite.png';\nlet henryWidth = 188;\nlet henryHeight = 55;\nlet frameX = 1;\nlet gameFrame = 0;\nclass Henry {\n  constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx) {\n    _defineProperty(this, \"move\", void 0);\n    this.name = \"Henry\";\n    this.ctx = ctx;\n    this.CANVAS_WIDTH = CANVAS_WIDTH;\n    this.CANVAS_HEIGHT = CANVAS_HEIGHT;\n    this.width = 200;\n    this.height = 200;\n    this.x = 0;\n    this.y = 0;\n    this.speed = 0;\n    this.animateHenry();\n  }\n  animateHenry() {\n    this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);\n    this.ctx.fillRect(0, 0, 800, 600);\n    this.ctx.drawImage(henry, frameX * henryWidth, henryHeight, henryWidth, henryHeight, 600, 250, henryWidth, henryHeight);\n    if (gameFrame % 20 === 0) {\n      if (frameX < 4) {\n        frameX++;\n      }\n      if (frameX === 4) {\n        frameX = 0;\n      }\n    }\n    gameFrame++;\n    requestAnimationFrame(this.animateHenry.bind(this));\n  }\n  moveHorizontally() {}\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZW5yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUN6QkQsS0FBSyxDQUFDRSxHQUFHLEdBQUcsMEJBQTBCO0FBRXRDLElBQUlDLFVBQVUsR0FBRyxHQUFHO0FBQ3BCLElBQUlDLFdBQVcsR0FBRyxFQUFFO0FBQ3BCLElBQUlDLE1BQU0sR0FBRyxDQUFDO0FBQ2QsSUFBSUMsU0FBUyxHQUFHLENBQUM7QUFFRixNQUFNQyxLQUFLLENBQUM7RUFDdkJDLFdBQVcsQ0FBQ0MsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLEdBQUcsRUFBQztJQUFBO0lBQ3pDLElBQUksQ0FBQ0MsSUFBSSxHQUFHLE9BQU87SUFDbkIsSUFBSSxDQUFDRCxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNGLFlBQVksR0FBR0EsWUFBWTtJQUNoQyxJQUFJLENBQUNDLGFBQWEsR0FBR0EsYUFBYTtJQUNsQyxJQUFJLENBQUNHLEtBQUssR0FBRyxHQUFHO0lBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUc7SUFDakIsSUFBSSxDQUFDQyxDQUFDLEdBQUcsQ0FBQztJQUNWLElBQUksQ0FBQ0MsQ0FBQyxHQUFFLENBQUM7SUFDVCxJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBQ2QsSUFBSSxDQUFDQyxZQUFZLEVBQUU7RUFDdkI7RUFFQUEsWUFBWSxHQUFHO0lBQ1gsSUFBSSxDQUFDUCxHQUFHLENBQUNRLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ1YsWUFBWSxFQUFFLElBQUksQ0FBQ0MsYUFBYSxDQUFDO0lBQy9ELElBQUksQ0FBQ0MsR0FBRyxDQUFDUyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ2pDLElBQUksQ0FBQ1QsR0FBRyxDQUFDVSxTQUFTLENBQUNyQixLQUFLLEVBQUdLLE1BQU0sR0FBR0YsVUFBVSxFQUFJQyxXQUFXLEVBQUlELFVBQVUsRUFBSUMsV0FBVyxFQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUVELFVBQVUsRUFBRUMsV0FBVyxDQUFDO0lBRS9ILElBQUlFLFNBQVMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFO01BQ3RCLElBQUlELE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDWkEsTUFBTSxFQUFFO01BQ1o7TUFBRSxJQUFJQSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2hCQSxNQUFNLEdBQUcsQ0FBQztNQUNkO0lBQ0o7SUFDQUMsU0FBUyxFQUFFO0lBQ1hnQixxQkFBcUIsQ0FBQyxJQUFJLENBQUNKLFlBQVksQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3ZEO0VBRUFDLGdCQUFnQixHQUFFLENBRWxCO0FBR0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZW5yeWh1bXBiYWNrLy4vc3JjL3NjcmlwdHMvaGVucnkuanM/MjVlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZW5yeSA9IG5ldyBJbWFnZSgpO1xuaGVucnkuc3JjID0gJy4vaW1hZ2VzL2hlbnJ5c3ByaXRlLnBuZydcblxubGV0IGhlbnJ5V2lkdGggPSAxODg7XG5sZXQgaGVucnlIZWlnaHQgPSA1NTtcbmxldCBmcmFtZVggPSAxO1xubGV0IGdhbWVGcmFtZSA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbnJ5IHtcbiAgICBjb25zdHJ1Y3RvcihDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQsIGN0eCl7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSGVucnlcIjtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuQ0FOVkFTX1dJRFRIID0gQ0FOVkFTX1dJRFRIO1xuICAgICAgICB0aGlzLkNBTlZBU19IRUlHSFQgPSBDQU5WQVNfSEVJR0hUO1xuICAgICAgICB0aGlzLndpZHRoID0gMjAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDIwMDtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0wO1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5hbmltYXRlSGVucnkoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlSGVucnkoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkNBTlZBU19XSURUSCwgdGhpcy5DQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgODAwLCA2MDApO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGVucnksIChmcmFtZVggKiBoZW5yeVdpZHRoKSwgKGhlbnJ5SGVpZ2h0KSwgKGhlbnJ5V2lkdGgpLCAoaGVucnlIZWlnaHQpLCA2MDAsIDI1MCwgaGVucnlXaWR0aCwgaGVucnlIZWlnaHQpXG5cbiAgICAgICAgaWYgKGdhbWVGcmFtZSAlIDIwID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoZnJhbWVYIDwgNCkge1xuICAgICAgICAgICAgICAgIGZyYW1lWCsrXG4gICAgICAgICAgICB9IGlmIChmcmFtZVggPT09IDQpIHtcbiAgICAgICAgICAgICAgICBmcmFtZVggPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZUZyYW1lKytcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZUhlbnJ5LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIG1vdmVIb3Jpem9udGFsbHkoKXtcblxuICAgIH1cblxuICAgIG1vdmVcbn0iXSwibmFtZXMiOlsiaGVucnkiLCJJbWFnZSIsInNyYyIsImhlbnJ5V2lkdGgiLCJoZW5yeUhlaWdodCIsImZyYW1lWCIsImdhbWVGcmFtZSIsIkhlbnJ5IiwiY29uc3RydWN0b3IiLCJDQU5WQVNfV0lEVEgiLCJDQU5WQVNfSEVJR0hUIiwiY3R4IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJzcGVlZCIsImFuaW1hdGVIZW5yeSIsImNsZWFyUmVjdCIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsIm1vdmVIb3Jpem9udGFsbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/henry.js\n");

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