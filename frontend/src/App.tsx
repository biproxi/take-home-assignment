import React from 'react';
import Table from "./components/Table";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import ArchivedTodos from "./components/ArchivedTodos";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
      <Router>
          <Route exact path='/' component={Table} />
          <Route exact path='/create' component={CreateTodo} />
          <Route exact path='/edit' component={EditTodo} />
          <Route exact path='/archived' component={ArchivedTodos} />
      </Router>

  );
}

export default App;
