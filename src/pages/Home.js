import { Grid, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import vistaHomeLogo from "../assets/images/VISTA-Logo-Final-PNG-Color.png";

import "./styles/Home.css"

const Home = () => {
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
          <Grid item className="home-logo" xs={12}>
            <img src={vistaHomeLogo} alt="Vista Logo White" />
          </Grid>
          <Grid item xs={12}>
            <Typography
              className="home-subtitle"
              component="p"
              align="center"
              gutterBottom
            >
              The Valley Institute for Sustainability, Technology & Agriculture,
              is a fully-functioning research unit within the University of
              California, Merced.
            </Typography>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </>
  );
};

export default Home;
