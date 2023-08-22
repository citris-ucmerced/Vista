import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Typography, Box, Grid } from "@mui/material";

import { readCSV } from "../utils/CSVReader";
import eventsCSV from "../assets/sheets/events.csv";
import EventCard from "../components/EventCard";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./styles/Events.css";

const Events = () => {
  // State to hold the CSV data
  const [csvData, setCsvData] = useState([]);
  // State to hold the grouped data
  const [groupedData, setGroupedData] = useState({});

  // Load the CSV data on component mount
  useEffect(() => {
    readCSV(eventsCSV, setCsvData);
  }, []);

  // Group the CSV data by month and year on change of CSV data
  useEffect(() => {
    // Convert the date strings to Date objects
    csvData?.map((item) => {
      item.start = new Date(item.start);
      item.end = new Date(item.end);
      return item;
    });

    // Group the data by month and year
    const data = csvData.reduce((acc, item) => {
      const monthAndYear = item.start.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });

      if (!acc[monthAndYear]) {
        acc[monthAndYear] = [];
      }
      acc[monthAndYear].push(item);
      acc[monthAndYear].sort((a, b) => a.start.getDate() - b.start.getDate()); // sort days in ascending order
      return acc;
    }, {});

    // Set the grouped data state
    setGroupedData(data);
  }, [csvData]);

  return (
    <>
      <Helmet>
        <title>F3 - Farms, Food, Future</title>
        <meta
          name="description"
          content="Pioneering sustainable food production through cutting-edge research and development. Training the next generation for the future of food workforce."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <Navbar />

        <Container>
          <Box my={4}>
            <Typography
              variant="h3"
              component="h1"
              align="center"
              className="page-title"
              gutterBottom
            >
              EVENTS
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              align="center"
              fontWeight="bold"
              color="RGB(184, 192, 195)"
            >
              SAVE THE DATE FOR UPCOMING EVENTS
            </Typography>
          </Box>

          {/* Render the grouped data */}
          {Object.entries(groupedData).map(([monthAndYear, events]) => (
            <Grid container key={monthAndYear} sx={{ marginBottom: "2rem" }}>
              <Grid item xs={12} className="section">
                {/* Render the month and year */}
                <Typography variant="h6" sx={{ width: "fit-content" }}>
                  {monthAndYear}
                </Typography>
                {/* Render the line separator */}
                <span className="line"></span>
              </Grid>

              {/* Render the event cards */}
              {events.map((event, iterator) => (
                <EventCard key={iterator} event={event} />
              ))}
            </Grid>
          ))}
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default Events;