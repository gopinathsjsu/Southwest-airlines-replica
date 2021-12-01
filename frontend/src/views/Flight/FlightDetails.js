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
import Alert from "react-bootstrap/Alert";

export default class FlightDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: props.data,
      newFlight: "",
      pilots: props.pilots,
      successMsg: "",
      errorMsg: "",
    };
  }

  componentDidMount = () => {
    const newflight = this.state.flight;
    this.setState({
      pilots: this.props.pilots,
      newFlight: newflight,
    });

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
    this.setState((prevState) => {
      let newFlight = Object.assign({}, prevState.flight);
      newFlight[e.target.name] = e.target.value;
      return { newFlight };
    });
  };

  handleSave = () => {
    let flight = this.state.newFlight;
    axios
      .post(`${backendServer}/updateFlight`, flight)
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
    return (
      <>
        {this.state.successMsg !== undefined &&
        this.state.successMsg != null &&
        this.state.successMsg !== "" ? (
          <Alert variant="success" size="sm">
            {this.state.successMsg}
          </Alert>
        ) : null}
        {this.state.errorMsg !== undefined &&
        this.state.errorMsg != null &&
        this.state.errorMsg !== "" ? (
          <Alert variant="danger" size="sm">
            {this.state.errorMsg}
          </Alert>
        ) : null}
        <Row>
          <Col md={3}>
            {" "}
            <Form.Group className="mb-3">
              <Form.Label>Source</Form.Label>
              <Form.Control
                name="tripSource"
                type="text"
                className="mr-sm-2"
                onChange={this.handleChange}
                value={this.state.newFlight.tripSource}
                placeholder="Source"
                disabled="true"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            {" "}
            <Form.Label>Destination</Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                name="tripDestination"
                type="text"
                className="mr-sm-2"
                onChange={this.handleChange}
                value={this.state.newFlight.tripDestination}
                placeholder="Destination"
                disabled="true"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            {" "}
            <Form.Label>Airline</Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                name="flightName"
                type="text"
                className="mr-sm-2"
                onChange={this.handleChange}
                value={this.state.newFlight.flightName}
                placeholder="Airline"
                disabled="true"
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
                  value={this.state.newFlight.departDate}
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
                  value={this.state.newFlight.arriveDate}
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
                value={this.state.newFlight.stops}
                placeholder="Stops"
                disabled="true"
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
              <option selected>{this.state.newFlight.pilot1}</option>
              {this.state.pilots.map((p) => {
                <option value={p.id}>
                  {p.first_name} {p.last_name}
                </option>;
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
              <option selected>{this.state.newFlight.pilot2}</option>
              {this.state.pilots.map((p) => {
                <option value={p.id}>
                  {p.first_name} {p.last_name}
                </option>;
              })}
            </select>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            {" "}
            <Form.Label>Price</Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                name="price"
                type="text"
                className="mr-sm-2"
                onChange={this.handleChange}
                value={this.state.newFlight.price}
                placeholder="Price"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={3}>&nbsp;</Col>
          <Col md={3}>&nbsp;</Col>
          <Col md={3}>
            <Button variant="danger" type="button" onClick={this.handleSave}>
              Save
            </Button>
          </Col>
          <Col md={3}>&nbsp;</Col>
        </Row>
      </>
    );
  }
}
