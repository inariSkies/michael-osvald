import { createTheme } from "@material-ui/core";
import { palette } from "@material-ui/system";
export default createTheme({
    typeography:{
        useNextVarietes:true
    },
    palette:{
        primary: {main: "#AAA", contrastText: "#FFF"},
        secondary:{main:"#44A4A4"}
    }
})