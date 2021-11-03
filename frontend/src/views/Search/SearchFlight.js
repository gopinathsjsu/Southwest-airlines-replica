import * as React from "react";
import {Container, Form, FormLabel, Row, Col, Button }from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Redirect } from 'react-router';
import axios from 'axios';

class SearchFlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectFlag: false,
      source: '',
      destination: '',
      tripType: 'Round trip',
      errorMsg: '',
      departDate: '',
      arriveDate: '',
      successMsg: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChangeDeptDate = (val) => {
    this.setState({ departDate: val });
  }

  handleChangeArrDate = (val) => {
    this.setState({ arriveDate: val });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { source, destination, tripType, departDate, arriveDate } = this.state;
    const inputData = {
      source,
      destination,
      tripType,
      departDate,
      arriveDate,
    };
    console.log(inputData);
    
    this.setState({
      redirectFlag: true,
    });
  };

  render() {
    const { redirectFlag, source, tripType, destination, departDate, arriveDate, errorMsg, successMsg } = this.state;
    const request = {
      source,
      destination,
      departDate,
      arriveDate,
      tripType
    }
    let redirectVar = null;
    if (redirectFlag) {
      redirectVar = <Redirect to={{pathname: "/displayFlights",
                                  request}} />;
    }
    return (
      <>
      {redirectVar}
        <h2>Search Flight</h2>
        <div>
          <Container>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              {(successMsg !== undefined && successMsg != null)
                ? <h4 style={{ color: 'green' }}>{successMsg}</h4> : null}
              {(errorMsg !== undefined && errorMsg != null)
                ? <h4 style={{ color: 'brown' }}>{errorMsg}</h4> : null}
            </Col>
          </Row>
          <Row>
          <Col>
              <Form.Check inline value="Round trip" defaultChecked="true" label="Round trip" name="tripType" type="radio" id="Round trip" onChange={this.handleChange} />
              <Form.Check inline value="One-way" label="One-way" name="tripType" type="radio" id="One-way" onChange={this.handleChange} />
            </Col>
          </Row>
          <Row>
          <Col>
              <Form.Group className="mb-3">
                <Form.Control name="source" type="text" className="mr-sm-2" onChange={this.handleChange} value={source} placeholder="Depart"/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control name="destination" type="text" className="mr-sm-2" onChange={this.handleChange} value={destination} placeholder="Arrive" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group className="mb-3">
              Depart Date
                  <DatePicker
                    selected={departDate ? new Date(departDate) : null}
                    onChange={this.handleChangeDeptDate}
                    name="departDate"
                    dateFormat="MM/dd/yyyy"
                    label="Depart Date"
                  />
                </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3">
              Arrive Date
                  <DatePicker
                    selected={arriveDate ? new Date(arriveDate) : null}
                    onChange={this.handleChangeArrDate}
                    name="arrriveDate"
                    dateFormat="MM/dd/yyyy"
                  />
                </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                Search
              </Button>
            </Col>
          </Row>
        </Form>
        </Container>
      </div>
      </>
    );
  }
}
export default SearchFlight;