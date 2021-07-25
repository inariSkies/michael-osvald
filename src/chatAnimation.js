import React, {useState, useReducer, Fragment, useEffect} from "react";
import { MuiThemeProvider, AppBar,Toolbar,IconButton, Card, Grid, Slide } from '@material-ui/core';
import { CardContent, Typography } from '@material-ui/core';
import TextMessage from "./textMessage";
const ChatAnimation = props => {
const [timeCount, setTimeCount]=useState(0);

useEffect(()=>
{  
    setInterval(()=>{
        setTimeCount(state=>(state +1))
    },1000);
},[]);

const style ={
  backgroundColor:"#222",
  width:"85%",
  margin:'10px'
}

return (
    <Fragment>
    <Card  style={{width:"85%", marginTop:"2%",backgroundColor:"#282D34"}}>
    <CardContent>
    <Grid container spacing={3}>
    <Slide direction="up" in={true}  timeout={500}>
        <Card className = "TextMessageBox" varient="outlined" style={style}>
        <TextMessage msg="Hey is your website done yet?"></TextMessage>
        </Card>
      </Slide>
    </Grid>
    <Grid container xs justifyContent="flex-end">
      <Slide direction="up" in={timeCount>2}  timeout={500}>
      <Card className = "Main-card2" varient="outlined" style={style}>
        <CardContent>
         <Typography variant="h5" color="primary">
         hahaha um no.. 
          </Typography>
        </CardContent>
      </Card>
      </Slide>
      </Grid>
      </CardContent>
      </Card>
    </Fragment>
);
};
export default ChatAnimation;