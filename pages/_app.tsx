import { DrawerAppBar, Layout, THEME, themeWrapper } from "@/lib/ui";
import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <ThemeProvider theme={THEME}>
      <ThemeProvider theme={() => themeWrapper(isDarkTheme)}>
        <DrawerAppBar isDarkTheme={isDarkTheme}>
          <Component {...pageProps} />
        </DrawerAppBar>
      </ThemeProvider>
    </ThemeProvider>
  );
}
