import React,{Fragment} from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Card, CardContent, CardHeader, Typography, makeStyles } from "@material-ui/core";
import theme from "./theme";
import "./App.css";
const AboutPage = () => {
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
          borderRadius:'25px',
          marginBottom:'5px'
         }
      });
      const classes = cardStyle();
  return (
    <MuiThemeProvider theme={theme}>
          <Fragment>

<Card className={classes.root}>
<CardContent>
<Typography>
    About Me
</Typography>
</CardContent>
</Card>
 
</Fragment>
    </MuiThemeProvider>
  );
};
export default AboutPage;
