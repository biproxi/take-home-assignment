import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import Item from './components/Item';
import Form from './components/Form';
import { actions, Todo, allTodos } from '../redux/todoSlice';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {

  const dispatch = useDispatch();

  const todos = useSelector(allTodos);

  type NewType = Promise<void>;

  function getAll(): NewType {
    axios.get('/api/get')
      .then((response) => {
        const todos: Todo[] = response.data;
        dispatch(actions.saveTodo(todos))
      }
      )
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Container style={{ backgroundImage: "url(https://lz12v4f1p8c1cumxnbiqvm10-wpengine.netdna-ssl.com/wp-content/uploads/2015/11/hazemaster-gray-gradient-ui-background.jpg)", backgroundSize: "cover", height: "100vh"}}>
      <Row>
        <Col style={{ display: "flex", justifyContent: "center", paddingBottom: "50px" }}>
          <h2>To-Do</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form />
        </Col>
      </Row>
      <Row style={{paddingBottom: "50px"}}>
        {todos.data ?
        todos.data.map((todo: { id: React.Key | null | undefined; }) => {
          return(
            <Item todo={todo} id={todo.id} key={todo.id}/>
          )
        })
      : null}
      </Row>
    </Container>
  );
}
