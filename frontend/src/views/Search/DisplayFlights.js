import * as React from "react";
import { Container, Table, Col, Row, ListGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class DisplayFlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const flightList = this.props.location.request.flightList;
    console.log(flightList)
    const searchDetails = flightList.map((flight) => (
      <ListGroup>
        <ListGroup.Item>
          {flight.departureTime}
          {flight.duration}
          {flight.stops}
        </ListGroup.Item>
      </ListGroup>

    ));
    return (
      <>
        <Container>
          <Form>
          <Col md={12}>
            < br/>
            <Row>
            <h3>Depart:{' '}{this.props.location.request.source}{'-'}{this.props.location.request.destination}</h3>
            <h4>{this.props.location.request.departDate.toDateString()}</h4>
            </Row>
          <Table striped hover size="sm">
            <thead>
                <tr>
                <th>Departing Flights</th>
                <th>Number of stops</th>
                <th>Duration</th>
                </tr>
            </thead>
            </Table>
            {searchDetails}
            </Col>
          </Form>
        </Container>
      </>
    );
  }
}
export default DisplayFlights;
