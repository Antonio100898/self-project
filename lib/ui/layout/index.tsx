import { Box, useTheme } from "@mui/material";
import { ReactNode, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { AppDrawer } from "../drawer";
import Button from "@mui/material/Button";
import { NavItem } from "@/lib/api/models";
import { MainSection } from "../mainSection";

type Props = {
  children: ReactNode;
  isDarkTheme: boolean;
  themeToggle: () => void;
  navItems?: NavItem[] | null;
  name: string
};

export function WebPageLayout(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <Toolbar
          sx={{ justifyContent: { xs: "flex-start", sm: "space-between" } }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: theme.palette.secondary.light }} />
          </IconButton>
          <Typography
            onClick={() => onNavClick("main-section")}
            variant="h4"
            component="div"
            sx={{
              width: { md: 300 },
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Portfolio
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            <Box sx={{ gap: {sm: 3, md: 6}, display: 'flex'}}>
              {props.navItems?.map((item) => (
                <Button
                  onClick={() => onNavClick(item.href)}
                  key={item.label}
                  sx={{
                    fontSize: { sm: 16, md: 18 },
                    letterSpacing: 2,
                    borderRadius: 2,
                    color: "inherit",
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              width: { md: 300 },
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              sx={{ display: { sm: "block", xs: "none" } }}
              onClick={props.themeToggle}
            >
              {props.isDarkTheme ? (
                <DarkModeIcon color="secondary" />
              ) : (
                <LightModeIcon color="secondary" />
              )}
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
          name={props.name}
          onNavClick={onNavClick}
          handleDrawerToggle={handleDrawerToggle}
          isDarkTheme={props.isDarkTheme}
          navItems={props.navItems}
          themeToggle={props.themeToggle}
        />
      </Drawer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "roboto",
          width: "100%",
        }}
      >
         <MainSection name={props.name} />
        <Box component="main">
          <Toolbar />
          {props.children}
        </Box>
        <Box>FOOTER</Box>
      </Box>
    </Box>
  );
}
