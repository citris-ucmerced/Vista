import { Link } from "react-router-dom";
import { AppBar, Toolbar, Box, Button, SwipeableDrawer } from "@mui/material";
import { useState } from "react";

import { FaHome, FaUsers, FaAddressBook } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/logo.png";

import SideBar from "./Sidebar";
import DropdownLink from "./DropdownLink";

import "./styles/Navbar.css";

const Navbar = () => {
  // Define the routes for the navbar
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
        // {
        //   name: "Mission",
        //   route: "/Mission",
        // },
        {
          name: "People",
          route: "/people",
        },
        {
          name: "Location",
          route: "/location",
        },
        {
          name: "Events",
          route: "/events",
        },
        {
          name: "News",
          route: "/news",
        },
        {
          name: "Farm Robotics",
          route: "/farmbotchallenge",
        },
        {
          name: "Support Us",
          route: "https://securelb.imodules.com/s/1650/20/form.aspx?sid=1650&gid=1&pgid=474&cid=1255&dids=342&bledit=1",
        },
      ],
    },
    {
      name: "Contact Us",
      route: "/contactus",
      icon: FaAddressBook,
    },
  ];

  // Define state for the sidebar
  const [open, setOpen] = useState(false);

  // Toggle the sidebar
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
        {/* Logo */}
        <Box component="image">
          <img
            className="logo"
            src={logo}
            alt="VISTA logo"
            style={{ maxHeight: "40px", minWidth: "160px" }}
          />
        </Box>

        {/* Hamburger menu */}
        <Button onClick={toggleDrawer(true)} id="hamburger-menu">
          <MenuIcon />
        </Button>

        {/* Sidebar */}
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <SideBar routes={routes} toggleDrawer={toggleDrawer} />
        </SwipeableDrawer>

        {/* Navigation links */}
        <div className="nav">
          {routes.map((route) => {
            if (route.sublinks === undefined) {
              // Regular link
              return (
                <Link to={route.route} className="nav-link" key={route.name}>
                  <route.icon />
                  <Box sx={{ marginInline: "10px" }}>
                    {route.name.toUpperCase()}
                  </Box>
                </Link>
              );
            } else {
              // Dropdown link
              return <DropdownLink route={route} key={route.name} />;
            }
          })}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;