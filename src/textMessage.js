import React, {useState, useReducer, Fragment, useEffect} from "react";
import theme from './theme';
import { MuiThemeProvider, AppBar,Toolbar,IconButton, Card, Paper, responsiveFontSizes,Slide } from '@material-ui/core';
import { CardContent, Typography } from '@material-ui/core';
import { BorderColor } from "@material-ui/icons";

const TextMessage = props =>{

  const textstyle ={
   
    backgroundColor:`${props.msgColor}`,
    width:"85%",
    margin:'10px',
    border: '2px solid',
    BorderColor:`${theme.palette.primary.main}`,
   
    borderRadius:'5px',
  }

return (
    <Fragment>
       <Slide direction="up" in={true}  timeout={500}>
        <Card className = "TextMessageBox"  varient="outlined" style={textstyle}>
        <CardContent>
         <Typography variant="h5"  style={{fontColor:"#000", fontFamily: `'Press Start 2P', cursive`}}>
          {props.msg}
          </Typography>
        </CardContent>
        </Card>
        </Slide>
    </Fragment>
);
}
export default TextMessage;