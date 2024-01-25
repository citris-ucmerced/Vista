import React from 'react';
import {
  Container,
  Typography,
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/FarmRobotics.css"

const FarmRoboticsChallenge = () => {
  return (
    <>
      <Helmet>
        <title >Farm Robotics Challenge</title>
        <meta name="description" content="Farm Robotics Challenge Event for UC Merced Students" />
        <link rel="canonical" href="/FarmRoboticsChallenge" />
      </Helmet>

      <Box className="page">
        <Navbar />
        <Container>
          <Box my={4}>
            <Typography variant="h2" component="h1" align="center" className="page-title" gutterBottom>
              UC Merced & The Farm Robotics Challenge
            </Typography>

            <Typography variant="body1" align="center" gutterBottom>
              UC Merced students, join the Farm Robotics Challenge! Embrace where technology meets agriculture to solve real-world problems. Whether you're studying engineering, agriculture, or any other discipline, this is a prime opportunity to revolutionize the future of farming right from our campus.
            </Typography>

            {/* <Typography variant="h4" component="h2" align="center" className="section-title spacing" gutterBottom>
              About the Challenge
            </Typography> */}
            <Typography variant="h2" component="h1" align="center" className="page-title spacing" gutterBottom>
                Farm Robotics Challenge
              </Typography>
  
              <Typography variant="body1" align="center" gutterBottom>
                Welcome to the Farm Robotics Challenge, where technology meets agriculture to solve real-world problems. This is not just a competition; it's a movement aimed at revolutionizing the future of farming. Whether you're a student, professor, university administrator, corporate entity, or an individual passionate about agriculture and robotics, there's a place for you here. Find out how you can be a part of this transformative experience.
              </Typography>

  
              <Typography variant="h4" component="h2" align="center" className="section-title spacing bold" gutterBottom>
                About the Challenge
              </Typography>
  
              <Typography variant="body1" align="center" gutterBottom>
                The Farm Robotics Challenge is an annual, nationwide event that invites student teams from universities and colleges across the United States to develop innovative robotic solutions for real-world agricultural challenges. Organized by the AI Institute for Next Gen Food Systems (AIFS), UC ANR VINE, Fresno-Merced Future of Food (F3) Innovation, and Farm-ng, the challenge aims to accelerate the integration of cutting-edge robotics into agricultural practices. 
                
              </Typography>
  
              <Typography variant="body1" align="center" gutterBottom>
                This year, we're expanding our horizons by introducing a new division for 2-year colleges, making the challenge more inclusive and providing a broader platform for innovation. Participants will work with the state-of-the-art Amiga robot, focusing on small-farm applications to make a meaningful impact on local communities.
              </Typography>
  
              <Typography variant="h5" component="h3" align="center" className="bold spacing" >
                The challenge is divided into four main phases:
              </Typography>
  
            <List>
              <ListItem>
                <ListItemIcon style={{color: "#daa900"}}></ListItemIcon>
                <ListItemText 
                  primary="Team Formation" 
                  secondary="Assemble your multidisciplinary team and complete the registration process." 
                  secondaryTypographyProps={{ style: { color: 'white' } }}
                />
              </ListItem>
                <ListItem>
                  <ListItemIcon style={{color: "#daa900"}}></ListItemIcon>
                  <ListItemText 
                    primary="Research and Proposal" 
                    secondary="Conduct market research to identify a real-world agricultural problem and submit a detailed project proposal." 
                    secondaryTypographyProps={{ style: { color: 'white' } }}
                    />
                </ListItem>
                <ListItem>
                  <ListItemIcon style={{color: "#daa900"}}></ListItemIcon>
                  <ListItemText 
                    primary="Development" 
                    secondary="Engage in the coding, fabrication, and initial testing of your robotic solution." 
                    secondaryTypographyProps={{ style: { color: 'white' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon style={{color: "#daa900"}}></ListItemIcon>
                  <ListItemText 
                    primary="Presentation" 
                    secondary="Refine your prototype and present your solution to a panel of expert judges for evaluation." 
                    secondaryTypographyProps={{ style: { color: 'white' } }}
                  />
                </ListItem>
              </List>
  
              <Typography variant="h5" component="h3" align="center" className="section-title spacing bold" gutterBottom>
                Challenges & How We Judge
              </Typography>
  
              <Typography variant="body1" align="center" gutterBottom>
                Teams are expected to address a variety of production farming topics, ranging from any crop or size of farm. The challenges for the competition are categorized into three main areas: autonomy, artificial intelligence, and attachment. Judging will be based on a range of criteria including accuracy, design elegance, safety, interdisciplinary inclusion, societal impact, and commercial potential.
              </Typography>

              <Typography variant="h5" align="center" className='spacing bold' gutterBottom>
                Categories
              </Typography>
  
              <Typography variant="h6" component="h4" gutterBottom>Autonomy</Typography>
              <Typography variant="body1" gutterBottom>Navigate your robot through complex farm terrains autonomously.</Typography>
              <Typography variant="h6" component="h4" gutterBottom>Artificial Intelligence</Typography>
              <Typography variant="body1" gutterBottom>Leverage AI to enhance your robot's vision and data collection capabilities.</Typography>
              <Typography variant="h6" component="h4" gutterBottom>Attachment</Typography>
              <Typography variant="body1" gutterBottom>Design innovative attachments to perform specific farm tasks efficiently.</Typography>
  
              <Typography variant="h5" component="h3" align="center" className="section-title spacing bold" gutterBottom>
                Prizes and Awards
              </Typography>
  
              <Typography variant="body1" gutterBottom>
                The Farm Robotics Challenge isn't just about innovation and learning; it's also about rewarding your hard work and creativity. We have an array of prizes designed to recognize excellence in various aspects of the competition.
              </Typography>

              <Typography variant="body1" className='bold' gutterBottom>
                CHALLENGE GRAND PRIZE:
              </Typography>
  
              <Typography variant="body1" gutterBottom>

                <span className='spacing-left'></span><span className='grandprize italic'>Grand prize</span> of<span className='grandprize bold italic'>$10,000</span> for the team!
              </Typography>

              <Typography variant="body1" className='bold' gutterBottom>
                Categories of Awards:
              </Typography>
  
              <Typography variant="body1" gutterBottom>
                <span className='underline'>Grand Prize:</span> Awarded to the team that excels in all aspects of the challenge, from innovation to implementation.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <span className='underline'>Elegance in Design:</span> Celebrates to the team that excels in creating a well-designed, user-friendly solution.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <span className='underline'>Complexity:</span> Honors the team that tackles the most complex challenges with an advanced and intricate solution.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <span className='underline'>Samll Farm:</span> Recognizes the team that creates a solution specifically tailored to the needs of small farms.
              </Typography>
  
              <Typography variant="body1" className='bold spacing' gutterBottom>
                Additional Perks:
              </Typography>
              <Typography variant="body1" gutterBottom>
                <span className='underline'>Internship Opportunities:</span> Top performers will be considered for internships.
              </Typography>
            <Typography variant="body1" gutterBottom>
              <span className='underline'>Conference Invitations:</span> Winners will be invited to present their projects at leading agricultural and robotics conferences.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <span className='underline'>Media Coverage:</span> Exceptional projects will be featured in industry publications and media outlets.
            </Typography>

            {/* ... [rest of the existing content] ... */}

            <Typography variant="h5" component="h3" align="center" className="section-title bold" gutterBottom>
              Key Milestones
            </Typography>

            <List >
              <ListItem>
                <ListItemText
                  className='italic' 
                  primary="Competition Opens" 
                  secondary="September 19, 2023"
                  secondaryTypographyProps={{ style: { color: 'white' } }}
                />
              </ListItem>
              <ListItem>
              <ListItemText  
                className='italic' 
                primary="Team Formation"
                secondary="February 12, 2024 (if you need help forming a team)" 
                secondaryTypographyProps={{ style: { color: 'white' } }}
                />
              </ListItem>
<             ListItem>
              <ListItemText 
                primary=""
                  secondary="December 18, 2023 (if you already formed a team)" 
                  secondaryTypographyProps={{ style: { color: 'white' } }}
                />
                  
              </ListItem>
              <ListItem>
                <ListItemText 
                  className='italic' 
                  primary="Project Proposal Submission" 
                  secondary="February 12, 2024"
                  secondaryTypographyProps={{ style: { color: 'white' } }}
                />
                  
              </ListItem>
              <ListItem>
                <ListItemText 
                  className='italic' 
                  primary="Development Starts" 
                  secondary="January 31, 2024" 
                  secondaryTypographyProps={{ style: { color: 'white' } }}
                />
                  
              </ListItem>
              <ListItem>
                <ListItemText 
                  className='italic' 
                  primary="Judging" 
                  secondary="September 6, 2024" 
                  secondaryTypographyProps={{ style: { color: 'white' } }}
                />
                  
              </ListItem>
            </List>

            <Typography variant="h5" component="h3" align="center" className="section-title bold" gutterBottom>
              Get Involved
            </Typography>

            <Typography variant="body1" align="center" gutterBottom>
              Ready to make a change in the world of agriculture and robotics? Dive deep into the challenge by visiting the official website.
            </Typography>

            <Box display="flex" justifyContent="center" mt={2}>
              <Button variant="contained" color="primary" component={Link} href="https://farmroboticschallenge.ai/" target="_blank" rel="noopener noreferrer">
                Farm Robotics Challenge Official Website
              </Button>
            </Box>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default FarmRoboticsChallenge;