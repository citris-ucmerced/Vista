import { Grid, Typography, Box } from "@mui/material";

const StaffSection = ({ name, title, description, imageFile }) => {
  const image = "./images/people/" + imageFile;

  return (
    <Grid container spacing={2} mb={4} className="center">
      <Grid item xs={12}>
        <Typography variant="h5" fontWeight="bold">
          {name.toUpperCase()}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item container xs={12}>
        <Grid item sm={12} md={2}>
          <Box
            component="img"
            sx={{
              maxHeight: "10rem",
              maxWidth: "10rem",
              borderRadius: "1rem",
            }}
            alt={name}
            src={image}
          />
        </Grid>
        <Grid item sm={12} md={10} mb={2}>
          <Typography className="description">{description}</Typography>
        </Grid>
      </Grid>
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
