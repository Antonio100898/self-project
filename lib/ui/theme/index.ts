import { createTheme } from "@mui/material/styles";

export const beige = '#DDC3A5'
export const black = '#201E20'
export const tan = '#E0A96D'
export const white = '#e3e3e3'
export const appBarHeight = 60

export const themeRegular = createTheme({})
export const THEME = (dark: boolean) => {
    return createTheme({
        palette: {
            background: {
                default: dark ? black : '#e3e3e3',
                paper: '#696969'
            },
            text: {
                primary: dark ? white : black
            }
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: tan,
                        height: appBarHeight
                    }
                }
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: dark ? black : beige
                    }
                }
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        backgroundColor: dark ? tan : black,
                        padding: 0,
                        margin: 0
                    }
                }
            },
            MuiSwitch: {
                styleOverrides: {
                    track: {
                        backgroundColor: white,
                    },
                    thumb: {
                        color: dark ? white : black,
                    },
                    checked: {
                        color: white
                    }
                }
            }
        }
    })
}