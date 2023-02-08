import {  Paper } from "@mui/material";
import { ReactNode } from "react";

export const AppPaper = ({children}: {children: ReactNode}) => {
  return <Paper sx={{padding: 2}}>{children}</Paper>
}