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

eval("function setWelcomeMessage() {\n  const welcomeMessageElement = document.querySelector(\".js-welcome-message\");\n  const currentDate = new Date();\n  const currentTime = currentDate.getHours();\n  var welcomeMessage;\n\n  if (welcomeMessageElement !== null) {\n    if (currentTime >= 0 && currentTime <= 11) {\n      welcomeMessage = \"Good morning!\";\n    }\n    if (currentTime >= 12 && currentTime <= 17) {\n      welcomeMessage = \"Good afternoon!\";\n    }\n    if (currentTime >= 18 && currentTime <= 23) {\n      welcomeMessage = \"Good evening!\";\n    }\n\n    welcomeMessageElement.textContent=welcomeMessage;\n  }\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function() { \n  setWelcomeMessage();\n})\n\n//# sourceURL=webpack://humanfriendlydesign/./src/js/home.js?");

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