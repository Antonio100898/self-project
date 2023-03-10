import { Paper, SxProps } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  sx?: SxProps;
};

export const AppPaper = ({ children, sx }: Props) => {
  return (
    <Paper sx={{ padding: 2, backdropFilter: "blur(5px)", ...sx }}>
      {children}
    </Paper>
  );
};
