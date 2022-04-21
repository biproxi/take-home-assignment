import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {ToDoList} from "../components/ToDoList/ToDoList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ToDo List</title>
        <meta name="description" content="Biproxi take home assignment" />
      </Head>

      <main>
        <ToDoList todos={[]} totalCount={0}/>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
