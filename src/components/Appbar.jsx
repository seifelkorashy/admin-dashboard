
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Box, Stack, useTheme } from '@mui/material';
import { DarkMode, Notifications, Person2, Settings, WbSunny } from '@mui/icons-material';
let drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
      {
        // @ts-ignore
        props: ({ open }) => open,
        style: {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      },
    ],
  }));

    
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

export default function Appbar({open, handleDrawerOpen , setMode}) {

    let theme = useTheme();
    return (
        <AppBar
        position="fixed"

        // @ts-ignore
        open={open}
        >
        <Toolbar>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            >
            <MenuIcon />
            </IconButton>


            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            </Search>

          <Box sx={{flexGrow:1}}></Box>

          <Stack direction="row" >
            {theme.palette.mode === "light" ?(
                  <IconButton onClick={() => {
                    localStorage.setItem("mode", "dark");
                    setMode("dark");
                  }
                  } color="inherit">
                  <DarkMode/>
                </IconButton>
            )
            :(
              <IconButton onClick={() => {
                localStorage.setItem("mode", "light");
                setMode("light");
              }
              } color="inherit">
              <WbSunny/>
            </IconButton>
            )
            }
            <IconButton color="inherit">
              <Notifications/>
            </IconButton>
            
            <IconButton color="inherit">
              <Settings/>
            </IconButton>
            <IconButton color="inherit">
              <Person2/>
            </IconButton>

          </Stack>
        </Toolbar>
        </AppBar>
    );
}