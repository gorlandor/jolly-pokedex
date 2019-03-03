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
/******/ 	deferredModules.push(["./client/src/index.jsx","vendors.bundle"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BerryList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BerryList.jsx */ "./client/src/components/BerryList.jsx");
/* harmony import */ var _PokemonList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PokemonList.jsx */ "./client/src/components/PokemonList.jsx");
/* harmony import */ var _Tabs_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tabs.jsx */ "./client/src/components/Tabs.jsx");





function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, "Jolly Pokedex"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs_jsx__WEBPACK_IMPORTED_MODULE_3__["Tabs"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BerryList_jsx__WEBPACK_IMPORTED_MODULE_1__["BerryListView"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PokemonList_jsx__WEBPACK_IMPORTED_MODULE_2__["PokemonListView"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./client/src/components/BerryList.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/BerryList.jsx ***!
  \*********************************************/
/*! exports provided: BerryLink, BerryList, BerryListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BerryLink", function() { return BerryLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BerryList", function() { return BerryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BerryListView", function() { return BerryListView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_berries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/berries */ "./client/src/data/berries.js");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/constants */ "./client/src/data/constants.js");



function BerryLink(_ref) {
  var berryName = _ref.berryName,
      berryLink = _ref.berryLink,
      imageSource = _ref.imageSource,
      imageAltText = _ref.imageAltText;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: berryLink,
    style: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '64px',
      textTransform: 'capitalize'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imageSource,
    alt: imageAltText,
    style: {
      height: '64px'
    }
  }), berryName);
}
function BerryList(_ref2) {
  var berries = _ref2.berries;

  var berrySprite = function berrySprite(id) {
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/".concat(id, ".png");
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, berries.map(function (berry, i) {
    var berryName = berry.name.concat(' berry');
    var id = "items/".concat(berry.name, "-berry");
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      style: {
        borderBottom: "1px solid ".concat(_data_constants__WEBPACK_IMPORTED_MODULE_2__["secondaryColor"])
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BerryLink, {
      berryLink: berry.url,
      berryName: berryName,
      imageSource: berrySprite(id),
      imageAltText: berryName.concat(' image')
    }));
  }));
}
function BerryListView(props) {
  var berries = _data_berries__WEBPACK_IMPORTED_MODULE_1__["berries1"].results.concat(_data_berries__WEBPACK_IMPORTED_MODULE_1__["berries2"].results);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: 'berries'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    style: {
      color: _data_constants__WEBPACK_IMPORTED_MODULE_2__["primaryColor"],
      fontSize: '1.375em',
      fontFamily: 'Arial, Helvetica, sans-serif',
      borderLeft: "5px solid ".concat(_data_constants__WEBPACK_IMPORTED_MODULE_2__["primaryColor"]),
      paddingLeft: '1em',
      margin: '0 0 0 8px',
      height: '2em',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  }, "Berries"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BerryList, {
    berries: berries
  })));
}

/***/ }),

/***/ "./client/src/components/PokemonList.jsx":
/*!***********************************************!*\
  !*** ./client/src/components/PokemonList.jsx ***!
  \***********************************************/
/*! exports provided: PokemonLink, PokemonList, PokemonListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonLink", function() { return PokemonLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonList", function() { return PokemonList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListView", function() { return PokemonListView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/constants */ "./client/src/data/constants.js");
/* harmony import */ var _data_pokemon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/pokemon */ "./client/src/data/pokemon.js");



function PokemonLink(_ref) {
  var pokemonName = _ref.pokemonName,
      pokemonLink = _ref.pokemonLink,
      imageSource = _ref.imageSource,
      imageAltText = _ref.imageAltText;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: pokemonLink,
    style: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '64px',
      textTransform: 'capitalize'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imageSource,
    alt: imageAltText,
    style: {
      height: '64px'
    }
  }), pokemonName);
}
function PokemonList(_ref2) {
  var pokemonList = _ref2.pokemon;

  var pokemonSprite = function pokemonSprite(id) {
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/".concat(id, ".png");
  };

  var pokemonIdRegex = new RegExp(/(pokemon\/[0-9]+)/);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, pokemonList.map(function (pokemon, i) {
    var id = pokemonIdRegex.exec(pokemon.url)[0];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      style: {
        borderBottom: "1px solid ".concat(_data_constants__WEBPACK_IMPORTED_MODULE_1__["secondaryColor"])
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PokemonLink, {
      pokemonLink: pokemon.url,
      pokemonName: pokemon.name,
      imageAltText: pokemon.name.concat(' sprite'),
      imageSource: pokemonSprite(id)
    }));
  }));
}
function PokemonListView(props) {
  var pokemonList = _data_pokemon__WEBPACK_IMPORTED_MODULE_2__["pokemon1"].results.concat(_data_pokemon__WEBPACK_IMPORTED_MODULE_2__["pokemon2"].results);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: 'pokemon'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    style: {
      color: _data_constants__WEBPACK_IMPORTED_MODULE_1__["primaryColor"],
      fontSize: '1.375em',
      fontFamily: 'Arial, Helvetica, sans-serif',
      borderLeft: "5px solid ".concat(_data_constants__WEBPACK_IMPORTED_MODULE_1__["primaryColor"]),
      paddingLeft: '1em',
      margin: '0 0 0 8px',
      height: '2em',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  }, "Pokemon")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PokemonList, {
    pokemon: pokemonList
  }));
}

/***/ }),

/***/ "./client/src/components/Tabs.jsx":
/*!****************************************!*\
  !*** ./client/src/components/Tabs.jsx ***!
  \****************************************/
/*! exports provided: Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Tabs() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#berries"
  }, "Berries")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#pokemon"
  }, "Pokemon"))));
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

/***/ "./client/src/data/constants.js":
/*!**************************************!*\
  !*** ./client/src/data/constants.js ***!
  \**************************************/
/*! exports provided: primaryColor, secondaryColor, lightColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryColor", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryColor", function() { return secondaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightColor", function() { return lightColor; });
var primaryColor = '#0B5563';
var secondaryColor = '#4DA1A9';
var lightColor = '#f8fffb';

/***/ }),

/***/ "./client/src/data/pokemon.js":
/*!************************************!*\
  !*** ./client/src/data/pokemon.js ***!
  \************************************/
/*! exports provided: pokemon1, pokemon2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pokemon1", function() { return pokemon1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pokemon2", function() { return pokemon2; });
var pokemon1 = {
  count: 964,
  next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
  previous: null,
  results: [{
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/'
  }, {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/'
  }, {
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/'
  }, {
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/'
  }, {
    name: 'charmeleon',
    url: 'https://pokeapi.co/api/v2/pokemon/5/'
  }, {
    name: 'charizard',
    url: 'https://pokeapi.co/api/v2/pokemon/6/'
  }, {
    name: 'squirtle',
    url: 'https://pokeapi.co/api/v2/pokemon/7/'
  }, {
    name: 'wartortle',
    url: 'https://pokeapi.co/api/v2/pokemon/8/'
  }, {
    name: 'blastoise',
    url: 'https://pokeapi.co/api/v2/pokemon/9/'
  }, {
    name: 'caterpie',
    url: 'https://pokeapi.co/api/v2/pokemon/10/'
  }, {
    name: 'metapod',
    url: 'https://pokeapi.co/api/v2/pokemon/11/'
  }, {
    name: 'butterfree',
    url: 'https://pokeapi.co/api/v2/pokemon/12/'
  }, {
    name: 'weedle',
    url: 'https://pokeapi.co/api/v2/pokemon/13/'
  }, {
    name: 'kakuna',
    url: 'https://pokeapi.co/api/v2/pokemon/14/'
  }, {
    name: 'beedrill',
    url: 'https://pokeapi.co/api/v2/pokemon/15/'
  }, {
    name: 'pidgey',
    url: 'https://pokeapi.co/api/v2/pokemon/16/'
  }, {
    name: 'pidgeotto',
    url: 'https://pokeapi.co/api/v2/pokemon/17/'
  }, {
    name: 'pidgeot',
    url: 'https://pokeapi.co/api/v2/pokemon/18/'
  }, {
    name: 'rattata',
    url: 'https://pokeapi.co/api/v2/pokemon/19/'
  }, {
    name: 'raticate',
    url: 'https://pokeapi.co/api/v2/pokemon/20/'
  }]
};
var pokemon2 = {
  count: 964,
  next: 'https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20',
  previous: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20',
  results: [{
    name: 'spearow',
    url: 'https://pokeapi.co/api/v2/pokemon/21/'
  }, {
    name: 'fearow',
    url: 'https://pokeapi.co/api/v2/pokemon/22/'
  }, {
    name: 'ekans',
    url: 'https://pokeapi.co/api/v2/pokemon/23/'
  }, {
    name: 'arbok',
    url: 'https://pokeapi.co/api/v2/pokemon/24/'
  }, {
    name: 'pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon/25/'
  }, {
    name: 'raichu',
    url: 'https://pokeapi.co/api/v2/pokemon/26/'
  }, {
    name: 'sandshrew',
    url: 'https://pokeapi.co/api/v2/pokemon/27/'
  }, {
    name: 'sandslash',
    url: 'https://pokeapi.co/api/v2/pokemon/28/'
  }, {
    name: 'nidoran-f',
    url: 'https://pokeapi.co/api/v2/pokemon/29/'
  }, {
    name: 'nidorina',
    url: 'https://pokeapi.co/api/v2/pokemon/30/'
  }, {
    name: 'nidoqueen',
    url: 'https://pokeapi.co/api/v2/pokemon/31/'
  }, {
    name: 'nidoran-m',
    url: 'https://pokeapi.co/api/v2/pokemon/32/'
  }, {
    name: 'nidorino',
    url: 'https://pokeapi.co/api/v2/pokemon/33/'
  }, {
    name: 'nidoking',
    url: 'https://pokeapi.co/api/v2/pokemon/34/'
  }, {
    name: 'clefairy',
    url: 'https://pokeapi.co/api/v2/pokemon/35/'
  }, {
    name: 'clefable',
    url: 'https://pokeapi.co/api/v2/pokemon/36/'
  }, {
    name: 'vulpix',
    url: 'https://pokeapi.co/api/v2/pokemon/37/'
  }, {
    name: 'ninetales',
    url: 'https://pokeapi.co/api/v2/pokemon/38/'
  }, {
    name: 'jigglypuff',
    url: 'https://pokeapi.co/api/v2/pokemon/39/'
  }, {
    name: 'wigglytuff',
    url: 'https://pokeapi.co/api/v2/pokemon/40/'
  }]
};

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App.jsx */ "./client/src/components/App.jsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.getElementById('jolly-pokedex'));

/***/ })

/******/ });
//# sourceMappingURL=client.bundle.js.map