import * as React from "react";
import {Container, Form, FormLabel, Row, Col, Button }from "react-bootstrap";
import 'react-datepicker/dist/react-datepicker.css';
import { Redirect } from 'react-router';
import backendServer from '../../webConfig';
import axios from 'axios';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: ''
    };
  }

 componentDidMount(){
    const user = JSON.parse(sessionStorage.getItem('user'));
    console.log("user: "+user);
    const userId = user.id;
    console.log("userId:"+userId)
        
    axios
    .get(`${backendServer}/v1/user/getUser`, {params: {
      userId,
    }})
    .then((response) => {
      
      if (response.status === 200) {
        console.log(response.data);
        this.setState({
          userDetails: response.data,
        });
      } else {
        this.setState({ errorMsg: response.data });
      }
    })
    .catch((err) => {
      this.setState({ errorMsg: err });
    });
 }

  render() {
    const { userDetails} = this.state;
    console.log("userDetails:"+JSON.stringify(userDetails))
    const mileage = userDetails.mileage;
    console.log(mileage)
    return (
      <>
       <h2>My Profile</h2>

       <Row>
          <Col>
            First Name:
          </Col>
          <Col>
            <b>{userDetails.first_name}</b>
          </Col>
        </Row>
        
        <Row>
          <Col>
            Last Name:
          </Col>
          <Col>
            <b>{userDetails.last_name}</b>
          </Col>
        </Row> 
        <Row>
          <Col>
            Phone no:
          </Col>
          <Col>
            <b>{userDetails.phone_number}</b>
          </Col>
        </Row> 
        <Row>
          <Col>
            Email:
          </Col>
          <Col>
            <b>{userDetails.email}</b>
          </Col>
        </Row> 

        <Row>
          <Col>
            Street:
          </Col>
          <Col>
            <b>{userDetails.add_line1 + userDetails.add_line2}</b>
          </Col>
        </Row> 

        <Row>
          <Col>
            City:
          </Col>
          <Col>
            <b>{userDetails.city}</b>
          </Col>
        </Row> 

        <Row>
          <Col>
            State:
          </Col>
          <Col>
            <b>{userDetails.state}</b>
          </Col>
        </Row> 

        <Row>
          <Col>
            Country:
          </Col>
          <Col>
            <b>{userDetails.country}</b>
          </Col>
        </Row> 

       
        
      </>
    );
  }
}
export default Profile;
