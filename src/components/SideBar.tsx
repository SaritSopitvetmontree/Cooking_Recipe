import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Link from 'next/link';

const SideBar: React.FC = () => {
  return (
    <List>
      <Link href="/create-recipe">
        <ListItem sx={{ borderBottom: '1px solid', borderTop: '1px solid', borderColor: 'divider' }}>
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Create recipe" />
        </ListItem>
      </Link>
      <Link href="/recipe-list">
        <ListItem sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Recipe list" />
        </ListItem>
      </Link>
    </List>
  );
};

export default SideBar;
