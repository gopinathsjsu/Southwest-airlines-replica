import * as React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Redirect } from "react-router";

export default class AddPassenger extends React.Component {
  constructor() {
    super();
    this.state = {
      passengers: [{firstName: "", lastName: "", govtId: "", govtIdNum: ""}],
      flightDetails: '',
      redirectFlag: '',
    };
  }

  componentDidMount() {
    const flight = JSON.parse(localStorage.getItem('flight'));
    this.setState({ flightDetails : flight});
  }

  handleChange(i, e) {
    let passengers = this.state.passengers;
    console.log(passengers);
    passengers[i][e.target.name] = e.target.value;
    this.setState({ passengers });
  }

  addFormFields() {
    this.setState(({
      passengers: [...this.state.passengers, { firstName: "", lastName: "", govtId: "", govtIdNum: "" }]
    }))
  }

  removeFormFields(i) {
    let passengers = this.state.passengers;
    passengers.splice(i, 1);
    this.setState({ passengers });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('passengers', JSON.stringify(this.state.passengers));
    this.setState({ redirectFlag: true });
  }

  render() {
    const { flightDetails, redirectFlag} = this.state;
    let redirectVar = null;
     if (redirectFlag) {
       redirectVar = <Redirect to="/bookingpayment" />;
     }
    return (
      <>
      {redirectVar}
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
            <Card.Body>
              <Row>
                <Col>
                Flight Name:{' '}<b>{flightDetails.flightName}</b>
                </Col>
                <Col>
                Number of stops:{' '}<b>{flightDetails.stops}</b>
                </Col>
                <Col>
                Duration:{' '}<b>{flightDetails.duration}</b>
                </Col>
              </Row>
              <Row>
                <Col>
                Departure Date:{' '}<b>{new Date(flightDetails.departureTime).toLocaleString()}</b>
                </Col>
                <Col>
                Arrival Date:{' '}<b>{new Date(flightDetails.arrivalTime).toLocaleString()}</b>
                </Col>
                <Col>
                Price:{' $'}<b>{flightDetails.price}</b>
                </Col>
              </Row>
              </Card.Body>
          </Card>
          &nbsp;
          <Card>
            <Card.Header>Add Passenger Details</Card.Header>
            <Card.Body>
              {" "}
              <Form>
              {this.state.passengers.map((element, index) => (
                <div key={index}>
                <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      name="firstName" value={element.firstName || ""} onChange={e => this.handleChange(index, e)}
                      required
                      type="text"
                      placeholder="First name"
                      size="sm"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      name="lastName" value={element.lastName || ""} onChange={e => this.handleChange(index, e)}
                      required
                      type="text"
                      placeholder="Last name"
                      size="sm"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Government ID</Form.Label>
                    <Form.Control
                      name="govtId" value={element.govtId || ""} onChange={e => this.handleChange(index, e)}
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
                      name="govtIdNum" value={element.govtIdNum || ""} onChange={e => this.handleChange(index, e)}
                      required
                      type="text"
                      placeholder="First name"
                      size="sm"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                    {
                index ?
                <Col>
                  <Button onClick={() => this.removeFormFields(index)}>Remove passenger</Button> 
                </Col> 
                : null
              }
                </Row>
                </div>
              ))}
                <Button onClick={() => this.addFormFields()}>+ Add Passenger</Button>
                </Form>
            </Card.Body>
          </Card>
          &nbsp;
          <Form>
          <div>
            <Button variant="danger">
              <ChevronLeftIcon />
              Select Flight
            </Button>{" "}
            <Button variant="danger" type="submit" onClick={this.handleSubmit}>
              Payment <ChevronRightIcon />
            </Button>{" "}
          </div>
          </Form>
        </div>
      </>
    );
  }
}
