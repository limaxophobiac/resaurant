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
    contactDiv.style.backgroundImage = `url("${_pizzaplace_png__WEBPACK_IMPORTED_MODULE_0__}")`;
    contactDiv.style.backgroundAttachment = "fixed";
    contactDiv.style.backgroundSize = "cover";
    contactDiv.style.backgroundPosition = "center";
    contactDiv.style.minHeight = "100vh";

    contactDiv.style.display = "flex";
    contactDiv.style.alignItems = "center";
    contactDiv.style.justifyContent = "center";

    const contactBox = document.createElement('div');
    contactBox.style.backgroundColor = "rgba(0,0,0, 0.25)";
    contactBox.style.padding = "2.5vh 5vw 5vh 5vw";
    contactBox.style.color = "white";
    contactBox.style.borderRadius = "10px";
    contactBox.style.marginTop = "120px";

    const contactTitle = document.createElement('div');
    contactTitle.innerHTML = "Contact Us";
    contactTitle.style.fontSize = "2rem";
    contactBox.appendChild(contactTitle);

    const contactNumber = document.createElement('div');
    contactNumber.innerHTML = "12-345 67 89";
    contactBox.appendChild(contactNumber);

    const contactEmail = document.createElement('div');
    contactEmail.innerHTML = "fake@email.com";
    contactBox.appendChild(contactEmail);

    const mapImage = new Image();
    mapImage.src  = _pizzaMap_png__WEBPACK_IMPORTED_MODULE_1__;
    mapImage.style.maxWidth = "60vw";
    mapImage.style.maxHeight = "45vh";
    contactBox.appendChild(mapImage);

    contactDiv.appendChild(contactBox);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQztBQUNUOztBQUV0QztBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsNENBQWUsQ0FBQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsMENBQVE7QUFDNUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7O0FDaERvQjs7QUFFL0M7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRDQUE0Qyw0Q0FBZSxDQUFDOztBQUU1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7OztBQzVDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZmtDO0FBQ007QUFDTjs7QUFFbEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVM7QUFDakIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFTO0FBQ2pCLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBWTtBQUNwQixLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgYmFja2dyb3VuZFBsYWNlIGZyb20gJy4vcGl6emFwbGFjZS5wbmcnO1xuaW1wb3J0IHBpenphTWFwIGZyb20gJy4vcGl6emFNYXAucG5nJztcblxuY29uc3QgYnVpbGRDb250YWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0RGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2JhY2tncm91bmRQbGFjZX1cIilgO1xuICAgIGNvbnRhY3REaXYuc3R5bGUuYmFja2dyb3VuZEF0dGFjaG1lbnQgPSBcImZpeGVkXCI7XG4gICAgY29udGFjdERpdi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbiAgICBjb250YWN0RGl2LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG4gICAgY29udGFjdERpdi5zdHlsZS5taW5IZWlnaHQgPSBcIjEwMHZoXCI7XG5cbiAgICBjb250YWN0RGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBjb250YWN0RGl2LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgIGNvbnRhY3REaXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuXG4gICAgY29uc3QgY29udGFjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsMCwwLCAwLjI1KVwiO1xuICAgIGNvbnRhY3RCb3guc3R5bGUucGFkZGluZyA9IFwiMi41dmggNXZ3IDV2aCA1dndcIjtcbiAgICBjb250YWN0Qm94LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGNvbnRhY3RCb3guc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG4gICAgY29udGFjdEJveC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjEyMHB4XCI7XG5cbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0VGl0bGUuaW5uZXJIVE1MID0gXCJDb250YWN0IFVzXCI7XG4gICAgY29udGFjdFRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIycmVtXCI7XG4gICAgY29udGFjdEJveC5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuXG4gICAgY29uc3QgY29udGFjdE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3ROdW1iZXIuaW5uZXJIVE1MID0gXCIxMi0zNDUgNjcgODlcIjtcbiAgICBjb250YWN0Qm94LmFwcGVuZENoaWxkKGNvbnRhY3ROdW1iZXIpO1xuXG4gICAgY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEVtYWlsLmlubmVySFRNTCA9IFwiZmFrZUBlbWFpbC5jb21cIjtcbiAgICBjb250YWN0Qm94LmFwcGVuZENoaWxkKGNvbnRhY3RFbWFpbCk7XG5cbiAgICBjb25zdCBtYXBJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG1hcEltYWdlLnNyYyAgPSBwaXp6YU1hcDtcbiAgICBtYXBJbWFnZS5zdHlsZS5tYXhXaWR0aCA9IFwiNjB2d1wiO1xuICAgIG1hcEltYWdlLnN0eWxlLm1heEhlaWdodCA9IFwiNDV2aFwiO1xuICAgIGNvbnRhY3RCb3guYXBwZW5kQ2hpbGQobWFwSW1hZ2UpO1xuXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0Qm94KTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWlsZENvbnRhY3Q7IiwiaW1wb3J0IGJhY2tncm91bmRQaXp6YSBmcm9tICcuL3BpenphLWhvbWUuanBnJztcblxuY29uc3QgYnVpbGRIb21lPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBob21lRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2JhY2tncm91bmRQaXp6YX1cIilgO1xuXG4gICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVEaXYuaW5uZXJIVE1MID0gXCJQaXp6ZXJpbm9cIjtcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuXG4gICAgY29uc3QgZGVzY3JpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXBEaXYuaW5uZXJIVE1MID0gXCJQaXp6ZXJpb25vIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIjtcblxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcERpdik7XG5cbiAgICBob21lRGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBob21lRGl2LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgIGhvbWVEaXYuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgaG9tZURpdi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiZW5kXCI7XG4gICAgaG9tZURpdi5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xuICAgIGhvbWVEaXYuc3R5bGUucGFkZGluZyA9IFwiMHB4XCI7XG4gICAgaG9tZURpdi5zdHlsZS5taW5IZWlnaHQgPSBcIjEwMHZoXCI7XG4gICAgaG9tZURpdi5zdHlsZS5iYWNrZ3JvdW5kQXR0YWNobWVudCA9IFwiZml4ZWRcIjtcbiAgICBob21lRGl2LnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICAgIGhvbWVEaXYuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCJjZW50ZXJcIjtcblxuICAgIG5hbWVEaXYuc3R5bGUuY29sb3IgPSBcIm9yYW5nZVwiO1xuICAgIG5hbWVEaXYuc3R5bGUuZm9udFNpemUgPSBcIm1heCgycmVtLCAxMXZoKVwiO1xuICAgIG5hbWVEaXYuc3R5bGUudGV4dFNoYWRvdyA9IFwiMHB4IDBweCAxdmggcmdiKDAsMCwwKVwiO1xuICAgIG5hbWVEaXYuc3R5bGUubWFyZ2luVG9wID0gXCIxMjBweFwiO1xuICAgIG5hbWVEaXYuc3R5bGUubWFyZ2luQm90dG9tID0gXCIyMHZoXCI7XG4gICAgZGVzY3JpcERpdi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBkZXNjcmlwRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBcIkhlbHZldGljYVwiO1xuICAgIGRlc2NyaXBEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsMCwwLDAuMjUpXCJcbiAgICBkZXNjcmlwRGl2LnN0eWxlLnRleHRTaGFkb3cgPSBcIjBweCAwcHggNXB4IHJnYigwLDAsMClcIjtcbiAgICBkZXNjcmlwRGl2LnN0eWxlLnBhZGRpbmcgPSBcIjJyZW0gMjB2d1wiO1xuICAgIGRlc2NyaXBEaXYuc3R5bGUubWFyZ2luQm90dG9tID0gXCI5MHB4XCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChob21lRGl2KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkSG9tZTsiLCJjb25zdCBidWlsZE1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibHVlXCI7XG4gICAgbWVudURpdi5zdHlsZS5taW5IZWlnaHQgPSBcIjEwMHZoXCI7XG5cbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51VGl0bGUuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gICAgbWVudVRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIycmVtXCI7XG5cbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBidWlsZEhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBidWlsZENvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBidWlsZE1lbnUgZnJvbSAnLi9tZW51LmpzJztcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcbmRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZyA9IFwiMHB4XCI7XG5cbmNvbnRlbnREaXYuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcbmNvbnRlbnREaXYuc3R5bGUucGFkZGluZyA9IFwiMHB4XCI7XG5jb250ZW50RGl2LnN0eWxlLm1pbkhlaWdodCA9IFwiMTAwdmhcIjtcblxuY3JlYXRlSGVhZGVyKCk7XG5idWlsZEhvbWUoKTtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuICAgIGhlYWRlci5zdHlsZS5oZWlnaHQgPSBcIjkwcHhcIjtcbiAgICBoZWFkZXIuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcbiAgICBoZWFkZXIuc3R5bGUucGFkZGluZyA9IFwiMHB4XCI7XG4gICAgaGVhZGVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLDAsMCwwLjI1KVwiO1xuICAgIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgaGVhZGVyLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgIGhlYWRlci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG4gICAgaGVhZGVyLnN0eWxlLmdhcCA9IFwiMTJ2d1wiO1xuICAgIGhlYWRlci5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBoZWFkZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9IFwiPGRpdiBpZD0naG9tZUInPkhvbWU8L2Rpdj48ZGl2IGlkPSdtZW51Qic+TWVudTwvZGl2PjxkaXYgaWQ9J2NvbnRhY3RCJz5Db250YWN0PC9kaXY+XCI7XG4gICAgaGVhZGVyLnN0eWxlLmZvbnRGYW1pbHkgPSBcIkhlbHZldGljYVwiO1xuICAgIGhlYWRlci5zdHlsZS5mb250U2l6ZSA9IFwiMS40cmVtXCI7XG5cbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShoZWFkZXIsIGNvbnRlbnREaXYpO1xuXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lQicpO1xuICAgIGhvbWVCdXR0b24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIGJ1aWxkSG9tZSgpO1xuICAgIH0pO1xuXG4gICAgaG9tZUJ1dHRvbi5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBcIjAuMnNcIjtcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IGhvbWVCdXR0b24uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxLjMpXCIpO1xuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IGhvbWVCdXR0b24uc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnKTtcblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudUInKTtcbiAgICBtZW51QnV0dG9uLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICBidWlsZE1lbnUoKTtcbiAgICB9KTtcblxuICAgIG1lbnVCdXR0b24uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gXCIwLjJzXCI7XG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiBtZW51QnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMS4zKVwiKTtcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiBtZW51QnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJyk7XG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RCJyk7XG4gICAgY29udGFjdEJ1dHRvbi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgYnVpbGRDb250YWN0KCk7XG4gICAgfSk7XG5cbiAgICBjb250YWN0QnV0dG9uLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IFwiMC4yc1wiO1xuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gY29udGFjdEJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEuMylcIik7XG4gICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gY29udGFjdEJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZScpO1xuXG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpe1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=