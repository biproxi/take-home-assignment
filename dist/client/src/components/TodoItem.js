"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_redux_1 = require("react-redux");
var todo_1 = require("types/todo");
var TodosSlice_1 = require("../store/slices/TodosSlice");
var EditTodo_1 = require("./EditTodo");
var TodoInput_1 = require("store/slices/TodoInput");
var react_1 = __importDefault(require("react"));
var StyledParagraph = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  text-decoration: ", ";\n"], ["\n  flex: 1;\n  text-decoration: ", ";\n"])), function (_a) {
    var inActive = _a.inActive;
    return (inActive ? "line-through" : "unset");
});
var StyledContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 80%;\n  background-color: white;\n  margin: 6px 4px;\n  height: 40px;\n  border-radius: 12px;\n"], ["\n  display: flex;\n  align-items: center;\n  width: 80%;\n  background-color: white;\n  margin: 6px 4px;\n  height: 40px;\n  border-radius: 12px;\n"])));
var TodoItem = function (_a) {
    var title = _a.title, status = _a.status, lastUpdatedAt = _a.lastUpdatedAt, createdAt = _a.createdAt;
    var dispatch = react_redux_1.useDispatch();
    var todosInput = react_redux_1.useSelector(TodoInput_1.selectTodosInput);
    var handleCheck = function () {
        dispatch(TodosSlice_1.toggle(createdAt));
    };
    return (<StyledContainer>
      {/* {toggle editTodo here when edit button is clicked} */}
      {todosInput.edit === createdAt ? (<EditTodo_1.EditTodo createdAt={createdAt} title={title}/>) : (<>
          <input type='checkbox' onChange={handleCheck} checked={status === todo_1.TodoStatusEnum.Inactive}/>
          <StyledParagraph inActive={status === todo_1.TodoStatusEnum.Inactive}>
            {title}
          </StyledParagraph>
          <button onClick={function () { return dispatch(TodosSlice_1.remove(createdAt)); }}>Delete</button>
          <button onClick={function () { return dispatch(TodoInput_1.toggleEdit(createdAt)); }}>Edit</button>
        </>)}
    </StyledContainer>);
};
exports.TodoItem = TodoItem;
var templateObject_1, templateObject_2;
