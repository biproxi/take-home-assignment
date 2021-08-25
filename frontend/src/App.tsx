import React from 'react';
import {store} from "./state/store/store";
import Todo from "./components/Todo";

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
    createdAt: 12334545
};

store.dispatch({type: "ADD_TODO", payload: test});

function App() {
  return (
    <>
        {store.getState().todoReducer.map((todo, i) => {
            return <Todo title={todo.title}/>
        })}
    </>
  );
}

export default App;
