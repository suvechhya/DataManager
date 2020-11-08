(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dataManager"] = factory();
	else
		root["dataManager"] = factory();
})(global, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
;

class DataManager {
    constructor(schema = [], data = []) {
        this.schema = schema;
        this.data = data;
    }

    loadData(pathToFile) {
        const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(pathToFile, 'utf8');
        if (data) {
            this.data = JSON.parse(data);
        }
    }

    loadSchema(pathToSchema) {
        const schema = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(pathToSchema, 'utf8');
        if (schema) {
            this.schema = JSON.parse(schema).schema;
        }
    }

    formulateData(schema, data) {
        let finalData = [];
        for (const item of data) {
            const obj = {};
            for (const { name } of schema) {
                obj[name] = item[name];
            }
            finalData.push(obj);
        }
        return finalData;
    }

    show() {
        console.table(this.formulateData(this.schema, this.data));
    }

    select(condition) {
        const filteredData = this.data.filter((item) => eval(`item.${condition}`));
        return new DataManager(this.schema, filteredData);
    }

    project(columns) {
        const schema = this.schema.filter((field) => columns.includes(field.name));
        return new DataManager(schema, this.data);
    }

    groupBy(column) {
        const columnsRequired = this.schema.filter((col) => col.type === 'measure' || col.name === column);
        const filteredData = this.formulateData(columnsRequired, this.data);
        const groupedData = Array.from(
            filteredData.reduce((m, o) => {
                var temp = m.get(o[column]);
                if (!temp) {
                    m.set(o[column], temp = {});
                }
                Object.entries(o).forEach(([k, v]) => {
                    if (k === column) {
                        return;
                    }
                    temp[k] = temp[k] || { sum: 0, count: 0 };
                    temp[k].sum += v;
                    temp[k].count++;
                });
                return m;
            }, new Map),
            ([k, v]) => Object.assign({ [column]: k }, ...Object.entries(v).map(([l, { sum, count }]) => ({ [l]: +(sum / count).toFixed(1) })))
        );
        return new DataManager(columnsRequired, groupedData);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataManager);

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("fs");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./app/main.js");
/******/ })()
;
});
//# sourceMappingURL=main.js.map