import React from 'react';
import TopBar from './TopBar';
import SideBar from './SideBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <TopBar />
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Container component="main" sx={{ flexGrow: 1, padding: 3 }}>
          {children}
        </Container>
      </Box>
    </>
  );
};

export default MainLayout;