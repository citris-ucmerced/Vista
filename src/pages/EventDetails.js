import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Container, Box, Typography } from "@mui/material";
import Carousel from "nuka-carousel";

import { getRowById } from "../utils/CSVReader.js";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

import eventsCSV from "../assets/sheets/events.csv";

import "./styles/EventDetails.css";

const ListLinks = ({ links }) => {
  /*
    parses title within [], link within "", splits by comma, and removes whitespaces
    
    e.g.
      input: ' [Google]"https://www.google.com", [Facebook]"https://www.facebook.com" '

      output: [['Google', 'https://www.google.com'], ['Facebook', 'https://www.facebook.com']]
  */

  const parseTitleAndLinkRegex = /\[(.*?)\]"\s*(.*?)\s*"(?:\s*,\s*|$)/g;

  let match;
  let pairs = [];

  while ((match = parseTitleAndLinkRegex.exec(links))) {
    const title = match[1].trim();
    const url = match[2].trim();
    const newPair = [title, url];
    pairs.push(newPair);
  }

  return (
    <Box>
      <Typography variant="h5" component="p" align="center">
        Links
      </Typography>
      <Box sx={{ marginLeft: "2rem" }}>
        <ul>
          {pairs.map((pair, index) => {
            return (
              <Typography
                variant="h6"
                component="p"
                className="event-link"
                key={index}
              >
                <li>
                  <a
                    href={pair[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${pair[0]} website`}
                  >
                    {pair[0]}
                  </a>
                </li>
              </Typography>
            );
          })}
        </ul>
      </Box>
    </Box>
  );
};

const Form = ({ url }) => {
  return (
    <Box sx={{ marginY: "2rem", height: "90vh", overflow: "hidden" }}>
      <Typography variant="h6" component="p">
        <iframe
          src={url}
          style={{ width: "100%", height: "550px", border: "none" }}
        />
      </Typography>
    </Box>
  );
};

const ImageCarousel = ({ imageFiles }) => {
  const images = imageFiles.split(",").map((img) => img.trim()); // split by comma and remove whitespace

  return (
    <Carousel
      autoplay={true}
      wrapAround={true}
      swiping={true}
      className="carousel"
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={process.env.PUBLIC_URL + "/images/events/" + image}
          alt="Event"
          className="carousel-image"
        />
      ))}
    </Carousel>
  );
};

const EventDetails = () => {
  const { id } = useParams();

  const [event, setEvent] = useState({});

  // Use the id parameter to fetch data for the event with that id
  useEffect(() => {
    getRowById(eventsCSV, id, setEvent);
  }, []);

  const {
    title,
    description,
    start,
    time,
    location,
    imageFiles,
    iframeSrc,
    links,
  } = event;

  const subtitle = ` ${location} @ ${time} on ${start}`;
  return (
    <>
      <Helmet>
        <title>VISTA</title>
        <meta name="description" content="" />
      </Helmet>

      <div>
        <Navbar />

        <Container>
          <Header title={title} subtitle={subtitle} />
          <Box sx={{ marginY: "2rem" }}>
            <Typography variant="h6" component="p">
              {description}
            </Typography>
          </Box>

          {links && <ListLinks links={links} />}

          {imageFiles && <ImageCarousel imageFiles={imageFiles} />}

          {iframeSrc && <Form url={iframeSrc} />}
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default EventDetails;
