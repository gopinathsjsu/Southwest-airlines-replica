import * as React from "react";
import HistoryItinerary from "./HistoryItinerary";
import UpcomingItinerary from "./UpcomingItinerary";
import axios from "axios";
import backendServer from "../../webConfig";

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookings: [], user: "" };
  }
  componentDidMount = () => {
    this.setState({
      user: JSON.parse(localStorage.getItem("user")),
    });
    this.getBookings();
  };
  getBookings = () => {
    axios
      .get(`${backendServer}/bookings?userId=1`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({
            bookings: response.data,
          });
        } else {
          this.setState({ errorMsg: response.data });
        }
      })
      .catch((err) => {
        this.setState({ errorMsg: err });
      });
  };

  handleTabChange = (e) => {
    this.setState = {
      selectedTab: e,
    };
  };
  render() {
    return (
      <>
        {" "}
        <div>Upcoming Trip</div>
        {this.state.bookings.map((d) =>
          d.status === "Scheduled" ? (
            <>
              <div>&nbsp;</div>
              <UpcomingItinerary data={d} />
            </>
          ) : null
        )}
        <div>&nbsp;</div>
        <div>Previous Trips</div>
        {this.state.bookings.map((d) =>
          d.status !== "Scheduled" ? (
            <>
              <HistoryItinerary data={d} />
            </>
          ) : null
        )}
      </>
    );
  }
}
