import { createTheme } from "@mui/system";

export const theme = createTheme({
    typography: {
        fontFamily: [
          'Montserrat'
        ].join(','),
        subtitle1: {
          fontSize: '1rem',
          color: "#363636"
        },
        h2: {
          fontSize: '24px'
        },
        body1: {
          fontSize: '1rem'
        },
        body2: {
          fontSize: "18px"
        }
      },
  });