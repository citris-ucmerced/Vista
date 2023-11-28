import { Helmet } from "react-helmet-async";
import { Container, Box, Typography, Grid } from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import f3Logo from "../assets/images/F3_Logo.png";
import swfLogo from "../assets/images/swfLogo.jpeg"
import citrisLogo from "../assets/images/citrisLogo.png"


const Mission = () => {
  return (
    <>
      {/* Helmet component for setting the page title, description and canonical link */}
      <Helmet>
        <title>Mission</title>
        <meta name="description" content="Get to know how VISTA started" />
        <link rel="canonical" href="/Mission" />
      </Helmet>

      <div>
        {/* Navbar component */}
        <Navbar />
        {/* Header */}
        <Container>
          <Header
            title={"ABOUT US"}
          />
        </Container>

        {/* Body */}
        <Container>
            <Typography variant="h5" fontWeight="bold">
                Mission
                
            </Typography>

            {/* <Typography variant="h5" fontWeight="bold">
                Goals
            </Typography> */}

            {/* Partner list */}
            <Typography variant="h5" fontWeight="bold">
                Our Other Orgs
            </Typography>

            <Grid container spacing="auto" md={12}>
              {/* F3 */}
                  <Grid item sm={12} md={6}>
                    <p> <strong>F</strong>uture <strong>F</strong>arms <strong>F</strong>ood (F3):</p>
                    <Typography className="location-text">
                      <Box
                        component="img"
                        sx={{
                        maxHeight: "12rem",
                        maxWidth: "12rem",
                        borderRadius: "1rem",
                        }}
                        src={f3Logo}
                      />
                    </Typography>
                  </Grid>
                  <Grid item sm="auto" md={6}>
                      <p className="indentText">F3 Innovate is the nation’s hub for climate-smart agrifood technology and engineering. With access to federal and state backing, test sites, and research labs, F3 Innovate is equipped to design and support the next generation of engineering solutions for sustainable food production around the world.</p>
                    <a className="link center" href="https://f3.ucmerced.edu/Mission">Vist F3 Stie</a>
                  </Grid>

                  {/* SWF */}
                    <Grid item sm={12} md={6}>
                      <Typography className="location-text">
                        <p><b>SWF</b>:  <strong>S</strong>ecure <strong>W</strong>ater <strong>F</strong>uture </p>
                        <Box
                          component="img"
                          sx={{
                          maxHeight: "12rem",
                          maxWidth: "12rem",
                          borderRadius: "1rem",
                          }}
                          src={swfLogo}
                        />
                      </Typography>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <p>Secure Water Future is a collaborative of investigators from across the semi-arid western US aiming to improve agricultural and environmental water resilience. To achieve climate change adaptation in western agriculture and ecosystems, we need better information and flexible institutions for our most precious resource—water.</p>
                        <a className="link" href="https://securewaterfuture.net/swf">Vist SWF Site</a>
                    </Grid>
                  {/* CITRIS */}
                  <Grid item sm={12} md={6}>
                    <Typography className="location-text">
                      <p><b>CITRIS</b>: The <strong>C</strong>enter for <strong>I</strong>nformation <strong>T</strong>echnology <strong>R</strong>esearch in the <strong>I</strong>nterest of <strong>S</strong>ociety </p>
                      <Box
                        component="img"
                        sx={{
                        maxHeight: "12rem",
                        maxWidth: "12rem",
                        borderRadius: "1rem",
                        }}
                        src={citrisLogo}
                      />
                    </Typography>
                  </Grid>

                  <Grid item sm="auto" md={6}>
                      <p>CITRIS is a fully-functioning research unit with the University of California, Merced and is recognized as one of the four CITRIS campuses: UC Merced, UC Berkeley, UC Davis, and UC Santa Cruz. CITRIS develops synergistic partnerships with academic institutions and corporate collaborators worldwide to collectively produce innovative solutions to challenges in four primary sectors.</p>
                      <a className="link" href="https://securewaterfuture.net/swf">Vist SWF Site</a>
                  </Grid>
          </Grid>
        </Container>
        {/* Footer component */}
        <Footer />
      </div>
    </>
  );
};

export default Mission;