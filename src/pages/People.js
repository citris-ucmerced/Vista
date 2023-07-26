import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Box, Typography, Grid } from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { readCSV } from "../utils/CSVReader";
import staffCSV from "../assets/sheets/staff.csv";
import studentCSV from "../assets/sheets/students.csv";

import StaffSection from "../components/StaffSection";
import StudentSection from "../components/StudentSection";

import "./styles/People.css"

const People = () => {
  const [staffData, setStaffData] = useState([]);
  const [staff, setStaff] = useState([]);

  // Read staff csv file
  useEffect(() => {
    readCSV(staffCSV, setStaffData);
  }, []);

  // Set staff data into staff array
  useEffect(() => {
    if (staffData.length > 0) {
      const data = staffData.map((person) => ({
        name: person.name,
        title: person.title,
        description: person.description,
        imageFile: person.imageFile,
      }));
      setStaff(data);
    }
  }, [staffData]);

  const [studentData, setStudentData] = useState([]);
  const [students, setStudents] = useState([]);

  // Read student csv file
  useEffect(() => {
    readCSV(studentCSV, setStudentData);
  }, []);

  // Set student data into student array
  useEffect(() => {
    if (studentData.length > 0) {
      const data = studentData.map((person) => ({
        name: person.name,
        title: person.title,
        description: person.description,
        imageFile: person.imageFile,
      }));
      setStudents(data);
    }
  }, [studentData]);

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
            {staff?.map((person, idx) => (
              <StaffSection
                key={idx}
                name={person.name}
                title={person.title}
                description={person.description}
                imageFile={person.imageFile}
              />
            ))}
          </Box>

          <Box>
            <Typography
              variant="h4"
              component="h1"
              align="center"
              className="page-title"
              gutterBottom
              mb={8}
            >
              STUDENT TEAM
            </Typography>
            <Grid container spacing={0} direction="row" justifyContent="center">
              {students?.map((person, idx) => (
                <StudentSection
                  key={idx}
                  name={person.name}
                  title={person.title}
                  description={person.description}
                  imageFile={person.imageFile}
                />
              ))}
            </Grid>
          </Box>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default People;
