import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { SxProps, Theme } from "@mui/material/styles";
import { useState, useEffect } from "react";

type Props = {
  src: string;
  alt: string;
  sx?: SxProps;
  size?: "lg" | "md" | "sm";
};

export const ImageBox = (props: Props) => {
  const { src, alt, sx, size } = props;

  const sizes = {
    lg: {
      width: { xs: '100%', md: 600 },
      height: 400,
    },
    md: {
      width: 400,
      height: 400,
    },
    sm: {
      width: 200,
      height: 200,
    },
  };

  const [imageSize, setImageSize] = useState<{
    width: string | number | object;
    height: string | number | object;
  }>(sizes.lg);

  useEffect(() => {
    switch (size) {
      case "lg":
        setImageSize(sizes.lg);
        break;
      case "md":
        setImageSize(sizes.md);
        break;
      case "sm":
        setImageSize(sizes.sm);
        break;
      default:
        setImageSize(sizes.lg);
    }
  }, [size]);

  return (
    <Box
      sx={{
        width: imageSize.width,
        height: imageSize.height,
        position: "relative",
        marginY: 2,
        ...sx,
      }}
    >
      <Image style={{ objectFit: "contain" }} fill src={src} alt={alt} />
    </Box>
  );
};
