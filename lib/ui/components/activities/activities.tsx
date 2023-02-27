import { Typography } from "@mui/material";
import { AppPaper } from "../../paper";

type Props = {
  activities: string[];
};

export const Activities = (props: Props) => {
  return (
    <AppPaper sx={{width: 'fit-content', display: 'flex', gap: 4}}>
      {props.activities.map((activity) => (
          <Typography variant="h4" fontSize={{ xs: 20, md: 30 }}>
            {activity}
          </Typography>
      ))}
      </AppPaper>
  );
};
