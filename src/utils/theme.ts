import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "20px !important",
          background: grey[200],
          outline: "none",
          border: "none",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "20px",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: "4px",
          // borderRadius: "4px",
          borderTopRightRadius: "4px",
          borderTopLeftRadius: "4px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  typography: {
    fontFamily: `'Inter',sans-serif`,
  },
  palette: {
    secondary: {
      main: "#fffff",
    },
  },
});

export default theme;
