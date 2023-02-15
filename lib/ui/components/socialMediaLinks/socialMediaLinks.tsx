import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Image from "next/image";
import { AppPaper } from "../../paper";

type Props = {
  socialMediaLinks: {
    href: string;
    iconPath: string;
    altStringIcon: string;
    socialMedia:
      | "instagram"
      | "facebook"
      | "soundcloud"
      | "twitter"
      | "vk"
      | "telegram";
  }[];
};

export const SocialMediaLinks = (props: Props) => {
  const { socialMediaLinks } = props;

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
          <ListItem>
            <ListItemIcon>
              <Image
                src={`/${link.iconPath}.png`}
                alt={link.altStringIcon}
                width={40}
                height={40}
              />
            </ListItemIcon>
            <ListItemText>{link.href}</ListItemText>
          </ListItem>
        ))}
      </List>
    </AppPaper>
  );
};
