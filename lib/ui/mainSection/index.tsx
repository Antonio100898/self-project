import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import { Activities } from "../components";

type Props = {
  name: string;
  avatar: string;
  activities: string[];
};

export const MainSection = (props: Props) => {
  return (
    <section className="mainSection" id="main-section">
      <Box
        sx={{
          position: "relative",
          height: { xs: "70vw", sm: "50vw", md: "40vw", lg: "30vw" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            zIndex: 100,
            bottom: { xs: -20, md: -40 },
            left: "4%",
          }}
        >
          <Avatar
            src={props.avatar}
            sx={{ width: { xs: 120, md: 200 }, height: { xs: 120, md: 200 } }}
          />
        </Box>
        <Image
          src="/djImage1.jpg"
          alt="image"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ px: "4%", pt: { xs: 3, md: 6 } }}>
        <Typography
          variant="h4"
          fontSize={{ xs: 24, md: 36 }}
          fontWeight="bold"
        >
          {props.name}
        </Typography>
        <Activities activities={props.activities}/>
      </Box>
    </section>
  );
};
