"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectTodosInputEdit = exports.clearEditInput = exports.addInput = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    value: "",
};
var TodosInputEditSlice = toolkit_1.createSlice({
    name: "todosInputEdit",
    initialState: initialState,
    reducers: {
        addInput: function (state, action) {
            return action.payload;
        },
        clearEditInput: function () {
            return { value: "", edit: 0 };
        },
    },
});
exports.addInput = (_a = TodosInputEditSlice.actions, _a.addInput), exports.clearEditInput = _a.clearEditInput;
// grabs the store abd
var selectTodosInputEdit = function (state) { return state.todosInputEdit; };
exports.selectTodosInputEdit = selectTodosInputEdit;
exports.default = TodosInputEditSlice.reducer;
