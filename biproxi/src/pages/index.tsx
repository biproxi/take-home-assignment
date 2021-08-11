import CreateForm from '../components/createForm';
import PostList from '../components/postList';
import Link from 'next/link';
const Home = () => {

  return (
    <div>
      <CreateForm />
      <PostList />
      <Link href = '/archived' passHref>
        <button>Click here to see all archived posts!</button>
      </Link>
    </div>
  )
}

export default Home;