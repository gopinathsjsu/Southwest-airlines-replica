import * as React from "react";
import HistoryItinerary from "./HistoryItinerary";
import UpcomingItinerary from "./UpcomingItinerary";
import axios from "axios";
import backendServer from "../../webConfig";

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      user: JSON.parse(localStorage.getItem("user")),
    };
  }

  componentDidMount = () => {
    this.setState({
      user: JSON.parse(localStorage.getItem("user")),
    });
    this.getBookings();
  };

  getBookings = () => {
    axios
      .get(`${backendServer}/bookings?userId=${this.state.user.id}`)
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
        {this.state.bookings.length > 0 ? (
          <>
            {this.state.bookings.map((d) =>
              d.status === "Scheduled" ? (
                <>
                  <div>&nbsp;</div>
                  <UpcomingItinerary data={d} />
                </>
              ) : null
            )}
          </>
        ) : (
          "No Upcoming Flights"
        )}
        <div>&nbsp;</div>
        <div>Previous Trips</div>
        {this.state.bookings.length > 0 ? (
          <>
            {this.state.bookings.map((d) =>
              d.status !== "Scheduled" ? (
                <>
                  <div>&nbsp;</div>
                  <HistoryItinerary data={d} />
                </>
              ) : null
            )}{" "}
          </>
        ) : (
          "No Previous Flights"
        )}
      </>
    );
  }
}
