import { Grid, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import logoExtendedWhite from "../assets/images/logo-extended-white.png";

import "./styles/Home.css"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>VISTA</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div>
        <Navbar />
        <Grid container direction="row" className="home-banner">
          <Grid item className="home-logo" xs={12}>
            <img src={logoExtendedWhite} alt="Vista Logo White" />
          </Grid>
          <Grid item xs={12}>
            <Typography
              className="home-subtitle"
              component="p"
              align="center"
              sx={{
                fontSize: "1.4rem",
                marginInline: "3rem",
                marginTop: "4rem",
                maxHeight:"170px"
              }}
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
