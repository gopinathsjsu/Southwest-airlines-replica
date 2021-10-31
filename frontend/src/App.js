import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
//import SignIn from "./views/SignIn/";
import "./App.css";
import Header from "../src/views/Header/header";
import DashBoard from "../src/views/Container/DashBoard/DashBoard";

import DisplayFlights from "../src/views/Search/DisplayFlights";

import { createMuiTheme } from "@material-ui/core/styles";

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
  return (
    <Router>
      <div className="AirlineApp">
        {/* <Header isLoggedIn={isLoggedIn} onIsLoggedIn={onIsLoggedIn} /> */}
        <Header />
        <Container fluid>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route path="/dashboard" exact component={() => <DashBoard />} />
              <Route
                path="/displayFlights"
                render={(props) => <DisplayFlights {...props} />}
              />
              {/* <Route path='/home' exact component={() => <Home isLoggedIn={isLoggedIn} onIsLoggedIn={onIsLoggedIn} />} /> */}
            </Switch>
          </ThemeProvider>
        </Container>
      </div>
    </Router>
  );
}

export default App;
