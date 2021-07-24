import { createTheme } from "@material-ui/core";
import { palette } from "@material-ui/system";
export default createTheme({
    typeography:{
        useNextVarietes:true,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    },
    palette:{
        primary: {main: "#AAA", contrastText: "#FFF"},
        secondary:{main:"#44A4A4"}
    }
})