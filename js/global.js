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

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/***/ (() => {

eval("function toggleColorTheme() {\n  if (document.documentElement.classList.contains(\"theme-dark\")) {\n    document.documentElement.classList.remove(\"theme-dark\");\n    document.documentElement.classList.add(\"theme-light\");\n    localStorage.setItem(\"colorTheme\", \"light\");\n  } else {\n    document.documentElement.classList.remove(\"theme-light\");\n    document.documentElement.classList.add(\"theme-dark\");\n    localStorage.setItem(\"colorTheme\", \"dark\");\n  }\n}\n\nfunction initColorThemeSwitch() {\n  const buttonColorThemeSwitch = document.querySelector(\".js-theme-switch\");\n  const prefersDarkScheme = window.matchMedia(\"(prefers-color-scheme: dark)\");\n  const savedTheme = localStorage.getItem(\"colorTheme\");\n\n  if (buttonColorThemeSwitch !== null) {\n    buttonColorThemeSwitch.addEventListener(\"click\", function () {\n      toggleColorTheme();\n    });\n  }\n\n  if (savedTheme == null) {\n    if (prefersDarkScheme.matches) {\n      document.documentElement.classList.add(\"theme-dark\");\n    }\n  } else {\n    if (savedTheme == \"dark\") {\n      document.documentElement.classList.add(\"theme-dark\");\n    }\n  }\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function() { \n  initColorThemeSwitch();\n})\n\n//# sourceURL=webpack://humanfriendlydesign/./src/js/global.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/global.js"]();
/******/ 	
/******/ })()
;