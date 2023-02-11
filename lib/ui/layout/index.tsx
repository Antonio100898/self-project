import { Box, useTheme } from "@mui/material";
import { ReactNode, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { black } from "../theme";
import LightModeIcon from "@mui/icons-material/LightMode";
import { AppDrawer } from "../drawer";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import NightlifeRoundedIcon from "@mui/icons-material/NightlifeRounded";
import Image from "next/image";

type Props = {
  children: ReactNode;
  isDarkTheme: boolean;
  themeToggle: () => void;
};

const drawerWidth = 240;

export type NavItems = {
  label: string;
  href: string;
  icon: ReactNode;
}[];

const navItems = [
  {
    label: "Music",
    href: "music",
    icon: <HeadphonesRoundedIcon />,
  },
  {
    label: "Events",
    href: "events",
    icon: <NightlifeRoundedIcon />,
  },
  {
    label: "Contact",
    href: "contact",
    icon: (
      <Image
        src="/social-media.png"
        alt="social-media_icon"
        width={30}
        height={30}
      />
    ),
  },
];

export function Layout(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { children, isDarkTheme, themeToggle } = props;

  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const onNavClick = (route: string) => {
    const doc = document.getElementById(route);
    if (doc) {
      window.scrollTo({ top: doc.offsetTop - 50, behavior: "smooth" });
    }
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
              },
            }}
          >
            <Box sx={{ display: "flex", gap: { md: 1 } }}>
              {navItems.map((item) => (
                <IconButton
                  onClick={() => onNavClick(item.href)}
                  key={item.label}
                  sx={{
                    color: black,
                    fontSize: 18,
                    letterSpacing: 2,
                    height: "100%",
                    gap: { s: 0.8, md: 1 },
                  }}
                >
                  {item.icon}
                  <Box sx={{ textAlign: "center" }}>{item.label}</Box>
                </IconButton>
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
          onNavClick={onNavClick}
          handleDrawerToggle={handleDrawerToggle}
          isDarkTheme={isDarkTheme}
          navItems={navItems}
          themeToggle={themeToggle}
        />
      </Drawer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: "0 4%",
          fontFamily: "roboto",
        }}
      >
        <Box component="main">
          <Toolbar />
          {children}
        </Box>
        <Box>FOOTER</Box>
      </Box>
    </Box>
  );
}
