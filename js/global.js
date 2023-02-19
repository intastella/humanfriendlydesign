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

eval("function initColorThemeSwitch() {\n  const buttonColorThemeSwitch = document.querySelector(\".js-theme-switch\");\n  const prefersDarkScheme = window.matchMedia(\"(prefers-color-scheme: dark)\");\n  \n  function toggleColorTheme(event) {\n    const savedTheme = localStorage.getItem(\"colorTheme\");\n\n    if (event.type == \"click\") {\n      // console.log('click');\n      if (event.shiftKey) {\n        // console.log('click - shift was down');\n        localStorage.removeItem(\"colorTheme\");\n        toggleColorTheme(\"none\");\n      } else {\n        if (savedTheme == \"dark\") {\n          // console.log('saved was dark, switch to light');\n          document.documentElement.classList.remove(\"theme-dark\");\n          localStorage.setItem(\"colorTheme\", \"light\");\n        } \n        if (savedTheme == \"light\") {\n          // console.log('saved was light, switched to dark');\n          document.documentElement.classList.add(\"theme-dark\");\n          localStorage.setItem(\"colorTheme\", \"dark\");\n        }\n        if (savedTheme == null) {\n          if (prefersDarkScheme.matches) {\n            // console.log('auto was dark, switch to light');\n            document.documentElement.classList.remove(\"theme-dark\");\n            localStorage.setItem(\"colorTheme\", \"light\");\n          } \n          if (!prefersDarkScheme.matches) {\n            // console.log('auto was light, switch to dark');\n            document.documentElement.classList.add(\"theme-dark\");\n            localStorage.setItem(\"colorTheme\", \"dark\");\n          }\n        }\n      }\n    } else {\n      // console.log('non click');\n      if (savedTheme == \"dark\") {\n        // console.log('auto applied saved dark');\n        document.documentElement.classList.add(\"theme-dark\");\n      }\n      if (savedTheme == \"light\") {\n        // console.log('auto applied saved light');\n        document.documentElement.classList.remove(\"theme-dark\");\n      }\n      if (savedTheme == null) {\n        if (prefersDarkScheme.matches) {\n          // console.log('auto applied system dark');\n          document.documentElement.classList.add(\"theme-dark\");\n        } \n        if (!prefersDarkScheme.matches) {\n          // console.log('auto applied system light');\n          document.documentElement.classList.remove(\"theme-dark\");\n        }\n      }\n    }\n  }\n\n  buttonColorThemeSwitch.addEventListener(\"click\", toggleColorTheme);\n  prefersDarkScheme.addEventListener(\"change\", toggleColorTheme);\n  toggleColorTheme(\"none\");\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  initColorThemeSwitch();\n})\n\n//# sourceURL=webpack://humanfriendlydesign/./src/js/global.js?");

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