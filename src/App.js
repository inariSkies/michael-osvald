import MichaelHeadLogo from './imgs/MichaelHeadLogo.gif';
import './App.css';
import React, { useState, useReducer } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import HomePage from './home';
import AboutPage from './about';
import theme from './theme';
import { MuiThemeProvider, AppBar,Toolbar,IconButton, Grid, responsiveFontSizes,Switch, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { CardContent, Typography } from '@material-ui/core';


function App() {

const [anchorEl, setAnchorEl] = useState(null);
const handleClose = () => {
  setAnchorEl(null);
};
const handleClick = event => {
  setAnchorEl(event.currentTarget);
};

return (

<div className="App">
{/*<img src={sampleImg} className="Back-Image"/>*/}
<MuiThemeProvider theme={responsiveFontSizes(theme)}>    
  <AppBar  style={{backgroundColor:'#222', width:'90%', marginTop:'1%', marginBottom:'1%', marginRight:'1%', position:'relative'}}>
    <Toolbar >
    <IconButton
            onClick={handleClick}
            color={"primary"}
            style={{ marginLeft: "auto", paddingRight: "1vh" }}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem component={Link} to="/home" onClick={handleClose}>
        Home
      </MenuItem>
      <MenuItem component={Link} to="/about" onClick={handleClose}>
        About me
      </MenuItem>
      </Menu>
      </Toolbar>
  </AppBar>
  <Typography variant="h2" color="primary" style={{flex: '1', marginTop:'10px', textShadow:'0 0 7px #05D9E8, 2px 5px 5px #005678', fontSize:'calc(36px + 2vmin)',  fontFamily: `'Press Start 2P', cursive`}}>
    michael osvald 
  </Typography>
  <Typography component={'div'}>

      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>Off</Grid>
        <Grid item>
          <Switch  name="c" />
          {/*checked={state.checkedC} onChange={handleChange}*/}
        </Grid>
        <Grid item>On</Grid>
      </Grid>
    

  </Typography>

        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />

 
  
    {/*  <IconButton edge="end" color="inherit" aria-label="menu" >
    <MenuIcon> </MenuIcon> 
    </IconButton>
    >
    </Toolbar>
    </AppBar>
  */}
  
  </MuiThemeProvider>
   
   {// <img src={MichaelHeadLogo} className="App-logo" alt="logo" />
   }
   
    </div>
   
  );
}

export default App;
