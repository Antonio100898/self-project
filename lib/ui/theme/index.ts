import { createTheme } from "@mui/material/styles";

export const black = "#454545";
export const white = "#e3e3e3";
export const grey = "#878787";
export const appBarHeight = 60;
export const drawerWidth = 240;

export const themeRegular = createTheme({});

export const THEME = (dark: boolean, primaryColor: string) => {
  const paperColorDark = "rgba(105, 105, 105, 0.46)";
  const paperColorLight = "rgba(235, 235, 235, 0.46)";

  return createTheme({
    palette: {
      background: {
        default: dark ? black : white,
        paper: dark ? paperColorDark : paperColorLight,
      },
      text: {
        primary: dark ? white : black,
      },
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: "#c9be9f",
        light: white
      },
      
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            height: appBarHeight,
          },
        },
      },

      MuiToolbar: {
        styleOverrides: {
          root: {
            padding: "0 4% !important",
            minHeight: 64,
            display: "flex",
            justifyContent: "space-between",
            color: white
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: dark ? black : white,
            boxSizing: "border-box",
            width: drawerWidth,
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: primaryColor
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
