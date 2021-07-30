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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/TodoItem.tsx":
/*!*************************************!*\
  !*** ./src/components/TodoItem.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/nickpapadakis/Desktop/2-Quantitative/repos/take-home-assignment/src/components/TodoItem.tsx\";\n\n\n\nconst Todoitem = ({\n  id,\n  title\n}) => {\n  //   const updateTodo = async () => {\n  //     try {\n  //       const result = await axios.\n  //     }\n  //     catch (err) {\n  //       console.log(err);\n  //     }\n  //   };\n  const deleteTodo = async id => {\n    try {\n      const result = await axios__WEBPACK_IMPORTED_MODULE_2___default().delete(`/api/delete?id=${id}`);\n      console.log(result.data.todo);\n    } catch (err) {\n      console.log(err);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    shadow: \"rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n      children: [id, \" \", title]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n      size: \"sm\",\n      onClick: () => deleteTodo(id),\n      colorScheme: \"blue\",\n      border: \"2px\",\n      children: \"Delete\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todoitem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlLWhvbWUtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL1RvZG9JdGVtLnRzeD81ZmNkIl0sIm5hbWVzIjpbIlRvZG9pdGVtIiwiaWQiLCJ0aXRsZSIsImRlbGV0ZVRvZG8iLCJyZXN1bHQiLCJheGlvcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidG9kbyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQyxJQUFGO0FBQU1DO0FBQU4sQ0FBRCxLQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsUUFBTUMsVUFBVSxHQUFHLE1BQU9GLEVBQVAsSUFBYztBQUMvQixRQUFJO0FBQ0YsWUFBTUcsTUFBcUIsR0FBRyxNQUFNQyxtREFBQSxDQUFjLGtCQUFpQkosRUFBRyxFQUFsQyxDQUFwQztBQUNBSyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBTSxDQUFDSSxJQUFQLENBQVlDLElBQXhCO0FBQ0QsS0FIRCxDQUdFLE9BQU9DLEdBQVAsRUFBWTtBQUNaSixhQUFPLENBQUNDLEdBQVIsQ0FBWUcsR0FBWjtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxzQkFDRSw4REFBQyxpREFBRDtBQUFLLFVBQU0sRUFBQywyTUFBWjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsaUJBQ0dULEVBREgsT0FDUUMsS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSw4REFBQyxvREFBRDtBQUNFLFVBQUksRUFBQyxJQURQO0FBRUUsYUFBTyxFQUFFLE1BQU1DLFVBQVUsQ0FBQ0YsRUFBRCxDQUYzQjtBQUdFLGlCQUFXLEVBQUMsTUFIZDtBQUlFLFlBQU0sRUFBQyxLQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZUQsQ0FuQ0Q7O0FBcUNBLCtEQUFlRCxRQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVG9kb0l0ZW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBheGlvcywgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBUb2RvaXRlbSA9ICh7IGlkLCB0aXRsZSB9KSA9PiB7XG4gIC8vICAgY29uc3QgdXBkYXRlVG9kbyA9IGFzeW5jICgpID0+IHtcbiAgLy8gICAgIHRyeSB7XG4gIC8vICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLlxuXG4gIC8vICAgICB9XG4gIC8vICAgICBjYXRjaCAoZXJyKSB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gIC8vICAgICB9XG4gIC8vICAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogQXhpb3NSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgL2FwaS9kZWxldGU/aWQ9JHtpZH1gKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhLnRvZG8pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHNoYWRvdz1cInJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDFweCAycHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDRweCA4cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDhweCAxNnB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCAxNnB4IDMycHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDMycHggNjRweFwiPlxuICAgICAgPFRleHQ+XG4gICAgICAgIHtpZH0ge3RpdGxlfVxuICAgICAgPC9UZXh0PlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVUb2RvKGlkKX1cbiAgICAgICAgY29sb3JTY2hlbWU9XCJibHVlXCJcbiAgICAgICAgYm9yZGVyPVwiMnB4XCJcbiAgICAgID5cbiAgICAgICAgRGVsZXRlXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9pdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TodoItem.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/reducers/todo-reducer */ \"./src/store/reducers/todo-reducer.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_TodoItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TodoItem */ \"./src/components/TodoItem.tsx\");\n\nvar _jsxFileName = \"/Users/nickpapadakis/Desktop/2-Quantitative/repos/take-home-assignment/src/pages/index.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction Home() {\n  const bg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)('white', 'grey');\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n  const todos = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_store_reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_4__.selectTodos);\n\n  const getTodos = async () => {\n    try {\n      const result = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/get');\n      const todos = result.data;\n      dispatch(_store_reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_4__.actions.setTodos(todos));\n    } catch (err) {\n      console.log(err);\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    getTodos();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n    h: \"100%\",\n    p: \"1rem\",\n    borderRadius: \"8px\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    justifyItems: \"center\",\n    maxW: \"80%\",\n    bg: bg,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n      children: \"Your List\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.SimpleGrid, {\n      w: \"100%\",\n      gap: 1,\n      gridAutoRows: \"1fr\",\n      children: todos.length > 0 && todos.map(todo => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoItem__WEBPACK_IMPORTED_MODULE_6__.default, _objectSpread({}, todo), todo.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 31\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlLWhvbWUtYXNzaWdubWVudC8uL3NyYy9wYWdlcy9pbmRleC50c3g/NDFlMCJdLCJuYW1lcyI6WyJIb21lIiwiYmciLCJ1c2VDb2xvck1vZGVWYWx1ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b2RvcyIsInVzZVNlbGVjdG9yIiwic2VsZWN0VG9kb3MiLCJnZXRUb2RvcyIsInJlc3VsdCIsImF4aW9zIiwiZGF0YSIsImFjdGlvbnMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwibWFwIiwidG9kbyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixRQUFNQyxFQUFFLEdBQUdDLG1FQUFpQixDQUFDLE9BQUQsRUFBVSxNQUFWLENBQTVCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1QjtBQUNBLFFBQU1DLEtBQUssR0FBR0Msd0RBQVcsQ0FBQ0MscUVBQUQsQ0FBekI7O0FBRUEsUUFBTUMsUUFBUSxHQUFHLFlBQTJCO0FBQzFDLFFBQUk7QUFDRixZQUFNQyxNQUFxQixHQUFHLE1BQU1DLGdEQUFBLENBQVUsVUFBVixDQUFwQztBQUNBLFlBQU1MLEtBQWEsR0FBR0ksTUFBTSxDQUFDRSxJQUE3QjtBQUNBUixjQUFRLENBQUNTLDBFQUFBLENBQWlCUCxLQUFqQixDQUFELENBQVI7QUFDRCxLQUpELENBSUUsT0FBT1EsR0FBUCxFQUFZO0FBQ1pDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFDRixHQVJEOztBQVVBRyxrREFBUyxDQUFDLE1BQU07QUFDZFIsWUFBUTtBQUNULEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRSw4REFBQyx1REFBRDtBQUNFLEtBQUMsRUFBQyxNQURKO0FBRUUsS0FBQyxFQUFDLE1BRko7QUFHRSxnQkFBWSxFQUFDLEtBSGY7QUFJRSxrQkFBYyxFQUFDLFFBSmpCO0FBS0UsY0FBVSxFQUFDLFFBTGI7QUFNRSxnQkFBWSxFQUFDLFFBTmY7QUFPRSxRQUFJLEVBQUMsS0FQUDtBQVFFLE1BQUUsRUFBRVAsRUFSTjtBQUFBLDRCQVVFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFXRSw4REFBQyx3REFBRDtBQUFZLE9BQUMsRUFBQyxNQUFkO0FBQXFCLFNBQUcsRUFBRSxDQUExQjtBQUE2QixrQkFBWSxFQUFDLEtBQTFDO0FBQUEsZ0JBQ0dJLEtBQUssQ0FBQ1ksTUFBTixHQUFlLENBQWYsSUFDQ1osS0FBSyxDQUFDYSxHQUFOLENBQVdDLElBQUQsaUJBQVUsOERBQUMseURBQUQsb0JBQTRCQSxJQUE1QixHQUFlQSxJQUFJLENBQUNDLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBcEI7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFNpbXBsZUdyaWQsXG4gIEhlYWRpbmcsXG4gIHVzZUNvbG9yTW9kZVZhbHVlXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgYWN0aW9ucywgc2VsZWN0VG9kb3MsIFRvZG8gfSBmcm9tICcuLi9zdG9yZS9yZWR1Y2Vycy90b2RvLXJlZHVjZXInO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0l0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBiZyA9IHVzZUNvbG9yTW9kZVZhbHVlKCd3aGl0ZScsICdncmV5Jyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgdG9kb3MgPSB1c2VTZWxlY3RvcihzZWxlY3RUb2Rvcyk7XG5cbiAgY29uc3QgZ2V0VG9kb3MgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogQXhpb3NSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9nZXQnKTtcbiAgICAgIGNvbnN0IHRvZG9zOiBUb2RvW10gPSByZXN1bHQuZGF0YTtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuc2V0VG9kb3ModG9kb3MpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VG9kb3MoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lclxuICAgICAgaD1cIjEwMCVcIlxuICAgICAgcD1cIjFyZW1cIlxuICAgICAgYm9yZGVyUmFkaXVzPVwiOHB4XCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAganVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIG1heFc9XCI4MCVcIlxuICAgICAgYmc9e2JnfVxuICAgID5cbiAgICAgIDxIZWFkaW5nPllvdXIgTGlzdDwvSGVhZGluZz5cbiAgICAgIDxTaW1wbGVHcmlkIHc9XCIxMDAlXCIgZ2FwPXsxfSBncmlkQXV0b1Jvd3M9XCIxZnJcIj5cbiAgICAgICAge3RvZG9zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICB0b2Rvcy5tYXAoKHRvZG8pID0+IDxUb2RvSXRlbSBrZXk9e3RvZG8uaWR9IHsuLi50b2RvfSAvPil9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/store/reducers/todo-reducer.ts":
/*!********************************************!*\
  !*** ./src/store/reducers/todo-reducer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectTodos\": function() { return /* binding */ selectTodos; },\n/* harmony export */   \"selectFormInput\": function() { return /* binding */ selectFormInput; },\n/* harmony export */   \"actions\": function() { return /* binding */ actions; },\n/* harmony export */   \"reducer\": function() { return /* binding */ reducer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n //will create 'archived' state that holds archived todos. Will access with selector and will update in client with request to API route that updates database\n//typing\n\n//initial state\nconst initialState = {\n  todos: [],\n  archive: [],\n  formInput: {}\n}; //slice: actions/ reducers, name\n\nconst todosSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'todos',\n  initialState,\n  reducers: {\n    setTodos: (state, action) => {\n      const todos = action.payload;\n      state.todos = todos;\n    },\n    setArchive: (state, action) => {\n      const archive = action.payload;\n      state.archive = archive;\n    },\n    setFormInput: (state, action) => {\n      const formInput = action.payload;\n      state.formInput = formInput;\n    }\n  }\n}); //selectors\n\nconst selectTodos = state => state.todos.todos;\nconst selectFormInput = state => state.formInput; //actions/reducer export\n\nconst actions = todosSlice.actions;\nconst reducer = todosSlice.reducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlLWhvbWUtYXNzaWdubWVudC8uL3NyYy9zdG9yZS9yZWR1Y2Vycy90b2RvLXJlZHVjZXIudHM/NDM2NiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ0b2RvcyIsImFyY2hpdmUiLCJmb3JtSW5wdXQiLCJ0b2Rvc1NsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRUb2RvcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldEFyY2hpdmUiLCJzZXRGb3JtSW5wdXQiLCJzZWxlY3RUb2RvcyIsInNlbGVjdEZvcm1JbnB1dCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Q0FFQTtBQUVBOztBQWNBO0FBQ0EsTUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUUsRUFEWTtBQUVuQkMsU0FBTyxFQUFFLEVBRlU7QUFHbkJDLFdBQVMsRUFBRTtBQUhRLENBQXJCLEMsQ0FNQTs7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLDZEQUFXLENBQUM7QUFDN0JDLE1BQUksRUFBRSxPQUR1QjtBQUU3Qk4sY0FGNkI7QUFHN0JPLFVBQVEsRUFBRTtBQUNSQyxZQUFRLEVBQUUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQTBDO0FBQ2xELFlBQU1ULEtBQUssR0FBR1MsTUFBTSxDQUFDQyxPQUFyQjtBQUNBRixXQUFLLENBQUNSLEtBQU4sR0FBY0EsS0FBZDtBQUNELEtBSk87QUFLUlcsY0FBVSxFQUFFLENBQUNILEtBQUQsRUFBUUMsTUFBUixLQUEwQztBQUNwRCxZQUFNUixPQUFPLEdBQUdRLE1BQU0sQ0FBQ0MsT0FBdkI7QUFDQUYsV0FBSyxDQUFDUCxPQUFOLEdBQWdCQSxPQUFoQjtBQUNELEtBUk87QUFTUlcsZ0JBQVksRUFBRSxDQUFDSixLQUFELEVBQVFDLE1BQVIsS0FBNkM7QUFDekQsWUFBTVAsU0FBUyxHQUFHTyxNQUFNLENBQUNDLE9BQXpCO0FBQ0FGLFdBQUssQ0FBQ04sU0FBTixHQUFrQkEsU0FBbEI7QUFDRDtBQVpPO0FBSG1CLENBQUQsQ0FBOUIsQyxDQW1CQTs7QUFDTyxNQUFNVyxXQUFXLEdBQUlMLEtBQUQsSUFBV0EsS0FBSyxDQUFDUixLQUFOLENBQVlBLEtBQTNDO0FBQ0EsTUFBTWMsZUFBZSxHQUFJTixLQUFELElBQVdBLEtBQUssQ0FBQ04sU0FBekMsQyxDQUVQOztBQUNPLE1BQU1hLE9BQU8sR0FBR1osVUFBVSxDQUFDWSxPQUEzQjtBQUNBLE1BQU1DLE9BQU8sR0FBR2IsVUFBVSxDQUFDYSxPQUEzQiIsImZpbGUiOiIuL3NyYy9zdG9yZS9yZWR1Y2Vycy90b2RvLXJlZHVjZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG4vL3dpbGwgY3JlYXRlICdhcmNoaXZlZCcgc3RhdGUgdGhhdCBob2xkcyBhcmNoaXZlZCB0b2Rvcy4gV2lsbCBhY2Nlc3Mgd2l0aCBzZWxlY3RvciBhbmQgd2lsbCB1cGRhdGUgaW4gY2xpZW50IHdpdGggcmVxdWVzdCB0byBBUEkgcm91dGUgdGhhdCB1cGRhdGVzIGRhdGFiYXNlXG5cbi8vdHlwaW5nXG5leHBvcnQgaW50ZXJmYWNlIFRvZG8ge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nOyAvLyB0aGUgdGl0bGUgb2YgdGhlIHRvZG9cbiAgLy8gbGFzdFVwZGF0ZWRBdDogbnVtYmVyOyAvLyBhIHVuaXggdGltZXN0YW1wIHJlcHJlc2VudGluZyB0aGUgdGltZSB0aGUgdG9kbyB3YXMgbGFzdCB1cGRhdGVkXG4gIC8vIGNyZWF0ZWRBdDogbnVtYmVyOyAvLyBhIHVuaXggdGltZXN0YW1wIHJlcHJlc2VudGluZyB0aGUgdGltZSB0aGUgdG9kbyB3YXMgY3JlYXRlZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1JbnB1dCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIC8vIGxhc3RVcGRhdGVkQXQ6IHN0cmluZztcbiAgLy8gY3JlYXRlZEF0OiBzdHJpbmc7XG59XG5cbi8vaW5pdGlhbCBzdGF0ZVxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0b2RvczogW10sXG4gIGFyY2hpdmU6IFtdLFxuICBmb3JtSW5wdXQ6IHt9XG59O1xuXG4vL3NsaWNlOiBhY3Rpb25zLyByZWR1Y2VycywgbmFtZVxuY29uc3QgdG9kb3NTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3RvZG9zJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldFRvZG9zOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxUb2RvW10+KSA9PiB7XG4gICAgICBjb25zdCB0b2RvcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgc3RhdGUudG9kb3MgPSB0b2RvcztcbiAgICB9LFxuICAgIHNldEFyY2hpdmU6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFRvZG9bXT4pID0+IHtcbiAgICAgIGNvbnN0IGFyY2hpdmUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHN0YXRlLmFyY2hpdmUgPSBhcmNoaXZlO1xuICAgIH0sXG4gICAgc2V0Rm9ybUlucHV0OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxGb3JtSW5wdXQ+KSA9PiB7XG4gICAgICBjb25zdCBmb3JtSW5wdXQgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHN0YXRlLmZvcm1JbnB1dCA9IGZvcm1JbnB1dDtcbiAgICB9XG4gIH1cbn0pO1xuXG4vL3NlbGVjdG9yc1xuZXhwb3J0IGNvbnN0IHNlbGVjdFRvZG9zID0gKHN0YXRlKSA9PiBzdGF0ZS50b2Rvcy50b2RvcztcbmV4cG9ydCBjb25zdCBzZWxlY3RGb3JtSW5wdXQgPSAoc3RhdGUpID0+IHN0YXRlLmZvcm1JbnB1dDtcblxuLy9hY3Rpb25zL3JlZHVjZXIgZXhwb3J0XG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHRvZG9zU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gdG9kb3NTbGljZS5yZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/reducers/todo-reducer.ts\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();