import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TakeOff from "@mui/icons-material/FlightTakeoff";
import Landing from "@mui/icons-material/FlightLand";
import Typography from "@mui/material/Typography";
export default class TripDetails extends React.Component {
  render() {
    return (
      <>
        <div>
          <Avatar>
            <TakeOff />
          </Avatar>
        </div>
        <div>&nbsp;</div>
        <div>&nbsp; </div>
        <div>
          <Avatar>
            <Landing />
          </Avatar>
        </div>
      </>
    );
  }
}
