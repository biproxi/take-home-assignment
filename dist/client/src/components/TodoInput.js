"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoInput = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_redux_1 = require("react-redux");
var TodosSlice_1 = require("../store/slices/TodosSlice");
var TodoInput_1 = require("store/slices/TodoInput");
var todo_1 = require("types/todo");
var TodoInput_2 = require("store/slices/TodoInput");
var StyledInputContainer = styled_components_1.default.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 50px;\n  width: 80%;\n  border-radius: 12px;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n"], ["\n  height: 50px;\n  width: 80%;\n  border-radius: 12px;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n"])));
var StyledInput = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  margin-left: 12px;\n  flex: 1;\n"], ["\n  background: none;\n  border: none;\n  margin-left: 12px;\n  flex: 1;\n"])));
var Button = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 8px;\n  background-color: rgb(214, 213, 213);\n  border: none;\n  border-radius: 10px;\n  height: 30px;\n  width: 50px;\n"], ["\n  margin: 8px;\n  background-color: rgb(214, 213, 213);\n  border: none;\n  border-radius: 10px;\n  height: 30px;\n  width: 50px;\n"])));
var TodoInput = function () {
    //const [input, setInput] = useState("");
    var todosInput = react_redux_1.useSelector(TodoInput_1.selectTodosInput);
    var dispatch = react_redux_1.useDispatch();
    var addTodo = function () {
        dispatch(TodosSlice_1.create({
            title: todosInput.value,
            status: todo_1.TodoStatusEnum.Active,
            lastUpdatedAt: Math.floor(Date.now() / 1000),
            createdAt: Math.floor(Date.now() / 1000),
        }));
        dispatch(TodoInput_1.clearInput());
    };
    return (<StyledInputContainer onSubmit={function (e) { return e.preventDefault(); }}>
      <StyledInput type='text' value={todosInput.value} onChange={function (e) { return dispatch(TodoInput_2.addInput({ value: e.target.value, edit: 0 })); }}/>
      <Button onClick={addTodo}>Add</Button>
    </StyledInputContainer>);
};
exports.TodoInput = TodoInput;
var templateObject_1, templateObject_2, templateObject_3;
