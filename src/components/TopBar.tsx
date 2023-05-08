import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const TopBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Cooking App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
