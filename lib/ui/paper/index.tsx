import { Paper } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  sx?: object;
};

export const AppPaper = ({ children, sx }: Props) => {
  return (
    <Paper sx={{ padding: 2, ...sx }}>
      {children}
    </Paper>
  );
};
