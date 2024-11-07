import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Avatar,
  IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted', formData);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: 2,
        bgcolor: 'background.default',
      }}
    >
      {/* Header Section */}
      <Box sx={{ width: '100%', textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" color="primary.main">
          Contact Us
        </Typography>
      </Box>

      {/* Contact Form */}
   

      {/* Additional Information */}
      <Box sx={{ width: '100%' }}>
        <Typography variant="h6" fontWeight="medium" textAlign="center" mb={2}>
          Get in Touch
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={4} textAlign="center">
            <Avatar sx={{ bgcolor: 'primary.main', mb: 1 }} className='m-auto mb-3'>
              <EmailIcon />
            </Avatar>
            <Typography variant="body1">Email</Typography>
            <Typography variant="body2" color="textSecondary">
            rsrtoursandtravelsblr@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Avatar sx={{ bgcolor: 'secondary.main', mb: 1 }} className='m-auto mb-3'>
              <PhoneIcon />
            </Avatar>
            <Typography variant="body1">Phone</Typography>
            <Typography variant="body2" color="textSecondary">
            +919019121137
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Avatar sx={{ bgcolor: 'success.main', mb: 1 }} className='m-auto mb-3'>
              <LocationOnIcon />
            </Avatar>
            <Typography variant="body1">Address</Typography>
            <Typography variant="body2" color="textSecondary">
            No.21/1, 1st Main, 1st Cross, RMS Colony, Bhattarahalli, Bangalore-560049
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
      className='mt-3'
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          mb: 4,
        }}
      >
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactPage;
