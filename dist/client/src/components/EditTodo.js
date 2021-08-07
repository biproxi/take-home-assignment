"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditTodo = void 0;
var react_redux_1 = require("react-redux");
var TodoInput_1 = require("store/slices/TodoInput");
var TodosInputEdit_1 = require("store/slices/TodosInputEdit");
var TodosSlice_1 = require("store/slices/TodosSlice");
var styled_components_1 = __importDefault(require("styled-components"));
var StyledInputContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 50px;\n  width: 80%;\n  border-radius: 12px;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n"], ["\n  height: 50px;\n  width: 80%;\n  border-radius: 12px;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n"])));
var StyledInput = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: none;\n  //border: none;\n  margin-left: 12px;\n  flex: 1;\n"], ["\n  background: none;\n  //border: none;\n  margin-left: 12px;\n  flex: 1;\n"])));
var Button = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 8px;\n  background-color: rgb(214, 213, 213);\n  border: none;\n  border-radius: 10px;\n  height: 30px;\n  width: 50px;\n"], ["\n  margin: 8px;\n  background-color: rgb(214, 213, 213);\n  border: none;\n  border-radius: 10px;\n  height: 30px;\n  width: 50px;\n"])));
var EditTodo = function (_a) {
    var createdAt = _a.createdAt, title = _a.title;
    var dispatch = react_redux_1.useDispatch();
    var todosInputEdit = react_redux_1.useSelector(TodosInputEdit_1.selectTodosInputEdit);
    //console.log("======", todosInputEdit.value);
    var handleSave = function () {
        console.log("the value ===", todosInputEdit.value);
        dispatch(TodosSlice_1.edit({
            createdAt: createdAt,
            lastUpdatedAt: Math.floor(Date.now() / 1000),
            title: todosInputEdit.value,
        }));
        dispatch(TodosInputEdit_1.clearEditInput());
        dispatch(TodoInput_1.toggleEdit(0));
        console.log("saved todo");
    };
    return (<StyledInputContainer>
      <StyledInput type='text' value={todosInputEdit.value || title} onChange={function (e) { return dispatch(TodosInputEdit_1.addInput({ value: e.target.value })); }}/>
      <Button onClick={handleSave}>Save</Button>
    </StyledInputContainer>);
};
exports.EditTodo = EditTodo;
var templateObject_1, templateObject_2, templateObject_3;
