import React from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer'; // Renamed import to avoid conflict
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
// import HistoryIcon from '@mui/icons-material/History';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const DrawerComponent = ({ open, close }) => {
  const navigate = useNavigate()
  const DrawerList = (
    <Box
      sx={{
        width: 250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Ensures content and bottom text are spaced out
        height: '100%',
      }}
      role="presentation"
      onClick={close}
    >
      <Box>
        <List>
          {[
            { text: 'Home', icon: <HomeIcon />, link:'/' },
            { text: 'About', icon: <InfoIcon />, link:'/about' },
            { text: 'Contact', icon: <ContactsIcon />, link:'/contact' },
            // { text: 'History', icon: <HistoryIcon /> },
          ].map(({ text, icon, link }) => (
            <ListItem key={text} disablePadding onClick={()=>navigate(link)}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>

      {/* Text at the bottom of the drawer */}
      <Box sx={{ p: 2 }}>
        <Typography variant="body2" color="textSecondary" align="center">
          Version 0.1.0 - Developed by Bhaskar Antony
        </Typography>
      </Box>
    </Box>
  );

  return (
    <MuiDrawer open={open} onClose={close}>
      {DrawerList}
    </MuiDrawer>
  );
};

export default DrawerComponent;
