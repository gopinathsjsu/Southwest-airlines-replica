import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../../swa_logo_dark.svg";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import Typography from "@mui/material/Typography";

export default class Header extends React.Component {
  render() {
    return (
      <AppBar
        style={{ background: "#ffff" }}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar color="white">
          <Typography variant="h6" noWrap component="div">
            <Logo />
          </Typography>

          <Button
            size="small"
            sx={{ fontSize: 14 }}
            style={{ "padding-left": "700px" }}
          >
            Login
          </Button>
          <Button
            size="small"
            sx={{ fontSize: 14 }}
            style={{ "padding-left": "20px" }}
          >
            signup
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
