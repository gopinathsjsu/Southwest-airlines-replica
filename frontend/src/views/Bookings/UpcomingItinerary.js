import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Avatar from "@mui/material/Avatar";
import TakeOff from "@mui/icons-material/FlightTakeoff";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import TripDetails from "./TripDetails";
import Landing from "@mui/icons-material/FlightLand";
import Col from "react-bootstrap/Col";

export default class UpcomingItinerary extends React.Component {
  render() {
    return (
      <>
        {" "}
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Col md={3}>
                <Avatar sx={{ width: 24, height: 24 }}>
                  <TakeOff fontSize="sm" />
                </Avatar>
                <Typography>SFO</Typography>
              </Col>
              <Col md={3}>
                <Avatar sx={{ width: 24, height: 24 }}>
                  <Landing fontSize="sm" />
                </Avatar>
                <Typography>BOM </Typography>
              </Col>
              <Col md={4}>
                {" "}
                <Typography>Time</Typography>
                <Typography>15h 35m</Typography>
              </Col>
              <Col md={3}>
                {" "}
                <Typography>Status</Typography>
                <Typography>Scheduled</Typography>
              </Col>
            </AccordionSummary>
            <AccordionDetails>
              <TripDetails />
            </AccordionDetails>
          </Accordion>
        </div>
      </>
    );
  }
}
