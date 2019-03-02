/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"client.bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./client/src/index.js","vendors.bundle"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/App.js":
/*!**************************************!*\
  !*** ./client/src/components/App.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BerryList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BerryList.jsx */ "./client/src/components/BerryList.jsx");



function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, "Jolly Pokedex"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BerryList_jsx__WEBPACK_IMPORTED_MODULE_1__["BerryListView"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./client/src/components/BerryList.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/BerryList.jsx ***!
  \*********************************************/
/*! exports provided: BerryList, BerryListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BerryList", function() { return BerryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BerryListView", function() { return BerryListView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_berries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/berries */ "./client/src/data/berries.js");


function BerryList(_ref) {
  var berries = _ref.berries;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, berries.map(function (berry, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: berry.url
    }, berry.name));
  }));
}
function BerryListView(props) {
  var berries = _data_berries__WEBPACK_IMPORTED_MODULE_1__["berries1"].results.concat(_data_berries__WEBPACK_IMPORTED_MODULE_1__["berries2"].results);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    style: {
      color: "royalblue",
      fontSize: "1.25em",
      fontFamily: "Arial, Helvetica, sans-serif"
    }
  }, "Berries"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BerryList, {
    berries: berries
  }));
}

/***/ }),

/***/ "./client/src/data/berries.js":
/*!************************************!*\
  !*** ./client/src/data/berries.js ***!
  \************************************/
/*! exports provided: berries1, berries2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "berries1", function() { return berries1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "berries2", function() { return berries2; });
var berries1 = {
  count: 64,
  next: 'https://pokeapi.co/api/v2/berry/?offset=20&limit=20',
  previous: null,
  results: [{
    name: 'cheri',
    url: 'https://pokeapi.co/api/v2/berry/1/'
  }, {
    name: 'chesto',
    url: 'https://pokeapi.co/api/v2/berry/2/'
  }, {
    name: 'pecha',
    url: 'https://pokeapi.co/api/v2/berry/3/'
  }, {
    name: 'rawst',
    url: 'https://pokeapi.co/api/v2/berry/4/'
  }, {
    name: 'aspear',
    url: 'https://pokeapi.co/api/v2/berry/5/'
  }, {
    name: 'leppa',
    url: 'https://pokeapi.co/api/v2/berry/6/'
  }, {
    name: 'oran',
    url: 'https://pokeapi.co/api/v2/berry/7/'
  }, {
    name: 'persim',
    url: 'https://pokeapi.co/api/v2/berry/8/'
  }, {
    name: 'lum',
    url: 'https://pokeapi.co/api/v2/berry/9/'
  }, {
    name: 'sitrus',
    url: 'https://pokeapi.co/api/v2/berry/10/'
  }, {
    name: 'figy',
    url: 'https://pokeapi.co/api/v2/berry/11/'
  }, {
    name: 'wiki',
    url: 'https://pokeapi.co/api/v2/berry/12/'
  }, {
    name: 'mago',
    url: 'https://pokeapi.co/api/v2/berry/13/'
  }, {
    name: 'aguav',
    url: 'https://pokeapi.co/api/v2/berry/14/'
  }, {
    name: 'iapapa',
    url: 'https://pokeapi.co/api/v2/berry/15/'
  }, {
    name: 'razz',
    url: 'https://pokeapi.co/api/v2/berry/16/'
  }, {
    name: 'bluk',
    url: 'https://pokeapi.co/api/v2/berry/17/'
  }, {
    name: 'nanab',
    url: 'https://pokeapi.co/api/v2/berry/18/'
  }, {
    name: 'wepear',
    url: 'https://pokeapi.co/api/v2/berry/19/'
  }, {
    name: 'pinap',
    url: 'https://pokeapi.co/api/v2/berry/20/'
  }]
};
var berries2 = {
  count: 64,
  next: 'https://pokeapi.co/api/v2/berry/?offset=40&limit=20',
  previous: 'https://pokeapi.co/api/v2/berry/?offset=0&limit=20',
  results: [{
    name: 'pomeg',
    url: 'https://pokeapi.co/api/v2/berry/21/'
  }, {
    name: 'kelpsy',
    url: 'https://pokeapi.co/api/v2/berry/22/'
  }, {
    name: 'qualot',
    url: 'https://pokeapi.co/api/v2/berry/23/'
  }, {
    name: 'hondew',
    url: 'https://pokeapi.co/api/v2/berry/24/'
  }, {
    name: 'grepa',
    url: 'https://pokeapi.co/api/v2/berry/25/'
  }, {
    name: 'tamato',
    url: 'https://pokeapi.co/api/v2/berry/26/'
  }, {
    name: 'cornn',
    url: 'https://pokeapi.co/api/v2/berry/27/'
  }, {
    name: 'magost',
    url: 'https://pokeapi.co/api/v2/berry/28/'
  }, {
    name: 'rabuta',
    url: 'https://pokeapi.co/api/v2/berry/29/'
  }, {
    name: 'nomel',
    url: 'https://pokeapi.co/api/v2/berry/30/'
  }, {
    name: 'spelon',
    url: 'https://pokeapi.co/api/v2/berry/31/'
  }, {
    name: 'pamtre',
    url: 'https://pokeapi.co/api/v2/berry/32/'
  }, {
    name: 'watmel',
    url: 'https://pokeapi.co/api/v2/berry/33/'
  }, {
    name: 'durin',
    url: 'https://pokeapi.co/api/v2/berry/34/'
  }, {
    name: 'belue',
    url: 'https://pokeapi.co/api/v2/berry/35/'
  }, {
    name: 'occa',
    url: 'https://pokeapi.co/api/v2/berry/36/'
  }, {
    name: 'passho',
    url: 'https://pokeapi.co/api/v2/berry/37/'
  }, {
    name: 'wacan',
    url: 'https://pokeapi.co/api/v2/berry/38/'
  }, {
    name: 'rindo',
    url: 'https://pokeapi.co/api/v2/berry/39/'
  }, {
    name: 'yache',
    url: 'https://pokeapi.co/api/v2/berry/40/'
  }]
};

/***/ }),

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./client/src/components/App.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.getElementById('jolly-pokedex'));

/***/ })

/******/ });
//# sourceMappingURL=client.bundle.js.map