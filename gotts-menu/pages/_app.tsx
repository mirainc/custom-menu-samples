/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";

import { theme } from "../lib/theme";
import type { AppProps } from "next/app";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main sx={{ px: 5, py: 5 }}>
        <Header />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
