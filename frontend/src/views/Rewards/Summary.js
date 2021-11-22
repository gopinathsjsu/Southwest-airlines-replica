import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Divider from "@mui/material/Divider";
import backendServer from "../../webConfig";
import axios from "axios";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
class Summary extends React.Component {
  constructor() {
    super();
    this.state = {
      bookingId: "",
      bookings: [],
      user: JSON.parse(localStorage.getItem("user")),
    };
  }

  componentDidMount = () => {
    this.setState({ user: JSON.parse(localStorage.getItem("user")) });
    this.getBookings();
  };
  handleAvailBooking = (e) => {
    e.preventDefault();
    const { bookingId } = this.state;
    const booking = {
      bookingId: bookingId,
    };
    console.log(booking);
    axios
      .post(`${backendServer}/availBooking`, booking)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
        } else {
          this.setState({ errorMsg: response.data });
        }
      })
      .catch((err) => {
        this.setState({ errorMsg: err });
      });
  };

  getBookings = () => {
    axios
      .get(`${backendServer}/bookings?userId=1`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({
            bookings: response.data,
          });
        } else {
          this.setState({ errorMsg: response.data });
        }
      })
      .catch((err) => {
        this.setState({ errorMsg: err });
      });
  };

  handleBookingId = (e) => {
    this.setState({ bookingId: e.target.value });
  };
  render() {
    return (
      <>
        {" "}
        <Card>
          <Card.Header>Summary</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <Row>
                <Col md={3}>
                  {" "}
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Mileage Account
                  </Typography>{" "}
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {this.state.user.mileage.id}
                  </Typography>{" "}
                  <Divider light />
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Valid Till
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {this.state.user.mileage.memberSince}
                  </Typography>
                </Col>

                <Col md={4}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Here's what you've earned toward A-List
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Valid Till {this.state.user.mileage.expDate}
                  </Typography>{" "}
                  <BorderLinearProgress
                    variant="determinate"
                    value={this.state.bookings.length}
                  />{" "}
                  <Typography
                    sx={{ fontSize: 10 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {this.state.bookings.length} out of 100 flights
                  </Typography>{" "}
                  &nbsp;
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Valid Till {this.state.user.mileage.expDate}
                  </Typography>{" "}
                  <BorderLinearProgress
                    variant="determinate"
                    value={this.state.user.mileage.availableRewards}
                  />{" "}
                  <Typography
                    sx={{ fontSize: 10 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {this.state.user.mileage.availableRewards} out of 100 points
                  </Typography>{" "}
                </Col>
                <Col md={4}>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  ></Typography>{" "}
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Look at your Companion Pass progress.
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Valid Till {this.state.user.mileage.expDate}
                  </Typography>{" "}
                  <BorderLinearProgress
                    variant="determinate"
                    value={this.state.user.mileage.availableRewards}
                  />{" "}
                  <Typography
                    sx={{ fontSize: 10 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {this.state.user.mileage.availableRewards} out of 100 points
                  </Typography>{" "}
                  &nbsp;
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Valid Till
                  </Typography>{" "}
                  <BorderLinearProgress
                    variant="determinate"
                    value={this.state.user.mileage.availableRewards}
                  />{" "}
                  <Typography
                    sx={{ fontSize: 10 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {this.state.user.mileage.availableRewards} out of 100
                    flights
                  </Typography>{" "}
                </Col>
              </Row>
            </blockquote>
          </Card.Body>
        </Card>
        &nbsp;
        <Card>
          <Card.Header>Avail Mileage Points</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <Row>
                <Col md={12}>
                  {" "}
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Booking ID"
                      aria-label="Booking ID"
                      aria-describedby="basic-addon2"
                      value={this.state.bookingId}
                      onChange={this.handleBookingId}
                    />
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      onClick={this.handleAvailBooking}
                    >
                      Avail
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
            </blockquote>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default Summary;
