import { classes } from "@/styles/classes";
import { Box, Divider } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  header?: string;
  children?: ReactNode;
  id?: string;
};

export const AppSection = (props: Props) => {
  const { children, header, id } = props;

  return (
    <>
      <section className="section" id={id}>
        <Box sx={classes.sectionHeader}>{header}</Box>
        {children}
        <Divider
          sx={{ position: "absolute" as "absolute", bottom: 0, width: "100%" }}
        />
      </section>
    </>
  );
};
