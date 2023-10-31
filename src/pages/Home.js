import { Grid, Typography, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import { readCSV } from "../utils/CSVReader.js";
import AOS from "aos";
import 'aos/dist/aos.css';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard.js";
import newsCSV from "../assets/sheets/news.csv";

import vistaHomeLogo from "../assets/images/VISTA-Logo-Final-PNG-Color.png";

import "./styles/Home.css"

const Home = () => {
  useEffect(()=>{
    AOS.init({duration: 1500});
  },[]);

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

    setNewsCards(newsCardUI.slice(0, 3));
  }, [data]);
  return (
    <>
      <Helmet>
        <title>VISTA</title>
        <meta name="description" content="Vista" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div>
        <Navbar />
        <Grid container direction="row" className="home-banner">
          <Grid item className="home-logo" xs={12} data-aos="zoom-in">
            <img src={vistaHomeLogo} alt="Vista Logo" />
          </Grid>
          <Grid item xs={12}>
            <Typography
              className="home-subtitle"
              component="p"
              align="center"
              gutterBottom = "false"
            >
              The Valley Institute for Sustainability, Technology & Agriculture,
              is a research centr at the University of
              California, Merced.
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h3" component="h1" align="center" className="page-title">
            News
        </Typography>
        <br></br>
        <Box className="news-card-container home" mb={12} data-aos="fade-up">
            {newsCards}
        </Box>
        <div style={{display:"flex", justifyContent:"center",}}><Link to="/News" className="button"> Read More</Link></div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
