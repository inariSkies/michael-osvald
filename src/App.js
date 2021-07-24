import MichaelHeadLogo from './imgs/MichaelHeadLogo.gif';
import './App.css';
import sampleImg from './imgs/smpl.jpg'
import theme from './theme';
import { MuiThemeProvider, AppBar,Toolbar,IconButton, Card, responsiveFontSizes } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { CardContent, Typography } from '@material-ui/core';
function App() {
  return (


<div className="App">
{/*<img src={sampleImg} className="Back-Image"/>*/}
<MuiThemeProvider theme={responsiveFontSizes(theme)}>    
      <AppBar  style={{backgroundColor:'#222', width:'98%', marginTop:'1%', marginRight:'1%'}}>
        <Toolbar >
        <Typography variant="h2" color="primary" style={{flex: '1'}}>
          || michael osvald || 
        </Typography>
        
      
        <IconButton edge="end" color="inherit" aria-label="menu" style={{}} >
        <MenuIcon> </MenuIcon> 
        </IconButton>

        </Toolbar>
      </AppBar>
    <div style={{marginTop:'30%', width:'100%'}} >
      <Card className = "Main-card" varient="outlined" style={{backgroundColor:'#222', width:'65%', marginBottom:'5%',marginRight:'30%'}}>
        <CardContent>
         <Typography variant="h5" color="primary">
          Hey is this website done yet?
          </Typography>
        </CardContent>
      
      </Card>
      <Card className = "Main-card2" varient="outlined" style={{ backgroundColor:'#222', width:'65%', marginLeft:'20%'}}>
        <CardContent>
         <Typography variant="h5" color="primary">
         Hahahah uh no
          </Typography>
        </CardContent>

      </Card>
      </div>
      <img src={MichaelHeadLogo} className="App-logo" alt="logo" />
    
    </MuiThemeProvider>
    </div>
  
  );
}

export default App;
