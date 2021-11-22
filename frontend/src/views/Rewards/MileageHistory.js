import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import axios from "axios";
import backendServer from "../../webConfig";
class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userMileageProfile: null,
      user: JSON.parse(localStorage.getItem("user")),
      bookings: [],
    };
  }

  componentDidMount = () => {
    this.getHistory();
  };

  getHistory = () => {
    axios
      .get(`${backendServer}/getMileage?userId=${this.state.user.id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({
            userMileageProfile: response.data[0],
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
    return (
      <>
        <Typography>Activities</Typography>
        {this.state.userMileageProfile !== null &&
          this.state.userMileageProfile.transactions.map((p) => (
            <Card>
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {p.date_avl}
                    </Typography>
                  </Col>
                  <Col md={3}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {p.status}
                    </Typography>
                  </Col>
                  <Col md={3}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {p.status === "Availed" ? (
                        <Typography style={{ color: "green" }}>
                          +{p.points}
                        </Typography>
                      ) : (
                        <Typography style={{ color: "red" }}>
                          -{p.points}
                        </Typography>
                      )}
                    </Typography>
                  </Col>
                  <Col md={3}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {p.remiaingPoints}
                    </Typography>
                  </Col>
                </Row>
                <Row></Row>
              </Card.Body>
            </Card>
          ))}
      </>
    );
  }
}
export default Summary;
