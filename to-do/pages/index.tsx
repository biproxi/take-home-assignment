import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import Item from './components/Item';
import Form from './components/Form';
import React, { useEffect } from 'react';

export default function Home() {


  const getAll = () => {
    axios.get('/api/get')
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Container>
      <Row>
        <Col style={{display: "flex", justifyContent: "center", paddingBottom: "50px"}}>
          <h2>To-Do</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form />
        </Col>
      </Row>
      <Row>
        <Item />
      </Row>
    </Container>
  );
}
