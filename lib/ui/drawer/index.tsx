import { black, white } from "../theme";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import {
  Box,
  Divider,
  IconButton,
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
  navItems?: NavItem[] | null;
  isDarkTheme: boolean;
  themeToggle: () => void;
  handleDrawerToggle: () => void;
  onNavClick: (route: string) => void;
  name: string
};

export const AppDrawer = (props: Props) => {

  const onDrawerNavClick = (route: string) => {
    props.onNavClick(route);
    props.handleDrawerToggle();
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={classes.drawerHead}>
        <Typography onClick={() => onDrawerNavClick("main-section")} variant="h6" fontSize={18}>{props.name}</Typography>
        <IconButton
          sx={{
            position: "absolute",
            right: 2,
            color: props.isDarkTheme ? white : black,
          }}
          onClick={props.handleDrawerToggle}
        >
          <CloseIcon sx={{width: 20}}/>
        </IconButton>
      </Box>
      <Divider />
      <Box sx={classes.drawerBody}>
        <List>
          {props.navItems?.map((item) => (
            <ListItem
              onClick={() => onDrawerNavClick(item.href)}
              key={item.label}
              disablePadding
            >
              <ListItemButton sx={{ height: 70, textAlign: 'center' }}>
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
              sx={{ visibility: props.isDarkTheme ? "hidden" : "visible" }}
            />
            <Switch checked={props.isDarkTheme} onChange={props.themeToggle} />
            <DarkModeIcon
              sx={{ visibility: props.isDarkTheme ? "visible" : "hidden" }}
            />
          </ListItem>
        </Box>
      </Box>
    </Box>
  );
};
