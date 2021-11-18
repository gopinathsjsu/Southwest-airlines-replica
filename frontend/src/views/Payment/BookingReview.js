import * as React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Redirect } from "react-router";
import axios from 'axios';
import backendServer from '../../webConfig';

export default class BookingReview extends React.Component {
  constructor() {
    super();
    this.state = {
      flightDetails: '',
      passengers: [],
      paymentDetails: '',
      redirectBackFlag: false,
      bookingConfirm: '',
      errorMsg: ''
    };
  }

  componentDidMount() {
    const flight = JSON.parse(localStorage.getItem('flight'));
    const passengers = JSON.parse(localStorage.getItem('passengers'));
    const payment = JSON.parse(localStorage.getItem('payment'));
    this.setState({ flightDetails : flight, passengers: passengers, paymentDetails: payment });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { flightDetails, passengers, paymentDetails } = this.state;
    const inputData = {
        flight: flightDetails,
        passengers,
        payment: paymentDetails
    }
    console.log(inputData);
    axios
      .post(`${backendServer}/saveBooking`, inputData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({
            bookingConfirm: response.data,
          });
        } else {
          this.setState({ errorMsg: response.data });
        }
      })
      .catch((err) => {
        this.setState({ errorMsg: err });
      });
  }

  handleBack = (e) => {
    e.preventDefault();
    this.setState({ redirectBackFlag: true });
  }

  render() {
    const { flightDetails, passengers, paymentDetails, redirectBackFlag } = this.state;
    let redirectVar = null;
    console.log("redirectFlag"+redirectBackFlag);
     if (redirectBackFlag) {
       redirectVar = <Redirect to="/bookingpayment" />;
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
              <Row>
                  <Col>
                  Card Number: <b>{paymentDetails.firstFour}{'-'}{paymentDetails.secondFour}{'-'}{paymentDetails.middleFour}{'-'}{paymentDetails.lastFour}</b>
                  </Col>
                  <Col>
                  Name on Card: <b>{paymentDetails.nameOnCard}</b>
                  </Col>
                  <Col>
                  Valid thru(mm/yy): <b>{paymentDetails.month}{'/'}{paymentDetails.year}</b>
                  </Col>
                  <Col>
                  CVV: <b>{paymentDetails.cvv}</b>
                  </Col>
              </Row>
              <br />
              <Row>
                  <Col>
                  <h5>Amount to be paid:</h5>
                  </Col>
                  <Col>
                   <h5>{flightDetails.price}</h5>
                  </Col>
              </Row>
            </Card.Body>
          </Card>
          &nbsp;
          <div>
            <Form>
            <Button variant="danger" type="submit" onClick={this.handleBack}>
            <ChevronLeftIcon />
              Edit Payment
            </Button>{" "}
            <Button variant="danger" type="submit" onClick={this.handleSubmit}>
              Confirm Booking 
            </Button>{" "}
            </Form>
          </div>
        </div>
      </>
    );
  }
}
