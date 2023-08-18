/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(location){\r\n    try{\r\n        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=cc2785c69424465cbda213523231808&q=${location}`);\r\n        let weather =  await response.json();\r\n        // console.table(weather)\r\n        console.log(weather);\r\n        return weather;\r\n        \r\n    }catch(error){\r\n        console.log('Error in fetching data');\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack://weatherapp/./src/getWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather.js */ \"./src/getWeather.js\");\n\r\n\r\nconst searchForm = document.querySelector('#searchForm');\r\nconst searchInput = document.querySelector('#searchInput');\r\nconst searchResult = document.querySelector('#searchResult');\r\nconst city = document.querySelector('#cityName');\r\nconst temperature = document.querySelector('#temperature');\r\nconst humidity = document.querySelector('#humidity');\r\nconst wind = document.querySelector('#wind');\r\n\r\nsearchForm.addEventListener('submit', async (event) => {\r\n    event.preventDefault();\r\n    if(!searchInput.value){\r\n        return;\r\n    }\r\n\r\n    try{\r\n    let weather = await (0,_getWeather_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(searchInput.value);\r\n    searchResult.style.display = 'block';\r\n    city.textContent = \"Location: \" + weather.location.name;\r\n    temperature.textContent = \"Temperature: \" + weather.current.temp_c + \"\\u00B0C\";\r\n    humidity.textContent = `Humidity: ${weather.current.humidity}%`;\r\n    wind.textContent = `Wind: ${weather.current.wind_kph} km/h`;\r\n\r\n    }catch(error){\r\n        alert(\"No such location found\");\r\n        searchResult.style.display = 'none';\r\n        searchInput.value = '';\r\n        return;\r\n    }\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;