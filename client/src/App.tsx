import * as React from 'react'
import { Provider } from 'react-redux'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import store from './store/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <main className='App'>
        <h1>Biproxi Todo List</h1>
        <TodoAdd />
        <TodoList />
      </main>
    </Provider>
  )
}

export default App
