import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import logoExtendedWhite from "../assets/images/logo-extended-white.png";

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
        <Box className="home-banner">
          <Box className="home-logo">
            {/*<img src={logoExtendedWhite} alt="Vista Logo White"/>*/}
          </Box>
          <Typography
            className="home-subtitle"
            component="p"
            align="center"
            sx={{ 
              fontSize: "1.4rem",
              marginInline: "3rem",
            }}
            gutterBottom
          >
            The Valley Institute for Sustainability, Technology & Agriculture,
            is a fully-functioning research unit within the University of
            California, Merced.
          </Typography>
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default Home;
