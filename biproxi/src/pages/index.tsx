import type { NextPage } from 'next'
import Head from 'next/head'
import {ToDoList} from "../components/ToDoList/ToDoList";
import {Provider} from "react-redux";
import {store} from "./utils/redux/store";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ToDo List</title>
        <meta name="description" content="Biproxi take home assignment" />
      </Head>

      <main>
          <Provider store={store}>
            <ToDoList todos={null}/>
          </Provider>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
