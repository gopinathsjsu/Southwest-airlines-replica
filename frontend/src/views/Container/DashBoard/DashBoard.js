import * as React from "react";

import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../../../swa_logo_dark.svg";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
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
//import Profile from "../../";
const drawerWidth = 240;
class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "search",
    };
  }
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

  render() {
    return (
      <div>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            style={{ background: "#ffff" }}
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar color="white">
              <Typography variant="h6" noWrap component="div">
                <Logo />
              </Typography>
            </Toolbar>
          </AppBar>
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
                <ListItem button key="Rewards">
                  <ListItemIcon>
                    <Loyalty />
                  </ListItemIcon>
                  <ListItemText primary="Rewards" />
                </ListItem>
                <ListItem button key="MyBookings" onClick={this.handleBooking}>
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
              </List>
              <Divider />
              <List>
                {["Logout"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <Logout />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {this.state.page === "search" ? <SearchFlight /> : null}
            {this.state.page === "payment" ? <Payment /> : null}
            {this.state.page === "booking" ? <Booking /> : null}
          </Box>
        </Box>
      </div>
    );
  }
}

export default DashBoard;
