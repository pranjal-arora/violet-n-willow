import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Box,
  Typography,
  IconButton,
  Drawer,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import SearchBar from "./SearchBar";
import HeaderMenu from "./HeaderMenu";
import ListMenu from "./ListMenu";

const useStyle = makeStyles((theme) => ({
  header: {
    backgroundColor: "#b0b4fc",
    height: 60,
    paddingLeft: "10%",
    lineHeight: 0,
    display: "flex",
    justifyContent: "center",
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
    },
  },

  header_logo: {
    objectFit: "contain",
    width: 75,
    marginTop: 5,
  },
  header_container: {
    display: "flex",
    alignItems: "center",
  },
  header_subtitle: {
    fontSize: 11,
    fontStyle: "italic",
    fontWeight: 600,
    textDecoration: "none",
  },
  header_icon: {
    objectFit: "contain",
    height: 10,
    marginLeft: 3,
    alignSelf: "start",
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginRight: "7%",
      marginLeft: "-10%",
    },
  },
}));

function Header() {
  const classes = useStyle();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="header">
      <AppBar className={classes.header}>
        <Toolbar>
          <IconButton
            color="inherit"
            className={classes.menuButton}
            onClick={handleOpen}
          >
            <Menu />
          </IconButton>

          <Drawer open={open} onClose={handleClose}>
            <ListMenu handleClose={handleClose} />
          </Drawer>
          <Link to="/">
            <Box className={classes.logo_Container}>
              {/* logo */}
              <img
                className={classes.header_logo}
                src="./logo.jpeg"
                alt="Violet&Willow"
              />
              
            </Box>
          </Link>
          <SearchBar />
          <HeaderMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
