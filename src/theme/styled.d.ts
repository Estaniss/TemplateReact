// import original module declarations
import 'styled-components';
import { DefaultThemeType, SubColors } from '~/utils/types';

declare module 'styled-components' {
  export interface DefaultTheme {
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
    xSmallScreen: string;
    smallScreen: string;
    mediumScreen: string;
    largeScreen: string;
    xLargeScreen: string;
    xxLargeScreen: string;
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
    smallRadius: string;
    mediumRadius: string;
    largeRadius: string;
    modalRadius: string;
    buttonRadius: string;
  }
}
