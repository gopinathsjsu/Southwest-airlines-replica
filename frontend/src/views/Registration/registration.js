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
export default class Registration extends React.Component {
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
            <Form noValidate>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    size="sm"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    size="sm"
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
                    selected={null}
                    onChange={this.handleChangeArrDate}
                    name="arrriveDate"
                    dateFormat="MM/dd/yyyy"
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
                    size="sm"
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
                    size="sm"
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
                    required
                    size="sm"
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
                    placeholder="State"
                    required
                    size="sm"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Country"
                    required
                    size="sm"
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
                    required
                    size="sm"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    required
                    size="sm"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    size="sm"
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
                  >
                    <FormControlLabel
                      value="customer"
                      control={<Radio size="small" />}
                      label="Customer"
                    />
                    <FormControlLabel
                      value="employee"
                      control={<Radio size="small" />}
                      label="Employee"
                    />
                  </RadioGroup>
                </FormControl>
              </Row>

              <Button type="submit">Register</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
