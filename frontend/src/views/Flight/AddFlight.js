import * as React from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Form, Row, Col, Button } from "react-bootstrap";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import Card from "react-bootstrap/Card";
import axios from "axios";
import backendServer from "../../webConfig";
export default class AddFlight extends React.Component {
  constructor() {
    super();
    this.state = {
      source: "",
      destination: "",
      airline: "Southwest",
      departDate: "",
      arriveDate: "",
      duration: "",
      stops: "",
      seats: "",
      price: "",
      pilots: [],
      pilot1: "",
      pilot2: "",
      successMsg: "",
      errorMsg: "",
    };
  }

  componentDidMount = () => {
    this.getPilot();
  };

  getPilot = () => {
    axios
      .get(`${backendServer}/v1/user/users?userType=Employee`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({
            pilots: response.data,
          });
        } else {
          this.setState({ errorMsg: response.data });
        }
      })
      .catch((err) => {
        this.setState({ errorMsg: err });
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleDepartDate = (newValue) => {
    this.setState({
      departDate: newValue,
    });
  };
  handleArriveDate = (newValue) => {
    this.setState({
      arriveDate: newValue,
    });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  clear = () => {
    this.setState({
      source: "",
      destination: "",

      departDate: "",
      arriveDate: "",
      stops: "",
      price: "",
      pilot1: "",
      pilot2: "",
      seats: "",
    });
  };
  handleAdd = () => {
    const {
      source,
      destination,
      airline,
      departDate,
      arriveDate,
      stops,
      price,
      pilot1,
      pilot2,
    } = this.state;

    if (source === destination) {
      this.setState({ errorMsg: "Source and destination cant be same!" });
      return;
    } else {
      this.setState({ errorMsg: "" });
    }
    const flight = {
      tripSource: source,
      tripDestination: destination,
      flightName: airline,
      departureTime: departDate,
      arrivalTime: arriveDate,
      stops: parseInt(stops),
      price: parseFloat(price),
      pilot1: pilot1,
      pilot2: pilot2,
    };
    console.log(flight);
    axios
      .post(`${backendServer}/addFlight`, flight)
      .then((response) => {
        if (response.data.status === 200) {
          console.log(response.data.entity);
          this.setState({
            successMsg: response.data.statusInfo.reasonPhrase,
            redirectFlag: true,
          });
          this.clear();
        } else {
          this.setState({ errorMsg: response.data.statusInfo.reasonPhrase });
        }
      })
      .catch((err) => {
        this.setState({ errorMsg: err });
      });
  };
  render() {
    const { pilots } = this.state;

    let pilotList =
      pilots.length > 0 &&
      pilots.map((item, i) => {
        return (
          <option key={item.id} value={item.id}>
            {item.first_name}
          </option>
        );
      }, this);

    return (
      <>
        <Card>
          <Card.Header>Add Flight</Card.Header>
          <Card.Body>
            {this.state.successMsg !== undefined &&
            this.state.successMsg != null ? (
              <h4 style={{ color: "green", fontSize: "14px" }}>
                {this.state.successMsg}
              </h4>
            ) : null}
            {this.state.errorMsg !== undefined &&
            this.state.errorMsg != null ? (
              <h4 style={{ color: "brown", fontSize: "14px" }}>
                {this.state.errorMsg}
              </h4>
            ) : null}
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
                <Form.Label>Destination</Form.Label>
                <Form.Group className="mb-3">
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
                <Form.Label>Airline</Form.Label>
                <Form.Group className="mb-3">
                  <Form.Control
                    name="airline"
                    type="text"
                    className="mr-sm-2"
                    onChange={this.handleChange}
                    value={this.state.airline}
                    placeholder="Airline"
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                {" "}
                <Form.Group className="mb-3">
                  <Form.Label>Depart Date</Form.Label>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label=""
                      name="departDate"
                      value={this.state.departDate}
                      onChange={this.handleDepartDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                {" "}
                <Form.Group className="mb-3">
                  <Form.Label>Arrive Date</Form.Label>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label=""
                      name="arriveDate"
                      value={this.state.arriveDate}
                      onChange={this.handleArriveDate}
                      renderInput={(params) => <TextField {...params} />}
                      minDateTime={this.state.departDate}
                    />
                  </LocalizationProvider>
                </Form.Group>
              </Col>
              <Col md={3}>
                {" "}
                <Form.Label>Stops</Form.Label>
                <Form.Group className="mb-3">
                  <Form.Control
                    name="stops"
                    type="text"
                    className="mr-sm-2"
                    onChange={this.handleChange}
                    value={this.state.stops}
                    placeholder="Stops"
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Label>Pilot 1</Form.Label>

                <select
                  className="form-control"
                  name="pilot1"
                  onChange={this.handleInputChange}
                >
                  <option key="0" value="">
                    Select Pilot 1
                  </option>
                  {pilotList}
                </select>
              </Col>
              <Col md={3}>
                <Form.Label>Pilot 2</Form.Label>
                <select
                  className="form-control"
                  name="pilot2"
                  onChange={this.handleInputChange}
                >
                  <option key="0" value="">
                    Select Pilot 2
                  </option>
                  {pilotList}
                </select>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Form.Label>Seats</Form.Label>
                <Form.Group className="mb-3">
                  <Form.Control
                    name="seats"
                    type="text"
                    className="mr-sm-2"
                    onChange={this.handleChange}
                    value={this.state.seats}
                    placeholder="Seats"
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                {" "}
                <Form.Label>Price</Form.Label>
                <Form.Group className="mb-3">
                  <Form.Control
                    name="price"
                    type="text"
                    className="mr-sm-2"
                    onChange={this.handleChange}
                    value={this.state.price}
                    placeholder="Price"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={3}>&nbsp;</Col>
              <Col md={3}>&nbsp;</Col>
              <Col md={3}>&nbsp;</Col>
              <Col md={3}>
                <Button variant="danger" type="submit" onClick={this.handleAdd}>
                  Add
                </Button>
                &nbsp; &nbsp;
                <Button variant="danger" type="submit" onClick={this.clear}>
                  Clear
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </>
    );
  }
}
