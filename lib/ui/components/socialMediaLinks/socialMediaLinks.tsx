import { Button, List, ListItem, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { AppPaper } from "../../paper";

export type SocialMedia =
  | "instagram"
  | "facebook"
  | "soundcloud"
  | "twitter"
  | "vk"
  | "telegram";

type Props = {
  socialMediaLinks: {
    href: string;
    altStringIcon: string;
    socialMedia: SocialMedia;
  }[];
};

export const SocialMediaLinks = (props: Props) => {
  const { socialMediaLinks } = props;

  const theme = useTheme();

  return (
    <AppPaper
      sx={{
        width: { sm: "fit-content" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <List>
        {socialMediaLinks.map((link) => (
          <a style={{ textDecoration: "none" }} href={link.href}>
            <ListItem>
              <Button sx={{ borderRadius: 2, gap: 2, color: theme.palette.text.primary }}>
                <Image
                  src={`/${link.socialMedia}.png`}
                  alt={link.altStringIcon}
                  width={40}
                  height={40}
                />

                {link.socialMedia}
              </Button>
            </ListItem>
          </a>
        ))}
      </List>
    </AppPaper>
  );
};
