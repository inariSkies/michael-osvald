import React, {useState, useReducer, Fragment, useEffect} from "react";
import { MuiThemeProvider, AppBar,Toolbar,IconButton, Card, Grid, Slide } from '@material-ui/core';
import { CardContent, Typography,Grow,Paper } from '@material-ui/core';
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
    <Grid container  justifyContent="flex-end" spacing={0}>
    <Grow in={timeCount===2} timeout= {200} >
         
            <svg >
            <circle
        cx="50"
        cy="50"
        r="10"
        fill="#FFFFF1"
        stroke="#FFFFF1"
        strokeWidth="2"
      />
            </svg>
    
        </Grow>
        <Grow in={timeCount===2} timeout= {400}>
         
            <svg >
            <circle
        cx="50"
        cy="55"
        r="10"
        fill="#FFFFF1"
        stroke="#FFFFF1"
        strokeWidth="2"
      />
          </svg>
    
        </Grow>
        <Grow in={timeCount===2} timeout= {600} >
         
            <svg >
            <circle
        cx="50"
        cy="55"
        r="10"
        fill="#FFFFF1"
        stroke="#FFFFF1"
        strokeWidth="2"
      />
            </svg>
    
        </Grow>
    </Grid>
    <Grid container  justifyContent="flex-end" spacing={0}>
    <Grow in={timeCount===4} timeout= {200} >
         
            <svg >
            <circle
        cx="50"
        cy="50"
        r="10"
        fill="#FFFFF1"
        stroke="#FFFFF1"
        strokeWidth="2"
      />
            </svg>
    
        </Grow>
        <Grow in={timeCount===4} timeout= {400}>
         
            <svg >
            <circle
        cx="50"
        cy="55"
        r="10"
        fill="#FFFFF1"
        stroke="#FFFFF1"
        strokeWidth="2"
      />
          </svg>
    
        </Grow>
        <Grow in={timeCount===4} timeout= {600} >
         
            <svg >
            <circle
        cx="50"
        cy="55"
        r="10"
        fill="#FFFFF1"
        stroke="#FFFFF1"
        strokeWidth="2"
      />
            </svg>
    
        </Grow>
    </Grid>
    <Grid container justifyContent="flex-end">
      <Slide direction="up" in={timeCount>4}  timeout={500}>
      <Card className = "TextMessageBox" varient="outlined" style={style}>
        <TextMessage msg="Hahaha ah not yet.."></TextMessage>
        </Card>
      </Slide>
      </Grid>
      </CardContent>
      </Card>
    </Fragment>
);
};
export default ChatAnimation;