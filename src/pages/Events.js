import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Typography, Box, Grid } from "@mui/material";

import { readCSV } from "../utils/CSVReader";
import eventsCSV from "../assets/sheets/events.csv";
import Event from "../components/Event"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./styles/Events.css";

const Events = () => {
  const [csvData, setCsvData] = useState([]);
  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    readCSV(eventsCSV, setCsvData);
  }, []);

  useEffect(() => {
    csvData?.map((item) => {
      item.start = new Date(item.start);
      item.end = new Date(item.end);
      return item;
    });

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

          {Object.entries(groupedData).map(([monthAndYear, events]) => (
            <Grid container key={monthAndYear} sx={{ marginBottom: "2rem" }}>
              <Grid item xs={12} className="section">
                <Typography variant="h6" sx={{ width: "fit-content" }}>
                  {monthAndYear}
                </Typography>
                <span className="line"></span>
              </Grid>

              {events.map((event) => (
                <Event event={event} />
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
