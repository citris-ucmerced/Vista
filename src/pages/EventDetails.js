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

// Component to render the list of links
const ListLinks = ({ links }) => {
  // Regular expression to parse the title and link from the input string
  const parseTitleAndLinkRegex = /\[(.*?)\]"\s*(.*?)\s*"(?:\s*,\s*|$)/g;

  // Array to hold the parsed title and link pairs
  let pairs = [];

  // Loop through the input string and extract the title and link pairs
  let match;
  while ((match = parseTitleAndLinkRegex.exec(links))) {
    const title = match[1].trim();
    const url = match[2].trim();

    const newPair = [title, url];
    pairs.push(newPair);
  }
  // Render the list of links
  return (
    <Box marginTop="3rem" marginBottom="5rem">
      <Typography variant="h5" component="p" align="center">
        Links
      </Typography>
      <ul>
        <Typography 
          variant="h6"
          align="center"
          component="p"
          // className="event-link"
          title={`Visit ${links} website`}
          // key={links}
        >
          <a class="link" href={links} aria-label={links}>Event Info</a>
        </Typography>
      </ul>
      {pairs.length > 0 && (
        <Box sx={{ marginLeft: "2rem", marginTop: "1rem" }}>
          <ul>
            {pairs.map((pair, index) => (
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
            ))}
          </ul>
        </Box>
        
      )}
    </Box>
  );
};

// Component to render the form
const Form = ({ url }) => {
  return (
    <Box sx={{ marginY: "2rem", height: "90vh", overflow: "hidden" }}>
      <Typography variant="h5" component="p" align="center" marginBottom="2rem">
        Form
      </Typography>
      <Typography variant="h6" component="p">
        <iframe
          src={url}
          style={{ width: "100%", height: "550px", border: "none" }}
        />
      </Typography>
    </Box>
  );
};

// Component to render the image carousel
const ImageCarousel = ({ imageFiles }) => {
  // Split the image file names by comma and remove whitespace
  const images = imageFiles.split(",").map((img) => img.trim());

  // Render the image carousel
  return (
    <>
      <Typography variant="h5" component="p" align="center">

      </Typography>
      <Carousel
        autoplay={false}
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
    </>
  );
};

const EventDetails = () => {
  // Get the id parameter from the URL
  const { id } = useParams();

  // State to hold the event data
  const [event, setEvent] = useState({});

  // Use the id parameter to fetch data for the event with that id
  useEffect(() => {
    getRowById(eventsCSV, id, setEvent);
  }, []);

  //csv elements for specific event
  const{
    coverImageFile,
    description,
    flyerCoverFile,
    iframeSrc,
    imageFiles,
    links,
    location,
    start,
    summary,
    tags,
    time,
    title
  } = event;

  // Generate the subtitle
  const subtitle = ` ${location} @ ${time} on ${start}`;

  // Render the event details page
  console.log('Flyer Cover File:', event);
  return (
    <>
      <Helmet>
        <title>VISTA</title>
        <meta name="description" content="" />
      </Helmet>

      <div className="page">
        <Navbar />
        
        <Container sx={{ minHeight: "90vh" }}>
          {/* Render the header */}
          <Header title={title} subtitle={subtitle} />
           
          {/* Render the event description */}
          <Box sx={{ marginY: "2rem" }}>
            <Typography
              variant="h6"
              component="p"
              className="custom-card"
              padding="1rem"
            >
              {summary}
            </Typography>
          </Box>

          {/* Conditionally render the event flyer */}
          {flyerCoverFile && description && <span className="divider" />}
          {flyerCoverFile && description && (
            <Box>
              <a
                href={process.env.PUBLIC_URL + "/flyers/" + description}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/flyers/" + flyerCoverFile}
                  alt="Event"
                  className="flyer-image"
                />
              </a>
            </Box>
          )}  
          {console.log(flyerCoverFile)}

          {/* Conditionally render the image carousel */}
          {imageFiles ? (
            <ImageCarousel imageFiles={imageFiles} />
          ) : (
            <div className="">
              <img
              // key={index}
              src={process.env.PUBLIC_URL + "/images/events/" + coverImageFile}
              alt="Event"
              className="carousel-image"
            />
            </div>
          )}

          {/*Conditionally  render the form */}
          {iframeSrc && <span className="divider" />}
          {/* {links && <Form url={links} />} */}
            {/* iframSrc are https://forms.office.com links */}
          {iframeSrc ? (
            <Form url={iframeSrc} />
          ) : (
            /* Conditionally render the list of links */
            links ? (
              <>
                <ListLinks links={links} />
                <link rel="canonical" href={links} />
              </>
            ) : null
          )}
        </Container>

        <Footer />
      </div>
    </>
  );
};
export default EventDetails;
