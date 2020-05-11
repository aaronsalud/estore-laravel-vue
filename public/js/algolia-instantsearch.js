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

eval("(function () {\n  var searchClient = algoliasearch('D1UAWETDYG', '58c046b56e1f77dfa82c4fe2b11f8160');\n  var search = instantsearch({\n    indexName: 'products',\n    searchClient: searchClient\n  });\n  var widgets = {\n    searchBox: instantsearch.widgets.searchBox({\n      container: '#search-box',\n      placeholder: 'Search for Products'\n    }),\n    hits: instantsearch.widgets.hits({\n      container: '#hits',\n      templates: {\n        empty: 'No Results found',\n        item: function item(_item) {\n          console.log(_item);\n          var markdown = \"\\n                        <div class=\\\"result-title\\\">\".concat(_item._highlightResult.name.value, \"</div>\\n                        <div class=\\\"result-details\\\">\").concat(_item._highlightResult.details.value, \"</div>\\n                        <div class=\\\"result-price\\\">$\").concat((_item.price / 100).toFixed(2), \"</div>\\n                    \");\n\n          if (_item.image) {\n            markdown += \"<img src=\\\"\".concat(window.location.origin, \"/storage/\").concat(_item.image, \"\\\" alt=\\\"img\\\" class=\\\"algolia-thumb-result\\\"/>\");\n          }\n\n          return markdown;\n        }\n      }\n    }),\n    pagination: instantsearch.widgets.pagination({\n      container: '#pagination'\n    }),\n    stats: instantsearch.widgets.stats({\n      container: '#stats'\n    })\n  };\n  search.addWidgets([widgets.searchBox, widgets.hits, widgets.pagination, widgets.stats]);\n  search.start();\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWxnb2xpYS1pbnN0YW50c2VhcmNoLmpzPzE4ZDkiXSwibmFtZXMiOlsic2VhcmNoQ2xpZW50IiwiYWxnb2xpYXNlYXJjaCIsInNlYXJjaCIsImluc3RhbnRzZWFyY2giLCJpbmRleE5hbWUiLCJ3aWRnZXRzIiwic2VhcmNoQm94IiwiY29udGFpbmVyIiwicGxhY2Vob2xkZXIiLCJoaXRzIiwidGVtcGxhdGVzIiwiZW1wdHkiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsIm1hcmtkb3duIiwiX2hpZ2hsaWdodFJlc3VsdCIsIm5hbWUiLCJ2YWx1ZSIsImRldGFpbHMiLCJwcmljZSIsInRvRml4ZWQiLCJpbWFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwicGFnaW5hdGlvbiIsInN0YXRzIiwiYWRkV2lkZ2V0cyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFDLFlBQVc7QUFDUixNQUFNQSxZQUFZLEdBQUdDLGFBQWEsQ0FBQyxZQUFELEVBQWUsa0NBQWYsQ0FBbEM7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLGFBQWEsQ0FBQztBQUN6QkMsYUFBUyxFQUFFLFVBRGM7QUFFekJKLGdCQUFZLEVBQVpBO0FBRnlCLEdBQUQsQ0FBNUI7QUFLQSxNQUFNSyxPQUFPLEdBQUc7QUFDWkMsYUFBUyxFQUFFSCxhQUFhLENBQUNFLE9BQWQsQ0FBc0JDLFNBQXRCLENBQWdDO0FBQ3ZDQyxlQUFTLEVBQUUsYUFENEI7QUFFdkNDLGlCQUFXLEVBQUU7QUFGMEIsS0FBaEMsQ0FEQztBQUtaQyxRQUFJLEVBQUVOLGFBQWEsQ0FBQ0UsT0FBZCxDQUFzQkksSUFBdEIsQ0FBMkI7QUFDN0JGLGVBQVMsRUFBRSxPQURrQjtBQUU3QkcsZUFBUyxFQUFFO0FBQ1BDLGFBQUssRUFBRSxrQkFEQTtBQUVQQyxZQUFJLEVBQUUsY0FBU0EsS0FBVCxFQUFlO0FBQ2pCQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxjQUFJRyxRQUFRLG1FQUNvQkgsS0FBSSxDQUFDSSxnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkJDLEtBRC9DLDJFQUVzQk4sS0FBSSxDQUFDSSxnQkFBTCxDQUFzQkcsT0FBdEIsQ0FBOEJELEtBRnBELDBFQUdxQixDQUFDTixLQUFJLENBQUNRLEtBQUwsR0FBYSxHQUFkLEVBQW1CQyxPQUFuQixDQUEyQixDQUEzQixDQUhyQixpQ0FBWjs7QUFLQSxjQUFJVCxLQUFJLENBQUNVLEtBQVQsRUFBZ0I7QUFDWlAsb0JBQVEseUJBQWlCUSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWpDLHNCQUFtRGIsS0FBSSxDQUFDVSxLQUF4RCxvREFBUjtBQUNIOztBQUVELGlCQUFPUCxRQUFQO0FBQ0g7QUFkTTtBQUZrQixLQUEzQixDQUxNO0FBd0JaVyxjQUFVLEVBQUV2QixhQUFhLENBQUNFLE9BQWQsQ0FBc0JxQixVQUF0QixDQUFpQztBQUN6Q25CLGVBQVMsRUFBRTtBQUQ4QixLQUFqQyxDQXhCQTtBQTJCWm9CLFNBQUssRUFBRXhCLGFBQWEsQ0FBQ0UsT0FBZCxDQUFzQnNCLEtBQXRCLENBQTRCO0FBQy9CcEIsZUFBUyxFQUFFO0FBRG9CLEtBQTVCO0FBM0JLLEdBQWhCO0FBZ0NBTCxRQUFNLENBQUMwQixVQUFQLENBQWtCLENBQUN2QixPQUFPLENBQUNDLFNBQVQsRUFBb0JELE9BQU8sQ0FBQ0ksSUFBNUIsRUFBa0NKLE9BQU8sQ0FBQ3FCLFVBQTFDLEVBQXNEckIsT0FBTyxDQUFDc0IsS0FBOUQsQ0FBbEI7QUFFQXpCLFFBQU0sQ0FBQzJCLEtBQVA7QUFDSCxDQTNDRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9hbGdvbGlhLWluc3RhbnRzZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VhcmNoQ2xpZW50ID0gYWxnb2xpYXNlYXJjaCgnRDFVQVdFVERZRycsICc1OGMwNDZiNTZlMWY3N2RmYTgyYzRmZTJiMTFmODE2MCcpO1xuXG4gICAgY29uc3Qgc2VhcmNoID0gaW5zdGFudHNlYXJjaCh7XG4gICAgICAgIGluZGV4TmFtZTogJ3Byb2R1Y3RzJyxcbiAgICAgICAgc2VhcmNoQ2xpZW50XG4gICAgfSk7XG5cbiAgICBjb25zdCB3aWRnZXRzID0ge1xuICAgICAgICBzZWFyY2hCb3g6IGluc3RhbnRzZWFyY2gud2lkZ2V0cy5zZWFyY2hCb3goe1xuICAgICAgICAgICAgY29udGFpbmVyOiAnI3NlYXJjaC1ib3gnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggZm9yIFByb2R1Y3RzJ1xuICAgICAgICB9KSxcbiAgICAgICAgaGl0czogaW5zdGFudHNlYXJjaC53aWRnZXRzLmhpdHMoe1xuICAgICAgICAgICAgY29udGFpbmVyOiAnI2hpdHMnLFxuICAgICAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgICAgICAgZW1wdHk6ICdObyBSZXN1bHRzIGZvdW5kJyxcbiAgICAgICAgICAgICAgICBpdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2Rvd24gPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LXRpdGxlXCI+JHtpdGVtLl9oaWdobGlnaHRSZXN1bHQubmFtZS52YWx1ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtZGV0YWlsc1wiPiR7aXRlbS5faGlnaGxpZ2h0UmVzdWx0LmRldGFpbHMudmFsdWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LXByaWNlXCI+JCR7KGl0ZW0ucHJpY2UgLyAxMDApLnRvRml4ZWQoMil9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZG93biArPSBgPGltZyBzcmM9XCIke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3N0b3JhZ2UvJHtpdGVtLmltYWdlfVwiIGFsdD1cImltZ1wiIGNsYXNzPVwiYWxnb2xpYS10aHVtYi1yZXN1bHRcIi8+YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXJrZG93bjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBwYWdpbmF0aW9uOiBpbnN0YW50c2VhcmNoLndpZGdldHMucGFnaW5hdGlvbih7XG4gICAgICAgICAgICBjb250YWluZXI6ICcjcGFnaW5hdGlvbicsXG4gICAgICAgIH0pLFxuICAgICAgICBzdGF0czogaW5zdGFudHNlYXJjaC53aWRnZXRzLnN0YXRzKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJyNzdGF0cycsXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIHNlYXJjaC5hZGRXaWRnZXRzKFt3aWRnZXRzLnNlYXJjaEJveCwgd2lkZ2V0cy5oaXRzLCB3aWRnZXRzLnBhZ2luYXRpb24sIHdpZGdldHMuc3RhdHNdKTtcblxuICAgIHNlYXJjaC5zdGFydCgpO1xufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/algolia-instantsearch.js\n");

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