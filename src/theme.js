import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
import { palette } from "@material-ui/system";
export default createMuiTheme({
    typeography:{
        useNextVarietes:true,
        fontFamily: [
            'Orbitron',
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
        primary: {main: "#D1F7FF", contrastText: "#FFF"},
        secondary:{main:"#005678"},
        pastel:{pink:"#FFDEF2", purple:"#F2E2FF",blue:"#E2EEFF",green:"#DDFFFC",yellow:"#FFFFE3"}
    }
})