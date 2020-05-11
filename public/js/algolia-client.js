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

eval("(function () {\n  var client = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');\n  var index = client.initIndex('products');\n  var enterPressed = false;\n\n  function newHitsSource(index, params) {\n    return function doSearch(query, cb) {\n      index.search(query, params).then(function (res) {\n        cb(res.hits, res);\n      })[\"catch\"](function (err) {\n        console.error(err);\n        cb([]);\n      });\n    };\n  }\n\n  autocomplete('#search-input', {\n    hint: false\n  }, [{\n    source: newHitsSource(index, {\n      hitsPerPage: 5\n    }),\n    displayKey: 'name',\n    templates: {\n      suggestion: function suggestion(_suggestion) {\n        var markup = \"\\n                        <div class=\\\"algolia-result\\\">\\n                            <span>\".concat(_suggestion._highlightResult.name.value, \"</span>\\n                            <span>$\").concat((_suggestion.price / 100).toFixed(2), \"</span>\\n                        </div>\\n                        <div class=\\\"algolia-details\\\">\\n                            <span>\").concat(_suggestion._highlightResult.details.value, \"</span>\\n                        </div>\\n                    \");\n        return markup;\n      },\n      empty: function empty(result) {\n        return \"<span>Sorry, we id not find any results for \".concat(result.query, \"</span>\");\n      }\n    }\n  }]).on('autocomplete:selected', function (event, suggestion, dataset, context) {\n    window.location.href = window.location.origin + '/shop/' + suggestion.slug;\n    enterPressed = true;\n  }).on('keyup', function (event) {\n    if (event.keyCode === 13 && !enterPressed) {\n      window.location.href = window.location.origin + '/search-algolia';\n    }\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWxnb2xpYS1jbGllbnQuanM/YTRlZCJdLCJuYW1lcyI6WyJjbGllbnQiLCJhbGdvbGlhc2VhcmNoIiwiaW5kZXgiLCJpbml0SW5kZXgiLCJlbnRlclByZXNzZWQiLCJuZXdIaXRzU291cmNlIiwicGFyYW1zIiwiZG9TZWFyY2giLCJxdWVyeSIsImNiIiwic2VhcmNoIiwidGhlbiIsInJlcyIsImhpdHMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJhdXRvY29tcGxldGUiLCJoaW50Iiwic291cmNlIiwiaGl0c1BlclBhZ2UiLCJkaXNwbGF5S2V5IiwidGVtcGxhdGVzIiwic3VnZ2VzdGlvbiIsIm1hcmt1cCIsIl9oaWdobGlnaHRSZXN1bHQiLCJuYW1lIiwidmFsdWUiLCJwcmljZSIsInRvRml4ZWQiLCJkZXRhaWxzIiwiZW1wdHkiLCJyZXN1bHQiLCJvbiIsImV2ZW50IiwiZGF0YXNldCIsImNvbnRleHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJvcmlnaW4iLCJzbHVnIiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQyxZQUFZO0FBQ1QsTUFBSUEsTUFBTSxHQUFHQyxhQUFhLENBQUMsWUFBRCxFQUFlLGtDQUFmLENBQTFCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHRixNQUFNLENBQUNHLFNBQVAsQ0FBaUIsVUFBakIsQ0FBWjtBQUNBLE1BQUlDLFlBQVksR0FBRyxLQUFuQjs7QUFFQSxXQUFTQyxhQUFULENBQXVCSCxLQUF2QixFQUE4QkksTUFBOUIsRUFBc0M7QUFDbEMsV0FBTyxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QkMsRUFBekIsRUFBNkI7QUFDaENQLFdBQUssQ0FDQVEsTUFETCxDQUNZRixLQURaLEVBQ21CRixNQURuQixFQUVLSyxJQUZMLENBRVUsVUFBVUMsR0FBVixFQUFlO0FBQ2pCSCxVQUFFLENBQUNHLEdBQUcsQ0FBQ0MsSUFBTCxFQUFXRCxHQUFYLENBQUY7QUFDSCxPQUpMLFdBS1csVUFBVUUsR0FBVixFQUFlO0FBQ2xCQyxlQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNBTCxVQUFFLENBQUMsRUFBRCxDQUFGO0FBQ0gsT0FSTDtBQVNILEtBVkQ7QUFXSDs7QUFFRFEsY0FBWSxDQUFDLGVBQUQsRUFBa0I7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBbEIsRUFBbUMsQ0FDM0M7QUFDSUMsVUFBTSxFQUFFZCxhQUFhLENBQUNILEtBQUQsRUFBUTtBQUFFa0IsaUJBQVcsRUFBRTtBQUFmLEtBQVIsQ0FEekI7QUFFSUMsY0FBVSxFQUFFLE1BRmhCO0FBR0lDLGFBQVMsRUFBRTtBQUNQQyxnQkFBVSxFQUFFLG9CQUFVQSxXQUFWLEVBQXNCO0FBQzlCLFlBQU1DLE1BQU0seUdBRUlELFdBQVUsQ0FBQ0UsZ0JBQVgsQ0FBNEJDLElBQTVCLENBQWlDQyxLQUZyQyx5REFHSyxDQUFDSixXQUFVLENBQUNLLEtBQVgsR0FBbUIsR0FBcEIsRUFBeUJDLE9BQXpCLENBQWlDLENBQWpDLENBSEwsaUpBTUlOLFdBQVUsQ0FBQ0UsZ0JBQVgsQ0FBNEJLLE9BQTVCLENBQW9DSCxLQU54QyxrRUFBWjtBQVVBLGVBQU9ILE1BQVA7QUFDSCxPQWJNO0FBY1BPLFdBQUssRUFBRSxlQUFTQyxNQUFULEVBQWdCO0FBQ25CLHFFQUFzREEsTUFBTSxDQUFDeEIsS0FBN0Q7QUFDSDtBQWhCTTtBQUhmLEdBRDJDLENBQW5DLENBQVosQ0F1Qkd5QixFQXZCSCxDQXVCTSx1QkF2Qk4sRUF1QitCLFVBQVVDLEtBQVYsRUFBaUJYLFVBQWpCLEVBQTZCWSxPQUE3QixFQUFzQ0MsT0FBdEMsRUFBK0M7QUFDMUVDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUJGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkUsTUFBaEIsR0FBeUIsUUFBekIsR0FBb0NqQixVQUFVLENBQUNrQixJQUF0RTtBQUNBckMsZ0JBQVksR0FBRyxJQUFmO0FBQ0gsR0ExQkQsRUEwQkc2QixFQTFCSCxDQTBCTSxPQTFCTixFQTBCZSxVQUFTQyxLQUFULEVBQWU7QUFDMUIsUUFBR0EsS0FBSyxDQUFDUSxPQUFOLEtBQWtCLEVBQWxCLElBQXdCLENBQUN0QyxZQUE1QixFQUF5QztBQUNyQ2lDLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUJGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkUsTUFBaEIsR0FBeUIsaUJBQWhEO0FBQ0g7QUFDSixHQTlCRDtBQStCSCxDQWxERCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9hbGdvbGlhLWNsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNsaWVudCA9IGFsZ29saWFzZWFyY2goJ0QxVUFXRVREWUcnLCAnNThjMDQ2YjU2ZTFmNzdkZmE4MmM0ZmUyYjExZjgxNjAnKTtcbiAgICB2YXIgaW5kZXggPSBjbGllbnQuaW5pdEluZGV4KCdwcm9kdWN0cycpO1xuICAgIHZhciBlbnRlclByZXNzZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIG5ld0hpdHNTb3VyY2UoaW5kZXgsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZG9TZWFyY2gocXVlcnksIGNiKSB7XG4gICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgIC5zZWFyY2gocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKHJlcy5oaXRzLCByZXMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICBjYihbXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXV0b2NvbXBsZXRlKCcjc2VhcmNoLWlucHV0JywgeyBoaW50OiBmYWxzZSB9LCBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNvdXJjZTogbmV3SGl0c1NvdXJjZShpbmRleCwgeyBoaXRzUGVyUGFnZTogNSB9KSxcbiAgICAgICAgICAgIGRpc3BsYXlLZXk6ICduYW1lJyxcbiAgICAgICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb246IGZ1bmN0aW9uIChzdWdnZXN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmt1cCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGdvbGlhLXJlc3VsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7c3VnZ2VzdGlvbi5faGlnaGxpZ2h0UmVzdWx0Lm5hbWUudmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiQkeyhzdWdnZXN0aW9uLnByaWNlIC8gMTAwKS50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZ29saWEtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7c3VnZ2VzdGlvbi5faGlnaGxpZ2h0UmVzdWx0LmRldGFpbHMudmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGA7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcmt1cDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVtcHR5OiBmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxzcGFuPlNvcnJ5LCB3ZSBpZCBub3QgZmluZCBhbnkgcmVzdWx0cyBmb3IgJHtyZXN1bHQucXVlcnl9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdKS5vbignYXV0b2NvbXBsZXRlOnNlbGVjdGVkJywgZnVuY3Rpb24gKGV2ZW50LCBzdWdnZXN0aW9uLCBkYXRhc2V0LCBjb250ZXh0KSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvc2hvcC8nICsgc3VnZ2VzdGlvbi5zbHVnO1xuICAgICAgICBlbnRlclByZXNzZWQgPSB0cnVlO1xuICAgIH0pLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gMTMgJiYgIWVudGVyUHJlc3NlZCl7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL3NlYXJjaC1hbGdvbGlhJztcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/algolia-client.js\n");

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