/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";

import { theme } from "../lib/theme";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main sx={{ px: 5, pt: 4, pb: 5 }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
