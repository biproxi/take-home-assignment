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
exports.id = "pages/api/get";
exports.ids = ["pages/api/get"];
exports.modules = {

/***/ "./src/database/supabaseInit.ts":
/*!**************************************!*\
  !*** ./src/database/supabaseInit.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);\n/* harmony default export */ __webpack_exports__[\"default\"] = (supabase);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlLWhvbWUtYXNzaWdubWVudC8uL3NyYy9kYXRhYmFzZS9zdXBhYmFzZUluaXQudHM/NmU2OSJdLCJuYW1lcyI6WyJzdXBhYmFzZSIsImNyZWF0ZUNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJTVVBBQkFTRV9VUkwiLCJTVVBBQkFTRV9BTk9OX0tFWSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxNQUFNQSxRQUFRLEdBQUdDLG1FQUFZLENBQzNCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFEZSxFQUUzQkYsT0FBTyxDQUFDQyxHQUFSLENBQVlFLGlCQUZlLENBQTdCO0FBS0EsK0RBQWVMLFFBQWYiLCJmaWxlIjoiLi9zcmMvZGF0YWJhc2Uvc3VwYWJhc2VJbml0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoXG4gIHByb2Nlc3MuZW52LlNVUEFCQVNFX1VSTCxcbiAgcHJvY2Vzcy5lbnYuU1VQQUJBU0VfQU5PTl9LRVlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN1cGFiYXNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/database/supabaseInit.ts\n");

/***/ }),

/***/ "./src/pages/api/get.ts":
/*!******************************!*\
  !*** ./src/pages/api/get.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _database_supabaseInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/supabaseInit */ \"./src/database/supabaseInit.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  try {\n    const {\n      data\n    } = await _database_supabaseInit__WEBPACK_IMPORTED_MODULE_0__.default.from('todos').select('id, title, createdAt, lastUpdatedAt');\n    res.send(data);\n  } catch (err) {\n    console.log(err);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlLWhvbWUtYXNzaWdubWVudC8uL3NyYy9wYWdlcy9hcGkvZ2V0LnRzPzU3ZTciXSwibmFtZXMiOlsicmVxIiwicmVzIiwiZGF0YSIsInN1cGFiYXNlIiwic2VsZWN0Iiwic2VuZCIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFHQSwrREFBZSxPQUFPQSxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUNsRSxNQUFJO0FBQ0YsVUFBTTtBQUFFQztBQUFGLFFBQVcsTUFBTUMsZ0VBQUEsQ0FDZixPQURlLEVBRXBCQyxNQUZvQixDQUViLHFDQUZhLENBQXZCO0FBR0FILE9BQUcsQ0FBQ0ksSUFBSixDQUFTSCxJQUFUO0FBQ0QsR0FMRCxDQUtFLE9BQU9JLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0YsQ0FURCIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvZ2V0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1cGFiYXNlIGZyb20gJy4uLy4uL2RhdGFiYXNlL3N1cGFiYXNlSW5pdCc7XG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oJ3RvZG9zJylcbiAgICAgIC5zZWxlY3QoJ2lkLCB0aXRsZSwgY3JlYXRlZEF0LCBsYXN0VXBkYXRlZEF0Jyk7XG4gICAgcmVzLnNlbmQoZGF0YSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/get.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/get.ts"));
module.exports = __webpack_exports__;

})();