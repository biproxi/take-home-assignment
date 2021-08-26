import React from 'react';
import List from "./components/List";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import {BrowserRouter as Router, Route} from "react-router-dom";

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
