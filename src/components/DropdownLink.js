import { useState } from "react";
import { Menu, MenuItem, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { FaCaretDown } from "react-icons/fa";

const DropdownLink = ({ route }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (    
    
    <div>
      <Box onClick={handleClick} className="nav-link">
        <route.icon />
        <Box sx={{ marginInline: "10px" }}>{route.name.toUpperCase()}</Box>
        <FaCaretDown className="flipped-icon" />
      </Box>

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
