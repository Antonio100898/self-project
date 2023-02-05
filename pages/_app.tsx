import { Layout, THEME, themeRegular } from "@/lib/ui";
import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const themeToggle = () => {
    if (isDarkTheme) setIsDarkTheme(false)
    if (!isDarkTheme) setIsDarkTheme(true)
  }

  return (
    <ThemeProvider theme={themeRegular}>
      <ThemeProvider theme={() => THEME(isDarkTheme)}>
        <Layout themeToggle={themeToggle} isDarkTheme={isDarkTheme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ThemeProvider>
  );
}
