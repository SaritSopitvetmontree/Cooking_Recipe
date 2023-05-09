import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const TopBar: React.FC = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: '#b26500' }}>
      <Toolbar>
        <Typography variant="h6">COOKING-APP</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
