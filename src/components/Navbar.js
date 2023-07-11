import React,{useState} from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import {Link} from 'react-router-dom';
import "../assets/css/HeaderStyles.css";
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  //menu drawer
  const drawer =(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
          
          <img className='logo' src={logo} />
          <Divider />
            <ul className="mobile-navigation">
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/rider-route'}>Rider</Link>
              </li>
              {/* <li>
                <Link to={'/rider'}>Rider</Link>
              </li> */}
              <li>
                <Link to={'/register'}>SignUp</Link>
              </li>
              <li>
                <Link to={'/login'}>Login</Link>
              </li>
            </ul>
          </Box>
  )
  return (
    <>
    <Box>
      <AppBar component={'nav'} sx={{ bgcolor: "Black" }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" 
          sx={{
            mr:2,
            display: { sm: "none" },
          }}
          onClick={handleDrawerToggle}
          >
            <MenuIcon />

          </IconButton>
          <img className='logo' src={logo} />
          <Box sx={{ display: { xs: "none", sm: "block" } }} className="menus">
            <ul className="navigation-menu">
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/rider-route'}>Rider</Link>
              </li>
              {/* <li>
                <Link to={'/rider'}>Rider</Link>
                
              </li> */}

              <li>
                <Link to={'/driver'}>Driver</Link>
              </li>

              <li>
                <Link to={'/dashboard'}>Dashboard</Link>
              </li>
              <li>
                <Link to={'/register'}>SignUp</Link>
              </li>
              <li>
                <Link to={'/login'}>Login</Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer variant="temporary" open={mobileOpen} 
        onClose={handleDrawerToggle}
        sx={{display:{xs:'block', sm:'none'}, "& .MuiDrawer-paper":{
          boxSizing: "border-box",
          width: "240px",
        } }}>
          {drawer}
        </Drawer>
      </Box>
      <Box sx={{ p:1 }}>
      <Toolbar />
      </Box>
    </Box>
    </>
  )
}

export default Header