import { Colors } from "../utils/types";

const palette = {
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  primary: {
    light: "#E6F4F1",
    main: "#7886BE",
    dark: "#5F8DF7",
    contrastText: "#F6F8FF",
  },
  secondary: {
    light: "#E6FFFA",
    main: "#3AC4B3",
    dark: "#569D92",
    contrastText: "#E8F3F1",
  },
  tertiary: {
    light: "#F5F9FF",
    main: "#5B87DA",
    dark: "#8190BB",
    contrastText: "#E6F4F1",
  },
  quartiary: {
    light: "#57A240",
    main: "#353734",
    dark: "#F4FCEF",
    contrastText: "#777777",
  },

  error: {
    light: "#E57373",
    main: "#F44336",
    dark: "#D32F2F",
    contrastText: "#000000DE",
  },

  warning: {
    light: "#FFB74D",
    main: "#FF9800",
    dark: "#F57C00",
    contrastText: "#000000DE",
  },
  info: {
    light: "#64B5F6",
    main: "#2196F3",
    dark: "#1976D2",
    contrastText: "#FFFFFF",
  },
  success: {
    light: "#81C784",
    main: "#4CAF50",
    dark: "#388E3C",
    contrastText: "#00000087",
  },
};

export const darkColors = {
  type: "dark",
  divider: "#00000012",
  shadow: "#12121270",
  text: {
    primary: "#FFFFFF",
    secondary: "#FFFFFFB3)",
    disabled: "#FFFFFF80)",
    hint: "#FFFFFF80)",
  },
  background: {
    default: "#ADB5BD",
    paper: "#424242",
  },
  ...palette,
} as Colors;

export const lightColors = {
  type: "light",
  divider: "#0000001F",
  shadow: "#29292950",
  text: {
    primary: "#000000DE",
    secondary: "#0000008A",
    disabled: "#00000061",
    hint: "#00000061",
  },
  background: {
    default: "#F5F6F8",
    paper: "#FFFFFF",
  },
  ...palette,
} as Colors;
