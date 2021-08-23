import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import Item from './components/Item';
import Form from './components/Form';

export default function Home() {
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
