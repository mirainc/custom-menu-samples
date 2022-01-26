import { makeTheme } from "@theme-ui/css/utils";
import { Property } from "csstype";

const heading = {
  color: "text",
  textTransform: "uppercase" as Property.TextTransform,
};

export const theme = makeTheme({
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Sanchez, serif",
    heading: "Manrope, sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    textSecondary: "#ba0c2f",
    background: "#fff",
    border: "#dedede",
    red: "#ba0c2f",
    gray: "#515251",
    lightGray: "#999",
  },
  text: {
    h1: {
      ...heading,
      mb: 5,
      fontSize: 8,
      letterSpacing: ".25rem",
    },
    h2: {
      ...heading,
      mb: 2,
      color: "textSecondary",
      fontSize: 6,
      letterSpacing: ".075rem",
    },
    h3: {
      ...heading,
      fontSize: 4,
      letterSpacing: ".025rem",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
    },
    hr: {
      color: "border",
    },
  },
});

export default theme;
