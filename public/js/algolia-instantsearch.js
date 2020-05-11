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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/algolia-instantsearch.js":
/*!***********************************************!*\
  !*** ./resources/js/algolia-instantsearch.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var searchClient = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');\n  var search = instantsearch({\n    indexName: 'products',\n    searchClient: searchClient,\n    routing: true\n  });\n  var widgets = {\n    searchBox: instantsearch.widgets.searchBox({\n      container: '#search-box',\n      placeholder: 'Search for Products'\n    }),\n    hits: instantsearch.widgets.hits({\n      container: '#hits',\n      templates: {\n        empty: 'No Results found',\n        item: function item(_item) {\n          var markdown = \"\\n                      <a href=\\\"\".concat(window.location.origin, \"/shop/\").concat(_item.slug, \"\\\">\\n                        <div class=\\\"result-title\\\">\").concat(_item._highlightResult.name.value, \"</div>\\n                        <div class=\\\"result-details\\\">\").concat(_item._highlightResult.details.value, \"</div>\\n                        <div class=\\\"result-price\\\">$\").concat((_item.price / 100).toFixed(2), \"</div>\\n                      </a>\\n                    \");\n\n          if (_item.image) {\n            markdown += \"<img src=\\\"\".concat(window.location.origin, \"/storage/\").concat(_item.image, \"\\\" alt=\\\"img\\\" class=\\\"algolia-thumb-result\\\"/>\");\n          }\n\n          return markdown;\n        }\n      }\n    }),\n    pagination: instantsearch.widgets.pagination({\n      container: '#pagination'\n    }),\n    stats: instantsearch.widgets.stats({\n      container: '#stats'\n    }),\n    refinementList: instantsearch.widgets.refinementList({\n      container: '#refinement-list',\n      attribute: 'categories'\n    })\n  };\n  search.addWidgets([widgets.searchBox, widgets.hits, widgets.pagination, widgets.stats, widgets.refinementList]);\n  search.start();\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWxnb2xpYS1pbnN0YW50c2VhcmNoLmpzPzE4ZDkiXSwibmFtZXMiOlsic2VhcmNoQ2xpZW50IiwiYWxnb2xpYXNlYXJjaCIsInNlYXJjaCIsImluc3RhbnRzZWFyY2giLCJpbmRleE5hbWUiLCJyb3V0aW5nIiwid2lkZ2V0cyIsInNlYXJjaEJveCIsImNvbnRhaW5lciIsInBsYWNlaG9sZGVyIiwiaGl0cyIsInRlbXBsYXRlcyIsImVtcHR5IiwiaXRlbSIsIm1hcmtkb3duIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJzbHVnIiwiX2hpZ2hsaWdodFJlc3VsdCIsIm5hbWUiLCJ2YWx1ZSIsImRldGFpbHMiLCJwcmljZSIsInRvRml4ZWQiLCJpbWFnZSIsInBhZ2luYXRpb24iLCJzdGF0cyIsInJlZmluZW1lbnRMaXN0IiwiYXR0cmlidXRlIiwiYWRkV2lkZ2V0cyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFDLFlBQVc7QUFDUixNQUFNQSxZQUFZLEdBQUdDLGFBQWEsQ0FBQyxZQUFELEVBQWUsa0NBQWYsQ0FBbEM7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLGFBQWEsQ0FBQztBQUN6QkMsYUFBUyxFQUFFLFVBRGM7QUFFekJKLGdCQUFZLEVBQVpBLFlBRnlCO0FBR3pCSyxXQUFPLEVBQUU7QUFIZ0IsR0FBRCxDQUE1QjtBQU1BLE1BQU1DLE9BQU8sR0FBRztBQUNaQyxhQUFTLEVBQUVKLGFBQWEsQ0FBQ0csT0FBZCxDQUFzQkMsU0FBdEIsQ0FBZ0M7QUFDdkNDLGVBQVMsRUFBRSxhQUQ0QjtBQUV2Q0MsaUJBQVcsRUFBRTtBQUYwQixLQUFoQyxDQURDO0FBS1pDLFFBQUksRUFBRVAsYUFBYSxDQUFDRyxPQUFkLENBQXNCSSxJQUF0QixDQUEyQjtBQUM3QkYsZUFBUyxFQUFFLE9BRGtCO0FBRTdCRyxlQUFTLEVBQUU7QUFDUEMsYUFBSyxFQUFFLGtCQURBO0FBRVBDLFlBQUksRUFBRSxjQUFTQSxLQUFULEVBQWU7QUFDakIsY0FBSUMsUUFBUSwrQ0FDQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQURqQixtQkFDZ0NKLEtBQUksQ0FBQ0ssSUFEckMsc0VBRW9CTCxLQUFJLENBQUNNLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQkMsS0FGL0MsMkVBR3NCUixLQUFJLENBQUNNLGdCQUFMLENBQXNCRyxPQUF0QixDQUE4QkQsS0FIcEQsMEVBSXFCLENBQUNSLEtBQUksQ0FBQ1UsS0FBTCxHQUFhLEdBQWQsRUFBbUJDLE9BQW5CLENBQTJCLENBQTNCLENBSnJCLDZEQUFaOztBQU9BLGNBQUlYLEtBQUksQ0FBQ1ksS0FBVCxFQUFnQjtBQUNaWCxvQkFBUSx5QkFBaUJDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBakMsc0JBQW1ESixLQUFJLENBQUNZLEtBQXhELG9EQUFSO0FBQ0g7O0FBRUQsaUJBQU9YLFFBQVA7QUFDSDtBQWZNO0FBRmtCLEtBQTNCLENBTE07QUF5QlpZLGNBQVUsRUFBRXZCLGFBQWEsQ0FBQ0csT0FBZCxDQUFzQm9CLFVBQXRCLENBQWlDO0FBQ3pDbEIsZUFBUyxFQUFFO0FBRDhCLEtBQWpDLENBekJBO0FBNEJabUIsU0FBSyxFQUFFeEIsYUFBYSxDQUFDRyxPQUFkLENBQXNCcUIsS0FBdEIsQ0FBNEI7QUFDL0JuQixlQUFTLEVBQUU7QUFEb0IsS0FBNUIsQ0E1Qks7QUErQlpvQixrQkFBYyxFQUFFekIsYUFBYSxDQUFDRyxPQUFkLENBQXNCc0IsY0FBdEIsQ0FBcUM7QUFDakRwQixlQUFTLEVBQUUsa0JBRHNDO0FBRWpEcUIsZUFBUyxFQUFFO0FBRnNDLEtBQXJDO0FBL0JKLEdBQWhCO0FBcUNBM0IsUUFBTSxDQUFDNEIsVUFBUCxDQUFrQixDQUFDeEIsT0FBTyxDQUFDQyxTQUFULEVBQW9CRCxPQUFPLENBQUNJLElBQTVCLEVBQWtDSixPQUFPLENBQUNvQixVQUExQyxFQUFzRHBCLE9BQU8sQ0FBQ3FCLEtBQTlELEVBQXFFckIsT0FBTyxDQUFDc0IsY0FBN0UsQ0FBbEI7QUFFQTFCLFFBQU0sQ0FBQzZCLEtBQVA7QUFDSCxDQWpERCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9hbGdvbGlhLWluc3RhbnRzZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VhcmNoQ2xpZW50ID0gYWxnb2xpYXNlYXJjaCgnRDFVQVdFVERZRycsICc1OGMwNDZiNTZlMWY3N2RmYTgyYzRmZTJiMTFmODE2MCcpO1xuXG4gICAgY29uc3Qgc2VhcmNoID0gaW5zdGFudHNlYXJjaCh7XG4gICAgICAgIGluZGV4TmFtZTogJ3Byb2R1Y3RzJyxcbiAgICAgICAgc2VhcmNoQ2xpZW50LFxuICAgICAgICByb3V0aW5nOiB0cnVlXG4gICAgfSk7XG5cbiAgICBjb25zdCB3aWRnZXRzID0ge1xuICAgICAgICBzZWFyY2hCb3g6IGluc3RhbnRzZWFyY2gud2lkZ2V0cy5zZWFyY2hCb3goe1xuICAgICAgICAgICAgY29udGFpbmVyOiAnI3NlYXJjaC1ib3gnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggZm9yIFByb2R1Y3RzJ1xuICAgICAgICB9KSxcbiAgICAgICAgaGl0czogaW5zdGFudHNlYXJjaC53aWRnZXRzLmhpdHMoe1xuICAgICAgICAgICAgY29udGFpbmVyOiAnI2hpdHMnLFxuICAgICAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgICAgICAgZW1wdHk6ICdObyBSZXN1bHRzIGZvdW5kJyxcbiAgICAgICAgICAgICAgICBpdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZG93biA9IGBcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9zaG9wLyR7aXRlbS5zbHVnfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC10aXRsZVwiPiR7aXRlbS5faGlnaGxpZ2h0UmVzdWx0Lm5hbWUudmFsdWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWRldGFpbHNcIj4ke2l0ZW0uX2hpZ2hsaWdodFJlc3VsdC5kZXRhaWxzLnZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1wcmljZVwiPiQkeyhpdGVtLnByaWNlIC8gMTAwKS50b0ZpeGVkKDIpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtkb3duICs9IGA8aW1nIHNyYz1cIiR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vc3RvcmFnZS8ke2l0ZW0uaW1hZ2V9XCIgYWx0PVwiaW1nXCIgY2xhc3M9XCJhbGdvbGlhLXRodW1iLXJlc3VsdFwiLz5gO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcmtkb3duO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHBhZ2luYXRpb246IGluc3RhbnRzZWFyY2gud2lkZ2V0cy5wYWdpbmF0aW9uKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJyNwYWdpbmF0aW9uJyxcbiAgICAgICAgfSksXG4gICAgICAgIHN0YXRzOiBpbnN0YW50c2VhcmNoLndpZGdldHMuc3RhdHMoe1xuICAgICAgICAgICAgY29udGFpbmVyOiAnI3N0YXRzJyxcbiAgICAgICAgfSksXG4gICAgICAgIHJlZmluZW1lbnRMaXN0OiBpbnN0YW50c2VhcmNoLndpZGdldHMucmVmaW5lbWVudExpc3Qoe1xuICAgICAgICAgICAgY29udGFpbmVyOiAnI3JlZmluZW1lbnQtbGlzdCcsXG4gICAgICAgICAgICBhdHRyaWJ1dGU6ICdjYXRlZ29yaWVzJyxcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgc2VhcmNoLmFkZFdpZGdldHMoW3dpZGdldHMuc2VhcmNoQm94LCB3aWRnZXRzLmhpdHMsIHdpZGdldHMucGFnaW5hdGlvbiwgd2lkZ2V0cy5zdGF0cywgd2lkZ2V0cy5yZWZpbmVtZW50TGlzdF0pO1xuXG4gICAgc2VhcmNoLnN0YXJ0KCk7XG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/algolia-instantsearch.js\n");

/***/ }),

/***/ 3:
/*!*****************************************************!*\
  !*** multi ./resources/js/algolia-instantsearch.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/amsalud/Documents/GitHub/estore-laravel/resources/js/algolia-instantsearch.js */"./resources/js/algolia-instantsearch.js");


/***/ })

/******/ });