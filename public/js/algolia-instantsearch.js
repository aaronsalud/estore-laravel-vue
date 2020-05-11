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

eval("(function () {\n  var searchClient = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');\n  var search = instantsearch({\n    indexName: 'products',\n    searchClient: searchClient,\n    routing: true\n  });\n  var widgets = {\n    searchBox: instantsearch.widgets.searchBox({\n      container: '#search-box',\n      placeholder: 'Search for Products'\n    }),\n    hits: instantsearch.widgets.hits({\n      container: '#hits',\n      templates: {\n        empty: 'No Results found',\n        item: function item(_item) {\n          var markdown = \"\\n                        <div class=\\\"result-title\\\">\".concat(_item._highlightResult.name.value, \"</div>\\n                        <div class=\\\"result-details\\\">\").concat(_item._highlightResult.details.value, \"</div>\\n                        <div class=\\\"result-price\\\">$\").concat((_item.price / 100).toFixed(2), \"</div>\\n                    \");\n\n          if (_item.image) {\n            markdown += \"<img src=\\\"\".concat(window.location.origin, \"/storage/\").concat(_item.image, \"\\\" alt=\\\"img\\\" class=\\\"algolia-thumb-result\\\"/>\");\n          }\n\n          return markdown;\n        }\n      }\n    }),\n    pagination: instantsearch.widgets.pagination({\n      container: '#pagination'\n    }),\n    stats: instantsearch.widgets.stats({\n      container: '#stats'\n    }),\n    refinementList: instantsearch.widgets.refinementList({\n      container: '#refinement-list',\n      attribute: 'category'\n    })\n  };\n  search.addWidgets([widgets.searchBox, widgets.hits, widgets.pagination, widgets.stats]);\n  search.start();\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWxnb2xpYS1pbnN0YW50c2VhcmNoLmpzPzE4ZDkiXSwibmFtZXMiOlsic2VhcmNoQ2xpZW50IiwiYWxnb2xpYXNlYXJjaCIsInNlYXJjaCIsImluc3RhbnRzZWFyY2giLCJpbmRleE5hbWUiLCJyb3V0aW5nIiwid2lkZ2V0cyIsInNlYXJjaEJveCIsImNvbnRhaW5lciIsInBsYWNlaG9sZGVyIiwiaGl0cyIsInRlbXBsYXRlcyIsImVtcHR5IiwiaXRlbSIsIm1hcmtkb3duIiwiX2hpZ2hsaWdodFJlc3VsdCIsIm5hbWUiLCJ2YWx1ZSIsImRldGFpbHMiLCJwcmljZSIsInRvRml4ZWQiLCJpbWFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwicGFnaW5hdGlvbiIsInN0YXRzIiwicmVmaW5lbWVudExpc3QiLCJhdHRyaWJ1dGUiLCJhZGRXaWRnZXRzIiwic3RhcnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQUMsWUFBVztBQUNSLE1BQU1BLFlBQVksR0FBR0MsYUFBYSxDQUFDLFlBQUQsRUFBZSxrQ0FBZixDQUFsQztBQUVBLE1BQU1DLE1BQU0sR0FBR0MsYUFBYSxDQUFDO0FBQ3pCQyxhQUFTLEVBQUUsVUFEYztBQUV6QkosZ0JBQVksRUFBWkEsWUFGeUI7QUFHekJLLFdBQU8sRUFBRTtBQUhnQixHQUFELENBQTVCO0FBTUEsTUFBTUMsT0FBTyxHQUFHO0FBQ1pDLGFBQVMsRUFBRUosYUFBYSxDQUFDRyxPQUFkLENBQXNCQyxTQUF0QixDQUFnQztBQUN2Q0MsZUFBUyxFQUFFLGFBRDRCO0FBRXZDQyxpQkFBVyxFQUFFO0FBRjBCLEtBQWhDLENBREM7QUFLWkMsUUFBSSxFQUFFUCxhQUFhLENBQUNHLE9BQWQsQ0FBc0JJLElBQXRCLENBQTJCO0FBQzdCRixlQUFTLEVBQUUsT0FEa0I7QUFFN0JHLGVBQVMsRUFBRTtBQUNQQyxhQUFLLEVBQUUsa0JBREE7QUFFUEMsWUFBSSxFQUFFLGNBQVNBLEtBQVQsRUFBZTtBQUNqQixjQUFJQyxRQUFRLG1FQUNvQkQsS0FBSSxDQUFDRSxnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkJDLEtBRC9DLDJFQUVzQkosS0FBSSxDQUFDRSxnQkFBTCxDQUFzQkcsT0FBdEIsQ0FBOEJELEtBRnBELDBFQUdxQixDQUFDSixLQUFJLENBQUNNLEtBQUwsR0FBYSxHQUFkLEVBQW1CQyxPQUFuQixDQUEyQixDQUEzQixDQUhyQixpQ0FBWjs7QUFLQSxjQUFJUCxLQUFJLENBQUNRLEtBQVQsRUFBZ0I7QUFDWlAsb0JBQVEseUJBQWlCUSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWpDLHNCQUFtRFgsS0FBSSxDQUFDUSxLQUF4RCxvREFBUjtBQUNIOztBQUVELGlCQUFPUCxRQUFQO0FBQ0g7QUFiTTtBQUZrQixLQUEzQixDQUxNO0FBdUJaVyxjQUFVLEVBQUV0QixhQUFhLENBQUNHLE9BQWQsQ0FBc0JtQixVQUF0QixDQUFpQztBQUN6Q2pCLGVBQVMsRUFBRTtBQUQ4QixLQUFqQyxDQXZCQTtBQTBCWmtCLFNBQUssRUFBRXZCLGFBQWEsQ0FBQ0csT0FBZCxDQUFzQm9CLEtBQXRCLENBQTRCO0FBQy9CbEIsZUFBUyxFQUFFO0FBRG9CLEtBQTVCLENBMUJLO0FBNkJabUIsa0JBQWMsRUFBRXhCLGFBQWEsQ0FBQ0csT0FBZCxDQUFzQnFCLGNBQXRCLENBQXFDO0FBQ2pEbkIsZUFBUyxFQUFFLGtCQURzQztBQUVqRG9CLGVBQVMsRUFBRTtBQUZzQyxLQUFyQztBQTdCSixHQUFoQjtBQW1DQTFCLFFBQU0sQ0FBQzJCLFVBQVAsQ0FBa0IsQ0FBQ3ZCLE9BQU8sQ0FBQ0MsU0FBVCxFQUFvQkQsT0FBTyxDQUFDSSxJQUE1QixFQUFrQ0osT0FBTyxDQUFDbUIsVUFBMUMsRUFBc0RuQixPQUFPLENBQUNvQixLQUE5RCxDQUFsQjtBQUVBeEIsUUFBTSxDQUFDNEIsS0FBUDtBQUNILENBL0NEIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2FsZ29saWEtaW5zdGFudHNlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzZWFyY2hDbGllbnQgPSBhbGdvbGlhc2VhcmNoKCdEMVVBV0VURFlHJywgJzU4YzA0NmI1NmUxZjc3ZGZhODJjNGZlMmIxMWY4MTYwJyk7XG5cbiAgICBjb25zdCBzZWFyY2ggPSBpbnN0YW50c2VhcmNoKHtcbiAgICAgICAgaW5kZXhOYW1lOiAncHJvZHVjdHMnLFxuICAgICAgICBzZWFyY2hDbGllbnQsXG4gICAgICAgIHJvdXRpbmc6IHRydWVcbiAgICB9KTtcblxuICAgIGNvbnN0IHdpZGdldHMgPSB7XG4gICAgICAgIHNlYXJjaEJveDogaW5zdGFudHNlYXJjaC53aWRnZXRzLnNlYXJjaEJveCh7XG4gICAgICAgICAgICBjb250YWluZXI6ICcjc2VhcmNoLWJveCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBmb3IgUHJvZHVjdHMnXG4gICAgICAgIH0pLFxuICAgICAgICBoaXRzOiBpbnN0YW50c2VhcmNoLndpZGdldHMuaGl0cyh7XG4gICAgICAgICAgICBjb250YWluZXI6ICcjaGl0cycsXG4gICAgICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICAgICAgICBlbXB0eTogJ05vIFJlc3VsdHMgZm91bmQnLFxuICAgICAgICAgICAgICAgIGl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtkb3duID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC10aXRsZVwiPiR7aXRlbS5faGlnaGxpZ2h0UmVzdWx0Lm5hbWUudmFsdWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWRldGFpbHNcIj4ke2l0ZW0uX2hpZ2hsaWdodFJlc3VsdC5kZXRhaWxzLnZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1wcmljZVwiPiQkeyhpdGVtLnByaWNlIC8gMTAwKS50b0ZpeGVkKDIpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2Rvd24gKz0gYDxpbWcgc3JjPVwiJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9zdG9yYWdlLyR7aXRlbS5pbWFnZX1cIiBhbHQ9XCJpbWdcIiBjbGFzcz1cImFsZ29saWEtdGh1bWItcmVzdWx0XCIvPmA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFya2Rvd247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgcGFnaW5hdGlvbjogaW5zdGFudHNlYXJjaC53aWRnZXRzLnBhZ2luYXRpb24oe1xuICAgICAgICAgICAgY29udGFpbmVyOiAnI3BhZ2luYXRpb24nLFxuICAgICAgICB9KSxcbiAgICAgICAgc3RhdHM6IGluc3RhbnRzZWFyY2gud2lkZ2V0cy5zdGF0cyh7XG4gICAgICAgICAgICBjb250YWluZXI6ICcjc3RhdHMnLFxuICAgICAgICB9KSxcbiAgICAgICAgcmVmaW5lbWVudExpc3Q6IGluc3RhbnRzZWFyY2gud2lkZ2V0cy5yZWZpbmVtZW50TGlzdCh7XG4gICAgICAgICAgICBjb250YWluZXI6ICcjcmVmaW5lbWVudC1saXN0JyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgc2VhcmNoLmFkZFdpZGdldHMoW3dpZGdldHMuc2VhcmNoQm94LCB3aWRnZXRzLmhpdHMsIHdpZGdldHMucGFnaW5hdGlvbiwgd2lkZ2V0cy5zdGF0c10pO1xuXG4gICAgc2VhcmNoLnN0YXJ0KCk7XG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/algolia-instantsearch.js\n");

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