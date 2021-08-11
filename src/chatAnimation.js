import React, {useState, useReducer, Fragment, useEffect} from "react";
import {  AppBar,Toolbar,IconButton, Card, Grid, Slide, makeStyles } from '@material-ui/core';
import { CardContent, Typography,Grow,Paper ,TextField} from '@material-ui/core';
import theme from './theme';
import TextMessage from "./textMessage";
import ReplyTextAnimation from "./replyTextAnimation";
import Typist from 'react-typist';
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
  backgroundColor:'#01012B', 
  border: '2px solid #ff2a6d',
  borderRadius:'0',
  borderRight:'15px solid #ff2a6d',
  minHeight:"200px",
  justifyContent:'flex-end',
  },
  bottom:{
    minHeight:'50px',
    width:'80%',
    marginLeft:'10%',
    marginRight:'10%',
    marginTop:'5px',
   // borderRadius:'25px',
    marginBottom:'5px'
   }
});

const classes = cardStyle();

return (
    <Fragment>

    <Card className={classes.root}>
    <CardContent>
    <Card style={{minHeight:'200px', backgroundColor:'#01012B'}}>
    <CardContent>
    <Grid container  justifyContent="flex-start" flexwrap="nowrap"  spacing={0} style={{paddingRight:"10%"}}>
      {timeCount===1?ReplyTextAnimation():null}
      {timeCount===2?ReplyTextAnimation():null}
    </Grid>
    <Grid container spacing={3}>
    {timeCount>2?  <TextMessage msg="Hey is your website done yet...?" msgColor={theme.palette.secondary.main}></TextMessage>:null}
    </Grid>
    <Grid container justifyContent="flex-end">
    {timeCount>7?<TextMessage msg="Hahaha ah not yet.."  msgColor={theme.palette.primary.main}></TextMessage>:null}
      </Grid>
      </CardContent>
      </Card>
      <Card className={classes.bottom} varient="outlined">
        
        <form  noValidate autoComplete="off">
          <TextField id="standard" style={{width:"100%", height:"100%"}} InputProps={{
            disabled: timeCount<7,
          }} 
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              // Do code here
              ev.preventDefault();
              //<TextMessage msg="TEST"  msgColor={theme.palette.primary.main}></TextMessage>
            }
          }}
          label=  {timeCount>3&&timeCount<7?<Typist>Hahaha ah not yet..</Typist>:null} variant="outlined" />
        </form>
      
        </Card>
      </CardContent>
      </Card>
     
    </Fragment>
);
};



export default ChatAnimation;