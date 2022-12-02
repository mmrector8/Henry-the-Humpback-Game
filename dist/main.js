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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n\nconst canvas = document.getElementById(\"game-canvas\");\nconst ctx = canvas.getContext(\"2d\");\nlet game1 = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\ngame1.henry.animate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBcUM7QUFFcEMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDckQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFHcEMsSUFBSUMsS0FBSyxHQUFHLElBQUlOLHdEQUFJLENBQUNJLEdBQUcsQ0FBQztBQUN6QkUsS0FBSyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbnJ5aHVtcGJhY2svLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWUuanNcIjtcblxuIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIilcbiBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG5cblxubGV0IGdhbWUxID0gbmV3IEdhbWUoY3R4KTtcbmdhbWUxLmhlbnJ5LmFuaW1hdGUoKVxuXG4iXSwibmFtZXMiOlsiR2FtZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2FtZTEiLCJoZW5yeSIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Henry; }\n/* harmony export */ });\nconst henry = new Image();\nhenry.src = './images/henrysprite.png';\nclass Henry {\n  constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx) {\n    this.name = \"Henry\";\n    this.ctx = ctx;\n    this.CANVAS_WIDTH = CANVAS_WIDTH;\n    this.CANVAS_HEIGHT = CANVAS_HEIGHT;\n    this.henryWidth = 188;\n    this.henryHeight = 55;\n    this.frameX = 1;\n    this.gameFrame = 0;\n    this.y = 250;\n    this.x = 600;\n    this.speed = 0;\n    this.animateHenry();\n  }\n  animateHenry() {\n    this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);\n    this.ctx.fillRect(0, 0, 800, 600);\n    this.ctx.drawImage(henry, this.frameX * this.henryWidth, this.henryHeight, this.henryWidth, this.henryHeight, this.x, this.y, this.henryWidth, this.henryHeight);\n    this.moveHorizontally();\n    if (this.gameFrame % 20 === 0) {\n      if (this.frameX < 4) {\n        this.frameX++;\n      }\n      if (this.frameX === 4) {\n        this.frameX = 0;\n      }\n    }\n    this.gameFrame++;\n    requestAnimationFrame(this.animateHenry.bind(this));\n  }\n  moveHorizontally() {\n    this.x--;\n  }\n  moveVertically() {\n    this.y--;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZW5yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUN6QkQsS0FBSyxDQUFDRSxHQUFHLEdBQUcsMEJBQTBCO0FBRXZCLE1BQU1DLEtBQUssQ0FBQztFQUN2QkMsV0FBVyxDQUFDQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsR0FBRyxFQUFDO0lBQ3pDLElBQUksQ0FBQ0MsSUFBSSxHQUFHLE9BQU87SUFDbkIsSUFBSSxDQUFDRCxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNGLFlBQVksR0FBR0EsWUFBWTtJQUNoQyxJQUFJLENBQUNDLGFBQWEsR0FBR0EsYUFBYTtJQUNsQyxJQUFJLENBQUNHLFVBQVUsR0FBRyxHQUFHO0lBQ3JCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLEVBQUU7SUFDckIsSUFBSSxDQUFDQyxNQUFNLEdBQUUsQ0FBQztJQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFFLENBQUM7SUFDakIsSUFBSSxDQUFDQyxDQUFDLEdBQUcsR0FBRztJQUNaLElBQUksQ0FBQ0MsQ0FBQyxHQUFFLEdBQUc7SUFDWCxJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBQ2QsSUFBSSxDQUFDQyxZQUFZLEVBQUU7RUFDdkI7RUFFQUEsWUFBWSxHQUFHO0lBQ1gsSUFBSSxDQUFDVCxHQUFHLENBQUNVLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ1osWUFBWSxFQUFFLElBQUksQ0FBQ0MsYUFBYSxDQUFDO0lBQy9ELElBQUksQ0FBQ0MsR0FBRyxDQUFDVyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ2pDLElBQUksQ0FBQ1gsR0FBRyxDQUFDWSxTQUFTLENBQUNuQixLQUFLLEVBQUcsSUFBSSxDQUFDVyxNQUFNLEdBQUcsSUFBSSxDQUFDRixVQUFVLEVBQUcsSUFBSSxDQUFDQyxXQUFXLEVBQUUsSUFBSSxDQUFDRCxVQUFVLEVBQUUsSUFBSSxDQUFDQyxXQUFXLEVBQUUsSUFBSSxDQUFDSSxDQUFDLEVBQUUsSUFBSSxDQUFDRCxDQUFDLEVBQUUsSUFBSSxDQUFDSixVQUFVLEVBQUUsSUFBSSxDQUFDQyxXQUFXLENBQUM7SUFDbEssSUFBSSxDQUFDVSxnQkFBZ0IsRUFBRTtJQUN2QixJQUFJLElBQUksQ0FBQ1IsU0FBUyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUU7TUFDM0IsSUFBSSxJQUFJLENBQUNELE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDakIsSUFBSSxDQUFDQSxNQUFNLEVBQUU7TUFDakI7TUFBRSxJQUFJLElBQUksQ0FBQ0EsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNyQixJQUFJLENBQUNBLE1BQU0sR0FBRyxDQUFDO01BQ25CO0lBQ0o7SUFDRCxJQUFJLENBQUNDLFNBQVMsRUFBRTtJQUNmUyxxQkFBcUIsQ0FBQyxJQUFJLENBQUNMLFlBQVksQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3ZEO0VBRUFGLGdCQUFnQixHQUFFO0lBQ2QsSUFBSSxDQUFDTixDQUFDLEVBQUU7RUFDWjtFQUVBUyxjQUFjLEdBQUU7SUFDWixJQUFJLENBQUNWLENBQUMsRUFBRTtFQUNaO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZW5yeWh1bXBiYWNrLy4vc3JjL3NjcmlwdHMvaGVucnkuanM/MjVlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZW5yeSA9IG5ldyBJbWFnZSgpO1xuaGVucnkuc3JjID0gJy4vaW1hZ2VzL2hlbnJ5c3ByaXRlLnBuZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVucnkge1xuICAgIGNvbnN0cnVjdG9yKENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCwgY3R4KXtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJIZW5yeVwiO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5DQU5WQVNfV0lEVEggPSBDQU5WQVNfV0lEVEg7XG4gICAgICAgIHRoaXMuQ0FOVkFTX0hFSUdIVCA9IENBTlZBU19IRUlHSFQ7XG4gICAgICAgIHRoaXMuaGVucnlXaWR0aCA9IDE4ODtcbiAgICAgICAgdGhpcy5oZW5yeUhlaWdodCA9IDU1O1xuICAgICAgICB0aGlzLmZyYW1lWD0gMTtcbiAgICAgICAgdGhpcy5nYW1lRnJhbWUgPTA7XG4gICAgICAgIHRoaXMueSA9IDI1MDtcbiAgICAgICAgdGhpcy54ID02MDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmFuaW1hdGVIZW5yeSgpO1xuICAgIH1cblxuICAgIGFuaW1hdGVIZW5yeSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuQ0FOVkFTX1dJRFRILCB0aGlzLkNBTlZBU19IRUlHSFQpO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCA4MDAsIDYwMCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShoZW5yeSwgKHRoaXMuZnJhbWVYICogdGhpcy5oZW5yeVdpZHRoKSwgdGhpcy5oZW5yeUhlaWdodCwgdGhpcy5oZW5yeVdpZHRoLCB0aGlzLmhlbnJ5SGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZW5yeVdpZHRoLCB0aGlzLmhlbnJ5SGVpZ2h0KVxuICAgICAgICB0aGlzLm1vdmVIb3Jpem9udGFsbHkoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUZyYW1lICUgMjAgPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lWCA8IDQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lWCsrXG4gICAgICAgICAgICB9IGlmICh0aGlzLmZyYW1lWCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgdGhpcy5nYW1lRnJhbWUrK1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlSGVucnkuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgbW92ZUhvcml6b250YWxseSgpe1xuICAgICAgICB0aGlzLngtLTtcbiAgICB9XG5cbiAgICBtb3ZlVmVydGljYWxseSgpe1xuICAgICAgICB0aGlzLnktLTtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiaGVucnkiLCJJbWFnZSIsInNyYyIsIkhlbnJ5IiwiY29uc3RydWN0b3IiLCJDQU5WQVNfV0lEVEgiLCJDQU5WQVNfSEVJR0hUIiwiY3R4IiwibmFtZSIsImhlbnJ5V2lkdGgiLCJoZW5yeUhlaWdodCIsImZyYW1lWCIsImdhbWVGcmFtZSIsInkiLCJ4Iiwic3BlZWQiLCJhbmltYXRlSGVucnkiLCJjbGVhclJlY3QiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsIm1vdmVIb3Jpem9udGFsbHkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwibW92ZVZlcnRpY2FsbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/henry.js\n");

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