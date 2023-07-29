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

/***/ "./node_modules/granim/index.js":
/*!**************************************!*\
  !*** ./node_modules/granim/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./lib/Granim.js */ \"./node_modules/granim/lib/Granim.js\");\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/index.js?");

/***/ }),

/***/ "./node_modules/granim/lib/Granim.js":
/*!*******************************************!*\
  !*** ./node_modules/granim/lib/Granim.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\r\n\r\nfunction Granim(options) {\r\n\tthis.getElement(options.element);\r\n\tthis.x1 = 0;\r\n\tthis.y1 = 0;\r\n\tthis.name = options.name || false;\r\n\tthis.elToSetClassOn = options.elToSetClassOn || 'body';\r\n\tthis.direction = options.direction || 'diagonal';\r\n\tthis.customDirection = options.customDirection || {};\r\n\tthis.validateInput('direction');\r\n\tthis.isPausedWhenNotInView = options.isPausedWhenNotInView || false;\r\n\tthis.states = options.states;\r\n\tthis.stateTransitionSpeed = options.stateTransitionSpeed || 1000;\r\n\tthis.previousTimeStamp = null;\r\n\tthis.progress = 0;\r\n\tthis.isPaused = false;\r\n\tthis.isCleared = false;\r\n\tthis.isPausedBecauseNotInView = false;\r\n\tthis.context = this.canvas.getContext('2d');\r\n\tthis.channels = {};\r\n\tthis.channelsIndex = 0;\r\n\tthis.activeState = options.defaultStateName || 'default-state';\r\n\tthis.isChangingState = false;\r\n\tthis.currentColors = [];\r\n\tthis.currentColorsPos = [];\r\n\tthis.activetransitionSpeed = null;\r\n\tthis.eventPolyfill();\r\n\tthis.scrollDebounceThreshold = options.scrollDebounceThreshold || 300;\r\n\tthis.scrollDebounceTimeout = null;\r\n\tthis.isImgLoaded = false;\r\n\tthis.isCanvasInWindowView = false;\r\n\tthis.firstScrollInit = true;\r\n\tthis.animating = false;\r\n\tthis.gradientLength = this.states[this.activeState].gradients[0].length;\r\n\tif (options.image && options.image.source) {\r\n\t\tthis.image = {\r\n\t\t\tsource: options.image.source,\r\n\t\t\tposition: options.image.position || ['center', 'center'],\r\n\t\t\tstretchMode: options.image.stretchMode || false,\r\n\t\t\tblendingMode: options.image.blendingMode || false\r\n\t\t};\r\n\t}\r\n\tthis.events = {\r\n\t\tstart: new CustomEvent('granim:start'),\r\n\t\tend: new CustomEvent('granim:end'),\r\n\t\tgradientChange: function(details) {\r\n\t\t\treturn new CustomEvent('granim:gradientChange', {\r\n\t\t\t\tdetail: {\r\n\t\t\t\t\tisLooping: details.isLooping,\r\n\t\t\t\t\tcolorsFrom: details.colorsFrom,\r\n\t\t\t\t\tcolorsTo: details.colorsTo,\r\n\t\t\t\t\tactiveState: details.activeState\r\n\t\t\t\t},\r\n\t\t\t\tbubbles: false,\r\n\t\t\t\tcancelable: false\r\n\t\t\t});\r\n\t\t}\r\n\t};\r\n\tthis.callbacks = {\r\n\t\tonStart: typeof options.onStart === 'function' ? options.onStart : false,\r\n\t\tonGradientChange: typeof options.onGradientChange === 'function' ?\r\n\t\t\toptions.onGradientChange :\r\n\t\t\tfalse,\r\n\t\tonEnd: typeof options.onEnd === 'function' ? options.onEnd : false\r\n\t};\r\n\tthis.getDimensions();\r\n\tthis.canvas.setAttribute('width', this.x1);\r\n\tthis.canvas.setAttribute('height', this.y1);\r\n\tthis.setColors();\r\n\r\n\tif (this.image) {\r\n\t\tthis.validateInput('image');\r\n\t\tthis.prepareImage();\r\n\t}\r\n\r\n\tthis.pauseWhenNotInViewNameSpace = this.pauseWhenNotInView.bind(this);\r\n\tthis.setSizeAttributesNameSpace = this.setSizeAttributes.bind(this);\r\n\tthis.onResize();\r\n\r\n\tif (this.isPausedWhenNotInView) {\r\n\t\tthis.onScroll();\r\n\t\t\r\n\t} else {\r\n\t\tif (!this.image) {\r\n\t\t\tthis.refreshColorsAndPos();\r\n\t\t\tthis.animation = requestAnimationFrame(this.animateColors.bind(this));\r\n\t\t\tthis.animating = true;\r\n\t\t}\r\n\t}\r\n\r\n\t// Callback and Event\r\n\tif (this.callbacks.onStart) this.callbacks.onStart();\r\n\tthis.canvas.dispatchEvent(this.events.start);\r\n}\r\n\r\nGranim.prototype.animateColors = __webpack_require__(/*! ./animateColors.js */ \"./node_modules/granim/lib/animateColors.js\");\r\nGranim.prototype.changeBlendingMode = __webpack_require__(/*! ./changeBlendingMode.js */ \"./node_modules/granim/lib/changeBlendingMode.js\");\r\nGranim.prototype.changeDirection = __webpack_require__(/*! ./changeDirection.js */ \"./node_modules/granim/lib/changeDirection.js\");\r\nGranim.prototype.changeState = __webpack_require__(/*! ./changeState.js */ \"./node_modules/granim/lib/changeState.js\");\r\nGranim.prototype.clear = __webpack_require__(/*! ./clear.js */ \"./node_modules/granim/lib/clear.js\");\r\nGranim.prototype.convertColorToRgba = __webpack_require__(/*! ./convertColorToRgba.js */ \"./node_modules/granim/lib/convertColorToRgba.js\");\r\nGranim.prototype.destroy = __webpack_require__(/*! ./destroy.js */ \"./node_modules/granim/lib/destroy.js\");\r\nGranim.prototype.eventPolyfill = __webpack_require__(/*! ./eventPolyfill.js */ \"./node_modules/granim/lib/eventPolyfill.js\");\r\nGranim.prototype.getColor = __webpack_require__(/*! ./getColor.js */ \"./node_modules/granim/lib/getColor.js\");\r\nGranim.prototype.getColorDiff = __webpack_require__(/*! ./getColorDiff.js */ \"./node_modules/granim/lib/getColorDiff.js\");\r\nGranim.prototype.getColorPos = __webpack_require__(/*! ./getColorPos.js */ \"./node_modules/granim/lib/getColorPos.js\");\r\nGranim.prototype.getColorPosDiff = __webpack_require__(/*! ./getColorPosDiff.js */ \"./node_modules/granim/lib/getColorPosDiff.js\");\r\nGranim.prototype.getCurrentColors = __webpack_require__(/*! ./getCurrentColors.js */ \"./node_modules/granim/lib/getCurrentColors.js\");\r\nGranim.prototype.getCurrentColorsPos = __webpack_require__(/*! ./getCurrentColorsPos.js */ \"./node_modules/granim/lib/getCurrentColorsPos.js\");\r\nGranim.prototype.getDimensions = __webpack_require__(/*! ./getDimensions.js */ \"./node_modules/granim/lib/getDimensions.js\");\r\nGranim.prototype.getElement = __webpack_require__(/*! ./getElement.js */ \"./node_modules/granim/lib/getElement.js\");\r\nGranim.prototype.getLightness = __webpack_require__(/*! ./getLightness.js */ \"./node_modules/granim/lib/getLightness.js\");\r\nGranim.prototype.makeGradient = __webpack_require__(/*! ./makeGradient.js */ \"./node_modules/granim/lib/makeGradient.js\");\r\nGranim.prototype.onResize = __webpack_require__(/*! ./onResize.js */ \"./node_modules/granim/lib/onResize.js\");\r\nGranim.prototype.onScroll = __webpack_require__(/*! ./onScroll.js */ \"./node_modules/granim/lib/onScroll.js\");\r\nGranim.prototype.pause = __webpack_require__(/*! ./pause.js */ \"./node_modules/granim/lib/pause.js\");\r\nGranim.prototype.pauseWhenNotInView = __webpack_require__(/*! ./pauseWhenNotInView.js */ \"./node_modules/granim/lib/pauseWhenNotInView.js\");\r\nGranim.prototype.play = __webpack_require__(/*! ./play.js */ \"./node_modules/granim/lib/play.js\");\r\nGranim.prototype.prepareImage = __webpack_require__(/*! ./prepareImage.js */ \"./node_modules/granim/lib/prepareImage.js\");\r\nGranim.prototype.refreshColorsAndPos = __webpack_require__(/*! ./refreshColorsAndPos.js */ \"./node_modules/granim/lib/refreshColorsAndPos.js\");\r\nGranim.prototype.setColors = __webpack_require__(/*! ./setColors.js */ \"./node_modules/granim/lib/setColors.js\");\r\nGranim.prototype.setDirection = __webpack_require__(/*! ./setDirection.js */ \"./node_modules/granim/lib/setDirection.js\");\r\nGranim.prototype.setSizeAttributes = __webpack_require__(/*! ./setSizeAttributes.js */ \"./node_modules/granim/lib/setSizeAttributes.js\");\r\nGranim.prototype.triggerError = __webpack_require__(/*! ./triggerError.js */ \"./node_modules/granim/lib/triggerError.js\");\r\nGranim.prototype.validateInput = __webpack_require__(/*! ./validateInput.js */ \"./node_modules/granim/lib/validateInput.js\");\r\n\r\nmodule.exports = Granim;\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/Granim.js?");

/***/ }),

/***/ "./node_modules/granim/lib/animateColors.js":
/*!**************************************************!*\
  !*** ./node_modules/granim/lib/animateColors.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(timestamp) {\r\n\tvar wasWindowIdled = timestamp - this.previousTimeStamp > 100;\r\n\tvar isLoop = this.states[this.activeState].loop !== undefined ? this.states[this.activeState].loop : true;\r\n\tvar progressPercent, isLooping, nextGradient;\r\n\r\n\t// If tab was inactive then resumed, reset the previous timestamp\r\n\tif (this.previousTimeStamp === null || wasWindowIdled) {\r\n\t\tthis.previousTimeStamp = timestamp;\r\n\t}\r\n\r\n\t// Compute progress and save the timestamp\r\n\tthis.progress = this.progress + (timestamp - this.previousTimeStamp);\r\n\tprogressPercent = (this.progress / this.activetransitionSpeed * 100).toFixed(2);\r\n\tthis.previousTimeStamp = timestamp;\r\n\r\n\t// Set the new gradient colors in a property\r\n\tthis.refreshColorsAndPos(progressPercent);\r\n\r\n\t// Continue the animation or prepare for the next one\r\n\tif (progressPercent < 100) {\r\n\t\tthis.animation = requestAnimationFrame(this.animateColors.bind(this));\r\n\r\n\t} else {\r\n\t\t// if the current animation index is inferior to the penultimate gradient\r\n\t\t// or to the last gradient with the loop mode activated\r\n\t\tif (this.channelsIndex < this.states[this.activeState].gradients.length - 2 || isLoop) {\r\n\r\n\t\t\t// Set the active transition speed to the active state one after changing state\r\n\t\t\tif (this.isChangingState) {\r\n\t\t\t\tthis.activetransitionSpeed = this.states[this.activeState].transitionSpeed || 5000;\r\n\t\t\t\tthis.isChangingState = false;\r\n\t\t\t}\r\n\r\n\t\t\t// Resetting properties\r\n\t\t\tthis.previousTimeStamp = null;\r\n\t\t\tthis.progress = 0;\r\n\t\t\tthis.channelsIndex++;\r\n\t\t\tisLooping = false;\r\n\r\n\t\t\t// If it's going to loop or if it's the transition after the loop\r\n\t\t\tif (this.channelsIndex === this.states[this.activeState].gradients.length - 1) {\r\n\t\t\t\tisLooping = true;\r\n\t\t\t\t\r\n\t\t\t} else if (this.channelsIndex === this.states[this.activeState].gradients.length) {\r\n\t\t\t\tthis.channelsIndex = 0;\r\n\t\t\t}\r\n\r\n\t\t\t// Checking the next gradient to send in args of an event and a callback\r\n\t\t\tnextGradient = this.states[this.activeState].gradients[this.channelsIndex + 1] === undefined ?\r\n\t\t\t\tthis.states[this.activeState].gradients[0] :\r\n\t\t\t\tthis.states[this.activeState].gradients[this.channelsIndex + 1];\r\n\r\n\t\t\t// Compute the colors for the transition and render a new frame\r\n\t\t\tthis.setColors();\r\n\t\t\tthis.animation = requestAnimationFrame(this.animateColors.bind(this));\r\n\t\t\t\r\n\t\t\t// Callback and Event\r\n\t\t\tif (this.callbacks.onGradientChange) {\r\n\t\t\t\tthis.callbacks.onGradientChange({\r\n\t\t\t\t\tisLooping: isLooping,\r\n\t\t\t\t\tcolorsFrom: this.states[this.activeState].gradients[this.channelsIndex],\r\n\t\t\t\t\tcolorsTo: nextGradient,\r\n\t\t\t\t\tactiveState: this.activeState\r\n\t\t\t\t});\r\n\t\t\t}\r\n\r\n\t\t\tthis.canvas.dispatchEvent(this.events.gradientChange({\r\n\t\t\t\tisLooping: isLooping,\r\n\t\t\t\tcolorsFrom: this.states[this.activeState].gradients[this.channelsIndex],\r\n\t\t\t\tcolorsTo: nextGradient,\r\n\t\t\t\tactiveState: this.activeState\r\n\t\t\t}));\r\n\r\n\t\t// Else if it was the last gradient on the list and the loop mode is off\r\n\t\t} else {\r\n\t\t\tcancelAnimationFrame(this.animation);\r\n\r\n\t\t\t// Callback and Event\r\n\t\t\tif (this.callbacks.onEnd) this.callbacks.onEnd();\r\n\t\t\tthis.canvas.dispatchEvent(new CustomEvent('granim:end'));\r\n\t\t}\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/animateColors.js?");

/***/ }),

/***/ "./node_modules/granim/lib/changeBlendingMode.js":
/*!*******************************************************!*\
  !*** ./node_modules/granim/lib/changeBlendingMode.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(newBlendingMode) {\r\n\tthis.context.clearRect(0, 0, this.x1, this.y1);\r\n\tthis.context.globalCompositeOperation =\r\n\t\tthis.image.blendingMode = newBlendingMode;\r\n\tthis.validateInput('blendingMode');\r\n\tif (this.isPaused) this.refreshColorsAndPos();\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/changeBlendingMode.js?");

/***/ }),

/***/ "./node_modules/granim/lib/changeDirection.js":
/*!****************************************************!*\
  !*** ./node_modules/granim/lib/changeDirection.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(newDirection) {\r\n\tthis.context.clearRect(0, 0, this.x1, this.y1);\r\n\tthis.direction = newDirection;\r\n\tthis.validateInput('direction');\r\n\tif (this.isPaused) this.refreshColorsAndPos();\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/changeDirection.js?");

/***/ }),

/***/ "./node_modules/granim/lib/changeState.js":
/*!************************************************!*\
  !*** ./node_modules/granim/lib/changeState.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(newState) {\r\n\tvar _this = this;\r\n\r\n\t// Prevent transitioning to the same state\r\n\tif (this.activeState === newState) {\r\n\t\treturn;\r\n\t}\r\n\r\n\t// Setting the good properties for the transition\r\n\tif (!this.isPaused) {\r\n\t\tthis.isPaused = true;\r\n\t\tthis.pause();\r\n\t}\r\n\r\n\tthis.channelsIndex = -1;\r\n\tthis.activetransitionSpeed = this.stateTransitionSpeed;\r\n\tthis.activeColorsDiff = [];\r\n\tthis.activeColorsPosDiff = [];\r\n\tthis.activeColors = this.getCurrentColors();\r\n\tthis.activeColorsPos = this.getCurrentColorsPos();\r\n\tthis.progress = 0;\r\n\tthis.previousTimeStamp = null;\r\n\tthis.isChangingState = true;\r\n\r\n\t// Compute the gradient color and pos diff between the last frame gradient\r\n\t// and the first one of the new state\r\n\tthis.states[newState].gradients[0].forEach(function(gradientColor, i, arr) {\r\n\t\tvar nextColors = _this.convertColorToRgba(_this.getColor(gradientColor));\r\n\t\tvar nextColorsPos = _this.getColorPos(gradientColor, i);\r\n\t\tvar colorDiff = _this.getColorDiff(_this.activeColors[i], nextColors);\r\n\t\tvar colorPosDiff = _this.getColorPosDiff(_this.activeColorsPos[i], nextColorsPos);\r\n\t\t_this.activeColorsDiff.push(colorDiff);\r\n\t\t_this.activeColorsPosDiff.push(colorPosDiff);\r\n\t});\r\n\r\n\t// Start the animation\r\n\tthis.activeState = newState;\r\n\tthis.play();\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/changeState.js?");

/***/ }),

/***/ "./node_modules/granim/lib/clear.js":
/*!******************************************!*\
  !*** ./node_modules/granim/lib/clear.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function() {\r\n\tif (!this.isPaused) {\r\n\t\tcancelAnimationFrame(this.animation);\r\n\r\n\t} else {\r\n\t\tthis.isPaused = false;\r\n\t}\r\n\tthis.isCleared = true;\r\n\tthis.context.clearRect(0, 0, this.x1, this.y1);\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/clear.js?");

/***/ }),

/***/ "./node_modules/granim/lib/convertColorToRgba.js":
/*!*******************************************************!*\
  !*** ./node_modules/granim/lib/convertColorToRgba.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nvar regex = {\r\n\thexa: /^#(?:[0-9a-fA-F]{3}){1,2}$/,\r\n\trgba: /^rgba\\((\\d{1,3}), ?(\\d{1,3}), ?(\\d{1,3}), ?(.?\\d{1,3})\\)$/,\r\n\trgb: /^rgb\\((\\d{1,3}), ?(\\d{1,3}), ?(\\d{1,3})\\)$/,\r\n\thsla: /^hsla\\((\\d{1,3}), ?(\\d{1,3})%, ?(\\d{1,3})%, ?(.?\\d{1,3})\\)$/,\r\n\thsl: /^hsl\\((\\d{1,3}), ?(\\d{1,3})%, ?(\\d{1,3})%\\)$/\r\n}, match;\r\n\r\nmodule.exports = function(color) {\r\n\tswitch(identifyColorType(color)) {\r\n\t\tdefault:\r\n\t\t\tthis.triggerError('colorType');\r\n\r\n\t\tcase 'hexa':\r\n\t\t\treturn hexToRgba(color);\r\n\r\n\t\tcase 'rgba':\r\n\t\t\treturn [\r\n\t\t\t\tparseInt(match[1], 10),\r\n\t\t\t\tparseInt(match[2], 10),\r\n\t\t\t\tparseInt(match[3], 10),\r\n\t\t\t\tparseFloat(match[4])\r\n\t\t\t];\r\n\r\n\t\tcase 'rgb':\r\n\t\t\treturn [\r\n\t\t\t\tparseInt(match[1], 10),\r\n\t\t\t\tparseInt(match[2], 10),\r\n\t\t\t\tparseInt(match[3], 10),\r\n\t\t\t\t1\r\n\t\t\t];\r\n\r\n\t\tcase 'hsla':\r\n\t\t\treturn hslaToRgb(\r\n\t\t\t\tparseInt(match[1], 10) / 360,\r\n\t\t\t\tparseInt(match[2], 10) / 100,\r\n\t\t\t\tparseInt(match[3], 10) / 100,\r\n\t\t\t\tparseFloat(match[4])\r\n\t\t\t);\r\n\r\n\t\tcase 'hsl':\r\n\t\t\treturn hslaToRgb(\r\n\t\t\t\tparseInt(match[1], 10) / 360,\r\n\t\t\t\tparseInt(match[2], 10) / 100,\r\n\t\t\t\tparseInt(match[3], 10) / 100,\r\n\t\t\t\t1\r\n\t\t\t);\r\n\t}\r\n};\r\n\r\nfunction identifyColorType(color) {\r\n\tvar colorTypes = Object.keys(regex);\r\n\tvar i = 0;\r\n\tfor (i; i < colorTypes.length; i++) {\r\n\t\tmatch = regex[colorTypes[i]].exec(color);\r\n\t\tif (match) return colorTypes[i];\r\n\t}\r\n\treturn false;\r\n}\r\n\r\nfunction hexToRgba(hex) {\r\n\t// Expand shorthand form (e.g. '03F') to full form (e.g. '0033FF')\r\n\tvar shorthandRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;\r\n\thex = hex.replace(shorthandRegex, function(m, r, g, b) {\r\n\t\treturn r + r + g + g + b + b;\r\n\t});\r\n\tvar result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\r\n\treturn result ? [\r\n\t\tparseInt(result[1], 16),\r\n\t\tparseInt(result[2], 16),\r\n\t\tparseInt(result[3], 16),\r\n\t\t1\r\n\t] : null;\r\n}\r\n\r\nfunction hue2rgb(p, q, t) {\r\n\tif (t < 0) t += 1;\r\n\tif (t > 1) t -= 1;\r\n\tif (t < 1 / 6) return p + (q - p) * 6 * t;\r\n\tif (t < 1 / 2) return q;\r\n\tif (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;\r\n\treturn p;\r\n}\r\n\r\nfunction hslaToRgb(h, s, l, a) {\r\n\tvar r, g, b, q, p;\r\n\tif (s === 0) {\r\n\t\tr = g = b = l; // achromatic\r\n\t} else {\r\n\t\tq = l < 0.5 ? l * (1 + s) : l + s - l * s;\r\n\t\tp = 2 * l - q;\r\n\t\tr = hue2rgb(p, q, h + 1/3);\r\n\t\tg = hue2rgb(p, q, h);\r\n\t\tb = hue2rgb(p, q, h - 1/3);\r\n\t}\r\n\treturn [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a];\r\n}\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/convertColorToRgba.js?");

/***/ }),

/***/ "./node_modules/granim/lib/destroy.js":
/*!********************************************!*\
  !*** ./node_modules/granim/lib/destroy.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function() {\r\n\tthis.onResize('removeListeners');\r\n\tthis.onScroll('removeListeners');\r\n\tthis.clear();\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/destroy.js?");

/***/ }),

/***/ "./node_modules/granim/lib/eventPolyfill.js":
/*!**************************************************!*\
  !*** ./node_modules/granim/lib/eventPolyfill.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function() {\r\n\tif ( typeof window.CustomEvent === 'function' ) return;\r\n\r\n\tfunction CustomEvent(event, params) {\r\n\t\tparams = params || { bubbles: false, cancelable: false, detail: undefined };\r\n\t\tvar evt = document.createEvent('CustomEvent');\r\n\t\tevt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);\r\n\t\treturn evt;\r\n\t}\r\n\r\n\tCustomEvent.prototype = window.Event.prototype;\r\n\r\n\twindow.CustomEvent = CustomEvent;\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/eventPolyfill.js?");

/***/ }),

/***/ "./node_modules/granim/lib/getColor.js":
/*!*********************************************!*\
  !*** ./node_modules/granim/lib/getColor.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(gradientColor) {\r\n\tif (typeof gradientColor === 'string') {\r\n\t\treturn gradientColor;\r\n\r\n\t} else if (typeof gradientColor === 'object' && gradientColor.color) {\r\n\t\treturn gradientColor.color;\r\n\r\n\t} else {\r\n\t\tthis.triggerError('gradient.color');\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/getColor.js?");

/***/ }),

/***/ "./node_modules/granim/lib/getColorDiff.js":
/*!*************************************************!*\
  !*** ./node_modules/granim/lib/getColorDiff.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(colorA, colorB) {\r\n\tvar i = 0;\r\n\tvar colorDiff = [];\r\n\r\n\tfor (i; i < 4; i++) {\r\n\t\tcolorDiff.push(colorB[i] - colorA[i]);\r\n\t}\r\n\r\n\treturn colorDiff;\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/getColorDiff.js?");

/***/ }),

/***/ "./node_modules/granim/lib/getColorPos.js":
/*!************************************************!*\
  !*** ./node_modules/granim/lib/getColorPos.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(gradientColor, i) {\r\n\tif (typeof gradientColor === 'object' && gradientColor.pos) {\r\n\t\treturn gradientColor.pos;\r\n\r\n\t} else {\r\n\t\t// Ensure first and last position to be 0 and 100\r\n\t\treturn parseFloat(!i ? 0 : ((1 / (this.gradientLength - 1)) * i).toFixed(2));\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/getColorPos.js?");

/***/ }),

/***/ "./node_modules/granim/lib/getColorPosDiff.js":
/*!****************************************************!*\
  !*** ./node_modules/granim/lib/getColorPosDiff.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(posA, posB) {\r\n\treturn posB - posA;\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/getColorPosDiff.js?");

/***/ }),

/***/ "./node_modules/granim/lib/getCurrentColors.js":
/*!*****************************************************!*\
  !*** ./node_modules/granim/lib/getCurrentColors.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function() {\r\n\tvar i, j;\r\n\tvar currentColors = [];\r\n\r\n\tfor (i = 0; i < this.currentColors.length; i++) {\r\n\t\tcurrentColors.push([]);\r\n\r\n\t\tfor (j = 0; j < 4; j++) {\r\n\t\t\tcurrentColors[i].push(this.currentColors[i][j]);\r\n\t\t}\r\n\t}\r\n\r\n\t// Return a deep copy of the current colors\r\n\treturn currentColors;\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/getCurrentColors.js?");

/***/ }),

/***/ "./node_modules/granim/lib/getCurrentColorsPos.js":
/*!********************************************************!*\
  !*** ./node_modules/granim/lib/getCurrentColorsPos.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function() {\r\n\tvar currentColorsPos = [], i;\r\n\r\n\tfor (i = 0; i < this.currentColorsPos.length; i++) {\r\n\t\tcurrentColorsPos.push(this.currentColorsPos[i]);\r\n\t}\r\n\r\n\t// Return a deep copy of the current colors\r\n\treturn currentColorsPos;\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/getCurrentColorsPos.js?");

/***/ }),

/***/ "./node_modules/granim/lib/getDimensions.js":
/*!**************************************************!*\
  !*** ./node_modules/granim/lib/getDimensions.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function() {\r\n\tthis.x1 = this.canvas.offsetWidth;\r\n\tthis.y1 = this.canvas.offsetHeight;\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/getDimensions.js?");

/***/ }),

/***/ "./node_modules/granim/lib/getElement.js":
/*!***********************************************!*\
  !*** ./node_modules/granim/lib/getElement.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(element) {\r\n\tif (element instanceof HTMLCanvasElement) {\r\n\t\tthis.canvas = element;\r\n\r\n\t} else if (typeof element === 'string') {\r\n\t\tthis.canvas = document.querySelector(element);\r\n\r\n\t} else {\r\n\t\tthrow new Error('The element you used is neither a String, nor a HTMLCanvasElement');\r\n\t}\r\n\r\n\tif (!this.canvas) {\r\n\t\tthrow new Error('`' + element + '` could not be found in the DOM');\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/getElement.js?");

/***/ }),

/***/ "./node_modules/granim/lib/getLightness.js":
/*!*************************************************!*\
  !*** ./node_modules/granim/lib/getLightness.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function() {\r\n\tvar currentColors = this.getCurrentColors();\r\n\tvar gradientAverage = null;\r\n\tvar lightnessAverage, i;\r\n\tvar colorsAverage = currentColors.map(function(el) {\r\n\t\t// Compute the average lightness of each color\r\n\t\t// in the current gradient\r\n\t\treturn Math.max(el[0], el[1], el[2]);\r\n\t});\r\n\r\n\tfor (i = 0; i < colorsAverage.length; i++) {\r\n\t\t// Add all the average lightness of each color\r\n\t\tgradientAverage = gradientAverage === null ?\r\n\t\t\tcolorsAverage[i] : gradientAverage + colorsAverage[i];\r\n\r\n\t\tif (i === colorsAverage.length - 1) {\r\n\t\t\t// if it's the last lightness average\r\n\t\t\t// divide it by the total length to\r\n\t\t\t// have the global average lightness\r\n\t\t\tlightnessAverage = Math.round(gradientAverage / (i + 1));\r\n\t\t}\r\n\t}\r\n\r\n\treturn lightnessAverage >= 128 ? 'light' : 'dark';\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/getLightness.js?");

/***/ }),

/***/ "./node_modules/granim/lib/makeGradient.js":
/*!*************************************************!*\
  !*** ./node_modules/granim/lib/makeGradient.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function() {\r\n\tvar gradient = this.setDirection();\r\n\tvar elToSetClassOnClass = document.querySelector(this.elToSetClassOn).classList;\r\n\tvar i = 0;\r\n\tthis.context.clearRect(0, 0, this.x1, this.y1);\r\n\r\n\tif (this.image) {\r\n\t\tthis.context.drawImage(\r\n\t\t\tthis.imageNode,\r\n\t\t\tthis.imagePosition.x,\r\n\t\t\tthis.imagePosition.y,\r\n\t\t\tthis.imagePosition.width,\r\n\t\t\tthis.imagePosition.height\r\n\t\t);\r\n\t}\r\n\r\n\tfor (i; i < this.currentColors.length; i++) {\r\n\t\tgradient.addColorStop(this.currentColorsPos[i], 'rgba(' +\r\n\t\t\tthis.currentColors[i][0] + ', ' +\r\n\t\t\tthis.currentColors[i][1] + ', ' +\r\n\t\t\tthis.currentColors[i][2] + ', ' +\r\n\t\t\tthis.currentColors[i][3] + ')'\r\n\t\t);\r\n\t}\r\n\r\n\tif (this.name) {\r\n\t\tif (this.getLightness() === 'light') {\r\n\t\t\telToSetClassOnClass.remove(this.name + '-dark');\r\n\t\t\telToSetClassOnClass.add(this.name + '-light');\r\n\r\n\t\t} else {\r\n\t\t\telToSetClassOnClass.remove(this.name + '-light');\r\n\t\t\telToSetClassOnClass.add(this.name + '-dark');\r\n\t\t}\r\n\t}\r\n\r\n\tthis.context.fillStyle = gradient;\r\n\tthis.context.fillRect(0, 0, this.x1, this.y1);\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/makeGradient.js?");

/***/ }),

/***/ "./node_modules/granim/lib/onResize.js":
/*!*********************************************!*\
  !*** ./node_modules/granim/lib/onResize.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(type) {\r\n\tif (type === 'removeListeners') {\r\n\t\twindow.removeEventListener('resize', this.setSizeAttributesNameSpace);\r\n\t\treturn;\r\n\t}\r\n\r\n\twindow.addEventListener('resize', this.setSizeAttributesNameSpace);\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/onResize.js?");

/***/ }),

/***/ "./node_modules/granim/lib/onScroll.js":
/*!*********************************************!*\
  !*** ./node_modules/granim/lib/onScroll.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(type) {\r\n\tif (type === 'removeListeners') {\r\n\t\twindow.removeEventListener('scroll', this.pauseWhenNotInViewNameSpace);\r\n\t\treturn;\r\n\t}\r\n\r\n\twindow.addEventListener('scroll', this.pauseWhenNotInViewNameSpace);\r\n\tthis.pauseWhenNotInViewNameSpace();\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/onScroll.js?");

/***/ }),

/***/ "./node_modules/granim/lib/pause.js":
/*!******************************************!*\
  !*** ./node_modules/granim/lib/pause.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(state) {\r\n\tvar isPausedBecauseNotInView = state === 'isPausedBecauseNotInView';\r\n\tif (this.isCleared) return;\r\n\tif (!isPausedBecauseNotInView) this.isPaused = true;\r\n\tcancelAnimationFrame(this.animation);\r\n\tthis.animating = false;\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/pause.js?");

/***/ }),

/***/ "./node_modules/granim/lib/pauseWhenNotInView.js":
/*!*******************************************************!*\
  !*** ./node_modules/granim/lib/pauseWhenNotInView.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function() {\r\n\tvar _this = this;\r\n\tif (this.scrollDebounceTimeout) clearTimeout(this.scrollDebounceTimeout);\r\n\r\n\tthis.scrollDebounceTimeout = setTimeout(function() {\r\n\t\tvar elPos = _this.canvas.getBoundingClientRect();\r\n\t\t_this.isCanvasInWindowView = !(elPos.bottom < 0 || elPos.right < 0 ||\r\n\t\t\telPos.left > window.innerWidth || elPos.top > window.innerHeight);\r\n\r\n\t\tif (_this.isCanvasInWindowView) {\r\n\t\t\tif (!_this.isPaused || _this.firstScrollInit) {\r\n\t\t\t\tif (_this.image && !_this.isImgLoaded) {return;}\r\n\t\t\t\t_this.isPausedBecauseNotInView = false;\r\n\t\t\t\t_this.play('isPlayedBecauseInView');\r\n\t\t\t\t_this.firstScrollInit = false;\r\n\t\t\t}\r\n\r\n\t\t} else {\r\n\t\t\tif (!_this.image && _this.firstScrollInit) {\r\n\t\t\t\t_this.refreshColorsAndPos();\r\n\t\t\t\t_this.firstScrollInit = false;\r\n\t\t\t}\r\n\r\n\t\t\tif (!_this.isPaused && !_this.isPausedBecauseNotInView) {\r\n\t\t\t\t_this.isPausedBecauseNotInView = true;\r\n\t\t\t\t_this.pause('isPausedBecauseNotInView');\r\n\t\t\t}\r\n\t\t}\r\n\t}, this.scrollDebounceThreshold);\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/pauseWhenNotInView.js?");

/***/ }),

/***/ "./node_modules/granim/lib/play.js":
/*!*****************************************!*\
  !*** ./node_modules/granim/lib/play.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(state) {\r\n\tvar isPlayedBecauseInView = state === 'isPlayedBecauseInView';\r\n\tif (!isPlayedBecauseInView) this.isPaused = false;\r\n\tthis.isCleared = false;\r\n\tif (!this.animating) {\r\n\t\tthis.animation = requestAnimationFrame(this.animateColors.bind(this));\r\n\t\tthis.animating = true;\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/play.js?");

/***/ }),

/***/ "./node_modules/granim/lib/prepareImage.js":
/*!*************************************************!*\
  !*** ./node_modules/granim/lib/prepareImage.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function() {\r\n\tvar _this = this;\r\n\r\n\tif (!this.imagePosition) {\r\n\t\tthis.imagePosition = { x: 0, y: 0, width: 0, height: 0 };\r\n\t}\r\n\r\n\tif (this.image.blendingMode) {\r\n\t\tthis.context.globalCompositeOperation = this.image.blendingMode;\r\n\t}\r\n\r\n\tif (this.imageNode) {\r\n\t\tsetImagePosition();\r\n\t\treturn;\r\n\t}\r\n\r\n\tthis.imageNode = new Image();\r\n\tthis.imageNode.onerror = function() {\r\n\t\tthrow new Error('Granim: The image source is invalid.');\r\n\t};\r\n\tthis.imageNode.onload = function() {\r\n\t\t_this.imgOriginalWidth = _this.imageNode.width;\r\n\t\t_this.imgOriginalHeight = _this.imageNode.height;\r\n\t\tsetImagePosition();\r\n\t\t_this.refreshColorsAndPos();\r\n\t\tif (!_this.isPausedWhenNotInView || _this.isCanvasInWindowView) {\r\n\t\t\t_this.animation = requestAnimationFrame(_this.animateColors.bind(_this));\r\n\t\t}\r\n\t\t_this.isImgLoaded = true;\r\n\t};\r\n\tthis.imageNode.src = this.image.source;\r\n\r\n\tfunction setImagePosition() {\r\n\t\tvar i, currentAxis;\r\n\r\n\t\tfor (i = 0; i < 2; i++) {\r\n\t\t\tcurrentAxis = !i ? 'x' : 'y';\r\n\t\t\tsetImageAxisPosition(currentAxis);\r\n\t\t}\r\n\r\n\t\tfunction setImageAxisPosition(axis) {\r\n\t\t\tvar canvasWidthOrHeight = _this[axis + '1'];\r\n\t\t\tvar imgOriginalWidthOrHeight = _this[axis === 'x' ? 'imgOriginalWidth' : 'imgOriginalHeight'];\r\n\t\t\tvar imageAlignIndex = axis === 'x' ? _this.image.position[0] : _this.image.position[1];\r\n\t\t\tvar imageAxisPosition;\r\n\t\t\tswitch(imageAlignIndex) {\r\n\t\t\t\tcase 'center':\r\n\t\t\t\t\timageAxisPosition = imgOriginalWidthOrHeight > canvasWidthOrHeight\r\n\t\t\t\t\t\t? -(imgOriginalWidthOrHeight - canvasWidthOrHeight) / 2\r\n\t\t\t\t\t\t: (canvasWidthOrHeight - imgOriginalWidthOrHeight) / 2;\r\n\t\t\t\t\t_this.imagePosition[axis] = imageAxisPosition;\r\n\t\t\t\t\t_this.imagePosition[axis === 'x' ? 'width' : 'height'] = imgOriginalWidthOrHeight;\r\n\t\t\t\t\tbreak;\r\n\r\n\t\t\t\tcase 'top':\r\n\t\t\t\t\t_this.imagePosition['y'] = 0;\r\n\t\t\t\t\t_this.imagePosition['height'] = imgOriginalWidthOrHeight;\r\n\t\t\t\t\tbreak;\r\n\r\n\t\t\t\tcase 'bottom':\r\n\t\t\t\t\t_this.imagePosition['y'] = canvasWidthOrHeight - imgOriginalWidthOrHeight;\r\n\t\t\t\t\t_this.imagePosition['height'] = imgOriginalWidthOrHeight;\r\n\t\t\t\t\tbreak;\r\n\r\n\t\t\t\tcase 'right':\r\n\t\t\t\t\t_this.imagePosition['x'] = canvasWidthOrHeight - imgOriginalWidthOrHeight;\r\n\t\t\t\t\t_this.imagePosition['width'] = imgOriginalWidthOrHeight;\r\n\t\t\t\t\tbreak;\r\n\r\n\t\t\t\tcase 'left':\r\n\t\t\t\t\t_this.imagePosition['x'] = 0;\r\n\t\t\t\t\t_this.imagePosition['width'] = imgOriginalWidthOrHeight;\r\n\t\t\t\t\tbreak;\r\n\t\t\t}\r\n\r\n\t\t\tif (_this.image.stretchMode) {\r\n\t\t\t\timageAlignIndex = axis === 'x' ? _this.image.stretchMode[0] : _this.image.stretchMode[1];\r\n\t\t\t\tswitch(imageAlignIndex) {\r\n\t\t\t\t\tcase 'none':\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase 'stretch':\r\n\t\t\t\t\t\t_this.imagePosition[axis] = 0;\r\n\t\t\t\t\t\t_this.imagePosition[axis === 'x' ? 'width' : 'height'] = canvasWidthOrHeight;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\tcase 'stretch-if-bigger':\r\n\t\t\t\t\t\tif (imgOriginalWidthOrHeight < canvasWidthOrHeight) break;\r\n\t\t\t\t\t\t_this.imagePosition[axis] = 0;\r\n\t\t\t\t\t\t_this.imagePosition[axis === 'x' ? 'width' : 'height'] = canvasWidthOrHeight;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\tcase 'stretch-if-smaller':\r\n\t\t\t\t\t\tif (imgOriginalWidthOrHeight > canvasWidthOrHeight) break;\r\n\t\t\t\t\t\t_this.imagePosition[axis] = 0;\r\n\t\t\t\t\t\t_this.imagePosition[axis === 'x' ? 'width' : 'height'] = canvasWidthOrHeight;\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/prepareImage.js?");

/***/ }),

/***/ "./node_modules/granim/lib/refreshColorsAndPos.js":
/*!********************************************************!*\
  !*** ./node_modules/granim/lib/refreshColorsAndPos.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(progressPercent) {\r\n\tvar _this = this, activeChannel, activeChannelPos, i, j;\r\n\r\n\t// Loop through each colors of the active gradient\r\n\tfor (i = 0; i < this.activeColors.length; i++) {\r\n\r\n\t\t// Generate RGBA colors\r\n\t\tfor (j = 0; j < 4; j++) {\r\n\t\t\t// If color value [0-255] round to the integer,\r\n\t\t\t// Else if opacity [0-1] round to 2 decimals\r\n\t\t\tactiveChannel = _this.activeColors[i][j] +\r\n\t\t\t\t(j !== 3\r\n\t\t\t\t\t? Math.ceil(_this.activeColorsDiff[i][j] / 100 * progressPercent)\r\n\t\t\t\t\t: Math.round((_this.activeColorsDiff[i][j] / 100 * progressPercent) * 100) / 100\r\n\t\t\t\t);\r\n\r\n\t\t\t// Prevent colors values from going < 0 & > 255\r\n\t\t\tif (activeChannel <= 255 && activeChannel >= 0) {\r\n\t\t\t\t_this.currentColors[i][j] = activeChannel;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// Generate gradient color position\r\n\t\tactiveChannelPos = parseFloat((_this.activeColorsPos[i] +\r\n\t\t\t(_this.activeColorsPosDiff[i] / 100 * progressPercent)\r\n\t\t).toFixed(4));\r\n\r\n\t\tif (activeChannelPos <= 1 && activeChannelPos >= 0) {\r\n\t\t\t_this.currentColorsPos[i] = activeChannelPos;\r\n\t\t}\r\n\t}\r\n\r\n\tthis.makeGradient();\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/refreshColorsAndPos.js?");

/***/ }),

/***/ "./node_modules/granim/lib/setColors.js":
/*!**********************************************!*\
  !*** ./node_modules/granim/lib/setColors.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function() {\r\n\tvar _this = this, colorDiff, colorPosDiff, nextColors, nextColorsPos;\r\n\r\n\tif (!this.channels[this.activeState]) this.channels[this.activeState] = [];\r\n\r\n\t// If the actual channel exist, reassign properties and exit\r\n\t// (each channel is saved to prevent recomputing it each time)\r\n\tif (this.channels[this.activeState][this.channelsIndex] !== undefined) {\r\n\t\tthis.activeColors = this.channels[this.activeState][this.channelsIndex].colors;\r\n\t\tthis.activeColorsDiff = this.channels[this.activeState][this.channelsIndex].colorsDiff;\r\n\t\tthis.activeColorsPos = this.channels[this.activeState][this.channelsIndex].colorsPos;\r\n\t\tthis.activeColorsPosDiff = this.channels[this.activeState][this.channelsIndex].colorsPosDiff;\r\n\t\treturn;\r\n\t}\r\n\r\n\t// Set blank properties\r\n\tthis.channels[this.activeState].push([{}]);\r\n\tthis.channels[this.activeState][this.channelsIndex].colors = [];\r\n\tthis.channels[this.activeState][this.channelsIndex].colorsDiff = [];\r\n\tthis.channels[this.activeState][this.channelsIndex].colorsPos = [];\r\n\tthis.channels[this.activeState][this.channelsIndex].colorsPosDiff = [];\r\n\tthis.activeColors = [];\r\n\tthis.activeColorsDiff = [];\r\n\tthis.activeColorsPos = [];\r\n\tthis.activeColorsPosDiff = [];\r\n\r\n\t// Go on each gradient of the current state\r\n\tthis.states[this.activeState].gradients[this.channelsIndex].forEach(function(color, i) {\r\n\t\t// Push the hex color converted to rgba on the channel and the active color properties\r\n\t\tvar colorPos = _this.getColorPos(color, i);\r\n\t\tvar color = _this.getColor(color);\r\n\t\tvar rgbaColor = _this.convertColorToRgba(color);\r\n\t\tvar activeChannel = _this.channels[_this.activeState];\r\n\r\n\t\tactiveChannel[_this.channelsIndex].colors.push(rgbaColor);\r\n\t\t_this.activeColors.push(rgbaColor);\r\n\t\tactiveChannel[_this.channelsIndex].colorsPos.push(colorPos);\r\n\t\t_this.activeColorsPos.push(colorPos);\r\n\r\n\t\t// If it's the first channel to be set, set the currentColors\r\n\t\tif (!_this.isCurrentColorsSet) {\r\n\t\t\t_this.currentColors.push(_this.convertColorToRgba(color));\r\n\t\t\t_this.currentColorsPos.push(colorPos);\r\n\t\t}\r\n\r\n\t\t// If it's the last gradient, compute the color diff between the last gradient and the first one,\r\n\t\t// else between the penultimate one and the last one\r\n\t\tif (_this.channelsIndex === _this.states[_this.activeState].gradients.length - 1) {\r\n\t\t\tcolorDiff = _this.getColorDiff(\r\n\t\t\t\tactiveChannel[_this.channelsIndex].colors[i],\r\n\t\t\t\tactiveChannel[0].colors[i]\r\n\t\t\t);\r\n\t\t\tcolorPosDiff = _this.getColorPosDiff(\r\n\t\t\t\tactiveChannel[_this.channelsIndex].colorsPos[i],\r\n\t\t\t\tactiveChannel[0].colorsPos[i]\r\n\t\t\t);\r\n\r\n\t\t} else {\r\n\t\t\tnextColors = _this.convertColorToRgba(_this.getColor(_this.states[_this.activeState].gradients[_this.channelsIndex + 1][i]));\r\n\t\t\tnextColorsPos = _this.getColorPos(_this.states[_this.activeState].gradients[_this.channelsIndex + 1][i], i);\r\n\t\t\tcolorDiff = _this.getColorDiff(activeChannel[_this.channelsIndex].colors[i], nextColors);\r\n\t\t\tcolorPosDiff = _this.getColorPosDiff(activeChannel[_this.channelsIndex].colorsPos[i], nextColorsPos);\r\n\t\t}\r\n\r\n\t\tactiveChannel[_this.channelsIndex].colorsDiff.push(colorDiff);\r\n\t\t_this.activeColorsDiff.push(colorDiff);\r\n\t\tactiveChannel[_this.channelsIndex].colorsPosDiff.push(colorPosDiff);\r\n\t\t_this.activeColorsPosDiff.push(colorPosDiff);\r\n\t});\r\n\r\n\tthis.activetransitionSpeed = this.states[this.activeState].transitionSpeed || 5000;\r\n\tthis.isCurrentColorsSet = true;\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/setColors.js?");

/***/ }),

/***/ "./node_modules/granim/lib/setDirection.js":
/*!*************************************************!*\
  !*** ./node_modules/granim/lib/setDirection.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function() {\r\n\tvar ctx = this.context;\r\n\r\n\tswitch(this.direction) {\r\n\t\tcase 'diagonal':\r\n\t\t\treturn ctx.createLinearGradient(0, 0, this.x1, this.y1);\r\n\r\n\t\tcase 'left-right':\r\n\t\t\treturn ctx.createLinearGradient(0, 0, this.x1, 0);\r\n\r\n\t\tcase 'top-bottom':\r\n\t\t\treturn ctx.createLinearGradient(this.x1 / 2, 0, this.x1 / 2, this.y1);\r\n\r\n\t\tcase 'radial':\r\n\t\t\treturn ctx.createRadialGradient(this.x1 / 2, this.y1 / 2, this.x1 / 2, this.x1 / 2, this.y1 / 2, 0);\r\n\r\n\t\tcase 'custom':\r\n\t\t\treturn ctx.createLinearGradient(\r\n\t\t\t\tgetCustomCoordinateInPixels(this.customDirection.x0, this.x1),\r\n\t\t\t\tgetCustomCoordinateInPixels(this.customDirection.y0, this.y1),\r\n\t\t\t\tgetCustomCoordinateInPixels(this.customDirection.x1, this.x1),\r\n\t\t\t\tgetCustomCoordinateInPixels(this.customDirection.y1, this.y1)\r\n\t\t\t);\r\n\t}\r\n};\r\n\r\nfunction getCustomCoordinateInPixels(coordinate, size) {\r\n\treturn coordinate.indexOf('%') > -1\r\n\t\t? size / 100 * parseInt(coordinate.split('%')[0], 10)\r\n\t\t: parseInt(coordinate.split('px')[0], 10);\r\n}\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/setDirection.js?");

/***/ }),

/***/ "./node_modules/granim/lib/setSizeAttributes.js":
/*!******************************************************!*\
  !*** ./node_modules/granim/lib/setSizeAttributes.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function() {\r\n\tthis.getDimensions();\r\n\tthis.canvas.setAttribute('width', this.x1);\r\n\tthis.canvas.setAttribute('height', this.y1);\r\n\tif (this.image) this.prepareImage();\r\n\tthis.refreshColorsAndPos();\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/setSizeAttributes.js?");

/***/ }),

/***/ "./node_modules/granim/lib/triggerError.js":
/*!*************************************************!*\
  !*** ./node_modules/granim/lib/triggerError.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(element) {\r\n\tvar siteURL = 'https://sarcadass.github.io/granim.js/api.html';\r\n\tthrow new Error('Granim: Input error on \"' + element + '\" option.\\nCheck the API ' + siteURL + '.');\r\n};\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/triggerError.js?");

/***/ }),

/***/ "./node_modules/granim/lib/validateInput.js":
/*!**************************************************!*\
  !*** ./node_modules/granim/lib/validateInput.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function(inputType) {\r\n\tvar xPositionValues = ['left', 'center', 'right'];\r\n\tvar yPositionValues = ['top', 'center', 'bottom'];\r\n\tvar stretchModeValues = ['none', 'stretch', 'stretch-if-smaller', 'stretch-if-bigger'];\r\n\tvar blendingModeValues = ['multiply', 'screen', 'normal', 'overlay', 'darken',\r\n\t\t'lighten', 'lighter', 'color-dodge', 'color-burn', 'hard-light', 'soft-light',\r\n\t\t'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];\r\n\tvar directionValues = ['diagonal', 'left-right', 'top-bottom', 'radial', 'custom'];\r\n\r\n\tswitch(inputType) {\r\n\t\tcase 'image':\r\n\t\t\t// Validate image.position\r\n\t\t\tif ((!Array.isArray(this.image.position) || this.image.position.length !== 2) ||\r\n\t\t\t\txPositionValues.indexOf(this.image.position[0]) === -1 ||\r\n\t\t\t\tyPositionValues.indexOf(this.image.position[1]) === -1\r\n\t\t\t) { this.triggerError('image.position'); }\r\n\t\t\t// Validate image.stretchMode\r\n\t\t\tif (this.image.stretchMode) {\r\n\t\t\t\tif ((!Array.isArray(this.image.stretchMode) || this.image.stretchMode.length !== 2) ||\r\n\t\t\t\t\tstretchModeValues.indexOf(this.image.stretchMode[0]) === -1 ||\r\n\t\t\t\t\tstretchModeValues.indexOf(this.image.stretchMode[1]) === -1\r\n\t\t\t\t) { this.triggerError('image.stretchMode'); }\r\n\t\t\t}\r\n\t\t\tbreak;\r\n\r\n\t\tcase 'blendingMode':\r\n\t\t\tif (blendingModeValues.indexOf(this.image.blendingMode) === -1) {\r\n\t\t\t\tthis.clear();\r\n\t\t\t\tthis.triggerError('blendingMode');\r\n\t\t\t}\r\n\t\t\tbreak;\r\n\r\n\t\tcase 'direction':\r\n\t\t\tif (directionValues.indexOf(this.direction) === -1) {\r\n\t\t\t\tthis.triggerError('direction');\r\n\t\t\t} else {\r\n\t\t\t\tif (this.direction === 'custom') {\r\n\t\t\t\t\tif (!areDefinedInPixelsOrPercentage([\r\n\t\t\t\t\t\tthis.customDirection.x0,\r\n\t\t\t\t\t\tthis.customDirection.x1,\r\n\t\t\t\t\t\tthis.customDirection.y0,\r\n\t\t\t\t\t\tthis.customDirection.y1\r\n\t\t\t\t\t])) {\r\n\t\t\t\t\t\tthis.triggerError('customDirection');\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tbreak;\r\n\t}\r\n};\r\n\r\nfunction areDefinedInPixelsOrPercentage(array) {\r\n\tvar definedInPixelsOrPercentage = true, i = 0, value;\r\n\twhile (definedInPixelsOrPercentage && i < array.length) {\r\n\t\tvalue = array[i];\r\n\t\tif (typeof value !== 'string') {\r\n\t\t\tdefinedInPixelsOrPercentage = false;\r\n\t\t} else {\r\n\t\t\tvar splittedValue = null;\r\n\t\t\tvar unit = null;\r\n\t\t\tif (value.indexOf('px') !== -1) unit = 'px';\r\n\t\t\tif (value.indexOf('%') !== -1) unit = '%';\r\n\t\t\tsplittedValue = value.split(unit).filter(function(value) {\r\n\t\t\t\treturn value.length > 0;\r\n\t\t\t});\r\n\t\t\t// Check if there is a unit ('px' or '%'),\r\n\t\t\t// a char before the unit,\r\n\t\t\t// no char after the unit,\r\n\t\t\t// the string without the unit is only composed of digits\r\n\t\t\tif (\r\n\t\t\t\t!unit\r\n\t\t\t\t|| splittedValue.length > 2\r\n\t\t\t\t|| !splittedValue[0]\r\n\t\t\t\t|| splittedValue[1]\r\n\t\t\t\t|| !/^-?\\d+\\.?\\d*$/.test(splittedValue[0])\r\n\t\t\t) {\r\n\t\t\t\tdefinedInPixelsOrPercentage = false;\r\n\t\t\t}\r\n\t\t}\r\n\t\ti++;\r\n\t}\r\n\treturn definedInPixelsOrPercentage;\r\n}\r\n\n\n//# sourceURL=webpack://humanfriendlydesign/./node_modules/granim/lib/validateInput.js?");

/***/ }),

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var granim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! granim */ \"./node_modules/granim/index.js\");\n/* harmony import */ var granim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(granim__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction initGranim() {\n  new (granim__WEBPACK_IMPORTED_MODULE_0___default())({\n    element: '#granim-canvas',\n    name: 'granim',\n    direction: 'top-bottom',\n    states : {\n        \"default-state\": {\n            gradients: [\n                ['#E3FF75', '#75DEFF'],\n                ['#E3FF75', '#428EFF'],\n                ['#E3FF75', '#757BFF'],\n                ['#E3FF75', '#FF75A7'],\n                ['#E3FF75', '#75FF9C']\n            ],\n            transitionSpeed: 5000\n        }\n    }\n });\n}\n\n// function initColorThemeSwitch() {\n//   const themeMenu = document.querySelector(\".js-theme-menu\");\n//   const themeMenuOverlay = document.querySelector(\".js-header-theme-menu-overlay\");\n//   const buttonThemeMenuButton = document.querySelector(\".js-theme-menu-button\");\n//   const themeButtons = document.querySelectorAll(\".js-theme-button\");\n//   const accentButtons = document.querySelectorAll(\".js-accent-button\");\n//   const prefersDarkScheme = window.matchMedia(\"(prefers-color-scheme: dark)\");\n  \n//   // https://thegermancoder.com/2018/10/04/how-to-remove-classes-by-prefix-in-vanilla-javascript/\n//   function removeClassByPrefix(node, prefix) {\n//     var regx = new RegExp('\\\\b' + prefix + '[^ ]*[ ]?\\\\b', 'g');\n//     node.className = node.className.replace(regx, '');\n//     return node;\n//   }\n  \n//   function manualSetColorTheme(el) {\n//     // console.log('manual set theme');\n//     var selectedButton = el.target.closest('.js-theme-button');\n//     var selectedTheme = selectedButton.dataset.theme;\n//     // console.log('theme='+selectedTheme);\n//     removeClassByPrefix(document.documentElement, 'theme-');\n//     document.documentElement.classList.add(\"theme-\"+selectedTheme);\n\n//     if (selectedTheme == \"auto\") {\n//       localStorage.removeItem(\"colorTheme\");\n//       toggleThemeMenu();\n//       autoSetColorTheme();\n//     } else {\n//       localStorage.setItem(\"colorTheme\", selectedTheme);\n//       toggleThemeMenu();\n//     }\n//   }\n\n//   function autoSetColorTheme() {\n//     const savedTheme = localStorage.getItem(\"colorTheme\");\n//     // console.log('auto set theme');\n//     removeClassByPrefix(document.documentElement, 'theme-');\n    \n//     if (savedTheme == null) {\n//       if (prefersDarkScheme.matches) {\n//         // console.log('auto applied system dark');\n//         document.documentElement.classList.add(\"theme-auto\");\n//         document.documentElement.classList.add(\"theme-dark\");\n//       } \n//       if (!prefersDarkScheme.matches) {\n//         document.documentElement.classList.add(\"theme-auto\");\n//         // console.log('auto applied system auto');\n//       }\n//     } else {\n//       // console.log('auto applied saved '+savedTheme);\n//       document.documentElement.classList.add(\"theme-\"+savedTheme);\n//     }\n//   }\n\n//   function manualSetAccentColor(el) {\n//     // console.log('manual set accent');\n//     var selectedButton = el.target;\n//     var selectedColor = selectedButton.dataset.color;\n//     // console.log('color='+selectedColor);\n\n//     if (selectedColor !== \"classic\") {\n//       removeClassByPrefix(document.documentElement, 'accent-');\n//       document.documentElement.classList.add(\"accent-\"+selectedColor);\n//       localStorage.setItem(\"accentColor\", selectedColor);\n//       toggleThemeMenu();\n//     }\n//     else {\n//       removeClassByPrefix(document.documentElement, 'accent-');\n//       localStorage.removeItem(\"accentColor\");\n//       toggleThemeMenu();\n//     }\n//   }\n\n//   function autoSetAccentColor() {\n//     const savedaccentColor = localStorage.getItem(\"accentColor\");\n//     document.documentElement.classList.add(\"accent-\"+savedaccentColor);\n//   }\n\n//   function toggleThemeMenu() {\n//     if (themeMenu.classList.contains('tmpl-header__theme-menu--active')) {\n//       themeMenu.classList.remove('tmpl-header__theme-menu--active');\n//     } else {\n//       themeMenu.classList.add('tmpl-header__theme-menu--active');\n//     }\n//   }\n\n//   if (themeMenu !== null) {\n//     themeMenuOverlay.addEventListener(\"click\", toggleThemeMenu);\n//     buttonThemeMenuButton.addEventListener(\"click\", toggleThemeMenu);\n\n//     Array.prototype.forEach.call(themeButtons, function (el, i) {\n//       themeButtons[i].addEventListener('click', function(el) {\n//         manualSetColorTheme(el);\n//       });\n//     });\n\n//     Array.prototype.forEach.call(accentButtons, function (el, i) {\n//       accentButtons[i].addEventListener('click', function(el) {\n//         manualSetAccentColor(el);\n//       });\n//     });\n//   }\n  \n//   prefersDarkScheme.addEventListener(\"change\", autoSetColorTheme);\n//   autoSetColorTheme();\n//   autoSetAccentColor();\n// }\n\nfunction pageAnimations() {\n  const logoElement = document.querySelector(\".js-tmpl-logo\");\n  const navElement = document.querySelector(\".js-tmpl-nav\");\n  const mainElement = document.querySelector(\".js-tmpl-main\");\n\n  setTimeout(function() {\n    logoElement.classList.add('tmpl-logo--on');\n  }, 250);\n\n  setTimeout(function() {\n    navElement.classList.add('tmpl-nav--on');\n  }, 500);\n\n  setTimeout(function() {\n    mainElement.classList.add('tmpl-main--on');\n  }, 750);\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  // initColorThemeSwitch();\n  initGranim();\n  pageAnimations();\n})\n\n//# sourceURL=webpack://humanfriendlydesign/./src/js/global.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/global.js");
/******/ 	
/******/ })()
;