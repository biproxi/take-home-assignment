import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {ToDoList} from "../components/ToDoList/ToDoList";

const Home: NextPage = (pageprops) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDo List</title>
        <meta name="description" content="Biproxi take home assignment" />
      </Head>

      <main className={styles.main}>
        <ToDoList {...pageprops}/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
