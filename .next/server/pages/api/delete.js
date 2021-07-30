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
exports.id = "pages/api/delete";
exports.ids = ["pages/api/delete"];
exports.modules = {

/***/ "./src/database/supabaseInit.ts":
/*!**************************************!*\
  !*** ./src/database/supabaseInit.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);\n/* harmony default export */ __webpack_exports__[\"default\"] = (supabase);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlLWhvbWUtYXNzaWdubWVudC8uL3NyYy9kYXRhYmFzZS9zdXBhYmFzZUluaXQudHM/NmU2OSJdLCJuYW1lcyI6WyJzdXBhYmFzZSIsImNyZWF0ZUNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJTVVBBQkFTRV9VUkwiLCJTVVBBQkFTRV9BTk9OX0tFWSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxNQUFNQSxRQUFRLEdBQUdDLG1FQUFZLENBQzNCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFEZSxFQUUzQkYsT0FBTyxDQUFDQyxHQUFSLENBQVlFLGlCQUZlLENBQTdCO0FBS0EsK0RBQWVMLFFBQWYiLCJmaWxlIjoiLi9zcmMvZGF0YWJhc2Uvc3VwYWJhc2VJbml0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoXG4gIHByb2Nlc3MuZW52LlNVUEFCQVNFX1VSTCxcbiAgcHJvY2Vzcy5lbnYuU1VQQUJBU0VfQU5PTl9LRVlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN1cGFiYXNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/database/supabaseInit.ts\n");

/***/ }),

/***/ "./src/pages/api/delete.ts":
/*!*********************************!*\
  !*** ./src/pages/api/delete.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _database_supabaseInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/supabaseInit */ \"./src/database/supabaseInit.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  try {\n    console.log(req.query.id);\n    const result = await _database_supabaseInit__WEBPACK_IMPORTED_MODULE_0__.default.from('todos').delete().match({\n      id: req.query.id\n    });\n    const todo = result.data[0];\n    res.send({\n      todo\n    });\n  } catch (err) {\n    console.log(err);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlLWhvbWUtYXNzaWdubWVudC8uL3NyYy9wYWdlcy9hcGkvZGVsZXRlLnRzPzlkZmYiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiaWQiLCJyZXN1bHQiLCJzdXBhYmFzZSIsImRlbGV0ZSIsIm1hdGNoIiwidG9kbyIsImRhdGEiLCJzZW5kIiwiZXJyIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBR0EsK0RBQWUsT0FBT0EsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDbEUsTUFBSTtBQUNGQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBRyxDQUFDSSxLQUFKLENBQVVDLEVBQXRCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLGdFQUFBLENBQ2IsT0FEYSxFQUVsQkMsTUFGa0IsR0FHbEJDLEtBSGtCLENBR1o7QUFBRUosUUFBRSxFQUFFTCxHQUFHLENBQUNJLEtBQUosQ0FBVUM7QUFBaEIsS0FIWSxDQUFyQjtBQUlBLFVBQU1LLElBQUksR0FBR0osTUFBTSxDQUFDSyxJQUFQLENBQVksQ0FBWixDQUFiO0FBQ0FWLE9BQUcsQ0FBQ1csSUFBSixDQUFTO0FBQUVGO0FBQUYsS0FBVDtBQUNELEdBUkQsQ0FRRSxPQUFPRyxHQUFQLEVBQVk7QUFDWlgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRDtBQUNGLENBWkQiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2RlbGV0ZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdXBhYmFzZSBmcm9tICcuLi8uLi9kYXRhYmFzZS9zdXBhYmFzZUluaXQnO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKHJlcS5xdWVyeS5pZCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCd0b2RvcycpXG4gICAgICAuZGVsZXRlKClcbiAgICAgIC5tYXRjaCh7IGlkOiByZXEucXVlcnkuaWQgfSk7XG4gICAgY29uc3QgdG9kbyA9IHJlc3VsdC5kYXRhWzBdO1xuICAgIHJlcy5zZW5kKHsgdG9kbyB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/delete.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/delete.ts"));
module.exports = __webpack_exports__;

})();