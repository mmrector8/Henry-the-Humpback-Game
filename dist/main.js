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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _henry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./henry.js */ \"./src/scripts/henry.js\");\n//import Henry from \"./scripts/henry.js\"\n\nconst CANVAS_WIDTH = 800;\nconst CANVAS_HEIGHT = 600;\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.score = 0;\n    this.timer = 200;\n    this.winningScore = 100;\n    this.lives = 3;\n    this.setUpGame();\n  }\n  animateBackground() {\n    this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n    this.ctx.fillStyle = \"#2B65EC\";\n    this.ctx.fillRect(0, 0, 800, 600);\n  }\n  setUpGame() {\n    this.animateBackground();\n    let newHenry = new _henry_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.CANVAS_WIDTH, this.CANVAS_HEIGHT, this.ctx);\n    this.player.animateHenry();\n  }\n  winner() {\n    if (this.gameOver()) {\n      if (this.score >= this.winningScore && !this.threeLivesLost()) {\n        console.log(\"Congratulations, you won!\");\n      } else {\n        console.log(\"oh no, try again!\");\n      }\n    }\n  }\n  gameOver() {\n    if (this.timeOut() || this.threeLivesLost()) return true;\n  }\n  timeOut() {\n    if (this.timer === 0) return true;\n    return false;\n  }\n  threeLivesLost() {\n    if (this.lives > 0) return false;\n    return true;\n  }\n  incrementScore() {\n    this.score += 100;\n  }\n  loseLife() {\n    this.lives -= 1;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDOEI7QUFFOUIsTUFBTUMsWUFBWSxHQUFHLEdBQUc7QUFDeEIsTUFBTUMsYUFBYSxHQUFHLEdBQUc7QUFFVixNQUFNQyxJQUFJLENBQUM7RUFDdEJDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFDO0lBQ1osSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsR0FBRztJQUNoQixJQUFJLENBQUNDLFlBQVksR0FBRyxHQUFHO0lBQ3ZCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQUM7SUFDZCxJQUFJLENBQUNDLFNBQVMsRUFBRTtFQUVwQjtFQUVBQyxpQkFBaUIsR0FBRTtJQUNmLElBQUksQ0FBQ04sR0FBRyxDQUFDTyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRVgsWUFBWSxFQUFFQyxhQUFhLENBQUM7SUFDckQsSUFBSSxDQUFDRyxHQUFHLENBQUNRLFNBQVMsR0FBRyxTQUFTO0lBQzlCLElBQUksQ0FBQ1IsR0FBRyxDQUFDUyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ3JDO0VBRUFKLFNBQVMsR0FBRztJQUNSLElBQUksQ0FBQ0MsaUJBQWlCLEVBQUU7SUFDeEIsSUFBSUksUUFBUSxHQUFHLElBQUlmLGlEQUFLLENBQUMsSUFBSSxDQUFDQyxZQUFZLEVBQUUsSUFBSSxDQUFDQyxhQUFhLEVBQUUsSUFBSSxDQUFDRyxHQUFHLENBQUM7SUFDekUsSUFBSSxDQUFDVyxNQUFNLENBQUNDLFlBQVksRUFBRTtFQUM5QjtFQUVBQyxNQUFNLEdBQUU7SUFDSixJQUFJLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEVBQUM7TUFDaEIsSUFBSSxJQUFJLENBQUNiLEtBQUssSUFBSSxJQUFJLENBQUNFLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQ1ksY0FBYyxFQUFFLEVBQUM7UUFDMURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO01BQzVDLENBQUMsTUFBSTtRQUNERCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztNQUNwQztJQUNKO0VBQ0o7RUFFQUgsUUFBUSxHQUFFO0lBQ04sSUFBSSxJQUFJLENBQUNJLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQ0gsY0FBYyxFQUFFLEVBQUUsT0FBTyxJQUFJO0VBQzVEO0VBRUFHLE9BQU8sR0FBRTtJQUNMLElBQUksSUFBSSxDQUFDaEIsS0FBSyxLQUFLLENBQUMsRUFBRSxPQUFPLElBQUk7SUFDakMsT0FBTyxLQUFLO0VBQ2hCO0VBRUFhLGNBQWMsR0FBRTtJQUNaLElBQUksSUFBSSxDQUFDWCxLQUFLLEdBQUcsQ0FBQyxFQUFFLE9BQU8sS0FBSztJQUNoQyxPQUFPLElBQUk7RUFDZjtFQUVBZSxjQUFjLEdBQUU7SUFDWixJQUFJLENBQUNsQixLQUFLLElBQUksR0FBRztFQUNyQjtFQUVBbUIsUUFBUSxHQUFFO0lBQ04sSUFBSSxDQUFDaEIsS0FBSyxJQUFHLENBQUM7RUFDbEI7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbnJ5aHVtcGJhY2svLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgSGVucnkgZnJvbSBcIi4vc2NyaXB0cy9oZW5yeS5qc1wiXG5pbXBvcnQgSGVucnkgZnJvbSBcIi4vaGVucnkuanNcIlxuXG5jb25zdCBDQU5WQVNfV0lEVEggPSA4MDA7XG5jb25zdCBDQU5WQVNfSEVJR0hUID0gNjAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMudGltZXIgPSAyMDBcbiAgICAgICAgdGhpcy53aW5uaW5nU2NvcmUgPSAxMDA7XG4gICAgICAgIHRoaXMubGl2ZXMgPSAzXG4gICAgICAgIHRoaXMuc2V0VXBHYW1lKClcblxuICAgIH1cblxuICAgIGFuaW1hdGVCYWNrZ3JvdW5kKCl7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMyQjY1RUNcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgODAwLCA2MDApO1xuICAgIH1cbiAgICBcbiAgICBzZXRVcEdhbWUoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUJhY2tncm91bmQoKVxuICAgICAgICBsZXQgbmV3SGVucnkgPSBuZXcgSGVucnkodGhpcy5DQU5WQVNfV0lEVEgsIHRoaXMuQ0FOVkFTX0hFSUdIVCwgdGhpcy5jdHgpXG4gICAgICAgIHRoaXMucGxheWVyLmFuaW1hdGVIZW5yeSgpXG4gICAgfVxuXG4gICAgd2lubmVyKCl7XG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKCkpe1xuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPj0gdGhpcy53aW5uaW5nU2NvcmUgJiYgIXRoaXMudGhyZWVMaXZlc0xvc3QoKSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25ncmF0dWxhdGlvbnMsIHlvdSB3b24hXCIpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9oIG5vLCB0cnkgYWdhaW4hXCIpXG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIGlmICh0aGlzLnRpbWVPdXQoKSB8fCB0aGlzLnRocmVlTGl2ZXNMb3N0KCkpIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRpbWVPdXQoKXtcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPT09IDApIHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRocmVlTGl2ZXNMb3N0KCl7XG4gICAgICAgIGlmICh0aGlzLmxpdmVzID4gMCkgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgaW5jcmVtZW50U2NvcmUoKXtcbiAgICAgICAgdGhpcy5zY29yZSArPSAxMDA7XG4gICAgfVxuXG4gICAgbG9zZUxpZmUoKXtcbiAgICAgICAgdGhpcy5saXZlcyAtPTFcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiSGVucnkiLCJDQU5WQVNfV0lEVEgiLCJDQU5WQVNfSEVJR0hUIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY3R4Iiwic2NvcmUiLCJ0aW1lciIsIndpbm5pbmdTY29yZSIsImxpdmVzIiwic2V0VXBHYW1lIiwiYW5pbWF0ZUJhY2tncm91bmQiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm5ld0hlbnJ5IiwicGxheWVyIiwiYW5pbWF0ZUhlbnJ5Iiwid2lubmVyIiwiZ2FtZU92ZXIiLCJ0aHJlZUxpdmVzTG9zdCIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lT3V0IiwiaW5jcmVtZW50U2NvcmUiLCJsb3NlTGlmZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/henry.js":
/*!******************************!*\
  !*** ./src/scripts/henry.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Henry; }\n/* harmony export */ });\nconst henry = new Image();\nhenry.src = './images/henrysprite.png';\nlet henryWidth = 188;\nlet henryHeight = 55;\nlet frameX = 1;\nlet gameFrame = 0;\nclass Henry {\n  constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx) {\n    this.name = \"Henry\";\n    this.ctx = ctx;\n    this.CANVAS_WIDTH = CANVAS_WIDTH;\n    this.CANVAS_HEIGHT = CANVAS_HEIGHT;\n    this.width = 200;\n    this.height = 200;\n    this.x = 0;\n    this.y = 0;\n    this.speed = 0;\n    this.animateHenry();\n  }\n  animateHenry() {\n    this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);\n    this.ctx.fillRect(0, 0, 800, 600);\n    this.ctx.drawImage(henry, frameX * henryWidth, henryHeight, henryWidth, henryHeight, 600, 250, henryWidth, henryHeight);\n    if (gameFrame % 20 === 0) {\n      if (frameX < 4) {\n        frameX++;\n      }\n      if (frameX === 4) {\n        frameX = 0;\n      }\n    }\n    gameFrame++;\n    requestAnimationFrame(this.animateHenry.bind(this));\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZW5yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUN6QkQsS0FBSyxDQUFDRSxHQUFHLEdBQUcsMEJBQTBCO0FBRXRDLElBQUlDLFVBQVUsR0FBRyxHQUFHO0FBQ3BCLElBQUlDLFdBQVcsR0FBRyxFQUFFO0FBQ3BCLElBQUlDLE1BQU0sR0FBRyxDQUFDO0FBQ2QsSUFBSUMsU0FBUyxHQUFHLENBQUM7QUFFRixNQUFNQyxLQUFLLENBQUM7RUFDdkJDLFdBQVcsQ0FBQ0MsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLEdBQUcsRUFBQztJQUN6QyxJQUFJLENBQUNDLElBQUksR0FBRyxPQUFPO0lBQ25CLElBQUksQ0FBQ0QsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDRixZQUFZLEdBQUdBLFlBQVk7SUFDaEMsSUFBSSxDQUFDQyxhQUFhLEdBQUdBLGFBQWE7SUFDbEMsSUFBSSxDQUFDRyxLQUFLLEdBQUcsR0FBRztJQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO0lBQ2pCLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBRSxDQUFDO0lBQ1QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUNkLElBQUksQ0FBQ0MsWUFBWSxFQUFFO0VBQ3ZCO0VBRUFBLFlBQVksR0FBRztJQUNYLElBQUksQ0FBQ1AsR0FBRyxDQUFDUSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUNWLFlBQVksRUFBRSxJQUFJLENBQUNDLGFBQWEsQ0FBQztJQUMvRCxJQUFJLENBQUNDLEdBQUcsQ0FBQ1MsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNqQyxJQUFJLENBQUNULEdBQUcsQ0FBQ1UsU0FBUyxDQUFDckIsS0FBSyxFQUFHSyxNQUFNLEdBQUdGLFVBQVUsRUFBSUMsV0FBVyxFQUFJRCxVQUFVLEVBQUlDLFdBQVcsRUFBRyxHQUFHLEVBQUUsR0FBRyxFQUFFRCxVQUFVLEVBQUVDLFdBQVcsQ0FBQztJQUUvSCxJQUFJRSxTQUFTLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRTtNQUN0QixJQUFJRCxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ1pBLE1BQU0sRUFBRTtNQUNaO01BQUUsSUFBSUEsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNoQkEsTUFBTSxHQUFHLENBQUM7TUFDZDtJQUNKO0lBQ0FDLFNBQVMsRUFBRTtJQUNYZ0IscUJBQXFCLENBQUMsSUFBSSxDQUFDSixZQUFZLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUN2RDtBQUdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVucnlodW1wYmFjay8uL3NyYy9zY3JpcHRzL2hlbnJ5LmpzPzI1ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVucnkgPSBuZXcgSW1hZ2UoKTtcbmhlbnJ5LnNyYyA9ICcuL2ltYWdlcy9oZW5yeXNwcml0ZS5wbmcnXG5cbmxldCBoZW5yeVdpZHRoID0gMTg4O1xubGV0IGhlbnJ5SGVpZ2h0ID0gNTU7XG5sZXQgZnJhbWVYID0gMTtcbmxldCBnYW1lRnJhbWUgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZW5yeSB7XG4gICAgY29uc3RydWN0b3IoQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hULCBjdHgpe1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkhlbnJ5XCI7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLkNBTlZBU19XSURUSCA9IENBTlZBU19XSURUSDtcbiAgICAgICAgdGhpcy5DQU5WQVNfSEVJR0hUID0gQ0FOVkFTX0hFSUdIVDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDIwMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyMDA7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9MDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUhlbnJ5KClcbiAgICB9XG5cbiAgICBhbmltYXRlSGVucnkoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkNBTlZBU19XSURUSCwgdGhpcy5DQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgODAwLCA2MDApO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGVucnksIChmcmFtZVggKiBoZW5yeVdpZHRoKSwgKGhlbnJ5SGVpZ2h0KSwgKGhlbnJ5V2lkdGgpLCAoaGVucnlIZWlnaHQpLCA2MDAsIDI1MCwgaGVucnlXaWR0aCwgaGVucnlIZWlnaHQpXG5cbiAgICAgICAgaWYgKGdhbWVGcmFtZSAlIDIwID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoZnJhbWVYIDwgNCkge1xuICAgICAgICAgICAgICAgIGZyYW1lWCsrXG4gICAgICAgICAgICB9IGlmIChmcmFtZVggPT09IDQpIHtcbiAgICAgICAgICAgICAgICBmcmFtZVggPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZUZyYW1lKytcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZUhlbnJ5LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIFxufSJdLCJuYW1lcyI6WyJoZW5yeSIsIkltYWdlIiwic3JjIiwiaGVucnlXaWR0aCIsImhlbnJ5SGVpZ2h0IiwiZnJhbWVYIiwiZ2FtZUZyYW1lIiwiSGVucnkiLCJjb25zdHJ1Y3RvciIsIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJjdHgiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsInNwZWVkIiwiYW5pbWF0ZUhlbnJ5IiwiY2xlYXJSZWN0IiwiZmlsbFJlY3QiLCJkcmF3SW1hZ2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/henry.js\n");

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