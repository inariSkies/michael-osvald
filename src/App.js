import MichaelHeadLogo from './imgs/MichaelHeadLogo.gif';
import './App.css';
import theme from './theme';
import { MuiThemeProvider, AppBar,Toolbar,IconButton, Card } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { CardContent, Typography } from '@material-ui/core';
function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <AppBar  style={{backgroundColor:'#222', width:'98%', marginTop:'1%', marginRight:'1%'}}>
        <Toolbar>
        <Typography variant="h4" color="primary">
          MICHAEL OSVALD
        </Typography>
        <div style={{flex: '1'}}></div>
      
        <IconButton edge="end" color="inherit" aria-label="menu" style={{}} >
  
        <MenuIcon> </MenuIcon> 
        </IconButton>

        </Toolbar>
      </AppBar>
      <body>
      <img src={MichaelHeadLogo} className="App-logo" alt="logo" />
      <Card className = "Main-card" varient="outlined" style={{backgroundColor:'#222', width:'80%'}}>
        <CardContent>
          <Typography variant="h5" color="primary">
          Oop okay looks like I'm alive now..
         I guess its time to re-learn React
          </Typography>
        </CardContent>
      </Card>
      </body>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
