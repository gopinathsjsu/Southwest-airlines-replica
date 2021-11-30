import * as React from "react";
import { Container, Card, Button } from "react-bootstrap";


class BookingSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleBooking = (e) => {
    e.preventDefault();
    this.props.setPage("booking");
    //this.setState({ redirectBackFlag: true });
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.setPage("search");
    //this.setState({ redirectBackFlag: true });
  };

  render() {
    const bookingId = localStorage.getItem("bookingid");
    return (
      <>
        <Container>
          <Card>
            <Card.Title>Your Flight Booking with Booking Id {' '}<b>{ bookingId }{' '}</b> is successful!! </Card.Title>
            <Card.Body>
            <Button variant="danger" type="submit" onClick={this.handleBooking}>
              View Booking
            </Button>{" "}
            <Button variant="danger" type="submit" onClick={this.handleSearch}>
              Select Flight
            </Button>{" "}
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}
export default BookingSuccess;
