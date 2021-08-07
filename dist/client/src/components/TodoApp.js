"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoApp = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var TodoInput_1 = require("./TodoInput");
var TodoList_1 = require("./TodoList");
var StyledDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  width: 100vw;\n  background-color: rgb(168, 173, 182);\n  display: grid;\n  place-items: center;\n"], ["\n  height: 100vh;\n  width: 100vw;\n  background-color: rgb(168, 173, 182);\n  display: grid;\n  place-items: center;\n"])));
var StyledContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 900px;\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgb(232, 234, 237);\n  border-radius: 12px;\n  padding: 32px 0;\n"], ["\n  height: 900px;\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgb(232, 234, 237);\n  border-radius: 12px;\n  padding: 32px 0;\n"])));
var StyledTodoContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"], ["\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
var TodoApp = function () {
    return (<StyledDiv>
      <StyledContainer>
        <TodoInput_1.TodoInput />
        <StyledTodoContainer>
          <TodoList_1.TodoList />
        </StyledTodoContainer>
      </StyledContainer>
    </StyledDiv>);
};
exports.TodoApp = TodoApp;
var templateObject_1, templateObject_2, templateObject_3;
