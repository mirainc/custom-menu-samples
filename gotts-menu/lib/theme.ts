import { makeTheme } from "@theme-ui/css/utils";
import { Property } from "csstype";

const heading = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  textTransform: "uppercase" as Property.TextTransform,
};

export const theme = makeTheme({
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Sanchez, serif",
    heading: "Manrope, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    textPrimary: "#ba0c2f",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6",
    border: "#dedede",
  },
  text: {
    h1: {
      ...heading,
      mb: 6,
      fontSize: 8,
    },
    h2: {
      ...heading,
      mb: 2,
      color: "textPrimary",
      fontSize: 6,
    },
    h3: {
      ...heading,
      fontSize: 4,
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    hr: {
      color: "border",
    },
    ul: {
      padding: 0,
    },
  },
});

export default theme;
