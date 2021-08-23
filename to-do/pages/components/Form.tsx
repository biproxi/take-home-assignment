import { Container, Col, Row, Form } from "react-bootstrap";

const ToDoForm = () => {

  return (

    <Form>
       <Form.Control size="lg" type="text" placeholder="Describe Task" />
    </Form>
  )
};

export default ToDoForm;