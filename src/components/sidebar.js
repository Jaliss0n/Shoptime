import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, IconButton, Link, Menu, MenuItem, Stack } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import theme from '../theme'
import MenuIcon from '@mui/icons-material/Menu';


export default function Sidebar(props) {

 

  //////////////////////////////// DRAWER /////////////////////////////
  const drawerWidth = 240;

  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>

        <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Link color='primary' sx={{ textDecoration: 'none' }} href='/gerencia'>
            <ListItem disablePadding>
              <ListItemButton href='/home/produtos'>
                <ListItemIcon>
                  <ShoppingCartCheckoutIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary="Gerenciar Produtos" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link color='primary' sx={{ textDecoration: 'none' }} href='/cadastro'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AddCircleIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary="Criar Produtos" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link color='primary' sx={{ textDecoration: 'none' }} href='/cadastro'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary="Gerenciar Usuarios" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Divider />

          <Link color='primary' sx={{ textDecoration: 'none' }} href='/cadastro'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ManageSearchIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary="Sobre Nos" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

      </Box>
    </div>
  );

  //////////////////////////////// DRAWER /////////////////////////////

  return (

    <Box sx={{ display: 'flex' }}>
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ margin: '0' }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
