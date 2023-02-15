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

/***/ "./src/js/loading.js":
/*!***************************!*\
  !*** ./src/js/loading.js ***!
  \***************************/
/***/ (() => {

eval("function animateLoadingScreen() {\n  const animationSeen = localStorage.getItem(\"animationLoaded\");\n  const loadingProgressBar = document.querySelector(\".js-loading-progress-fill\");\n  const extensionOne = document.querySelector(\".js-extension-1\");\n  const extensionTwo = document.querySelector(\".js-extension-2\");\n  const extensionThree = document.querySelector(\".js-extension-3\");\n  const extensionFour = document.querySelector(\".js-extension-4\");\n\n  function gotoHome() {\n    window.open(\"/home/\",\"_self\");\n  }\n\n  function step1() {\n    loadingProgressBar.style.width = \"10%\";\n  }\n\n  function step2() {\n    loadingProgressBar.style.width = \"20%\";\n    extensionOne.style.display = \"inline-block\";\n  }\n\n  function step3() {\n    loadingProgressBar.style.width = \"60%\";\n    extensionTwo.style.display = \"inline-block\";\n  }\n\n  function step4() {\n    loadingProgressBar.style.width = \"80%\";\n    extensionThree.style.display = \"inline-block\";\n  }\n\n  function step5() {\n    loadingProgressBar.style.width = \"100%\";\n    extensionFour.style.display = \"inline-block\";\n  }\n\n  function step6() {\n    localStorage.setItem(\"animationLoaded\", true);\n    gotoHome();\n  }\n\n  if (animationSeen == \"true\") {\n    setTimeout(step2, 1);\n    setTimeout(step3, 200);\n    setTimeout(step4, 500);\n    setTimeout(step5, 850);\n    setTimeout(step6, 1000);\n  } \n\n  else {\n    setTimeout(step1, 1);\n    setTimeout(step2, 500);\n    setTimeout(step3, 1000);\n    setTimeout(step4, 2500);\n    setTimeout(step5, 3000);\n    setTimeout(step6, 3150);\n  }\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function() { \n  animateLoadingScreen();\n})\n\n//# sourceURL=webpack://humanfriendlydesign/./src/js/loading.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/loading.js"]();
/******/ 	
/******/ })()
;