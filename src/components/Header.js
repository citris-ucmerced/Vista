import { Box, Typography } from "@mui/material";

const Header = ({title, subtitle}) => {
    return (
        <Box my={4}>
            <Typography
              variant="h3"
              component="h1"
              align="center"
              className="page-title"
              gutterBottom
            >
              {/* OUR LOCATION */}
              {title}
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              align="center"
              fontWeight="bold"
              color="RGB(184, 192, 195)"
            >
              {/* VISTA office is located on the third floor of the Arts and
              Computational Sciences, adjacent to the Pavilion. */}
              {subtitle}
            </Typography>
          </Box>
    )
}

export default Header;