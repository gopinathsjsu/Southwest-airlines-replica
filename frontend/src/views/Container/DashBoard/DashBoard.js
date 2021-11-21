import * as React from "react";

import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../../../swa_logo_dark.svg";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Search from "@mui/icons-material/Search";
import Loyalty from "@mui/icons-material/Loyalty";
import PaymentIcon from "@mui/icons-material/Payment";
import Logout from "@mui/icons-material/Logout";
import MyProfile from "@mui/icons-material/AccountBox";
import MyBookings from "@mui/icons-material/FlightTakeoff";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchFlight from "../../Search/SearchFlight";
import Payment from "../../Payment/Payment";
import Booking from "../../Bookings/Booking";
import Mileage from "../../Rewards/Mileage";
import Profile from "../../Profile/Profile";
import AddPassenger from "../../Passenger/AddPassenger";
import BookingPayment from "../../Payment/BookingPayment";
import { Redirect } from "react-router";
//import Profile from "../../";
const drawerWidth = 240;
class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "search",
      user: JSON.parse(localStorage.getItem("user")),
    };
  }

  setPage = (page) => {
    this.setState({ page: page, redirectFlag: false });
  };

  componentDidMount = () => {
    this.setState({
      user: JSON.parse(localStorage.getItem("user")),
    });
  };
  handlePageChange = (e) => {
    if (e.target.innerText === "My Profile") {
      this.setState({
        page: "profile",
      });
    }
  };

  handlePayment = () => {
    this.setState({
      page: "payment",
    });
  };

  handleBooking = () => {
    this.setState({
      page: "booking",
    });
  };

  handleRewards = () => {
    this.setState({
      page: "rewards",
    });
  };

  handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("payment");
    localStorage.removeItem("passengers");
    localStorage.removeItem("flight");
    this.setState({ redirectFlag: true });
  };

  render() {
    let redirectVar = null;
    if (this.state.redirectFlag) {
      redirectVar = <Redirect to={{ pathname: "/login" }} />;
    }
    return (
      <div>
        {redirectVar}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {this.state.user !== null &&
              this.state.user.user_type === "Customer" ? (
                <>
                  <ListItem button key="SearchFlight">
                    <ListItemIcon>
                      <Search />
                    </ListItemIcon>
                    <ListItemText primary="Search Flight" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={this.handlePageChange}
                    key="MyProfile"
                  >
                    <ListItemIcon>
                      <MyProfile />
                    </ListItemIcon>
                    <ListItemText primary="My Profile" />
                  </ListItem>
                  <ListItem button key="Rewards" onClick={this.handleRewards}>
                    <ListItemIcon>
                      <Loyalty />
                    </ListItemIcon>
                    <ListItemText primary="Rewards" />
                  </ListItem>
                  <ListItem
                    button
                    key="MyBookings"
                    onClick={this.handleBooking}
                  >
                    <ListItemIcon>
                      <MyBookings />
                    </ListItemIcon>
                    <ListItemText primary="My Bookings" />
                  </ListItem>
                  <ListItem button key="Payment" onClick={this.handlePayment}>
                    <ListItemIcon>
                      <PaymentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Payments" />
                  </ListItem>
                  <ListItem button key="Notifications">
                    <ListItemIcon>
                      <NotificationsActiveIcon />
                    </ListItemIcon>
                    <ListItemText primary="Notifications" />
                  </ListItem>
                </>
              ) : (
                <>
                  <ListItem button key="Add+Flight">
                    <ListItemIcon>
                      <Search />
                    </ListItemIcon>
                    <ListItemText primary="Add Flight" />
                  </ListItem>
                  <ListItem button key="EditFlight">
                    <ListItemIcon>
                      <Search />
                    </ListItemIcon>
                    <ListItemText primary="Edit Flight" />
                  </ListItem>
                </>
              )}
            </List>
            <Divider />
            <List>
              {["Logout"].map((text, index) => (
                <ListItem button key={text} onClick={this.handleLogout}>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
          style={{ "padding-left": "250px", "padding-top": "100px" }}
        >
          {this.state.page === "search" ? (
            <SearchFlight setPage={this.setPage} />
          ) : null}
          {this.state.page === "payment" ? <Payment /> : null}
          {this.state.page === "booking" ? <Booking /> : null}
          {this.state.page === "profile" ? <Profile /> : null}
          {this.state.page === "rewards" ? <Mileage /> : null}
          {this.state.page === "addpassenger" ? (
            <AddPassenger setPage={this.setPage} />
          ) : null}
          {this.state.page === "addpayment" ? (
            <BookingPayment setPage={this.setPage} />
          ) : null}
        </Box>
      </div>
    );
  }
}

export default DashBoard;
