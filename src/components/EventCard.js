import { useState } from "react";
import {
  Grid,
  Box,
  Chip,
  Typography,
  Button,
  Popover,
  MenuList,
  MenuItem,
  Paper,
  ClickAwayListener,
} from "@mui/material";
import { FaCaretDown } from "react-icons/fa";
import "./styles/EventCard.css";

// Component for the date square in the event card
const DateSquare = ({ date }) => {
  const day = date.toLocaleString("default", { day: "numeric" });
  const dayOfWeek = date.toLocaleString("en-US", { weekday: "short" });

  return (
    <Box
      className="date-square"
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

// Component for the "Add to Calendar" button in the event card
const AddToCalendar = ({ event }) => {
  const { title, start, end, location, summary } = event;
  const startUTC = start.toISOString().replace(/-|:|\.\d\d\d/g, "");
  const endUTC = end.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const [anchorEl, setAnchorEl] = useState(null);

  // Open the "Add to Calendar" menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the "Add to Calendar" menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Open the calendar link in a new tab and close the menu
  const handleAddToCalendar = (url) => {
    window.open(url, "_blank");
    handleMenuClose();
  };

  return (
    <>
      <Button
        className="add-to-calendar"
        onClick={handleMenuOpen}
      >
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
              {/* Google Calendar link */}
              <MenuItem
                onClick={() =>
                  handleAddToCalendar(
                    `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startUTC}/${endUTC}&details=${summary}&location=${location}`
                  )
                }
              >
                Google Calendar
              </MenuItem>
              {/* Outlook Calendar link */}
              <MenuItem
                onClick={() =>
                  handleAddToCalendar(
                    `https://outlook.office.com/owa/?path=/calendar/action/compose&rrv=addevent&startdt=${startUTC}&enddt=${endUTC}&subject=${title}&location=${location}&body=${summary}`
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

// Component for the event card
const EventCard = ({ event }) => {
  const {
    id,
    title,
    start,
    end,
    location,
    summary,
    time,
    tags,
    coverImageFile,
  } = event;

  const tagsArr = tags.split(",").map((tag) => tag.toUpperCase());
  const url = `/events/${id}`;

  const [image, setImage] = useState(`./images/events/${coverImageFile}`);

  // Handle image loading errors by setting the image to the default image
  const handleImageError = (e) => {
    setImage("./images/events/default.jpg");
  };

  return (
    <Grid
      item
      container
      xs={12}
      id={id}
      className="event"
    >
      {/* Date square */}
      <Grid item xs={1}>
        <DateSquare date={start} />
      </Grid>

      {/* Event details */}
      <Grid
        item
        container
        md={7}
        marginY="1.5rem"
        display="flex"
        direction="column"
      >
        {/* Event title */}
        <a href={url} className="event-title" style={{ marginBottom: "10px" }}>
          <Typography variant="h6" component="h1" fontWeight="700">
            {title}
          </Typography>
        </a>
        {/* Event date and time */}
        <Typography variant="body1" component="p" fontWeight="500">
          {start.getTime() !== end.getTime()
            ? `${start.toLocaleString("default", {
                month: "short",
                day: "numeric",
              })} - ${end.toLocaleString("default", {
                month: "short",
                day: "numeric",
              })} `
            : ""}
        </Typography>
        {/* Event location and time */}
        <Typography variant="body1" component="p" fontWeight="400">
          {location} {time ? `@ ${time} ` : ""}
        </Typography>

        {/* Event summary */}
        <Typography
          variant="body1"
          component="p"
          marginTop="10px"
          marginRight="1rem"
          fontWeight="200"
        >
          {summary}
        </Typography>

        {/* "Add to Calendar" button */}
        <AddToCalendar event={event} />

        {/* Event tags */}
        <Box sx={{ marginTop: "1rem" }}>
          {tagsArr.map((tag, iterator) => (
            <Chip
              key={iterator}
              label={tag}
              className={`tag ${tag.toLowerCase()}`}
              variant="outlined"
            />
          ))}
        </Box>
      </Grid>

      {/* Event image */}
      <Grid item md={4} display="flex" justifyContent="center">
        <Box
          component="img"
          className="event-image"
          href={url}
          alt="event image"
          src={image}
          onError={handleImageError}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = url;
          }}
        />
      </Grid>
    </Grid>
  );
};

export default EventCard;