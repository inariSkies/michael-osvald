import React, {useState, useReducer, Fragment, useEffect} from "react";
import {  AppBar,Toolbar,IconButton, Card, Grid, Slide, makeStyles } from '@material-ui/core';
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



const cardStyle =makeStyles({
  root:{
  width:'85%',
  marginTop:"2%",
  backgroundColor:"#01012B", 
  border: '2px solid #ff2a6d',
  borderRadius:'0',
  borderRight:'15px solid #ff2a6d',
  height:"250px"
  },
});

const classes = cardStyle();

return (
    <Fragment>
    <Card className={classes.root}>
    <CardContent>

    <Grid container  justifyContent="flex-start" flexwrap="nowrap"  spacing={0} style={{paddingRight:"10%"}}>
      {timeCount===1?ReplyTextAnimation():null}
      {timeCount===2?ReplyTextAnimation():null}
    </Grid>
    <Grid container spacing={3}>
    {timeCount>2?  <TextMessage msg="Hey is your website done yet...?" ></TextMessage>:null}
    </Grid>
    <Grid container justifyContent="flex-end">
    {timeCount>4?<TextMessage msg="Hahaha ah not yet.."typist={true}></TextMessage>:null}
      </Grid>
      </CardContent>
      </Card>
    </Fragment>
);
};



export default ChatAnimation;