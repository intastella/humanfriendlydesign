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

eval("function initColorThemeSwitch() {\n  const themeMenu = document.querySelector(\".js-theme-menu\");\n  const themeMenuOverlay = document.querySelector(\".js-header-theme-menu-overlay\");\n  const buttonThemeMenuButton = document.querySelector(\".js-theme-menu-button\");\n  const themeButtons = document.querySelectorAll(\".js-theme-button\");\n  const accentButtons = document.querySelectorAll(\".js-accent-button\");\n  const prefersDarkScheme = window.matchMedia(\"(prefers-color-scheme: dark)\");\n  \n  // https://thegermancoder.com/2018/10/04/how-to-remove-classes-by-prefix-in-vanilla-javascript/\n  function removeClassByPrefix(node, prefix) {\n    var regx = new RegExp('\\\\b' + prefix + '[^ ]*[ ]?\\\\b', 'g');\n    node.className = node.className.replace(regx, '');\n    return node;\n  }\n  \n  function manualSetColorTheme(el) {\n    // console.log('manual set theme');\n    var selectedButton = el.target.closest('.js-theme-button');\n    var selectedTheme = selectedButton.dataset.theme;\n    // console.log('theme='+selectedTheme);\n    removeClassByPrefix(document.documentElement, 'theme-');\n    document.documentElement.classList.add(\"theme-\"+selectedTheme);\n\n    if (selectedTheme == \"auto\") {\n      localStorage.removeItem(\"colorTheme\");\n      toggleThemeMenu();\n      autoSetColorTheme();\n    } else {\n      localStorage.setItem(\"colorTheme\", selectedTheme);\n      toggleThemeMenu();\n    }\n  }\n\n  function autoSetColorTheme() {\n    const savedTheme = localStorage.getItem(\"colorTheme\");\n    // console.log('auto set theme');\n    removeClassByPrefix(document.documentElement, 'theme-');\n    \n    if (savedTheme == null) {\n      if (prefersDarkScheme.matches) {\n        // console.log('auto applied system dark');\n        document.documentElement.classList.add(\"theme-auto\");\n        document.documentElement.classList.add(\"theme-dark\");\n      } \n      if (!prefersDarkScheme.matches) {\n        document.documentElement.classList.add(\"theme-auto\");\n        // console.log('auto applied system auto');\n      }\n    } else {\n      // console.log('auto applied saved '+savedTheme);\n      document.documentElement.classList.add(\"theme-\"+savedTheme);\n    }\n  }\n\n  function manualSetAccentColor(el) {\n    // console.log('manual set accent');\n    var selectedButton = el.target;\n    var selectedColor = selectedButton.dataset.color;\n    // console.log('color='+selectedColor);\n\n    if (selectedColor !== \"classic\") {\n      removeClassByPrefix(document.documentElement, 'accent-');\n      document.documentElement.classList.add(\"accent-\"+selectedColor);\n      localStorage.setItem(\"accentColor\", selectedColor);\n      toggleThemeMenu();\n    }\n    else {\n      removeClassByPrefix(document.documentElement, 'accent-');\n      localStorage.removeItem(\"accentColor\");\n      toggleThemeMenu();\n    }\n  }\n\n  function autoSetAccentColor() {\n    const savedaccentColor = localStorage.getItem(\"accentColor\");\n    document.documentElement.classList.add(\"accent-\"+savedaccentColor);\n  }\n\n  function toggleThemeMenu() {\n    if (themeMenu.classList.contains('tmpl-header__theme-menu--active')) {\n      themeMenu.classList.remove('tmpl-header__theme-menu--active');\n    } else {\n      themeMenu.classList.add('tmpl-header__theme-menu--active');\n    }\n  }\n\n  if (themeMenu !== null) {\n    themeMenuOverlay.addEventListener(\"click\", toggleThemeMenu);\n    buttonThemeMenuButton.addEventListener(\"click\", toggleThemeMenu);\n\n    Array.prototype.forEach.call(themeButtons, function (el, i) {\n      themeButtons[i].addEventListener('click', function(el) {\n        manualSetColorTheme(el);\n      });\n    });\n\n    Array.prototype.forEach.call(accentButtons, function (el, i) {\n      accentButtons[i].addEventListener('click', function(el) {\n        manualSetAccentColor(el);\n      });\n    });\n  }\n  \n  prefersDarkScheme.addEventListener(\"change\", autoSetColorTheme);\n  autoSetColorTheme();\n  autoSetAccentColor();\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  initColorThemeSwitch();\n})\n\n//# sourceURL=webpack://humanfriendlydesign/./src/js/global.js?");

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