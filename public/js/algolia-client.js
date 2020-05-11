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

eval("(function () {\n  var client = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');\n  var index = client.initIndex('products');\n\n  function newHitsSource(index, params) {\n    return function doSearch(query, cb) {\n      index.search(query, params).then(function (res) {\n        cb(res.hits, res);\n      })[\"catch\"](function (err) {\n        console.error(err);\n        cb([]);\n      });\n    };\n  }\n\n  autocomplete('#search-input', {\n    hint: false\n  }, [{\n    source: newHitsSource(index, {\n      hitsPerPage: 5\n    }),\n    displayKey: 'name',\n    templates: {\n      suggestion: function suggestion(_suggestion) {\n        return \"\\n                        <span>\".concat(_suggestion._highlightResult.name.value, \"</span>\\n                        <span>\").concat(_suggestion.price, \"</span> \\n                    \");\n      },\n      empty: function empty(result) {\n        return \"<span>Sorry, we id not find any results for \".concat(result.query, \"</span>\");\n      }\n    }\n  }]).on('autocomplete:selected', function (event, suggestion, dataset, context) {\n    console.log(event, suggestion, dataset, context);\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWxnb2xpYS1jbGllbnQuanM/YTRlZCJdLCJuYW1lcyI6WyJjbGllbnQiLCJhbGdvbGlhc2VhcmNoIiwiaW5kZXgiLCJpbml0SW5kZXgiLCJuZXdIaXRzU291cmNlIiwicGFyYW1zIiwiZG9TZWFyY2giLCJxdWVyeSIsImNiIiwic2VhcmNoIiwidGhlbiIsInJlcyIsImhpdHMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJhdXRvY29tcGxldGUiLCJoaW50Iiwic291cmNlIiwiaGl0c1BlclBhZ2UiLCJkaXNwbGF5S2V5IiwidGVtcGxhdGVzIiwic3VnZ2VzdGlvbiIsIl9oaWdobGlnaHRSZXN1bHQiLCJuYW1lIiwidmFsdWUiLCJwcmljZSIsImVtcHR5IiwicmVzdWx0Iiwib24iLCJldmVudCIsImRhdGFzZXQiLCJjb250ZXh0IiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFDLFlBQVk7QUFDVCxNQUFJQSxNQUFNLEdBQUdDLGFBQWEsQ0FBQyxZQUFELEVBQWUsa0NBQWYsQ0FBMUI7QUFDQSxNQUFJQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQixVQUFqQixDQUFaOztBQUVBLFdBQVNDLGFBQVQsQ0FBdUJGLEtBQXZCLEVBQThCRyxNQUE5QixFQUFzQztBQUNsQyxXQUFPLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxFQUF6QixFQUE2QjtBQUNoQ04sV0FBSyxDQUNBTyxNQURMLENBQ1lGLEtBRFosRUFDbUJGLE1BRG5CLEVBRUtLLElBRkwsQ0FFVSxVQUFVQyxHQUFWLEVBQWU7QUFDakJILFVBQUUsQ0FBQ0csR0FBRyxDQUFDQyxJQUFMLEVBQVdELEdBQVgsQ0FBRjtBQUNILE9BSkwsV0FLVyxVQUFVRSxHQUFWLEVBQWU7QUFDbEJDLGVBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQ0FMLFVBQUUsQ0FBQyxFQUFELENBQUY7QUFDSCxPQVJMO0FBU0gsS0FWRDtBQVdIOztBQUVEUSxjQUFZLENBQUMsZUFBRCxFQUFrQjtBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFsQixFQUFtQyxDQUMzQztBQUNJQyxVQUFNLEVBQUVkLGFBQWEsQ0FBQ0YsS0FBRCxFQUFRO0FBQUVpQixpQkFBVyxFQUFFO0FBQWYsS0FBUixDQUR6QjtBQUVJQyxjQUFVLEVBQUUsTUFGaEI7QUFHSUMsYUFBUyxFQUFFO0FBQ1BDLGdCQUFVLEVBQUUsb0JBQVVBLFdBQVYsRUFBc0I7QUFDOUIseURBQ1lBLFdBQVUsQ0FBQ0MsZ0JBQVgsQ0FBNEJDLElBQTVCLENBQWlDQyxLQUQ3QyxvREFFWUgsV0FBVSxDQUFDSSxLQUZ2QjtBQUlILE9BTk07QUFPUEMsV0FBSyxFQUFFLGVBQVNDLE1BQVQsRUFBZ0I7QUFDbkIscUVBQXNEQSxNQUFNLENBQUNyQixLQUE3RDtBQUNIO0FBVE07QUFIZixHQUQyQyxDQUFuQyxDQUFaLENBZ0JHc0IsRUFoQkgsQ0FnQk0sdUJBaEJOLEVBZ0IrQixVQUFVQyxLQUFWLEVBQWlCUixVQUFqQixFQUE2QlMsT0FBN0IsRUFBc0NDLE9BQXRDLEVBQStDO0FBQzFFbEIsV0FBTyxDQUFDbUIsR0FBUixDQUFZSCxLQUFaLEVBQW1CUixVQUFuQixFQUErQlMsT0FBL0IsRUFBd0NDLE9BQXhDO0FBQ0gsR0FsQkQ7QUFtQkgsQ0FyQ0QiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYWxnb2xpYS1jbGllbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKCdEMVVBV0VURFlHJywgJzU4YzA0NmI1NmUxZjc3ZGZhODJjNGZlMmIxMWY4MTYwJyk7XG4gICAgdmFyIGluZGV4ID0gY2xpZW50LmluaXRJbmRleCgncHJvZHVjdHMnKTtcblxuICAgIGZ1bmN0aW9uIG5ld0hpdHNTb3VyY2UoaW5kZXgsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZG9TZWFyY2gocXVlcnksIGNiKSB7XG4gICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgIC5zZWFyY2gocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKHJlcy5oaXRzLCByZXMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICBjYihbXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXV0b2NvbXBsZXRlKCcjc2VhcmNoLWlucHV0JywgeyBoaW50OiBmYWxzZSB9LCBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNvdXJjZTogbmV3SGl0c1NvdXJjZShpbmRleCwgeyBoaXRzUGVyUGFnZTogNSB9KSxcbiAgICAgICAgICAgIGRpc3BsYXlLZXk6ICduYW1lJyxcbiAgICAgICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb246IGZ1bmN0aW9uIChzdWdnZXN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke3N1Z2dlc3Rpb24uX2hpZ2hsaWdodFJlc3VsdC5uYW1lLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7c3VnZ2VzdGlvbi5wcmljZX08L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW1wdHk6IGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPHNwYW4+U29ycnksIHdlIGlkIG5vdCBmaW5kIGFueSByZXN1bHRzIGZvciAke3Jlc3VsdC5xdWVyeX08L3NwYW4+YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0pLm9uKCdhdXRvY29tcGxldGU6c2VsZWN0ZWQnLCBmdW5jdGlvbiAoZXZlbnQsIHN1Z2dlc3Rpb24sIGRhdGFzZXQsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQsIHN1Z2dlc3Rpb24sIGRhdGFzZXQsIGNvbnRleHQpO1xuICAgIH0pO1xufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/algolia-client.js\n");

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