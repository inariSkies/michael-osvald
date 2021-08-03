import MichaelHeadLogo from './imgs/MichaelHeadLogo.gif';
import './App.css';
import sampleImg from './imgs/smpl.jpg'
import ChatAnimation from './chatAnimation';
import theme from './theme';
import { MuiThemeProvider, AppBar,Toolbar,IconButton, Grid, responsiveFontSizes,Switch } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { CardContent, Typography } from '@material-ui/core';

function App() {
  return (


<div className="App">

{/*<img src={sampleImg} className="Back-Image"/>*/}
<MuiThemeProvider theme={responsiveFontSizes(theme)}>    
      {/*<AppBar  style={{backgroundColor:'#222', width:'98%', marginTop:'1%', marginBottom:'1%', marginRight:'1%', position:'relative'}}>
        <Toolbar >*/}
        
        <Typography variant="h2" color="primary" style={{flex: '1', marginTop:'10px', textShadow:'0 0 7px #05D9E8, 2px 5px 5px #005678', fontSize:'calc(36px + 2vmin)',  fontFamily: `'Press Start 2P', cursive`}}>
           michael osvald 
        </Typography>
        <Typography >
        <div>
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Off</Grid>
          <Grid item>
           <Switch  name="c" />
           {/*checked={state.checkedC} onChange={handleChange}*/}
          </Grid>
          <Grid item>On</Grid>
        </Grid>
        </div>

      </Typography>
      
       {/*  <IconButton edge="end" color="inherit" aria-label="menu" >
        <MenuIcon> </MenuIcon> 
        </IconButton>
      >
        </Toolbar>
      </AppBar>
 */}
   
      <ChatAnimation/>
    </MuiThemeProvider>
   
   {// <img src={MichaelHeadLogo} className="App-logo" alt="logo" />
   }
    
    </div>
   
  );
}

export default App;
