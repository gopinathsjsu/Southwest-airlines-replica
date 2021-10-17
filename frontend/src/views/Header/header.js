import React from "react";
import { Typography } from "@material-ui/core";
import MyProfile from "@mui/icons-material/AccountBox";
import MyMessages from "@mui/icons-material/MessageRounded";
class Header extends React.Component {
  render() {
    return (
      <header style={{ "max-height": "50px", "background-color": "#5bc5a7" }}>
        <nav
          className="navbar"
          style={{ "max-height": "50px", "align-content": "center" }}
        >
          <a className="navbar-brand" href="/">
            <img
              src="https://assets.splitwise.com/assets/core/logo-wordmark-horizontal-white-short-c309b91b96261a8a993563bdadcf22a89f00ebb260f4f04fd814c2249a6e05d4.svg"
              width="150"
              height="150"
              className="d-inline-block align-top"
              alt=""
            />
          </a>
          <div>
            <MyProfile />
            <Typography>My Profile</Typography>
          </div>
          <div>
            <MyMessages />
            <Typography>Message</Typography>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
