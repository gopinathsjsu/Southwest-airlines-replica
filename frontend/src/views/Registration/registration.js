import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";
import Card from "react-bootstrap/Card";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";
import backendServer from "../../webConfig";
import Alert from "react-bootstrap/Alert";
export default class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      address1: "",
      address2: "",
      city: "",
      zip: "",
      state: "",
      country: "",
      userType: "",
      user: "",
      phone: "",
      validated: false,
      errorMsg: "",
      successMsg: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangeUserType = (e) => {
    this.setState({ userType: e.target.value });
  };

  handleChangeDateofBirth = (val) => {
    this.setState({ dateOfBirth: val });
  };

  clear = () => {
    this.setState({
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      address1: "",
      address2: "",
      city: "",
      zip: "",
      state: "",
      country: "",
      userType: "",
      phone: "",
    });
  };
  handleSubmit = (e) => {
    const form = e.currentTarget;

    const {
      username,
      email,
      password,
      firstName,
      lastName,
      dateOfBirth,
      address1,
      address2,
      city,
      zip,
      state,
      country,
      userType,
      phone,
    } = this.state;
    const user = {
      username: username,
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      dob: dateOfBirth,
      add_line2: address2,
      city: city,
      add_line1: address1,
      zip: zip,
      state: state,
      country: country,
      user_type: userType,
      phone_number: phone,
    };
    console.log(user);
    axios
      .post(`${backendServer}/v1/user/register`, user)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({
            redirectFlag: true,
            user: response.data,
          });
          this.setState({
            successMsg: "User Registered Successfully! Please Login.",
          });
        } else {
          this.setState({ errorMsg: response.data });
        }
      })
      .catch((err) => {
        this.setState({ errorMsg: err });
      });
  };
  render() {
    return (
      <div
        style={{
          "padding-top": "100px",
          "align-items": "center",
          "justify-content": "center",
        }}
      >
        {" "}
        <Card
          style={{
            "align-items": "center",
            "justify-content": "center",
          }}
        >
          <Card.Body>
            <h5>New User</h5>
            &nbsp;
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
            <Form noValidate validated={this.state.validated}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    size="sm"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    size="sm"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Date Of Birth</Form.Label>
                  <DatePicker
                    selected={this.state.dateOfBirth}
                    onChange={this.handleChangeDateofBirth}
                    name="dateOfBirth"
                    dateFormat="MM/dd/yyyy"
                    value={this.state.dateOfBirth}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="5" controlId="validationCustom03">
                  <Form.Label>Address Line 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address Line 1"
                    required
                    name="address1"
                    size="sm"
                    value={this.state.address1}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="5" controlId="validationCustom04">
                  <Form.Label>Address Line 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address Line 2"
                    required
                    name="address2"
                    size="sm"
                    value={this.state.address2}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationCustom05">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    required
                    size="sm"
                    value={this.state.city}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="2" controlId="validationCustom03">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    placeholder="State"
                    required
                    size="sm"
                    value={this.state.state}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    placeholder="Country"
                    required
                    size="sm"
                    value={this.state.country}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Zip"
                    name="zip"
                    required
                    size="sm"
                    value={this.state.zip}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="email"
                    name="email"
                    required
                    size="sm"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom03">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="phone"
                    name="phonenumber"
                    placeholder="Phone"
                    required
                    size="sm"
                    maxLength="20"
                    value={this.state.phonenumber}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                    size="sm"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    size="sm"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                &nbsp;
                <FormControl component="fieldset">
                  <FormLabel component="legend"></FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="row-radio-buttons-group"
                    onChange={this.handleChangeUserType}
                  >
                    <FormControlLabel
                      value="Customer"
                      control={<Radio size="small" />}
                      label="Customer"
                    />
                    <FormControlLabel
                      value="Employee"
                      control={<Radio size="small" />}
                      label="Employee"
                    />
                  </RadioGroup>
                </FormControl>
              </Row>
              <Button type="button" onClick={this.handleSubmit}>
                Register
              </Button>
              &nbsp; &nbsp;
              <Button type="button" onClick={this.clear}>
                Clear
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
