import { createTheme } from "@mui/material/styles";

export const black = "#454545";
export const white = "#e3e3e3";
export const grey = "#878787";
export const appBarHeight = 60;
export const drawerWidth = 240;

export const themeRegular = createTheme({});

export const THEME = (dark: boolean, primaryColor: string) => {
  const tan = primaryColor;
  const paperColorDark = "#696969";
  const paperColorLight = "#ebebeb";

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
        main: tan,
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
            padding: "0 4% !important",
            minHeight: 64,
            display: "flex",
            justifyContent: "space-between",
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
            backgroundColor: tan,
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
