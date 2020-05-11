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

eval("(function () {\n  var client = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');\n  var index = client.initIndex('products');\n\n  function newHitsSource(index, params) {\n    return function doSearch(query, cb) {\n      index.search(query, params).then(function (res) {\n        cb(res.hits, res);\n      })[\"catch\"](function (err) {\n        console.error(err);\n        cb([]);\n      });\n    };\n  }\n\n  autocomplete('#search-input', {\n    hint: false\n  }, [{\n    source: newHitsSource(index, {\n      hitsPerPage: 5\n    }),\n    displayKey: 'name',\n    templates: {\n      suggestion: function suggestion(_suggestion) {\n        return \"\\n                        <span>\".concat(_suggestion._highlightResult.name.value, \"</span>\\n                        <span>\").concat(_suggestion.price, \"</span> \\n                    \");\n      },\n      empty: function empty(result) {\n        return \"<span>Sorry, we id not find any results for \".concat(result.query, \"</span>\");\n      }\n    }\n  }]).on('autocomplete:selected', function (event, suggestion, dataset, context) {\n    window.location.href = window.location.origin + '/shop/' + suggestion.slug;\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWxnb2xpYS1jbGllbnQuanM/YTRlZCJdLCJuYW1lcyI6WyJjbGllbnQiLCJhbGdvbGlhc2VhcmNoIiwiaW5kZXgiLCJpbml0SW5kZXgiLCJuZXdIaXRzU291cmNlIiwicGFyYW1zIiwiZG9TZWFyY2giLCJxdWVyeSIsImNiIiwic2VhcmNoIiwidGhlbiIsInJlcyIsImhpdHMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJhdXRvY29tcGxldGUiLCJoaW50Iiwic291cmNlIiwiaGl0c1BlclBhZ2UiLCJkaXNwbGF5S2V5IiwidGVtcGxhdGVzIiwic3VnZ2VzdGlvbiIsIl9oaWdobGlnaHRSZXN1bHQiLCJuYW1lIiwidmFsdWUiLCJwcmljZSIsImVtcHR5IiwicmVzdWx0Iiwib24iLCJldmVudCIsImRhdGFzZXQiLCJjb250ZXh0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwib3JpZ2luIiwic2x1ZyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQyxZQUFZO0FBQ1QsTUFBSUEsTUFBTSxHQUFHQyxhQUFhLENBQUMsWUFBRCxFQUFlLGtDQUFmLENBQTFCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHRixNQUFNLENBQUNHLFNBQVAsQ0FBaUIsVUFBakIsQ0FBWjs7QUFFQSxXQUFTQyxhQUFULENBQXVCRixLQUF2QixFQUE4QkcsTUFBOUIsRUFBc0M7QUFDbEMsV0FBTyxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QkMsRUFBekIsRUFBNkI7QUFDaENOLFdBQUssQ0FDQU8sTUFETCxDQUNZRixLQURaLEVBQ21CRixNQURuQixFQUVLSyxJQUZMLENBRVUsVUFBVUMsR0FBVixFQUFlO0FBQ2pCSCxVQUFFLENBQUNHLEdBQUcsQ0FBQ0MsSUFBTCxFQUFXRCxHQUFYLENBQUY7QUFDSCxPQUpMLFdBS1csVUFBVUUsR0FBVixFQUFlO0FBQ2xCQyxlQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNBTCxVQUFFLENBQUMsRUFBRCxDQUFGO0FBQ0gsT0FSTDtBQVNILEtBVkQ7QUFXSDs7QUFFRFEsY0FBWSxDQUFDLGVBQUQsRUFBa0I7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBbEIsRUFBbUMsQ0FDM0M7QUFDSUMsVUFBTSxFQUFFZCxhQUFhLENBQUNGLEtBQUQsRUFBUTtBQUFFaUIsaUJBQVcsRUFBRTtBQUFmLEtBQVIsQ0FEekI7QUFFSUMsY0FBVSxFQUFFLE1BRmhCO0FBR0lDLGFBQVMsRUFBRTtBQUNQQyxnQkFBVSxFQUFFLG9CQUFVQSxXQUFWLEVBQXNCO0FBQzlCLHlEQUNZQSxXQUFVLENBQUNDLGdCQUFYLENBQTRCQyxJQUE1QixDQUFpQ0MsS0FEN0Msb0RBRVlILFdBQVUsQ0FBQ0ksS0FGdkI7QUFJSCxPQU5NO0FBT1BDLFdBQUssRUFBRSxlQUFTQyxNQUFULEVBQWdCO0FBQ25CLHFFQUFzREEsTUFBTSxDQUFDckIsS0FBN0Q7QUFDSDtBQVRNO0FBSGYsR0FEMkMsQ0FBbkMsQ0FBWixDQWdCR3NCLEVBaEJILENBZ0JNLHVCQWhCTixFQWdCK0IsVUFBVUMsS0FBVixFQUFpQlIsVUFBakIsRUFBNkJTLE9BQTdCLEVBQXNDQyxPQUF0QyxFQUErQztBQUMxRUMsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QkYsTUFBTSxDQUFDQyxRQUFQLENBQWdCRSxNQUFoQixHQUF5QixRQUF6QixHQUFvQ2QsVUFBVSxDQUFDZSxJQUF0RTtBQUNILEdBbEJEO0FBbUJILENBckNEIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2FsZ29saWEtY2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2xpZW50ID0gYWxnb2xpYXNlYXJjaCgnRDFVQVdFVERZRycsICc1OGMwNDZiNTZlMWY3N2RmYTgyYzRmZTJiMTFmODE2MCcpO1xuICAgIHZhciBpbmRleCA9IGNsaWVudC5pbml0SW5kZXgoJ3Byb2R1Y3RzJyk7XG5cbiAgICBmdW5jdGlvbiBuZXdIaXRzU291cmNlKGluZGV4LCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGRvU2VhcmNoKHF1ZXJ5LCBjYikge1xuICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAuc2VhcmNoKHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBjYihyZXMuaGl0cywgcmVzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY2IoW10pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGF1dG9jb21wbGV0ZSgnI3NlYXJjaC1pbnB1dCcsIHsgaGludDogZmFsc2UgfSwgW1xuICAgICAgICB7XG4gICAgICAgICAgICBzb3VyY2U6IG5ld0hpdHNTb3VyY2UoaW5kZXgsIHsgaGl0c1BlclBhZ2U6IDUgfSksXG4gICAgICAgICAgICBkaXNwbGF5S2V5OiAnbmFtZScsXG4gICAgICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9uOiBmdW5jdGlvbiAoc3VnZ2VzdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtzdWdnZXN0aW9uLl9oaWdobGlnaHRSZXN1bHQubmFtZS52YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke3N1Z2dlc3Rpb24ucHJpY2V9PC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVtcHR5OiBmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxzcGFuPlNvcnJ5LCB3ZSBpZCBub3QgZmluZCBhbnkgcmVzdWx0cyBmb3IgJHtyZXN1bHQucXVlcnl9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdKS5vbignYXV0b2NvbXBsZXRlOnNlbGVjdGVkJywgZnVuY3Rpb24gKGV2ZW50LCBzdWdnZXN0aW9uLCBkYXRhc2V0LCBjb250ZXh0KSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvc2hvcC8nICsgc3VnZ2VzdGlvbi5zbHVnO1xuICAgIH0pO1xufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/algolia-client.js\n");

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