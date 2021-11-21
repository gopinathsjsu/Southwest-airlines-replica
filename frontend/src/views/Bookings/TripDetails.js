import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TakeOff from "@mui/icons-material/FlightTakeoff";
import Landing from "@mui/icons-material/FlightLand";
import Typography from "@mui/material/Typography";
import Col from "react-bootstrap/Col";
export default class TripDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { booking: props.data };
  }
  render() {
    return (
      <>
        <Col md={1}>
          <Avatar>
            <TakeOff />
          </Avatar>
          <Typography>{this.state.booking.flight.tripSource}</Typography>

          <div>&nbsp;</div>
          <div>&nbsp; </div>

          <Avatar>
            <Landing />
          </Avatar>
          <Typography>{this.state.booking.flight.tripDestination}</Typography>
        </Col>
        <Col md={3}>
          <Typography>Trep Details</Typography>
        </Col>
        <Col md={3}>
          <Typography>Passenger Details</Typography>
        </Col>
      </>
    );
  }
}
