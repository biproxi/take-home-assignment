import React, { useEffect } from "react";
import axios from 'axios';
import { Container, Col, Row, Dropdown, Button, Form } from "react-bootstrap";
import { setInput, actions, saveTodo} from '../../redux/todoSlice';
import { useSelector, useDispatch } from 'react-redux';

const Item = ({ todo }) => {

  const dispatch = useDispatch();
  const formInput = useSelector(setInput);

  const handleDelete = (e) => {
    axios.delete(`/api/delete/?id=${e.target.id}`)
      .then((res) => getAll())
      .catch((err) => console.log(err))
  }

  const handleEditStatus = (e) => {
    const status = e.target.name;
    const id = e.target.id;
    console.log(status, id)
    axios.put(`/api/edit/`, { status: status, id: id })
      .then((res) => getAll())
      .catch((err) => console.log(err))

  }

  const submitEdit = (e) => {
    axios.post('./api/editTitle', {title: formInput, id: e.target.id})
    .then((res) => getAll())
    .catch((err) => console.log(err))
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
    <Row>
      <Col>
        <h2>{todo.title}</h2>
        <Dropdown style={{ paddingBottom: "20px" }} >
          <Dropdown.Toggle size="sm" variant="outline-dark" id="dropdown-basic">
            {todo.status}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              id={todo.id}
              name="Active"
              onClick={(e) => handleEditStatus(e)}
            >Active</Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              id={todo.id}
              name="Inactive"
              onClick={(e) => handleEditStatus(e)}>Inactive</Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              id={todo.id}
              name="Archived"
              onClick={(e) => handleEditStatus(e)}>Archived</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button size="sm" variant="outline-danger" id={todo.id} onClick={(e) => handleDelete(e)}>
          Delete
        </Button>
        <Button size="sm" variant="outline-dark" id={todo.id} onClick={(e) => submitEdit(e)}>
          Edit
        </Button>
        <Col sm="1">
          <Form>
            <Form.Control size="sm" type="text" placeholder="Edit Task" id="formInput" onChange={(e) => getInput(e)} />
          </Form>
        </Col>
        <p style={{ display: "flex", justifyContent: "flex-end" }}>Created At: {todo.createdAt}</p>
        <p style={{ display: "flex", justifyContent: "flex-end" }}>Last Updated: {todo.lastUpdated}</p>
      </Col>
      <hr></hr>
    </Row>
  );
}

export default Item;