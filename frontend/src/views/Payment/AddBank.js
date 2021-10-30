import { Form, Button } from "react-bootstrap/";
import * as React from "react";

export default class AddBank extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Bank Name</Form.Label>
            <Form.Control type="email" placeholder="Bank Name" size="sm" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Account Number</Form.Label>
            <Form.Control type="text" placeholder="Account Number" size="sm" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>IFSC Code</Form.Label>
            <Form.Control type="text" placeholder="IFSC Code" size="sm" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>CVV</Form.Label>
            <Form.Control type="password" placeholder="CVV" size="sm" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
