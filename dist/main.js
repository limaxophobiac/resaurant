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
    contactBox.style.padding = "20px 40px 40px 40px";
    contactBox.style.color = "white";
    contactBox.style.borderRadius = "5px";
    contactBox.style.marginTop = "120px";
    contactBox.style.display = "flex";
    contactBox.style.flexDirection = "column";
    contactBox.style.gap = "10px";


    const contactTitle = document.createElement('div');
    contactTitle.innerHTML = "Contact Us";
    contactTitle.style.fontSize = "2rem";
    contactBox.appendChild(contactTitle);

    const contactNumber = document.createElement('div');
    contactNumber.innerHTML = "Phone: 12-345 67 89";
    contactBox.appendChild(contactNumber);

    const contactEmail = document.createElement('div');
    contactEmail.innerHTML = "Email: fake@email.com";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQztBQUNUOztBQUV0QztBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsNENBQWUsQ0FBQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDBDQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7OztBQ3BEb0I7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0Q0FBNEMsNENBQWUsQ0FBQzs7QUFFNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUM1Q3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZrQztBQUNNO0FBQ047O0FBRWxDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFTO0FBQ2pCLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBUztBQUNqQixLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVk7QUFDcEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGJhY2tncm91bmRQbGFjZSBmcm9tICcuL3BpenphcGxhY2UucG5nJztcbmltcG9ydCBwaXp6YU1hcCBmcm9tICcuL3BpenphTWFwLnBuZyc7XG5cbmNvbnN0IGJ1aWxkQ29udGFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdERpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtiYWNrZ3JvdW5kUGxhY2V9XCIpYDtcbiAgICBjb250YWN0RGl2LnN0eWxlLmJhY2tncm91bmRBdHRhY2htZW50ID0gXCJmaXhlZFwiO1xuICAgIGNvbnRhY3REaXYuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gICAgY29udGFjdERpdi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBcImNlbnRlclwiO1xuICAgIGNvbnRhY3REaXYuc3R5bGUubWluSGVpZ2h0ID0gXCIxMDB2aFwiO1xuXG4gICAgY29udGFjdERpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgY29udGFjdERpdi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICBjb250YWN0RGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcblxuICAgIGNvbnN0IGNvbnRhY3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Qm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLDAsMCwgMC4yNSlcIjtcbiAgICBjb250YWN0Qm94LnN0eWxlLnBhZGRpbmcgPSBcIjIwcHggNDBweCA0MHB4IDQwcHhcIjtcbiAgICBjb250YWN0Qm94LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGNvbnRhY3RCb3guc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcbiAgICBjb250YWN0Qm94LnN0eWxlLm1hcmdpblRvcCA9IFwiMTIwcHhcIjtcbiAgICBjb250YWN0Qm94LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBjb250YWN0Qm94LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgIGNvbnRhY3RCb3guc3R5bGUuZ2FwID0gXCIxMHB4XCI7XG5cblxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RUaXRsZS5pbm5lckhUTUwgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBjb250YWN0VGl0bGUuc3R5bGUuZm9udFNpemUgPSBcIjJyZW1cIjtcbiAgICBjb250YWN0Qm94LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG5cbiAgICBjb25zdCBjb250YWN0TnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdE51bWJlci5pbm5lckhUTUwgPSBcIlBob25lOiAxMi0zNDUgNjcgODlcIjtcbiAgICBjb250YWN0Qm94LmFwcGVuZENoaWxkKGNvbnRhY3ROdW1iZXIpO1xuXG4gICAgY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEVtYWlsLmlubmVySFRNTCA9IFwiRW1haWw6IGZha2VAZW1haWwuY29tXCI7XG4gICAgY29udGFjdEJveC5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpO1xuXG4gICAgY29uc3QgbWFwSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYXBJbWFnZS5zcmMgID0gcGl6emFNYXA7XG4gICAgbWFwSW1hZ2Uuc3R5bGUubWF4V2lkdGggPSBcIjYwdndcIjtcbiAgICBtYXBJbWFnZS5zdHlsZS5tYXhIZWlnaHQgPSBcIjQ1dmhcIjtcbiAgICBjb250YWN0Qm94LmFwcGVuZENoaWxkKG1hcEltYWdlKTtcblxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdEJveCk7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRDb250YWN0OyIsImltcG9ydCBiYWNrZ3JvdW5kUGl6emEgZnJvbSAnLi9waXp6YS1ob21lLmpwZyc7XG5cbmNvbnN0IGJ1aWxkSG9tZT0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaG9tZURpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtiYWNrZ3JvdW5kUGl6emF9XCIpYDtcblxuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lRGl2LmlubmVySFRNTCA9IFwiUGl6emVyaW5vXCI7XG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChuYW1lRGl2KTtcblxuICAgIGNvbnN0IGRlc2NyaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwRGl2LmlubmVySFRNTCA9IFwiUGl6emVyaW9ubyBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCI7XG5cbiAgICBob21lRGl2LmFwcGVuZENoaWxkKGRlc2NyaXBEaXYpO1xuXG4gICAgaG9tZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgaG9tZURpdi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICBob21lRGl2LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgIGhvbWVEaXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImVuZFwiO1xuICAgIGhvbWVEaXYuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcbiAgICBob21lRGl2LnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiO1xuICAgIGhvbWVEaXYuc3R5bGUubWluSGVpZ2h0ID0gXCIxMDB2aFwiO1xuICAgIGhvbWVEaXYuc3R5bGUuYmFja2dyb3VuZEF0dGFjaG1lbnQgPSBcImZpeGVkXCI7XG4gICAgaG9tZURpdi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbiAgICBob21lRGl2LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG5cbiAgICBuYW1lRGl2LnN0eWxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgICBuYW1lRGl2LnN0eWxlLmZvbnRTaXplID0gXCJtYXgoMnJlbSwgMTF2aClcIjtcbiAgICBuYW1lRGl2LnN0eWxlLnRleHRTaGFkb3cgPSBcIjBweCAwcHggMXZoIHJnYigwLDAsMClcIjtcbiAgICBuYW1lRGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiMTIwcHhcIjtcbiAgICBuYW1lRGl2LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMjB2aFwiO1xuICAgIGRlc2NyaXBEaXYuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgZGVzY3JpcERpdi5zdHlsZS5mb250RmFtaWx5ID0gXCJIZWx2ZXRpY2FcIjtcbiAgICBkZXNjcmlwRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLDAsMCwwLjI1KVwiXG4gICAgZGVzY3JpcERpdi5zdHlsZS50ZXh0U2hhZG93ID0gXCIwcHggMHB4IDVweCByZ2IoMCwwLDApXCI7XG4gICAgZGVzY3JpcERpdi5zdHlsZS5wYWRkaW5nID0gXCIycmVtIDIwdndcIjtcbiAgICBkZXNjcmlwRGl2LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiOTBweFwiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaG9tZURpdik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWlsZEhvbWU7IiwiY29uc3QgYnVpbGRNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmx1ZVwiO1xuICAgIG1lbnVEaXYuc3R5bGUubWluSGVpZ2h0ID0gXCIxMDB2aFwiO1xuXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVRpdGxlLmlubmVySFRNTCA9IFwiTWVudVwiO1xuICAgIG1lbnVUaXRsZS5zdHlsZS5mb250U2l6ZSA9IFwiMnJlbVwiO1xuXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51RGl2KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkTWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgYnVpbGRIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgYnVpbGRDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgYnVpbGRNZW51IGZyb20gJy4vbWVudS5qcyc7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5kb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XG5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiO1xuXG5jb250ZW50RGl2LnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XG5jb250ZW50RGl2LnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiO1xuY29udGVudERpdi5zdHlsZS5taW5IZWlnaHQgPSBcIjEwMHZoXCI7XG5cbmNyZWF0ZUhlYWRlcigpO1xuYnVpbGRIb21lKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcbiAgICBoZWFkZXIuc3R5bGUuaGVpZ2h0ID0gXCI5MHB4XCI7XG4gICAgaGVhZGVyLnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XG4gICAgaGVhZGVyLnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiO1xuICAgIGhlYWRlci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwwLDAsMC4yNSlcIjtcbiAgICBoZWFkZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGhlYWRlci5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICBoZWFkZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuICAgIGhlYWRlci5zdHlsZS5nYXAgPSBcIjEydndcIjtcbiAgICBoZWFkZXIuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgaGVhZGVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGhlYWRlci5pbm5lckhUTUwgPSBcIjxkaXYgaWQ9J2hvbWVCJz5Ib21lPC9kaXY+PGRpdiBpZD0nbWVudUInPk1lbnU8L2Rpdj48ZGl2IGlkPSdjb250YWN0Qic+Q29udGFjdDwvZGl2PlwiO1xuICAgIGhlYWRlci5zdHlsZS5mb250RmFtaWx5ID0gXCJIZWx2ZXRpY2FcIjtcbiAgICBoZWFkZXIuc3R5bGUuZm9udFNpemUgPSBcIjEuNHJlbVwiO1xuXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoaGVhZGVyLCBjb250ZW50RGl2KTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZUInKTtcbiAgICBob21lQnV0dG9uLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICBidWlsZEhvbWUoKTtcbiAgICB9KTtcblxuICAgIGhvbWVCdXR0b24uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gXCIwLjJzXCI7XG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiBob21lQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMS4zKVwiKTtcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiBob21lQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJyk7XG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVCJyk7XG4gICAgbWVudUJ1dHRvbi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgYnVpbGRNZW51KCk7XG4gICAgfSk7XG5cbiAgICBtZW51QnV0dG9uLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IFwiMC4yc1wiO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gbWVudUJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEuMylcIik7XG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gbWVudUJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZScpO1xuXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0QicpO1xuICAgIGNvbnRhY3RCdXR0b24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIGJ1aWxkQ29udGFjdCgpO1xuICAgIH0pO1xuXG4gICAgY29udGFjdEJ1dHRvbi5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBcIjAuMnNcIjtcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IGNvbnRhY3RCdXR0b24uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxLjMpXCIpO1xuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IGNvbnRhY3RCdXR0b24uc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnKTtcblxufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKXtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9