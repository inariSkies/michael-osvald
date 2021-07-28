import React, {useState, useReducer, Fragment, useEffect} from "react";
import {  AppBar,Toolbar,IconButton, Card, Grid, Slide } from '@material-ui/core';
import { CardContent, Typography,Grow,Paper } from '@material-ui/core';
import TextMessage from "./textMessage";
import ReplyTextAnimation from "./replyTextAnimation";
const ChatAnimation = props => {
const [timeCount, setTimeCount]=useState(0);

useEffect(()=>
{  
    setInterval(()=>{
        setTimeCount(state=>(state +1))
    },1000);
},[]);




return (
    <Fragment>
    <Card  style={{width:"85%", marginTop:"2%",backgroundColor:"#282D34"}}>
    <CardContent>
    <Grid container spacing={3}>
        <TextMessage msg="Hey is your website done yet?"></TextMessage>
    </Grid>
    <Grid container  justifyContent="flex-end" spacing={0}>
      {timeCount===1?ReplyTextAnimation():null}
      {timeCount===2?ReplyTextAnimation():null}
    </Grid>
    <Grid container justifyContent="flex-end">
    {timeCount>2?<TextMessage msg="Hahaha ah not yet.."></TextMessage>:null}
      </Grid>
      </CardContent>
      </Card>
    </Fragment>
);
};



export default ChatAnimation;