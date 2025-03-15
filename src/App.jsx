import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from './components/Appbar';
import Drawerr from './components/Drawer';
import styled from '@mui/material/styles/styled';
import { useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from './theme';
import Typography from '@mui/material/Typography'




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));




export default function app() {
// eslint-disable-next-line react-hooks/rules-of-hooks
const [open, setOpen] = useState(false);

const handleDrawerOpen = () => {
  setOpen(true);
};
const handleDrawerClose = () => {
  setOpen(false);
};

// eslint-disable-next-line react-hooks/rules-of-hooks
// @ts-ignore
// eslint-disable-next-line react-hooks/rules-of-hooks
const [mode, setMode] = React.useState(localStorage.getItem("mode") || "light");
// eslint-disable-next-line react-hooks/rules-of-hooks
const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (

    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Appbar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode}/>

        <Drawerr open={open} handleDrawerClose={handleDrawerClose}/>
  
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader/>
          <Outlet/>
        </Box>
    </Box>
    </ThemeProvider>
  );
}
