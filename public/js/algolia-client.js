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

eval("(function () {\n  var client = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');\n  var index = client.initIndex('products');\n  var enterPressed = false;\n\n  function newHitsSource(index, params) {\n    return function doSearch(query, cb) {\n      index.search(query, params).then(function (res) {\n        cb(res.hits, res);\n      })[\"catch\"](function (err) {\n        console.error(err);\n        cb([]);\n      });\n    };\n  }\n\n  autocomplete('#search-input', {\n    hint: false\n  }, [{\n    source: newHitsSource(index, {\n      hitsPerPage: 5\n    }),\n    displayKey: 'name',\n    templates: {\n      suggestion: function suggestion(_suggestion) {\n        var markup = \"\\n                        <div class=\\\"algolia-result\\\">\\n                            <img src=\\\"\".concat(window.location.origin, \"/storage/\").concat(_suggestion.image, \"\\\" alt=\\\"img\\\" class=\\\"algolia-thumb\\\"/>\\n                            <span>\").concat(_suggestion._highlightResult.name.value, \"</span>\\n                            <span>$\").concat((_suggestion.price / 100).toFixed(2), \"</span>\\n                        </div>\\n                        <div class=\\\"algolia-details\\\">\\n                            <span>\").concat(_suggestion._highlightResult.details.value, \"</span>\\n                        </div>\\n                    \");\n        return markup;\n      },\n      empty: function empty(result) {\n        return \"<span>Sorry, we id not find any results for \".concat(result.query, \"</span>\");\n      }\n    }\n  }]).on('autocomplete:selected', function (event, suggestion, dataset, context) {\n    window.location.href = window.location.origin + '/shop/' + suggestion.slug;\n    enterPressed = true;\n  }).on('keyup', function (event) {\n    if (event.keyCode === 13 && !enterPressed) {\n      window.location.href = window.location.origin + '/search-algolia?products%5Bquery%5D=' + document.getElementById('search-input').value;\n    }\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWxnb2xpYS1jbGllbnQuanM/YTRlZCJdLCJuYW1lcyI6WyJjbGllbnQiLCJhbGdvbGlhc2VhcmNoIiwiaW5kZXgiLCJpbml0SW5kZXgiLCJlbnRlclByZXNzZWQiLCJuZXdIaXRzU291cmNlIiwicGFyYW1zIiwiZG9TZWFyY2giLCJxdWVyeSIsImNiIiwic2VhcmNoIiwidGhlbiIsInJlcyIsImhpdHMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJhdXRvY29tcGxldGUiLCJoaW50Iiwic291cmNlIiwiaGl0c1BlclBhZ2UiLCJkaXNwbGF5S2V5IiwidGVtcGxhdGVzIiwic3VnZ2VzdGlvbiIsIm1hcmt1cCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiaW1hZ2UiLCJfaGlnaGxpZ2h0UmVzdWx0IiwibmFtZSIsInZhbHVlIiwicHJpY2UiLCJ0b0ZpeGVkIiwiZGV0YWlscyIsImVtcHR5IiwicmVzdWx0Iiwib24iLCJldmVudCIsImRhdGFzZXQiLCJjb250ZXh0IiwiaHJlZiIsInNsdWciLCJrZXlDb2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQyxZQUFXO0FBQ1IsTUFBSUEsTUFBTSxHQUFHQyxhQUFhLENBQUMsWUFBRCxFQUFlLGtDQUFmLENBQTFCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHRixNQUFNLENBQUNHLFNBQVAsQ0FBaUIsVUFBakIsQ0FBWjtBQUNBLE1BQUlDLFlBQVksR0FBRyxLQUFuQjs7QUFFQSxXQUFTQyxhQUFULENBQXVCSCxLQUF2QixFQUE4QkksTUFBOUIsRUFBc0M7QUFDbEMsV0FBTyxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QkMsRUFBekIsRUFBNkI7QUFDaENQLFdBQUssQ0FDQVEsTUFETCxDQUNZRixLQURaLEVBQ21CRixNQURuQixFQUVLSyxJQUZMLENBRVUsVUFBU0MsR0FBVCxFQUFjO0FBQ2hCSCxVQUFFLENBQUNHLEdBQUcsQ0FBQ0MsSUFBTCxFQUFXRCxHQUFYLENBQUY7QUFDSCxPQUpMLFdBS1csVUFBU0UsR0FBVCxFQUFjO0FBQ2pCQyxlQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNBTCxVQUFFLENBQUMsRUFBRCxDQUFGO0FBQ0gsT0FSTDtBQVNILEtBVkQ7QUFXSDs7QUFFRFEsY0FBWSxDQUFDLGVBQUQsRUFBa0I7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBbEIsRUFBbUMsQ0FBQztBQUM1Q0MsVUFBTSxFQUFFZCxhQUFhLENBQUNILEtBQUQsRUFBUTtBQUFFa0IsaUJBQVcsRUFBRTtBQUFmLEtBQVIsQ0FEdUI7QUFFNUNDLGNBQVUsRUFBRSxNQUZnQztBQUc1Q0MsYUFBUyxFQUFFO0FBQ1BDLGdCQUFVLEVBQUUsb0JBQVNBLFdBQVQsRUFBcUI7QUFDN0IsWUFBTUMsTUFBTSw4R0FFWUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUY1QixzQkFFOENKLFdBQVUsQ0FBQ0ssS0FGekQseUZBR1FMLFdBQVUsQ0FBQ00sZ0JBQVgsQ0FBNEJDLElBQTVCLENBQWlDQyxLQUh6Qyx5REFJUyxDQUFDUixXQUFVLENBQUNTLEtBQVgsR0FBbUIsR0FBcEIsRUFBeUJDLE9BQXpCLENBQWlDLENBQWpDLENBSlQsaUpBT1FWLFdBQVUsQ0FBQ00sZ0JBQVgsQ0FBNEJLLE9BQTVCLENBQW9DSCxLQVA1QyxrRUFBWjtBQVdBLGVBQU9QLE1BQVA7QUFDSCxPQWRNO0FBZVBXLFdBQUssRUFBRSxlQUFTQyxNQUFULEVBQWlCO0FBQ3BCLHFFQUFzREEsTUFBTSxDQUFDNUIsS0FBN0Q7QUFDSDtBQWpCTTtBQUhpQyxHQUFELENBQW5DLENBQVosQ0FzQkk2QixFQXRCSixDQXNCTyx1QkF0QlAsRUFzQmdDLFVBQVNDLEtBQVQsRUFBZ0JmLFVBQWhCLEVBQTRCZ0IsT0FBNUIsRUFBcUNDLE9BQXJDLEVBQThDO0FBQzFFZixVQUFNLENBQUNDLFFBQVAsQ0FBZ0JlLElBQWhCLEdBQXVCaEIsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixHQUF5QixRQUF6QixHQUFvQ0osVUFBVSxDQUFDbUIsSUFBdEU7QUFDQXRDLGdCQUFZLEdBQUcsSUFBZjtBQUNILEdBekJELEVBeUJHaUMsRUF6QkgsQ0F5Qk0sT0F6Qk4sRUF5QmUsVUFBU0MsS0FBVCxFQUFnQjtBQUMzQixRQUFJQSxLQUFLLENBQUNLLE9BQU4sS0FBa0IsRUFBbEIsSUFBd0IsQ0FBQ3ZDLFlBQTdCLEVBQTJDO0FBQ3ZDcUIsWUFBTSxDQUFDQyxRQUFQLENBQWdCZSxJQUFoQixHQUF1QmhCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsR0FBeUIsc0NBQXpCLEdBQWtFaUIsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDZCxLQUFqSTtBQUNIO0FBQ0osR0E3QkQ7QUE4QkgsQ0FqREQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYWxnb2xpYS1jbGllbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNsaWVudCA9IGFsZ29saWFzZWFyY2goJ0QxVUFXRVREWUcnLCAnNThjMDQ2YjU2ZTFmNzdkZmE4MmM0ZmUyYjExZjgxNjAnKTtcbiAgICB2YXIgaW5kZXggPSBjbGllbnQuaW5pdEluZGV4KCdwcm9kdWN0cycpO1xuICAgIHZhciBlbnRlclByZXNzZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIG5ld0hpdHNTb3VyY2UoaW5kZXgsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZG9TZWFyY2gocXVlcnksIGNiKSB7XG4gICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgIC5zZWFyY2gocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzLmhpdHMsIHJlcyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY2IoW10pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGF1dG9jb21wbGV0ZSgnI3NlYXJjaC1pbnB1dCcsIHsgaGludDogZmFsc2UgfSwgW3tcbiAgICAgICAgc291cmNlOiBuZXdIaXRzU291cmNlKGluZGV4LCB7IGhpdHNQZXJQYWdlOiA1IH0pLFxuICAgICAgICBkaXNwbGF5S2V5OiAnbmFtZScsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgICAgc3VnZ2VzdGlvbjogZnVuY3Rpb24oc3VnZ2VzdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmt1cCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGdvbGlhLXJlc3VsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9zdG9yYWdlLyR7c3VnZ2VzdGlvbi5pbWFnZX1cIiBhbHQ9XCJpbWdcIiBjbGFzcz1cImFsZ29saWEtdGh1bWJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtzdWdnZXN0aW9uLl9oaWdobGlnaHRSZXN1bHQubmFtZS52YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JCR7KHN1Z2dlc3Rpb24ucHJpY2UgLyAxMDApLnRvRml4ZWQoMil9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxnb2xpYS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtzdWdnZXN0aW9uLl9oaWdobGlnaHRSZXN1bHQuZGV0YWlscy52YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYDtcblxuICAgICAgICAgICAgICAgIHJldHVybiBtYXJrdXA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW1wdHk6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPHNwYW4+U29ycnksIHdlIGlkIG5vdCBmaW5kIGFueSByZXN1bHRzIGZvciAke3Jlc3VsdC5xdWVyeX08L3NwYW4+YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pLm9uKCdhdXRvY29tcGxldGU6c2VsZWN0ZWQnLCBmdW5jdGlvbihldmVudCwgc3VnZ2VzdGlvbiwgZGF0YXNldCwgY29udGV4dCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL3Nob3AvJyArIHN1Z2dlc3Rpb24uc2x1ZztcbiAgICAgICAgZW50ZXJQcmVzc2VkID0gdHJ1ZTtcbiAgICB9KS5vbigna2V5dXAnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgJiYgIWVudGVyUHJlc3NlZCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy9zZWFyY2gtYWxnb2xpYT9wcm9kdWN0cyU1QnF1ZXJ5JTVEPScgKyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0JykudmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/algolia-client.js\n");

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