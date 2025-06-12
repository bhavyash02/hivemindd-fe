import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomColorShades {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface Palette {
    custom: {
      primaryBlue: CustomColorShades;
      secondaryBlue: CustomColorShades;
      AccentPink: CustomColorShades;
      Green: CustomColorShades;
      yellow: CustomColorShades;
      red: CustomColorShades;
      netural: CustomColorShades;
    };
  }

  interface PaletteOptions {
    custom?: {
      primaryBlue: CustomColorShades;
      secondaryBlue: CustomColorShades;
      AccentPink: CustomColorShades;
      Green: CustomColorShades;
      yellow: CustomColorShades;
      red: CustomColorShades;
      netural: CustomColorShades;
    };
  }
}
