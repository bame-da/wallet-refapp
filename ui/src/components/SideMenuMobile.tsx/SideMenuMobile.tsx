import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { Link } from "react-router-dom";
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import ListItemText from '@mui/material/ListItemText';
import { Divider, ListItemButton, Typography } from '@mui/material';

const drawerWidth: number = 200;

interface MenuItem {
  label: string,
  path: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.text.secondary
  }
}))

const menuItems: MenuItem[] = [
  { label: 'My Active Accounts', path: '/' },
  { label: 'Pending Activities', path: '/pending' }]

interface SideMenuMobileProps {
  isOpen: boolean;
  handleDrawerOpen: () => void; 
  handleDrawerClose: () => void;
}
export const SideMenuMobile: React.FC<SideMenuMobileProps> = ({isOpen, handleDrawerOpen, handleDrawerClose}) => {
  
  const [selected, setSelected] = React.useState<number>(0);
  const classes = useStyles()
  const onClick = (index: number) => {
    setSelected(index)
    handleDrawerClose();
  }
  return (
    <SwipeableDrawer
    anchor={'left'}
    open={isOpen}
    onClose={handleDrawerClose}
    onOpen={handleDrawerOpen}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box >
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton onClick={() => onClick(index)} selected={selected === index} key={index} component={Link} to={item.path}>
              <ListItemText className={classes.root}>
                {item.label}
              </ListItemText>
            </ListItemButton>

          ))}

        </List>
      </Box>
      <Box marginTop={'auto'} marginBottom={3}>
        <Divider />
        <Box padding={2} flexDirection='column' display='flex'>
        <Typography variant='caption' color='text.secondary'>
          Documentation
        </Typography>
        <Typography variant='caption' color='text.secondary'>
          Contribute
        </Typography>
        <Typography variant='caption' color='text.secondary'>
          Feature Requests
        </Typography>
        <Typography variant='caption' color='text.secondary'>
          Download Daml
        </Typography>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
}
