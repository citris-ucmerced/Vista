import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { AiFillHome } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import "./styles/Footer.css";

const Footer = () => {
  return (
    <Box
      className="footer"
      sx={{
        paddingY: "2rem",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
        p={1}
      >
        <Box>
          <Typography
            variant="h5"
            component="h1"
            align="center"
            gutterBottom
            sx={{
              color: "white",
              fontWeight: "bold",
              backgroundColor: "#daa900",
              paddingX: "2rem",
              borderRadius: "1rem",
              zIndex: 2,
              position: "relative"
            }}
          >
            GET IN TOUCH
          </Typography>
          <span
            style={{
              position: "absolute",
              top: "18%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "70%",
              height: "5px",
              backgroundColor: "#daa900",
              zIndex: 1,
            }}
          />
        </Box>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={3}
          sx={{
            "& > *": {
              color: "white",
              backgroundColor: "#c1cac5",
              padding: "0.5rem",
              borderRadius: "8px",
            },
          }}
        >
          <a
            href="/"
            rel="noopener noreferrer"
            aria-label="Footer Home Button"
            aria-hidden="true"
          >
            <AiFillHome size={40} />
          </a>
          <a
            href="https://www.instagram.com/vista.ucmerced/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Footer Instagram Button"
            aria-hidden="true"
          >
            <FaInstagram size={40} />
          </a>
          <a
            href="mailto:vista.ucmerced@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Footer Email Button"
            aria-hidden="true"
          >
            <FiMail size={40} />
          </a>
        </Stack>

        <Typography
          variant="body1"
          sx={{
            color: "#8b9790",
            backgroundColor: "#e7eae8",
            borderRadius: "8px",
            padding: "0.75em 2em 0.75em 2em",
          }}
        >
          © VISTA 2023 | <Link to="/ContactUs" style={{color: "#8b9790"}}>Contact Us</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
