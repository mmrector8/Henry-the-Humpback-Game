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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n\nconst canvas = document.getElementById(\"game-canvas\");\nconst ctx = canvas.getContext(\"2d\");\nlet game1 = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n//game1.henry.addListeners()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBcUM7QUFFcEMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDckQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFHcEMsSUFBSUMsS0FBSyxHQUFHLElBQUlOLHdEQUFJLENBQUNJLEdBQUcsQ0FBQztBQUN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbnJ5aHVtcGJhY2svLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWUuanNcIjtcblxuIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIilcbiBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG5cblxubGV0IGdhbWUxID0gbmV3IEdhbWUoY3R4KTtcbi8vZ2FtZTEuaGVucnkuYWRkTGlzdGVuZXJzKClcbiJdLCJuYW1lcyI6WyJHYW1lIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Henry; }\n/* harmony export */ });\nconst henry = new Image();\nhenry.src = './images/henrysprite.png';\nclass Henry {\n  constructor(CANVAS_WIDTH, CANVAS_HEIGHT, ctx) {\n    this.name = \"Henry\";\n    this.ctx = ctx;\n    this.CANVAS_WIDTH = CANVAS_WIDTH;\n    this.CANVAS_HEIGHT = CANVAS_HEIGHT;\n    this.henryWidth = 188;\n    this.henryHeight = 55;\n    this.frameX = 1;\n    this.incrementer = 0;\n    this.y = 250;\n    this.x = 600;\n    this.animateHenry();\n    this.addListeners();\n  }\n  animateHenry() {\n    this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);\n    this.ctx.fillRect(0, 0, 800, 600);\n    this.ctx.drawImage(henry, this.frameX * this.henryWidth, this.henryHeight, this.henryWidth, this.henryHeight, this.x, this.y, this.henryWidth, this.henryHeight);\n    //this.moveHorizontally();\n    if (this.incrementer % 20 === 0) {\n      if (this.frameX < 4) {\n        this.frameX++;\n      }\n      if (this.frameX === 4) {\n        this.frameX = 0;\n      }\n    }\n    this.incrementer++;\n    requestAnimationFrame(this.animateHenry.bind(this));\n  }\n  moveHorizontallyLeft() {\n    if (this.x > 0) {\n      this.x--;\n    } else {\n      this.x = 0;\n    }\n    requestAnimationFrame(this.moveHorizontallyLeft.bind(this));\n  }\n  moveHorizontallyRight() {\n    if (this.x < 600) {\n      this.x++;\n    } else {\n      this.x = 600;\n    }\n    requestAnimationFrame(this.moveHorizontallyRight.bind(this));\n  }\n  moveVerticallyUp() {\n    if (this.y > 0) {\n      this.y--;\n    } else {\n      this.y = 0;\n    }\n    requestAnimationFrame(this.moveVerticallyUp.bind(this));\n  }\n  moveVerticallyDown() {\n    if (this.y < 500) {\n      this.y++;\n    } else {\n      this.y = 500;\n    }\n    requestAnimationFrame(this.moveVerticallyDown.bind(this));\n  }\n  addListeners() {\n    window.addEventListener(\"keydown\", e => {\n      if (e.key === \"ArrowLeft\") {\n        this.moveHorizontallyLeft();\n        console.log('should be moving left');\n      } else if (e.key === \"ArrowRight\") {\n        this.moveHorizontallyRight();\n      } else if (e.key === \"ArrowUp\") {\n        this.moveVerticallyUp();\n      } else if (e.key === \"ArrowDown\") {\n        this.moveVerticallyDown();\n      }\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsQ0FBQyxFQUFFO01BQ1osSUFBSSxDQUFDQSxDQUFDLEVBQUU7SUFDWixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNBLENBQUMsR0FBRyxDQUFDO0lBQ2Q7SUFDSk8scUJBQXFCLENBQUMsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3ZEO0VBRUFJLGtCQUFrQixHQUFHO0lBQ2pCLElBQUksSUFBSSxDQUFDWixDQUFDLEdBQUcsR0FBRyxFQUFFO01BQ2QsSUFBSSxDQUFDQSxDQUFDLEVBQUU7SUFDWixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNBLENBQUMsR0FBRyxHQUFHO0lBQ2hCO0lBQ0FPLHFCQUFxQixDQUFDLElBQUksQ0FBQ0ssa0JBQWtCLENBQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM3RDtFQUVBTCxZQUFZLEdBQUU7SUFDVlUsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUdDLENBQUMsSUFBRztNQUNwQyxJQUFHQSxDQUFDLENBQUNDLEdBQUcsS0FBSyxXQUFXLEVBQUM7UUFDckIsSUFBSSxDQUFDUCxvQkFBb0IsRUFBRTtRQUMzQlEsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7TUFDeEMsQ0FBQyxNQUFNLElBQUlILENBQUMsQ0FBQ0MsR0FBRyxLQUFLLFlBQVksRUFBRTtRQUMvQixJQUFJLENBQUNOLHFCQUFxQixFQUFFO01BQ2hDLENBQUMsTUFBTSxJQUFHSyxDQUFDLENBQUNDLEdBQUcsS0FBSyxTQUFTLEVBQUM7UUFDMUIsSUFBSSxDQUFDTCxnQkFBZ0IsRUFBRTtNQUMzQixDQUFDLE1BQUssSUFBR0ksQ0FBQyxDQUFDQyxHQUFHLEtBQUssV0FBVyxFQUFDO1FBQzNCLElBQUksQ0FBQ0osa0JBQWtCLEVBQUU7TUFDN0I7SUFDSixDQUFDLENBQUM7RUFDTjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVucnlodW1wYmFjay8uL3NyYy9zY3JpcHRzL2hlbnJ5LmpzPzI1ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVucnkgPSBuZXcgSW1hZ2UoKTtcbmhlbnJ5LnNyYyA9ICcuL2ltYWdlcy9oZW5yeXNwcml0ZS5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbnJ5IHtcbiAgICBjb25zdHJ1Y3RvcihDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQsIGN0eCl7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSGVucnlcIjtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuQ0FOVkFTX1dJRFRIID0gQ0FOVkFTX1dJRFRIO1xuICAgICAgICB0aGlzLkNBTlZBU19IRUlHSFQgPSBDQU5WQVNfSEVJR0hUO1xuICAgICAgICB0aGlzLmhlbnJ5V2lkdGggPSAxODg7XG4gICAgICAgIHRoaXMuaGVucnlIZWlnaHQgPSA1NTtcbiAgICAgICAgdGhpcy5mcmFtZVg9IDE7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50ZXIgPTA7XG4gICAgICAgIHRoaXMueSA9IDI1MDtcbiAgICAgICAgdGhpcy54ID02MDA7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUhlbnJ5KCk7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZUhlbnJ5KCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5DQU5WQVNfV0lEVEgsIHRoaXMuQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIDgwMCwgNjAwKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGhlbnJ5LCAodGhpcy5mcmFtZVggKiB0aGlzLmhlbnJ5V2lkdGgpLCB0aGlzLmhlbnJ5SGVpZ2h0LCB0aGlzLmhlbnJ5V2lkdGgsIHRoaXMuaGVucnlIZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlbnJ5V2lkdGgsIHRoaXMuaGVucnlIZWlnaHQpO1xuICAgICAgICAvL3RoaXMubW92ZUhvcml6b250YWxseSgpO1xuICAgICAgICBpZiAodGhpcy5pbmNyZW1lbnRlciAlIDIwID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZVggPCA0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVgrKztcbiAgICAgICAgICAgIH0gaWYgKHRoaXMuZnJhbWVYID09PSA0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgdGhpcy5pbmNyZW1lbnRlcisrXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGVIZW5yeS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBtb3ZlSG9yaXpvbnRhbGx5TGVmdCgpe1xuICAgICAgICBpZih0aGlzLnggPiAwKXtcbiAgICAgICAgICAgIHRoaXMueC0tO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIH1cbiAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZUhvcml6b250YWxseUxlZnQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgbW92ZUhvcml6b250YWxseVJpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy54IDw2MDApIHtcbiAgICAgICAgICAgIHRoaXMueCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gNjAwO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVIb3Jpem9udGFsbHlSaWdodC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBtb3ZlVmVydGljYWxseVVwKCl7XG4gICAgICAgIGlmICh0aGlzLnkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnktLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlVmVydGljYWxseVVwLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIG1vdmVWZXJ0aWNhbGx5RG93bigpIHtcbiAgICAgICAgaWYgKHRoaXMueSA8IDUwMCkge1xuICAgICAgICAgICAgdGhpcy55Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnkgPSA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVZlcnRpY2FsbHlEb3duLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycygpe1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpPT57XG4gICAgICAgICAgICBpZihlLmtleSA9PT0gXCJBcnJvd0xlZnRcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlSG9yaXpvbnRhbGx5TGVmdCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGQgYmUgbW92aW5nIGxlZnQnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVIb3Jpem9udGFsbHlSaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGUua2V5ID09PSBcIkFycm93VXBcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVmVydGljYWxseVVwKCk7XG4gICAgICAgICAgICB9ZWxzZSBpZihlLmtleSA9PT0gXCJBcnJvd0Rvd25cIil7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVmVydGljYWxseURvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbImhlbnJ5IiwiSW1hZ2UiLCJzcmMiLCJIZW5yeSIsImNvbnN0cnVjdG9yIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsImN0eCIsIm5hbWUiLCJoZW5yeVdpZHRoIiwiaGVucnlIZWlnaHQiLCJmcmFtZVgiLCJpbmNyZW1lbnRlciIsInkiLCJ4IiwiYW5pbWF0ZUhlbnJ5IiwiYWRkTGlzdGVuZXJzIiwiY2xlYXJSZWN0IiwiZmlsbFJlY3QiLCJkcmF3SW1hZ2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwibW92ZUhvcml6b250YWxseUxlZnQiLCJtb3ZlSG9yaXpvbnRhbGx5UmlnaHQiLCJtb3ZlVmVydGljYWxseVVwIiwibW92ZVZlcnRpY2FsbHlEb3duIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/henry.js\n");

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