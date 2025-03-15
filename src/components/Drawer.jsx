
import { useTheme, styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiDrawer from '@mui/material/Drawer';
import { CalendarMonth, Contacts, Help, Home, People, Person, Receipt } from '@mui/icons-material';
import { Avatar,  Tooltip,  Typography } from '@mui/material';
import { Link, useLocation } from 'react-router';
import { grey } from '@mui/material/colors';
let drawerWidth = 240;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export default function Drawerr({open, handleDrawerClose}) {
    const theme = useTheme();
    const location = useLocation().pathname;

    let arr1 = [
      {text: 'Dashboard', icon: <Home />, path:"/"},
      {text: 'manage team', icon: <People />, path:"/team"},
      {text: "contacts info", icon: <Contacts />, path:"/contacts"},
      {text: "invoices blances", icon: <Receipt />, path:"/blances"},
    ];

    let arr2 = [
      {text: "profile form", icon:<Person/>, path:"/profile"},
      {text: "calendar", icon:<CalendarMonth/>, path:"/calendar"},
      {text: "FQA page", icon:<Help/>, path:"/faq"},
    ];
    return (
        <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Avatar sx={{margin:"auto" , width:"55px", height:"55px"}} src='\me.jpg'/>
        <Typography  align='center' sx={{fontSize:open? "17px" : 0, mb:"10px"}}>seif elkorashy</Typography>
        <Typography  align='center' sx={{fontSize:open? "17px" : 0, mb:"10px"}}>admin</Typography>
        <Divider />
    
        <List>
          {arr1.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <Link to={item.path}>
              <Tooltip title={open? null : item.text}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    color: theme.palette.mode === 'dark' ? 'white' : 'black',
                    backgroundColor: location ===  item.path ? theme.palette.mode === "dark" ? grey[800] : grey[300] : 'null',
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
              </Tooltip>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {arr2.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block'}}>
              <Link to={item.path}>
              <Tooltip title={open? null : item.text}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    color: theme.palette.mode === 'dark' ? 'white' : 'black',
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
              </Tooltip>
              </Link>
            
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
}