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
import logos from '../../assets/img/logo.png'
import profile from '../../assets/img/avatar.webp'
import { Avatar, IconButton, Link, Menu, MenuItem, Stack } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import theme from '../../theme'
import MenuIcon from '@mui/icons-material/Menu';
import '../../components/style.css'

export default function Home(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

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

          <Link color='primary' sx={{ textDecoration: 'none' }} href='/home/register_products'>
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
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', [theme.breakpoints.down('sm')]: { justifyContent: 'space-around' } }}>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <a href='/home'>
            <img src={logos} width='200px' />
          </a>

          <Typography sx={{ [theme.breakpoints.down('sm')]: { display: 'none' } }} >Bem vindo de volta!! Jalisson</Typography>

          <Stack direction='row' >
            <IconButton>
              <SettingsIcon sx={{ color: 'white', [theme.breakpoints.down('sm')]: { display: 'none' } }} />
            </IconButton>

            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar alt="Remy Sharp" src={profile} />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Perfil
        </MenuItem>

        <MenuItem>
          <Avatar /> Minha Conta
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon> Add outra Conta
        </MenuItem>
        <MenuItem>
          <a  href='/'>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon> Sair
          </a>
        </MenuItem>
      </Menu>

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

      
    </Box>
  );
}
