import { createTheme } from "@mui/material/styles";

export const beige = "#DDC3A5";
export const black = "#454545";
export const tan = "#E0A96D";
export const white = "#e3e3e3";
export const grey = "#878787";
export const appBarHeight = 60;

export const themeRegular = createTheme({});
export const THEME = (dark: boolean) => {
  return createTheme({
    palette: {
      background: {
        default: dark ? black : white,
        paper: "#696969",
      },
      text: {
        primary: dark ? white : black,
      },

    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: tan,
            height: appBarHeight,
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            heigth: appBarHeight,
            padding: "0 4% !important" 
          }
        }
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: dark ? black : beige,
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: dark ? tan : black,
            padding: 0,
            margin: 0,
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            // Controls default (unchecked) color for the thumb
            color: black,
          },
          colorPrimary: {
            "&.Mui-checked": {
              // Controls checked color for the thumb
              color: white,
            },
          },
          track: {
            // Controls default (unchecked) color for the track
            backgroundColor: grey,
            ".Mui-checked.Mui-checked + &": {
              // Controls checked color for the track
              opacity: 0.7,
              backgroundColor: grey,
            },
          },
        },
      },
    },
  });
};
