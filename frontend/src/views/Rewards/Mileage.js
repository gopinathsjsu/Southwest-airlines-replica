import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Card from "react-bootstrap/Card";
import Summary from "./Summary";
import Activity from "./MileageHistory";
import axios from "axios";
import backendServer from "../../webConfig";

class Mileage extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "default",
      userId: "",
      userMileageProfile: "",
    };
  }

  componentDidMount() {
    this.getMileage();
  }

  getMileage = () => {
    //e.preventDefault();
    //const { userId } = this.state;
    axios
      .get(`${backendServer}/v1/user/getUser?userId=1`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({
            userMileageProfile: response.data,
          });
        } else {
          this.setState({ errorMsg: response.data });
        }
      })
      .catch((err) => {
        this.setState({ errorMsg: err });
      });
  };
  handleActivity = () => {
    this.setState({
      page: "activities",
    });
  };
  render() {
    return (
      <>
        {this.state.userMileageProfile !== "" ? (
          <Card>
            <Card.Body>
              <Row>
                <Col md={5}>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Hi! User
                  </Typography>
                  <Typography
                    sx={{ fontSize: 13 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Mileage Rewards {this.state.userMileageProfile.mileage.id}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 13 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Mileage rewards member since{" "}
                    {this.state.userMileageProfile.mileage.memberSince}
                    <Button size="small" sx={{ fontSize: 11 }}>
                      View Profile
                      <ChevronRightIcon />
                    </Button>
                  </Typography>
                </Col>
                <Col md={4}>&nbsp;</Col>
                <Col md={3}>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Points
                  </Typography>
                  <Typography sx={{ fontSize: 24 }} color="text.secondary">
                    {this.state.userMileageProfile.mileage.points}
                  </Typography>
                  <Button
                    size="small"
                    sx={{ fontSize: 11 }}
                    onClick={this.handleActivity}
                  >
                    Learn More
                    <ChevronRightIcon />
                  </Button>
                </Col>
              </Row>
              <Row></Row>
            </Card.Body>
          </Card>
        ) : null}
        &nbsp;
        {this.state.page === "activities" ? (
          <Activity data={this.state.userMileageProfile} />
        ) : null}
        {this.state.page === "default" ? <Summary /> : null}
      </>
    );
  }
}

export default Mileage;
