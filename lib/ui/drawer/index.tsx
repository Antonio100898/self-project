import { black, tan, white } from "../theme";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Switch,
  ListItemText,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightModeRounded";
import DarkModeIcon from "@mui/icons-material/DarkModeRounded";
import { classes } from "@/styles/classes";
import { NavItem } from "@/lib/api/models";

type Props = {
  navItems: NavItem[];
  isDarkTheme: boolean;
  themeToggle: () => void;
  handleDrawerToggle: () => void;
  onNavClick: (route: string) => void;
};

export const AppDrawer = ({
  navItems,
  isDarkTheme,
  themeToggle,
  handleDrawerToggle,
  onNavClick,
}: Props) => {
  const onDrawerNavClick = (route: string) => {
    onNavClick(route);
    handleDrawerToggle();
  };

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
            <ListItem
              onClick={() => onDrawerNavClick(item.href)}
              key={item.label}
              disablePadding
            >
              <ListItemButton sx={{ height: 70 }}>
                <ListItemIcon sx={{color: isDarkTheme? tan : black}} >{item.icon}</ListItemIcon>
                <ListItemText>
                  <Typography letterSpacing={2}>{item.label}</Typography>
                </ListItemText>
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
