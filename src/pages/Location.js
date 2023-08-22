import { Helmet } from "react-helmet-async";
import { Container, Box, Typography, Grid } from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import ACS from "../assets/images/acs.jpeg";

import "./styles/Location.css";

const Location = () => {
  return (
    <>
      {/* Helmet component for setting the page title, description and canonical link */}
      <Helmet>
        <title>Location</title>
        <meta name="description" content="Get to know where we are located!" />
        <link rel="canonical" href="/Location" />
      </Helmet>

      <div>
        {/* Navbar component */}
        <Navbar />
        <Container>
          {/* Header component */}
          <Header
            title={"OUR LOCATION"}
            subtitle={
              "VISTA office is located on the third floor of the Arts and Computational Sciences, adjacent to the Pavilion."
            }
          />

          {/* Grid component for displaying location information */}
          <Grid className="location-grid" container spacing={2} my={4}>
            <Grid item sm={12} md={6}>
              {/* Image of the Arts and Computational Sciences building */}
              <img
                src={ACS}
                alt="Arts and Computational Sciences building located in Merced"
                className="location-image"
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Grid container direction="row" className="location-info">
                <Grid item>
                  {/* Text describing the Arts and Computational Sciences building */}
                  <Typography className="location-text">
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
                    {/* Mailing address */}
                    <Typography className="location-text">
                      <strong>Mailing Address:</strong> <br />
                      VISTA <br />
                      University of California, Merced <br />
                      5200 North Lake Road <br />
                      Merced, CA 95343
                    </Typography>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    {/* Physical location */}
                    <Typography className="location-text">
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

          {/* Grid component for displaying walking and driving directions */}
          <Grid container direction="column" spacing={4} className="location-directions">
            <Grid item>
              {/* Walking directions */}
              <Typography variant="h6" fontWeight="bold">
                Walking Directions
              </Typography>
              <Typography className="location-text">
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
              {/* Driving directions */}
              <Typography variant="h6" fontWeight="bold">
                Driving Directions
              </Typography>
              <Typography className="location-text">
                UC Merced, 5200 N. Lake Road, is about eight miles northeast of
                the city of Merced’s downtown area. Accessible in a few hours
                via car from the region’s major airports (San Francisco,
                Sacramento, San Jose and Fresno), UC Merced is near Highway 99
                and on the way to Yosemite National Park’s Highway 140 entrance.
                <br />
                <br />
                {/* Link to the campus map */}
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
                {/* Link to the parking information */}
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
              {/* Directions from Southbound Highway 99 */}
              <Typography variant="h6" fontWeight="bold">
                Directions from Southbound Highway 99
              </Typography>
              <Typography className="location-text">
                <ol className="location-list">
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
              {/* Directions from NorthBound Highway 99 */}
              <Typography variant="h6" fontWeight="bold">
                Directions from NorthBound Highway 99
              </Typography>
              <Typography className="location-text">
                <ol className="location-list">
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

          {/* Box component for displaying the Google Maps iframe */}
          <Box my={4} className="location-map">
            <iframe
              title="VISTA Location"
              src="https://www.google.com/maps/d/u/5/embed?mid=1Vboul_zLDhMSPtOFQVbSUH1pOeHl66A&ehbc=2E312F"
              className="location-iframe"
            />
          </Box>
        </Container>
        {/* Footer component */}
        <Footer />
      </div>
    </>
  );
};

export default Location;