import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>VISTA</title>
        <meta name="description" content=""/>
        <link rel="canonical" href="/" />
      </Helmet>

      <div>
        <Navbar />
        <Typography variant="h4" component="h1" align="center"  gutterBottom>
          Welcome to VISTA homepage
        </Typography>
        <Footer />
      </div>
    </>
  );
};

export default Home;
