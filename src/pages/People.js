import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Box, Typography } from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { readCSV } from "../utils/CSVReader";
import staffCSV from "../assets/sheets/staff.csv";

import StaffSection from "../components/StaffSection";

const People = () => {
  const [data, setData] = useState([]);
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    readCSV(staffCSV, setData);
  }, []);

  useEffect(() => {
    const staffData = data.map((person) => ({
      name: person.name,
      title: person.title,
      description: person.description,
      imageFile: person.imageFile,
    }));
    setStaff(staffData);
  }, [data]);

  return (
    <>
      <Helmet>
        <title>People</title>
        <meta name="description" content="Get to know the VISTA team!" />
        <link rel="canonical" href="/People" />
      </Helmet>

      <div>
        <Navbar />
        <Container>
          <Box my={4}>
            <Typography
              variant="h3"
              component="h1"
              align="center"
              className="page-title"
              gutterBottom
            >
              GET TO KNOW US!
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              align="center"
              fontWeight="bold"
              color="RGB(184, 192, 195)"
            >
              MEET THE PEOPLE THAT MAKE VISTA WHAT IT IS
            </Typography>
          </Box>

          <Box>
            {staff.map((person, idx) => (
              <StaffSection
                key={idx}
                name={person.name}
                title={person.title}
                description={person.description}
                imageFile={person.imageFile}
              />
            ))}
          </Box>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default People;
