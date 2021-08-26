import React from 'react';
import {store} from "./state/store/store";
import List from "./components/List";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import {BrowserRouter as Router, Route} from "react-router-dom";

let time = Date.now() / 1000;

// Driver code
enum TodoStatusEnum {
    Active = 'Active',
    Inactive = 'Inactive',
    Archived = 'Archived',
}
const test = {
    title: "Take out the trash",
    status: TodoStatusEnum.Active,
    lastUpdatedAt: 12345,
    createdAt: time
};

const test2 = {
    title: "Move out",
    status: TodoStatusEnum.Active,
    lastUpdatedAt: 12345,
    createdAt: time
};

const test3 = {
    title: "Get a job",
    status: TodoStatusEnum.Active,
    lastUpdatedAt: 12345,
    createdAt: time
};

store.dispatch({type: "ADD_TODO", payload: test});
store.dispatch({type: "ADD_TODO", payload: test2});
store.dispatch({type: "ADD_TODO", payload: test3});


function App() {
  return (
      <Router>
          <Route exact path='/' component={List} />
          <Route exact path='/create' component={CreateTodo} />
          <Route exact path='/edit' component={EditTodo} />
      </Router>

  );
}

export default App;
