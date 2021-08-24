import axios from "axios";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { setInput, actions } from '../../redux/todoSlice';
import React, { useEffect } from "react";

const ToDoForm = () => {

  const dispatch = useDispatch();
  const formInput = useSelector(setInput);

  const submitTodo = () => {
    axios.post('./api/post', {title: formInput})
    .then((res) => getAll());
  };

  const getInput = (e) => {
    const input = e.target.value;
    dispatch(actions.setInput(input))
  };


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
    <Container style={{paddingBottom: "50px"}}>
      <Row>
        <Col sm="10">
          <Form>
            <Form.Control size="lg" type="text" placeholder="Describe Task" id="formInput" onChange={(e) => getInput(e)}/>
          </Form>
        </Col>
        <Col style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="outline-success"
            type="submit"
            onClick={() => submitTodo()}>
              Add
            </Button>
        </Col>
      </Row>
    </Container>
  )
};

export default ToDoForm;