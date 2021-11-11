import Card from "react-bootstrap/Card";
import * as React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default class Login extends React.Component {
  render() {
    return (
      <div
        style={{
          "padding-top": "100px",
          "align-items": "center",
          "justify-content": "center",
        }}
      >
        {" "}
        <Card
          style={{
            "align-items": "center",
            "justify-content": "center",
          }}
        >
          <Card.Body>
            <Form>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: "16px" }}>
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  size="sm"
                />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label style={{ fontSize: "16px" }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  size="sm"
                />
              </Form.Group>

              <Button variant="primary" type="submit" size="sm">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
