import * as React from "react";
import { ReactComponent as Visa } from "../../visa-logo-svg-vector.svg";
import Col from "react-bootstrap/Col";
import { InputGroup, FormControl, Row } from "react-bootstrap/";

export default class AddCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstFour: "",
      secondFour: "",
      middleFour: "",
      lastFour: "",
      nameOnCard: "",
      month: "",
      year: "",
      cvv: "",
      payment_type: "Credit Card",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.props.parentCallback(this.state);
  };

  render() {
    const {
      firstFour,
      secondFour,
      middleFour,
      lastFour,
      nameOnCard,
      month,
      year,
      cvv,
    } = this.state;
    return (
      <>
        <div>
          <Col md={12}>
            <Row>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Card Number
                </InputGroup.Text>

                <FormControl
                  aria-label="firstFour"
                  name="firstFour"
                  type="number"
                  value={firstFour}
                  onChange={this.handleChange}
                />
                <FormControl
                  aria-label="secondFour"
                  name="secondFour"
                  type="number"
                  value={secondFour}
                  onChange={this.handleChange}
                />
                <FormControl
                  aria-label="middleFour"
                  name="middleFour"
                  type="number"
                  value={middleFour}
                  onChange={this.handleChange}
                />
                <FormControl
                  aria-label="lastFour"
                  name="lastFour"
                  type="number"
                  value={lastFour}
                  onChange={this.handleChange}
                />
              </InputGroup>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Name on Card
                </InputGroup.Text>

                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  name="nameOnCard"
                  value={nameOnCard}
                  onChange={this.handleChange}
                />
              </InputGroup>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text>Valid Thru (mm/yy)</InputGroup.Text>
                <FormControl
                  aria-label="month"
                  name="month"
                  type="number"
                  value={month}
                  onChange={this.handleChange}
                />
                <FormControl
                  aria-label="year"
                  name="year"
                  type="number"
                  value={year}
                  onChange={this.handleChange}
                />
              </InputGroup>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">CVV</InputGroup.Text>
                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  name="cvv"
                  type="number"
                  value={cvv}
                  onChange={this.handleChange}
                />
              </InputGroup>
            </Row>
          </Col>
        </div>
      </>
    );
  }
}
