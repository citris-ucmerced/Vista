import { Helmet } from "react-helmet-async";
import { Container, Box, Typography, Grid } from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ACS from "../assets/images/acs.jpeg";

import "./styles/Location.css"

const Location = () => {
  return (
    <>
      <Helmet>
        <title>Location</title>
        <meta name="description" content="Get to know where we are located!" />
        <link rel="canonical" href="/Location" />
      </Helmet>

      <div>
        <Navbar />
        <Container>
          <Box my={4}>
            <Typography
              variant="h3"
              component="h1"
              align="center"
              className="page-title"
              gutterBottom
            >
              OUR LOCATION
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              align="center"
              fontWeight="bold"
              color="RGB(184, 192, 195)"
            >
              VISTA office is located on the third floor of the Arts and
              Computational Sciences, adjacent to the Pavilion.
            </Typography>
          </Box>
          <Grid sx={{ flexGrow: 1 }} container spacing={2} my={4}>
            <Grid item sm={12} md={6}>
              <img
                src={ACS}
                alt="Arts and Computational Sciences building located in Merced"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "0.5rem",
                }}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Grid container direction="row" style={{ height: "100%" }}>
                <Grid item>
                  <Typography padding="1rem">
                    The Arts and Computational Sciences building is part of the
                    UC Merced 2020 Project that will anchor the new Academic
                    Quad. Like all 2020 Project buildings at UC Merced, ACS has{" "}
                    <a
                      href="https://news.ucmerced.edu/news/2021/merced-2020-project-buildings-earn-leed-certification"
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="UC Merced 2020 Project buildings earn LEED certification"
                    >
                      Leadership
                    </a>{" "}
                    in Energy and Environmental Design (LEED) Platinum
                    certification by the U.S. Green Building Council.
                  </Typography>
                </Grid>
                <Grid container spacing={0} md={12}>
                  <Grid item sm={12} md={6}>
                    <Typography padding="1rem">
                      <strong>Mailing Address:</strong> <br />
                      VISTA <br />
                      University of California, Merced <br />
                      5200 North Lake Road <br />
                      Merced, CA 95343
                    </Typography>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Typography padding="1rem">
                      <strong>Physical Location:</strong> <br />
                      VISTA <br />
                      Arts and Computational Sciences, 305-310 <br />
                      University of California, Merced <br />
                      Merced, CA 95343
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="column" spacing={4} padding="1rem">
            <Grid item>
              <Typography variant="h6" fontWeight="bold">
                Walking Directions
              </Typography>
              <Typography>
                From Bellevue Lot, enter campus via University Avenue, passing
                the Welcome Center and Conference Center. Turn right onto
                Scholars Lane. After passing Little Lake on the Right, take the
                first right toward the Pavilion Dining Hall but follow the road
                right to a large concrete building. The main entrance to the
                Arts & Computational Sciences Building is on the right side
                closest to the Pavilion.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" fontWeight="bold">
                Driving Directions
              </Typography>
              <Typography>
                UC Merced, 5200 N. Lake Road, is about eight miles northeast of
                the city of Merced’s downtown area. Accessible in a few hours
                via car from the region’s major airports (San Francisco,
                Sacramento, San Jose and Fresno), UC Merced is near Highway 99
                and on the way to Yosemite National Park’s Highway 140 entrance.
                <br />
                <br />
                <a
                  href="https://www.ucmerced.edu/sites/ucmerced.edu/files/documents/uc_merced_campuswayfindingmap_final_20200420.pdf"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="UC Merced Campus Map"
                >
                  Campus Map
                </a>
                <br />
                <a
                  href="https://taps.ucmerced.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                  aria-label="UC Merced Transportation and Parking Services"
                >
                  Parking
                </a>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" fontWeight="bold">
                Directions from Southbound Highway 99
              </Typography>
              <Typography>
                <ol style={{ marginLeft: "2rem" }}>
                  <li>Head southeast on CA-99 South.</li>
                  <li>Take Exit 187B toward Martin Luther King Jr. Way.</li>
                  <li>
                    Turn left onto CA-59 North/Martin Luther King Jr. Way.
                  </li>
                  <li>Take the third right onto West 16th Street.</li>
                  <li>Take the third left onto G Street.</li>
                  <li>Turn right onto East Bellevue Road.</li>
                  <li>Turn left at Lake Road.</li>
                  <li>
                    Turn right onto Scholars Lane for the main Scholars parking
                    lot. Arrive at main entrance to the UC Merced campus.
                  </li>
                </ol>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" fontWeight="bold">
                Directions from NorthBound Highway 99
              </Typography>
              <Typography>
                <ol style={{ marginLeft: "2rem" }}>
                  <li>Head northwest on CA-99 North.</li>
                  <li>Take exit 187A for G Street.</li>
                  <li>Turn right onto G Street.</li>
                  <li>Turn right onto East Bellevue Road.</li>
                  <li>Turn left at Lake Road.</li>
                  <li>
                    Turn right onto Scholars Lane for the main Scholars parking
                    lot.{" "}
                  </li>
                </ol>
              </Typography>
            </Grid>
          </Grid>
          <Box my={4} sx={{ width: "100%", height: "28rem" }}>
            <iframe
              title="VISTA Location"
              src="https://www.google.com/maps/d/u/5/embed?mid=1Vboul_zLDhMSPtOFQVbSUH1pOeHl66A&ehbc=2E312F"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </Box>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Location;
