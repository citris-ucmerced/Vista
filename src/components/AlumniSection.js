import { Grid, Typography, Box } from "@mui/material";

const AlumniSection = ({ name, title, description, imageFile }) => {
  // Construct the image path
  const image = "./images/people/" + imageFile;

  return (
    <Grid
      item
      container
      sm={6}
      md={4}
      mb={4}
      direction="column"
      justifyContent="center"
      alignContent="center"
    >
      {/* Alumni image */}
      <Grid item sx={{ textAlign: "center", "&>*": { padding: "" } }}>
        <Box
          component="img"
          sx={{
            height: "192px",
            width: "192px",
            borderRadius: "1rem",
            alignContent: "center"
          }}
          alt={name}
          src={image}
          // alignItems="center"
        />
      </Grid>
      {/* Alumni name and title */}
      <Grid item sx={{ textAlign: "center", "&>*": { padding: "0.5rem" } }}>
        <Typography variant="h5" fontWeight="bold">
          {name.toUpperCase()}
        </Typography>
        {/* <Typography variant="h7" fontWeight="light">
          {title}
        </Typography> */}
      </Grid>
    </Grid>
  );
};

export default AlumniSection;