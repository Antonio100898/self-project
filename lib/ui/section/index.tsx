import { classes } from "@/styles/classes";
import { Box, Divider } from "@mui/material";
import { ReactNode } from "react";
import { black, white } from "../theme";

type Props = {
  header?: string;
  children?: ReactNode;
  id?: string;
  isDarkTheme?: boolean;
};

export const AppSection = (props: Props) => {
  const { children, header, id, isDarkTheme } = props;

  return (
    <>
      <section className="section" id={id}>
        <Box sx={classes.sectionHeader}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              translate: "-50% -50%",
              backgroundColor: isDarkTheme ? black : white,
              px: 2,
            }}
          >
            {header}
          </Box>
          <Divider></Divider>
        </Box>
        <Box sx={{px: {xs: 2, sm: 4}}}>{children}</Box>
      </section>
    </>
  );
};
