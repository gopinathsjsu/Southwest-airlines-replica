import * as React from "react";
import HistoryItinerary from "./HistoryItinerary";
import UpcomingItinerary from "./UpcomingItinerary";

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleTabChange = (e) => {
    this.setState = {
      selectedTab: e,
    };
  };
  render() {
    return (
      <>
        <div>Upcoming Trip</div>
        <UpcomingItinerary />
        <div>&nbsp;</div>
        <div>Previous Trips</div>
        <HistoryItinerary />
      </>
    );
  }
}
