import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import SendIcon from "@mui/icons-material/EditSharp";
import { ReactComponent as Visa } from "../../visa-logo-svg-vector.svg";
import Col from "react-bootstrap/Col";
import { InputGroup, FormControl, Row } from "react-bootstrap/";

export default class AddCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstFour: '',
      secondFour: '',
      middleFour: '',
      lastFour: '',
      nameOnCard: '',
      month: '',
      year: '',
      cvv: '',
    };
  }

  onTrigger = () => {
    this.props.parentCallback(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {firstFour, secondFour, middleFour, lastFour, nameOnCard, month, year, cvv } = this.state;
    return (
      <>
        <div>
          <Col md={12}>
            <Row>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Card Number
                </InputGroup.Text>

                <FormControl aria-label="firstFour" name="firstFour" value= {firstFour} onChange={this.handleChange}/>
                <FormControl aria-label="secondFour" name="secondFour" value= {secondFour} onChange={this.handleChange}/>
                <FormControl aria-label="middleFour" name="middleFour" value= {middleFour} onChange={this.handleChange}/>
                <FormControl aria-label="lastFour" name="lastFour" value= {lastFour} onChange={this.handleChange}/>
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
                <FormControl aria-label="month" name="month" value={month} onChange={this.handleChange}/>
                <FormControl aria-label="year" name="year" value={year} onChange={this.handleChange}/>
              </InputGroup>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">CVV</InputGroup.Text>
                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  name="cvv"
                  value={cvv}
                  onChange={this.handleChange}
                />
              </InputGroup>
            </Row>
            <Row style={{ alignItems: "right" }}>
              &nbsp; &nbsp;
              <Button
                variant="contained"
                endIcon={<SendIcon size="small" />}
                size="small"
                style={{ width: "80px" }}
                onClick={this.onTrigger}
              >
                Add
              </Button>
              &nbsp;
              <Button
                size="small"
                variant="outlined"
                endIcon={<DeleteIcon size="small" />}
                style={{ width: "100px" }}
              >
                Remove
              </Button>
            </Row>
          </Col>
        </div>
      </>
    );
  }
}
