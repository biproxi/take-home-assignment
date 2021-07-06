import { TodoTable, TodoCTAButton } from 'components/todos';
import styled from '@emotion/styled';

const Todos = () => {
  const TodoContainer = styled.div`
    display: grid;
    grid-auto-rows: auto auto;
    grid-row-gap: 32px;
    padding: 32px;
  `;

  const CreateButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 150px;
  `;

  return (
    <TodoContainer>
      <TodoTable />
      <CreateButtonContainer>
        <TodoCTAButton actionToPerform="create" />
      </CreateButtonContainer>
    </TodoContainer>
  );
};

export default Todos;
