import type { NextPage } from 'next'
import Head from 'next/head'
import {ArchivedList} from "../components/ArchivedList/ArchivedList";

const Archived: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Archived List</title>
        <meta name="description" content="Biproxi take home assignment" />
      </Head>

      <main>
            <ArchivedList />
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Archived
