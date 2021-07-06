import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from './style/global'
import TodoList from "./features/todo/TodoList";
import TodoForm from "./features/todo/TodoForm";
import Header from "./features/layout/Header";
import TodoArchiveList from "./features/todo/TodoArchiveList";
import { StyledTodoWrapper } from './style/wrapper';


const App = () => {
    return (
        <>
            <GlobalStyle/>
            <StyledTodoWrapper>
                <Router>
                    <Header/>
                    <main>
                        <Switch>
                            <Route exact path="/">
                                <TodoForm/>
                                <TodoList/>
                            </Route>
                            <Route path="/archived">
                                <TodoArchiveList/>
                            </Route>

                        </Switch>
                    </main>
                </Router>
            </StyledTodoWrapper>
        </>
    );
}

export default App;
