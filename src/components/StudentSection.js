import { Grid, Typography, Box } from "@mui/material";

const StudentSection = ({ name, title, description, imageFile }) => {
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
      <Grid item>
        <Box
          component="img"
          sx={{
            maxHeight: "12rem",
            maxWidth: "12rem",
            borderRadius: "1rem",
          }}
          alt={name}
          src={image}
        />
      </Grid>
      <Grid item sx={{ textAlign: "center", "&>*": { padding: "0.5rem" } }}>
        <Typography variant="h5" fontWeight="bold">
          {name.toUpperCase()}
        </Typography>
        <Typography variant="h7" fontWeight="light">
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default StudentSection;
