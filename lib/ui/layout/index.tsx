import { Box, useTheme } from "@mui/material";
import { ReactNode, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
  children: ReactNode;
  isDarkTheme: boolean;
};
export const Layout = (props: Props) => {
  const { children, isDarkTheme } = props;
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        height: "max",
        minHeight: "100%",
      }}
    >
      {children}
    </Box>
  );
};

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export function DrawerAppBar(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { children, isDarkTheme } = props;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        height: "max",
        minHeight: "100%",
        display: "flex",
      }}
    >
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
           <MenuIcon/>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
