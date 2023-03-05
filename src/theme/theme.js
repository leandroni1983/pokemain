import { createTheme }  from '@mui/material/styles';
import '../index.css'
const theme = createTheme({
    palette:{
        primary:{
            main: '#191845'
        },
        secondary:{
            main:'#865DFF'
        },
        tercero:{
            main:"#E384FF"
        },
        cuarto:{
            main:"#FFA3FD"
        }
    },
    typography: {
        fontFamily:'Nunito,sans-serif',
    },
  });


export default theme