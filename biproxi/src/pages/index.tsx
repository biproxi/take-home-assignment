import CreateForm from '../components/createForm';
import TodoList from '../components/todoList';
import Link from 'next/link';
import styled from 'styled-components';

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {

  return (
    <div>
      <TopContainer>
        <CreateForm />
        <Link href = '/archived' passHref>
          <button>Click here to see all archived posts!</button>
        </Link>
      </TopContainer>
      <TodoList />
    </div>
  )
}

export default Home;