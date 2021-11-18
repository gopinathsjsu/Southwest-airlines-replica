import * as React from "react";
import {Container, Form, Row, Col, Button, ListGroup }from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import backendServer from '../../webConfig';
import { BsArrowRight } from 'react-icons/bs';
import { CgAirplane } from 'react-icons/cg';

class SearchFlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: '',
      destination: '',
      tripType: 'Round trip',
      errorMsg: '',
      departDate: '',
      arriveDate: '',
      adults: 0,
      children: 0,
      successMsg: '',
      flightList: [],
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

  onSelect = (flight) => {
    localStorage.setItem('flight', JSON.stringify(flight));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { source, destination, tripType, departDate, arriveDate, flightList, adults, children } = this.state;
    const flight = {
      tripSource: source,
      tripDestination: destination,
      tripType,
      adults: parseInt(adults),
      children,
      departureTime: departDate,
      arrivalTime: arriveDate,
    };
    console.log(flight);
    axios
      .post(`${backendServer}/searchFlights`, flight)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({
            flightList: flightList.concat(response.data),
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
    const { flightList, tripType, source, destination, departDate, arriveDate, errorMsg, successMsg, adults, children } = this.state;
    // const request = {
    //   source,
    //   destination,
    //   departDate,
    //   arriveDate,
    //   tripType,
    //   flightList,
    //   adults, 
    //   children
    // }
    // let redirectVar = null;
    // if (redirectFlag) {
    //   redirectVar = <Redirect to={{pathname: "/displayFlights",
    //                               request}} />;
    // }
    const deptDetails = flightList.filter((flight) => flight.tripSource === source);
    const arrDetails = flightList.filter((flight) => flight.tripSource === destination);
    console.log(deptDetails);
    console.log(arrDetails);

    const deptDetailsDisplay = deptDetails.map((flight) => (
      <ListGroup>
        <ListGroup.Item>
          <Row>
          <Col>
          <h5>{new Date(flight.departureTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          {' '}<BsArrowRight />{' '}{new Date(flight.arrivalTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</h5>
          </Col>
          <Col> 
          {flight.stops}
          </Col>
          <Col>
          {flight.duration}
          </Col>
          <Col>
          {flight.price}
          </Col>
          <Col>
          <Button onClick={() => this.onSelect(flight)}>Select</Button>
          </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>

    ));

    const arrDetailsDisplay = arrDetails.map((flight) => (
      <ListGroup>
        <ListGroup.Item>
          <Row>
          <Col>
          <h5>{new Date(flight.departureTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          {' '}<BsArrowRight />{' '}{new Date(flight.arrivalTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</h5>
          </Col>
          <Col> 
          {flight.stops}
          </Col>
          <Col>
          {flight.duration}
          </Col>
          <Col>
          {flight.price}
          </Col>
          <Col>
          <Button>Select</Button>
          </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>

    ));
    return (
      <>
        <h2>Search Flight</h2>
        <div>
          <Container style={{display: 'flex', width: '75rem'}}>
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
            <Form.Group className="mb-3">
              <Form.Check className="mr-sm-2" inline value="Round trip" defaultChecked="true" label="Round trip" name="tripType" type="radio" id="Round trip" onChange={this.handleChange} />
              <Form.Check className="mr-sm-2" inline value="One-way" label="One-way" name="tripType" type="radio" id="One-way" onChange={this.handleChange} />
              </Form.Group>
              <Col>Number of adults</Col>
              <Col>
              <Form.Group className="mb-3">
                <Form.Control name="adults" type="text" className="mr-sm-2" onChange={this.handleChange} value={adults} placeholder="Number of adults"/>
              </Form.Group>
            </Col>
            <Col>
            Number of children
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control name="children" type="text" className="mr-sm-2" onChange={this.handleChange} value={children} placeholder="Number of children" />
              </Form.Group>
            </Col>
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
        {flightList.length > 0 &&
        <Container>
          <Form>
          <Col md={12}>
            < br/>
            <Row>
            <h3>Depart:{' '}{source}{' '}<CgAirplane />{' '}{destination}</h3>
            <h4>{departDate.toDateString()}</h4>
            </Row>
            <br />
            <ListGroup>
        <ListGroup.Item>
          <Row>
          <Col>
          <b>Departing Flights</b>
          </Col>
          <Col> 
          <b>Number of stops</b>
          </Col>
          <Col>
          <b>Duration</b>
          </Col>
          <Col>
          <b>Price</b>
          </Col>
          <Col></Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
            {deptDetailsDisplay}< br/>< br/>
            {tripType === 'Round trip' &&
            <div>  
            <Row>
            <br/>
            <h3>Arrive:{' '}{destination}{' '}<CgAirplane />{' '}{source}</h3>
            <h4>{arriveDate.toDateString()}</h4>
            </Row>
            <br />
            <ListGroup>
        <ListGroup.Item>
          <Row>
          <Col>
          <b>Departing Flights</b>
          </Col>
          <Col> 
          <b>Number of stops</b>
          </Col>
          <Col>
          <b>Duration</b>
          </Col>
          <Col>
          <b>Price</b>
          </Col>
          <Col></Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
            {arrDetailsDisplay}</div>}
            </Col>
          </Form>
        </Container>
  }
      </div>
      </>
    );
  }
}
export default SearchFlight;
