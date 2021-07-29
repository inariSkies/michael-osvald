import React, {useState, useReducer, Fragment, useEffect} from "react";

import { MuiThemeProvider, AppBar,Toolbar,IconButton, Card, Paper, responsiveFontSizes,Slide } from '@material-ui/core';
import { CardContent, Typography } from '@material-ui/core';
import { BorderColor } from "@material-ui/icons";
const TextMessage = props =>{

  const textstyle ={
    backgroundColor:"#222",
    width:"85%",
    margin:'10px',
    BorderColor:"#fff"
  }

return (
    <Fragment>
       <Slide direction="up" in={true}  timeout={500}>
        <Card className = "TextMessageBox"  varient="outlined" style={textstyle}>
        <CardContent>
         <Typography variant="h5" color="primary">
            {props.msg}
          </Typography>
        </CardContent>
        </Card>
        </Slide>
    </Fragment>
);
}
export default TextMessage;