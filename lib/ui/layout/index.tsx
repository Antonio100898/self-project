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
import Button from "@mui/material/Button";
import { NavItem } from "@/lib/api/models";

type Props = {
  children: ReactNode;
  isDarkTheme: boolean;
  themeToggle: () => void;
  navItems?: NavItem[] | null;
  name?: string;
};

export function WebPageLayout(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { children, isDarkTheme, themeToggle, navItems, name } = props;

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
        <Toolbar sx={{justifyContent: {xs: 'flex-start', sm: 'space-between'}}}>
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
              width: {md:300},
              color: black,
              fontSize: { xs: 22, lg: 28 },
              fontWeight: "bold",
            }}
          >
            {name}
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                justifyContent: "space-between",
              },
            }}
          >
            <Box sx={{ display: "flex", gap: { md: 1 } }}>
              {navItems?.map((item) => (
                <Button
                  onClick={() => onNavClick(item.href)}
                  key={item.label}
                  sx={{
                    color: black,
                    fontSize: { sm: 16, md: 18 },
                    letterSpacing: 2,
                    gap: { s: 0.8, md: 1 },
                    borderRadius: 2,
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{width: {md:300}, display: 'flex', justifyContent: 'flex-end'}}>
          <IconButton sx={{display: {sm: "block", xs: "none"}}} onClick={themeToggle}>
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
          width: "100%",
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
