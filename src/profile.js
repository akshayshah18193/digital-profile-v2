import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
  Divider,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Chip
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { 
  FaLinkedin, FaGithub, FaEnvelope, 
  FaCode, FaCloud, FaProjectDiagram, 
  FaCertificate, FaDownload, FaLaptopCode, FaPython,
  FaReact, FaNodeJs, FaDatabase, FaUserTie, FaAward, FaUniversity, 
  FaJava,
  FaGreaterThan
} from "react-icons/fa";
import { MdWbSunny, MdNightlight } from "react-icons/md";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./profile.css";

// Light & Dark Theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#007bff" },
    background: { default: "#f5f5f5" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    background: { default: "#121212" },
  },
});

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className="parallax-bg">
        <Container maxWidth="md" sx={{ py: 4 }}>
          {/* Theme Toggle */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <IconButton
              sx={{ position: "absolute", top: 16, right: 16 }}
              onClick={() => setDarkMode(!darkMode)}
              color="primary"
            >
              {darkMode ? <MdWbSunny size={28} /> : <MdNightlight size={28} />}
            </IconButton>
          </motion.div>

          {/* Hero Section */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Paper elevation={3} className="glassmorphic-card">
              <CardContent>
                <Avatar alt="Akshay Shah" src="/profile-pic.jpg" sx={{ width: 100, height: 100, mx: "auto", my: 2 }} />
                <Typography variant="h3" fontWeight="bold" color="primary" className="glow-text" align="center">
                  Akshay Shah
                </Typography>
                <Typography variant="h6" color="gray" align="center">
                 Senior Software Engineer | Full-Stack Developer | Solution Architect
                </Typography>
                

          {/* Expanded Experience Section */}
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
            Experience <FaUserTie />
          </Typography>
          <Divider sx={{ my: 2 }} />
          <List>
            <ListItem>
              <ListItemIcon><FaUserTie /></ListItemIcon>
              <ListItemText primary="Senior Software Engineer at Bosch (2022 - Present)" secondary="Working on PLM, CI/CD, and DevOps transformations." />
            </ListItem>
            <ListItem>
              <ListItemIcon><FaUserTie /></ListItemIcon>
              <ListItemText primary="Software Engineer at Cognizant (2021 - 2022)" secondary="Led microservices development and cloud integration." />
            
            </ListItem>
            <ListItem>
              <ListItemIcon><FaUserTie /></ListItemIcon>

             <ListItemText primary="Full Stack Engineer at Cognizant (2020 - 2021)" secondary="Led microservices development and cloud integration." />
             </ListItem>
             <ListItem>
              <ListItemIcon><FaUserTie /></ListItemIcon>

              <ListItemText primary="Programmer Analyst at Cognizant (2018 - 2020)" secondary="Led microservices development and cloud integration." />
              </ListItem>
              <ListItem>
              <ListItemIcon><FaUserTie /></ListItemIcon>

              <ListItemText primary="Programmer Analyst Trainee at Cognizant (2017 - 2018)" secondary="Led microservices development and cloud integration." />
          </ListItem>
          </List>

          {/* Expanded Skills Section */}
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
            Skills <FaCode /> <FaCloud />
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Grid container spacing={2}>
            { [
              
              ["React.js", <FaReact />],
              ["Node.js", <FaNodeJs />],
              ["Python", <FaPython />],
              ["Java", <FaJava />],
              ["API",<FaCode/>],
              ["CatenaX",<FaGreaterThan/>],
              ["Databases", <FaDatabase />],
              ["Cloud Computing", <FaCloud />],
              ["CI/CD Pipelines", <FaLaptopCode />]
            ].map(([skill, icon], index) => (
              <Grid item key={index}>
                <Chip icon={icon} label={skill} variant="outlined" />
              </Grid>
            ))}
          </Grid>

          {/* Certifications Section */}
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
            Certifications <FaCertificate />
          </Typography>
          <Divider sx={{ my: 2 }} />
          <List>
            <ListItem>
              <ListItemIcon><FaCertificate /></ListItemIcon>
              <ListItemText primary="AWS Certified Cloud Practitioner" />
            </ListItem>
            <ListItem>
              <ListItemIcon><FaCertificate /></ListItemIcon>
              <ListItemText primary="Certified Kubernetes Administrator (CKA)" />
            </ListItem>
          </List>

          {/* Projects Section */}
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
            Projects <FaProjectDiagram /> <FaLaptopCode />
          </Typography>
          <Divider sx={{ my: 2 }} />
          {[
            ["PLM Experience Center", "Developed cloud-based PLM solutions improving lifecycle management."],
            ["SnapSpect - AI Image Analysis", "Designed AI-based image recognition for manufacturing defects."]
          ].map(([title, description], index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{description}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}

          {/* Education Section */}
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
            Education <FaUniversity />
          </Typography>
          <Divider sx={{ my: 2 }} />
          <List>
            <ListItem>
              <ListItemIcon><FaUniversity /></ListItemIcon>
              <ListItemText primary="Master's in Computer Applications - MIT Pune (2017)" />
            </ListItem>
            <ListItem>
              <ListItemIcon><FaUniversity /></ListItemIcon>
              <ListItemText primary="Bachelor's in Computer Science - MIT Pune (2014)" />
            </ListItem>
          </List>
         
          {/* Awards & Achievements */}
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
            Awards & Achievements <FaAward />
          </Typography>
          <Divider sx={{ my: 2 }} />
          <List>
            <ListItem>
              <ListItemIcon><FaAward /></ListItemIcon>
              <ListItemText primary="Client Focus Award (2020)" />
            </ListItem>
            <ListItem>
              <ListItemIcon><FaAward /></ListItemIcon>
              <ListItemText primary="Outstanding Performance in Software Development (2019)" />
            </ListItem>
          </List>

          {/* Social Media Links */}
          <Card className="glassmorphic-card" sx={{ mt: 4 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">
                Connect with Me
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Tooltip title="LinkedIn">
                    <IconButton color="primary" href="https://linkedin.com/in/yourprofile" target="_blank">
                      <FaLinkedin size={28} />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="GitHub">
                    <IconButton color="primary" href="https://github.com/yourprofile" target="_blank">
                      <FaGithub size={28} />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="Email">
                    <IconButton color="primary" href="mailto:your.email@example.com">
                      <FaEnvelope size={28} />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Example Paper Usage */}
          <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Additional Information
            </Typography>
            <Typography>
              This section can be used to provide any additional information or notes.
            </Typography>
          </Paper>
          <Button variant="contained" color="primary" sx={{ mt: 3 }} startIcon={<FaDownload />} href="/resume.pdf" download>
                  Download Resume
                </Button>
              </CardContent>
            </Paper>
          </motion.div>
        </Container>
      </div>
    </ThemeProvider>


  );
};

export default Profile;
