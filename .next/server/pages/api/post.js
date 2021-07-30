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
exports.id = "pages/api/post";
exports.ids = ["pages/api/post"];
exports.modules = {

/***/ "./src/database/supabaseInit.ts":
/*!**************************************!*\
  !*** ./src/database/supabaseInit.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);\n/* harmony default export */ __webpack_exports__[\"default\"] = (supabase);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlLWhvbWUtYXNzaWdubWVudC8uL3NyYy9kYXRhYmFzZS9zdXBhYmFzZUluaXQudHM/NmU2OSJdLCJuYW1lcyI6WyJzdXBhYmFzZSIsImNyZWF0ZUNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJTVVBBQkFTRV9VUkwiLCJTVVBBQkFTRV9BTk9OX0tFWSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxNQUFNQSxRQUFRLEdBQUdDLG1FQUFZLENBQzNCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFEZSxFQUUzQkYsT0FBTyxDQUFDQyxHQUFSLENBQVlFLGlCQUZlLENBQTdCO0FBS0EsK0RBQWVMLFFBQWYiLCJmaWxlIjoiLi9zcmMvZGF0YWJhc2Uvc3VwYWJhc2VJbml0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoXG4gIHByb2Nlc3MuZW52LlNVUEFCQVNFX1VSTCxcbiAgcHJvY2Vzcy5lbnYuU1VQQUJBU0VfQU5PTl9LRVlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN1cGFiYXNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/database/supabaseInit.ts\n");

/***/ }),

/***/ "./src/pages/api/post.ts":
/*!*******************************!*\
  !*** ./src/pages/api/post.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _database_supabaseInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/supabaseInit */ \"./src/database/supabaseInit.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  try {\n    const {\n      title\n    } = req.body;\n    const result = await _database_supabaseInit__WEBPACK_IMPORTED_MODULE_0__.default.from('todos').insert([{\n      title: title,\n      createdAt: new Date().getTime(),\n      lastUpdatedAt: new Date().getTime(),\n      status: 'Active'\n    }]);\n    const todo = result.data[0];\n    res.send({\n      todo\n    });\n  } catch (err) {\n    console.log(err);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlLWhvbWUtYXNzaWdubWVudC8uL3NyYy9wYWdlcy9hcGkvcG9zdC50cz80YjdiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsInRpdGxlIiwiYm9keSIsInJlc3VsdCIsInN1cGFiYXNlIiwiaW5zZXJ0IiwiY3JlYXRlZEF0IiwiRGF0ZSIsImdldFRpbWUiLCJsYXN0VXBkYXRlZEF0Iiwic3RhdHVzIiwidG9kbyIsImRhdGEiLCJzZW5kIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUdBLCtEQUFlLE9BQU9BLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLE1BQUk7QUFDRixVQUFNO0FBQUVDO0FBQUYsUUFBWUYsR0FBRyxDQUFDRyxJQUF0QjtBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNQyxnRUFBQSxDQUFjLE9BQWQsRUFBdUJDLE1BQXZCLENBQThCLENBQ2pEO0FBQ0VKLFdBQUssRUFBRUEsS0FEVDtBQUVFSyxlQUFTLEVBQUUsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBRmI7QUFHRUMsbUJBQWEsRUFBRSxJQUFJRixJQUFKLEdBQVdDLE9BQVgsRUFIakI7QUFJRUUsWUFBTSxFQUFFO0FBSlYsS0FEaUQsQ0FBOUIsQ0FBckI7QUFRQSxVQUFNQyxJQUFJLEdBQUdSLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZLENBQVosQ0FBYjtBQUNBWixPQUFHLENBQUNhLElBQUosQ0FBUztBQUFFRjtBQUFGLEtBQVQ7QUFDRCxHQVpELENBWUUsT0FBT0csR0FBUCxFQUFZO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFDRixDQWhCRCIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvcG9zdC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdXBhYmFzZSBmcm9tICcuLi8uLi9kYXRhYmFzZS9zdXBhYmFzZUluaXQnO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdGl0bGUgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ3RvZG9zJykuaW5zZXJ0KFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICBsYXN0VXBkYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgc3RhdHVzOiAnQWN0aXZlJ1xuICAgICAgfVxuICAgIF0pO1xuICAgIGNvbnN0IHRvZG8gPSByZXN1bHQuZGF0YVswXTtcbiAgICByZXMuc2VuZCh7IHRvZG8gfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/post.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/post.ts"));
module.exports = __webpack_exports__;

})();