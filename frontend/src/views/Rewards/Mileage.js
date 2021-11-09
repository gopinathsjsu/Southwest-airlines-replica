import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Card from "react-bootstrap/Card";
import Divider from "@mui/material/Divider";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

class Mileage extends React.Component {
  constructor() {
    super();
    this.state = { page: "default" };
  }
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
                <Button size="small" sx={{ fontSize: 11 }}>
                  Learn More
                  <ChevronRightIcon />
                </Button>
              </Col>
            </Row>
            <Row></Row>
          </Card.Body>
        </Card>
        &nbsp;
        <Card>
          <Card.Header>Summary</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <Row>
                <Col md={3}>
                  {" "}
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Mileage Account
                  </Typography>{" "}
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    121213
                  </Typography>{" "}
                  <Divider light />
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Valid Till
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    12/07/2021
                  </Typography>
                </Col>

                <Col md={4}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Here's what you've earned toward A-List
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Valid Till
                  </Typography>{" "}
                  <BorderLinearProgress variant="determinate" value={50} />{" "}
                  <Typography
                    sx={{ fontSize: 10 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    50 out of 100 flights
                  </Typography>{" "}
                  &nbsp;
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Valid Till
                  </Typography>{" "}
                  <BorderLinearProgress variant="determinate" value={50} />{" "}
                  <Typography
                    sx={{ fontSize: 10 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    50 out of 100 points
                  </Typography>{" "}
                </Col>
                <Col md={4}>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  ></Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Look at your Companion Pass progress.
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Valid Till
                  </Typography>{" "}
                  <BorderLinearProgress variant="determinate" value={50} />{" "}
                  <Typography
                    sx={{ fontSize: 10 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    50 out of 100 points
                  </Typography>{" "}
                  &nbsp;
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Valid Till
                  </Typography>{" "}
                  <BorderLinearProgress variant="determinate" value={50} />{" "}
                  <Typography
                    sx={{ fontSize: 10 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    50 out of 100 flights
                  </Typography>{" "}
                </Col>
              </Row>
            </blockquote>
          </Card.Body>
        </Card>
        &nbsp;
        <Card>
          <Card.Header>Avail Mileage Points</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <Row>
                <Col md={12}>
                  {" "}
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Booking ID"
                      aria-label="Booking ID"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                      Avail
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
            </blockquote>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Mileage;
