"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectTodosInput = exports.toggleEdit = exports.clearInput = exports.addInput = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    value: "",
    edit: 0,
};
var TodosInputSlice = toolkit_1.createSlice({
    name: "todosInput",
    initialState: initialState,
    reducers: {
        addInput: function (state, action) {
            return action.payload;
        },
        clearInput: function () {
            return { value: "", edit: 0 };
        },
        toggleEdit: function (state, action) {
            return __assign(__assign({}, state), { edit: action.payload });
        },
    },
});
exports.addInput = (_a = TodosInputSlice.actions, _a.addInput), exports.clearInput = _a.clearInput, exports.toggleEdit = _a.toggleEdit;
// grabs the store abd
var selectTodosInput = function (state) { return state.todosInput; };
exports.selectTodosInput = selectTodosInput;
exports.default = TodosInputSlice.reducer;
