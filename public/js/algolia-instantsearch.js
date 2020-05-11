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

eval("(function () {\n  var searchClient = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');\n  var search = instantsearch({\n    indexName: 'products',\n    searchClient: searchClient,\n    routing: true\n  });\n  var widgets = {\n    searchBox: instantsearch.widgets.searchBox({\n      container: '#search-box',\n      placeholder: 'Search for Products'\n    }),\n    hits: instantsearch.widgets.hits({\n      container: '#hits',\n      templates: {\n        empty: 'No Results found',\n        item: function item(_item) {\n          var markdown = \"\\n                        <div class=\\\"result-title\\\">\".concat(_item._highlightResult.name.value, \"</div>\\n                        <div class=\\\"result-details\\\">\").concat(_item._highlightResult.details.value, \"</div>\\n                        <div class=\\\"result-price\\\">$\").concat((_item.price / 100).toFixed(2), \"</div>\\n                    \");\n\n          if (_item.image) {\n            markdown += \"<img src=\\\"\".concat(window.location.origin, \"/storage/\").concat(_item.image, \"\\\" alt=\\\"img\\\" class=\\\"algolia-thumb-result\\\"/>\");\n          }\n\n          return markdown;\n        }\n      }\n    }),\n    pagination: instantsearch.widgets.pagination({\n      container: '#pagination'\n    }),\n    stats: instantsearch.widgets.stats({\n      container: '#stats'\n    }),\n    refinementList: instantsearch.widgets.refinementList({\n      container: '#refinement-list',\n      attribute: 'categories'\n    })\n  };\n  search.addWidgets([widgets.searchBox, widgets.hits, widgets.pagination, widgets.stats, widgets.refinementList]);\n  search.start();\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWxnb2xpYS1pbnN0YW50c2VhcmNoLmpzPzE4ZDkiXSwibmFtZXMiOlsic2VhcmNoQ2xpZW50IiwiYWxnb2xpYXNlYXJjaCIsInNlYXJjaCIsImluc3RhbnRzZWFyY2giLCJpbmRleE5hbWUiLCJyb3V0aW5nIiwid2lkZ2V0cyIsInNlYXJjaEJveCIsImNvbnRhaW5lciIsInBsYWNlaG9sZGVyIiwiaGl0cyIsInRlbXBsYXRlcyIsImVtcHR5IiwiaXRlbSIsIm1hcmtkb3duIiwiX2hpZ2hsaWdodFJlc3VsdCIsIm5hbWUiLCJ2YWx1ZSIsImRldGFpbHMiLCJwcmljZSIsInRvRml4ZWQiLCJpbWFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwicGFnaW5hdGlvbiIsInN0YXRzIiwicmVmaW5lbWVudExpc3QiLCJhdHRyaWJ1dGUiLCJhZGRXaWRnZXRzIiwic3RhcnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQUMsWUFBVztBQUNSLE1BQU1BLFlBQVksR0FBR0MsYUFBYSxDQUFDLFlBQUQsRUFBZSxrQ0FBZixDQUFsQztBQUVBLE1BQU1DLE1BQU0sR0FBR0MsYUFBYSxDQUFDO0FBQ3pCQyxhQUFTLEVBQUUsVUFEYztBQUV6QkosZ0JBQVksRUFBWkEsWUFGeUI7QUFHekJLLFdBQU8sRUFBRTtBQUhnQixHQUFELENBQTVCO0FBTUEsTUFBTUMsT0FBTyxHQUFHO0FBQ1pDLGFBQVMsRUFBRUosYUFBYSxDQUFDRyxPQUFkLENBQXNCQyxTQUF0QixDQUFnQztBQUN2Q0MsZUFBUyxFQUFFLGFBRDRCO0FBRXZDQyxpQkFBVyxFQUFFO0FBRjBCLEtBQWhDLENBREM7QUFLWkMsUUFBSSxFQUFFUCxhQUFhLENBQUNHLE9BQWQsQ0FBc0JJLElBQXRCLENBQTJCO0FBQzdCRixlQUFTLEVBQUUsT0FEa0I7QUFFN0JHLGVBQVMsRUFBRTtBQUNQQyxhQUFLLEVBQUUsa0JBREE7QUFFUEMsWUFBSSxFQUFFLGNBQVNBLEtBQVQsRUFBZTtBQUNqQixjQUFJQyxRQUFRLG1FQUNvQkQsS0FBSSxDQUFDRSxnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkJDLEtBRC9DLDJFQUVzQkosS0FBSSxDQUFDRSxnQkFBTCxDQUFzQkcsT0FBdEIsQ0FBOEJELEtBRnBELDBFQUdxQixDQUFDSixLQUFJLENBQUNNLEtBQUwsR0FBYSxHQUFkLEVBQW1CQyxPQUFuQixDQUEyQixDQUEzQixDQUhyQixpQ0FBWjs7QUFLQSxjQUFJUCxLQUFJLENBQUNRLEtBQVQsRUFBZ0I7QUFDWlAsb0JBQVEseUJBQWlCUSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWpDLHNCQUFtRFgsS0FBSSxDQUFDUSxLQUF4RCxvREFBUjtBQUNIOztBQUVELGlCQUFPUCxRQUFQO0FBQ0g7QUFiTTtBQUZrQixLQUEzQixDQUxNO0FBdUJaVyxjQUFVLEVBQUV0QixhQUFhLENBQUNHLE9BQWQsQ0FBc0JtQixVQUF0QixDQUFpQztBQUN6Q2pCLGVBQVMsRUFBRTtBQUQ4QixLQUFqQyxDQXZCQTtBQTBCWmtCLFNBQUssRUFBRXZCLGFBQWEsQ0FBQ0csT0FBZCxDQUFzQm9CLEtBQXRCLENBQTRCO0FBQy9CbEIsZUFBUyxFQUFFO0FBRG9CLEtBQTVCLENBMUJLO0FBNkJabUIsa0JBQWMsRUFBRXhCLGFBQWEsQ0FBQ0csT0FBZCxDQUFzQnFCLGNBQXRCLENBQXFDO0FBQ2pEbkIsZUFBUyxFQUFFLGtCQURzQztBQUVqRG9CLGVBQVMsRUFBRTtBQUZzQyxLQUFyQztBQTdCSixHQUFoQjtBQW1DQTFCLFFBQU0sQ0FBQzJCLFVBQVAsQ0FBa0IsQ0FBQ3ZCLE9BQU8sQ0FBQ0MsU0FBVCxFQUFvQkQsT0FBTyxDQUFDSSxJQUE1QixFQUFrQ0osT0FBTyxDQUFDbUIsVUFBMUMsRUFBc0RuQixPQUFPLENBQUNvQixLQUE5RCxFQUFxRXBCLE9BQU8sQ0FBQ3FCLGNBQTdFLENBQWxCO0FBRUF6QixRQUFNLENBQUM0QixLQUFQO0FBQ0gsQ0EvQ0QiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYWxnb2xpYS1pbnN0YW50c2VhcmNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNlYXJjaENsaWVudCA9IGFsZ29saWFzZWFyY2goJ0QxVUFXRVREWUcnLCAnNThjMDQ2YjU2ZTFmNzdkZmE4MmM0ZmUyYjExZjgxNjAnKTtcblxuICAgIGNvbnN0IHNlYXJjaCA9IGluc3RhbnRzZWFyY2goe1xuICAgICAgICBpbmRleE5hbWU6ICdwcm9kdWN0cycsXG4gICAgICAgIHNlYXJjaENsaWVudCxcbiAgICAgICAgcm91dGluZzogdHJ1ZVxuICAgIH0pO1xuXG4gICAgY29uc3Qgd2lkZ2V0cyA9IHtcbiAgICAgICAgc2VhcmNoQm94OiBpbnN0YW50c2VhcmNoLndpZGdldHMuc2VhcmNoQm94KHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJyNzZWFyY2gtYm94JyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGZvciBQcm9kdWN0cydcbiAgICAgICAgfSksXG4gICAgICAgIGhpdHM6IGluc3RhbnRzZWFyY2gud2lkZ2V0cy5oaXRzKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJyNoaXRzJyxcbiAgICAgICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgICAgICAgIGVtcHR5OiAnTm8gUmVzdWx0cyBmb3VuZCcsXG4gICAgICAgICAgICAgICAgaXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2Rvd24gPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LXRpdGxlXCI+JHtpdGVtLl9oaWdobGlnaHRSZXN1bHQubmFtZS52YWx1ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtZGV0YWlsc1wiPiR7aXRlbS5faGlnaGxpZ2h0UmVzdWx0LmRldGFpbHMudmFsdWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LXByaWNlXCI+JCR7KGl0ZW0ucHJpY2UgLyAxMDApLnRvRml4ZWQoMil9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZG93biArPSBgPGltZyBzcmM9XCIke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3N0b3JhZ2UvJHtpdGVtLmltYWdlfVwiIGFsdD1cImltZ1wiIGNsYXNzPVwiYWxnb2xpYS10aHVtYi1yZXN1bHRcIi8+YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXJrZG93bjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBwYWdpbmF0aW9uOiBpbnN0YW50c2VhcmNoLndpZGdldHMucGFnaW5hdGlvbih7XG4gICAgICAgICAgICBjb250YWluZXI6ICcjcGFnaW5hdGlvbicsXG4gICAgICAgIH0pLFxuICAgICAgICBzdGF0czogaW5zdGFudHNlYXJjaC53aWRnZXRzLnN0YXRzKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJyNzdGF0cycsXG4gICAgICAgIH0pLFxuICAgICAgICByZWZpbmVtZW50TGlzdDogaW5zdGFudHNlYXJjaC53aWRnZXRzLnJlZmluZW1lbnRMaXN0KHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJyNyZWZpbmVtZW50LWxpc3QnLFxuICAgICAgICAgICAgYXR0cmlidXRlOiAnY2F0ZWdvcmllcycsXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIHNlYXJjaC5hZGRXaWRnZXRzKFt3aWRnZXRzLnNlYXJjaEJveCwgd2lkZ2V0cy5oaXRzLCB3aWRnZXRzLnBhZ2luYXRpb24sIHdpZGdldHMuc3RhdHMsIHdpZGdldHMucmVmaW5lbWVudExpc3RdKTtcblxuICAgIHNlYXJjaC5zdGFydCgpO1xufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/algolia-instantsearch.js\n");

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