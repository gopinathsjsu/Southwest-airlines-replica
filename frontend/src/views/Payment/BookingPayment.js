import * as React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import AddCard from './AddCard';
import AddBank from './AddBank';
import { Redirect } from "react-router";

export default class BookingPayment extends React.Component {
  constructor() {
    super();
    this.state = {
      flightDetails: '',
      passengers: [],
      paymentDetails: '',
      redirectFlag: false,
      redirectBackFlag: false,
      paymentType: 'Credit Card',
    };
  }

  handleCallback = (paymentData) =>{
    this.setState({paymentDetails: paymentData})
  }

  componentDidMount() {
    const flight = JSON.parse(localStorage.getItem('flight'));
    const passengers = JSON.parse(localStorage.getItem('passengers'));
    this.setState({ flightDetails : flight, passengers: passengers});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('payment', JSON.stringify(this.state.paymentDetails));
    this.setState({ redirectFlag: true });
  }

  handleBack = (e) => {
    e.preventDefault();
    this.setState({ redirectBackFlag: true });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { flightDetails, passengers, redirectFlag, redirectBackFlag, paymentType } = this.state;
    let showCard = false;
    if(paymentType === "Credit Card"){
      showCard = true;
    }else{
      showCard = false;
    }
    let redirectVar = null;
    console.log("redirectFlag"+redirectFlag);
     if (redirectFlag) {
       redirectVar = <Redirect to="/bookingreview" />;
     }
     if (redirectBackFlag) {
      redirectVar = <Redirect to="/addpassenger" />;
    }
    const passengerDetails = passengers.map((pas, index) => (
      <Row>
        
          {index+1}{'.'}
          
          <Col>
          {pas.firstName}
          </Col>
          <Col>
          {pas.lastName}
          </Col>
          <Col>
          {pas.govtId}
          </Col>
          <Col>
          {pas.govtIdNum}
          </Col>
      </Row>
    ));
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
          <Form>
          <Card>
            <Card.Header>Flight Details</Card.Header>
            <Card.Body>
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
            </Card.Body>
          </Card>
          &nbsp;
          <Card>
            <Card.Header>Passenger Details</Card.Header>
            <Card.Body>
              {" "}
              <Row>
              <Col>
                <b>First Name</b>
              </Col>
              <Col>
              <b>Last Name</b>
              </Col>
              <Col>
              <b>Government ID</b>
              </Col>
              <Col>
              <b>Government ID Number</b>
              </Col>
              </Row>
              
              {passengerDetails}
            </Card.Body>
          </Card>
          &nbsp;
          <Card>
            <Card.Header>Payment Details</Card.Header>
            <Card.Body>
              <Form.Check className="mr-sm-2" inline value="Credit Card" defaultChecked="true" label="Credit Card" name="paymentType" type="radio" id="Credit Card" onChange={this.handleChange} />
              <Form.Check className="mr-sm-2" inline value="Bank Account" label="Bank Account" name="paymentType" type="radio" id="Bank Account" onChange={this.handleChange} />
              {showCard && <AddCard parentCallback = {this.handleCallback}/>}
              {!showCard && <AddBank parentCallback = {this.handleCallback}></AddBank>}

            </Card.Body>
          </Card>
          </Form>
          &nbsp;
          <div>
            <Form>
            <Button variant="danger" type="submit" onClick={this.handleBack}>
              <ChevronLeftIcon />
              Edit Passenger
            </Button>{" "}
            <Button variant="danger" type="submit" onClick={this.handleSubmit}>
              Review <ChevronRightIcon />
            </Button>{" "}
            </Form>
          </div>
        </div>
      </>
    );
  }
}
