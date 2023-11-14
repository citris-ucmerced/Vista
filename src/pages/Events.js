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
  const [csvData, setCsvData] = useState([]);
  const [futureEvents, setFutureEvents] = useState({});
  const [pastEvents, setPastEvents] = useState({});

  useEffect(() => {
    readCSV(eventsCSV, setCsvData);
  }, []);

  useEffect(() => {
    csvData?.map((item) => {
      item.start = new Date(item.start);
      item.end = new Date(item.end);
      return item;
    });

    const currentDate = new Date();

    const futureData = csvData.reduce((acc, item) => {
      const monthAndYear = item.start.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });

      if (item.start >= currentDate) {
        if (!acc[monthAndYear]) {
          acc[monthAndYear] = [];
        }
        acc[monthAndYear].push(item);
        acc[monthAndYear].sort((a, b) => a.start.getDate() - b.start.getDate()); // sort days in ascending order
      }

      return acc;
    }, {});

    const pastData = csvData.reduce((acc, item) => {
      if (item.start < currentDate) {
        const monthAndYear = item.start.toLocaleString("default", {
          month: "long",
          year: "numeric",
        });

        if (!acc[monthAndYear]) {
          acc[monthAndYear] = [];
        }
        acc[monthAndYear].push(item);
        acc[monthAndYear].sort((a, b) => b.start.getDate() - a.start.getDate()); // sort days in descending order for past events
      }

      return acc;
    }, {});

    setFutureEvents(futureData);
    setPastEvents(pastData);
  }, [csvData]);

  return (
    <>
      <Helmet>
        <title>VISTA</title>
        <meta
          name="description"
          content="Pioneering sustainable food production through cutting-edge research and development. Training the next generation for the future of food workforce."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="page">
        <Navbar />

        <Container>
          <Typography variant="h2" component="h1" align="center" className="page-title">
            Events
          </Typography>

          {/* Display Future Events */}

          {Object.keys(futureEvents).length === 0 ? (
            <Typography               variant="h6"
            component="h1"
            align="center"
            fontWeight="bold"
            color="RGB(184, 192, 195)"
            margin={"11rem 11rem"}
            >
            THERE ARE CURRENTLY NO UPCOMING EVENTS, KEEP AN EYE OUT FOR UPDATES!
            </Typography>
          ) : (
            <>
          {Object.entries(futureEvents).map(([monthAndYear, events]) => (
            <Grid container key={monthAndYear} sx={{ marginBottom: "2rem" }}>
              <Grid item xs={12} className="section">
                <Typography variant="h6" sx={{width: "fit-content" }}>
                  {monthAndYear}
                </Typography>
                <span className="line"></span>
              </Grid>

              {events.map((event, iterator) => (
                <EventCard key={iterator} event={event} />
              ))}
            </Grid>
          ))}
            </>
        )}

          {/* Display Past Events */}

          <Typography variant="h3" component="h1"align="center" className="page-title">
            Past Events
          </Typography>
          {Object.keys(pastEvents).length === 0 ? (
            <Typography               variant="h6"
            component="h1"
            align="center"
            fontWeight="bold"
            color="RGB(184, 192, 195)"
            margin={"2rem 2rem"}
            >There are currently no past events.</Typography>
          ) : (
            <>
          {Object.entries(pastEvents).map(([monthAndYear, events]) => (
            <Grid container key={monthAndYear} sx={{ marginBottom: "2rem" }}>
              <Grid item xs={12} className="section">
                <Typography variant="h6" sx={{ width: "fit-content" }}>
                  {monthAndYear}
                </Typography>
                <span className="line"></span>
              </Grid>

              {events.map((event, iterator) => (
                <EventCard key={iterator} event={event} />
              ))}
            </Grid>
          ))}
            </>
        )}
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default Events;