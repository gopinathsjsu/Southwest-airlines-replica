import * as React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import AddCard from './AddCard';
export default class BookingPayment extends React.Component {
  constructor() {
    super();
    this.state = {
      flightDetails: '',
      passengers: [],
    };
  }

  handleCallback = (paymentData) =>{
    console.log(paymentData);
    localStorage.setItem('payment', JSON.stringify(paymentData));
  }

  componentDidMount() {
    const flight = JSON.parse(localStorage.getItem('flight'));
    const passengers = JSON.parse(localStorage.getItem('passengers'));
    this.setState({ flightDetails : flight, passengers: passengers.concat(passengers)});
  }

  render() {
    const { flightDetails, passengers } = this.state;
    console.log(this.props.firstFour);
    console.log(passengers);
    const passengerDetails = passengers.map((pas, index) => (
      <Row>
        
          {index+1}{'.'}
          
          <Col>
            First Name: <b>{pas.firstName}</b>
          </Col>
          <Col>
            Last Name: <b>{pas.lastName}</b>
          </Col>
          <Col>
            Government ID: <b>{pas.govtId}</b>
          </Col>
          <Col>
            Government ID Number: <b>{pas.govtIdNum}</b>
          </Col>
      </Row>
    ));
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
              {passengerDetails}
            </Card.Body>
          </Card>
          &nbsp;
          <Card>
            <Card.Header>Payment Details</Card.Header>
            <Card.Body>
              <AddCard parentCallback = {this.handleCallback}/>
            </Card.Body>
          </Card>
          &nbsp;
          <div>
            <Button variant="danger">
              <ChevronLeftIcon />
              Edit Passenger
            </Button>{" "}
            <Button variant="danger">
              Review <ChevronRightIcon />
            </Button>{" "}
          </div>
        </div>
      </>
    );
  }
}
