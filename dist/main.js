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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\n\nconst canvas = document.getElementById(\"game-canvas\");\nconst ctx = canvas.getContext(\"2d\");\nlet newView = new _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBNkM7QUFDNUMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDckQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFHcEMsSUFBSUMsT0FBTyxHQUFHLElBQUlOLDZEQUFRLENBQUNJLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbnJ5aHVtcGJhY2svLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vc2NyaXB0cy9nYW1lX3ZpZXcuanNcIlxuIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIilcbiBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG5cblxubGV0IG5ld1ZpZXcgPSBuZXcgR2FtZVZpZXcoY3R4KTsiXSwibmFtZXMiOlsiR2FtZVZpZXciLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIm5ld1ZpZXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/background.js":
/*!***********************************!*\
  !*** ./src/scripts/background.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Background; }\n/* harmony export */ });\nconst background = new Image();\nbackground.src = './images/background.png';\nclass Background {\n  constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx) {\n    this.ctx = ctx;\n    this.CANVAS_WIDTH = CANVAS_WIDTH;\n    this.CANVAS_HEIGHT = CANVAS_HEIGHT;\n    this.x = 0;\n    this.y = 0;\n    this.scroll = 2;\n  }\n  animateBackground() {\n    this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);\n    this.ctx.fillRect(0, 0, 800, 600);\n    this.ctx.drawImage(background, this.x, this.y, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);\n    this.ctx.drawImage(background, this.x - this.CANVAS_WIDTH + 2, this.y, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);\n  }\n  updatePosition() {\n    this.x += this.scroll;\n    if (this.x > this.CANVAS_WIDTH) this.x = 0;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxVQUFVLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0FBQzlCRCxVQUFVLENBQUNFLEdBQUcsR0FBRyx5QkFBeUI7QUFFM0IsTUFBTUMsVUFBVSxDQUFDO0VBQzVCQyxXQUFXLENBQUNDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxHQUFHLEVBQUM7SUFDekMsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNGLFlBQVksR0FBR0EsWUFBWTtJQUNoQyxJQUFJLENBQUNDLGFBQWEsR0FBR0EsYUFBYTtJQUNsQyxJQUFJLENBQUNFLENBQUMsR0FBRyxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxDQUFDLEdBQUcsQ0FBQztJQUNWLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUM7RUFDbkI7RUFFQUMsaUJBQWlCLEdBQUU7SUFDZixJQUFJLENBQUNKLEdBQUcsQ0FBQ0ssU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDUCxZQUFZLEVBQUUsSUFBSSxDQUFDQyxhQUFhLENBQUM7SUFDL0QsSUFBSSxDQUFDQyxHQUFHLENBQUNNLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDakMsSUFBSSxDQUFDTixHQUFHLENBQUNPLFNBQVMsQ0FBQ2QsVUFBVSxFQUFFLElBQUksQ0FBQ1EsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLElBQUksQ0FBQ0osWUFBWSxFQUFFLElBQUksQ0FBQ0MsYUFBYSxDQUFDO0lBQ3JGLElBQUksQ0FBQ0MsR0FBRyxDQUFDTyxTQUFTLENBQUNkLFVBQVUsRUFBRSxJQUFJLENBQUNRLENBQUMsR0FBRyxJQUFJLENBQUNILFlBQVksR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDSSxDQUFDLEVBQUUsSUFBSSxDQUFDSixZQUFZLEVBQUUsSUFBSSxDQUFDQyxhQUFhLENBQUM7RUFDakg7RUFFQVMsY0FBYyxHQUFFO0lBQ1osSUFBSSxDQUFDUCxDQUFDLElBQUksSUFBSSxDQUFDRSxNQUFNO0lBQ3JCLElBQUcsSUFBSSxDQUFDRixDQUFDLEdBQUcsSUFBSSxDQUFDSCxZQUFZLEVBQUUsSUFBSSxDQUFDRyxDQUFDLEdBQUcsQ0FBQztFQUM3QztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVucnlodW1wYmFjay8uL3NyYy9zY3JpcHRzL2JhY2tncm91bmQuanM/NGJiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG5iYWNrZ3JvdW5kLnNyYyA9ICcuL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dyb3VuZCB7XG4gICAgY29uc3RydWN0b3IoQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hULCBjdHgpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5DQU5WQVNfV0lEVEggPSBDQU5WQVNfV0lEVEg7XG4gICAgICAgIHRoaXMuQ0FOVkFTX0hFSUdIVCA9IENBTlZBU19IRUlHSFQ7XG4gICAgICAgIHRoaXMueCA9IDBcbiAgICAgICAgdGhpcy55ID0gMFxuICAgICAgICB0aGlzLnNjcm9sbCA9IDJcbiAgICB9XG5cbiAgICBhbmltYXRlQmFja2dyb3VuZCgpe1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5DQU5WQVNfV0lEVEgsIHRoaXMuQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIDgwMCwgNjAwKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIHRoaXMueCwgdGhpcy55LCB0aGlzLkNBTlZBU19XSURUSCwgdGhpcy5DQU5WQVNfSEVJR0hUKVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgdGhpcy54IC0gdGhpcy5DQU5WQVNfV0lEVEggKyAyLCB0aGlzLnksIHRoaXMuQ0FOVkFTX1dJRFRILCB0aGlzLkNBTlZBU19IRUlHSFQpXG4gICAgfVxuXG4gICAgdXBkYXRlUG9zaXRpb24oKXtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuc2Nyb2xsO1xuICAgICAgICBpZih0aGlzLnggPiB0aGlzLkNBTlZBU19XSURUSCkgdGhpcy54ID0gMDtcbiAgICB9XG59Il0sIm5hbWVzIjpbImJhY2tncm91bmQiLCJJbWFnZSIsInNyYyIsIkJhY2tncm91bmQiLCJjb25zdHJ1Y3RvciIsIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJjdHgiLCJ4IiwieSIsInNjcm9sbCIsImFuaW1hdGVCYWNrZ3JvdW5kIiwiY2xlYXJSZWN0IiwiZmlsbFJlY3QiLCJkcmF3SW1hZ2UiLCJ1cGRhdGVQb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/background.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _henry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./henry.js */ \"./src/scripts/henry.js\");\n//import Henry from \"./scripts/henry.js\"\n\nconst background = new Image();\nbackground.src = \"./images/background.png\";\nconst CANVAS_WIDTH = 800;\nconst CANVAS_HEIGHT = 600;\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.score = 0;\n    this.timer = 200;\n    this.winningScore = 100;\n    this.lives = 3;\n    //this.setUpGame()\n    //this.henry = new Henry(CANVAS_WIDTH, CANVAS_HEIGHT, ctx)\n  }\n\n  winner() {\n    if (this.gameOver()) {\n      if (this.score >= this.winningScore && !this.threeLivesLost()) {\n        console.log(\"Congratulations, you won!\");\n      } else {\n        console.log(\"oh no, try again!\");\n      }\n    }\n  }\n  gameOver() {\n    if (this.timeOut() || this.threeLivesLost()) return true;\n  }\n  timeOut() {\n    if (this.timer === 0) return true;\n    return false;\n  }\n  threeLivesLost() {\n    if (this.lives > 0) return false;\n    return true;\n  }\n  incrementScore() {\n    this.score += 100;\n  }\n  loseLife() {\n    this.lives -= 1;\n  }\n\n  //increment Henry's size after each collision\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDOEI7QUFFOUIsTUFBTUMsVUFBVSxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUM5QkQsVUFBVSxDQUFDRSxHQUFHLEdBQUcseUJBQXlCO0FBRTFDLE1BQU1DLFlBQVksR0FBRyxHQUFHO0FBQ3hCLE1BQU1DLGFBQWEsR0FBRyxHQUFHO0FBRVYsTUFBTUMsSUFBSSxDQUFDO0VBQ3RCQyxXQUFXLENBQUNDLEdBQUcsRUFBQztJQUNaLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEdBQUc7SUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUcsR0FBRztJQUN2QixJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBQ2Q7SUFDQTtFQUNKOztFQUVBQyxNQUFNLEdBQUU7SUFDSixJQUFJLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEVBQUM7TUFDaEIsSUFBSSxJQUFJLENBQUNMLEtBQUssSUFBSSxJQUFJLENBQUNFLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQ0ksY0FBYyxFQUFFLEVBQUM7UUFDMURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO01BQzVDLENBQUMsTUFBSTtRQUNERCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztNQUNwQztJQUNKO0VBQ0o7RUFFQUgsUUFBUSxHQUFFO0lBQ04sSUFBSSxJQUFJLENBQUNJLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQ0gsY0FBYyxFQUFFLEVBQUUsT0FBTyxJQUFJO0VBQzVEO0VBRUFHLE9BQU8sR0FBRTtJQUNMLElBQUksSUFBSSxDQUFDUixLQUFLLEtBQUssQ0FBQyxFQUFFLE9BQU8sSUFBSTtJQUNqQyxPQUFPLEtBQUs7RUFDaEI7RUFFQUssY0FBYyxHQUFFO0lBQ1osSUFBSSxJQUFJLENBQUNILEtBQUssR0FBRyxDQUFDLEVBQUUsT0FBTyxLQUFLO0lBQ2hDLE9BQU8sSUFBSTtFQUNmO0VBRUFPLGNBQWMsR0FBRTtJQUNaLElBQUksQ0FBQ1YsS0FBSyxJQUFJLEdBQUc7RUFDckI7RUFFQVcsUUFBUSxHQUFFO0lBQ04sSUFBSSxDQUFDUixLQUFLLElBQUcsQ0FBQztFQUNsQjs7RUFFQTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVucnlodW1wYmFjay8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBIZW5yeSBmcm9tIFwiLi9zY3JpcHRzL2hlbnJ5LmpzXCJcbmltcG9ydCBIZW5yeSBmcm9tIFwiLi9oZW5yeS5qc1wiXG5cbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmJhY2tncm91bmQuc3JjID0gXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZ1wiXG5cbmNvbnN0IENBTlZBU19XSURUSCA9IDgwMDtcbmNvbnN0IENBTlZBU19IRUlHSFQgPSA2MDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDIwMFxuICAgICAgICB0aGlzLndpbm5pbmdTY29yZSA9IDEwMDtcbiAgICAgICAgdGhpcy5saXZlcyA9IDNcbiAgICAgICAgLy90aGlzLnNldFVwR2FtZSgpXG4gICAgICAgIC8vdGhpcy5oZW5yeSA9IG5ldyBIZW5yeShDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQsIGN0eClcbiAgICB9XG5cbiAgICB3aW5uZXIoKXtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSl7XG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZSA+PSB0aGlzLndpbm5pbmdTY29yZSAmJiAhdGhpcy50aHJlZUxpdmVzTG9zdCgpKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbmdyYXR1bGF0aW9ucywgeW91IHdvbiFcIilcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2ggbm8sIHRyeSBhZ2FpbiFcIilcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgaWYgKHRoaXMudGltZU91dCgpIHx8IHRoaXMudGhyZWVMaXZlc0xvc3QoKSkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGltZU91dCgpe1xuICAgICAgICBpZiAodGhpcy50aW1lciA9PT0gMCkgcmV0dXJuIHRydWVcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdGhyZWVMaXZlc0xvc3QoKXtcbiAgICAgICAgaWYgKHRoaXMubGl2ZXMgPiAwKSByZXR1cm4gZmFsc2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRTY29yZSgpe1xuICAgICAgICB0aGlzLnNjb3JlICs9IDEwMDtcbiAgICB9XG5cbiAgICBsb3NlTGlmZSgpe1xuICAgICAgICB0aGlzLmxpdmVzIC09MVxuICAgIH1cblxuICAgIC8vaW5jcmVtZW50IEhlbnJ5J3Mgc2l6ZSBhZnRlciBlYWNoIGNvbGxpc2lvblxufSJdLCJuYW1lcyI6WyJIZW5yeSIsImJhY2tncm91bmQiLCJJbWFnZSIsInNyYyIsIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjdHgiLCJzY29yZSIsInRpbWVyIiwid2lubmluZ1Njb3JlIiwibGl2ZXMiLCJ3aW5uZXIiLCJnYW1lT3ZlciIsInRocmVlTGl2ZXNMb3N0IiwiY29uc29sZSIsImxvZyIsInRpbWVPdXQiLCJpbmNyZW1lbnRTY29yZSIsImxvc2VMaWZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _henry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./henry.js */ \"./src/scripts/henry.js\");\n/* harmony import */ var _krill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./krill.js */ \"./src/scripts/krill.js\");\n/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background.js */ \"./src/scripts/background.js\");\n\n\n\n\nconst CANVAS_WIDTH = 800;\nconst CANVAS_HEIGHT = 600;\nconst KRILL_ARR = [];\nlet LAST_TIME = 0;\nlet KRILL_TIMER = 0;\nlet KRILL_INTERVAL = Math.floor(Math.random() * 4500 + 3500);\nclass GameView {\n  constructor(ctx) {\n    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    this.ctx = ctx;\n    this.henry = new _henry_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](CANVAS_WIDTH, CANVAS_HEIGHT, ctx);\n    this.background = new _background_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](CANVAS_WIDTH, CANVAS_HEIGHT, ctx);\n    this.animate(0);\n    this.incrementer = 0;\n  }\n  animate(timeStamp) {\n    const deltaTime = timeStamp - LAST_TIME;\n    LAST_TIME = timeStamp;\n    this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n    this.background.animateBackground();\n    this.background.updatePosition();\n    this.henry.animateHenry();\n    this.handleKrill(deltaTime);\n    requestAnimationFrame(this.animate.bind(this));\n  }\n  handleKrill(deltaTime) {\n    if (KRILL_TIMER > KRILL_INTERVAL) {\n      let randomY = Math.floor(Math.random() * (CANVAS_HEIGHT - 100) + 0);\n      KRILL_ARR.push(new _krill_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](CANVAS_WIDTH, CANVAS_HEIGHT, this.ctx, -10, randomY));\n      KRILL_TIMER = 0;\n    } else {\n      KRILL_TIMER += deltaTime;\n    }\n    KRILL_ARR.forEach(krill => {\n      krill.animateKrill();\n      krill.updateKrillPos();\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFDRTtBQUNDO0FBQ1U7QUFFekMsTUFBTUksWUFBWSxHQUFHLEdBQUc7QUFDeEIsTUFBTUMsYUFBYSxHQUFHLEdBQUc7QUFDekIsTUFBTUMsU0FBUyxHQUFHLEVBQUU7QUFDcEIsSUFBSUMsU0FBUyxHQUFHLENBQUM7QUFDakIsSUFBSUMsV0FBVyxHQUFHLENBQUM7QUFDbkIsSUFBSUMsY0FBYyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRTdDLE1BQU1DLFFBQVE7RUFDekJDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSWhCLGdEQUFJLENBQUNlLEdBQUcsQ0FBQztJQUN6QixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0UsS0FBSyxHQUFHLElBQUloQixpREFBSyxDQUFDRyxZQUFZLEVBQUVDLGFBQWEsRUFBRVUsR0FBRyxDQUFDO0lBQ3hELElBQUksQ0FBQ0csVUFBVSxHQUFHLElBQUlmLHNEQUFVLENBQUNDLFlBQVksRUFBRUMsYUFBYSxFQUFFVSxHQUFHLENBQUM7SUFDbEUsSUFBSSxDQUFDSSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxDQUFDQyxXQUFXLEdBQUcsQ0FBQztFQUN4QjtFQUVBRCxPQUFPLENBQUNFLFNBQVMsRUFBQztJQUNkLE1BQU1DLFNBQVMsR0FBR0QsU0FBUyxHQUFHZCxTQUFTO0lBQ3ZDQSxTQUFTLEdBQUdjLFNBQVM7SUFDckIsSUFBSSxDQUFDTixHQUFHLENBQUNRLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFbkIsWUFBWSxFQUFFQyxhQUFhLENBQUM7SUFDckQsSUFBSSxDQUFDYSxVQUFVLENBQUNNLGlCQUFpQixFQUFFO0lBQ25DLElBQUksQ0FBQ04sVUFBVSxDQUFDTyxjQUFjLEVBQUU7SUFDaEMsSUFBSSxDQUFDUixLQUFLLENBQUNTLFlBQVksRUFBRTtJQUN6QixJQUFJLENBQUNDLFdBQVcsQ0FBQ0wsU0FBUyxDQUFDO0lBQzNCTSxxQkFBcUIsQ0FBQyxJQUFJLENBQUNULE9BQU8sQ0FBQ1UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ2xEO0VBRUFGLFdBQVcsQ0FBQ0wsU0FBUyxFQUFDO0lBQ2xCLElBQUdkLFdBQVcsR0FBR0MsY0FBYyxFQUFDO01BQzVCLElBQUlxQixPQUFPLEdBQUdwQixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsSUFBSVAsYUFBYSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNuRUMsU0FBUyxDQUFDeUIsSUFBSSxDQUFDLElBQUk3QixpREFBSyxDQUFDRSxZQUFZLEVBQUVDLGFBQWEsRUFBRSxJQUFJLENBQUNVLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRWUsT0FBTyxDQUFDLENBQUM7TUFDOUV0QixXQUFXLEdBQUcsQ0FBQztJQUNuQixDQUFDLE1BQUs7TUFDRkEsV0FBVyxJQUFJYyxTQUFTO0lBQzVCO0lBQ0FoQixTQUFTLENBQUMwQixPQUFPLENBQUVDLEtBQUssSUFBSTtNQUN4QkEsS0FBSyxDQUFDQyxZQUFZLEVBQUU7TUFDcEJELEtBQUssQ0FBQ0UsY0FBYyxFQUFFO0lBQzFCLENBQUMsQ0FBQztFQUNOO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZW5yeWh1bXBiYWNrLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzPzgwZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZS5qc1wiXG5pbXBvcnQgSGVucnkgZnJvbSBcIi4vaGVucnkuanNcIlxuaW1wb3J0IEtyaWxsIGZyb20gXCIuL2tyaWxsLmpzXCI7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tIFwiLi9iYWNrZ3JvdW5kLmpzXCI7XG5cbmNvbnN0IENBTlZBU19XSURUSCA9IDgwMDtcbmNvbnN0IENBTlZBU19IRUlHSFQgPSA2MDA7XG5jb25zdCBLUklMTF9BUlIgPSBbXVxubGV0IExBU1RfVElNRSA9IDA7XG5sZXQgS1JJTExfVElNRVIgPSAwO1xubGV0IEtSSUxMX0lOVEVSVkFMID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDUwMCArIDM1MDApO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlld3tcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuaGVucnkgPSBuZXcgSGVucnkoQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hULCBjdHgpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZChDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQsIGN0eClcbiAgICAgICAgdGhpcy5hbmltYXRlKDApO1xuICAgICAgICB0aGlzLmluY3JlbWVudGVyID0gMDtcbiAgICB9XG5cbiAgICBhbmltYXRlKHRpbWVTdGFtcCl7XG4gICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IHRpbWVTdGFtcCAtIExBU1RfVElNRTtcbiAgICAgICAgTEFTVF9USU1FID0gdGltZVN0YW1wO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmFuaW1hdGVCYWNrZ3JvdW5kKCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLmhlbnJ5LmFuaW1hdGVIZW5yeSgpO1xuICAgICAgICB0aGlzLmhhbmRsZUtyaWxsKGRlbHRhVGltZSk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICBoYW5kbGVLcmlsbChkZWx0YVRpbWUpeyAgXG4gICAgICAgIGlmKEtSSUxMX1RJTUVSID4gS1JJTExfSU5URVJWQUwpe1xuICAgICAgICAgICAgbGV0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoQ0FOVkFTX0hFSUdIVCAtIDEwMCkgKyAwKVxuICAgICAgICAgICAgS1JJTExfQVJSLnB1c2gobmV3IEtyaWxsKENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCwgdGhpcy5jdHgsIC0xMCwgcmFuZG9tWSkpXG4gICAgICAgICAgICBLUklMTF9USU1FUiA9IDA7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIEtSSUxMX1RJTUVSICs9IGRlbHRhVGltZTtcbiAgICAgICAgfVxuICAgICAgICBLUklMTF9BUlIuZm9yRWFjaCgoa3JpbGwpPT4ge1xuICAgICAgICAgICAga3JpbGwuYW5pbWF0ZUtyaWxsKCk7XG4gICAgICAgICAgICBrcmlsbC51cGRhdGVLcmlsbFBvcygpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbn1cblxuIl0sIm5hbWVzIjpbIkdhbWUiLCJIZW5yeSIsIktyaWxsIiwiQmFja2dyb3VuZCIsIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJLUklMTF9BUlIiLCJMQVNUX1RJTUUiLCJLUklMTF9USU1FUiIsIktSSUxMX0lOVEVSVkFMIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiR2FtZVZpZXciLCJjb25zdHJ1Y3RvciIsImN0eCIsImdhbWUiLCJoZW5yeSIsImJhY2tncm91bmQiLCJhbmltYXRlIiwiaW5jcmVtZW50ZXIiLCJ0aW1lU3RhbXAiLCJkZWx0YVRpbWUiLCJjbGVhclJlY3QiLCJhbmltYXRlQmFja2dyb3VuZCIsInVwZGF0ZVBvc2l0aW9uIiwiYW5pbWF0ZUhlbnJ5IiwiaGFuZGxlS3JpbGwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwicmFuZG9tWSIsInB1c2giLCJmb3JFYWNoIiwia3JpbGwiLCJhbmltYXRlS3JpbGwiLCJ1cGRhdGVLcmlsbFBvcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/henry.js":
/*!******************************!*\
  !*** ./src/scripts/henry.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Henry; }\n/* harmony export */ });\nconst henry = new Image();\nhenry.src = './images/henrysprite.png';\nconst background = new Image();\nbackground.src = './images/background.png';\nconst KEYS = [];\nclass Henry {\n  constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx) {\n    this.name = \"Henry\";\n    this.ctx = ctx;\n    this.CANVAS_WIDTH = CANVAS_WIDTH;\n    this.CANVAS_HEIGHT = CANVAS_HEIGHT;\n    this.henryWidth = 188;\n    this.henryHeight = 55;\n    this.frameX = 1;\n    this.incrementer = 0;\n    this.y = 250;\n    this.x = 600;\n    this.addListeners();\n  }\n  animateHenry() {\n    this.ctx.drawImage(henry, this.frameX * this.henryWidth, this.henryHeight, this.henryWidth, this.henryHeight, this.x, this.y, this.henryWidth, this.henryHeight);\n    if (this.incrementer % 20 === 0) {\n      if (this.frameX < 4) {\n        this.frameX++;\n      }\n      if (this.frameX === 4) {\n        this.frameX = 0;\n      }\n    }\n    this.incrementer++;\n  }\n  moveHorizontallyLeft() {\n    if (this.x > 0) {\n      this.x--;\n    } else {\n      this.x = 600;\n    }\n    requestAnimationFrame(this.moveHorizontallyLeft.bind(this));\n  }\n  moveHorizontallyRight() {\n    if (this.x < 600) {\n      this.x++;\n    } else {\n      this.x = 600;\n    }\n    requestAnimationFrame(this.moveHorizontallyRight.bind(this));\n  }\n  moveVerticallyUp() {\n    if (this.y > 0) {\n      this.y--;\n    } else {\n      this.y = 0;\n    }\n    requestAnimationFrame(this.moveVerticallyUp.bind(this));\n  }\n  moveVerticallyDown() {\n    if (this.y < 450) {\n      this.y++;\n    } else {\n      this.y = 450;\n    }\n    requestAnimationFrame(this.moveVerticallyDown.bind(this));\n  }\n  addListeners() {\n    window.addEventListener(\"keydown\", e => {\n      if (e.key === \"ArrowLeft\") {\n        this.moveHorizontallyLeft();\n      } else if (e.key === \"ArrowRight\") {\n        this.moveHorizontallyRight();\n      } else if (e.key === \"ArrowUp\") {\n        this.moveVerticallyUp();\n      } else if (e.key === \"ArrowDown\") {\n        this.moveVerticallyDown();\n      }\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRztJQUNqQixJQUFJLElBQUksQ0FBQ1YsQ0FBQyxHQUFHLEdBQUcsRUFBRTtNQUNkLElBQUksQ0FBQ0EsQ0FBQyxFQUFFO0lBQ1osQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDQSxDQUFDLEdBQUcsR0FBRztJQUNoQjtJQUNKTSxxQkFBcUIsQ0FBQyxJQUFJLENBQUNJLGtCQUFrQixDQUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDekQ7RUFFQUwsWUFBWSxHQUFFO0lBQ1ZTLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFHQyxDQUFDLElBQUc7TUFDcEMsSUFBR0EsQ0FBQyxDQUFDQyxHQUFHLEtBQUssV0FBVyxFQUFDO1FBQ3JCLElBQUksQ0FBQ1Qsb0JBQW9CLEVBQUU7TUFDL0IsQ0FBQyxNQUFNLElBQUlRLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLFlBQVksRUFBRTtRQUMvQixJQUFJLENBQUNOLHFCQUFxQixFQUFFO01BQ2hDLENBQUMsTUFBTSxJQUFHSyxDQUFDLENBQUNDLEdBQUcsS0FBSyxTQUFTLEVBQUM7UUFDMUIsSUFBSSxDQUFDTCxnQkFBZ0IsRUFBRTtNQUMzQixDQUFDLE1BQUssSUFBR0ksQ0FBQyxDQUFDQyxHQUFHLEtBQUssV0FBVyxFQUFDO1FBQzNCLElBQUksQ0FBQ0osa0JBQWtCLEVBQUU7TUFDN0I7SUFDSixDQUFDLENBQUM7RUFDTjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVucnlodW1wYmFjay8uL3NyYy9zY3JpcHRzL2hlbnJ5LmpzPzI1ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVucnkgPSBuZXcgSW1hZ2UoKTtcbmhlbnJ5LnNyYyA9ICcuL2ltYWdlcy9oZW5yeXNwcml0ZS5wbmcnXG5jb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG5iYWNrZ3JvdW5kLnNyYyA9ICcuL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZydcblxuY29uc3QgS0VZUyA9IFtdXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbnJ5IHtcbiAgICBjb25zdHJ1Y3RvcihDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQsIGN0eCl7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSGVucnlcIjtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuQ0FOVkFTX1dJRFRIID0gQ0FOVkFTX1dJRFRIO1xuICAgICAgICB0aGlzLkNBTlZBU19IRUlHSFQgPSBDQU5WQVNfSEVJR0hUO1xuICAgICAgICB0aGlzLmhlbnJ5V2lkdGggPSAxODg7XG4gICAgICAgIHRoaXMuaGVucnlIZWlnaHQgPSA1NTtcbiAgICAgICAgdGhpcy5mcmFtZVg9IDE7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50ZXIgPTA7XG4gICAgICAgIHRoaXMueSA9IDI1MDtcbiAgICAgICAgdGhpcy54ID02MDA7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZUhlbnJ5KCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGVucnksICh0aGlzLmZyYW1lWCAqIHRoaXMuaGVucnlXaWR0aCksIHRoaXMuaGVucnlIZWlnaHQsIHRoaXMuaGVucnlXaWR0aCwgdGhpcy5oZW5yeUhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVucnlXaWR0aCwgdGhpcy5oZW5yeUhlaWdodCk7XG4gICAgICAgIGlmICh0aGlzLmluY3JlbWVudGVyICUgMjAgPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lWCA8IDQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lWCsrO1xuICAgICAgICAgICAgfSBpZiAodGhpcy5mcmFtZVggPT09IDQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICB0aGlzLmluY3JlbWVudGVyKytcbiAgICB9XG5cbiAgICBtb3ZlSG9yaXpvbnRhbGx5TGVmdCgpe1xuICAgICAgICBpZih0aGlzLnggPiAwKXtcbiAgICAgICAgICAgIHRoaXMueC0tO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMueCA9IDYwMDtcbiAgICAgICAgfVxuICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlSG9yaXpvbnRhbGx5TGVmdC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBtb3ZlSG9yaXpvbnRhbGx5UmlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnggPDYwMCkge1xuICAgICAgICAgICAgdGhpcy54Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSA2MDA7XG4gICAgICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlSG9yaXpvbnRhbGx5UmlnaHQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgbW92ZVZlcnRpY2FsbHlVcCgpe1xuICAgICAgICBpZiAodGhpcy55ID4gMCkge1xuICAgICAgICAgICAgdGhpcy55LS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVZlcnRpY2FsbHlVcC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBtb3ZlVmVydGljYWxseURvd24oKSB7XG4gICAgICAgIGlmICh0aGlzLnkgPCA0NTApIHtcbiAgICAgICAgICAgIHRoaXMueSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy55ID0gNDUwO1xuICAgICAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVZlcnRpY2FsbHlEb3duLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycygpe1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpPT57XG4gICAgICAgICAgICBpZihlLmtleSA9PT0gXCJBcnJvd0xlZnRcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlSG9yaXpvbnRhbGx5TGVmdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVIb3Jpem9udGFsbHlSaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGUua2V5ID09PSBcIkFycm93VXBcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVmVydGljYWxseVVwKCk7XG4gICAgICAgICAgICB9ZWxzZSBpZihlLmtleSA9PT0gXCJBcnJvd0Rvd25cIil7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVmVydGljYWxseURvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbImhlbnJ5IiwiSW1hZ2UiLCJzcmMiLCJiYWNrZ3JvdW5kIiwiS0VZUyIsIkhlbnJ5IiwiY29uc3RydWN0b3IiLCJDQU5WQVNfV0lEVEgiLCJDQU5WQVNfSEVJR0hUIiwiY3R4IiwibmFtZSIsImhlbnJ5V2lkdGgiLCJoZW5yeUhlaWdodCIsImZyYW1lWCIsImluY3JlbWVudGVyIiwieSIsIngiLCJhZGRMaXN0ZW5lcnMiLCJhbmltYXRlSGVucnkiLCJkcmF3SW1hZ2UiLCJtb3ZlSG9yaXpvbnRhbGx5TGVmdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJtb3ZlSG9yaXpvbnRhbGx5UmlnaHQiLCJtb3ZlVmVydGljYWxseVVwIiwibW92ZVZlcnRpY2FsbHlEb3duIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/henry.js\n");

/***/ }),

/***/ "./src/scripts/krill.js":
/*!******************************!*\
  !*** ./src/scripts/krill.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Krill; }\n/* harmony export */ });\nconst krill = new Image();\nkrill.src = './images/krillcloud.png';\nclass Krill {\n  constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx, x, y) {\n    this.ctx = ctx;\n    this.CANVAS_WIDTH = CANVAS_WIDTH;\n    this.CANVAS_HEIGHT = CANVAS_HEIGHT;\n    this.krillWidth = 115;\n    this.krillHeight = 71;\n    this.frameX = 1;\n    this.incrementer = 0;\n    this.y = y;\n    this.x = x;\n    this.scroll = 2;\n  }\n  animateKrill() {\n    this.ctx.drawImage(krill, this.frameX * this.krillWidth, this.krillHeight, this.krillWidth, this.krillHeight, this.x, this.y, this.krillWidth, this.krillHeight);\n    if (this.incrementer % 20 === 0) {\n      if (this.frameX < 5) {\n        this.frameX++;\n      }\n      if (this.frameX === 5) {\n        this.frameX = 0;\n      }\n    }\n    this.incrementer++;\n  }\n  updateKrillPos() {\n    this.x += this.scroll;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9rcmlsbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUN6QkQsS0FBSyxDQUFDRSxHQUFHLEdBQUcseUJBQXlCO0FBRXRCLE1BQU1DLEtBQUssQ0FBQztFQUN2QkMsV0FBVyxDQUFDQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsR0FBRyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBQztJQUMvQyxJQUFJLENBQUNGLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0YsWUFBWSxHQUFHQSxZQUFZO0lBQ2hDLElBQUksQ0FBQ0MsYUFBYSxHQUFHQSxhQUFhO0lBQ2xDLElBQUksQ0FBQ0ksVUFBVSxHQUFHLEdBQUc7SUFDckIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2YsSUFBSSxDQUFDQyxXQUFXLEdBQUcsQ0FBQztJQUNwQixJQUFJLENBQUNKLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0QsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDTSxNQUFNLEdBQUcsQ0FBQztFQUNuQjtFQUVBQyxZQUFZLEdBQUU7SUFDVixJQUFJLENBQUNSLEdBQUcsQ0FBQ1MsU0FBUyxDQUFDaEIsS0FBSyxFQUFHLElBQUksQ0FBQ1ksTUFBTSxHQUFHLElBQUksQ0FBQ0YsVUFBVSxFQUFHLElBQUksQ0FBQ0MsV0FBVyxFQUFFLElBQUksQ0FBQ0QsVUFBVSxFQUFFLElBQUksQ0FBQ0MsV0FBVyxFQUFFLElBQUksQ0FBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsVUFBVSxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDO0lBQ2pLLElBQUksSUFBSSxDQUFDRSxXQUFXLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRTtNQUM5QixJQUFJLElBQUksQ0FBQ0QsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNqQixJQUFJLENBQUNBLE1BQU0sRUFBRTtNQUNqQjtNQUFFLElBQUksSUFBSSxDQUFDQSxNQUFNLEtBQUksQ0FBQyxFQUFFO1FBQ3BCLElBQUksQ0FBQ0EsTUFBTSxHQUFFLENBQUM7TUFDbEI7SUFDSjtJQUNBLElBQUksQ0FBQ0MsV0FBVyxFQUFFO0VBQ3RCO0VBRUFJLGNBQWMsR0FBRTtJQUNaLElBQUksQ0FBQ1QsQ0FBQyxJQUFJLElBQUksQ0FBQ00sTUFBTTtFQUV6QjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVucnlodW1wYmFjay8uL3NyYy9zY3JpcHRzL2tyaWxsLmpzPzljMjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qga3JpbGwgPSBuZXcgSW1hZ2UoKTtcbmtyaWxsLnNyYyA9ICcuL2ltYWdlcy9rcmlsbGNsb3VkLnBuZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS3JpbGwge1xuICAgIGNvbnN0cnVjdG9yKENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCwgY3R4LCB4LCB5KXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuQ0FOVkFTX1dJRFRIID0gQ0FOVkFTX1dJRFRIO1xuICAgICAgICB0aGlzLkNBTlZBU19IRUlHSFQgPSBDQU5WQVNfSEVJR0hUO1xuICAgICAgICB0aGlzLmtyaWxsV2lkdGggPSAxMTU7XG4gICAgICAgIHRoaXMua3JpbGxIZWlnaHQgPSA3MTtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAxO1xuICAgICAgICB0aGlzLmluY3JlbWVudGVyID0gMDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy5zY3JvbGwgPSAyO1xuICAgIH1cblxuICAgIGFuaW1hdGVLcmlsbCgpe1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2Uoa3JpbGwsICh0aGlzLmZyYW1lWCAqIHRoaXMua3JpbGxXaWR0aCksIHRoaXMua3JpbGxIZWlnaHQsIHRoaXMua3JpbGxXaWR0aCwgdGhpcy5rcmlsbEhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMua3JpbGxXaWR0aCwgdGhpcy5rcmlsbEhlaWdodCk7XG4gICAgICAgICBpZiAodGhpcy5pbmNyZW1lbnRlciAlIDIwID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZVggPCA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVgrKztcbiAgICAgICAgICAgIH0gaWYgKHRoaXMuZnJhbWVYID09PTUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lWCA9MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluY3JlbWVudGVyKytcbiAgICB9XG5cbiAgICB1cGRhdGVLcmlsbFBvcygpe1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5zY3JvbGw7XG5cbiAgICB9XG4gICAgXG59XG4iXSwibmFtZXMiOlsia3JpbGwiLCJJbWFnZSIsInNyYyIsIktyaWxsIiwiY29uc3RydWN0b3IiLCJDQU5WQVNfV0lEVEgiLCJDQU5WQVNfSEVJR0hUIiwiY3R4IiwieCIsInkiLCJrcmlsbFdpZHRoIiwia3JpbGxIZWlnaHQiLCJmcmFtZVgiLCJpbmNyZW1lbnRlciIsInNjcm9sbCIsImFuaW1hdGVLcmlsbCIsImRyYXdJbWFnZSIsInVwZGF0ZUtyaWxsUG9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/krill.js\n");

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