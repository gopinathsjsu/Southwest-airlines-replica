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
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <Col md={12}>
            <Row>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Card Number
                </InputGroup.Text>

                <FormControl aria-label="firstFour" />
                <FormControl aria-label="secondFour" />
                <FormControl aria-label="middleFour" />
                <FormControl aria-label="kastFourar" />
              </InputGroup>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Name on Card
                </InputGroup.Text>

                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text>Valid Thru (mm/yy)</InputGroup.Text>
                <FormControl aria-label="month" />
                <FormControl aria-label="year" />
              </InputGroup>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">CVV</InputGroup.Text>
                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
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
              >
                Edit
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
