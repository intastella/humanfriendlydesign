/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var hfd;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/vanilla-lightbox/src/js/app.js":
/*!*****************************************************!*\
  !*** ./node_modules/vanilla-lightbox/src/js/app.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VanillaLightbox)\n/* harmony export */ });\n/* harmony import */ var _modules_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gallery */ \"./node_modules/vanilla-lightbox/src/js/modules/gallery.js\");\n/* harmony import */ var _modules_single__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/single */ \"./node_modules/vanilla-lightbox/src/js/modules/single.js\");\n/* harmony import */ var _modules_iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/iframe */ \"./node_modules/vanilla-lightbox/src/js/modules/iframe.js\");\n\n\n\n\nclass VanillaLightbox{\n    constructor() {\n        this.lightboxId = 1;\n        this.gallery = new _modules_gallery__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.single = new _modules_single__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.iframe = new _modules_iframe__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n        this.init();\n\n        //on overlay click close lightbox\n        let overlays = document.querySelectorAll('.vanilla-lightbox-overlay');\n\n        if(overlays){\n            for(let i = 0; i < overlays.length; i++){\n                overlays[i].addEventListener('click', () => {\n                    this.closeLightbox(overlays[i].parentNode);\n                })\n            }\n        }\n\n        //on exit click close lightbox\n        let exits = document.querySelectorAll('.vanilla-lightbox .exit');\n\n        if(exits){\n            for(let i = 0; i < exits.length; i++){\n                exits[i].addEventListener('click', () => {\n                    this.closeLightbox(exits[i].parentNode);\n                })\n            }\n        }\n    }\n\n    init(){\n        //getting all lighboxes in that page\n        const lightboxes = document.querySelectorAll('.lightbox');\n\n        //checking if it is single or gallery\n        if(lightboxes){\n            for(let i = 0; i < lightboxes.length; i++){\n                let galleryId = this.lightboxId;\n                this.generateLightboxDom(galleryId);\n                if(lightboxes[i].childElementCount > 1){\n                    this.gallery.initGallery(lightboxes[i].querySelectorAll('a'),galleryId);\n                }else if(lightboxes[i].classList.contains('iframe')){\n                    this.iframe.init(lightboxes[i].querySelector('a'),galleryId);\n                }else{\n                    this.single.initSingle(lightboxes[i].querySelector('a'),galleryId);\n                }\n            }\n        }\n    }\n\n    generateLightboxDom(id){\n        let lightboxElement = document.createElement('div');\n        lightboxElement.classList.add('vanilla-lightbox');\n        lightboxElement.classList.add(`vanilla-lightbox-${id}`);\n\n        let exit = document.createElement('div');\n        exit.classList.add('exit');\n        lightboxElement.insertBefore(exit, lightboxElement.childNodes[0]);\n\n        let lightboxOverlay = document.createElement('div');\n        lightboxOverlay.classList.add('vanilla-lightbox-overlay');\n\n        lightboxElement.appendChild(lightboxOverlay);\n        document.body.appendChild(lightboxElement);\n        this.lightboxId++;\n    }\n\n    closeLightbox(element){\n        element.classList.remove('show');\n        let iframe = element.querySelector('iframe')\n        if(iframe){\n            iframe.src = iframe.getAttribute('src');\n        }\n    }\n}\n\n//# sourceURL=webpack://hfd/./node_modules/vanilla-lightbox/src/js/app.js?");

/***/ }),

/***/ "./node_modules/vanilla-lightbox/src/js/modules/gallery.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vanilla-lightbox/src/js/modules/gallery.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gallery)\n/* harmony export */ });\n/* harmony import */ var _lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazyload */ \"./node_modules/vanilla-lightbox/src/js/modules/lazyload.js\");\n\n\n\nclass Gallery {\n    initArrowEvents(){\n        //on arrow click\n        let arrows = document.querySelectorAll('.vanilla-lightbox .arrow');\n\n        if(arrows){\n            for (let i = 0; i < arrows.length; i++) {\n                arrows[i].addEventListener('click', () => {\n                    this.nextPrevImage(arrows[i]);\n                })\n            }\n        }\n    }\n\n    initGallery(elements, id) {\n        const lightboxElement = document.querySelector(`.vanilla-lightbox-${id}`);\n        this.generateGalleryDom(elements, id);\n        for (let i = 0; i < elements.length; i++) {\n            elements[i].setAttribute('data-lightbox', id);\n            elements[i].addEventListener('click', (e) => {\n                e.preventDefault();\n                lightboxElement.classList.add('show');\n                this.openClickedImage(id, elements[i].getAttribute('data-image'));\n            })\n        }\n    }\n\n    generateGalleryDom(elements, id) {\n        const lightboxElement = document.querySelector(`.vanilla-lightbox-${id}`);\n        let galleryElement = document.createElement('div');\n        galleryElement.classList.add('gallery');\n\n        for (let i = 0; i < elements.length; i++) {\n            elements[i].setAttribute('data-image', i);\n            const imageUrl = elements[i].getAttribute('href');\n\n            let imageElement = document.createElement('img');\n\n            imageElement.setAttribute('data-src',imageUrl);\n\n            let imageParentElement = document.createElement('div');\n            imageParentElement.classList.add('image');\n            if(i === elements.length - 1){\n                imageParentElement.classList.add('last');\n            }\n            imageParentElement.setAttribute('data-image', i);\n            imageParentElement.classList.add('hide');\n            imageParentElement.appendChild(imageElement);\n\n            galleryElement.appendChild(imageParentElement);\n        }\n\n        //add arrows\n        let leftArrow = document.createElement('div');\n        leftArrow.classList.add('arrow');\n        leftArrow.classList.add('arrow-left');\n        galleryElement.insertBefore(leftArrow, galleryElement.childNodes[0]);\n\n        let rightArrow = document.createElement('div');\n        rightArrow.classList.add('arrow');\n        rightArrow.classList.add('arrow-right');\n        galleryElement.appendChild(rightArrow);\n\n        lightboxElement.appendChild(galleryElement);\n\n        this.initArrowEvents();\n    }\n\n    openClickedImage(galleryId, id) {\n        let allImages = document.querySelectorAll(`.vanilla-lightbox-${galleryId} .image`);\n\n        if(allImages){\n            for (let i = 0; i < allImages.length; i++) {\n                allImages[i].classList.add('hide');\n                if(allImages[i].getAttribute('data-image') === id){\n                    allImages[i].classList.remove('hide');\n                    _lazyload__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initLazy(allImages[i]);\n                }\n            }\n        }\n    }\n\n    nextPrevImage(arrow){\n        let openedLightbox = document.querySelector('.vanilla-lightbox.show');\n        let openedImage = openedLightbox.querySelector('.image:not(.hide)');\n        let allImages = openedLightbox.querySelectorAll('.image');\n        let id = parseInt(openedImage.getAttribute('data-image'));\n        let nextId, nextImage;\n\n        if(arrow.classList.contains('arrow-left')){\n            nextId = id > 0 ? id - 1 : null;\n            nextImage = openedLightbox.querySelector(`[data-image=\"${nextId}\"]`);\n\n            if(!nextImage){\n                nextImage = openedLightbox.querySelector('.image.last');\n            }\n        }else{\n            nextId = (id > -1) ? id + 1 : 0;\n            nextImage = openedLightbox.querySelector(`[data-image=\"${nextId}\"]`);\n\n            if(!nextImage){\n                nextImage = openedLightbox.querySelector(`[data-image=\"0\"]`);\n            }\n        }\n        if(nextImage){\n            if(allImages){\n                for (let i = 0; i < allImages.length; i++) {\n                    allImages[i].classList.add('hide');\n                }\n            }\n\n            _lazyload__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initLazy(nextImage);\n            nextImage.classList.remove('hide');\n        }\n    }\n}\n\n//# sourceURL=webpack://hfd/./node_modules/vanilla-lightbox/src/js/modules/gallery.js?");

/***/ }),

/***/ "./node_modules/vanilla-lightbox/src/js/modules/iframe.js":
/*!****************************************************************!*\
  !*** ./node_modules/vanilla-lightbox/src/js/modules/iframe.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Iframe)\n/* harmony export */ });\n/* harmony import */ var _lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazyload */ \"./node_modules/vanilla-lightbox/src/js/modules/lazyload.js\");\n\n\nclass Iframe{\n    init(element, id){\n        const lightboxElement = document.querySelector(`.vanilla-lightbox-${id}`);\n        element.setAttribute('data-lightbox', id);\n        this.generateIframeDom(element, id);\n        element.addEventListener('click', (e) => {\n            e.preventDefault();\n            lightboxElement.classList.add('show');\n            lightboxElement.querySelector('.image').classList.remove('hide');\n            _lazyload__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initLazy(lightboxElement.querySelector('.image'));\n        })\n    }\n\n    generateIframeDom(element, id){\n        const lightboxElement = document.querySelector(`.vanilla-lightbox-${id}`);\n        let singleElement = document.createElement('div');\n        singleElement.classList.add('gallery');\n        singleElement.classList.add('iframe');\n        const iframeUrl = element.getAttribute('href');\n\n        let iframeElement = document.createElement('iframe');\n        iframeElement.setAttribute('allowfullscreen','1')\n        iframeElement.setAttribute('frameBorder','0')\n        iframeElement.setAttribute('data-src',iframeUrl);\n\n        let iframeParentElement = document.createElement('div');\n        iframeParentElement.classList.add('image');\n        iframeParentElement.classList.add('hide');\n        iframeParentElement.appendChild(iframeElement);\n\n        singleElement.appendChild(iframeParentElement)\n\n        lightboxElement.appendChild(singleElement);\n    }\n}\n\n//# sourceURL=webpack://hfd/./node_modules/vanilla-lightbox/src/js/modules/iframe.js?");

/***/ }),

/***/ "./node_modules/vanilla-lightbox/src/js/modules/lazyload.js":
/*!******************************************************************!*\
  !*** ./node_modules/vanilla-lightbox/src/js/modules/lazyload.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Lazyload)\n/* harmony export */ });\nclass Lazyload{\n    static initLazy(element){\n        let image = element.querySelector('img');\n        if(!image){\n            image = element.querySelector('iframe');\n        }\n        if(image.getAttribute('data-src')){\n            image.src = image.getAttribute('data-src');\n            image.removeAttribute('data-src');\n        }\n    }\n}\n\n//# sourceURL=webpack://hfd/./node_modules/vanilla-lightbox/src/js/modules/lazyload.js?");

/***/ }),

/***/ "./node_modules/vanilla-lightbox/src/js/modules/single.js":
/*!****************************************************************!*\
  !*** ./node_modules/vanilla-lightbox/src/js/modules/single.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Single)\n/* harmony export */ });\n/* harmony import */ var _lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazyload */ \"./node_modules/vanilla-lightbox/src/js/modules/lazyload.js\");\n\n\nclass Single{\n    initSingle(element, id){\n        const lightboxElement = document.querySelector(`.vanilla-lightbox-${id}`);\n        element.setAttribute('data-lightbox', id);\n        this.generateSingleDom(element, id);\n        element.addEventListener('click', (e) => {\n            e.preventDefault();\n            lightboxElement.classList.add('show');\n            lightboxElement.querySelector('.image').classList.remove('hide');\n            _lazyload__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initLazy(lightboxElement.querySelector('.image'));\n        })\n    }\n\n    generateSingleDom(element, id){\n        const lightboxElement = document.querySelector(`.vanilla-lightbox-${id}`);\n        let singleElement = document.createElement('div');\n        singleElement.classList.add('gallery');\n\n        const imageUrl = element.getAttribute('href');\n\n        let imageElement = document.createElement('img');\n\n        imageElement.setAttribute('data-src',imageUrl);\n\n        let imageParentElement = document.createElement('div');\n        imageParentElement.classList.add('image');\n        imageParentElement.classList.add('hide');\n        imageParentElement.appendChild(imageElement);\n\n        singleElement.appendChild(imageParentElement)\n\n        lightboxElement.appendChild(singleElement);\n    }\n}\n\n//# sourceURL=webpack://hfd/./node_modules/vanilla-lightbox/src/js/modules/single.js?");

/***/ }),

/***/ "./src/js/hfd.js":
/*!***********************!*\
  !*** ./src/js/hfd.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vanilla_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-lightbox */ \"./node_modules/vanilla-lightbox/src/js/app.js\");\n\n\nconst vanillaLightbox = new vanilla_lightbox__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack://hfd/./src/js/hfd.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/hfd.js");
/******/ 	hfd = __webpack_exports__;
/******/ 	
/******/ })()
;