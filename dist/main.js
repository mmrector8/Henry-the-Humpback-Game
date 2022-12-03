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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\n//import Game from \"./scripts/game.js\";\n\nconst canvas = document.getElementById(\"game-canvas\");\nconst ctx = canvas.getContext(\"2d\");\nlet newView = new _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n//newView.animate()\n//game1.henry.addListeners()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUM2QztBQUM1QyxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQztBQUNyRCxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztBQUdwQyxJQUFJQyxPQUFPLEdBQUcsSUFBSU4sNkRBQVEsQ0FBQ0ksR0FBRyxDQUFDO0FBQy9CO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZW5yeWh1bXBiYWNrLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWUuanNcIjtcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9zY3JpcHRzL2dhbWVfdmlldy5qc1wiXG4gY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKVxuIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcblxuXG5sZXQgbmV3VmlldyA9IG5ldyBHYW1lVmlldyhjdHgpO1xuLy9uZXdWaWV3LmFuaW1hdGUoKVxuLy9nYW1lMS5oZW5yeS5hZGRMaXN0ZW5lcnMoKVxuIl0sIm5hbWVzIjpbIkdhbWVWaWV3IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJuZXdWaWV3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _henry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./henry.js */ \"./src/scripts/henry.js\");\n//import Henry from \"./scripts/henry.js\"\n\nconst background = new Image();\nbackground.src = \"./images/background.png\";\nconst CANVAS_WIDTH = 800;\nconst CANVAS_HEIGHT = 600;\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.score = 0;\n    this.timer = 200;\n    this.winningScore = 100;\n    this.lives = 3;\n    //this.setUpGame()\n    //this.henry = new Henry(CANVAS_WIDTH, CANVAS_HEIGHT, ctx)\n  }\n\n  winner() {\n    if (this.gameOver()) {\n      if (this.score >= this.winningScore && !this.threeLivesLost()) {\n        console.log(\"Congratulations, you won!\");\n      } else {\n        console.log(\"oh no, try again!\");\n      }\n    }\n  }\n  gameOver() {\n    if (this.timeOut() || this.threeLivesLost()) return true;\n  }\n  timeOut() {\n    if (this.timer === 0) return true;\n    return false;\n  }\n  threeLivesLost() {\n    if (this.lives > 0) return false;\n    return true;\n  }\n  incrementScore() {\n    this.score += 100;\n  }\n  loseLife() {\n    this.lives -= 1;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDOEI7QUFFOUIsTUFBTUMsVUFBVSxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUM5QkQsVUFBVSxDQUFDRSxHQUFHLEdBQUcseUJBQXlCO0FBRTFDLE1BQU1DLFlBQVksR0FBRyxHQUFHO0FBQ3hCLE1BQU1DLGFBQWEsR0FBRyxHQUFHO0FBRVYsTUFBTUMsSUFBSSxDQUFDO0VBQ3RCQyxXQUFXLENBQUNDLEdBQUcsRUFBQztJQUNaLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEdBQUc7SUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUcsR0FBRztJQUN2QixJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBQ2Q7SUFDQTtFQUNKOztFQUVBQyxNQUFNLEdBQUU7SUFDSixJQUFJLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEVBQUM7TUFDaEIsSUFBSSxJQUFJLENBQUNMLEtBQUssSUFBSSxJQUFJLENBQUNFLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQ0ksY0FBYyxFQUFFLEVBQUM7UUFDMURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO01BQzVDLENBQUMsTUFBSTtRQUNERCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztNQUNwQztJQUNKO0VBQ0o7RUFFQUgsUUFBUSxHQUFFO0lBQ04sSUFBSSxJQUFJLENBQUNJLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQ0gsY0FBYyxFQUFFLEVBQUUsT0FBTyxJQUFJO0VBQzVEO0VBRUFHLE9BQU8sR0FBRTtJQUNMLElBQUksSUFBSSxDQUFDUixLQUFLLEtBQUssQ0FBQyxFQUFFLE9BQU8sSUFBSTtJQUNqQyxPQUFPLEtBQUs7RUFDaEI7RUFFQUssY0FBYyxHQUFFO0lBQ1osSUFBSSxJQUFJLENBQUNILEtBQUssR0FBRyxDQUFDLEVBQUUsT0FBTyxLQUFLO0lBQ2hDLE9BQU8sSUFBSTtFQUNmO0VBRUFPLGNBQWMsR0FBRTtJQUNaLElBQUksQ0FBQ1YsS0FBSyxJQUFJLEdBQUc7RUFDckI7RUFFQVcsUUFBUSxHQUFFO0lBQ04sSUFBSSxDQUFDUixLQUFLLElBQUcsQ0FBQztFQUNsQjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVucnlodW1wYmFjay8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBIZW5yeSBmcm9tIFwiLi9zY3JpcHRzL2hlbnJ5LmpzXCJcbmltcG9ydCBIZW5yeSBmcm9tIFwiLi9oZW5yeS5qc1wiXG5cbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmJhY2tncm91bmQuc3JjID0gXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZ1wiXG5cbmNvbnN0IENBTlZBU19XSURUSCA9IDgwMDtcbmNvbnN0IENBTlZBU19IRUlHSFQgPSA2MDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDIwMFxuICAgICAgICB0aGlzLndpbm5pbmdTY29yZSA9IDEwMDtcbiAgICAgICAgdGhpcy5saXZlcyA9IDNcbiAgICAgICAgLy90aGlzLnNldFVwR2FtZSgpXG4gICAgICAgIC8vdGhpcy5oZW5yeSA9IG5ldyBIZW5yeShDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQsIGN0eClcbiAgICB9XG5cbiAgICB3aW5uZXIoKXtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSl7XG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZSA+PSB0aGlzLndpbm5pbmdTY29yZSAmJiAhdGhpcy50aHJlZUxpdmVzTG9zdCgpKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbmdyYXR1bGF0aW9ucywgeW91IHdvbiFcIilcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2ggbm8sIHRyeSBhZ2FpbiFcIilcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgaWYgKHRoaXMudGltZU91dCgpIHx8IHRoaXMudGhyZWVMaXZlc0xvc3QoKSkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGltZU91dCgpe1xuICAgICAgICBpZiAodGhpcy50aW1lciA9PT0gMCkgcmV0dXJuIHRydWVcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdGhyZWVMaXZlc0xvc3QoKXtcbiAgICAgICAgaWYgKHRoaXMubGl2ZXMgPiAwKSByZXR1cm4gZmFsc2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRTY29yZSgpe1xuICAgICAgICB0aGlzLnNjb3JlICs9IDEwMDtcbiAgICB9XG5cbiAgICBsb3NlTGlmZSgpe1xuICAgICAgICB0aGlzLmxpdmVzIC09MVxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJIZW5yeSIsImJhY2tncm91bmQiLCJJbWFnZSIsInNyYyIsIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjdHgiLCJzY29yZSIsInRpbWVyIiwid2lubmluZ1Njb3JlIiwibGl2ZXMiLCJ3aW5uZXIiLCJnYW1lT3ZlciIsInRocmVlTGl2ZXNMb3N0IiwiY29uc29sZSIsImxvZyIsInRpbWVPdXQiLCJpbmNyZW1lbnRTY29yZSIsImxvc2VMaWZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _henry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./henry.js */ \"./src/scripts/henry.js\");\n/* harmony import */ var _krill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./krill.js */ \"./src/scripts/krill.js\");\n\n\n\nconst CANVAS_WIDTH = 800;\nconst CANVAS_HEIGHT = 600;\nconst henry = new Image();\nhenry.src = './images/henrysprite.png';\nconst background = new Image();\nbackground.src = './images/background.png';\nclass GameView {\n  constructor(ctx) {\n    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    this.ctx = ctx;\n    this.henry = new _henry_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](CANVAS_WIDTH, CANVAS_HEIGHT, ctx);\n    this.krill = new _krill_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](CANVAS_WIDTH, CANVAS_HEIGHT, ctx);\n    this.animate();\n  }\n  animate() {\n    // this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n    //  //console.log(background instanceof HTMLMediaElement)\n    //this.ctx.drawImage(background, 0, 0 , CANVAS_WIDTH, CANVAS_HEIGHT)\n    //this.game.animateBackground()\n    this.henry.animateHenry();\n    this.krill.animateKrill();\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QjtBQUNFO0FBQ0M7QUFFL0IsTUFBTUcsWUFBWSxHQUFHLEdBQUc7QUFDeEIsTUFBTUMsYUFBYSxHQUFHLEdBQUc7QUFFekIsTUFBTUMsS0FBSyxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUN6QkQsS0FBSyxDQUFDRSxHQUFHLEdBQUcsMEJBQTBCO0FBRXRDLE1BQU1DLFVBQVUsR0FBRyxJQUFJRixLQUFLLEVBQUU7QUFDOUJFLFVBQVUsQ0FBQ0QsR0FBRyxHQUFHLHlCQUF5QjtBQUUzQixNQUFNRSxRQUFRO0VBQ3pCQyxXQUFXLENBQUNDLEdBQUcsRUFBRTtJQUNiLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUlaLGdEQUFJLENBQUNXLEdBQUcsQ0FBQztJQUN6QixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ04sS0FBSyxHQUFHLElBQUlKLGlEQUFLLENBQUNFLFlBQVksRUFBRUMsYUFBYSxFQUFFTyxHQUFHLENBQUM7SUFDeEQsSUFBSSxDQUFDRSxLQUFLLEdBQUcsSUFBSVgsaURBQUssQ0FBQ0MsWUFBWSxFQUFFQyxhQUFhLEVBQUVPLEdBQUcsQ0FBQztJQUN4RCxJQUFJLENBQUNHLE9BQU8sRUFBRTtFQUNsQjtFQUVBQSxPQUFPLEdBQUU7SUFDTDtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQUksQ0FBQ1QsS0FBSyxDQUFDVSxZQUFZLEVBQUU7SUFDekIsSUFBSSxDQUFDRixLQUFLLENBQUNHLFlBQVksRUFBRTtJQUN6QkMscUJBQXFCLENBQUMsSUFBSSxDQUFDSCxPQUFPLENBQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNsRDtBQUdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVucnlodW1wYmFjay8uL3NyYy9zY3JpcHRzL2dhbWVfdmlldy5qcz84MGVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWUuanNcIlxuaW1wb3J0IEhlbnJ5IGZyb20gXCIuL2hlbnJ5LmpzXCJcbmltcG9ydCBLcmlsbCBmcm9tIFwiLi9rcmlsbC5qc1wiO1xuXG5jb25zdCBDQU5WQVNfV0lEVEggPSA4MDA7XG5jb25zdCBDQU5WQVNfSEVJR0hUID0gNjAwO1xuXG5jb25zdCBoZW5yeSA9IG5ldyBJbWFnZSgpO1xuaGVucnkuc3JjID0gJy4vaW1hZ2VzL2hlbnJ5c3ByaXRlLnBuZydcblxuY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuYmFja2dyb3VuZC5zcmMgPSAnLi9pbWFnZXMvYmFja2dyb3VuZC5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3e1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5oZW5yeSA9IG5ldyBIZW5yeShDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQsIGN0eCk7XG4gICAgICAgIHRoaXMua3JpbGwgPSBuZXcgS3JpbGwoQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hULCBjdHgpXG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKXtcbiAgICAgICAgLy8gdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgIC8vICAvL2NvbnNvbGUubG9nKGJhY2tncm91bmQgaW5zdGFuY2VvZiBIVE1MTWVkaWFFbGVtZW50KVxuICAgICAgICAvL3RoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwICwgQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKVxuICAgICAgICAvL3RoaXMuZ2FtZS5hbmltYXRlQmFja2dyb3VuZCgpXG4gICAgICAgIHRoaXMuaGVucnkuYW5pbWF0ZUhlbnJ5KCk7XG4gICAgICAgIHRoaXMua3JpbGwuYW5pbWF0ZUtyaWxsKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICBcbn1cblxuIl0sIm5hbWVzIjpbIkdhbWUiLCJIZW5yeSIsIktyaWxsIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsImhlbnJ5IiwiSW1hZ2UiLCJzcmMiLCJiYWNrZ3JvdW5kIiwiR2FtZVZpZXciLCJjb25zdHJ1Y3RvciIsImN0eCIsImdhbWUiLCJrcmlsbCIsImFuaW1hdGUiLCJhbmltYXRlSGVucnkiLCJhbmltYXRlS3JpbGwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/henry.js":
/*!******************************!*\
  !*** ./src/scripts/henry.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Henry; }\n/* harmony export */ });\nconst henry = new Image();\nhenry.src = './images/henrysprite.png';\nconst background = new Image();\nbackground.src = './images/background.png';\nclass Henry {\n  constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx) {\n    this.name = \"Henry\";\n    this.ctx = ctx;\n    this.CANVAS_WIDTH = CANVAS_WIDTH;\n    this.CANVAS_HEIGHT = CANVAS_HEIGHT;\n    this.henryWidth = 188;\n    this.henryHeight = 55;\n    this.frameX = 1;\n    this.incrementer = 0;\n    this.y = 250;\n    this.x = 600;\n    // this.animateHenry();\n    this.addListeners();\n  }\n  animateHenry() {\n    this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);\n    this.ctx.fillRect(0, 0, 800, 600);\n    this.ctx.drawImage(background, 0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);\n    this.ctx.drawImage(henry, this.frameX * this.henryWidth, this.henryHeight, this.henryWidth, this.henryHeight, this.x, this.y, this.henryWidth, this.henryHeight);\n    if (this.incrementer % 20 === 0) {\n      if (this.frameX < 4) {\n        this.frameX++;\n      }\n      if (this.frameX === 4) {\n        this.frameX = 0;\n      }\n    }\n    this.incrementer++;\n    // requestAnimationFrame(this.animateHenry.bind(this));\n  }\n\n  moveHorizontallyLeft() {\n    if (this.x > 0) {\n      this.x--;\n    } else {\n      this.x = 0;\n    }\n    requestAnimationFrame(this.moveHorizontallyLeft.bind(this));\n  }\n  moveHorizontallyRight() {\n    if (this.x < 600) {\n      this.x++;\n    } else {\n      this.x = 600;\n    }\n    requestAnimationFrame(this.moveHorizontallyRight.bind(this));\n  }\n  moveVerticallyUp() {\n    if (this.y > 0) {\n      this.y--;\n    } else {\n      this.y = 0;\n    }\n    requestAnimationFrame(this.moveVerticallyUp.bind(this));\n  }\n  moveVerticallyDown() {\n    if (this.y < 450) {\n      this.y++;\n    } else {\n      this.y = 450;\n    }\n    requestAnimationFrame(this.moveVerticallyDown.bind(this));\n  }\n  addListeners() {\n    window.addEventListener(\"keydown\", e => {\n      if (e.key === \"ArrowLeft\") {\n        this.moveHorizontallyLeft();\n        console.log('should be moving left');\n      } else if (e.key === \"ArrowRight\") {\n        this.moveHorizontallyRight();\n      } else if (e.key === \"ArrowUp\") {\n        this.moveVerticallyUp();\n      } else if (e.key === \"ArrowDown\") {\n        this.moveVerticallyDown();\n      }\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtJQUNKLENBQUMsQ0FBQztFQUNOO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZW5yeWh1bXBiYWNrLy4vc3JjL3NjcmlwdHMvaGVucnkuanM/MjVlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZW5yeSA9IG5ldyBJbWFnZSgpO1xuaGVucnkuc3JjID0gJy4vaW1hZ2VzL2hlbnJ5c3ByaXRlLnBuZydcbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmJhY2tncm91bmQuc3JjID0gJy4vaW1hZ2VzL2JhY2tncm91bmQucG5nJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbnJ5IHtcbiAgICBjb25zdHJ1Y3RvcihDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQsIGN0eCl7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSGVucnlcIjtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuQ0FOVkFTX1dJRFRIID0gQ0FOVkFTX1dJRFRIO1xuICAgICAgICB0aGlzLkNBTlZBU19IRUlHSFQgPSBDQU5WQVNfSEVJR0hUO1xuICAgICAgICB0aGlzLmhlbnJ5V2lkdGggPSAxODg7XG4gICAgICAgIHRoaXMuaGVucnlIZWlnaHQgPSA1NTtcbiAgICAgICAgdGhpcy5mcmFtZVg9IDE7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50ZXIgPTA7XG4gICAgICAgIHRoaXMueSA9IDI1MDtcbiAgICAgICAgdGhpcy54ID02MDA7XG4gICAgICAgLy8gdGhpcy5hbmltYXRlSGVucnkoKTtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlSGVucnkoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkNBTlZBU19XSURUSCwgdGhpcy5DQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgODAwLCA2MDApO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgdGhpcy5DQU5WQVNfV0lEVEgsIHRoaXMuQ0FOVkFTX0hFSUdIVClcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGhlbnJ5LCAodGhpcy5mcmFtZVggKiB0aGlzLmhlbnJ5V2lkdGgpLCB0aGlzLmhlbnJ5SGVpZ2h0LCB0aGlzLmhlbnJ5V2lkdGgsIHRoaXMuaGVucnlIZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlbnJ5V2lkdGgsIHRoaXMuaGVucnlIZWlnaHQpO1xuICAgICAgICBpZiAodGhpcy5pbmNyZW1lbnRlciAlIDIwID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZVggPCA0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVgrKztcbiAgICAgICAgICAgIH0gaWYgKHRoaXMuZnJhbWVYID09PSA0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgdGhpcy5pbmNyZW1lbnRlcisrXG4gICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZUhlbnJ5LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIG1vdmVIb3Jpem9udGFsbHlMZWZ0KCl7XG4gICAgICAgIGlmKHRoaXMueCA+IDApe1xuICAgICAgICAgICAgdGhpcy54LS07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgfVxuICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlSG9yaXpvbnRhbGx5TGVmdC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBtb3ZlSG9yaXpvbnRhbGx5UmlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnggPDYwMCkge1xuICAgICAgICAgICAgdGhpcy54Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSA2MDA7XG4gICAgICAgIH1cbiAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlSG9yaXpvbnRhbGx5UmlnaHQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgbW92ZVZlcnRpY2FsbHlVcCgpe1xuICAgICAgICBpZiAodGhpcy55ID4gMCkge1xuICAgICAgICAgICAgdGhpcy55LS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVZlcnRpY2FsbHlVcC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBtb3ZlVmVydGljYWxseURvd24oKSB7XG4gICAgICAgIGlmICh0aGlzLnkgPCA0NTApIHtcbiAgICAgICAgICAgIHRoaXMueSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy55ID0gNDUwO1xuICAgICAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVZlcnRpY2FsbHlEb3duLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycygpe1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpPT57XG4gICAgICAgICAgICBpZihlLmtleSA9PT0gXCJBcnJvd0xlZnRcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlSG9yaXpvbnRhbGx5TGVmdCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGQgYmUgbW92aW5nIGxlZnQnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVIb3Jpem9udGFsbHlSaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGUua2V5ID09PSBcIkFycm93VXBcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVmVydGljYWxseVVwKCk7XG4gICAgICAgICAgICB9ZWxzZSBpZihlLmtleSA9PT0gXCJBcnJvd0Rvd25cIil7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVmVydGljYWxseURvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbImhlbnJ5IiwiSW1hZ2UiLCJzcmMiLCJiYWNrZ3JvdW5kIiwiSGVucnkiLCJjb25zdHJ1Y3RvciIsIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJjdHgiLCJuYW1lIiwiaGVucnlXaWR0aCIsImhlbnJ5SGVpZ2h0IiwiZnJhbWVYIiwiaW5jcmVtZW50ZXIiLCJ5IiwieCIsImFkZExpc3RlbmVycyIsImFuaW1hdGVIZW5yeSIsImNsZWFyUmVjdCIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIiwibW92ZUhvcml6b250YWxseUxlZnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwibW92ZUhvcml6b250YWxseVJpZ2h0IiwibW92ZVZlcnRpY2FsbHlVcCIsIm1vdmVWZXJ0aWNhbGx5RG93biIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/henry.js\n");

/***/ }),

/***/ "./src/scripts/krill.js":
/*!******************************!*\
  !*** ./src/scripts/krill.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Krill; }\n/* harmony export */ });\nconst krill = new Image();\nkrill.src = './images/krill.png';\nclass Krill {\n  constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx) {\n    this.ctx = ctx;\n    this.CANVAS_WIDTH = CANVAS_WIDTH;\n    this.CANVAS_HEIGHT = CANVAS_HEIGHT;\n    this.krillWidth = 121;\n    this.krillHeight = 69;\n    this.frameX = 1;\n    this.incrementer = 0;\n    this.y = 0;\n    this.x = 0;\n  }\n  animateKrill() {\n    this.ctx.drawImage(krill, this.frameX * this.krillWidth, this.krillHeight, this.krillWidth, this.krillHeight, this.x, this.y, this.krillWidth, this.krillHeight);\n    if (this.incrementer % 20 === 0) {\n      if (this.frameX < 5) {\n        this.frameX++;\n      }\n      if (this.frameX === 5) {\n        this.frameX = 0;\n      }\n    }\n    this.incrementer++;\n  }\n\n  //place krill randomly on page in groups\n  //\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9rcmlsbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUN6QkQsS0FBSyxDQUFDRSxHQUFHLEdBQUcsb0JBQW9CO0FBRWpCLE1BQU1DLEtBQUssQ0FBQztFQUN2QkMsV0FBVyxDQUFDQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsR0FBRyxFQUFDO0lBQ3pDLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDRixZQUFZLEdBQUdBLFlBQVk7SUFDaEMsSUFBSSxDQUFDQyxhQUFhLEdBQUdBLGFBQWE7SUFDbEMsSUFBSSxDQUFDRSxVQUFVLEdBQUcsR0FBRztJQUNyQixJQUFJLENBQUNDLFdBQVcsR0FBRyxFQUFFO0lBQ3JCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDZixJQUFJLENBQUNDLFdBQVcsR0FBRyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBRyxDQUFDO0VBQ2Q7RUFFQUMsWUFBWSxHQUFFO0lBQ1YsSUFBSSxDQUFDUCxHQUFHLENBQUNRLFNBQVMsQ0FBQ2YsS0FBSyxFQUFHLElBQUksQ0FBQ1UsTUFBTSxHQUFHLElBQUksQ0FBQ0YsVUFBVSxFQUFHLElBQUksQ0FBQ0MsV0FBVyxFQUFFLElBQUksQ0FBQ0QsVUFBVSxFQUFFLElBQUksQ0FBQ0MsV0FBVyxFQUFFLElBQUksQ0FBQ0ksQ0FBQyxFQUFFLElBQUksQ0FBQ0QsQ0FBQyxFQUFFLElBQUksQ0FBQ0osVUFBVSxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDO0lBQ2pLLElBQUksSUFBSSxDQUFDRSxXQUFXLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRTtNQUM5QixJQUFJLElBQUksQ0FBQ0QsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNqQixJQUFJLENBQUNBLE1BQU0sRUFBRTtNQUNqQjtNQUFFLElBQUksSUFBSSxDQUFDQSxNQUFNLEtBQUksQ0FBQyxFQUFFO1FBQ3BCLElBQUksQ0FBQ0EsTUFBTSxHQUFFLENBQUM7TUFDbEI7SUFDSjtJQUNBLElBQUksQ0FBQ0MsV0FBVyxFQUFFO0VBQ3RCOztFQUVBO0VBQ0E7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbnJ5aHVtcGJhY2svLi9zcmMvc2NyaXB0cy9rcmlsbC5qcz85YzIxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGtyaWxsID0gbmV3IEltYWdlKCk7XG5rcmlsbC5zcmMgPSAnLi9pbWFnZXMva3JpbGwucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLcmlsbCB7XG4gICAgY29uc3RydWN0b3IoQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hULCBjdHgpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5DQU5WQVNfV0lEVEggPSBDQU5WQVNfV0lEVEg7XG4gICAgICAgIHRoaXMuQ0FOVkFTX0hFSUdIVCA9IENBTlZBU19IRUlHSFQ7XG4gICAgICAgIHRoaXMua3JpbGxXaWR0aCA9IDEyMTtcbiAgICAgICAgdGhpcy5rcmlsbEhlaWdodCA9IDY5O1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDE7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgIH1cblxuICAgIGFuaW1hdGVLcmlsbCgpe1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2Uoa3JpbGwsICh0aGlzLmZyYW1lWCAqIHRoaXMua3JpbGxXaWR0aCksIHRoaXMua3JpbGxIZWlnaHQsIHRoaXMua3JpbGxXaWR0aCwgdGhpcy5rcmlsbEhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMua3JpbGxXaWR0aCwgdGhpcy5rcmlsbEhlaWdodCk7XG4gICAgICAgICBpZiAodGhpcy5pbmNyZW1lbnRlciAlIDIwID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZVggPCA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVgrKztcbiAgICAgICAgICAgIH0gaWYgKHRoaXMuZnJhbWVYID09PTUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lWCA9MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluY3JlbWVudGVyKytcbiAgICB9XG5cbiAgICAvL3BsYWNlIGtyaWxsIHJhbmRvbWx5IG9uIHBhZ2UgaW4gZ3JvdXBzXG4gICAgLy9cbn0iXSwibmFtZXMiOlsia3JpbGwiLCJJbWFnZSIsInNyYyIsIktyaWxsIiwiY29uc3RydWN0b3IiLCJDQU5WQVNfV0lEVEgiLCJDQU5WQVNfSEVJR0hUIiwiY3R4Iiwia3JpbGxXaWR0aCIsImtyaWxsSGVpZ2h0IiwiZnJhbWVYIiwiaW5jcmVtZW50ZXIiLCJ5IiwieCIsImFuaW1hdGVLcmlsbCIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/krill.js\n");

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