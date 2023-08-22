import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { FaCaretDown } from "react-icons/fa";

const DropdownLink = ({ route }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Open the dropdown menu when the user clicks on the link
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the dropdown menu when the user clicks outside of it
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Close the dropdown menu when the user scrolls
  useEffect(() => {
    document.addEventListener("scroll", handleClose, true);
  }, []);

  // Remove the event listener when the component unmounts
  useEffect(
    () => () => {
      document.removeEventListener("scroll", handleClose, true);
    },
    []
  );

  return (
    <div>
      {/* The link that opens the dropdown menu */}
      <Box onClick={handleClick} className="nav-link">
        <route.icon />
        <Box sx={{ marginInline: "10px" }}>{route.name.toUpperCase()}</Box>
        <FaCaretDown className="flipped-icon" />
      </Box>

      {/* The dropdown menu */}
      <Menu
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        open={open}
        onClose={handleClose}
        className="dropdown-content"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ marginTop: "5px" }}
      >
        {/* The sublinks in the dropdown menu */}
        {route.sublinks.map((sublink, index) => (
          <MenuItem sx={{ width: "140px" }} key={index}>
            <Link
              to={sublink.route}
              key={sublink.name}
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                width: "100%",
                height: "100%"
              }}
            >
              {sublink.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropdownLink;