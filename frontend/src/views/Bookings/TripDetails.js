import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TakeOff from "@mui/icons-material/FlightTakeoff";
import Landing from "@mui/icons-material/FlightLand";
import Typography from "@mui/material/Typography";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/EditRounded";
import DeleteIcon from "@mui/icons-material/CancelOutlined";
export default class TripDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { booking: props.data };
  }
  render() {
    return (
      <Row>
        <Col md={2}>
          <Typography color="text.secondary">
            {this.state.booking.flight.tripSource}
          </Typography>
          <Avatar>
            <TakeOff />
          </Avatar>
          <Typography fontSize="10px" color="text.secondary">
            {this.state.booking.flight.departureTime}
          </Typography>
          <Typography color="text.secondary">
            {this.state.booking.flight.tripDestination}
          </Typography>
          <Avatar>
            <Landing />
          </Avatar>
          <Typography fontSize="10px" color="text.secondary">
            {this.state.booking.flight.arrivalTime}
          </Typography>
        </Col>
        <Col md={4}>
          <Typography color="text.secondary">Trip Details</Typography>
          <Typography sx={{ mb: 0.5 }} color="text.secondary">
            {this.state.booking.flight.stops}
          </Typography>
        </Col>
        <Col md={4}>
          <Typography color="text.secondary">Passenger Details</Typography>
          {this.state.booking.passengers !== undefined &&
            this.state.booking.passengers.map((p, index) => (
              <>
                <Typography color="text.secondary">
                  Passenger {index}
                </Typography>
                <Typography color="text.secondary">
                  {p.first_name}
                  {p.last_name}
                </Typography>
              </>
            ))}
        </Col>
        <Col md={2}>
          <Button
            variant="contained"
            endIcon={<SendIcon size="small" />}
            size="small"
            style={{ width: "80px" }}
          >
            Edit
          </Button>
          <div>&nbsp;</div>
          <Button
            size="small"
            variant="outlined"
            endIcon={<DeleteIcon size="small" />}
            style={{ width: "100px" }}
          >
            Cancel
          </Button>
        </Col>
      </Row>
    );
  }
}
