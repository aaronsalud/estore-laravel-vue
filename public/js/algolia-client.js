/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/algolia-client.js":
/*!****************************************!*\
  !*** ./resources/js/algolia-client.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var client = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');\n  var index = client.initIndex('products');\n\n  function newHitsSource(index, params) {\n    return function doSearch(query, cb) {\n      index.search(query, params).then(function (res) {\n        cb(res.hits, res);\n      })[\"catch\"](function (err) {\n        console.error(err);\n        cb([]);\n      });\n    };\n  }\n\n  autocomplete('#search-input', {\n    hint: false\n  }, [{\n    source: newHitsSource(index, {\n      hitsPerPage: 5\n    }),\n    displayKey: 'name',\n    templates: {\n      suggestion: function suggestion(_suggestion) {\n        console.log(_suggestion); // return suggestion._highlightResult.my_attribute.value;\n\n        return _suggestion.name;\n      }\n    }\n  }]).on('autocomplete:selected', function (event, suggestion, dataset, context) {\n    console.log(event, suggestion, dataset, context);\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWxnb2xpYS1jbGllbnQuanM/YTRlZCJdLCJuYW1lcyI6WyJjbGllbnQiLCJhbGdvbGlhc2VhcmNoIiwiaW5kZXgiLCJpbml0SW5kZXgiLCJuZXdIaXRzU291cmNlIiwicGFyYW1zIiwiZG9TZWFyY2giLCJxdWVyeSIsImNiIiwic2VhcmNoIiwidGhlbiIsInJlcyIsImhpdHMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJhdXRvY29tcGxldGUiLCJoaW50Iiwic291cmNlIiwiaGl0c1BlclBhZ2UiLCJkaXNwbGF5S2V5IiwidGVtcGxhdGVzIiwic3VnZ2VzdGlvbiIsImxvZyIsIm5hbWUiLCJvbiIsImV2ZW50IiwiZGF0YXNldCIsImNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBLENBQUMsWUFBWTtBQUNULE1BQUlBLE1BQU0sR0FBR0MsYUFBYSxDQUFDLFlBQUQsRUFBZSxrQ0FBZixDQUExQjtBQUNBLE1BQUlDLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxTQUFQLENBQWlCLFVBQWpCLENBQVo7O0FBRUEsV0FBU0MsYUFBVCxDQUF1QkYsS0FBdkIsRUFBOEJHLE1BQTlCLEVBQXNDO0FBQ2xDLFdBQU8sU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUJDLEVBQXpCLEVBQTZCO0FBQ2hDTixXQUFLLENBQ0FPLE1BREwsQ0FDWUYsS0FEWixFQUNtQkYsTUFEbkIsRUFFS0ssSUFGTCxDQUVVLFVBQVVDLEdBQVYsRUFBZTtBQUNqQkgsVUFBRSxDQUFDRyxHQUFHLENBQUNDLElBQUwsRUFBV0QsR0FBWCxDQUFGO0FBQ0gsT0FKTCxXQUtXLFVBQVVFLEdBQVYsRUFBZTtBQUNsQkMsZUFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDQUwsVUFBRSxDQUFDLEVBQUQsQ0FBRjtBQUNILE9BUkw7QUFTSCxLQVZEO0FBV0g7O0FBRURRLGNBQVksQ0FBQyxlQUFELEVBQWtCO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQWxCLEVBQW1DLENBQzNDO0FBQ0lDLFVBQU0sRUFBRWQsYUFBYSxDQUFDRixLQUFELEVBQVE7QUFBRWlCLGlCQUFXLEVBQUU7QUFBZixLQUFSLENBRHpCO0FBRUlDLGNBQVUsRUFBRSxNQUZoQjtBQUdJQyxhQUFTLEVBQUU7QUFDUEMsZ0JBQVUsRUFBRSxvQkFBVUEsV0FBVixFQUFzQjtBQUM5QlIsZUFBTyxDQUFDUyxHQUFSLENBQVlELFdBQVosRUFEOEIsQ0FFOUI7O0FBQ0EsZUFBT0EsV0FBVSxDQUFDRSxJQUFsQjtBQUNIO0FBTE07QUFIZixHQUQyQyxDQUFuQyxDQUFaLENBWUdDLEVBWkgsQ0FZTSx1QkFaTixFQVkrQixVQUFVQyxLQUFWLEVBQWlCSixVQUFqQixFQUE2QkssT0FBN0IsRUFBc0NDLE9BQXRDLEVBQStDO0FBQzFFZCxXQUFPLENBQUNTLEdBQVIsQ0FBWUcsS0FBWixFQUFtQkosVUFBbkIsRUFBK0JLLE9BQS9CLEVBQXdDQyxPQUF4QztBQUNILEdBZEQ7QUFlSCxDQWpDRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9hbGdvbGlhLWNsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNsaWVudCA9IGFsZ29saWFzZWFyY2goJ0QxVUFXRVREWUcnLCAnNThjMDQ2YjU2ZTFmNzdkZmE4MmM0ZmUyYjExZjgxNjAnKTtcbiAgICB2YXIgaW5kZXggPSBjbGllbnQuaW5pdEluZGV4KCdwcm9kdWN0cycpO1xuXG4gICAgZnVuY3Rpb24gbmV3SGl0c1NvdXJjZShpbmRleCwgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkb1NlYXJjaChxdWVyeSwgY2IpIHtcbiAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgLnNlYXJjaChxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzLmhpdHMsIHJlcyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGNiKFtdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhdXRvY29tcGxldGUoJyNzZWFyY2gtaW5wdXQnLCB7IGhpbnQ6IGZhbHNlIH0sIFtcbiAgICAgICAge1xuICAgICAgICAgICAgc291cmNlOiBuZXdIaXRzU291cmNlKGluZGV4LCB7IGhpdHNQZXJQYWdlOiA1IH0pLFxuICAgICAgICAgICAgZGlzcGxheUtleTogJ25hbWUnLFxuICAgICAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbjogZnVuY3Rpb24gKHN1Z2dlc3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3VnZ2VzdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBzdWdnZXN0aW9uLl9oaWdobGlnaHRSZXN1bHQubXlfYXR0cmlidXRlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VnZ2VzdGlvbi5uYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0pLm9uKCdhdXRvY29tcGxldGU6c2VsZWN0ZWQnLCBmdW5jdGlvbiAoZXZlbnQsIHN1Z2dlc3Rpb24sIGRhdGFzZXQsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQsIHN1Z2dlc3Rpb24sIGRhdGFzZXQsIGNvbnRleHQpO1xuICAgIH0pO1xufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/algolia-client.js\n");

/***/ }),

/***/ 2:
/*!**********************************************!*\
  !*** multi ./resources/js/algolia-client.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/amsalud/Documents/GitHub/estore-laravel/resources/js/algolia-client.js */"./resources/js/algolia-client.js");


/***/ })

/******/ });