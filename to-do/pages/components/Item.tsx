import React from "react";
import { Container, Col, Row, Dropdown } from "react-bootstrap";


const Item = ({ todo }) => {
  console.log('props', todo)
  return (
    <Row>
      <Col>
        <h2>{todo.title}</h2>
        <Dropdown >
          <Dropdown.Toggle size="sm" variant="success" id="dropdown-basic">
            {todo.status}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Inactive</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Archived</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <p style={{display: "flex", justifyContent: "flex-end"}}>Created At: {todo.createdAt}</p>
        <p style={{display: "flex", justifyContent: "flex-end"}}>Last Updated: {todo.lastUpdated}</p>
      </Col>
      <hr></hr>
    </Row>
  );
}

export default Item;