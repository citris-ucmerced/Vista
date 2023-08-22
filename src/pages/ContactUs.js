import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "./styles/ContactUs.css";

const ContactUs = () => {
  // Contact details to display on the page
  const contactDetails = [
    {
      title: "Phone Number",
      detail: "(209) 382-4216",
    },
    {
      title: "Email Address",
      detail: "vista@ucmerced.edu",
    },
    {
      title: "Mailing Address",
      detail:
        "VISTA, University of California, Merced 5200 North Lake Road Merced, CA 95343",
    },
    {
      title: "Physical Location",
      detail:
        "Arts and Computational Sciences Building, Room 305, University of California, Merced",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Have questions? Reach out and we'll be in touch!"
        />
        <link rel="canonical" href="/ContactUs" />
      </Helmet>
      <Box className="page">
        <Navbar />
        <Container>
          {/* Render the page header */}
          <Header title={"CONTACT US"} />

          <Box my={4}>
            {/* Render the contact details */}
            <Grid container spacing={4} className="contact-grid">
              {contactDetails.map((contact, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card className="contact-card">
                    <CardContent>
                      <Typography variant="h6" className="contact-title">
                        {contact.title}
                      </Typography>
                      <Typography
                        paragraph
                        className="contact-detail"
                      >
                        {contact.detail}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Render the contact form */}
            <Box mt={4} p={2} className="contact-form">
              <iframe
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=o-nf9HjKmEm3p-bQaS6s5lrVrUVtHU9Dro4-qcn7tzhUNFhDNDBYUlhUOURaSzJMM0c1VENGOFQwWS4u&embed=true"
                title="Contact Us Microsoft Form"
                className="contact-iframe"
              />
            </Box>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default ContactUs;