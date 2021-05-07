import * as React from "react"
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import { Provider } from 'react-redux';
import store from './store/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <main className='App'>
        <h1>My Todos</h1>
        <TodoAdd />
        <TodoList />
      </main>
    </Provider>
  )
}

export default App
