import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Box, Typography, Grid } from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { readCSV } from "../utils/CSVReader";
import staffCSV from "../assets/sheets/staff.csv";
import studentCSV from "../assets/sheets/students.csv";

import StaffSection from "../components/StaffSection";
import StudentSection from "../components/StudentSection";

import "./styles/People.css"

const People = () => {
  // State for staff data and staff array
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

  // State for student data and student array
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
      {/* Helmet for SEO */}
      <Helmet>
        <title>People</title>
        <meta name="description" content="Get to know the VISTA team!" />
        <link rel="canonical" href="/People" />
      </Helmet>

      <div>
        {/* Navbar component */}
        <Navbar />
        <Container>
          {/* Header component */}
          <Header title="GET TO KNOW US!" subtitle="MEET THE PEOPLE THAT MAKE VISTA WHAT IT IS" />

          {/* Staff section */}
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

          {/* Student section */}
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
        {/* Footer component */}
        <Footer />
      </div>
    </>
  );
};

export default People;