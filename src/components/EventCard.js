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
  const { title, start, end, location, summary } = event;
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
      <Button
        className="add-to-calendar"
        onClick={handleMenuOpen}
        sx={{ width: "fit-content" }}
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
              <MenuItem
                onClick={() =>
                  handleAddToCalendar(
                    `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startUTC}/${endUTC}&details=${summary}&location=${location}`
                  )
                }
              >
                Google Calendar
              </MenuItem>
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
    coverImageFile
  } = event;

  const tagsArr = tags.split(",").map((tag) => tag.toUpperCase()); // convert tags to array then convert to uppercase
  const url = `/events/${id}`;

  const [image, setImage] = useState(`./images/events/${coverImageFile}`);

  const handleImageError = (e) => {
    setImage("./images/events/default.jpg");
  }

  return (
    <Grid
      item
      container
      xs={12}
      id={id}
      className="event"
      display="flex"
      alignItems="top"
    >
      <Grid item xs={1}>
        <DateSquare date={start} />
      </Grid>

      <Grid item container md={7} marginY="1.5rem" display="flex" direction="column">
        <a href={url} className="event-title" style={{marginBottom: "10px"}}>
          <Typography variant="h6" component="h1" fontWeight="700" >
            {title}
          </Typography>
        </a>
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
        <Typography variant="body1" component="p" fontWeight="400">
          {location} {time ? `@ ${time} ` : ""}
        </Typography>

        <Typography
          variant="body1"
          component="p"
          marginTop="10px"
          marginRight="1rem"
          fontWeight="200"
        >
          {summary}
        </Typography>

        <AddToCalendar event={event} />

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

      <Grid item md={4} display="flex" justifyContent="center">
        <Box
          component="img"
          sx={{
            maxHeight: "100%",
            maxWidth: "100%",
            borderRadius: "0.5rem",
            objectFit: "cover",
            cursor: "pointer"
          }}
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
