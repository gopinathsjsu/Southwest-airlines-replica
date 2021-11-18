import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userMileageProfile: this.props.data };
  }
  render() {
    return (
      <>
        <Typography>Activities</Typography>
        {this.state.userMileageProfile.mileage.transactions.map((p) => (
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
