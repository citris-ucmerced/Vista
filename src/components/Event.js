import { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Popover,
  MenuList,
  MenuItem,
  Paper,
  ClickAwayListener,
} from "@mui/material";
import { FaCaretDown } from "react-icons/fa";

const DateSquare = ({ date }) => {
  const day = date.toLocaleString("default", { day: "numeric" });
  const dayOfWeek = date.toLocaleString("en-US", { weekday: "short" });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "4rem",
        height: "fit-content",
        backgroundColor: "#daa900",
        borderRadius: "0.5rem",
        padding: "0.5rem",
        marginRight: "1rem",
      }}
    >
      <Typography variant="body1" component="p">
        {dayOfWeek}
      </Typography>
      <Typography variant="h5" component="h1" fontWeight="bold">
        {day}
      </Typography>
    </Box>
  );
};

const AddToCalendar = ({ event }) => {
  const { title, start, end, location, description } = event;
  const startUTC = start.toISOString().replace(/-|:|\.\d\d\d/g, "");
  const endUTC = end.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAddToCalendar = (url) => {
    window.open(url, "_blank");
    handleMenuClose();
  };

  return (
    <>
      <Button className="add-to-calendar" onClick={handleMenuOpen}>
        Add to Calendar
        <FaCaretDown style={{ marginLeft: "5px" }} />
      </Button>
      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        placement="bottom-start"
      >
        <ClickAwayListener onClickAway={handleMenuClose}>
          <Paper>
            <MenuList>
              <MenuItem
                onClick={() =>
                  handleAddToCalendar(
                    `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startUTC}/${endUTC}&details=${description}&location=${location}`
                  )
                }
              >
                Google Calendar
              </MenuItem>
              <MenuItem
                onClick={() =>
                  handleAddToCalendar(
                    `https://outlook.office.com/owa/?path=/calendar/action/compose&rrv=addevent&startdt=${startUTC}&enddt=${endUTC}&subject=${title}&location=${location}&body=${description}`
                  )
                }
              >
                Outlook Calendar
              </MenuItem>
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popover>
    </>
  );
};

const Event = ({ event }) => {
  var image = "./images/events/default.jpg";

  if (event.imageFile) {
    image = "./images/events/" + event.imageFile;
  }

  return (
    <Grid
      item
      container
      xs={12}
      key={event.id}
      className="event"
      display="flex"
      alignItems="top"
    >
      <Grid item xs={1}>
        <DateSquare date={event.start} />
      </Grid>

      <Grid item md={7} marginY="1.5rem">
        <Typography variant="h6" component="h1" fontWeight="bold">
          {event.title}
        </Typography>
        <Typography variant="body1" component="p" fontWeight="normal">
          {
            console.log(event)
          }
          {event.start.getTime() !== event.end.getTime()
            ? `${event.start.toLocaleString("default", {
                month: "short",
                day: "numeric",
              })} - ${event.end.toLocaleString("default", {
                month: "short",
                day: "numeric",
              })} `
            : ""}
        </Typography>
        <Typography variant="body1" component="p" fontWeight="normal">
          {event.location} {event.time ? `@ ${event.time} ` : ""}
        </Typography>

        <Typography
          variant="body1"
          component="p"
          marginRight="1rem"
          fontWeight="lighter"
        >
          {event.description}
        </Typography>
        <AddToCalendar event={event} />
      </Grid>

      <Grid item md={4} display="flex" justifyContent="center">
        <Box
          component="img"
          sx={{
            maxHeight: "100%",
            maxWidth: "100%",
            borderRadius: "0.5rem",
          }}
          alt="event image"
          src={image}
        />
      </Grid>
    </Grid>
  );
};

export default Event;
