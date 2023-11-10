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
        {/* Footer title */}
        <Box>
          <Typography
            variant="h5"
            component="h1"
            align="center"
            gutterBottom
            className="footer-title"
          >
            GET IN TOUCH
          </Typography>
          {/* Footer line */}
          <span
            className='footer-line'
          />
        </Box>

        {/* Footer icons */}
        <Stack
          direction="row"
          justifyContent="center"
          spacing={3}
          className="footer-icons"
        >
          {/* Home button */}
          <a
            href="/"
            rel="noopener noreferrer"
            aria-label="Footer Home Button"
            aria-hidden="true"
          >
            <AiFillHome size={40} />
          </a>
          {/* Instagram button */}
          <a
            href="https://www.instagram.com/vista.ucmerced/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Footer Instagram Button"
            aria-hidden="true"
          >
            <FaInstagram size={40} />
          </a>
          {/* Email button */}
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

        {/* Footer text */}
        <Typography
          variant="body1"
          className="footer-text"
        >
          © VISTA 2023 | <Link to="/ContactUs" style={{color: "#8b9790"}}>Contact Us</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
