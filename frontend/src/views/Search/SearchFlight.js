import * as React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import TextField from "@mui/material/TextField";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Button from "@mui/material/Button";

class SearchFlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionAdult: "1",
      selectionChild: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    this.setState = {
      selectionAdult: "1",
    };
  };

  handleSearch = () => {};
  render() {
    return (
      <>
        <h2>Search Flight</h2>
        <Container>
          <Form>
            <Col md={12}>
              <Row>
                <TextField
                  id="standard-basic"
                  label="Source"
                  variant="standard"
                  size="small"
                />

                <TextField
                  id="standard-basic"
                  label="Destination"
                  variant="standard"
                  size="small"
                />

                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="oneway"
                      control={<Radio size="small" />}
                      label="One Way"
                    />
                    <FormControlLabel
                      value="round"
                      control={<Radio size="small" />}
                      label="Round"
                      size="small"
                    />
                  </RadioGroup>
                </FormControl>
              </Row>
              <Row>&nbsp;</Row>
              <Row>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    size="small"
                    label="From"
                    value={"date"}
                    minDate={new Date("2017-01-01")}
                    onChange={(newValue) => {
                      this.setState = {
                        date: "",
                      };
                    }}
                    renderInput={(params) => (
                      <TextField {...params} size="small" />
                    )}
                  />
                  <DesktopDatePicker
                    label="To"
                    value={"date"}
                    minDate={new Date("2017-01-01")}
                    onChange={(newValue) => {
                      this.setState = {
                        date: "",
                      };
                    }}
                    renderInput={(params) => (
                      <TextField {...params} size="small" />
                    )}
                  />
                </LocalizationProvider>
              </Row>
              <Row>&nbsp;</Row>
              <Row>
                <Button
                  size="small"
                  variant="contained"
                  onClick={this.handleSearch()}
                >
                  Search
                </Button>
              </Row>
            </Col>
          </Form>
        </Container>
      </>
    );
  }
}
export default SearchFlight;
