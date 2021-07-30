/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/update";
exports.ids = ["pages/api/update"];
exports.modules = {

/***/ "./src/database/supabaseInit.ts":
/*!**************************************!*\
  !*** ./src/database/supabaseInit.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);\n/* harmony default export */ __webpack_exports__[\"default\"] = (supabase);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlLWhvbWUtYXNzaWdubWVudC8uL3NyYy9kYXRhYmFzZS9zdXBhYmFzZUluaXQudHM/NmU2OSJdLCJuYW1lcyI6WyJzdXBhYmFzZSIsImNyZWF0ZUNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJTVVBBQkFTRV9VUkwiLCJTVVBBQkFTRV9BTk9OX0tFWSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxNQUFNQSxRQUFRLEdBQUdDLG1FQUFZLENBQzNCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFEZSxFQUUzQkYsT0FBTyxDQUFDQyxHQUFSLENBQVlFLGlCQUZlLENBQTdCO0FBS0EsK0RBQWVMLFFBQWYiLCJmaWxlIjoiLi9zcmMvZGF0YWJhc2Uvc3VwYWJhc2VJbml0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoXG4gIHByb2Nlc3MuZW52LlNVUEFCQVNFX1VSTCxcbiAgcHJvY2Vzcy5lbnYuU1VQQUJBU0VfQU5PTl9LRVlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN1cGFiYXNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/database/supabaseInit.ts\n");

/***/ }),

/***/ "./src/pages/api/update.ts":
/*!*********************************!*\
  !*** ./src/pages/api/update.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _database_supabaseInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/supabaseInit */ \"./src/database/supabaseInit.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  try {\n    const {\n      id,\n      update\n    } = req.body;\n    const result = await _database_supabaseInit__WEBPACK_IMPORTED_MODULE_0__.default.from('todos').update({\n      status: update\n    }).match({\n      id: id\n    });\n    const todo = result.data[0];\n    res.send({\n      todo\n    });\n  } catch (err) {\n    console.log(err);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlLWhvbWUtYXNzaWdubWVudC8uL3NyYy9wYWdlcy9hcGkvdXBkYXRlLnRzPzcyNzQiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiaWQiLCJ1cGRhdGUiLCJib2R5IiwicmVzdWx0Iiwic3VwYWJhc2UiLCJzdGF0dXMiLCJtYXRjaCIsInRvZG8iLCJkYXRhIiwic2VuZCIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFHQSwrREFBZSxPQUFPQSxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUNsRSxNQUFJO0FBQ0YsVUFBTTtBQUFFQyxRQUFGO0FBQU1DO0FBQU4sUUFBaUJILEdBQUcsQ0FBQ0ksSUFBM0I7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUMsZ0VBQUEsQ0FDYixPQURhLEVBRWxCSCxNQUZrQixDQUVYO0FBQUVJLFlBQU0sRUFBRUo7QUFBVixLQUZXLEVBR2xCSyxLQUhrQixDQUdaO0FBQUVOLFFBQUUsRUFBRUE7QUFBTixLQUhZLENBQXJCO0FBSUEsVUFBTU8sSUFBSSxHQUFHSixNQUFNLENBQUNLLElBQVAsQ0FBWSxDQUFaLENBQWI7QUFDQVQsT0FBRyxDQUFDVSxJQUFKLENBQVM7QUFBRUY7QUFBRixLQUFUO0FBQ0QsR0FSRCxDQVFFLE9BQU9HLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0YsQ0FaRCIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvdXBkYXRlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1cGFiYXNlIGZyb20gJy4uLy4uL2RhdGFiYXNlL3N1cGFiYXNlSW5pdCc7XG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBpZCwgdXBkYXRlIH0gPSByZXEuYm9keTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oJ3RvZG9zJylcbiAgICAgIC51cGRhdGUoeyBzdGF0dXM6IHVwZGF0ZSB9KVxuICAgICAgLm1hdGNoKHsgaWQ6IGlkIH0pO1xuICAgIGNvbnN0IHRvZG8gPSByZXN1bHQuZGF0YVswXTtcbiAgICByZXMuc2VuZCh7IHRvZG8gfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/update.ts\n");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@supabase/supabase-js");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/update.ts"));
module.exports = __webpack_exports__;

})();