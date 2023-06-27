import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { useState } from "react";
import SideBar from "./Sidebar";

import { FaHome, FaUsers, FaCaretDown, FaAddressBook } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const routes = [
    {
      name: "Home",
      route: "/",
      icon: FaHome,
    },
    {
      name: "About",
      route: "",
      icon: FaUsers,
      sublinks: [
        {
          name: "People",
          route: "/People",
        },
        {
          name: "Location",
          route: "/Location",
        },
      ],
    },
    {
      name: "Contact Us",
      route: "/ContactUs",
      icon: FaAddressBook,
    },
  ];

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <AppBar className="navbar">
      <Toolbar>
        <Box component="image">
          <img
            className="logo"
            src={logo}
            alt="VISTA logo"
            style={{ maxHeight: "40px", minWidth: "160px" }}
          />
        </Box>

        <Button onClick={toggleDrawer(true)} id="hamburger-menu">
          <MenuIcon />
        </Button>

        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <SideBar routes={routes} open={open} setOpen={setOpen} />
        </SwipeableDrawer>

        <div className="nav">
          {routes.map((route) => {
            if (route.sublinks === undefined) {
              return (
                <Link to={route.route} className="nav-link" key={route.name}>
                  <route.icon />
                  <Box sx={{ marginInline: "10px" }}>
                    {route.name.toUpperCase()}
                  </Box>
                </Link>
              );
            } else {
              return (
                <div className="dropdown">
                  <Link to={route.route} className="nav-link" key={route.name}>
                    <route.icon />
                    <Box sx={{ marginInline: "10px" }}>
                      {route.name.toUpperCase()}
                    </Box>
                    <FaCaretDown />

                    <div className="dropdown-content">
                      {route.sublinks.map((sublink) => (
                        <Link to={sublink.route} key={sublink.name}>
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;