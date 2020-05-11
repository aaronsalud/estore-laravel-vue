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

eval("(function () {\n  var client = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');\n  var index = client.initIndex('products');\n\n  function newHitsSource(index, params) {\n    return function doSearch(query, cb) {\n      index.search(query, params).then(function (res) {\n        cb(res.hits, res);\n      })[\"catch\"](function (err) {\n        console.error(err);\n        cb([]);\n      });\n    };\n  }\n\n  autocomplete('#search-input', {\n    hint: false\n  }, [{\n    source: newHitsSource(index, {\n      hitsPerPage: 5\n    }),\n    displayKey: 'name',\n    templates: {\n      suggestion: function suggestion(_suggestion) {\n        var markup = \"\\n                        <div class=\\\"algolia-result\\\">\\n                            <img src=\\\"\".concat(window.location.origin, \"/\").concat(_suggestion.image, \"\\\" alt=\\\"img\\\" class=\\\"algolia-thumb\\\"/>\\n                            <span>\").concat(_suggestion._highlightResult.name.value, \"</span>\\n                            <span>$\").concat((_suggestion.price / 100).toFixed(2), \"</span>\\n                        </div>\\n                        <div class=\\\"algolia-details\\\">\\n                            <span>\").concat(_suggestion._highlightResult.details.value, \"</span>\\n                        </div>\\n                    \");\n        return markup;\n      },\n      empty: function empty(result) {\n        return \"<span>Sorry, we id not find any results for \".concat(result.query, \"</span>\");\n      }\n    }\n  }]).on('autocomplete:selected', function (event, suggestion, dataset, context) {\n    window.location.href = window.location.origin + '/shop/' + suggestion.slug;\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWxnb2xpYS1jbGllbnQuanM/YTRlZCJdLCJuYW1lcyI6WyJjbGllbnQiLCJhbGdvbGlhc2VhcmNoIiwiaW5kZXgiLCJpbml0SW5kZXgiLCJuZXdIaXRzU291cmNlIiwicGFyYW1zIiwiZG9TZWFyY2giLCJxdWVyeSIsImNiIiwic2VhcmNoIiwidGhlbiIsInJlcyIsImhpdHMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJhdXRvY29tcGxldGUiLCJoaW50Iiwic291cmNlIiwiaGl0c1BlclBhZ2UiLCJkaXNwbGF5S2V5IiwidGVtcGxhdGVzIiwic3VnZ2VzdGlvbiIsIm1hcmt1cCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiaW1hZ2UiLCJfaGlnaGxpZ2h0UmVzdWx0IiwibmFtZSIsInZhbHVlIiwicHJpY2UiLCJ0b0ZpeGVkIiwiZGV0YWlscyIsImVtcHR5IiwicmVzdWx0Iiwib24iLCJldmVudCIsImRhdGFzZXQiLCJjb250ZXh0IiwiaHJlZiIsInNsdWciXSwibWFwcGluZ3MiOiJBQUFBLENBQUMsWUFBWTtBQUNULE1BQUlBLE1BQU0sR0FBR0MsYUFBYSxDQUFDLFlBQUQsRUFBZSxrQ0FBZixDQUExQjtBQUNBLE1BQUlDLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxTQUFQLENBQWlCLFVBQWpCLENBQVo7O0FBRUEsV0FBU0MsYUFBVCxDQUF1QkYsS0FBdkIsRUFBOEJHLE1BQTlCLEVBQXNDO0FBQ2xDLFdBQU8sU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUJDLEVBQXpCLEVBQTZCO0FBQ2hDTixXQUFLLENBQ0FPLE1BREwsQ0FDWUYsS0FEWixFQUNtQkYsTUFEbkIsRUFFS0ssSUFGTCxDQUVVLFVBQVVDLEdBQVYsRUFBZTtBQUNqQkgsVUFBRSxDQUFDRyxHQUFHLENBQUNDLElBQUwsRUFBV0QsR0FBWCxDQUFGO0FBQ0gsT0FKTCxXQUtXLFVBQVVFLEdBQVYsRUFBZTtBQUNsQkMsZUFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDQUwsVUFBRSxDQUFDLEVBQUQsQ0FBRjtBQUNILE9BUkw7QUFTSCxLQVZEO0FBV0g7O0FBRURRLGNBQVksQ0FBQyxlQUFELEVBQWtCO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQWxCLEVBQW1DLENBQzNDO0FBQ0lDLFVBQU0sRUFBRWQsYUFBYSxDQUFDRixLQUFELEVBQVE7QUFBRWlCLGlCQUFXLEVBQUU7QUFBZixLQUFSLENBRHpCO0FBRUlDLGNBQVUsRUFBRSxNQUZoQjtBQUdJQyxhQUFTLEVBQUU7QUFDUEMsZ0JBQVUsRUFBRSxvQkFBVUEsV0FBVixFQUFzQjtBQUM5QixZQUFNQyxNQUFNLDhHQUVRQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BRnhCLGNBRWtDSixXQUFVLENBQUNLLEtBRjdDLHlGQUdJTCxXQUFVLENBQUNNLGdCQUFYLENBQTRCQyxJQUE1QixDQUFpQ0MsS0FIckMseURBSUssQ0FBQ1IsV0FBVSxDQUFDUyxLQUFYLEdBQW1CLEdBQXBCLEVBQXlCQyxPQUF6QixDQUFpQyxDQUFqQyxDQUpMLGlKQU9JVixXQUFVLENBQUNNLGdCQUFYLENBQTRCSyxPQUE1QixDQUFvQ0gsS0FQeEMsa0VBQVo7QUFXQSxlQUFPUCxNQUFQO0FBQ0gsT0FkTTtBQWVQVyxXQUFLLEVBQUUsZUFBU0MsTUFBVCxFQUFnQjtBQUNuQixxRUFBc0RBLE1BQU0sQ0FBQzVCLEtBQTdEO0FBQ0g7QUFqQk07QUFIZixHQUQyQyxDQUFuQyxDQUFaLENBd0JHNkIsRUF4QkgsQ0F3Qk0sdUJBeEJOLEVBd0IrQixVQUFVQyxLQUFWLEVBQWlCZixVQUFqQixFQUE2QmdCLE9BQTdCLEVBQXNDQyxPQUF0QyxFQUErQztBQUMxRWYsVUFBTSxDQUFDQyxRQUFQLENBQWdCZSxJQUFoQixHQUF1QmhCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsR0FBeUIsUUFBekIsR0FBb0NKLFVBQVUsQ0FBQ21CLElBQXRFO0FBQ0gsR0ExQkQ7QUEyQkgsQ0E3Q0QiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYWxnb2xpYS1jbGllbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKCdEMVVBV0VURFlHJywgJzU4YzA0NmI1NmUxZjc3ZGZhODJjNGZlMmIxMWY4MTYwJyk7XG4gICAgdmFyIGluZGV4ID0gY2xpZW50LmluaXRJbmRleCgncHJvZHVjdHMnKTtcblxuICAgIGZ1bmN0aW9uIG5ld0hpdHNTb3VyY2UoaW5kZXgsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZG9TZWFyY2gocXVlcnksIGNiKSB7XG4gICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgIC5zZWFyY2gocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKHJlcy5oaXRzLCByZXMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICBjYihbXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXV0b2NvbXBsZXRlKCcjc2VhcmNoLWlucHV0JywgeyBoaW50OiBmYWxzZSB9LCBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNvdXJjZTogbmV3SGl0c1NvdXJjZShpbmRleCwgeyBoaXRzUGVyUGFnZTogNSB9KSxcbiAgICAgICAgICAgIGRpc3BsYXlLZXk6ICduYW1lJyxcbiAgICAgICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb246IGZ1bmN0aW9uIChzdWdnZXN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmt1cCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGdvbGlhLXJlc3VsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS8ke3N1Z2dlc3Rpb24uaW1hZ2V9XCIgYWx0PVwiaW1nXCIgY2xhc3M9XCJhbGdvbGlhLXRodW1iXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7c3VnZ2VzdGlvbi5faGlnaGxpZ2h0UmVzdWx0Lm5hbWUudmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiQkeyhzdWdnZXN0aW9uLnByaWNlIC8gMTAwKS50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZ29saWEtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7c3VnZ2VzdGlvbi5faGlnaGxpZ2h0UmVzdWx0LmRldGFpbHMudmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGA7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcmt1cDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVtcHR5OiBmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxzcGFuPlNvcnJ5LCB3ZSBpZCBub3QgZmluZCBhbnkgcmVzdWx0cyBmb3IgJHtyZXN1bHQucXVlcnl9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdKS5vbignYXV0b2NvbXBsZXRlOnNlbGVjdGVkJywgZnVuY3Rpb24gKGV2ZW50LCBzdWdnZXN0aW9uLCBkYXRhc2V0LCBjb250ZXh0KSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvc2hvcC8nICsgc3VnZ2VzdGlvbi5zbHVnO1xuICAgIH0pO1xufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/algolia-client.js\n");

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