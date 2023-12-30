import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

const NavigationBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', marginBottom: '20px' }}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          APP LOGO
        </Typography>
        <NavLink 
          to="/" 
          style={{ color: 'black', textDecoration: 'none', marginRight: '20px' }}
        >
          <Typography variant="h7">
            DASHBOARD
          </Typography>
        </NavLink>
        <NavLink 
          to="/ad/new" 
          style={{ color: 'black', textDecoration: 'none' }}
        > 
          <Typography variant="h7">
            CREATE ADS
          </Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
