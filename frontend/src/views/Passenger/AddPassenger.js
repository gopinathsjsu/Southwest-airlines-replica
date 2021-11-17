import * as React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default class AddPassenger extends React.Component {
  constructor() {
    super();
    this.state = {
      passengers: [1],
    };
  }
  render() {
    return (
      <>
        {" "}
        <div
          style={{
            "padding-top": "100px",
            "align-items": "center",
            "justify-content": "center",
          }}
        >
          <Card>
            <Card.Header>Flight Details</Card.Header>
            <Card.Body></Card.Body>
          </Card>
          &nbsp;
          <Card>
            <Card.Header>Add Passenger Details</Card.Header>
            <Card.Body>
              {" "}
              <Form noValidate>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      size="sm"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      size="sm"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Government ID</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      size="sm"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Government ID number</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      size="sm"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Select Seat</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      size="sm"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button type="submit">+ Add Passenger</Button>
              </Form>
            </Card.Body>
          </Card>
          &nbsp;
          <div>
            <Button variant="danger">
              <ChevronLeftIcon />
              Select Flight
            </Button>{" "}
            <Button variant="danger">
              Payment <ChevronRightIcon />
            </Button>{" "}
          </div>
        </div>
      </>
    );
  }
}
