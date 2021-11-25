import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Header from "../src/views/Header/header";
import DashBoard from "../src/views/Container/DashBoard/DashBoard";
import React, { useState } from "react";
import DisplayFlights from "../src/views/Search/DisplayFlights";
import Login from "./views/Login/login";
import SignUp from "./views/Registration/registration";

import { createMuiTheme } from "@material-ui/core/styles";
import AddPassenger from "../src/views/Passenger/AddPassenger";
import BookingPayment from "../src/views/Payment/BookingPayment";
import BookingReview from "../src/views/Payment/BookingReview";
import FlightIcon from "@mui/icons-material/Flight";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b12a30",
    },
    secondary: {
      main: "#ff4400",
      contrastText: "#ffcc00",
    },
  },
});

function App() {
  const [state, setState] = React.useState({ user: null });
  function handleUser() {
    setState({ ...state, user: JSON.parse(localStorage.getItem("user")) });
  }
  return (
    <Router>
      <div className="AirlineApp">
        {/* <Header isLoggedIn={isLoggedIn} onIsLoggedIn={onIsLoggedIn} /> */}
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Header user={state.user} />
          <Container fluid>
            <ThemeProvider theme={theme}>
              <Switch>
                <Route
                  path="/dashboard"
                  exact
                  component={() => <DashBoard />}
                />
                <Route
                  path="/displayFlights"
                  render={(props) => <DisplayFlights {...props} />}
                />
                <Route
                  path="/"
                  exact
                  component={() => <Login handleUser={handleUser} />}
                />
                <Route path="/signup" exact component={() => <SignUp />} />
                <Route
                  path="/addpassenger"
                  exact
                  component={() => <AddPassenger />}
                />
                <Route
                  path="/bookingpayment"
                  exact
                  component={() => <BookingPayment />}
                />

                <Route
                  path="/bookingreview"
                  exact
                  component={() => <BookingReview />}
                />

                {/* <Route path='/home' exact component={() => <Home isLoggedIn={isLoggedIn} onIsLoggedIn={onIsLoggedIn} />} /> */}
              </Switch>
            </ThemeProvider>
          </Container>
        </Box>
      </div>
    </Router>
  );
}

export default App;
