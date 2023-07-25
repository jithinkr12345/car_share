import {React,useState, useEffect} from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import {Link} from 'react-router-dom';
import "../assets/css/HeaderStyles.css";
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/images/logo.png';
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Header = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const cookies = new Cookies();
  const [name, setName] = useState("");

  useEffect(() => {
    (
      async () => {
          const response = await fetch('http://127.0.0.1:8000/api/user', {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': cookies.get('jwt')
              },
              credentials: 'include',
          });

          const body = await response.text();
          const result = JSON.parse(body);
          if(!response.ok){
            navigate("/login");
          }
          var fname = '';
          if ((response.ok) && (result.first_name != 'undefined')){
            fname += result.first_name;
          }
          if ((response.ok) && (result.last_name != 'undefined')){
            fname += result.last_name;
          }
          setName(fname);
      }
    )();
});

    

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
              {name && 
              <li>
                <Link to={'/'}>Home</Link>
              </li>}
              {name && <li>
                <Link to={'/rider-route'}>Rider</Link>
              </li>}
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
            {name && <li>
                <Link to={'/'}>Home</Link>
              </li>}
              {name && <li>
                  <Link to={'/rider-route'}>Rider</Link>
                </li>}
                {name && <li>
                  <Link to={'/driver'}>Driver</Link>
                </li>}
                {name && <li>
                  <Link to={'/dashboard'}>Dashboard</Link>
                </li>}
                {!name && <li>
                <Link to={'/register'}>SignUp</Link>
              </li>}
              {!name && <li>
                <Link to={'/login'}>Login</Link>
              </li>}
              
              {name && <li>
                <Link to={'/logout'}>Logout</Link>
              </li>}
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