import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";

type Props = {
  name: string;
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
            bottom: { xs: -60, md: -80 },
            left: "4%",
          }}
        >
          <Avatar
            sx={{ width: { xs: 200, md: 300 }, height: { xs: 200, md: 300 } }}
          />
          <Typography
            variant="h4"
            fontSize={{ xs: 24, md: 36 }}
            fontWeight="bold"
          >
            {props.name}
          </Typography>
        </Box>
        <Image
          src="/djImage1.jpg"
          alt="image"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
    </section>
  );
};
