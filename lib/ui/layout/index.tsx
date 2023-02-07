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
import MenuIcon from "@mui/icons-material/Menu";
import Switch from "@mui/material/Switch";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { appBarHeight, black, tan } from "../theme";
import LightModeIcon from "@mui/icons-material/LightMode";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { AppDrawer } from "../drawer";

type Props = {
  children: ReactNode;
  isDarkTheme: boolean;
  themeToggle: () => void;
};

const drawerWidth = 240;

export type NavItems = {
  label: string;
  href: string;
}[];

const navItems = [
  {
    label: "Top",
    href: "#top",
  },
  {
    label: "Mid",
    href: "#mid",
  },
  {
    label: "Bot",
    href: "#bot",
  },
];

export function Layout(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { children, isDarkTheme, themeToggle } = props;

  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        height: "fit-content",
        color: theme.palette.text.primary,
        background: theme.palette.background.default,
        display: "flex",
      }}
    >
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              minWidth: "fit-content",
              flexGrow: 1,
              color: black,
              fontSize: { xs: 22, lg: 28 },
              fontWeight: "bold",
            }}
          >
            PERSONAL PAGE
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                justifyContent: "space-between",
                width: "70%",
                paddingLeft: 100,
              },
            }}
          >
            <Box sx={{ display: "flex" }}>
              {navItems.map((item) => (
                <Link
                  style={{
                    textDecoration: "none",
                    color: theme.palette.text.primary,
                  }}
                  href={item.href}
                >
                  <Button key={item.label} sx={{ color: black, fontSize: 18 }}>
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>
            <IconButton onClick={themeToggle}>
              {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
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
        <AppDrawer
          handleDrawerToggle={handleDrawerToggle}
          isDarkTheme={isDarkTheme}
          navItems={navItems}
          themeToggle={themeToggle}
        />
      </Drawer>
      <Box component="main" sx={{ p: "0 4%", fontFamily: "roboto" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
