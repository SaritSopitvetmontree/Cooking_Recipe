import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';

const SideBar: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <List>
      <ListItem onClick={() => handleNavigation('/create-recipe')}>
        <ListItemText primary="Create recipe" />
      </ListItem>
      <ListItem onClick={() => handleNavigation('/recipe-list')}>
        <ListItemText primary="Recipe list" />
      </ListItem>
    </List>
  );
};

export default SideBar;