import * as React from "react";
import { Container, Form, Row, Col, Button, ListGroup } from "react-bootstrap";
import Button1 from "@mui/material/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import backendServer from "../../webConfig";
import FlightDetails from "./FlightDetails";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Landing from "@mui/icons-material/FlightLand";
import TakeOff from "@mui/icons-material/FlightTakeoff";

export default class EditFlight extends React.Component {
  constructor() {
    super();
    this.state = {
      source: "",
      destination: "",
      departDate: "",
      flights: [],
      page: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleEdit = (e, value) => {
    this.setState({ page: e });
  };

  handleCancel = (f) => {
    const flight = {
      id: f.id,
    };
    console.log(flight);
    axios
      .post(`${backendServer}/cancelFlight`, flight)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.handleSearch();
        } else {
          this.setState({ errorMsg: response.data });
        }
      })
      .catch((err) => {
        this.setState({ errorMsg: err });
      });
  };

  handleSearch = () => {
    const { source, destination, departDate } = this.state;
    const flight = {
      tripSource: source,
      tripDestination: destination,
      departureDate: departDate,
    };
    console.log(flight);
    axios
      .post(`${backendServer}/getFlightByCriteria`, flight)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({
            flights: response.data,
          });
          this.props.handleUser();
        } else {
          this.setState({ errorMsg: response.data });
        }
      })
      .catch((err) => {
        this.setState({ errorMsg: err });
      });
  };

  handleChangeDeptDate = (val) => {
    this.setState({ departDate: val });
  };

  render() {
    return (
      <>
        <Card>
          <Card.Header>Edit Flight</Card.Header>
          <Card.Body>
            {" "}
            <Row>
              <Col md={3}>
                {" "}
                <Form.Group className="mb-3">
                  <Form.Label>Source</Form.Label>
                  <Form.Control
                    name="source"
                    type="text"
                    className="mr-sm-2"
                    onChange={this.handleChange}
                    value={this.state.source}
                    placeholder="Source"
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                {" "}
                <Form.Group className="mb-3">
                  <Form.Label>Destination</Form.Label>
                  <Form.Control
                    name="destination"
                    type="text"
                    className="mr-sm-2"
                    onChange={this.handleChange}
                    value={this.state.destination}
                    placeholder="Destination"
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                {" "}
                <Form.Group className="mb-3">
                  <Form.Label>Departure Date</Form.Label>
                  <DatePicker
                    selected={
                      this.state.departDate
                        ? new Date(this.state.departDate)
                        : null
                    }
                    onChange={this.handleChangeDeptDate}
                    name="departDate"
                    dateFormat="MM/dd/yyyy"
                    label="Depart Date"
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Button
                  variant="danger"
                  type="submit"
                  onClick={this.handleSearch}
                  style={{ "margin-top": "30px" }}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {this.state.flights.length > 0
          ? this.state.flights.map((f, index) => (
              <>
                <div>&nbsp;</div>
                <Accordion>
                  <AccordionSummary>
                    <Col md={1}>
                      <Avatar sx={{ width: 24, height: 24 }}>
                        <TakeOff fontSize="sm" />
                      </Avatar>
                      <Typography>{f.tripSource}</Typography>
                    </Col>
                    <Col md={1}>
                      <Avatar sx={{ width: 24, height: 24 }}>
                        <Landing fontSize="sm" />
                      </Avatar>
                      <Typography>{f.tripDestination}</Typography>
                    </Col>
                    <Col md={2}>
                      {" "}
                      <Typography>Departure</Typography>
                      <Typography>
                        {new Date(f.departureTime).toLocaleDateString()}
                      </Typography>
                    </Col>
                    <Col md={2}>
                      {" "}
                      <Typography>Arrival</Typography>
                      <Typography>
                        {new Date(f.arrivalTime).toLocaleDateString()}
                      </Typography>
                    </Col>
                    <Col md={1}>
                      {" "}
                      <Typography>Duration</Typography>
                      <Typography>{f.duration}</Typography>
                    </Col>
                    <Col md={2}>
                      {" "}
                      <Typography>Status</Typography>
                      <Typography>{f.status}</Typography>
                    </Col>
                    {f.status !== "Cancelled" ? (
                      <Col md={2}>
                        <Button1
                          variant="contained"
                          endIcon=""
                          size="small"
                          style={{ width: "80px" }}
                          onClick={() => this.handleEdit(index)}
                        >
                          Edit
                        </Button1>
                      </Col>
                    ) : null}
                    {f.status !== "Cancelled" ? (
                      <Col md={2}>
                        <Button1
                          variant="contained"
                          endIcon=""
                          size="small"
                          style={{ width: "80px" }}
                          onClick={() => this.handleCancel(f)}
                        >
                          Cancel
                        </Button1>
                      </Col>
                    ) : null}
                  </AccordionSummary>

                  <AccordionDetails>
                    {this.state.page === index ? (
                      <Col md={12}>
                        <FlightDetails data={f} />
                      </Col>
                    ) : null}
                  </AccordionDetails>
                </Accordion>
              </>
            ))
          : "No flights Found"}
      </>
    );
  }
}
