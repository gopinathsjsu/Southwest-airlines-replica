import * as React from "react";
import { Container, Table, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class DisplayFlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
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
          <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Departing Flights</th>
                <th>Number of stops</th>
                <th>Duration</th>
                </tr>
            </thead>
            </Table>
            </Col>
          </Form>
        </Container>
      </>
    );
  }
}
export default DisplayFlights;
