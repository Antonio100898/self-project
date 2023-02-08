import { black, tan } from "../theme";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Box, Divider, IconButton, Switch, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightModeRounded";
import DarkModeIcon from "@mui/icons-material/DarkModeRounded";
import Link from "next/link";
import { NavItems } from "../layout";
import { classes } from "@/styles/classes";

type Props = {
  navItems: NavItems;
  isDarkTheme: boolean;
  themeToggle: () => void;
  handleDrawerToggle: () => void;
};

export const AppDrawer = (props: Props) => {
  const { navItems, isDarkTheme, themeToggle, handleDrawerToggle } = props;

  const onClick = (route: string) => {
    const doc = document.getElementById(route);
    if (doc) {
      window.scrollTo({top: doc.offsetTop - 70, behavior:'smooth'});
      handleDrawerToggle();
    }
  }

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={classes.drawerHead}>
        <Typography variant="h6">Menu</Typography>
        <IconButton
          sx={{
            position: "absolute",
            right: 2,
            color: isDarkTheme ? tan : black,
          }}
          onClick={handleDrawerToggle}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={classes.drawerBody}>
        <List>
          {navItems.map((item) => (
              <ListItem onClick={() => onClick(item.href)} key={item.label} disablePadding>
                <ListItemButton
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography letterSpacing={2}>{item.label}</Typography>
                </ListItemButton>
              </ListItem>
          ))}
        </List>
        <Box>
          <Divider sx={{ mb: 4 }} />
          <ListItem sx={{ justifyContent: "center" }} disablePadding>
            <LightModeIcon
              sx={{ visibility: isDarkTheme ? "hidden" : "visible" }}
            />
            <Switch checked={isDarkTheme} onChange={themeToggle} />
            <DarkModeIcon
              sx={{ visibility: isDarkTheme ? "visible" : "hidden" }}
            />
          </ListItem>
        </Box>
      </Box>
    </Box>
  );
};
