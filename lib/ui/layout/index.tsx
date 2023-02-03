import { Box, useTheme } from "@mui/material"
import { ReactNode } from "react"


export const Layout = ({children} : {children: ReactNode}) => {

    const theme = useTheme()

    return (
        <Box sx={{background: theme.palette.background.default, color: theme.palette.text.primary, height: 'max', minHeight: '100%'}}>
            {children}
        </Box>
    )
}