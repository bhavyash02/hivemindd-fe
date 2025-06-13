import { createTheme } from "@mui/material/styles";

// Define the custom colors
const customColors = {
  primaryBlue: {
    50: "#E7E6FE",
    100: "#B4B1FC",
    200: "#908CFA",
    300: "#5D57F8",
    400: "#3D36F7",
    500: "#0D04F5",
    600: "#0C04DF",
    700: "#0903AE",
    800: "#070287",
    900: "#050267",
  },
  secondaryBlue: {
    50: "#E6E6EE",
    100: "#B2B1CB",
    200: "#8C8BB2",
    300: "#58558F",
    400: "#373579",
    500: "#050258",
    600: "#050250",
    700: "#04013E",
    800: "#030130",
    900: "#020125",
  },
  AccentPink: {
    50: "#FFE7FF",
    100: "#FFB4FD",
    200: "#FF8FFD",
    300: "#FE5CFC",
    400: "#FE3DFB",
    500: "#FE0CFA",
    600: "#E70BE4",
    700: "#B409B2",
    800: "#8C078A",
    900: "#6B0569",
  },
  Green: {
    50: "#E6FBEA",
    100: "#B0F3BC",
    200: "#8AED9C",
    300: "#54E56F",
    400: "#33E053",
    500: "#00D828",
    600: "#00C524",
    700: "#00991C",
    800: "#007716",
    900: "#005B11",
  },
  yellow: {
    50: "#FFFBEB",
    100: "#FEF3C7",
    200: "#FDE68A",
    300: "#F8D667",
    400: "#EDC229",
    500: "#EDC229",
    600: "#D28D06",
    700: "#B47009",
    800: "#92400E",
    900: "#78350F",
  },
  red: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FEBABA",
    300: "#FB9494",
    400: "#CA786E",
    500: "#DE6666",
    600: "#D73333",
    700: "#B91C1C",
    800: "#7F1D1D",
    900: "#7F1D1D",
  },
  netural: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    // main
    900: "#111111",
  },
};

// Create the theme
const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  palette: {
    primary: {
      main: "#0D04F5",
    },
    custom: {
      ...customColors,
    },
  },
} as any);

export default theme;
