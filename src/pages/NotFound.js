import { Grid, Typography, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BiSolidError } from "react-icons/bi";

import "./styles/NotFound.css"

const NotFound = () => {
  return (
    <>
      {/* Set the page title */}
      <Helmet>
        <title>Not Found</title>
      </Helmet>

      {/* Display the error message */}
      <Box className="centered full-view">
        <Grid
          container
          spacing={3}
          display="flex"
          alignItems="center"
          direction="row"
        >
          {/* Error icon */}
          <Grid item xs={12} className="centered" sx={{ color: "yellow" }}>
            <BiSolidError size={100} />
          </Grid>
          {/* Error message */}
          <Grid item xs={12} className="centered">
            <Typography variant="h4" className="errorMessage">
              Oops! Page not found.
            </Typography>
          </Grid>
          {/* Link to go back to the home page */}
          <Grid item xs={12} className="centered">
            <Link to="/" className="go-home-link">
              <Typography variant="h5">Go Home</Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NotFound;