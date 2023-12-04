import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { readCSV } from "../utils/CSVReader.js";

import Navbar from "../components/Navbar.js";
import NewsCard from "../components/NewsCard.js";
import newsCSV from "../assets/sheets/news.csv";
import Footer from "../components/Footer.js";

import "./styles/News.css"

const toSlug = (title) => {
  return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};

function previewDescription(description){
  let truncatedText = description.slice(0, 250);
  truncatedText = truncatedText + ("... Click to continue reading!")
  return truncatedText;
} 

const News = () => {
  const [data, setData] = useState([]);
  // const [newsCards, setNewsCards] = useState([]);

  useEffect(() => {
    readCSV(newsCSV, setData);
  }, []);

  const newsCards = data && data.map((content, index) => (

    <NewsCard
      key={index}
      title={content.title}
      author={content.author}
      // position={content.position}     
      fileName={content.fileName}
      link={`/News/${toSlug(content.title)}`}
      description={`${previewDescription(content.description)}`}
      date={content.date}
    />
  ));

    newsCards.sort((a, b) => new Date(b.props.date) - new Date(a.props.date));

  return (
    <>
      <Helmet>
        <title>News</title>
        <meta name="description" content="Check out recent F3 news!" />
        <link rel="canonical" href="/News" />
      </Helmet>

      <div className="page">
        <Navbar />
        <Container>
          <box my={4}>
          <Typography variant="h3" component="h1" align="center" className="page-title">
            News
          </Typography>
          <Typography
                variant="h6"
                component="h1"
                align="center"
                fontWeight="bold"
                color="RGB(184, 192, 195)"
              >
                Stay Updated on Sustainability, Tech, and Agriculture
              </Typography>
              <br></br>
          </box>
          </Container>
          <Box className="news-card-container" mb={12}>
            {newsCards}
          </Box>
        <Footer />
      </div>
    </>
  );
};

export default News;