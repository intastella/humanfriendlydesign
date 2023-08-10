/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ (() => {

eval("function homePageAnimations() {\n  const splineEmbed = document.querySelector(\".js-spline-viewer\");\n\n  setTimeout(function() {\n    splineEmbed.classList.add('spline-desktop-embed--on');\n  }, 750);\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function() { \n  homePageAnimations();\n})\n\n//# sourceURL=webpack://humanfriendlydesign/./src/js/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/home.js"]();
/******/ 	
/******/ })()
;