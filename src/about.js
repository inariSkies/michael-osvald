import React,{Fragment,useState} from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Card, Paper, Chip, Typography, makeStyles } from "@material-ui/core";
import theme from "./theme";
import "./App.css";


const AboutPage = () => {

  const [langChips, setTLangChips]=useState([
    "Java",
    "C++",
    "C#",
    "Python",
    "Javascript",
    "Html",
    "CSS",
    "TypeScript",
    "SQL/PostgreSQL",
    "Kotlin",
    "Powershell",
    "Visual Basic/Application",
    "XSLT",
    "PHP"]);
  const [platChips, setPlatChips]=useState([
    "NodeJS",
    "React/JS/Native",
    "Heroku",
    "Amazon Web Service",
    "Azure",
    "Firebase",
    "Django",
    "MongoDB",
    "Docker",
    "Java Enterprise Bean",
    "WildFly",
    ".NET",
    "XML",
    "XPath",
    "JSON",
    "TensorFlow",
    "spaCy",
    "Boost",
    "GitHub",
    "GitLab",
    "SourceTree",
    "Bitbucket",
    "Visual Studio/Code",
    "Microsoft Office",
    "Eclipse",
    "Android Studo",
    "PgAdmin",
    "MaterialUI"]);
    
    const cardStyle =makeStyles({
        root:{
        width:'85%',
        marginTop:"2%",
        backgroundColor:'#111', 
        border: '2px solid #ff2a6d',
        borderRadius:'0',
        borderRight:'15px solid #ff2a6d',
        minHeight:"200px",
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        },
        paper:{
          width:'85%',
          marginTop:"2%",
          backgroundColor:'#111',
          borderRadius:'0',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          listStyle: 'none',
          padding: theme.spacing(0.5),
          },
        subheader:
          {
          fontSize:"20px", 
          fontFamily: `'Press Start 2P', cursive`
        },

        chip: {
          margin: theme.spacing(0.5),
        }
      });
      const classes = cardStyle();


  return (
    <MuiThemeProvider theme={theme}>
          <Fragment>
<Card className={classes.root}>
<Typography className={classes.subheader} color="secondary" > Languages:</Typography>
<Paper component="ul" className={classes.paper}>

  {langChips.map(data=>{
  
  return(
  <li key={data}><Chip label={data} clickable color="secondary" variant="default"  className={classes.chip} />
  </li>);
  })
}
</Paper>
<Typography className={classes.subheader} color="secondary" > Platforms:</Typography>
<Paper component="ul" className={classes.paper}>


{platChips.map(data=>{
  
  return(
  <li key={data}><Chip label={data} clickable color="primary" variant="outlined"  className={classes.chip} />
  </li>);
  })
}
</Paper>
</Card>
</Fragment>
    </MuiThemeProvider>
  );
};
export default AboutPage;
