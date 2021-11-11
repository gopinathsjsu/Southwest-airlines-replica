import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Card from "react-bootstrap/Card";
import Summary from "./Summary";
import Activity from "./MileageHistory";

class Mileage extends React.Component {
  constructor() {
    super();
    this.state = { page: "default" };
  }

  handleActivity = () => {
    this.setState({
      page: "activities",
    });
  };
  render() {
    return (
      <>
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
                  Mileage Rewards
                </Typography>
                <Typography
                  sx={{ fontSize: 13 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Mileage rewards member since
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
                  0
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
        &nbsp;
        {this.state.page === "activities" ? <Activity /> : null}
        {this.state.page === "default" ? <Summary /> : null}
      </>
    );
  }
}

export default Mileage;
