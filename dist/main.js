/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pizzaplace_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizzaplace.png */ "./src/pizzaplace.png");
/* harmony import */ var _pizzaMap_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pizzaMap.png */ "./src/pizzaMap.png");




const buildContact = () => {
    const contentDiv = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.style.backgroundImage = `url("${_pizzaplace_png__WEBPACK_IMPORTED_MODULE_0__}")`;;
    contactDiv.style.minHeight = "100vh";

    const contactTitle = document.createElement('div');
    contactTitle.innerHTML = "Contact Us";
    contactTitle.style.fontSize = "2rem";
    contactDiv.appendChild(contactTitle);

    const contactNumber = document.createElement('div');
    contactNumber.innerHTML = "12-345 67 89";
    contactDiv.appendChild(contactNumber);

    const contactEmail = document.createElement('div');
    contactEmail.innerHTML = "fake@email.com";
    contactDiv.appendChild(contactEmail);

    const mapImage = new Image();
    mapImage.src  = _pizzaMap_png__WEBPACK_IMPORTED_MODULE_1__;
    contactDiv.appendChild(mapImage);

    contentDiv.appendChild(contactDiv);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pizza_home_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza-home.jpg */ "./src/pizza-home.jpg");


const buildHome= () => {
    
    const contentDiv = document.getElementById('content');

    const homeDiv = document.createElement('div');

    homeDiv.style.backgroundImage = `url("${_pizza_home_jpg__WEBPACK_IMPORTED_MODULE_0__}")`;

    const nameDiv = document.createElement('div');
    nameDiv.innerHTML = "Pizzerino";
    homeDiv.appendChild(nameDiv);

    const descripDiv = document.createElement('div');
    descripDiv.innerHTML = "Pizzeriono ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    homeDiv.appendChild(descripDiv);

    homeDiv.style.display = "flex";
    homeDiv.style.flexDirection = "column";
    homeDiv.style.alignItems = "center";
    homeDiv.style.justifyContent = "end";
    homeDiv.style.margin = "0px";
    homeDiv.style.padding = "0px";
    homeDiv.style.minHeight = "100vh";
    homeDiv.style.backgroundAttachment = "fixed";
    homeDiv.style.backgroundSize = "cover";
    homeDiv.style.backgroundPosition = "center";

    nameDiv.style.color = "orange";
    nameDiv.style.fontSize = "max(2rem, 11vh)";
    nameDiv.style.textShadow = "0px 0px 1vh rgb(0,0,0)";
    nameDiv.style.marginTop = "120px";
    nameDiv.style.marginBottom = "20vh";
    descripDiv.style.color = "white";
    descripDiv.style.fontFamily = "Helvetica";
    descripDiv.style.backgroundColor = "rgba(0,0,0,0.25)"
    descripDiv.style.textShadow = "0px 0px 5px rgb(0,0,0)";
    descripDiv.style.padding = "2rem 20vw";
    descripDiv.style.marginBottom = "90px";
    contentDiv.appendChild(homeDiv);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const buildMenu = () => {
    const contentDiv = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.style.backgroundColor = "blue";
    menuDiv.style.minHeight = "100vh";

    const menuTitle = document.createElement('div');
    menuTitle.innerHTML = "Menu";
    menuTitle.style.fontSize = "2rem";

    menuDiv.appendChild(menuTitle);

    contentDiv.appendChild(menuDiv);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildMenu);

/***/ }),

/***/ "./src/pizza-home.jpg":
/*!****************************!*\
  !*** ./src/pizza-home.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a5d717d9764bfe97f25.jpg";

/***/ }),

/***/ "./src/pizzaMap.png":
/*!**************************!*\
  !*** ./src/pizzaMap.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91ee84eaeaef9c13c398.png";

/***/ }),

/***/ "./src/pizzaplace.png":
/*!****************************!*\
  !*** ./src/pizzaplace.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26288c485b8efeaf67c1.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");




const contentDiv = document.getElementById('content');

document.body.style.margin = "0px";
document.body.style.padding = "0px";

contentDiv.style.margin = "0px";
contentDiv.style.padding = "0px";
contentDiv.style.minHeight = "100vh";

createHeader();
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

function createHeader(){

    const header = document.createElement('div');
    header.id = "header";
    header.style.height = "90px";
    header.style.margin = "0px";
    header.style.padding = "0px";
    header.style.width = "100%";
    header.style.backgroundColor = "rgba(0,0,0,0.25)";
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.justifyContent = "center";
    header.style.gap = "12vw";
    header.style.color = "white";
    header.style.position = "absolute";
    header.innerHTML = "<div id='homeB'>Home</div><div id='menuB'>Menu</div><div id='contactB'>Contact</div>";
    header.style.fontFamily = "Helvetica";
    header.style.fontSize = "1.4rem";

    document.body.insertBefore(header, contentDiv);

    const homeButton = document.getElementById('homeB');
    homeButton.style.cursor = "pointer";
    homeButton.addEventListener('click', () => {
        clearContent();
        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    homeButton.style.transitionDuration = "0.2s";
    homeButton.addEventListener('mouseover', () => homeButton.style.transform = "scale(1.3)");
    homeButton.addEventListener('mouseleave', () => homeButton.style.transform = 'none');

    const menuButton = document.getElementById('menuB');
    menuButton.style.cursor = "pointer";
    menuButton.addEventListener('click', () => {
        clearContent();
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });

    menuButton.style.transitionDuration = "0.2s";
    menuButton.addEventListener('mouseover', () => menuButton.style.transform = "scale(1.3)");
    menuButton.addEventListener('mouseleave', () => menuButton.style.transform = 'none');

    const contactButton = document.getElementById('contactB');
    contactButton.style.cursor = "pointer";
    contactButton.addEventListener('click', () => {
        clearContent();
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    contactButton.style.transitionDuration = "0.2s";
    contactButton.addEventListener('mouseover', () => contactButton.style.transform = "scale(1.3)");
    contactButton.addEventListener('mouseleave', () => contactButton.style.transform = 'none');

}

function clearContent(){
    contentDiv.innerHTML = "";
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQztBQUNUOztBQUV0QztBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsNENBQWUsQ0FBQztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDBDQUFRO0FBQzVCOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJvQjs7QUFFL0M7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRDQUE0Qyw0Q0FBZSxDQUFDOztBQUU1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7OztBQzVDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZmtDO0FBQ007QUFDTjs7QUFFbEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVM7QUFDakIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFTO0FBQ2pCLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBWTtBQUNwQixLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgYmFja2dyb3VuZFBsYWNlIGZyb20gJy4vcGl6emFwbGFjZS5wbmcnO1xuaW1wb3J0IHBpenphTWFwIGZyb20gJy4vcGl6emFNYXAucG5nJztcblxuY29uc3QgYnVpbGRDb250YWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0RGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2JhY2tncm91bmRQbGFjZX1cIilgOztcbiAgICBjb250YWN0RGl2LnN0eWxlLm1pbkhlaWdodCA9IFwiMTAwdmhcIjtcblxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RUaXRsZS5pbm5lckhUTUwgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBjb250YWN0VGl0bGUuc3R5bGUuZm9udFNpemUgPSBcIjJyZW1cIjtcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG5cbiAgICBjb25zdCBjb250YWN0TnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdE51bWJlci5pbm5lckhUTUwgPSBcIjEyLTM0NSA2NyA4OVwiO1xuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdE51bWJlcik7XG5cbiAgICBjb25zdCBjb250YWN0RW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0RW1haWwuaW5uZXJIVE1MID0gXCJmYWtlQGVtYWlsLmNvbVwiO1xuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdEVtYWlsKTtcblxuICAgIGNvbnN0IG1hcEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbWFwSW1hZ2Uuc3JjICA9IHBpenphTWFwO1xuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQobWFwSW1hZ2UpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkQ29udGFjdDsiLCJpbXBvcnQgYmFja2dyb3VuZFBpenphIGZyb20gJy4vcGl6emEtaG9tZS5qcGcnO1xuXG5jb25zdCBidWlsZEhvbWU9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGhvbWVEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7YmFja2dyb3VuZFBpenphfVwiKWA7XG5cbiAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZURpdi5pbm5lckhUTUwgPSBcIlBpenplcmlub1wiO1xuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQobmFtZURpdik7XG5cbiAgICBjb25zdCBkZXNjcmlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcERpdi5pbm5lckhUTUwgPSBcIlBpenplcmlvbm8gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiO1xuXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChkZXNjcmlwRGl2KTtcblxuICAgIGhvbWVEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGhvbWVEaXYuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgaG9tZURpdi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICBob21lRGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJlbmRcIjtcbiAgICBob21lRGl2LnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XG4gICAgaG9tZURpdi5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcbiAgICBob21lRGl2LnN0eWxlLm1pbkhlaWdodCA9IFwiMTAwdmhcIjtcbiAgICBob21lRGl2LnN0eWxlLmJhY2tncm91bmRBdHRhY2htZW50ID0gXCJmaXhlZFwiO1xuICAgIGhvbWVEaXYuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gICAgaG9tZURpdi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBcImNlbnRlclwiO1xuXG4gICAgbmFtZURpdi5zdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gICAgbmFtZURpdi5zdHlsZS5mb250U2l6ZSA9IFwibWF4KDJyZW0sIDExdmgpXCI7XG4gICAgbmFtZURpdi5zdHlsZS50ZXh0U2hhZG93ID0gXCIwcHggMHB4IDF2aCByZ2IoMCwwLDApXCI7XG4gICAgbmFtZURpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjEyMHB4XCI7XG4gICAgbmFtZURpdi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjIwdmhcIjtcbiAgICBkZXNjcmlwRGl2LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGRlc2NyaXBEaXYuc3R5bGUuZm9udEZhbWlseSA9IFwiSGVsdmV0aWNhXCI7XG4gICAgZGVzY3JpcERpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwwLDAsMC4yNSlcIlxuICAgIGRlc2NyaXBEaXYuc3R5bGUudGV4dFNoYWRvdyA9IFwiMHB4IDBweCA1cHggcmdiKDAsMCwwKVwiO1xuICAgIGRlc2NyaXBEaXYuc3R5bGUucGFkZGluZyA9IFwiMnJlbSAyMHZ3XCI7XG4gICAgZGVzY3JpcERpdi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjkwcHhcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRIb21lOyIsImNvbnN0IGJ1aWxkTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIjtcbiAgICBtZW51RGl2LnN0eWxlLm1pbkhlaWdodCA9IFwiMTAwdmhcIjtcblxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVUaXRsZS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcbiAgICBtZW51VGl0bGUuc3R5bGUuZm9udFNpemUgPSBcIjJyZW1cIjtcblxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudURpdik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWlsZE1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGJ1aWxkSG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGJ1aWxkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0IGJ1aWxkTWVudSBmcm9tICcuL21lbnUuanMnO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcblxuY29udGVudERpdi5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xuY29udGVudERpdi5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcbmNvbnRlbnREaXYuc3R5bGUubWluSGVpZ2h0ID0gXCIxMDB2aFwiO1xuXG5jcmVhdGVIZWFkZXIoKTtcbmJ1aWxkSG9tZSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XG4gICAgaGVhZGVyLnN0eWxlLmhlaWdodCA9IFwiOTBweFwiO1xuICAgIGhlYWRlci5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xuICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcbiAgICBoZWFkZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsMCwwLDAuMjUpXCI7XG4gICAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBoZWFkZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgaGVhZGVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICBoZWFkZXIuc3R5bGUuZ2FwID0gXCIxMnZ3XCI7XG4gICAgaGVhZGVyLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGhlYWRlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gXCI8ZGl2IGlkPSdob21lQic+SG9tZTwvZGl2PjxkaXYgaWQ9J21lbnVCJz5NZW51PC9kaXY+PGRpdiBpZD0nY29udGFjdEInPkNvbnRhY3Q8L2Rpdj5cIjtcbiAgICBoZWFkZXIuc3R5bGUuZm9udEZhbWlseSA9IFwiSGVsdmV0aWNhXCI7XG4gICAgaGVhZGVyLnN0eWxlLmZvbnRTaXplID0gXCIxLjRyZW1cIjtcblxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGhlYWRlciwgY29udGVudERpdik7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCJyk7XG4gICAgaG9tZUJ1dHRvbi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgYnVpbGRIb21lKCk7XG4gICAgfSk7XG5cbiAgICBob21lQnV0dG9uLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IFwiMC4yc1wiO1xuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gaG9tZUJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEuMylcIik7XG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gaG9tZUJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZScpO1xuXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51QicpO1xuICAgIG1lbnVCdXR0b24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIGJ1aWxkTWVudSgpO1xuICAgIH0pO1xuXG4gICAgbWVudUJ1dHRvbi5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBcIjAuMnNcIjtcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IG1lbnVCdXR0b24uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxLjMpXCIpO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IG1lbnVCdXR0b24uc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnKTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEInKTtcbiAgICBjb250YWN0QnV0dG9uLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICBidWlsZENvbnRhY3QoKTtcbiAgICB9KTtcblxuICAgIGNvbnRhY3RCdXR0b24uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gXCIwLjJzXCI7XG4gICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiBjb250YWN0QnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMS4zKVwiKTtcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiBjb250YWN0QnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJyk7XG5cbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCl7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==