import { Grid, Typography, Box } from "@mui/material";

const StaffSection = ({ name, title, description, imageFile }) => {
  // Construct the image path
  const image = "./images/people/" + imageFile;

  return (
    <Grid container spacing={2} mb={4} className="center">
      {/* Staff member name */}
      <Grid item xs={12}>
        <Typography variant="h5" fontWeight="bold">
          {name.toUpperCase()}
        </Typography>
      </Grid>
      {/* Staff member title */}
      <Grid item xs={12}>
        <Typography>{title}</Typography>
      </Grid>
      {/* Staff member image and description */}
      <Grid item container xs={12} lg="column" md="row">
        {/* Staff member image */}
        <Grid item sm={4} lg={2}>
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
        {/* Staff member description */}
        <Grid item sm={8} lg={10} mb={2}>
          <Box>
            <Typography className="description" sx={{paddingX: "1rem"}}>{description}</Typography>
          </Box>
        </Grid>
      </Grid>
      {/* Divider line */}
      <span
        style={{
          margin: "1rem 0",
          width: "100%",
          height: "5px",
          backgroundColor: "#daa900",
        }}
      />
    </Grid>
  );
};

export default StaffSection;