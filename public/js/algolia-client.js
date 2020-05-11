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

eval("(function () {\n  var client = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');\n  var index = client.initIndex('products');\n  var enterPressed = false;\n\n  function newHitsSource(index, params) {\n    return function doSearch(query, cb) {\n      index.search(query, params).then(function (res) {\n        cb(res.hits, res);\n      })[\"catch\"](function (err) {\n        console.error(err);\n        cb([]);\n      });\n    };\n  }\n\n  autocomplete('#search-input', {\n    hint: false\n  }, [{\n    source: newHitsSource(index, {\n      hitsPerPage: 5\n    }),\n    displayKey: 'name',\n    templates: {\n      suggestion: function suggestion(_suggestion) {\n        var markup = \"\\n                        <div class=\\\"algolia-result\\\">\\n                            <span>\".concat(_suggestion._highlightResult.name.value, \"</span>\\n                            <span>$\").concat((_suggestion.price / 100).toFixed(2), \"</span>\\n                        </div>\\n                        <div class=\\\"algolia-details\\\">\\n                            <span>\").concat(_suggestion._highlightResult.details.value, \"</span>\\n                        </div>\\n                    \");\n        return markup;\n      },\n      empty: function empty(result) {\n        return \"<span>Sorry, we id not find any results for \".concat(result.query, \"</span>\");\n      }\n    }\n  }]).on('autocomplete:selected', function (event, suggestion, dataset, context) {\n    window.location.href = window.location.origin + '/shop/' + suggestion.slug;\n    enterPressed = true;\n  }).on('keyup', function (event) {\n    if (event.keyCode === 13 && !enterPressed) {\n      window.location.href = window.location.origin + '/search-algolia?products%5Bquery%5D=' + document.getElementById('search-input').value;\n    }\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWxnb2xpYS1jbGllbnQuanM/YTRlZCJdLCJuYW1lcyI6WyJjbGllbnQiLCJhbGdvbGlhc2VhcmNoIiwiaW5kZXgiLCJpbml0SW5kZXgiLCJlbnRlclByZXNzZWQiLCJuZXdIaXRzU291cmNlIiwicGFyYW1zIiwiZG9TZWFyY2giLCJxdWVyeSIsImNiIiwic2VhcmNoIiwidGhlbiIsInJlcyIsImhpdHMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJhdXRvY29tcGxldGUiLCJoaW50Iiwic291cmNlIiwiaGl0c1BlclBhZ2UiLCJkaXNwbGF5S2V5IiwidGVtcGxhdGVzIiwic3VnZ2VzdGlvbiIsIm1hcmt1cCIsIl9oaWdobGlnaHRSZXN1bHQiLCJuYW1lIiwidmFsdWUiLCJwcmljZSIsInRvRml4ZWQiLCJkZXRhaWxzIiwiZW1wdHkiLCJyZXN1bHQiLCJvbiIsImV2ZW50IiwiZGF0YXNldCIsImNvbnRleHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJvcmlnaW4iLCJzbHVnIiwia2V5Q29kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBLENBQUMsWUFBVztBQUNSLE1BQUlBLE1BQU0sR0FBR0MsYUFBYSxDQUFDLFlBQUQsRUFBZSxrQ0FBZixDQUExQjtBQUNBLE1BQUlDLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxTQUFQLENBQWlCLFVBQWpCLENBQVo7QUFDQSxNQUFJQyxZQUFZLEdBQUcsS0FBbkI7O0FBRUEsV0FBU0MsYUFBVCxDQUF1QkgsS0FBdkIsRUFBOEJJLE1BQTlCLEVBQXNDO0FBQ2xDLFdBQU8sU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUJDLEVBQXpCLEVBQTZCO0FBQ2hDUCxXQUFLLENBQ0FRLE1BREwsQ0FDWUYsS0FEWixFQUNtQkYsTUFEbkIsRUFFS0ssSUFGTCxDQUVVLFVBQVNDLEdBQVQsRUFBYztBQUNoQkgsVUFBRSxDQUFDRyxHQUFHLENBQUNDLElBQUwsRUFBV0QsR0FBWCxDQUFGO0FBQ0gsT0FKTCxXQUtXLFVBQVNFLEdBQVQsRUFBYztBQUNqQkMsZUFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDQUwsVUFBRSxDQUFDLEVBQUQsQ0FBRjtBQUNILE9BUkw7QUFTSCxLQVZEO0FBV0g7O0FBRURRLGNBQVksQ0FBQyxlQUFELEVBQWtCO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQWxCLEVBQW1DLENBQUM7QUFDNUNDLFVBQU0sRUFBRWQsYUFBYSxDQUFDSCxLQUFELEVBQVE7QUFBRWtCLGlCQUFXLEVBQUU7QUFBZixLQUFSLENBRHVCO0FBRTVDQyxjQUFVLEVBQUUsTUFGZ0M7QUFHNUNDLGFBQVMsRUFBRTtBQUNQQyxnQkFBVSxFQUFFLG9CQUFTQSxXQUFULEVBQXFCO0FBQzdCLFlBQU1DLE1BQU0seUdBRVFELFdBQVUsQ0FBQ0UsZ0JBQVgsQ0FBNEJDLElBQTVCLENBQWlDQyxLQUZ6Qyx5REFHUyxDQUFDSixXQUFVLENBQUNLLEtBQVgsR0FBbUIsR0FBcEIsRUFBeUJDLE9BQXpCLENBQWlDLENBQWpDLENBSFQsaUpBTVFOLFdBQVUsQ0FBQ0UsZ0JBQVgsQ0FBNEJLLE9BQTVCLENBQW9DSCxLQU41QyxrRUFBWjtBQVVBLGVBQU9ILE1BQVA7QUFDSCxPQWJNO0FBY1BPLFdBQUssRUFBRSxlQUFTQyxNQUFULEVBQWlCO0FBQ3BCLHFFQUFzREEsTUFBTSxDQUFDeEIsS0FBN0Q7QUFDSDtBQWhCTTtBQUhpQyxHQUFELENBQW5DLENBQVosQ0FxQkl5QixFQXJCSixDQXFCTyx1QkFyQlAsRUFxQmdDLFVBQVNDLEtBQVQsRUFBZ0JYLFVBQWhCLEVBQTRCWSxPQUE1QixFQUFxQ0MsT0FBckMsRUFBOEM7QUFDMUVDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUJGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkUsTUFBaEIsR0FBeUIsUUFBekIsR0FBb0NqQixVQUFVLENBQUNrQixJQUF0RTtBQUNBckMsZ0JBQVksR0FBRyxJQUFmO0FBQ0gsR0F4QkQsRUF3Qkc2QixFQXhCSCxDQXdCTSxPQXhCTixFQXdCZSxVQUFTQyxLQUFULEVBQWdCO0FBQzNCLFFBQUlBLEtBQUssQ0FBQ1EsT0FBTixLQUFrQixFQUFsQixJQUF3QixDQUFDdEMsWUFBN0IsRUFBMkM7QUFDdkNpQyxZQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCRixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JFLE1BQWhCLEdBQXlCLHNDQUF6QixHQUFrRUcsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDakIsS0FBakk7QUFDSDtBQUNKLEdBNUJEO0FBNkJILENBaEREIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2FsZ29saWEtY2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAgIHZhciBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKCdEMVVBV0VURFlHJywgJzU4YzA0NmI1NmUxZjc3ZGZhODJjNGZlMmIxMWY4MTYwJyk7XG4gICAgdmFyIGluZGV4ID0gY2xpZW50LmluaXRJbmRleCgncHJvZHVjdHMnKTtcbiAgICB2YXIgZW50ZXJQcmVzc2VkID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBuZXdIaXRzU291cmNlKGluZGV4LCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGRvU2VhcmNoKHF1ZXJ5LCBjYikge1xuICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAuc2VhcmNoKHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKHJlcy5oaXRzLCByZXMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGNiKFtdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhdXRvY29tcGxldGUoJyNzZWFyY2gtaW5wdXQnLCB7IGhpbnQ6IGZhbHNlIH0sIFt7XG4gICAgICAgIHNvdXJjZTogbmV3SGl0c1NvdXJjZShpbmRleCwgeyBoaXRzUGVyUGFnZTogNSB9KSxcbiAgICAgICAgZGlzcGxheUtleTogJ25hbWUnLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICAgIHN1Z2dlc3Rpb246IGZ1bmN0aW9uKHN1Z2dlc3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxnb2xpYS1yZXN1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke3N1Z2dlc3Rpb24uX2hpZ2hsaWdodFJlc3VsdC5uYW1lLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kJHsoc3VnZ2VzdGlvbi5wcmljZSAvIDEwMCkudG9GaXhlZCgyKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGdvbGlhLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke3N1Z2dlc3Rpb24uX2hpZ2hsaWdodFJlc3VsdC5kZXRhaWxzLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcmt1cDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbXB0eTogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8c3Bhbj5Tb3JyeSwgd2UgaWQgbm90IGZpbmQgYW55IHJlc3VsdHMgZm9yICR7cmVzdWx0LnF1ZXJ5fTwvc3Bhbj5gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSkub24oJ2F1dG9jb21wbGV0ZTpzZWxlY3RlZCcsIGZ1bmN0aW9uKGV2ZW50LCBzdWdnZXN0aW9uLCBkYXRhc2V0LCBjb250ZXh0KSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvc2hvcC8nICsgc3VnZ2VzdGlvbi5zbHVnO1xuICAgICAgICBlbnRlclByZXNzZWQgPSB0cnVlO1xuICAgIH0pLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyAmJiAhZW50ZXJQcmVzc2VkKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL3NlYXJjaC1hbGdvbGlhP3Byb2R1Y3RzJTVCcXVlcnklNUQ9JyArIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/algolia-client.js\n");

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