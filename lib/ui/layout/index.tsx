import { Box, useTheme } from "@mui/material"
import { ReactNode } from "react"


export const Layout = ({children} : {children: ReactNode}) => {

    const theme = useTheme()

    return (
        <Box sx={{height: 'max'}}>
            {children}
        </Box>
    )
}