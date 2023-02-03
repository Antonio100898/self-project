import { createTheme } from "@mui/material/styles";

export const THEME = createTheme({
    palette: {
        background: {
            default: '#e3e3e3',
            paper: '#696969'
        },
        text: {
            primary: '#1a1a1a'
        }
    }
})

const darkTheme = createTheme({
    palette: {
        background: {
            default: '#303030',
            paper: '#696969'
        },
        text: {
            primary: '#e3e3e3'
        }
    }
})

export const themeWrapper = (isDarkTheme: boolean) => {
    return isDarkTheme? darkTheme : THEME
}