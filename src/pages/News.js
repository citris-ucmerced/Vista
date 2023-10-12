import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { readCSV } from "../utils/CSVReader.js";

import Navbar from "../components/Navbar.js";
import NewsCard from "../components/NewsCard.js";
import newsCSV from "../assets/sheets/news.csv";
import Footer from "../components/Footer.js";

import "./styles/News.css"

const News = () => {
  const [data, setData] = useState([]);
  const [newsCards, setNewsCards] = useState([]);

  useEffect(() => {
    readCSV(newsCSV, setData);
  }, []);

  useEffect(() => {
    const newsCardUI = data.map((content) => {
      return (
        <NewsCard
          title={content.title}
          fileName={content.fileName}
          link={content.link}
          description={content.description}
          date={content.date}
        />
      );
    });

    newsCardUI.sort((a, b) => new Date(b.props.date) - new Date(a.props.date));

    setNewsCards(newsCardUI);
  }, [data]);

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
          <Box className="news-card-container" mb={12}>
            {newsCards}
          </Box>
          </Container>
        <Footer />
      </div>
    </>
  );
};

export default News;