import React,{Fragment} from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ChatAnimation from './chatAnimation';
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import theme from "./theme";
import "./App.css";
const HomePage = () => {
  return (
    <MuiThemeProvider theme={theme}>
       <ChatAnimation/>
    </MuiThemeProvider>
  );
};
export default HomePage;
