import React, {useState, useReducer, Fragment, useEffect} from "react";

import { MuiThemeProvider, AppBar,Toolbar,IconButton, Card, Paper, responsiveFontSizes,Slide } from '@material-ui/core';
import { CardContent, Typography } from '@material-ui/core';
const TextMessage = props =>{
return (
    <Fragment>
        <CardContent>
         <Typography variant="h5" color="primary">
            {props.msg}
          </Typography>
        </CardContent>
    </Fragment>
);
}
export default TextMessage;