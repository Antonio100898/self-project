import Image from "next/image";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
import { useState, useEffect } from "react";

type Props = {
  src: string;
  alt: string;
  sx?: SxProps;
};

export const ImageBox = (props: Props) => {
  const { src, alt, sx } = props;

  return (
    <Box
      sx={{
        width: {xs: '100%', sm:300, md: 400, lg: 500},
        height: {xs: '50vw',sm:200, md: 260, lg: 320},
        position: "relative",
        marginY: 2,
        ...sx,
      }}
    >
      <Image style={{ objectFit: "contain" }} fill src={src} alt={alt} />
    </Box>
  );
};
