export type DefaultThemeType = 'dark' | 'light';

export type SubColors = {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
};

export type Colors = {
  type: DefaultThemeType;
  divider: string;
  shadow: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
  background: {
    default: string;
    paper: string;
  };
  common: {
    black: string;
    white: string;
  };
  primary: SubColors;
  secondary: SubColors;
  tertiary: SubColors;
  error: SubColors;
  warning: SubColors;
  info: SubColors;
  success: SubColors;
};

export type Spacings = {
  noneSpacing: string;
  xSmallSpacing: string;
  smallSpacing: string;
  mediumSpacing: string;
  largeSpacing: string;
  xLargeSpacing: string;
  xxLargeSpacing: string;
  xxxLargeSpacing: string;
  screenWidth: number;
  screenHeight: number;
};

export type Shapes = {
  smallRadius: string;
  mediumRadius: string;
  largeRadius: string;
  modalRadius: string;
  buttonRadius: string;
};

export type Breakpoints = {
  xSmallScreen: string;
  smallScreen: string;
  mediumScreen: string;
  largeScreen: string;
  xLargeScreen: string;
  xxLargeScreen: string;
};

export type ThemeType = Colors & Spacings & Shapes & Breakpoints;
