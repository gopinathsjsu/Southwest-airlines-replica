import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [openCartVal, setOpenCart] = useState(false);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    axios.get(`http://${window.location.hostname}:3001/cart`).then((res) => {
      console.log("hello", res);
      setCartData(res.data);
    });
  }, []);

  function openCart() {
    setOpenCart(true);
  }

  function closeCart() {
    setOpenCart(false);
  }
  //   var addToCart =()=>{
  //     const data = {itemId: props.item.id, customerId: 1}
  //     axios.post(`http://${window.location.hostname}:3001/addToCart', data)
  //     .then(
  //         res => {
  //             alert("Item added to cart.");
  //         }
  //     )
  // }
  function removeItem(id) {
    const data = { itemId: id };
    axios
      .post(`http://${window.location.hostname}:3001/removeFromCart`, data)
      .then((res) => {
        //setCartData(res.data);
        let arr = [...cartData];
        const index = arr.findIndex((ele) => {
          return id === ele.id;
        });
        arr.splice(index, 1);
        setCartData(arr);
        if (arr.length == 0) {
          closeCart();
        }
      });

    //call backedn API to remove this item from cart
  }

  return (
    <div className={classes.root}>
      <AppBar style={{ background: "white" }} position="static">
        <Toolbar>
          <h5
            className={classes.title}
            style={{ color: "blue", fontSize: "30px", margin: "0px" }}
          >
            SOUTHWEST
          </h5>
          <h5
            className={classes.title}
            style={{ color: "blue", fontSize: "30px", margin: "0px" }}
          >
            AIRLINES
          </h5>
          {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}

          {/* <Button variant="extended" style={{background: 'grey', color:'black', position:'absolute', right:'2%'}} > Sign in</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
