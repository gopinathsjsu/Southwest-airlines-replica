import * as React from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form, Button } from "react-bootstrap";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import axios from "axios";
import backendServer from "../../webConfig";

export default class FlightDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flight: props.data, pilots: [] };
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
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <>
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
                value={this.state.flight.tripSource}
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
                value={this.state.flight.tripDestination}
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
                value={this.state.flight.flightName}
                placeholder="Airline"
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
                  value={this.state.flight.departDate}
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
                  value={this.state.flight.arriveDate}
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
                value={this.state.flight.stops}
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
              <option selected>{this.state.flight.pilot1}</option>
              {this.state.pilots.map((p) => {
                <option value={p.id}>{p.first_name}</option>;
              })}
            </select>
          </Col>
          <Col md={3}>
            <Form.Label>Pilot 2</Form.Label>
            <select
              className="form-control"
              name="pilot2"
              onChange={this.handleInputChange}
            >
              <option selected>{this.state.flight.pilot1}</option>
              {this.state.pilots.map((p) => {
                <option value={p.id}>{p.first_name}</option>;
              })}
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
                value={this.state.flight.seats}
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
                value={this.state.flight.price}
                placeholder="Price"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={3}>&nbsp;</Col>
          <Col md={3}>&nbsp;</Col>
          <Col md={3}>
            <Button variant="danger" type="submit" onClick={this.handleSubmit}>
              Save
            </Button>
          </Col>
          <Col md={3}>&nbsp;</Col>
        </Row>
      </>
    );
  }
}
