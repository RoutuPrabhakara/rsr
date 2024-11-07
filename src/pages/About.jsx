import React from 'react';
import { Container, Box, Typography, Avatar, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AboutPage = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: theme.spacing(2),
        bgcolor: 'background.default',
      }}
    >
      {/* Header Section */}
      <Box sx={{ width: '100%', textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" color="primary.main">
          About Us
        </Typography>
      </Box>

      {/* Profile Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Avatar
          alt="App Logo"
          src="https://rsr-tours.com/static/media/logoRSR.520d3b5c1fbc05c845d5.jpg"
          sx={{ width: 100, height: 100, mb: 2 }}
        />
        <Typography variant="h6" fontWeight="medium" textAlign="center">
          Our Company
        </Typography>
        <Typography variant="body2" color="textSecondary" textAlign="center">
          A brief description about the company.
        </Typography>
      </Box>

      {/* About Content */}
      <Box sx={{ width: '100%', mb: 4 }}>
        <Typography variant="body1" textAlign="center" mb={2}>
        RSR TOURS AND TRAVELS is a bangalore-based car rental company associated since 2023, we are a full service travel management company. A team of fine entrepreneurs move the company with their dedication, passion, vision and hard work which has resulted in transforming the organization’s operation with a healthy turnover size. The company is headed by core management team comprising of individuals who have extensive experience in travel business who ensure the smooth running of the growing business operations.
        </Typography>
        <Typography variant="body1" textAlign="center" mb={2}>
        We have imbibed the group's 'client-first' culture, enabling it to develop and deliver its own unique brand of customer-centric service capabilities across multiple verticals. Our business objective is to make all of our corporate partners, suppliers, and most importantly, our clients a part of RSR TOURS AND TRAVELS family. Serviced more than half a million travellers till date, we always ensure on providing absolute satisfaction to our customers through the support of highly dedicated team members who are ready to provide 24 X 7 support.
        </Typography>
        <h1 className="fs-4 text-center">Our Mission</h1>
        <Typography variant="body1" textAlign="center" mb={2}>
        we believe in providing cost effective, comfortable, safe, reliable, eco friendly and secure transport services to meet the needs of our customers and those of their associates at RIGHT pricing
        </Typography>

        <h1 className="fs-4 text-center">Our Vission</h1>
        <Typography variant="body1" textAlign="center" mb={2}>
        our vision is to offer the best possible services to our customers by adopting business methodologies while ensuring a high-quality, safety drive and to give the best value for customer’s satisfaction by making any improvements as recommended by the customers in future
        </Typography>
      </Box>

      {/* Features or Contact Section */}
      <Box sx={{ width: '100%' }}>
        <Typography variant="h6" fontWeight="medium" textAlign="center" mb={2}>
          Contact Us
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => window.location.href = 'mailto:rsrtoursandtravelsblr@gmail.com'}
            >
              Email Us
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() => window.location.href = 'tel:+919019121137'}
            >
              Call Us
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutPage;
