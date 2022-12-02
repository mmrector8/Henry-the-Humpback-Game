/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("console.log('webpack is working!');\nconst canvas = document.getElementById(\"game-canvas\");\nconst ctx = canvas.getContext(\"2d\");\nconst CANVAS_WIDTH = canvas.width = 800;\nconst CANVAS_HEIGHT = canvas.height = 600;\nconst henry = new Image();\nhenry.src = './images/henrysprite.png';\nlet henryWidth = 188;\nlet henryHeight = 55;\nlet frameX = 1;\nlet gameFrame = 0;\nfunction animate() {\n  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n  ctx.fillRect(0, 0, 800, 600);\n  ctx.fillStyle = \"blue\";\n  //ctx.drawImage(playerImage, 600, 340, 190, 240)\n\n  ctx.drawImage(henry, frameX * henryWidth, henryHeight, henryWidth, henryHeight, 0, 0, henryWidth, henryHeight);\n  if (gameFrame % 20 === 0) {\n    if (frameX < 4) frameX++;\n    if (frameX === 4) frameX = 0;\n  }\n  gameFrame++;\n  requestAnimationFrame(animate);\n}\nanimate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJDQU5WQVNfV0lEVEgiLCJ3aWR0aCIsIkNBTlZBU19IRUlHSFQiLCJoZWlnaHQiLCJoZW5yeSIsIkltYWdlIiwic3JjIiwiaGVucnlXaWR0aCIsImhlbnJ5SGVpZ2h0IiwiZnJhbWVYIiwiZ2FtZUZyYW1lIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImZpbGxSZWN0IiwiZmlsbFN0eWxlIiwiZHJhd0ltYWdlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZW5yeWh1bXBiYWNrLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ3dlYnBhY2sgaXMgd29ya2luZyEnKVxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG5jb25zdCBDQU5WQVNfV0lEVEggPSBjYW52YXMud2lkdGggPSA4MDA7XG5jb25zdCBDQU5WQVNfSEVJR0hUID0gY2FudmFzLmhlaWdodCA9IDYwMDtcblxuY29uc3QgaGVucnkgPSBuZXcgSW1hZ2UoKTtcbmhlbnJ5LnNyYyA9ICcuL2ltYWdlcy9oZW5yeXNwcml0ZS5wbmcnXG5cbmxldCBoZW5yeVdpZHRoID0gMTg4O1xubGV0IGhlbnJ5SGVpZ2h0ID0gNTU7XG5sZXQgZnJhbWVYID0gMTsgXG5sZXQgZ2FtZUZyYW1lID0gMDtcblxuZnVuY3Rpb24gYW5pbWF0ZSgpe1xuICAgIGN0eC5jbGVhclJlY3QoMCwwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpXG4gICAgY3R4LmZpbGxSZWN0KDAsMCw4MDAsNjAwKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCJcbiAgICAvL2N0eC5kcmF3SW1hZ2UocGxheWVySW1hZ2UsIDYwMCwgMzQwLCAxOTAsIDI0MClcbiAgICBcbiAgICBjdHguZHJhd0ltYWdlKGhlbnJ5LCAoZnJhbWVYICogaGVucnlXaWR0aCksIChoZW5yeUhlaWdodCksIChoZW5yeVdpZHRoKSwgKGhlbnJ5SGVpZ2h0KSwgMCwgMCwgaGVucnlXaWR0aCwgaGVucnlIZWlnaHQpXG4gICAgaWYoZ2FtZUZyYW1lICUgMjAgPT09IDApe1xuICAgICAgICBpZiAoZnJhbWVYIDwgNCkgZnJhbWVYKytcbiAgICAgICAgaWYgKGZyYW1lWCA9PT0gNCkgZnJhbWVYPSAwXG4gICAgfVxuICAgIGdhbWVGcmFtZSsrXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xufVxuYW5pbWF0ZSgpOyJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixDQUFDO0FBRWxDLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDO0FBQ3JELE1BQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFVLENBQUMsSUFBSSxDQUFDO0FBQ25DLE1BQU1DLFlBQVksR0FBR0wsTUFBTSxDQUFDTSxLQUFLLEdBQUcsR0FBRztBQUN2QyxNQUFNQyxhQUFhLEdBQUdQLE1BQU0sQ0FBQ1EsTUFBTSxHQUFHLEdBQUc7QUFFekMsTUFBTUMsS0FBSyxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUN6QkQsS0FBSyxDQUFDRSxHQUFHLEdBQUcsMEJBQTBCO0FBRXRDLElBQUlDLFVBQVUsR0FBRyxHQUFHO0FBQ3BCLElBQUlDLFdBQVcsR0FBRyxFQUFFO0FBQ3BCLElBQUlDLE1BQU0sR0FBRyxDQUFDO0FBQ2QsSUFBSUMsU0FBUyxHQUFHLENBQUM7QUFFakIsU0FBU0MsT0FBTyxHQUFFO0VBQ2RiLEdBQUcsQ0FBQ2MsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUVaLFlBQVksRUFBRUUsYUFBYSxDQUFDO0VBQy9DSixHQUFHLENBQUNlLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7RUFDekJmLEdBQUcsQ0FBQ2dCLFNBQVMsR0FBRyxNQUFNO0VBQ3RCOztFQUVBaEIsR0FBRyxDQUFDaUIsU0FBUyxDQUFDWCxLQUFLLEVBQUdLLE1BQU0sR0FBR0YsVUFBVSxFQUFJQyxXQUFXLEVBQUlELFVBQVUsRUFBSUMsV0FBVyxFQUFHLENBQUMsRUFBRSxDQUFDLEVBQUVELFVBQVUsRUFBRUMsV0FBVyxDQUFDO0VBQ3RILElBQUdFLFNBQVMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFDO0lBQ3BCLElBQUlELE1BQU0sR0FBRyxDQUFDLEVBQUVBLE1BQU0sRUFBRTtJQUN4QixJQUFJQSxNQUFNLEtBQUssQ0FBQyxFQUFFQSxNQUFNLEdBQUUsQ0FBQztFQUMvQjtFQUNBQyxTQUFTLEVBQUU7RUFDWE0scUJBQXFCLENBQUNMLE9BQU8sQ0FBQztBQUNsQztBQUNBQSxPQUFPLEVBQUUifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZW5yeWh1bXBiYWNrLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;