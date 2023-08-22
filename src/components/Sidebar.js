import { Link } from "react-router-dom";
import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FaCaretDown } from "react-icons/fa";

const SideBar = ({ routes, toggleDrawer }) => {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {/* Map over the routes and create a list item for each one */}
        {routes.map((route) => {
          if (route.sublinks === undefined) {
            // Regular link
            return (
              <ListItem key={route.name} disablePadding>
                <ListItemButton component={Link} to={route.route}>
                  <ListItemText primary={route.name.toUpperCase()} />
                </ListItemButton>
              </ListItem>
            );
          } else {
            // Dropdown link
            return (
              <div key={route.name}>
                {/* Dropdown link button */}
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={route.name.toUpperCase()} />
                    <FaCaretDown />
                  </ListItemButton>
                </ListItem>
                {/* Dropdown sublinks */}
                {route.sublinks.map((sublink) => (
                  <ListItem key={sublink.name} disablePadding sx={{ paddingLeft: "20px"}}>
                    <ListItemButton component={Link} to={sublink.route}>
                      <ListItemText primary={sublink.name.toUpperCase()} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </div>
            );
          }
        })}
      </List>
    </Box>
  );
};

export default SideBar;